/* Tomestead — your reading library */
(() => {
  'use strict';

  const D = window.TomesteadDecor;
  const STORE = 'tomestead.books.v1';
  const PREFS = 'tomestead.prefs.v1';
  const SHELVES_PER_CASE = 3;

  const PALETTE = [
    { name: 'Oxblood',  bg: '#6E1F24', ink: '#F3E3C3' },
    { name: 'Midnight', bg: '#1F3350', ink: '#F0DDB0' },
    { name: 'Moss',     bg: '#4F6B3A', ink: '#F4E7C8' },
    { name: 'Mustard',  bg: '#C2902F', ink: '#2B1C0E', light: true },
    { name: 'Plum',     bg: '#5B2F4A', ink: '#F1DDBF' },
    { name: 'Teal',     bg: '#2E5E5E', ink: '#F1E3C2' },
    { name: 'Rust',     bg: '#9A4A25', ink: '#F7E6C6' },
    { name: 'Charcoal', bg: '#3A3A3F', ink: '#E9CF8F' },
    { name: 'Saddle',   bg: '#A57A4E', ink: '#24170C', light: true },
    { name: 'Linen',    bg: '#D9CBA8', ink: '#3A2614', light: true },
    { name: 'Forest',   bg: '#2F4A33', ink: '#E8C766' },
    { name: 'Brick',    bg: '#8B3A3A', ink: '#F5E2C0' },
  ];

  // shown in the Customize preview when the library is still empty
  const SAMPLE = [
    ['Pride and Prejudice', 'Jane Austen', 5], ['Moby-Dick', 'Herman Melville', 3], ['Little Women', 'Louisa May Alcott', 4],
    ['Treasure Island', 'Robert Louis Stevenson', 5], ['Jane Eyre', 'Charlotte Brontë', 4], ['The Odyssey', 'Homer', 4],
    ['Walden', 'Henry David Thoreau', 3], ['Frankenstein', 'Mary Shelley', 5], ['Emma', 'Jane Austen', 4],
  ].map(([title, author, rating], i) => ({ id: 'sample' + i, title, author, rating }));

  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const thisYear = () => String(new Date().getFullYear());

  // ---------- state ----------
  let books = load();
  let prefs = Object.assign({
    view: 'shelf', sort: 'added', year: 'all', iosTipDismissed: false,
    theme: { ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets] }, goals: {},
  }, loadJSON(PREFS, {}));
  prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets] }, prefs.theme || {});
  prefs.goals = prefs.goals || {};
  let query = '';
  let justAdded = null;
  let editingId = null;
  let openId = null;
  let pickedRating = 0;
  let caseIndex = 0;
  let defaultFinished = null;

  function loadJSON(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
  }
  function load() {
    const arr = loadJSON(STORE, []);
    return Array.isArray(arr) ? arr.filter(b => b && b.id && b.title) : [];
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(books)); }
    catch { toast('Couldn’t save. Your browser storage may be full.'); }
  }
  function savePrefs() { try { localStorage.setItem(PREFS, JSON.stringify(prefs)); } catch {} }

  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  // ---------- book geometry ----------
  function colorOf(b) {
    const i = Number.isInteger(b.color) ? b.color : hash(b.id + b.title) % PALETTE.length;
    return PALETTE[((i % PALETTE.length) + PALETTE.length) % PALETTE.length];
  }
  function scale() { return window.innerWidth <= 640 ? 0.8 : 1; }
  function dims(b) {
    const h = hash(b.id + '|' + b.title);
    const s = scale();
    const height = Math.round((176 + (h % 66)) * s);           // 176–241px
    let width;
    if (b.pages && b.pages > 0) width = Math.min(66, Math.max(24, 18 + b.pages / 16));
    else width = 26 + ((h >>> 5) % 30);                         // 26–55px
    width = Math.round(width * (s < 1 ? 0.86 : 1));
    const variant = (h >>> 9) % 4;
    const fs = Math.max(10, Math.min(17, width * 0.4));
    return { height, width, variant, fs };
  }

  // ---------- years & goals ----------
  const yearOf = (b) => (/^\d{4}/.test(b.finished || '') ? b.finished.slice(0, 4) : '');
  function yearsAvailable() {
    const ys = new Set(books.map(yearOf).filter(Boolean));
    ys.add(thisYear());
    Object.keys(prefs.goals).forEach(y => ys.add(y));
    return [...ys].sort((a, b) => b.localeCompare(a));
  }
  const countInYear = (y) => books.filter(b => yearOf(b) === y).length;
  const goalFor = (y) => (prefs.goals[y] > 0 ? prefs.goals[y] : 0);

  // ---------- sorting & filtering ----------
  function visibleBooks() {
    const q = query.trim().toLowerCase();
    let list = books.filter(b => !q || b.title.toLowerCase().includes(q) || (b.author || '').toLowerCase().includes(q) || (b.genre || '').toLowerCase().includes(q));
    if (prefs.year === 'none') list = list.filter(b => !yearOf(b));
    else if (prefs.year !== 'all') list = list.filter(b => yearOf(b) === prefs.year);
    const byStr = (k) => (a, b) => (a[k] || '').localeCompare(b[k] || '', undefined, { sensitivity: 'base' });
    switch (prefs.sort) {
      case 'title': list.sort(byStr('title')); break;
      case 'author': list.sort((a, b) => surname(a.author).localeCompare(surname(b.author)) || byStr('title')(a, b)); break;
      case 'rating': list.sort((a, b) => (b.rating || 0) - (a.rating || 0) || byStr('title')(a, b)); break;
      case 'finished': list.sort((a, b) => (b.finished || '').localeCompare(a.finished || '')); break;
      default: list.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
    }
    return list;
  }
  // spines carry the surname, like a real shelf ("Hunt & Thomas" stays as is)
  function spineAuthor(name = '') {
    const n = name.trim();
    if (/[&,]| and /i.test(n)) return n;
    const parts = n.split(/\s+/);
    const last = parts[parts.length - 1];
    return /^(jr\.?|sr\.?|ii|iii|iv)$/i.test(last) && parts.length > 1 ? parts[parts.length - 2] : last;
  }
  function surname(name = '') { const p = name.trim().split(/\s+/); return (p[p.length - 1] || '').toLowerCase(); }

  // ---------- spines ----------
  function starsHTML(n) {
    let out = '';
    for (let i = 1; i <= 5; i++) out += `<span class="${i <= n ? 'on' : 'off'}">★</span>`;
    return out;
  }

  function spine(b) {
    const d = dims(b), c = colorOf(b);
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `book v${d.variant}${c.light ? ' light' : ''}${b.id === justAdded ? ' arrive' : ''}`;
    el.style.cssText = `--w:${d.width}px;--h:${d.height}px;--bg:${c.bg};--ink:${c.ink};--fs:${d.fs}px`;
    el.dataset.id = b.id;
    const r = b.rating || 0;
    el.setAttribute('aria-label', `${b.title} by ${b.author || 'unknown author'}${r ? `, ${r} of 5 stars` : ''}`);
    el.innerHTML =
      (r ? `<span class="s-stars" aria-hidden="true">${starsHTML(r)}</span>` : '') +
      `<span class="s-title">${esc(b.title)}</span>` +
      (b.author ? `<span class="s-author">${esc(spineAuthor(b.author))}</span>` : '');
    return el;
  }

  function ghostSpine(g) {
    const d = dims({ id: `ghost-${g.year}-${g.n}`, title: 'ghost' });
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'book ghost';
    el.style.cssText = `--w:${d.width}px;--h:${d.height}px;--fs:${d.fs}px`;
    el.dataset.ghost = g.year;
    el.setAttribute('aria-label', `Empty spot for book ${g.n} of your ${g.year} goal. Add a book.`);
    el.innerHTML = `<span class="g-plus" aria-hidden="true">+</span><span class="g-num" aria-hidden="true">${g.n}</span>`;
    return el;
  }

  function decorEl(svg, cls) {
    const d = document.createElement('div');
    d.className = 'decor ' + cls;
    d.innerHTML = svg;
    return d;
  }

  // ---------- bookcases ----------
  // items: [{type:'book', b} | {type:'ghost', year, n}] — packed into rows, 3 rows per bookcase
  function buildCases(container, items, opts = {}) {
    const s = scale();
    const theme = prefs.theme;
    const be = D.BOOKENDS[theme.bookend] || D.BOOKENDS.none;
    const bookendW = be.w ? be.w * s + 2 : 0;
    const trinkets = theme.trinkets.filter(k => D.TRINKETS[k]);
    const gap = 3;

    container.innerHTML = '';
    // measure the inside of one bookcase
    const probe = makeCase('');
    container.appendChild(probe);
    const rowEl = document.createElement('div');
    rowEl.className = 'shelf-row';
    probe.querySelector('.shelves').appendChild(rowEl);
    const cs = getComputedStyle(rowEl);
    const inner = rowEl.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    container.removeChild(probe);
    const avail = Math.max(100, inner - bookendW * 2);

    const width = (it) => (it.type === 'book' ? dims(it.b).width : dims({ id: `ghost-${it.year}-${it.n}`, title: 'ghost' }).width);
    const rows = [];
    let cur = [], used = 0;
    for (const it of items) {
      const w = width(it);
      if (cur.length && used + w > avail) { rows.push(cur); cur = []; used = 0; }
      cur.push(it); used += w + gap;
    }
    if (cur.length) rows.push(cur);
    const maxRows = opts.maxRows || Infinity;
    if (rows.length > maxRows) rows.length = maxRows;
    const minRows = opts.minRows ?? SHELVES_PER_CASE;
    while (rows.length < minRows || rows.length % (opts.perCase || SHELVES_PER_CASE)) rows.push([]);

    let tIdx = 0;
    const cases = [];
    const perCase = opts.perCase || SHELVES_PER_CASE;
    rows.forEach((row, ri) => {
      if (ri % perCase === 0) {
        const c = makeCase(opts.plate ? opts.plate(Math.floor(ri / perCase)) : '');
        container.appendChild(c);
        cases.push(c);
      }
      const shelves = cases[cases.length - 1].querySelector('.shelves');
      const shelf = document.createElement('div');
      shelf.className = 'shelf';
      const r = document.createElement('div');
      r.className = 'shelf-row' + (row.length ? '' : ' sparse');
      let w = 0;
      if (row.length && be.w) r.appendChild(decorEl(D.sized(be.svg, s), 'bookend left'));
      row.forEach(it => {
        r.appendChild(it.type === 'book' ? spine(it.b) : ghostSpine(it));
        w += width(it) + gap;
      });
      if (row.length && be.w) r.appendChild(decorEl(D.sized(be.svg, s), 'bookend right'));

      // trinkets fill the empty spots
      let free = avail - w;
      const max = row.length ? 2 : 3;
      const placed = [];
      for (let tries = 0; trinkets.length && placed.length < max && tries < trinkets.length; tries++) {
        const key = trinkets[(tIdx + tries) % trinkets.length];
        if (placed.includes(key)) continue;
        const need = D.TRINKETS[key].w * s + 14;
        const room = row.length ? (placed.length ? need + 60 : need + 12) : need;
        if (free >= room) { placed.push(key); free -= need; tIdx = (tIdx + tries + 1) % trinkets.length; tries = -1; }
      }
      placed.forEach((key, i) => r.appendChild(decorEl(D.sized(D.TRINKETS[key].svg, s), 'trinket' + (i === 0 ? ' first' : ''))));

      shelf.appendChild(r);
      const plank = document.createElement('div');
      plank.className = 'plank';
      shelf.appendChild(plank);
      shelves.appendChild(shelf);
    });
    fitSpines(container);
    return cases;
  }

  function makeCase(plateText) {
    const c = document.createElement('div');
    c.className = 'bookcase';
    c.innerHTML = `<div class="crown">${plateText ? `<span class="plate">${esc(plateText)}</span>` : ''}</div><div class="lamp" aria-hidden="true"></div><div class="shelves"></div><div class="plinth"></div>`;
    return c;
  }

  // shrink long titles until they fit on the spine
  function fitSpines(root) {
    root.querySelectorAll('.book:not(.ghost)').forEach(bk => {
      const t = bk.querySelector('.s-title');
      if (!t) return;
      let fs = parseFloat(getComputedStyle(t).fontSize);
      const min = Math.max(9, fs * 0.6);
      let guard = 40;
      while (t.scrollHeight > t.clientHeight + 1 && fs > min && guard--) {
        fs -= 0.5;
        t.style.fontSize = fs + 'px';
      }
    });
  }

  function plateText() {
    const y = prefs.year;
    if (y === 'all') return `${books.length} read`;
    if (y === 'none') return `${books.filter(b => !yearOf(b)).length} undated`;
    const done = countInYear(y), goal = goalFor(y);
    return goal ? `${y}: ${done} of ${goal}` : `${done} read in ${y}`;
  }

  function renderShelf() {
    const wrap = $('#cases');
    const list = visibleBooks();
    const items = list.map(b => ({ type: 'book', b }));
    const y = prefs.year;
    const goal = (y !== 'all' && y !== 'none' && !query.trim()) ? goalFor(y) : 0;
    const remaining = Math.max(0, goal - countInYear(y));
    const ghostCount = Math.min(remaining, 300);
    for (let i = 0; i < ghostCount; i++) items.push({ type: 'ghost', year: y, n: countInYear(y) + i + 1 });

    const plate = plateText();
    const cases = buildCases(wrap, items, { plate: (i) => plate });

    if (!items.length) {
      const note = document.createElement('div');
      note.className = 'empty-note';
      if (query.trim()) {
        note.innerHTML = `<p>No books match “${esc(query)}”.</p><button class="btn btn-brass" data-clear>Clear search</button>`;
      } else if (y === 'none') {
        note.innerHTML = `<p>Every book on your shelves has a finish date.</p><button class="btn btn-brass" data-all>Show all years</button>`;
      } else if (y !== 'all') {
        note.innerHTML = `<p>No books finished in ${esc(y)} yet.</p><button class="btn btn-brass" data-goal>Set a ${esc(y)} reading goal</button>`;
      } else {
        note.innerHTML = `<p>Your shelves are waiting. Add the first book you’ve read.</p><button class="btn btn-brass" data-add>Add a book</button>`;
      }
      cases[0].querySelector('.shelf-row').appendChild(note);
    }

    // pager
    const n = cases.length;
    $('#pager').hidden = n < 2;
    if (justAdded) {
      const el = wrap.querySelector(`.book[data-id="${CSS.escape(justAdded)}"]`);
      if (el) caseIndex = cases.indexOf(el.closest('.bookcase'));
    }
    caseIndex = Math.min(Math.max(0, caseIndex), n - 1);
    wrap.style.scrollBehavior = 'auto';
    wrap.scrollLeft = caseIndex * caseStep();
    wrap.style.scrollBehavior = '';
    updatePager();
  }

  function caseCount() { return $('#cases').children.length || 1; }
  function caseStep() {
    const kids = $('#cases').children;
    return kids.length > 1 ? kids[1].offsetLeft - kids[0].offsetLeft : ($('#cases').clientWidth || 1);
  }
  function currentCase() { return Math.round($('#cases').scrollLeft / caseStep()); }
  function updatePager() {
    const n = caseCount();
    caseIndex = Math.min(currentCase(), n - 1);
    $('#pagerLabel').textContent = `Bookcase ${caseIndex + 1} of ${n}`;
    $('#prevCase').disabled = caseIndex <= 0;
    $('#nextCase').disabled = caseIndex >= n - 1;
  }
  function goCase(i) {
    const wrap = $('#cases');
    const n = caseCount();
    i = Math.min(Math.max(0, i), n - 1);
    wrap.scrollTo({ left: i * caseStep(), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  function fmtDate(iso) {
    if (!iso) return '';
    const [y, m, d] = iso.split('-').map(Number);
    if (!y) return '';
    return new Date(y, (m || 1) - 1, d || 1).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  // ---------- list ----------
  function renderList() {
    const ol = $('#list');
    const list = visibleBooks();
    ol.innerHTML = list.map(b => {
      const c = colorOf(b);
      return `<li><button type="button" class="ledger-item" data-id="${esc(b.id)}">
        <span class="chip" style="--bg:${c.bg}" aria-hidden="true"></span>
        <span><h3>${esc(b.title)}</h3><span class="by">${esc(b.author || '')}${b.genre ? `, ${esc(b.genre)}` : ''}</span></span>
        <span class="right">${b.rating ? `<span class="stars-sm" aria-label="${b.rating} of 5 stars">${starsHTML(b.rating)}</span>` : '<span class="date">Not rated</span>'}<br><span class="date">${esc(fmtDate(b.finished))}</span></span>
        ${b.review ? `<p class="excerpt">${esc(b.review)}</p>` : ''}
      </button></li>`;
    }).join('');
    const empty = $('#listEmpty');
    empty.hidden = list.length > 0;
    if (query.trim()) empty.textContent = `No books match “${query}”.`;
    else if (prefs.year === 'none') empty.textContent = 'Every book has a finish date.';
    else if (prefs.year !== 'all') empty.textContent = `No books finished in ${prefs.year} yet.`;
    else empty.textContent = 'Nothing logged yet. Add a book you’ve read and it will appear here.';
  }

  // ---------- header, years, goal bar ----------
  function renderStats() {
    const n = books.length;
    const rated = books.filter(b => b.rating);
    const avg = rated.length ? rated.reduce((s, b) => s + b.rating, 0) / rated.length : 0;
    const y = thisYear();
    $('#stats').textContent = n
      ? `${n} ${n === 1 ? 'book' : 'books'} read${rated.length ? `, averaging ${avg.toFixed(1)} stars` : ''}. ${countInYear(y)} finished in ${y}.`
      : 'Every book you’ve read, on one shelf.';
    $('#genres').innerHTML = [...new Set(books.map(b => b.genre).filter(Boolean))].map(g => `<option value="${esc(g)}">`).join('');
  }

  function renderYears() {
    const years = yearsAvailable();
    const hasUndated = books.some(b => !yearOf(b));
    if (prefs.year !== 'all' && prefs.year !== 'none' && !years.includes(prefs.year)) prefs.year = 'all';
    if (prefs.year === 'none' && !hasUndated) prefs.year = 'all';
    const opts = [['all', 'All'], ...years.map(y => [y, y]), ...(hasUndated ? [['none', 'No date']] : [])];
    $('#years').innerHTML = opts.map(([v, label]) =>
      `<button role="tab" data-year="${v}" aria-selected="${prefs.year === v}">${label}</button>`).join('');
  }

  function renderGoalBar() {
    const bar = $('#goalBar');
    const y = prefs.year;
    if (y === 'all' || y === 'none') { bar.hidden = true; return; }
    bar.hidden = false;
    const goal = goalFor(y), done = countInYear(y);
    if (!goal) {
      bar.className = 'goalbar';
      bar.innerHTML = `<p class="goal-text">${done} ${done === 1 ? 'book' : 'books'} finished in ${esc(y)}. Set a goal and empty spots will hold space on the shelf.</p><span class="spacer"></span><button class="btn btn-brass" data-goal>Set a ${esc(y)} goal</button>`;
      return;
    }
    const pct = Math.min(100, Math.round((done / goal) * 100));
    const met = done >= goal;
    bar.className = 'goalbar' + (met ? ' met' : '');
    const left = goal - done;
    bar.innerHTML = `<p class="goal-text"><strong>${done} of ${goal}</strong> books for ${esc(y)}. ${met ? 'Goal reached.' : `${left} to go.`}</p>
      <div class="goal-meter" role="progressbar" aria-label="${esc(y)} reading goal" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(done, goal)}"><span style="width:${pct}%"></span></div>
      <button class="btn btn-ghost" data-goal>Change goal</button>`;
  }

  // ---------- page routing ----------
  const onCustomize = () => location.hash === '#customize';

  function render() {
    const cz = onCustomize();
    $('#libraryPage').hidden = cz;
    $('#customizePage').hidden = !cz;
    $('.controls').style.visibility = cz ? 'hidden' : '';
    renderStats();
    if (cz) { renderCustomize(); return; }
    renderYears();
    renderGoalBar();
    const shelf = prefs.view === 'shelf';
    $('#shelfView').hidden = !shelf;
    $('#listView').hidden = shelf;
    $('#tab-shelf').setAttribute('aria-selected', String(shelf));
    $('#tab-list').setAttribute('aria-selected', String(!shelf));
    $('#sort').value = prefs.sort;
    if (shelf) renderShelf(); else renderList();
    justAdded = null;
  }

  // ---------- customize ----------
  function renderCustomize() {
    const t = prefs.theme;
    // preview: one bookcase with the newest books (or sample classics)
    const src = books.length ? [...books].sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0)).slice(0, 14) : SAMPLE;
    buildCases($('#czPreview'), src.map(b => ({ type: 'book', b })), { maxRows: 1, minRows: 2, perCase: 2, plate: () => 'Preview' });

    $('#czWall').innerHTML = D.WALLPAPERS.map(w => `
      <button type="button" class="tile" role="radio" aria-checked="${t.wall === w.key}" data-wall="${w.key}">
        <span class="tile-art wall" style="background-color:${w.color};background-image:${D.svgURL(w.tile)};background-size:${w.size}px ${w.h || w.size}px"></span>
        <span class="tile-label">${w.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('');

    $('#czWood').innerHTML = D.WOODS.map(w => {
      const [hi, lt, mid, dk, , r1, r2] = w.v;
      const plank = `linear-gradient(180deg, ${hi}, ${lt} 20%, ${mid} 60%, ${dk})`;
      const recess = `linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.2)), linear-gradient(90deg, ${r1}, ${r2}, ${r1})`;
      return `<button type="button" class="tile" role="radio" aria-checked="${t.wood === w.key}" data-wood="${w.key}">
        <span class="tile-art wood" style="background:${mid}"><span class="wood-swatch">
          <span style="background:${recess}"></span><span style="background:${plank}"></span>
          <span style="background:${recess}"></span><span style="background:${plank}"></span></span></span>
        <span class="tile-label">${w.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`;
    }).join('');

    $('#czBookend').innerHTML = Object.entries(D.BOOKENDS).map(([k, b]) => `
      <button type="button" class="tile" role="radio" aria-checked="${t.bookend === k}" data-bookend="${k}">
        <span class="tile-art">${b.svg ? D.sized(b.svg, 0.6) : '<span style="align-self:center;color:#cdbf9f;font-size:.85rem">None</span>'}</span>
        <span class="tile-label">${b.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('');

    $('#czTrinkets').innerHTML = Object.entries(D.TRINKETS).map(([k, tr]) => {
      const on = t.trinkets.includes(k);
      const sc = Math.min(0.62, 66 / Math.max(...(tr.svg.match(/height="(\d+)"/) || [0, 90]).slice(1).map(Number)));
      return `<button type="button" class="tile" aria-pressed="${on}" data-trinket="${k}">
        <span class="tile-art">${D.sized(tr.svg, sc)}</span>
        <span class="tile-label">${tr.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`;
    }).join('');
    const n = t.trinkets.length;
    $('#czTrinketHint').textContent = n
      ? `${n} on display. They fill the empty spots on your shelves, in the order you pick them.`
      : 'No trinkets on display. Pick a few to fill the empty spots on your shelves.';
  }

  function setTheme(patch) {
    Object.assign(prefs.theme, patch);
    savePrefs();
    D.applyTheme(prefs.theme);
    renderCustomize();
  }

  // ---------- details ----------
  function openDetail(id) {
    const b = books.find(x => x.id === id);
    if (!b) return;
    openId = id;
    const c = colorOf(b);
    $('#dChip').style.setProperty('--bg', c.bg);
    $('#dTitle').textContent = b.title;
    $('#dAuthor').textContent = b.author ? `by ${b.author}` : '';
    $('#dStars').innerHTML = b.rating ? starsHTML(b.rating) : '<span class="off" style="font-size:1rem;letter-spacing:0">Not rated</span>';
    $('#dStars').setAttribute('aria-label', b.rating ? `${b.rating} of 5 stars` : 'Not rated');
    const meta = [];
    if (b.finished) meta.push(`Finished ${fmtDate(b.finished)}`);
    if (b.pages) meta.push(`${b.pages} pages`);
    if (b.genre) meta.push(b.genre);
    $('#dMeta').textContent = meta.join(', ');
    const rev = $('#dReview');
    rev.textContent = b.review || 'No review written yet.';
    rev.classList.toggle('none', !b.review);
    const rm = $('#dRemove');
    rm.textContent = 'Remove';
    rm.dataset.confirm = '';
    $('#detail').showModal();
  }

  // ---------- editor ----------
  function buildStarPicker() {
    const sp = $('#starPicker');
    sp.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = '★';
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-label', `${i} star${i > 1 ? 's' : ''}`);
      b.dataset.v = i;
      sp.appendChild(b);
    }
    const clear = document.createElement('button');
    clear.type = 'button'; clear.className = 'clear'; clear.textContent = 'No rating'; clear.dataset.v = 0;
    sp.appendChild(clear);
    sp.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t) return;
      setRating(Number(t.dataset.v));
    });
    sp.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { setRating(Math.min(5, pickedRating + 1)); e.preventDefault(); focusStar(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { setRating(Math.max(1, pickedRating - 1)); e.preventDefault(); focusStar(); }
    });
  }
  function focusStar() { const s = $(`#starPicker button[data-v="${pickedRating}"]`); s && s.focus(); }
  function setRating(v) {
    pickedRating = v;
    document.querySelectorAll('#starPicker button[role="radio"]').forEach(btn => {
      const n = Number(btn.dataset.v);
      btn.classList.toggle('on', n <= v);
      btn.setAttribute('aria-checked', String(n === v));
      btn.tabIndex = (n === (v || 1)) ? 0 : -1;
    });
  }
  function buildSwatches() {
    const sw = $('#swatches');
    sw.innerHTML = `<label title="Pick one for me"><input type="radio" name="color" value="auto"><span class="sw auto"><span>Surprise me</span></span></label>` +
      PALETTE.map((p, i) => `<label title="${p.name}"><input type="radio" name="color" value="${i}" aria-label="${p.name}"><span class="sw" style="--bg:${p.bg}"></span></label>`).join('');
  }

  function today() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function openEditor(id = null, finished = null) {
    editingId = id;
    const b = id ? books.find(x => x.id === id) : null;
    const f = $('#bookForm');
    f.reset();
    $('#formError').hidden = true;
    $('#formTitle').textContent = b ? 'Edit book' : 'Add a book';
    $('#saveBtn').textContent = b ? 'Save changes' : 'Put it on the shelf';
    $('#fTitle').value = b?.title || '';
    $('#fAuthor').value = b?.author || '';
    $('#fFinished').value = b ? (b.finished || '') : (finished || today());
    $('#fPages').value = b?.pages || '';
    $('#fGenre').value = b?.genre || '';
    $('#fReview').value = b?.review || '';
    const cv = b && Number.isInteger(b.color) ? String(b.color) : 'auto';
    const radio = f.querySelector(`input[name="color"][value="${cv}"]`);
    if (radio) radio.checked = true;
    setRating(b?.rating || 0);
    $('#editor').showModal();
    setTimeout(() => $('#fTitle').focus(), 30);
  }

  function submitEditor(e) {
    e.preventDefault();
    const title = $('#fTitle').value.trim();
    const author = $('#fAuthor').value.trim();
    const err = $('#formError');
    if (!title || !author) {
      err.textContent = !title ? 'Add a title to shelve this book.' : 'Add the author’s name to shelve this book.';
      err.hidden = false;
      (!title ? $('#fTitle') : $('#fAuthor')).focus();
      return;
    }
    const colorVal = $('#bookForm').querySelector('input[name="color"]:checked')?.value;
    const pages = parseInt($('#fPages').value, 10);
    const data = {
      title, author,
      rating: pickedRating || 0,
      finished: $('#fFinished').value || '',
      pages: pages > 0 ? pages : null,
      genre: $('#fGenre').value.trim(),
      review: $('#fReview').value.trim(),
      color: colorVal && colorVal !== 'auto' ? Number(colorVal) : null,
    };
    const y = yearOf(data);
    const before = y ? countInYear(y) : 0;
    if (editingId) {
      const b = books.find(x => x.id === editingId);
      Object.assign(b, data, { updatedAt: Date.now() });
      toast('Changes saved.');
    } else {
      const b = Object.assign({ id: uid(), addedAt: Date.now() }, data);
      books.push(b);
      justAdded = b.id;
      toast(`“${title}” is on the shelf.`);
    }
    const wasEditing = editingId;
    editingId = null;
    save();
    $('#editor').close();
    render();
    const goal = y ? goalFor(y) : 0;
    if (goal && before < goal && countInYear(y) >= goal) celebrate(y);
    else if (wasEditing) setTimeout(() => openDetail(wasEditing), 0);
  }

  // ---------- goals ----------
  function openGoal(year) {
    const y = year || (prefs.year !== 'all' && prefs.year !== 'none' ? prefs.year : thisYear());
    const years = [...new Set([thisYear(), String(+thisYear() + 1), ...yearsAvailable()])].sort((a, b) => b.localeCompare(a));
    $('#gYear').innerHTML = years.map(v => `<option${v === y ? ' selected' : ''}>${v}</option>`).join('');
    syncGoalForm();
    $('#goalError').hidden = true;
    $('#goalDialog').showModal();
    setTimeout(() => $('#gCount').focus(), 30);
  }
  function syncGoalForm() {
    const y = $('#gYear').value;
    const g = goalFor(y);
    $('#gCount').value = g || '';
    $('#goalTitle').textContent = `${y} reading goal`;
    $('#goalSub').textContent = `${countInYear(y)} finished so far. Empty spots on the ${y} shelf hold space for the rest.`;
    $('#goalRemove').hidden = !g;
  }
  function saveGoal(e) {
    e.preventDefault();
    const y = $('#gYear').value;
    const n = parseInt($('#gCount').value, 10);
    if (!(n > 0)) {
      $('#goalError').textContent = 'Enter how many books you want to read, 1 or more.';
      $('#goalError').hidden = false;
      return;
    }
    prefs.goals[y] = n;
    prefs.year = y;
    caseIndex = 0;
    savePrefs();
    $('#goalDialog').close();
    render();
    const left = n - countInYear(y);
    toast(left > 0 ? `Goal saved: ${n} books in ${y}. ${left} to go.` : `Goal saved. You’ve already read ${countInYear(y)} in ${y}.`);
  }

  function celebrate(y) {
    const el = $('#celebrate');
    $('#celebrateText').textContent = `You read ${countInYear(y)} ${countInYear(y) === 1 ? 'book' : 'books'} in ${y} and hit your goal of ${goalFor(y)}.`;
    $('#celebrateRaise').dataset.year = y;
    const conf = el.querySelector('.confetti');
    conf.innerHTML = '';
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const colors = ['#e6c886', '#f3e3c3', '#c97a4b', '#9cc0c8', '#c4dba0', '#e8a37e'];
      for (let i = 0; i < 46; i++) {
        const s = document.createElement('i');
        s.textContent = i % 3 ? '★' : '✦';
        s.style.cssText = `left:${Math.random() * 100}%;--c:${colors[i % colors.length]};--s:${12 + Math.random() * 18}px;--d:${2.4 + Math.random() * 2.2}s;--delay:${Math.random() * 1.2}s;--x:${(Math.random() - .5) * 160}px;--r:${(Math.random() - .5) * 720}deg`;
        conf.appendChild(s);
      }
    }
    el.hidden = false;
    setTimeout(() => $('#celebrateClose').focus(), 50);
  }
  function closeCelebrate() { $('#celebrate').hidden = true; $('#celebrate .confetti').innerHTML = ''; }

  // ---------- backup ----------
  function exportBooks() {
    const payload = { app: 'Tomestead', version: 2, exportedAt: new Date().toISOString(), books, settings: { theme: prefs.theme, goals: prefs.goals } };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `tomestead-backup-${today()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('Backup downloaded.');
  }
  function importBooks(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const incoming = Array.isArray(parsed) ? parsed : parsed.books;
        if (!Array.isArray(incoming)) throw new Error();
        let n = 0;
        for (const b of incoming) {
          if (!b || !b.title) continue;
          const clean = {
            id: String(b.id || uid()), title: String(b.title), author: String(b.author || ''),
            rating: Math.max(0, Math.min(5, parseInt(b.rating, 10) || 0)),
            finished: String(b.finished || ''), pages: parseInt(b.pages, 10) || null,
            genre: String(b.genre || ''), review: String(b.review || ''),
            color: Number.isInteger(b.color) ? b.color : null, addedAt: Number(b.addedAt) || Date.now(),
          };
          const i = books.findIndex(x => x.id === clean.id);
          if (i >= 0) books[i] = clean; else books.push(clean);
          n++;
        }
        const st = !Array.isArray(parsed) && parsed.settings;
        if (st) {
          if (st.theme) prefs.theme = Object.assign({ ...D.DEFAULTS }, st.theme);
          if (st.goals) prefs.goals = Object.assign({}, prefs.goals, st.goals);
          savePrefs();
          D.applyTheme(prefs.theme);
        }
        save(); render();
        toast(`Restored ${n} ${n === 1 ? 'book' : 'books'}${st ? ' and your library settings' : ''}.`);
      } catch {
        toast('That file isn’t a Tomestead backup. Choose a .json file made with “Back up my library”.');
      }
    };
    reader.readAsText(file);
  }

  // ---------- toast ----------
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
  }

  // ---------- install ----------
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $('#installBtn').hidden = false;
  });
  function setupIosTip() {
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const standalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    if (isIos && !standalone && !prefs.iosTipDismissed) $('#iosTip').hidden = false;
  }

  // ---------- events ----------
  function wire() {
    buildStarPicker();
    buildSwatches();

    $('#addBtn').addEventListener('click', () => openEditor());
    document.querySelectorAll('.viewtoggle button').forEach(btn => btn.addEventListener('click', () => {
      prefs.view = btn.dataset.view; savePrefs(); render();
    }));
    $('#sort').addEventListener('change', e => { prefs.sort = e.target.value; savePrefs(); caseIndex = 0; render(); });
    $('#search').addEventListener('input', e => { query = e.target.value; caseIndex = 0; render(); });
    $('#years').addEventListener('click', e => {
      const b = e.target.closest('[data-year]'); if (!b) return;
      prefs.year = b.dataset.year; caseIndex = 0; savePrefs(); render();
    });

    // shared actions inside the library page
    $('#libraryPage').addEventListener('click', e => {
      const ghost = e.target.closest('.book.ghost');
      if (ghost) { const y = ghost.dataset.ghost; return openEditor(null, y === thisYear() ? today() : `${y}-12-31`); }
      const b = e.target.closest('.book');
      if (b) return openDetail(b.dataset.id);
      const it = e.target.closest('.ledger-item');
      if (it) return openDetail(it.dataset.id);
      if (e.target.closest('[data-add]')) return openEditor();
      if (e.target.closest('[data-goal]')) return openGoal();
      if (e.target.closest('[data-all]')) { prefs.year = 'all'; savePrefs(); return render(); }
      if (e.target.closest('[data-clear]')) { query = ''; $('#search').value = ''; render(); }
    });

    // bookcase paging
    $('#prevCase').addEventListener('click', () => goCase(currentCase() - 1));
    $('#nextCase').addEventListener('click', () => goCase(currentCase() + 1));
    let st;
    $('#cases').addEventListener('scroll', () => { clearTimeout(st); st = setTimeout(updatePager, 60); }, { passive: true });
    document.addEventListener('keydown', e => {
      if (onCustomize() || prefs.view !== 'shelf' || document.querySelector('dialog[open]') || !$('#celebrate').hidden) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') goCase(currentCase() + 1);
      if (e.key === 'ArrowLeft') goCase(currentCase() - 1);
    });

    document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
    document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
    $('#detail').addEventListener('close', () => { openId = null; });

    $('#dEdit').addEventListener('click', () => { const id = openId; $('#detail').close(); openEditor(id); });
    $('#dRemove').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      if (!btn.dataset.confirm) { btn.dataset.confirm = '1'; btn.textContent = 'Remove for good?'; return; }
      const b = books.find(x => x.id === openId);
      books = books.filter(x => x.id !== openId);
      save(); $('#detail').close(); render();
      toast(b ? `Removed “${b.title}”.` : 'Removed.');
    });

    $('#bookForm').addEventListener('submit', submitEditor);

    // goals
    $('#goalForm').addEventListener('submit', saveGoal);
    $('#gYear').addEventListener('change', syncGoalForm);
    $('#goalRemove').addEventListener('click', () => {
      const y = $('#gYear').value;
      delete prefs.goals[y]; savePrefs();
      $('#goalDialog').close(); render();
      toast(`Removed your ${y} goal.`);
    });
    $('#celebrateClose').addEventListener('click', closeCelebrate);
    $('#celebrateRaise').addEventListener('click', e => { const y = e.currentTarget.dataset.year; closeCelebrate(); openGoal(y); });
    $('#celebrate').addEventListener('click', e => { if (e.target.id === 'celebrate') closeCelebrate(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#celebrate').hidden) closeCelebrate(); });

    // menu
    const more = $('.more');
    document.addEventListener('click', e => { if (more.open && !more.contains(e.target)) more.open = false; });
    $('#customizeBtn').addEventListener('click', () => { more.open = false; location.hash = 'customize'; });
    $('#goalMenuBtn').addEventListener('click', () => { more.open = false; openGoal(); });
    $('#exportBtn').addEventListener('click', () => { more.open = false; exportBooks(); });
    $('#importBtn').addEventListener('click', () => { more.open = false; $('#importFile').click(); });
    $('#importFile').addEventListener('change', e => { const f = e.target.files[0]; if (f) importBooks(f); e.target.value = ''; });
    $('#installBtn').addEventListener('click', async () => {
      more.open = false;
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      $('#installBtn').hidden = true;
    });
    $('#iosTipClose').addEventListener('click', () => { $('#iosTip').hidden = true; prefs.iosTipDismissed = true; savePrefs(); });

    // customize page
    window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
    $('#czDone').addEventListener('click', () => {
      history.pushState(null, '', location.pathname + location.search);
      render(); window.scrollTo(0, 0);
      toast('Your library has its new look.');
    });
    $('#customizePage').addEventListener('click', e => {
      const t = e.target.closest('.tile'); if (!t) return;
      if (t.dataset.wall) setTheme({ wall: t.dataset.wall });
      else if (t.dataset.wood) setTheme({ wood: t.dataset.wood });
      else if (t.dataset.bookend) setTheme({ bookend: t.dataset.bookend });
      else if (t.dataset.trinket) {
        const k = t.dataset.trinket;
        const list = prefs.theme.trinkets.includes(k) ? prefs.theme.trinkets.filter(x => x !== k) : [...prefs.theme.trinkets, k];
        setTheme({ trinkets: list });
      }
      const sel = t.dataset.wall ? `[data-wall="${t.dataset.wall}"]` : t.dataset.wood ? `[data-wood="${t.dataset.wood}"]` : t.dataset.bookend ? `[data-bookend="${t.dataset.bookend}"]` : `[data-trinket="${t.dataset.trinket}"]`;
      const again = $(`#customizePage .tile${sel}`); again && again.focus();
    });
    $('#czReset').addEventListener('click', () => {
      setTheme({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets] });
      toast('Back to the original look.');
    });

    let rt; let lastW = window.innerWidth;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => { if (window.innerWidth !== lastW) { lastW = window.innerWidth; render(); } }, 120);
    });
    window.addEventListener('storage', e => {
      if (e.key === STORE) { books = load(); render(); }
      if (e.key === PREFS) { prefs = Object.assign(prefs, loadJSON(PREFS, {})); D.applyTheme(prefs.theme); render(); }
    });
  }

  D.applyTheme(prefs.theme);
  wire();
  render();
  setupIosTip();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => render());

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
