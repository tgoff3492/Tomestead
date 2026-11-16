/* Tomestead reading calendar: a month-by-month calendar where every day you read lights up.
   A day counts when you log progress, time a reading session, start or finish a book, save a
   quote, or mark the day yourself. Streaks: the run of days in a row up to today (or yesterday,
   since today isn't over yet) and the longest run ever. */
window.TomesteadCalendar = function (api) {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const esc = api.esc;
  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNum = (iso) => { const [y, m, d] = iso.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 86400000); };
  const isoOf = (n) => new Date(n * 86400000).toISOString().slice(0, 10);
  const pad = (n) => String(n).padStart(2, '0');
  const mins = (m) => (m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}` : `${m} min`);

  let view = null;      // { y, m } month on screen (m 0–11)
  let picked = null;    // the day whose details show under the grid

  // ---------- what happened on each day ----------
  function gather() {
    const days = new Map();   // iso → { events: [], minutes, finished: [], manual }
    const at = (d) => { if (!days.has(d)) days.set(d, { events: [], minutes: 0, finished: [], manual: false }); return days.get(d); };
    for (const b of api.books()) {
      const dates = api.datesOf(b);
      dates.forEach((d) => { if (ISO.test(d)) { const e = at(d); e.events.push({ kind: 'finished', b }); e.finished.push(b); } });
      if (ISO.test(b.started || '')) at(b.started).events.push({ kind: 'started', b });
      if (ISO.test(b.stopped || '') && api.statusOf(b) === 'dnf') at(b.stopped).events.push({ kind: 'stopped', b });
      for (const q of (Array.isArray(b.quotes) ? b.quotes : [])) if (ISO.test(q.at || '')) at(q.at).events.push({ kind: 'quote', b });
      for (const l of (Array.isArray(b.log) ? b.log : [])) {
        if (!l || !ISO.test(l.d || '')) continue;
        const e = at(l.d);
        if (l.m > 0) { e.minutes += l.m; e.events.push({ kind: 'time', b, m: l.m }); }
        if (l.p != null && l.p !== '') e.events.push({ kind: 'progress', b, p: l.p });
      }
    }
    for (const d of api.marked()) if (ISO.test(d)) at(d).manual = true;
    return days;
  }
  const lit = (e) => !!e && (e.manual || e.events.length > 0);
  function level(e) {
    if (!lit(e)) return 0;
    if (e.minutes >= 60) return 4;
    if (e.minutes >= 30 || e.finished.length) return 3;
    if (e.minutes >= 10 || e.events.length > 1) return 2;
    return 1;
  }

  function streaks(days, today) {
    const on = (n) => lit(days.get(isoOf(n)));
    const t = dayNum(today);
    // today still counts as "in progress": a streak through yesterday is alive until today ends
    let cur = 0, n = on(t) ? t : t - 1;
    while (on(n)) { cur++; n--; }
    const all = [...days.keys()].filter((d) => lit(days.get(d))).map(dayNum).sort((a, b) => a - b);
    let best = 0, run = 0, prev = null;
    for (const d of all) { run = prev !== null && d === prev + 1 ? run + 1 : 1; best = Math.max(best, run); prev = d; }
    return { cur, best, total: all.length, readToday: on(t) };
  }

  // the current streak in a few words (for the fireside, the stats line)
  function summary() {
    const s = streaks(gather(), api.today());
    return s;
  }

  // ---------- the dialog ----------
  function ensureDialog() {
    let dlg = document.getElementById('calDialog');
    if (dlg) return dlg;
    dlg = document.createElement('dialog');
    dlg.id = 'calDialog'; dlg.className = 'paper cal-dialog';
    dlg.setAttribute('aria-labelledby', 'calTitle');
    dlg.innerHTML = `<article>
      <div class="cal-head">
        <h2 id="calTitle">Reading calendar</h2>
        <button type="button" class="cal-x" data-close aria-label="Close">×</button>
      </div>
      <div class="cal-stats" id="calStats"></div>
      <div class="cal-nav">
        <button type="button" class="cal-step" data-cal="-1" aria-label="Previous month">‹</button>
        <h3 id="calMonth" aria-live="polite"></h3>
        <button type="button" class="cal-step" data-cal="1" aria-label="Next month">›</button>
        <button type="button" class="cal-today linkbtn ink" data-cal="today">Today</button>
      </div>
      <div class="cal-grid" id="calGrid" role="grid"></div>
      <div class="cal-legend"><span>Less</span><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i><span>More</span><span class="cal-key-star">★ finished a book</span></div>
      <section class="cal-day" id="calDay" aria-live="polite"></section>
      <p class="cal-note">A day lights up when you update your progress, time a reading session, start or finish a book, save a quote, or mark it yourself.</p>
    </article>`;
    document.body.appendChild(dlg);
    dlg.querySelector('[data-close]').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg) { dlg.close(); return; }
      const step = e.target.closest('[data-cal]');
      if (step) {
        const v = step.dataset.cal;
        if (v === 'today') { const t = api.today(); view = { y: +t.slice(0, 4), m: +t.slice(5, 7) - 1 }; picked = t; }
        else { const k = view.y * 12 + view.m + Number(v); view = { y: Math.floor(k / 12), m: k % 12 }; picked = null; }
        render(); return;
      }
      const cell = e.target.closest('[data-day]');
      if (cell) { picked = cell.dataset.day; render(); return; }
      const mark = e.target.closest('[data-mark]');
      if (mark) { api.toggleMark(mark.dataset.mark); render(); return; }
      const bk = e.target.closest('[data-book]');
      if (bk) { dlg.close(); api.openBook(bk.dataset.book); }
    });
    // swipe the grid sideways to change month
    let sx = null;
    const grid = dlg.querySelector('#calGrid');
    grid.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    grid.addEventListener('touchend', (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 60) { const k = view.y * 12 + view.m + (dx < 0 ? 1 : -1); view = { y: Math.floor(k / 12), m: k % 12 }; picked = null; render(); }
    });
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (e.target.closest && e.target.closest('input,textarea')) return;
        const k = view.y * 12 + view.m + (e.key === 'ArrowRight' ? 1 : -1); view = { y: Math.floor(k / 12), m: k % 12 }; picked = null; render();
      }
    });
    return dlg;
  }

  function render() {
    const dlg = ensureDialog();
    const days = gather(), today = api.today(), tn = dayNum(today);
    const s = streaks(days, today);
    $('#calStats', dlg).innerHTML = `
      <div class="cal-stat"><b>${s.cur}</b><span>${s.cur === 1 ? 'day' : 'days'} in a row</span></div>
      <div class="cal-stat"><b>${s.best}</b><span>longest streak</span></div>
      <div class="cal-stat"><b>${monthCount(days, view)}</b><span>days read in ${MONTHS[view.m].slice(0, 3)}</span></div>
      ${s.cur && !s.readToday ? '<p class="cal-keep">Read today to keep your streak going.</p>' : ''}`;
    $('#calMonth', dlg).textContent = `${MONTHS[view.m]} ${view.y}`;
    // the grid: weeks start on Sunday
    const first = dayNum(`${view.y}-${pad(view.m + 1)}-01`);
    const lead = new Date(first * 86400000).getUTCDay();
    const len = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate();
    let html = DOW.map((d) => `<div class="cal-dow" role="columnheader">${d}</div>`).join('');
    for (let i = 0; i < lead; i++) html += '<div class="cal-pad"></div>';
    for (let k = 1; k <= len; k++) {
      const iso = `${view.y}-${pad(view.m + 1)}-${pad(k)}`, n = first + k - 1, e = days.get(iso);
      const lv = level(e), fin = e ? e.finished : [];
      const cls = ['cal-cell', lv ? `l${lv}` : '', n === tn ? 'today' : '', n > tn ? 'future' : '', iso === picked ? 'picked' : ''].filter(Boolean).join(' ');
      const label = `${MONTHS[view.m]} ${k}${lv ? ', read' : ''}${fin.length ? `, finished ${fin.length === 1 ? 'a book' : fin.length + ' books'}` : ''}`;
      html += `<button type="button" class="${cls}" data-day="${iso}" aria-label="${esc(label)}" ${n > tn ? 'disabled' : ''}>
        <span class="cal-n">${k}</span>${fin.length ? `<span class="cal-star" aria-hidden="true">${'★'.repeat(Math.min(3, fin.length))}</span>` : ''}
        ${e && e.minutes ? `<span class="cal-min" aria-hidden="true">${e.minutes >= 60 ? Math.round(e.minutes / 6) / 10 + 'h' : e.minutes + 'm'}</span>` : ''}
      </button>`;
    }
    $('#calGrid', dlg).innerHTML = html;
    renderDay(days, today);
  }
  function monthCount(days, v) {
    const pre = `${v.y}-${pad(v.m + 1)}-`;
    let n = 0; for (const [d, e] of days) if (d.startsWith(pre) && lit(e)) n++;
    return n;
  }
  function renderDay(days, today) {
    const box = $('#calDay', ensureDialog());
    if (!picked || picked.slice(0, 7) !== `${view.y}-${pad(view.m + 1)}`) { box.innerHTML = ''; box.hidden = true; return; }
    box.hidden = false;
    const e = days.get(picked);
    const [y, m, d] = picked.split('-').map(Number);
    const head = new Date(y, m - 1, d).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: y === +today.slice(0, 4) ? undefined : 'numeric' });
    const title = (b) => `<button type="button" class="linkbtn ink cal-book" data-book="${esc(b.id)}">${esc(b.title)}</button>`;
    // one line per book per kind (several progress updates on a day show the furthest)
    const seen = new Map();
    for (const ev of (e ? e.events : [])) {
      const k = ev.kind + '|' + ev.b.id;
      if (ev.kind === 'time' && seen.has(k)) { seen.get(k).m += ev.m; continue; }
      if (ev.kind === 'progress' && seen.has(k)) { seen.get(k).p = Math.max(Number(seen.get(k).p) || 0, Number(ev.p) || 0); continue; }
      seen.set(k, { ...ev });
    }
    const order = { finished: 0, started: 1, time: 2, progress: 3, quote: 4, stopped: 5 };
    const lines = [...seen.values()].sort((a, b) => order[a.kind] - order[b.kind]).map((ev) => {
      const b = ev.b;
      if (ev.kind === 'finished') return `<li class="ev-fin"><span class="ev-i">★</span> Finished ${title(b)}</li>`;
      if (ev.kind === 'started') return `<li><span class="ev-i">❧</span> Started ${title(b)}</li>`;
      if (ev.kind === 'time') return `<li><span class="ev-i">⏱</span> Read ${mins(ev.m)} of ${title(b)}</li>`;
      if (ev.kind === 'progress') return `<li><span class="ev-i">↦</span> Reached ${api.formatOf(b) === 'print' ? `page ${ev.p}${b.pages ? ` of ${b.pages}` : ''}` : `${ev.p}%`} in ${title(b)}</li>`;
      if (ev.kind === 'quote') return `<li><span class="ev-i">❝</span> Saved a quote from ${title(b)}</li>`;
      if (ev.kind === 'stopped') return `<li><span class="ev-i">·</span> Set aside ${title(b)}</li>`;
      return '';
    }).join('');
    const manual = e && e.manual;
    const derived = e && e.events.length > 0;
    const future = dayNum(picked) > dayNum(today);
    let act = '';
    if (!future) {
      if (manual) act = `<button type="button" class="btn btn-ghost btn-sm" data-mark="${picked}">${derived ? 'Remove my mark' : 'Unmark this day'}</button>`;
      else if (!derived) act = `<button type="button" class="btn btn-ink btn-sm" data-mark="${picked}">I read this day</button>`;
    }
    box.innerHTML = `<h4>${esc(head)}</h4>
      ${lines ? `<ul class="cal-events">${lines}</ul>` : `<p class="meta">${manual ? 'You marked this as a reading day.' : future ? 'Still to come.' : 'Nothing logged this day.'}</p>`}
      ${manual && lines ? '<p class="meta cal-marked">You also marked it yourself.</p>' : ''}
      ${act ? `<div class="cal-acts">${act}</div>` : ''}`;
  }

  function open(day) {
    const t = day && ISO.test(day) ? day : api.today();
    view = { y: +t.slice(0, 4), m: +t.slice(5, 7) - 1 };
    picked = t;
    render();
    const dlg = ensureDialog();
    if (!dlg.open) dlg.showModal();
  }
  function refresh() { const dlg = document.getElementById('calDialog'); if (dlg && dlg.open) render(); }

  return { open, refresh, summary, streaks: () => streaks(gather(), api.today()) };
};
