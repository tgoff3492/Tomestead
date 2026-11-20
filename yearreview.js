/* Tomestead year in review: what you read in a year (or all time), drawn from
   your own library. Every time you finished a book counts, rereads included. */
window.TomesteadYear = function (api) {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const esc = api.esc;
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  const dayNum = (iso) => { const [y, m, d] = iso.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 86400000); };
  const fmtNum = (n) => Math.round(n).toLocaleString();
  let sel = null;

  function pickDefault() {
    const ys = api.yearsAvailable();
    const now = api.thisYear();
    const has = (y) => api.books().some(b => api.datesOf(b).some(d => d.slice(0, 4) === y));
    if (has(now)) return now;
    return ys.find(has) || now;
  }

  function gather(scope) {
    const all = scope === 'all';
    const books = api.books();
    const finishes = [];
    for (const b of books) {
      const dates = api.datesOf(b);
      const first = [...dates].sort()[0];
      for (const d of dates) if (all || d.slice(0, 4) === scope) finishes.push({ b, date: d, reread: d !== first });
    }
    finishes.sort((p, q) => p.date.localeCompare(q.date));
    const uniq = [...new Set(finishes.map(f => f.b))];
    const audio = (b) => api.formatOf(b) === 'audio';
    const pages = finishes.reduce((t, f) => t + (audio(f.b) ? 0 : (f.b.pages || 0)), 0);
    const hours = finishes.reduce((t, f) => t + (audio(f.b) ? (Number(f.b.hours) || 0) : 0), 0);
    const rated = uniq.filter(b => b.rating);
    const avg = rated.length ? rated.reduce((t, b) => t + b.rating, 0) / rated.length : 0;
    const months = Array(12).fill(0);
    finishes.forEach(f => { const m = parseInt(f.date.slice(5, 7), 10); if (m >= 1 && m <= 12) months[m - 1]++; });
    const byYear = new Map();
    finishes.forEach(f => byYear.set(f.date.slice(0, 4), (byYear.get(f.date.slice(0, 4)) || 0) + 1));
    const stars = [5, 4, 3, 2, 1].map(n => ({ n, c: rated.filter(b => Math.ceil(b.rating) === n).length }));   // a half star counts with the star it's on
    const count = (arr) => { const m = new Map(); arr.forEach(k => { if (k) m.set(k, (m.get(k) || 0) + 1); }); return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])); };
    const genres = count(uniq.map(b => b.genre && b.genre.trim()));
    const tags = count(uniq.flatMap(b => api.tagsOf(b)));
    const authors = count(uniq.map(b => b.author && b.author.trim())).filter(([, c]) => c > 1);
    const formats = count(uniq.map(b => api.formatOf(b)));
    const withLen = uniq.filter(b => api.pagesOf(b) > 0).sort((a, b) => api.pagesOf(b) - api.pagesOf(a));
    // quickest: the read that has both a start and a finish date
    let quickest = null;
    for (const f of finishes) {
      const st = f.b.started;
      if (!st || !ISO.test(st) || !ISO.test(f.date) || f.date !== f.b.finished || st > f.date) continue;
      const days = dayNum(f.date) - dayNum(st) + 1;
      if (!quickest || days < quickest.days) quickest = { b: f.b, days };
    }
    const dated = finishes.filter(f => ISO.test(f.date));
    const inScope = (d) => !!d && (all || String(d).slice(0, 4) === scope);
    return {
      finishes, uniq, pages, hours, avg, rated, months, byYear, stars, genres, tags, authors, formats, withLen, quickest,
      first: dated[0], last: dated[dated.length - 1],
      favorites: uniq.filter(b => b.rating === 5),
      rereads: finishes.filter(f => f.reread).length,
      setAside: books.filter(b => api.statusOf(b) === 'dnf' && inScope(b.stopped)).length,
      quotes: books.reduce((t, b) => t + (Array.isArray(b.quotes) ? b.quotes.filter(q => inScope(q.at)).length : 0), 0),
      reviews: uniq.filter(b => String(b.review || '').trim()).length,
    };
  }

  const tile = (num, label) => `<div class="yr-tile"><span class="yr-num">${num}</span><span class="yr-lbl">${label}</span></div>`;
  // one hue for every bar: these are amounts, not categories
  function hbars(rows, label) {
    const max = Math.max(1, ...rows.map(r => r.c));
    return `<div class="yr-hbars" role="list" aria-label="${esc(label)}">${rows.map(r => `
      <div class="yr-hrow" role="listitem"><span class="yr-hlabel">${r.label}</span>
        <span class="yr-htrack"><span class="yr-hbar" style="width:${r.c ? Math.max(3, (r.c / max) * 100) : 0}%"></span></span>
        <span class="yr-hval">${r.c}</span></div>`).join('')}</div>`;
  }
  function columns(cols, label) {
    const max = Math.max(1, ...cols.map(c => c.c));
    return `<div class="yr-cols" role="list" aria-label="${esc(label)}">${cols.map(c => `
      <div class="yr-col" role="listitem" tabindex="0" data-tip="${esc(c.tip)}" aria-label="${esc(c.tip)}">
        <span class="yr-colbar${c.peak ? ' peak' : ''}" style="height:${c.c ? Math.max(4, (c.c / max) * 100) : 0}%"></span>
        ${c.peak && c.c ? `<span class="yr-peak" style="bottom:calc(${(c.c / max) * 100}% + 4px)">${c.c}</span>` : ''}
        <span class="yr-colx" aria-hidden="true">${esc(c.label)}</span>
      </div>`).join('')}</div>`;
  }
  function bookLine(b, extra) {
    return `<button type="button" class="yr-book" data-open="${esc(b.id)}">
      <span class="yr-bcover">${api.thumbHTML(b, 'M')}</span>
      <span class="yr-btext"><span class="yr-bt">${esc(b.title)}</span><span class="yr-bb">${esc(b.author || '')}${extra ? ` · ${esc(extra)}` : ''}</span></span>
    </button>`;
  }

  function render() {
    const years = api.yearsAvailable();
    if (!sel || (sel !== 'all' && sel !== 'life' && !years.includes(sel))) sel = pickDefault();
    $('#yrYears').innerHTML = [...years.map(y => [y, y]), ['all', 'All time'], ['life', 'Reading life']].map(([v, l]) =>
      `<button role="tab" data-yr="${v}" aria-selected="${sel === v}">${l}</button>`).join('');
    $('#yearPage h2').textContent = sel === 'life' ? 'Your reading life' : 'Year in review';
    if (sel === 'life') { renderLife(); return; }
    const all = sel === 'all';
    const g = gather(sel);
    const body = $('#yrBody');
    if (!g.finishes.length) {
      body.innerHTML = `<div class="yr-empty"><p>${all ? 'Finish a book and your reading story starts here.' : `No books finished in ${esc(sel)} yet.`}</p></div>`;
      return;
    }
    const n = g.finishes.length;
    const tiles = [
      tile(fmtNum(n), n === 1 ? 'book finished' : 'books finished'),
      g.pages ? tile(fmtNum(g.pages), 'pages read') : '',
      g.hours ? tile(fmtNum(g.hours), g.hours === 1 ? 'hour listened' : 'hours listened') : '',
      g.rated.length ? tile(g.avg.toFixed(1), `average stars<span class="yr-sub">from ${api.plural(g.rated.length, 'rating')}</span>`) : '',
    ].join('');

    // the year's goal (or a trophy count, all time)
    let goal = '';
    if (!all) {
      const target = api.goalFor(sel), t = api.trophies()[sel];
      if (target) {
        // the goal counts books finished after it was set, so it can differ from the year's total
        const done = api.goalDone(sel);
        goal = t && t.goal >= target
          ? `<div class="yr-goal met"><span class="yr-trophy" aria-hidden="true">${api.drawTrophy(sel, t.goal, 0.32)}</span><p>You set out to read ${api.plural(t.goal, 'book')} and did it${t.at ? `, on ${esc(api.fmtDate(t.at))}` : ''}.</p></div>`
          : `<div class="yr-goal"><p>Your goal: ${api.plural(target, 'book')}. ${done} counted${target - done > 0 ? `, ${target - done} to go` : ''}.</p><span class="yr-meter"><span style="width:${Math.min(100, Math.round((done / target) * 100))}%"></span></span></div>`;
      }
    } else {
      const ts = Object.keys(api.trophies());
      if (ts.length) goal = `<div class="yr-goal met"><p>${api.plural(ts.length, 'yearly goal')} reached: ${ts.sort().map(esc).join(', ')}.</p></div>`;
    }

    // month by month (a year) or year by year (all time)
    let timeline;
    if (!all) {
      const max = Math.max(...g.months);
      // only call out a busiest month when one month truly stands out
      const peak = g.months.filter(c => c === max).length === 1 && max > 1 ? g.months.indexOf(max) : -1;
      const cols = g.months.map((c, i) => ({ c, label: MONTHS[i][0], tip: `${MONTH_NAMES[i]}: ${api.plural(c, 'book')}`, peak: i === peak && max > 0 }));
      const undated = n - g.months.reduce((t, c) => t + c, 0);
      timeline = `<section class="yr-sec"><h3>Month by month</h3>${columns(cols, 'Books finished each month')}
        <p class="yr-cap">${peak >= 0 ? `Your busiest month was ${MONTH_NAMES[peak]}, with ${api.plural(max, 'book')}.` : `Books finished in ${api.plural(g.months.filter(Boolean).length, 'month')} of the year.`}${undated > 0 ? ` ${api.plural(undated, 'book has', 'books have')} only a year, no month.` : ''}</p></section>`;
    } else {
      const ys = [...g.byYear.keys()].sort();
      const max = Math.max(...g.byYear.values());
      const top = [...g.byYear.values()].filter(c => c === max).length === 1;
      const cols = ys.map(y => ({ c: g.byYear.get(y), label: ys.length > 8 ? `’${y.slice(2)}` : y, tip: `${y}: ${api.plural(g.byYear.get(y), 'book')}`, peak: top && g.byYear.get(y) === max }));
      timeline = `<section class="yr-sec"><h3>Year by year</h3>${columns(cols, 'Books finished each year')}</section>`;
    }

    const ratings = g.rated.length ? `<div class="yr-block"><h3>Your ratings</h3>${hbars(g.stars.map(s => ({ label: `<span class="yr-stars" aria-label="${s.n} stars">${'★'.repeat(s.n)}<span class="off">${'★'.repeat(5 - s.n)}</span></span>`, c: s.c })), 'Books by star rating')}</div>` : '';

    const hi = [];
    if (g.favorites.length) hi.push(`<li><span class="yr-hk">Five stars</span>${g.favorites.slice(0, 4).map(b => bookLine(b)).join('')}${g.favorites.length > 4 ? `<span class="yr-more">and ${g.favorites.length - 4} more</span>` : ''}</li>`);
    if (g.withLen.length) hi.push(`<li><span class="yr-hk">Longest</span>${bookLine(g.withLen[0], api.formatOf(g.withLen[0]) === 'audio' ? `${g.withLen[0].hours} hours` : `${g.withLen[0].pages} pages`)}</li>`);
    if (g.withLen.length > 2) { const s = g.withLen[g.withLen.length - 1]; hi.push(`<li><span class="yr-hk">Shortest</span>${bookLine(s, api.formatOf(s) === 'audio' ? `${s.hours} hours` : `${s.pages} pages`)}</li>`); }
    if (g.quickest) hi.push(`<li><span class="yr-hk">Quickest read</span>${bookLine(g.quickest.b, g.quickest.days === 1 ? 'in a day' : `in ${g.quickest.days} days`)}</li>`);
    if (!all && g.first && g.last && g.first !== g.last) {
      hi.push(`<li><span class="yr-hk">First of the year</span>${bookLine(g.first.b, api.fmtDate(g.first.date))}</li>`);
      hi.push(`<li><span class="yr-hk">Latest</span>${bookLine(g.last.b, api.fmtDate(g.last.date))}</li>`);
    }
    const highlights = hi.length ? `<div class="yr-block"><h3>Highlights</h3><ul class="yr-hi">${hi.join('')}</ul></div>` : '';

    const what = [];
    if (g.genres.length) what.push(`<div class="yr-block"><h3>Genres</h3>${hbars(g.genres.slice(0, 6).map(([k, c]) => ({ label: esc(k), c })), 'Books by genre')}${g.genres.length > 6 ? `<p class="yr-cap">and ${api.plural(g.genres.length - 6, 'more genre')}</p>` : ''}</div>`);
    if (g.tags.length) what.push(`<div class="yr-block"><h3>Tags</h3><p class="yr-tags">${g.tags.slice(0, 14).map(([k, c]) => `<span class="tag-pill">${esc(k)} <b>${c}</b></span>`).join('')}</p></div>`);
    if (g.authors.length) what.push(`<div class="yr-block"><h3>Authors you came back to</h3>${hbars(g.authors.slice(0, 5).map(([k, c]) => ({ label: esc(k), c })), 'Books by author')}</div>`);
    if (g.formats.length > 1) what.push(`<div class="yr-block"><h3>How you read</h3>${hbars(g.formats.map(([k, c]) => ({ label: { print: 'Print', ebook: 'Ebook', audio: 'Audiobook' }[k], c })), 'Books by format')}</div>`);

    const extras = [
      g.rereads ? api.plural(g.rereads, 'reread') : '',
      g.reviews ? api.plural(g.reviews, 'review') + ' written' : '',
      g.quotes ? api.plural(g.quotes, 'favorite line') + ' saved' : '',
      g.setAside ? api.plural(g.setAside, 'book') + ' set aside' : '',
    ].filter(Boolean);

    body.innerHTML = `
      <section class="yr-hero">
        <p class="yr-kicker">${all ? 'Your reading life, so far' : `Your ${esc(sel)} in books`}</p>
        <div class="yr-tiles">${tiles}</div>
        ${goal}
        ${extras.length ? `<p class="yr-extras">${extras.join(' · ')}</p>` : ''}
        ${window.TomesteadShare ? `<button type="button" class="btn btn-brass yr-share" data-share>${all ? 'Share my reading life' : `Share my ${esc(sel)}`}</button>` : ''}
      </section>
      ${timeline}
      ${ratings || highlights ? `<section class="yr-sec yr-grid">${ratings}${highlights}</section>` : ''}
      ${what.length ? `<section class="yr-sec yr-grid">${what.join('')}</section>` : ''}
      <section class="yr-sec">
        <h3>${all ? 'Everything you’ve finished' : `Your ${esc(sel)} shelf`}</h3>
        <div class="yr-mosaic">${g.uniq.slice().reverse().map(b => `<button type="button" class="yr-cov" data-open="${esc(b.id)}" aria-label="${esc(b.title)}" title="${esc(b.title)}">${api.thumbHTML(b, 'M')}</button>`).join('')}</div>
      </section>`;
    api.wireThumbs(body);
    last = g;
  }

  // ---------- your reading life: a timeline, year by year, newest first ----------
  const MILESTONES = [1, 10, 25, 50, 75, 100, 150, 200, 250, 300, 400, 500, 750, 1000, 1500, 2000];
  const ord = (n) => { const s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };
  const clip = (t, n) => { t = String(t).trim().replace(/\s+/g, ' '); return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : t; };
  function renderLife() {
    const body = $('#yrBody');
    const books = api.books();
    const finishes = [];
    for (const b of books) { const ds = [...api.datesOf(b)].sort(); ds.forEach((d, i) => finishes.push({ b, date: d, reread: i > 0 })); }
    finishes.sort((p, q) => p.date.localeCompare(q.date));
    const dated = finishes.filter(f => /^\d{4}/.test(f.date));
    if (!dated.length) {
      body.innerHTML = `<div class="yr-empty"><p>Finish a book and your reading life starts here: every year, every milestone, every line you kept.</p></div>`;
      return;
    }
    const sk = api.streak ? api.streak() : null;
    const pages = dated.reduce((t, f) => t + (api.formatOf(f.b) === 'audio' ? 0 : (f.b.pages || 0)), 0);
    const quotes = books.flatMap(b => (Array.isArray(b.quotes) ? b.quotes : []).map(q => ({ q, b }))).filter(x => x.q && String(x.q.text || '').trim());
    const firstY = dated[0].date.slice(0, 4), lastY = dated[dated.length - 1].date.slice(0, 4);
    const tiles = [
      tile(fmtNum(dated.length), dated.length === 1 ? 'book finished' : 'books finished'),
      tile(firstY === lastY ? firstY : `${firstY}–${lastY.slice(2)}`, 'on your shelves'),
      pages ? tile(fmtNum(pages), 'pages read') : '',
      sk && sk.best > 1 ? tile(fmtNum(sk.best), 'days, your longest streak') : quotes.length ? tile(fmtNum(quotes.length), quotes.length === 1 ? 'line kept' : 'lines kept') : '',
    ].join('');

    // moments, by year
    const years = new Map();
    const at = (y) => { if (!years.has(y)) years.set(y, { moments: [], finishes: [] }); return years.get(y); };
    const when = (d) => (ISO.test(d) ? api.fmtDate(d) : d.slice(0, 4));
    let count = 0;
    dated.forEach((f) => {
      const y = f.date.slice(0, 4), n = f.reread ? 0 : ++count;   // rereads aren't new books on the shelf
      at(y).finishes.push(f);
      if (n === 1) at(y).moments.push({ d: f.date, k: 'first', html: `Your first book on the shelf: <i>${esc(f.b.title)}</i>`, b: f.b });
      else if (MILESTONES.includes(n)) at(y).moments.push({ d: f.date, k: 'mile', html: `Your ${ord(n)} book: <i>${esc(f.b.title)}</i>`, b: f.b });
      if (f.reread) at(y).moments.push({ d: f.date, k: 'again', html: `Came back to <i>${esc(f.b.title)}</i>`, b: f.b, minor: true });
    });
    // the first five-star read of each year, and how many more
    for (const [y, Y] of years) {
      const five = Y.finishes.filter(f => f.b.rating === 5 && !f.reread);
      if (five.length) Y.moments.push({ d: five[0].date, k: 'five', html: `Five stars for <i>${esc(five[0].b.title)}</i>${five.length > 1 ? ` <span class="lf-and">and ${five.length - 1} more this year</span>` : ''}`, b: five[0].b });
      const long = Y.finishes.filter(f => api.pagesOf(f.b) > 0).sort((a, b) => api.pagesOf(b.b) - api.pagesOf(a.b))[0];
      if (long && Y.finishes.length > 2) Y.moments.push({ d: long.date, k: 'long', html: `Your longest of the year: <i>${esc(long.b.title)}</i>, ${api.formatOf(long.b) === 'audio' ? `${long.b.hours} hours` : `${fmtNum(long.b.pages)} pages`}`, b: long.b, minor: true });
      const t = api.trophies()[y];
      if (t) Y.moments.push({ d: t.at || `${y}-12-31`, k: 'goal', html: `Reached your goal of ${api.plural(t.goal, 'book')}` });
    }
    // a line you kept, each year (the latest one)
    const qy = new Map();
    for (const x of quotes) { const d = String(x.q.at || ''); if (!/^\d{4}/.test(d)) continue; const y = d.slice(0, 4); if (!qy.has(y) || d > String(qy.get(y).q.at)) qy.set(y, x); }
    for (const [y, x] of qy) at(y).moments.push({ d: x.q.at, k: 'quote', html: `<span class="lf-quote">“${esc(clip(x.q.text, 200))}”</span><span class="lf-from">from <i>${esc(x.b.title)}</i></span>`, b: x.b });

    const ICON = { first: '❧', mile: '✦', five: '★', goal: '♛', quote: '❝', long: '▤', again: '↺' };
    const sections = [...years.keys()].sort().reverse().map(y => {
      const Y = years.get(y);
      const n = Y.finishes.length, pg = Y.finishes.reduce((t, f) => t + (api.formatOf(f.b) === 'audio' ? 0 : (f.b.pages || 0)), 0);
      const t = api.trophies()[y];
      const ms = Y.moments.sort((a, b) => String(a.d).localeCompare(String(b.d)));
      const uniq = [...new Set(Y.finishes.map(f => f.b))];
      const show = uniq.slice(0, 14);
      return `<section class="lf-year">
        <header class="lf-yhead">
          <h3>${esc(y)}</h3>
          <p>${api.plural(n, 'book')}${pg ? ` · ${fmtNum(pg)} pages` : ''}</p>
          ${t ? `<span class="lf-trophy" title="Goal reached" aria-label="Goal reached">${api.drawTrophy(y, t.goal, 0.2)}</span>` : ''}
          <button type="button" class="linkbtn ink lf-more" data-yr-go="${esc(y)}">The whole year ›</button>
        </header>
        ${ms.length ? `<ol class="lf-moments">${ms.map(m => `<li class="lf-m lfk-${m.k}${m.minor ? ' minor' : ''}">
          <span class="lf-dot" aria-hidden="true">${ICON[m.k]}</span>
          <span class="lf-when">${esc(when(String(m.d)))}</span>
          ${m.b ? `<button type="button" class="lf-what" data-open="${esc(m.b.id)}">${m.html}</button>` : `<span class="lf-what">${m.html}</span>`}
        </li>`).join('')}</ol>` : ''}
        <div class="lf-strip">${show.map(b => `<button type="button" class="yr-cov" data-open="${esc(b.id)}" aria-label="${esc(b.title)}" title="${esc(b.title)}">${api.thumbHTML(b, 'M')}</button>`).join('')}${uniq.length > show.length ? `<span class="lf-plus">+${uniq.length - show.length}</span>` : ''}</div>
      </section>`;
    }).join('');
    const undated = finishes.length - dated.length;
    body.innerHTML = `
      <section class="yr-hero">
        <p class="yr-kicker">Your reading life, year by year</p>
        <div class="yr-tiles">${tiles}</div>
      </section>
      <div class="lf-line">${sections}</div>
      ${undated > 0 ? `<p class="yr-cap lf-undated">${api.plural(undated, 'finished book has', 'finished books have')} no date, so ${undated === 1 ? 'it isn’t' : 'they aren’t'} on the timeline.</p>` : ''}`;
    api.wireThumbs(body);
  }
  function select(v) { sel = v; }
  let last = null;
  // a picture of the year: the count, a line of numbers, and a shelf of covers (five-star reads first)
  function shareYear() {
    const g = last; if (!g) return;
    const all = sel === 'all', n = g.finishes.length;
    const fav = new Set(g.favorites);
    const order = [...g.favorites, ...g.uniq.slice().reverse().filter(b => !fav.has(b))];
    const covers = order.slice(0, 12).map(b => {
      const el = $(`#yrBody .yr-mosaic [data-open="${CSS.escape(b.id)}"] img`);
      return { src: el && el.currentSrc ? el.currentSrc : el ? el.src : '', bg: api.colorOf(b).bg, title: b.title };
    });
    const lines = [
      [g.pages ? `${fmtNum(g.pages)} pages` : '', g.hours ? `${fmtNum(g.hours)} hours listened` : ''].filter(Boolean).join(' · '),
      [g.rated.length ? `${g.avg.toFixed(1)}★ average` : '', g.favorites.length ? api.plural(g.favorites.length, 'five-star read') : ''].filter(Boolean).join(' · '),
      g.genres.length ? `Most read: ${g.genres[0][0]}` : '',
    ];
    window.TomesteadShare.share({ kicker: all ? 'My reading life, so far' : `My ${sel} in books`, big: fmtNum(n), bigLabel: n === 1 ? 'book finished' : 'books finished', lines, covers },
      `tomestead-${all ? 'reading-life' : sel}`, api.toast);
  }

  $('#yrYears').addEventListener('click', (e) => {
    const b = e.target.closest('[data-yr]'); if (!b) return;
    sel = b.dataset.yr; render();
  });
  $('#yrBody').addEventListener('click', (e) => {
    if (e.target.closest('[data-share]')) { shareYear(); return; }
    const go = e.target.closest('[data-yr-go]');
    if (go) { sel = go.dataset.yrGo; render(); document.getElementById('yearPage').scrollIntoView({ block: 'start' }); return; }
    const b = e.target.closest('[data-open]'); if (!b) return;
    api.openBook(b.dataset.open, b.querySelector('.thumb, .chip') || b);
  });

  return { render, select };
};
