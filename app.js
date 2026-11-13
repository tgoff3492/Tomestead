/* Tomestead — your reading library */
(() => {
  'use strict';

  const D = window.TomesteadDecor;
  const Art = window.TomesteadArt;
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
    theme: { ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, goals: {},
  }, loadJSON(PREFS, {}));
  prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, prefs.theme || {});
  prefs.goals = prefs.goals || {};
  prefs.trophies = prefs.trophies || {};
  let query = '';
  let justAdded = null;
  let editingId = null;
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

  // a trophy is earned the moment a year's goal is met, and stays earned
  function syncTrophies() {
    let changed = false;
    Object.keys(prefs.goals).forEach(y => {
      const g = goalFor(y);
      if (!g || countInYear(y) < g) return;
      const t = prefs.trophies[y];
      if (!t || t.goal < g) { prefs.trophies[y] = { goal: g, at: (t && t.at) || today() }; changed = true; }
    });
    if (changed) savePrefs();
  }
  function trophiesShown() {
    const y = prefs.year;
    const all = Object.keys(prefs.trophies).sort().map(yr => ({ year: yr, ...prefs.trophies[yr] }));
    if (y === 'none' || query.trim()) return [];
    return y === 'all' ? all : all.filter(t => t.year === y);
  }

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
    const rowH = rowEl.clientHeight;
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
    const perCase = opts.perCase || SHELVES_PER_CASE;
    while (rows.length < minRows || rows.length % perCase) rows.push([]);

    // where each trinket goes: every piece appears once, somewhere sensible
    const info = rows.map((row, ri) => {
      const w = row.reduce((t, it) => t + width(it) + gap, 0) + (row.length ? bookendW * 2 : 0);
      return { ri, books: row.length > 0, free: inner - w, caseIdx: Math.floor(ri / perCase) };
    });
    const plan = planTrinkets(info, s, rowH);

    const cases = [];
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
      if (row.length && be.w) r.appendChild(decorEl(D.sized(be.svg, s), 'bookend left'));
      row.forEach(it => r.appendChild(it.type === 'book' ? spine(it.b) : ghostSpine(it)));
      if (row.length && be.w) r.appendChild(decorEl(D.sized(be.svg, s), 'bookend right'));
      if (plan[ri].length) r.appendChild(nookEl(plan[ri], info[ri], s));

      shelf.appendChild(r);
      const plank = document.createElement('div');
      plank.className = 'plank';
      shelf.appendChild(plank);
      shelves.appendChild(shelf);
    });

    // trophies stand on top of the first bookcase
    const tro = opts.trophies || [];
    container.classList.toggle('has-top', tro.length > 0);
    if (tro.length && cases[0]) {
      const top = document.createElement('div');
      top.className = 'case-top';
      top.innerHTML = tro.map(t => `<button type="button" class="trophy" data-trophy="${esc(t.year)}" aria-label="${esc(t.year)} reading goal trophy: ${t.goal} books">${Art.drawTrophy(t.year, t.goal, 0.72 * s)}</button>`).join('');
      cases[0].appendChild(top);
    }
    fitSpines(container);
    return cases;
  }

  // ---------- trinket placement ----------
  const tsize = (key, s) => { const z = Art.size(key); return { w: z.w * s, h: z.h * s, base: z.base * s, top: z.top && { y: z.top.y * s, x0: z.top.x0 * s, x1: z.top.x1 * s }, glow: z.glow && { x: z.glow.x * s, y: z.glow.y * s } }; };

  function planTrinkets(info, s, rowH) {
    const picks = [...new Set(prefs.theme.trinkets)].filter(k => D.TRINKETS[k] && Art.A[k]);
    const plan = info.map(() => []);
    if (!picks.length) return plan;
    // a stack of books makes a riser for one small piece (the last small one picked)
    const piles = [];
    const used = new Set();
    let stackTop = null;
    if (picks.includes('stack')) {
      const st = tsize('stack', s), room = st.top.x1 - st.top.x0;
      stackTop = picks.filter(o => o !== 'stack' && D.TRINKETS[o].topper && tsize(o, s).w <= room && st.h - st.top.y + tsize(o, s).h < rowH - 20 * s).pop() || null;
      if (stackTop) used.add(stackTop);
    }
    for (const k of picks) {
      if (used.has(k)) continue;
      used.add(k);
      const sz = tsize(k, s);
      const pile = { key: k, w: sz.w, h: sz.h };
      if (k === 'stack' && stackTop) { pile.topper = stackTop; pile.h = sz.h - sz.top.y + tsize(stackTop, s).h; }
      if (pile.h > rowH - 10 * s) continue;
      piles.push(pile);
    }
    const count = info.map(() => 0);
    const taken = info.map(() => 0);
    for (const p of piles) {
      let best = -1, bestScore = Infinity;
      info.forEach((row, i) => {
        const cap = row.books ? 2 : 3;
        if (count[i] >= cap) return;
        const lead = row.books ? 30 * s : 24 * s;
        const need = taken[i] + p.w + lead + (count[i] ? 26 * s : 0) + 12 * s;
        if (need > row.free) return;
        // fill the first bookcase before moving on; big pieces prefer an empty shelf
        let score = count[i] + row.caseIdx * 1.6 + i * 0.01;
        if (D.TRINKETS[p.key].wide && row.books) score += 0.8;
        if (score < bestScore) { bestScore = score; best = i; }
      });
      if (best < 0) continue;
      plan[best].push(p);
      count[best]++;
      taken[best] += p.w + 26 * s;
    }
    return plan;
  }

  function nookEl(piles, row, s) {
    const nook = document.createElement('div');
    nook.className = 'nook';
    const free = row.free;
    const total = piles.reduce((t, p) => t + p.w, 0);
    const h = hash(piles.map(p => p.key).join('|') + row.ri);
    let xs = [];
    if (row.books) {
      const lead = (24 + (h % 16)) * s;
      if (piles.length === 1) {
        const room = free - lead - total;
        // sometimes beside the books, sometimes given a little space of its own
        xs = [room > 220 * s && (h >> 4) % 3 === 0 ? lead + room * (.45 + ((h >> 6) % 20) / 100) : lead];
      } else {
        const spare = free - lead - total;
        xs = spare > 200 * s
          ? [lead, free - piles[1].w - (24 + ((h >> 5) % 40)) * s]
          : [lead, lead + piles[0].w + Math.min(28 * s, spare * .5)];
      }
    } else {
      const anchors = { 1: [[.34, .62][h % 2]], 2: [[.18, .64], [.26, .72]][h % 2], 3: [[.1, .44, .78], [.14, .5, .8]][h % 2] }[piles.length];
      let edge = 0;
      xs = piles.map((p, i) => {
        let x = anchors[i] * free - p.w / 2;
        x = Math.max(x, edge + (i ? 22 * s : 16 * s));
        x = Math.min(x, free - p.w - 16 * s - piles.slice(i + 1).reduce((t, q) => t + q.w + 22 * s, 0));
        edge = x + p.w;
        return x;
      });
    }
    piles.forEach((p, i) => {
      const el = document.createElement('div');
      el.className = `trinket t-${p.key}`;
      const sz = tsize(p.key, s);
      el.style.left = `${Math.round(xs[i])}px`;
      el.style.bottom = `${Math.round(sz.base - sz.h)}px`;
      el.innerHTML = Art.draw(p.key, s);
      if (sz.glow) el.insertAdjacentHTML('afterbegin', `<span class="halo" style="left:${sz.glow.x}px;top:${sz.glow.y}px"></span>`);
      if (p.topper) {
        const tz = tsize(p.topper, s);
        const top = document.createElement('div');
        top.className = `trinket topper t-${p.topper}`;
        top.style.left = `${Math.round(sz.top.x0 + (sz.top.x1 - sz.top.x0 - tz.w) * (.3 + (h % 40) / 100))}px`;
        top.style.bottom = `${Math.round(sz.h - sz.top.y - (tz.h - tz.base))}px`;
        top.innerHTML = Art.draw(p.topper, s);
        if (tz.glow) top.insertAdjacentHTML('afterbegin', `<span class="halo" style="left:${tz.glow.x}px;top:${tz.glow.y}px"></span>`);
        el.appendChild(top);
      }
      nook.appendChild(el);
    });
    return nook;
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
    const cases = buildCases(wrap, items, { plate: (i) => plate, trophies: trophiesShown() });

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
      const a = b.art || {};
      const thumb = a.status === 'found' && a.ids && a.ids.length
        ? `<img class="thumb" alt="" loading="lazy" src="${Covers.coverURL(a.ids[a.i || 0], 'S')}" data-bg="${c.bg}">`
        : a.status === 'upload' ? `<img class="thumb" alt="" data-upload="${esc(b.id)}" data-bg="${c.bg}">`
        : `<span class="chip" style="--bg:${c.bg}" aria-hidden="true"></span>`;
      return `<li><button type="button" class="ledger-item" data-id="${esc(b.id)}">
        ${thumb}
        <span><h3>${esc(b.title)}</h3><span class="by">${esc(b.author || '')}${b.genre ? `, ${esc(b.genre)}` : ''}</span></span>
        <span class="right">${b.rating ? `<span class="stars-sm" aria-label="${b.rating} of 5 stars">${starsHTML(b.rating)}</span>` : '<span class="date">Not rated</span>'}<br><span class="date">${esc(fmtDate(b.finished))}</span></span>
        ${b.review ? `<p class="excerpt">${esc(b.review)}</p>` : ''}
      </button></li>`;
    }).join('');
    const toChip = (img) => { const sp = document.createElement('span'); sp.className = 'chip'; sp.style.setProperty('--bg', img.dataset.bg); sp.setAttribute('aria-hidden', 'true'); img.replaceWith(sp); };
    ol.querySelectorAll('img.thumb').forEach(img => img.addEventListener('error', () => toChip(img), { once: true }));
    ol.querySelectorAll('img[data-upload]').forEach(async img => {
      const u = await Covers.uploadURL(img.dataset.upload);
      if (u) img.src = u; else toChip(img);
    });
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
    syncTrophies();
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
        <span class="tile-art wall" style="background-color:${w.color};background-image:radial-gradient(ellipse at 30% 0%, rgba(242,182,90,.22), transparent 75%),${D.svgURL(w.tile)};background-size:100% 100%,${Math.round(w.size * .75)}px ${Math.round((w.h || w.size) * .75)}px"></span>
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
      const z = Art.size(k);
      const sc = Math.min(64 / z.h, 104 / z.w);
      return `<button type="button" class="tile" aria-pressed="${on}" data-trinket="${k}">
        <span class="tile-art">${Art.draw(k, sc)}</span>
        <span class="tile-label">${tr.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`;
    }).join('');
    const n = t.trinkets.length;
    $('#czTrinketHint').textContent = n
      ? `${n} picked. Each one appears once, in an open spot on your shelves, starting with the first bookcase. A stack of books will hold one of the small ones on top.`
      : 'No trinkets on display. Pick a few to fill the empty spots on your shelves.';

    renderTablePreview();
    $('#czTable').innerHTML = Object.entries(D.TABLES).map(([k, tb]) => `
      <button type="button" class="tile" role="radio" aria-checked="${t.table === k}" data-table="${k}">
        <span class="tile-art table-art" data-style="${k}"></span>
        <span class="tile-label">${tb.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('');
    $('#czTable').querySelectorAll('.table-art').forEach(el => {
      const w = el.clientWidth || 110, hh = el.clientHeight || 74;
      el.innerHTML = window.TomesteadTable.drawTable({ W: w, H: hh, cx: w / 2, frontY: hh * .74, farY: hh * .2, frontW: w * .92, ratio: .7, unit: 1.4, style: el.dataset.style, items: [], id: 'tt' + el.dataset.style }).html;
    });
    $('#czTableItems').innerHTML = Object.entries(D.TABLE_ITEMS).map(([k, it]) => {
      const on = t.tableItems.includes(k);
      const z = Art.size(it.art);
      const sc = Math.min(64 / z.h, 104 / z.w);
      return `<button type="button" class="tile" aria-pressed="${on}" data-titem="${k}">
        <span class="tile-art">${Art.draw(it.art, sc)}</span>
        <span class="tile-label">${it.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`;
    }).join('');
    const m = t.tableItems.length;
    $('#czTableItemsHint').textContent = m
      ? `${m} of ${D.MAX_TABLE_ITEMS} on the table${m >= D.MAX_TABLE_ITEMS ? '. Take one off to add another' : ''}. Tall pieces go to the back corners.`
      : `Pick up to ${D.MAX_TABLE_ITEMS} things to keep beside your book.`;
    if (window.innerWidth < 720) $('#czTableItemsHint').textContent += ' On a phone there’s only room for the lamp beside your book, so these show on larger screens.';
  }

  function renderTablePreview() {
    const el = $('#czTablePreview');
    const w = el.clientWidth || 600, h = el.clientHeight || 260;
    const narrow = w < 520;
    const phone = window.innerWidth < 720;
    const frontW = narrow ? w * .96 : Math.min(w * .8, 900);
    const T = window.TomesteadTable.drawTable({ W: w, H: h, cx: w / 2, frontY: h * .8, farY: h * .4, frontW, ratio: .72, narrow, unit: frontW / 100, style: prefs.theme.table, items: phone ? prefs.theme.tableItems.filter(k => k === 'lamp') : prefs.theme.tableItems, maxItems: 5, book: true, id: 'tp' });
    el.innerHTML = T.html;
  }

  function setTheme(patch) {
    Object.assign(prefs.theme, patch);
    savePrefs();
    D.applyTheme(prefs.theme);
    renderCustomize();
  }

  // ---------- cover art & summaries ----------
  const Covers = window.TomesteadCovers;
  const inflight = new Map();
  function lookup(b) {
    if (inflight.has(b.id)) return inflight.get(b.id);
    const p = (async () => {
      try {
        const r = await Covers.lookup(b);
        const keep = b.art && (b.art.status === 'upload' || b.art.status === 'plain') ? b.art.status : null;
        b.art = { status: keep || (r.ids.length ? 'found' : 'none'), ids: r.ids, i: 0, olKey: r.olKey };
        b.about = r.about;
        b.lookedUp = Date.now();
        save();
        scheduleListRefresh();
      } catch {
        /* offline or the catalog is busy: try again another time */
      }
    })().finally(() => inflight.delete(b.id));
    inflight.set(b.id, p);
    return p;
  }
  // quietly fetch covers for books that don't have one yet
  let queueRunning = false;
  async function runLookupQueue() {
    if (queueRunning || navigator.onLine === false) return;
    queueRunning = true;
    let n = 0;
    for (const b of [...books].sort((a, c) => (c.addedAt || 0) - (a.addedAt || 0))) {
      if (n >= 40) break;
      if (b.lookedUp || (b.art && (b.art.status === 'upload' || b.art.status === 'plain'))) continue;
      await lookup(b);
      n++;
      await new Promise(r => setTimeout(r, 450));
    }
    queueRunning = false;
  }
  let listTimer;
  function scheduleListRefresh() {
    clearTimeout(listTimer);
    listTimer = setTimeout(() => { if (prefs.view === 'list' && !onCustomize() && !(reader && reader.isOpen())) renderList(); }, 400);
  }

  let reader = null;
  function openDetail(id, el) {
    if (reader) reader.open(id, el);
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
    let target;
    if (editingId) {
      const b = target = books.find(x => x.id === editingId);
      const renamed = b.title !== data.title || (b.author || '') !== data.author;
      Object.assign(b, data, { updatedAt: Date.now() });
      if (renamed) {
        const keep = b.art && (b.art.status === 'upload' || b.art.status === 'plain') ? { status: b.art.status } : null;
        b.art = keep; b.about = null; b.lookedUp = 0;
      }
      toast('Changes saved.');
    } else {
      const b = target = Object.assign({ id: uid(), addedAt: Date.now() }, data);
      books.push(b);
      justAdded = b.id;
      toast(`“${title}” is on the shelf.`);
    }
    if (!target.lookedUp) lookup(target).then(() => { if (reader && reader.currentId() === target.id) reader.refresh(); });
    const wasEditing = editingId;
    editingId = null;
    save();
    $('#editor').close();
    render();
    const goal = y ? goalFor(y) : 0;
    if (wasEditing && reader && reader.currentId() === wasEditing) reader.refresh();
    if (goal && before < goal && countInYear(y) >= goal) celebrate(y);
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
    syncTrophies();
    $('#celebrateText').textContent = `You read ${countInYear(y)} ${countInYear(y) === 1 ? 'book' : 'books'} in ${y} and hit your goal of ${goalFor(y)}. Your ${y} trophy now stands on top of your bookcase.`;
    $('#celebrateTrophy').innerHTML = Art.drawTrophy(y, goalFor(y), 0.9);
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
  const blobToDataURL = (blob) => new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => res(null); r.readAsDataURL(blob); });
  async function exportBooks() {
    const uploads = {};
    try {
      const all = await Covers.allUploads();
      for (const [id, blob] of Object.entries(all)) { if (books.some(b => b.id === id)) uploads[id] = await blobToDataURL(blob); }
    } catch {}
    const clean = books;
    const payload = { app: 'Tomestead', version: 3, exportedAt: new Date().toISOString(), books: clean, settings: { theme: prefs.theme, goals: prefs.goals, trophies: prefs.trophies }, uploads };
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
    reader.onload = async () => {
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
          if (b.art && typeof b.art === 'object') clean.art = { status: String(b.art.status || ''), ids: Array.isArray(b.art.ids) ? b.art.ids.filter(Number.isFinite) : [], i: parseInt(b.art.i, 10) || 0, olKey: b.art.olKey ? String(b.art.olKey) : null };
          if (b.about && b.about.text) clean.about = { text: String(b.about.text), source: String(b.about.source || 'Open Library'), url: String(b.about.url || '') };
          if (b.lookedUp) clean.lookedUp = Number(b.lookedUp) || 0;
          const i = books.findIndex(x => x.id === clean.id);
          if (i >= 0) books[i] = clean; else books.push(clean);
          n++;
        }
        if (!Array.isArray(parsed) && parsed.uploads) {
          for (const [id, dataURL] of Object.entries(parsed.uploads)) {
            if (!dataURL || !String(dataURL).startsWith('data:image/')) continue;
            try { const blob = await (await fetch(dataURL)).blob(); await Covers.putUpload(id, blob); } catch {}
          }
        }
        const st = !Array.isArray(parsed) && parsed.settings;
        if (st) {
          if (st.theme) prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, st.theme);
          if (st.goals) prefs.goals = Object.assign({}, prefs.goals, st.goals);
          if (st.trophies && typeof st.trophies === 'object') {
            for (const [yr, t] of Object.entries(st.trophies)) {
              if (/^\d{4}$/.test(yr) && t && Number(t.goal) > 0) prefs.trophies[yr] = { goal: Number(t.goal), at: String(t.at || '').slice(0, 10) };
            }
          }
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
      const tr = e.target.closest('[data-trophy]');
      if (tr) {
        const y = tr.dataset.trophy, t = prefs.trophies[y];
        return toast(`${y}: you set out to read ${t.goal} ${t.goal === 1 ? 'book' : 'books'} and did it${t.at ? ` (${fmtDate(t.at)})` : ''}.`);
      }
      const ghost = e.target.closest('.book.ghost');
      if (ghost) { const y = ghost.dataset.ghost; return openEditor(null, y === thisYear() ? today() : `${y}-12-31`); }
      const b = e.target.closest('.book');
      if (b) return openDetail(b.dataset.id, b);
      const it = e.target.closest('.ledger-item');
      if (it) return openDetail(it.dataset.id, it.querySelector('.thumb, .chip'));
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
      if (onCustomize() || prefs.view !== 'shelf' || document.querySelector('dialog[open]') || !$('#celebrate').hidden || (reader && reader.isOpen())) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') goCase(currentCase() + 1);
      if (e.key === 'ArrowLeft') goCase(currentCase() - 1);
    });

    document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
    document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
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
    window.addEventListener('online', runLookupQueue);
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
      else if (t.dataset.table) setTheme({ table: t.dataset.table });
      else if (t.dataset.titem) {
        const k = t.dataset.titem, cur = prefs.theme.tableItems;
        if (!cur.includes(k) && cur.length >= D.MAX_TABLE_ITEMS) { toast(`The table holds ${D.MAX_TABLE_ITEMS} things. Take one off first.`); return; }
        setTheme({ tableItems: cur.includes(k) ? cur.filter(x => x !== k) : [...cur, k] });
      }
      else if (t.dataset.trinket) {
        const k = t.dataset.trinket;
        const list = prefs.theme.trinkets.includes(k) ? prefs.theme.trinkets.filter(x => x !== k) : [...prefs.theme.trinkets, k];
        setTheme({ trinkets: list });
      }
      const attr = ['wall', 'wood', 'bookend', 'table', 'titem', 'trinket'].find(a => t.dataset[a]);
      const sel = `[data-${attr}="${t.dataset[attr]}"]`;
      const again = $(`#customizePage .tile${sel}`); again && again.focus();
    });
    $('#czReset').addEventListener('click', () => {
      setTheme({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] });
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
  reader = window.TomesteadReader({
    esc, colorOf, dims, starsHTML, fmtDate, toast,
    theme: () => prefs.theme,
    spineEl: (b) => spine(b),
    getBook: (id) => books.find(x => x.id === id),
    saveBook: () => { save(); scheduleListRefresh(); },
    lookup,
    onEdit: (id) => openEditor(id),
    onRemove: (id) => {
      const b = books.find(x => x.id === id);
      books = books.filter(x => x.id !== id);
      Covers.delUpload(id);
      save(); render();
      toast(b ? `Removed “${b.title}”.` : 'Removed.');
    },
  });
  // props on the reading table
  wire();
  render();
  setupIosTip();
  setTimeout(runLookupQueue, 1500);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => render());

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
