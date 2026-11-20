/* Tomestead memories: your own reading coming back to you.
   - On this day: once a day, if you finished, started or saved a line from a book on this date in an
     earlier year (or failing that, this same week), a small postcard says so when the app opens.
   - The reading calendar shows the same thing for any day you tap ("On this day in other years").
   Both are worked out from the library itself, so nothing new is stored but the day the postcard
   was last shown on this device. */
window.TomesteadMemories = function (api) {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const esc = api.esc;
  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  const SEEN = 'tomestead.otd';
  const RANK = { finished: 0, quote: 1, started: 2, stopped: 3 };
  const dayNum = (iso) => { const [y, m, d] = iso.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 86400000); };

  // every dated thing that happened, as { date, kind, b, q }
  function events() {
    const out = [];
    for (const b of api.books()) {
      for (const d of api.datesOf(b)) if (ISO.test(d)) out.push({ date: d, kind: 'finished', b, reread: api.datesOf(b).filter(x => x < d).length > 0 });
      if (ISO.test(b.started || '')) out.push({ date: b.started, kind: 'started', b });
      if (ISO.test(b.stopped || '') && api.statusOf(b) === 'dnf') out.push({ date: b.stopped, kind: 'stopped', b });
      for (const q of (Array.isArray(b.quotes) ? b.quotes : [])) if (q && ISO.test(q.at || '') && String(q.text || '').trim()) out.push({ date: q.at, kind: 'quote', b, q });
    }
    return out;
  }
  // what happened on this month and day in earlier years; with nothing on the day itself, the same week
  function onThisDay(today = api.today()) {
    const y = +today.slice(0, 4), md = today.slice(5);
    const all = events().filter(e => +e.date.slice(0, 4) < y);
    // Feb 28 in a year without a 29th also brings back the 29ths
    const leap = (n) => (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0;
    const same = (e) => e.date.slice(5) === md || (md === '02-28' && !leap(y) && e.date.slice(5) === '02-29');
    let hits = all.filter(same), week = false;
    if (!hits.length) {
      // the same week: within three days either side of this date, in its own year
      hits = all.filter(e => { const ey = +e.date.slice(0, 4), d = Math.abs(dayNum(e.date) - dayNum(`${ey}${today.slice(4)}`.replace(/-02-29$/, '-02-28'))); return d > 0 && d <= 3; });
      week = hits.length > 0;
    }
    hits.sort((a, b) => b.date.localeCompare(a.date) || RANK[a.kind] - RANK[b.kind]);
    // one memory per book per year (a finish beats a quote beats a start)
    const seen = new Set(), list = [];
    for (const e of [...hits].sort((a, b) => b.date.slice(0, 4).localeCompare(a.date.slice(0, 4)) || RANK[a.kind] - RANK[b.kind])) {
      const k = e.b.id + '|' + e.date.slice(0, 4);
      if (seen.has(k)) continue;
      seen.add(k); list.push(e);
    }
    return { list, week, year: y };
  }
  function ago(e, year, week) {
    const n = year - +e.date.slice(0, 4);
    const when = n === 1 ? 'A year ago' : `${n} years ago`;
    return week ? `${when} this week` : `${when} today`;
  }
  function sentence(e, year, week) {
    const t = `<i>${esc(e.b.title)}</i>`, when = ago(e, year, week);
    if (e.kind === 'finished') return `${when} you ${e.reread ? 'finished rereading' : 'finished'} ${t}${e.b.author ? ` by ${esc(e.b.author)}` : ''}.`;
    if (e.kind === 'started') return `${when} you started ${t}${e.b.author ? ` by ${esc(e.b.author)}` : ''}.`;
    if (e.kind === 'stopped') return `${when} you set ${t} aside.`;
    return `${when} you saved this line from ${t}:`;
  }
  const clip = (s, n) => { s = String(s).trim().replace(/\s+/g, ' '); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; };

  // ---------- the postcard ----------
  let card = null, at = 0, data = null;
  function build() {
    if (card) return card;
    card = document.createElement('aside');
    card.id = 'otd'; card.className = 'otd paper-panel'; card.hidden = true;
    card.setAttribute('aria-live', 'polite'); card.setAttribute('aria-label', 'On this day');
    card.innerHTML = `<button type="button" class="otd-x" data-otd="close" aria-label="Close">×</button><div class="otd-body"></div>`;
    document.body.appendChild(card);
    card.addEventListener('click', (e) => {
      const a = e.target.closest('[data-otd]'); if (!a) return;
      const k = a.dataset.otd;
      if (k === 'close') hide();
      else if (k === 'next') { at = (at + 1) % data.list.length; paint(); }
      else if (k === 'open') { const id = data.list[at].b.id; hide(); api.openBook(id); }
    });
    return card;
  }
  function paint() {
    const e = data.list[at], b = e.b, n = data.list.length;
    const stars = e.kind === 'finished' && b.rating ? `<span class="otd-stars" aria-label="${b.rating} stars">${api.starsHTML(b.rating)}</span>` : '';
    const line = e.kind === 'quote' ? `<blockquote class="otd-q">“${esc(clip(e.q.text, 220))}”${e.q.where ? `<span class="otd-where">${esc(e.q.where)}</span>` : ''}</blockquote>` : '';
    $('.otd-body', card).innerHTML = `
      <div class="otd-row">
        <span class="otd-cover" aria-hidden="true">${api.thumbHTML(b, 'M')}</span>
        <div class="otd-text">
          <p class="otd-eyebrow">On this day · ${esc(e.date.slice(0, 4))}</p>
          <p class="otd-say">${sentence(e, data.year, data.week)}</p>
          ${stars}
        </div>
      </div>
      ${line}
      <div class="otd-acts">
        <button type="button" class="linkbtn ink" data-otd="open">Open the book</button>
        ${n > 1 ? `<button type="button" class="linkbtn ink" data-otd="next">Another memory (${at + 1} of ${n}) ›</button>` : ''}
      </div>`;
    api.wireThumbs(card);
  }
  function hide() { if (!card) return; card.classList.remove('show'); setTimeout(() => { card.hidden = true; }, 400); }

  // once a day per device, after the title screen is gone and nothing else is asking for attention
  function maybeShow() {
    const today = api.today();
    let last = null; try { last = localStorage.getItem(SEEN); } catch {}
    if (last === today) return;
    data = onThisDay(today);
    if (!data.list.length) return;
    let tries = 0;
    const tryNow = () => {
      if (++tries > 80) return;
      const busy = document.getElementById('rm-veil') || document.querySelector('dialog[open]') || document.getElementById('gate')
        || document.documentElement.classList.contains('ritual-on') || document.documentElement.classList.contains('cz-on')
        || (document.getElementById('rm-card') && !document.getElementById('rm-card').hidden && !document.getElementById('room3d').hidden)
        || (document.getElementById('reader') && !document.getElementById('reader').hidden);
      if (busy) { setTimeout(tryNow, 1500); return; }
      try { localStorage.setItem(SEEN, today); } catch {}
      build(); at = 0; paint();
      card.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('show')));
      // it's a passing note: any tap elsewhere (a station, the shelf, a menu) puts it away
      const away = (e) => { if (card.contains(e.target)) return; document.removeEventListener('pointerdown', away, true); hide(); };
      setTimeout(() => document.addEventListener('pointerdown', away, true), 400);
    };
    setTimeout(tryNow, 2600);
  }

  // ---------- for the reading calendar: other years on a given day ----------
  function sameDayOtherYears(iso) {
    const md = iso.slice(5), y = iso.slice(0, 4);
    const by = new Map();
    for (const e of events()) {
      if (e.date.slice(5) !== md || e.date.slice(0, 4) === y) continue;
      const k = e.date.slice(0, 4);
      if (!by.has(k)) by.set(k, []);
      by.get(k).push(e);
    }
    return [...by].sort((a, b) => b[0].localeCompare(a[0])).map(([year, list]) => ({ year, list: list.sort((a, b) => RANK[a.kind] - RANK[b.kind]) }));
  }

  return { onThisDay, maybeShow, sameDayOtherYears, hide };
};
