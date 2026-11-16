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
    if (!sel || (sel !== 'all' && !years.includes(sel))) sel = pickDefault();
    $('#yrYears').innerHTML = [...years.map(y => [y, y]), ['all', 'All time']].map(([v, l]) =>
      `<button role="tab" data-yr="${v}" aria-selected="${sel === v}">${l}</button>`).join('');
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
    const b = e.target.closest('[data-open]'); if (!b) return;
    api.openBook(b.dataset.open, b.querySelector('.thumb, .chip') || b);
  });

  return { render };
};
