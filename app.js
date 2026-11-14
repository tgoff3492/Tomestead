/* Tomestead — your reading library */
(() => {
  'use strict';

  const D = window.TomesteadDecor;
  const Art = window.TomesteadArt;
  const Sync = window.TomesteadSync;
  // each signed-in reader gets their own copy on this device
  const STORE = 'tomestead.books.v1' + Sync.suffix;
  const PREFS = 'tomestead.prefs.v1' + Sync.suffix;
  const LEGACY_STORE = 'tomestead.books.v1', LEGACY_PREFS = 'tomestead.prefs.v1';
  const firstTimeHere = (() => { try { return Sync.enabled && !!Sync.uid && localStorage.getItem(STORE) === null; } catch { return false; } })();
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
  // (while the sign-in card is up, nobody's library is loaded)
  let books = Sync.gated ? [] : load();
  let prefs = Object.assign({
    view: 'shelf', sort: 'added', year: 'all', iosTipDismissed: false,
    theme: { ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, goals: {},
  }, Sync.gated ? {} : loadJSON(PREFS, {}));
  prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, migrateTheme(prefs.theme || {}));
  // the Golden hour room replaced the old default look (forest wallpaper, walnut shelves)
  // (works on the saved theme before defaults are filled in)
  function migrateTheme(saved) {
    const t = Object.assign({}, saved || {});
    if ((t.v || 1) < 2) {
      if (t.wall === 'forest') t.wall = 'room';
      if (t.wall === 'room' && t.wood === 'walnut') t.wood = 'oak';
      t.v = 2;
    }
    if (t.light && !D.LIGHTS[t.light]) delete t.light;
    return t;
  }
  prefs.goals = prefs.goals || {};
  prefs.trophies = prefs.trophies || {};
  prefs.recs = prefs.recs || { dismissed: [] };
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
  function saveHere() {
    try { localStorage.setItem(STORE, JSON.stringify(books)); }
    catch { toast('Couldn’t save. Your browser storage may be full.'); }
  }
  function save() { saveHere(); Sync.push(); }
  function savePrefsHere() { try { localStorage.setItem(PREFS, JSON.stringify(prefs)); } catch {} }
  function savePrefs() { savePrefsHere(); Sync.push(); }
  const validId = (id) => /^[A-Za-z0-9_-]{1,120}$/.test(id);

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

  // ---------- goals with your own timeline ----------
  // { id, name, target, start: 'YYYY-MM-DD', end: 'YYYY-MM-DD', createdAt, metAt? }
  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  function cleanGoals(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(g => g && validId(String(g.id || '')) && ISO.test(g.start) && ISO.test(g.end) && g.end >= g.start && Number(g.target) > 0)
      .map(g => Object.assign({
        id: String(g.id), name: String(g.name || '').slice(0, 60).trim(),
        target: Math.min(999, Math.floor(Number(g.target))), start: g.start, end: g.end,
        createdAt: Number(g.createdAt) || Date.now(),
      }, ISO.test(g.metAt || '') ? { metAt: g.metAt } : {}));
  }
  const dayNum = (iso) => { const [y, m, d] = iso.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 86400000); };
  const isoOf = (n) => new Date(n * 86400000).toISOString().slice(0, 10);
  const finishedOn = (b) => (ISO.test(String(b.finished || '').slice(0, 10)) ? b.finished.slice(0, 10) : '');
  const booksBetween = (a, z) => books.filter(b => { const f = finishedOn(b); return f && f >= a && f <= z; });
  function shortDate(iso, withYear) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(undefined, withYear ? { month: 'short', day: 'numeric', year: 'numeric' } : { month: 'short', day: 'numeric' });
  }
  function rangeText(a, z) {
    const sameYear = a.slice(0, 4) === z.slice(0, 4);
    const showYear = !sameYear || a.slice(0, 4) !== thisYear();
    if (a === z) return shortDate(a, showYear);
    return `${shortDate(a, !sameYear && showYear)} – ${shortDate(z, showYear)}`;
  }
  const goalName = (g) => g.name || rangeText(g.start, g.end);
  const plural = (n, one, many) => `${n} ${n === 1 ? one : (many || one + 's')}`;

  // where a goal stands today
  function goalInfo(g) {
    const done = g.done ?? booksBetween(g.start, g.end).length;
    const t = dayNum(today()), a = dayNum(g.start), z = dayNum(g.end);
    const status = t < a ? 'upcoming' : t > z ? 'ended' : 'active';
    const met = done >= g.target;
    const left = Math.max(0, g.target - done);
    const daysLeft = status === 'upcoming' ? z - a + 1 : Math.max(0, z - t + 1);
    let note;
    if (met) note = g.metAt ? `Reached ${shortDate(g.metAt, g.metAt.slice(0, 4) !== thisYear())}` : 'Goal reached';
    else if (status === 'ended') note = `Ended ${shortDate(g.end, g.end.slice(0, 4) !== thisYear())} with ${done} of ${g.target}`;
    else if (status === 'upcoming') note = `Starts ${shortDate(g.start, g.start.slice(0, 4) !== thisYear())} · ${plural(daysLeft, 'day')}`;
    else {
      // how fast you'd need to go from here, and whether you're keeping pace
      const total = z - a + 1, elapsed = t - a + 1;
      const every = Math.floor(daysLeft / left);
      const pace = daysLeft >= left ? (every === 1 ? '1 book a day' : `1 book every ${every} days`) : `${left} in ${plural(daysLeft, 'day')}`;
      const expected = Math.floor((g.target * elapsed) / total);
      const track = elapsed > 1 && done < expected ? ' · a little behind' : (done > 0 && done >= expected ? ' · on pace' : '');
      note = `${daysLeft === 1 ? 'Last day' : `${daysLeft} days left`} · ${pace}${track}`;
    }
    return { done, met, left, status, daysLeft, note, pct: Math.min(100, Math.round((done / g.target) * 100)) };
  }
  // remember the day each goal was reached (the finish date of the book that got you there)
  function syncGoalMarks() {
    let changed = false;
    for (const g of prefs.customGoals) {
      const hits = booksBetween(g.start, g.end).map(finishedOn).sort();
      const at = hits.length >= g.target ? hits[g.target - 1] : '';
      if ((g.metAt || '') !== at) { if (at) g.metAt = at; else delete g.metAt; changed = true; }
    }
    if (changed) savePrefs();
  }
  prefs.customGoals = cleanGoals(prefs.customGoals);
  const customMet = () => new Set(prefs.customGoals.filter(g => goalInfo(g).met).map(g => g.id));

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
    const nicheEl = probe.querySelector('.niche');
    const niche = { w: nicheEl.clientWidth, h: nicheEl.clientHeight };
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
    const nichePlan = planNiches(niche, rows.length / perCase, opts.trophies || [], s);
    const plan = planTrinkets(info, s, rowH, nichePlan.used);

    const cases = [];
    rows.forEach((row, ri) => {
      if (ri % perCase === 0) {
        const c = makeCase(opts.plate ? opts.plate(Math.floor(ri / perCase)) : '');
        container.appendChild(c);
        fillNiche(c.querySelector('.niche'), nichePlan.cases[cases.length] || []);
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

    container.classList.remove('has-top');
    fitSpines(container);
    // a climbing vine up the right side of each bookcase and over its arch
    const vk = prefs.theme.vine || 'roses';
    if (vk !== 'none' && window.TomesteadVine) cases.forEach((c, i) => {
      const post = parseFloat(getComputedStyle(c.querySelector('.shelves')).marginRight) || 18;
      const svg = window.TomesteadVine.draw(vk, c.offsetWidth, c.offsetHeight, c.querySelector('.arch').offsetHeight, post, 11 + i * 37 + (container.id === 'czPreview' ? 500 : 0), s);
      if (svg) c.insertAdjacentHTML('beforeend', `<div class="vine" aria-hidden="true">${svg}</div>`);
    });
    return cases;
  }

  // ---------- trinket placement ----------
  const tsize = (key, s) => { const z = Art.size(key); return { w: z.w * s, h: z.h * s, base: z.base * s, top: z.top && { y: z.top.y * s, x0: z.top.x0 * s, x1: z.top.x1 * s }, glow: z.glow && { x: z.glow.x * s, y: z.glow.y * s } }; };

  // ---------- the arch: a display niche at the top of each bookcase ----------
  // Trophies take the niche as they're earned (newest in the middle); any room left holds a
  // trinket or two, which go back to the shelves once trophies need the space.
  const NICHE_PREF = ['globe', 'candle', 'hourglass', 'clock', 'lantern', 'crystal', 'frame', 'succulent', 'teacup', 'plant'];
  function planNiches(niche, caseCount, trophies, s) {
    const out = { cases: [], used: new Set() };
    if (!niche.w || !niche.h) return out;
    const half = niche.w / 2, cx = half, gap = 16 * s;
    const roomAt = (x) => niche.h * Math.sqrt(Math.max(0, 1 - ((x - cx) / half) ** 2));
    const fits = (x0, w, h) => x0 >= 6 && x0 + w <= niche.w - 6 && roomAt(x0) >= h + 6 && roomAt(x0 + w) >= h + 6;
    // newest trophies first, so they get the middle
    const tro = [...trophies].sort((a, b) => String(b.year).localeCompare(String(a.year)));
    const tsc = Math.min(0.75 * s, (niche.h * 0.74) / 152);
    const picks = [...new Set(prefs.theme.trinkets)].filter(k => NICHE_PREF.includes(k) && Art.A[k])
      .sort((a, b) => NICHE_PREF.indexOf(a) - NICHE_PREF.indexOf(b));
    for (let ci = 0; ci < Math.max(1, caseCount); ci++) {
      const items = [];
      if (ci === 0) for (const t of tro) items.push({ kind: 'trophy', t, w: 100 * tsc, h: 152 * tsc, sc: tsc });
      // a trinket or two to keep an empty niche company
      const want = ci === 0 ? Math.max(0, 3 - items.length) : 1;
      let added = 0;
      for (const k of picks) {
        if (added >= want) break;
        if (out.used.has(k)) continue;
        const z = Art.size(k);
        const sc = Math.min(s, (niche.h * 0.6) / z.h, (niche.w * 0.3) / z.w);
        items.push({ kind: 'trinket', key: k, w: z.w * sc, h: z.h * sc, sc, tentative: true });
        added++;
      }
      // place from the middle outward, alternating sides; skip anything the curve won't hold
      const placed = [];
      let left = cx, right = cx, side = 1;
      for (const it of items) {
        let x0 = null;
        if (!placed.length) { const c = cx - it.w / 2; if (fits(c, it.w, it.h)) x0 = c; }
        else {
          const tryR = right + gap, tryL = left - gap - it.w;
          const order = side > 0 ? [tryR, tryL] : [tryL, tryR];
          for (const c of order) if (fits(c, it.w, it.h)) { x0 = c; break; }
        }
        if (x0 === null) continue;
        it.x = x0;
        left = Math.min(left, x0); right = Math.max(right, x0 + it.w);
        side = -side;
        placed.push(it);
        if (it.kind === 'trinket') out.used.add(it.key);
      }
      out.cases.push(placed);
    }
    return out;
  }
  function fillNiche(el, items) {
    if (!el) return;
    el.innerHTML = '';
    for (const it of items) {
      let node;
      if (it.kind === 'trophy') {
        node = document.createElement('button');
        node.type = 'button';
        node.className = 'trophy';
        node.dataset.trophy = it.t.year;
        node.setAttribute('aria-label', `${it.t.year} reading goal trophy: ${it.t.goal} books`);
        node.innerHTML = Art.drawTrophy(it.t.year, it.t.goal, it.sc);
      } else {
        const sz = tsize(it.key, it.sc);
        node = document.createElement('div');
        node.className = `trinket t-${it.key}`;
        node.innerHTML = Art.draw(it.key, it.sc);
        if (sz.glow) node.insertAdjacentHTML('afterbegin', `<span class="halo" style="left:${sz.glow.x}px;top:${sz.glow.y}px"></span>`);
        node.style.marginBottom = `${Math.round(sz.base - sz.h)}px`;
      }
      node.classList.add('nitem');
      node.style.left = `${Math.round(it.x)}px`;
      el.appendChild(node);
    }
  }

  function planTrinkets(info, s, rowH, skip = new Set()) {
    const picks = [...new Set(prefs.theme.trinkets)].filter(k => D.TRINKETS[k] && Art.A[k] && !skip.has(k));
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
    c.innerHTML = `<div class="arch"><div class="niche"></div></div><div class="sill">${plateText ? `<span class="plate">${esc(plateText)}</span>` : ''}</div><div class="lamp" aria-hidden="true"></div><div class="shelves"></div><div class="plinth"></div>`;
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
        : a.status === 'upload' ? `<img class="thumb" alt="" data-upload="${esc(b.id)}" data-url="${esc(a.url || '')}" data-bg="${c.bg}">`
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
      const u = (await Covers.uploadURL(img.dataset.upload)) || img.dataset.url;
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
    const rows = [];
    if (y !== 'all' && y !== 'none') {
      const goal = goalFor(y), done = countInYear(y);
      if (!goal) {
        rows.push(`<div class="goal-row"><p class="goal-text">${done} ${done === 1 ? 'book' : 'books'} in ${esc(y)}.</p><button class="linkbtn" data-goal>Set a goal</button></div>`);
      } else {
        const pct = Math.min(100, Math.round((done / goal) * 100));
        const met = done >= goal;
        rows.push(`<div class="goal-row${met ? ' met' : ''}"><p class="goal-text"><strong>${done} of ${goal}</strong> ${met ? '· goal reached' : `· ${goal - done} to go`}</p>
          <div class="goal-meter" role="progressbar" aria-label="${esc(y)} reading goal" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(done, goal)}"><span style="width:${pct}%"></span></div>
          <button class="linkbtn" data-goal>Change</button></div>`);
      }
    }
    // goals with their own timeline that are running right now
    const live = prefs.customGoals.map(g => ({ g, i: goalInfo(g) })).filter(x => x.i.status === 'active')
      .sort((p, q) => p.g.end.localeCompare(q.g.end));
    live.slice(0, 3).forEach(({ g, i }) => {
      const tail = i.met ? 'goal reached' : (i.daysLeft === 1 ? 'last day' : `${i.daysLeft} days left`);
      rows.push(`<button type="button" class="goal-row custom${i.met ? ' met' : ''}" data-cgoal="${esc(g.id)}" aria-label="${esc(goalName(g))}: ${i.done} of ${g.target}, ${tail}. Edit goal.">
        <span class="goal-text"><span class="goal-name">${esc(goalName(g))}</span> <strong>${i.done} of ${g.target}</strong> · ${tail}</span>
        <span class="goal-meter" aria-hidden="true"><span style="width:${i.pct}%"></span></span></button>`);
    });
    if (live.length > 3) rows.push(`<div class="goal-row"><button class="linkbtn" data-goals>${live.length - 3} more ${live.length - 3 === 1 ? 'goal' : 'goals'}</button></div>`);
    bar.hidden = !rows.length;
    bar.className = 'goalbar';
    bar.innerHTML = rows.join('');
  }

  // ---------- page routing ----------
  const onCustomize = () => location.hash === '#customize';

  function render() {
    syncTrophies();
    syncGoalMarks();
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
    placeFloor();
    justAdded = null;
  }

  // ---------- the floor the bookcase stands on ----------
  const BASEBOARD = 30, SETBACK = 14;   // the bookcase stands a little in front of the wall
  let floorKey = '';
  // measured in layout space (offsetTop), so transforms on the stage (the opening
  // push-in, the reading-table pan) never throw it off
  function offsetIn(el, root) {
    let x = 0, y = 0;
    for (let n = el; n && n !== root; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
    return { x, y };
  }
  function placeFloor() {
    const fl = $('#floor');
    const show = !onCustomize() && prefs.view === 'shelf';
    fl.hidden = !show;
    if (!show) return;
    const stage = $('#stage'), cases = $('#cases');
    const pad = parseFloat(getComputedStyle(cases).paddingBottom) || 0;
    const at = offsetIn(cases, stage);
    const baseY = at.y + cases.offsetHeight - pad;                         // bottom of the bookcase
    const top = Math.round(baseY - SETBACK - BASEBOARD);
    fl.style.top = `${top}px`;
    fl.style.height = '';
    fl.style.bottom = '0';                                                // always runs to the bottom of the page
    // draw well past the bottom so the floor never runs short when the page grows
    // (phone toolbars hiding, a banner appearing) — the extra is clipped
    const W = Math.round(document.documentElement.clientWidth);
    const need = Math.max(stage.offsetHeight, window.innerHeight) - top;
    const H = Math.max(400, Math.ceil((need + Math.max(window.screen.height || 0, 900)) / 200) * 200);
    const key = [W, H, prefs.theme.wood, Math.round(at.x), cases.offsetWidth].join('|');
    if (key === floorKey) return;
    floorKey = key;
    fl.innerHTML = floorSVG(W, H, at.x, cases.offsetWidth);
  }
  function floorSVG(W, H, caseX, caseW) {
    const wood = (D.WOODS.find(w => w.key === prefs.theme.wood) || D.WOODS[0]).v;
    const fy = BASEBOARD;                       // where wall meets floor
    const cx = caseX + caseW / 2;
    // real boards, laid in perspective (CSS 3D), with the lighting drawn over them
    return `<div class="floor-plane" style="top:${fy}px"></div>
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" aria-hidden="true" focusable="false" style="display:block;position:relative">
      <defs>
        <linearGradient id="fl-base" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${wood[2]}"/><stop offset=".6" stop-color="${wood[3]}"/><stop offset="1" stop-color="${wood[4]}"/></linearGradient>
        <linearGradient id="fl-depth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".05"/><stop offset=".55" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".65"/></linearGradient>
        <radialGradient id="fl-shadow"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset=".6" stop-color="#000" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
        <linearGradient id="fl-wallao" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
        <linearGradient id="fl-fade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".4"/><stop offset=".2" stop-color="#000" stop-opacity="0"/><stop offset=".8" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></linearGradient>
      </defs>
      <rect x="0" y="0" width="${W}" height="${BASEBOARD}" fill="url(#fl-base)"/>
      <rect x="0" y="0" width="${W}" height="3" fill="${wood[0]}" opacity=".55"/>
      <rect x="0" y="5" width="${W}" height="1.2" fill="#000" opacity=".35"/>
      <rect x="0" y="${fy}" width="${W}" height="${H - fy}" fill="url(#fl-depth)"/>
      <rect x="0" y="${fy}" width="${W}" height="${Math.min(40, H - fy)}" fill="url(#fl-wallao)"/>
      <rect x="0" y="0" width="${W}" height="${H}" fill="url(#fl-fade)"/>
      <ellipse cx="${cx.toFixed(1)}" cy="${(BASEBOARD + SETBACK).toFixed(1)}" rx="${(caseW * .56).toFixed(1)}" ry="16" fill="url(#fl-shadow)"/>
      <rect x="${(caseX + 6).toFixed(1)}" y="${(BASEBOARD + SETBACK - 3).toFixed(1)}" width="${(caseW - 12).toFixed(1)}" height="7" rx="3" fill="#000" opacity=".55"/>
    </svg>`;
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

    const sun = '<svg viewBox="0 0 64 44" width="64" height="44"><circle cx="32" cy="26" r="10" fill="#f2c45e"/><g stroke="#f2c45e" stroke-width="2.4" stroke-linecap="round"><path d="M32 8v-5M32 49v-5M14 26H9M55 26h-5M19 13l-3-3M45 13l3-3M19 39l-3 3M45 39l3 3"/></g></svg>';
    const moon = '<svg viewBox="0 0 64 44" width="64" height="44"><path d="M38 9a15 15 0 1 0 12 23A12 12 0 0 1 38 9z" fill="#dfe6f5"/><circle cx="14" cy="10" r="1.2" fill="#efe3c0"/><circle cx="54" cy="14" r="1" fill="#efe3c0"/><circle cx="12" cy="34" r="1" fill="#efe3c0"/></svg>';
    const half = '<svg viewBox="0 0 64 44" width="64" height="44"><circle cx="24" cy="24" r="9" fill="#f2c45e"/><path d="M44 10a12 12 0 1 0 9 18A10 10 0 0 1 44 10z" fill="#dfe6f5"/></svg>';
    const lightArt = { system: half, clock: half, day: sun, night: moon };
    $('#czLight').innerHTML = Object.entries(D.LIGHTS).map(([k, l]) => `
      <button type="button" class="tile" role="radio" aria-checked="${(t.light || 'system') === k}" data-light="${k}">
        <span class="tile-art light-art ${k}">${lightArt[k]}</span>
        <span class="tile-label">${l.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('');
    $('#czLightHint').textContent = `Golden hour by day; moonlight and candles by night. ${D.LIGHTS[t.light || 'system'].hint || ''} It’s ${document.documentElement.dataset.light === 'night' ? 'night' : 'day'} in your library right now.`;

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

    $('#czVine').innerHTML = Object.entries(D.VINES).map(([k, v]) => `
      <button type="button" class="tile" role="radio" aria-checked="${(t.vine || 'roses') === k}" data-vine="${k}">
        <span class="tile-art vine-art">${k === 'none' ? '<span style="align-self:center;color:#cdbf9f;font-size:.85rem">None</span>' : (window.TomesteadVine ? window.TomesteadVine.draw(k, 150, 150, 70, 10, 3, .75) : '')}</span>
        <span class="tile-label">${v.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('');

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
      ? `${n} picked. Each one appears once: a few in the arch at the top of your bookcase (until trophies need the room), the rest in open spots on your shelves. A stack of books will hold one of the small ones on top.`
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
        b.art = Object.assign({ status: keep || (r.ids.length ? 'found' : 'none'), ids: r.ids, i: 0, olKey: r.olKey }, photoFields(b.art));
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

  function openEditor(id = null, finished = null, prefill = null) {
    editingId = id;
    const b = id ? books.find(x => x.id === id) : null;
    const f = $('#bookForm');
    f.reset();
    $('#formError').hidden = true;
    $('#formTitle').textContent = b ? 'Edit book' : 'Add a book';
    $('#saveBtn').textContent = b ? 'Save changes' : 'Put it on the shelf';
    $('#fTitle').value = b?.title || prefill?.title || '';
    $('#fAuthor').value = b?.author || prefill?.author || '';
    $('#fFinished').value = b ? (b.finished || '') : (finished || today());
    $('#fPages').value = b?.pages || prefill?.pages || '';
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
    const metBefore = customMet();
    let target;
    if (editingId) {
      const b = target = books.find(x => x.id === editingId);
      const renamed = b.title !== data.title || (b.author || '') !== data.author;
      Object.assign(b, data, { updatedAt: Date.now() });
      if (renamed) {
        const keep = b.art && (b.art.status === 'upload' || b.art.status === 'plain') ? Object.assign({ status: b.art.status }, photoFields(b.art)) : null;
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
    else {
      const won = prefs.customGoals.find(g => !metBefore.has(g.id) && goalInfo(g).met);
      if (won) celebrateGoal(won);
    }
  }

  // ---------- goals ----------
  // the list of everything you're working toward
  function openGoals() {
    renderGoals();
    const d = $('#goalsDialog');
    if (!d.open) d.showModal();
  }
  function renderGoals() {
    const cards = [];
    for (const g of prefs.customGoals) cards.push({ kind: 'c', g, i: goalInfo(g) });
    for (const y of Object.keys(prefs.goals)) {
      if (!goalFor(y)) continue;
      const g = { id: y, name: `${y} reading goal`, target: goalFor(y), start: `${y}-01-01`, end: `${y}-12-31`, done: countInYear(y), metAt: prefs.trophies[y] && prefs.trophies[y].at };
      cards.push({ kind: 'y', g, i: goalInfo(g) });
    }
    // running now first (soonest deadline first), then coming up, then finished
    const rank = (c) => (c.i.status === 'active' ? 0 : c.i.status === 'upcoming' ? 1 : 2);
    cards.sort((p, q) => rank(p) - rank(q) || (rank(p) === 2 ? q.g.end.localeCompare(p.g.end) : rank(p) === 1 ? p.g.start.localeCompare(q.g.start) : p.g.end.localeCompare(q.g.end)));
    $('#goalsList').innerHTML = cards.map(({ kind, g, i }) => `
      <li><button type="button" class="gcard ${i.status}${i.met ? ' met' : ''}" ${kind === 'y' ? `data-ygoal="${esc(g.id)}"` : `data-cgoal="${esc(g.id)}"`}>
        <span class="gc-head"><span class="gc-name">${i.met ? '<span class="gc-check" aria-hidden="true">✓</span>' : ''}${esc(kind === 'y' ? g.name : goalName(g))}</span><span class="gc-count">${i.done} of ${g.target}</span></span>
        ${kind === 'c' && g.name ? `<span class="gc-range">${esc(rangeText(g.start, g.end))}</span>` : ''}
        <span class="gc-meter" aria-hidden="true"><span style="width:${i.pct}%"></span></span>
        <span class="gc-note">${esc(i.note)}</span>
      </button></li>`).join('');
    $('#goalsEmpty').hidden = cards.length > 0;
  }

  // one goal: a whole year (trophy + empty spots on that year's shelf) or your own dates
  let goalEdit = null;          // { kind: 'year'|'custom', id? }
  let goalSpan = 'month';
  function spanRange(span) {
    const t = today(), n = dayNum(t);
    if (span === 'month') {
      const [y, m] = t.split('-').map(Number);
      return [`${y}-${String(m).padStart(2, '0')}-01`, isoOf(dayNum(`${m === 12 ? y + 1 : y}-${String(m === 12 ? 1 : m + 1).padStart(2, '0')}-01`) - 1)];
    }
    if (span === '30') return [t, isoOf(n + 29)];
    if (span === '90') {
      const [y, m, d] = t.split('-').map(Number);
      const e = new Date(Date.UTC(y, m - 1 + 3, d));
      return [t, isoOf(Math.round(e.getTime() / 86400000) - 1)];
    }
    return null;
  }
  function setSpan(span, fill = true) {
    goalSpan = span;
    document.querySelectorAll('#gSpans [data-span]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.span === span)));
    const year = span === 'year';
    $('#gYearField').hidden = !year;
    $('#gDates').hidden = year;
    $('#gNameField').hidden = year;
    if (!year && fill) {
      const r = spanRange(span);
      if (r) { $('#gStart').value = r[0]; $('#gEnd').value = r[1]; }
    }
    if (year && fill) $('#gCount').value = goalFor($('#gYear').value) || $('#gCount').value;
    goalHint();
  }
  // a live line under the form: how many already count, how long the window is
  function goalHint() {
    const sub = $('#goalSub');
    if (goalSpan === 'year') {
      const y = $('#gYear').value;
      sub.textContent = `${countInYear(y)} finished in ${y} so far. Empty spots on the ${y} shelf hold space for the rest, and reaching it earns a trophy for the arch of your bookcase.`;
      $('#goalTitle').textContent = goalEdit && goalEdit.kind === 'year' ? `${y} reading goal` : (goalEdit ? 'Edit goal' : 'New reading goal');
      $('#goalRemove').hidden = !(goalEdit && goalEdit.kind === 'year' && goalFor(y));
      return;
    }
    $('#goalTitle').textContent = goalEdit && goalEdit.id ? 'Edit goal' : 'New reading goal';
    $('#goalRemove').hidden = !(goalEdit && goalEdit.kind === 'custom' && goalEdit.id);
    const a = $('#gStart').value, z = $('#gEnd').value;
    if (!ISO.test(a) || !ISO.test(z) || z < a) { sub.textContent = 'Pick when it starts and ends.'; return; }
    const days = dayNum(z) - dayNum(a) + 1;
    const already = booksBetween(a, z).length;
    const n = parseInt($('#gCount').value, 10);
    let line = `${rangeText(a, z)} · ${plural(days, 'day')}.`;
    if (already) line += ` ${plural(already, 'book')} you’ve logged already ${already === 1 ? 'counts' : 'count'}.`;
    else line += ' Every book you finish in that window counts.';
    if (n > 0 && n > already) {
      const per = days / n;
      line += per >= 1.5 ? ` That’s about one book every ${Math.round(per)} days.` : ` That’s about ${Math.round(n / days * 7)} books a week.`;
    }
    sub.textContent = line;
  }
  function openGoal(year) {
    // opened from the year's goal bar or a trophy: that year's goal
    const y = year || (prefs.year !== 'all' && prefs.year !== 'none' ? prefs.year : thisYear());
    openGoalEditor({ kind: 'year', year: y });
  }
  function openGoalEditor(opts = {}) {
    const years = [...new Set([thisYear(), String(+thisYear() + 1), ...yearsAvailable()])].sort((a, b) => b.localeCompare(a));
    const y = opts.year || thisYear();
    $('#gYear').innerHTML = years.map(v => `<option${v === y ? ' selected' : ''}>${v}</option>`).join('');
    $('#goalError').hidden = true;
    const spans = $('#gSpanField');
    if (opts.kind === 'year') {
      goalEdit = { kind: 'year' };
      spans.hidden = !!goalFor(y);   // changing an existing year goal: just the number
      $('#gCount').value = goalFor(y) || '';
      setSpan('year', false);
    } else if (opts.id) {
      const g = prefs.customGoals.find(x => x.id === opts.id);
      if (!g) return;
      goalEdit = { kind: 'custom', id: g.id };
      spans.hidden = false;
      $('#gName').value = g.name; $('#gStart').value = g.start; $('#gEnd').value = g.end; $('#gCount').value = g.target;
      // show which quick pick it matches, if any
      const match = ['month', '30', '90'].find(sp => { const r = spanRange(sp); return r && r[0] === g.start && r[1] === g.end; });
      setSpan(match || 'custom', false);
    } else {
      goalEdit = { kind: 'custom' };
      spans.hidden = false;
      $('#gName').value = ''; $('#gCount').value = '';
      setSpan('month');
    }
    // the year option only makes sense when you're not editing a dated goal (and vice versa)
    const yearBtn = $('#gSpans [data-span="year"]');
    yearBtn.hidden = !!(goalEdit.kind === 'custom' && goalEdit.id);
    document.querySelectorAll('#gSpans [data-span]').forEach(b => { if (b !== yearBtn) b.hidden = false; });
    $('#goalDialog').showModal();
    setTimeout(() => $('#gCount').value ? null : $('#gCount').focus(), 30);
  }
  function goalError(msg) { $('#goalError').textContent = msg; $('#goalError').hidden = false; }
  function saveGoal(e) {
    e.preventDefault();
    const n = parseInt($('#gCount').value, 10);
    if (!(n > 0 && n <= 999)) return goalError('Enter how many books you want to read, 1 or more.');
    if (goalSpan === 'year') {
      const y = $('#gYear').value;
      prefs.goals[y] = n;
      prefs.year = y;
      caseIndex = 0;
      savePrefs();
      $('#goalDialog').close();
      render();
      if ($('#goalsDialog').open) renderGoals();
      const left = n - countInYear(y);
      toast(left > 0 ? `Goal saved: ${n} books in ${y}. ${left} to go.` : `Goal saved. You’ve already read ${countInYear(y)} in ${y}.`);
      return;
    }
    const a = $('#gStart').value, z = $('#gEnd').value;
    if (!ISO.test(a) || !ISO.test(z)) return goalError('Pick a start date and an end date.');
    if (z < a) return goalError('The end date comes before the start date.');
    if (dayNum(z) - dayNum(a) > 3660) return goalError('Keep it to ten years or less.');
    const name = $('#gName').value.trim().slice(0, 60);
    let g = goalEdit && goalEdit.id && prefs.customGoals.find(x => x.id === goalEdit.id);
    if (g) Object.assign(g, { name, target: n, start: a, end: z });
    else { g = { id: uid(), name, target: n, start: a, end: z, createdAt: Date.now() }; prefs.customGoals.push(g); }
    syncGoalMarks();
    savePrefs();
    $('#goalDialog').close();
    render();
    if ($('#goalsDialog').open) renderGoals();
    const i = goalInfo(g);
    toast(i.met ? `Goal saved. You’ve already read ${i.done} in that stretch.` : `Goal saved: ${plural(n, 'book')} by ${shortDate(z, z.slice(0, 4) !== thisYear())}. ${i.left} to go.`);
  }
  function removeGoal() {
    if (goalSpan === 'year') {
      const y = $('#gYear').value;
      delete prefs.goals[y];
      toast(`Removed your ${y} goal.`);
    } else if (goalEdit && goalEdit.id) {
      const g = prefs.customGoals.find(x => x.id === goalEdit.id);
      prefs.customGoals = prefs.customGoals.filter(x => x.id !== goalEdit.id);
      toast(`Removed “${g ? goalName(g) : 'that goal'}”.`);
    }
    savePrefs();
    $('#goalDialog').close();
    render();
    if ($('#goalsDialog').open) renderGoals();
  }

  // a ribbon for goals with your own timeline (yearly goals get the trophy)
  function drawRibbon(n, s = 1) {
    const k = `rb${Math.random().toString(36).slice(2, 7)}`;
    const big = String(n).length > 2;
    return `<svg viewBox="0 0 100 140" width="${Math.round(100 * s)}" height="${Math.round(140 * s)}" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="${k}g" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#fff1c4"/><stop offset=".45" stop-color="#e2bb63"/><stop offset="1" stop-color="#9c7230"/></radialGradient>
        <linearGradient id="${k}r" x1="0" x2="1"><stop offset="0" stop-color="#5d1a1f"/><stop offset=".5" stop-color="#8e2a2f"/><stop offset="1" stop-color="#5d1a1f"/></linearGradient>
      </defs>
      <path d="M34 66 L18 132 L32 122 L42 136 L54 72Z" fill="url(#${k}r)"/>
      <path d="M66 66 L82 132 L68 122 L58 136 L46 72Z" fill="url(#${k}r)"/>
      <path d="M38 68 L27 116 M62 68 L73 116" stroke="#e6c886" stroke-opacity=".5" stroke-width="1.5"/>
      <g transform="translate(50 50)">
        ${Array.from({ length: 16 }, (_, i) => `<ellipse rx="7" ry="13" transform="rotate(${i * 22.5}) translate(0 -30)" fill="${i % 2 ? '#7a2328' : '#952f34'}"/>`).join('')}
        <circle r="30" fill="#6e1f24"/>
        <circle r="26" fill="url(#${k}g)"/>
        <circle r="21.5" fill="none" stroke="#8a6224" stroke-opacity=".55" stroke-width="1.2"/>
        <text y="${big ? 6 : 8}" text-anchor="middle" font-family="IM Fell English, Georgia, serif" font-size="${big ? 17 : 23}" fill="#5a3d14">${esc(String(n))}</text>
        <text y="-11" text-anchor="middle" font-size="7" fill="#7a5520">★</text>
      </g>
    </svg>`;
  }

  function celebrate(y) {
    syncTrophies();
    $('#celebrateText').textContent = `You read ${countInYear(y)} ${countInYear(y) === 1 ? 'book' : 'books'} in ${y} and hit your goal of ${goalFor(y)}. Your ${y} trophy now stands in the arch of your bookcase.`;
    $('#celebrateTrophy').innerHTML = Art.drawTrophy(y, goalFor(y), 0.9);
    $('#celebrateRaise').dataset.year = y;
    delete $('#celebrateRaise').dataset.cgoal;
    confetti();
  }
  function celebrateGoal(g) {
    const i = goalInfo(g);
    $('#celebrateText').textContent = `You read ${plural(i.done, 'book')} ${g.name ? `for “${g.name}”` : `between ${rangeText(g.start, g.end)}`} and hit your goal of ${g.target}${i.status === 'active' && i.daysLeft > 1 ? `, with ${i.daysLeft} days to spare` : ''}.`;
    $('#celebrateTrophy').innerHTML = drawRibbon(g.target, 0.95);
    $('#celebrateRaise').dataset.cgoal = g.id;
    delete $('#celebrateRaise').dataset.year;
    confetti();
  }
  function confetti() {
    const el = $('#celebrate');
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
    const payload = { app: 'Tomestead', version: 3, exportedAt: new Date().toISOString(), books: clean, settings: { theme: prefs.theme, goals: prefs.goals, trophies: prefs.trophies, customGoals: prefs.customGoals }, uploads };
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
            id: validId(String(b.id || '')) ? String(b.id) : uid(), title: String(b.title), author: String(b.author || ''),
            rating: Math.max(0, Math.min(5, parseInt(b.rating, 10) || 0)),
            finished: String(b.finished || ''), pages: parseInt(b.pages, 10) || null,
            genre: String(b.genre || ''), review: String(b.review || ''),
            color: Number.isInteger(b.color) ? b.color : null, addedAt: Number(b.addedAt) || Date.now(),
          };
          if (b.art && typeof b.art === 'object') clean.art = Object.assign({ status: String(b.art.status || ''), ids: Array.isArray(b.art.ids) ? b.art.ids.filter(Number.isFinite) : [], i: parseInt(b.art.i, 10) || 0, olKey: b.art.olKey ? String(b.art.olKey) : null }, photoFields(b.art));
          if (b.about && b.about.text) clean.about = { text: String(b.about.text), source: String(b.about.source || 'Open Library'), url: String(b.about.url || '') };
          if (b.lookedUp) clean.lookedUp = Number(b.lookedUp) || 0;
          const i = books.findIndex(x => x.id === clean.id);
          if (i >= 0) books[i] = clean; else books.push(clean);
          if (b.id && clean.id !== String(b.id) && !Array.isArray(parsed) && parsed.uploads && parsed.uploads[b.id]) { parsed.uploads[clean.id] = parsed.uploads[b.id]; delete parsed.uploads[b.id]; }
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
          if (st.theme) prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, migrateTheme(st.theme));
          if (st.goals) prefs.goals = Object.assign({}, prefs.goals, st.goals);
          if (Array.isArray(st.customGoals)) {
            for (const g of cleanGoals(st.customGoals)) {
              const i = prefs.customGoals.findIndex(x => x.id === g.id);
              if (i >= 0) prefs.customGoals[i] = g; else prefs.customGoals.push(g);
            }
          }
          if (st.trophies && typeof st.trophies === 'object') {
            for (const [yr, t] of Object.entries(st.trophies)) {
              if (/^\d{4}$/.test(yr) && t && Number(t.goal) > 0) prefs.trophies[yr] = { goal: Number(t.goal), at: String(t.at || '').slice(0, 10) };
            }
          }
          savePrefs();
          D.applyTheme(prefs.theme);
        }
        save(); render(); syncCovers();
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
    const openSearch = (on) => {
      $('.toolbar').classList.toggle('searching', on);
      $('#searchBtn').setAttribute('aria-expanded', String(on));
      if (on) setTimeout(() => $('#search').focus(), 0);
    };
    $('#searchBtn').addEventListener('click', () => openSearch(!$('.toolbar').classList.contains('searching')));
    $('#search').addEventListener('blur', () => { if (!query.trim()) openSearch(false); });
    $('#search').addEventListener('keydown', e => { if (e.key === 'Escape') { query = ''; e.target.value = ''; render(); openSearch(false); } });
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
      const cg = e.target.closest('[data-cgoal]');
      if (cg) return openGoalEditor({ id: cg.dataset.cgoal });
      if (e.target.closest('[data-goals]')) return openGoals();
      if (e.target.closest('[data-all]')) { prefs.year = 'all'; savePrefs(); return render(); }
      if (e.target.closest('[data-clear]')) { query = ''; $('#search').value = ''; $('.toolbar').classList.remove('searching'); render(); }
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
    $('#gYear').addEventListener('change', () => { $('#gCount').value = goalFor($('#gYear').value) || ''; goalHint(); });
    $('#goalRemove').addEventListener('click', removeGoal);
    $('#gSpans').addEventListener('click', e => { const b = e.target.closest('[data-span]'); if (b) setSpan(b.dataset.span); });
    ['#gStart', '#gEnd'].forEach(id => $(id).addEventListener('input', () => {
      const match = ['month', '30', '90'].find(sp => { const r = spanRange(sp); return r && r[0] === $('#gStart').value && r[1] === $('#gEnd').value; });
      setSpan(match || 'custom', false);
    }));
    $('#gCount').addEventListener('input', goalHint);
    $('#newGoalBtn').addEventListener('click', () => openGoalEditor());
    $('#goalsList').addEventListener('click', e => {
      const c = e.target.closest('[data-cgoal]'); if (c) return openGoalEditor({ id: c.dataset.cgoal });
      const y = e.target.closest('[data-ygoal]'); if (y) return openGoalEditor({ kind: 'year', year: y.dataset.ygoal });
    });
    $('#celebrateClose').addEventListener('click', closeCelebrate);
    $('#celebrateRaise').addEventListener('click', e => {
      const { year, cgoal } = e.currentTarget.dataset;
      closeCelebrate();
      if (cgoal) openGoalEditor({ id: cgoal }); else openGoal(year);
    });
    $('#celebrate').addEventListener('click', e => { if (e.target.id === 'celebrate') closeCelebrate(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#celebrate').hidden) closeCelebrate(); });

    // menu
    const more = $('.more');
    document.addEventListener('click', e => { if (more.open && !more.contains(e.target)) more.open = false; });
    $('#customizeBtn').addEventListener('click', () => { more.open = false; location.hash = 'customize'; });
    $('#goalMenuBtn').addEventListener('click', () => { more.open = false; openGoals(); });
    $('#recBtn').addEventListener('click', () => { more.open = false; recommender.open(); });
    $('#exportBtn').addEventListener('click', () => { more.open = false; exportBooks(); });
    $('#signOutBtn').addEventListener('click', () => { more.open = false; Sync.signOut(); });
    more.addEventListener('toggle', () => {
      if (!more.open || !Sync.enabled) return;
      const who = $('#whoAmI'), em = Sync.email();
      who.hidden = !em; who.textContent = em ? `Signed in as ${em}` : '';
    });
    $('#claimYes').addEventListener('click', () => claimLegacy(true));
    $('#claimNo').addEventListener('click', () => claimLegacy(false));
    window.addEventListener('online', runLookupQueue);
    window.addEventListener('online', syncCovers);
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
      else if (t.dataset.light) setTheme({ light: t.dataset.light });
      else if (t.dataset.vine) setTheme({ vine: t.dataset.vine });
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
      const attr = ['wall', 'light', 'wood', 'vine', 'bookend', 'table', 'titem', 'trinket'].find(a => t.dataset[a]);
      const sel = `[data-${attr}="${t.dataset[attr]}"]`;
      const again = $(`#customizePage .tile${sel}`); again && again.focus();
    });
    $('#czReset').addEventListener('click', () => {
      setTheme({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] });
      toast('Back to the original look.');
    });

    // anything above the bookcase can change height after the first paint (fonts arriving,
    // a sync note, the goal bar), so keep the floor tucked under the bookcase whenever it moves
    // day and night: follow the phone's dark mode, or the clock, as chosen in Customize
    const relight = () => D.applyTheme(prefs.theme);
    const dq = window.matchMedia && matchMedia('(prefers-color-scheme: dark)');
    if (dq) (dq.addEventListener ? dq.addEventListener('change', relight) : dq.addListener(relight));
    setInterval(relight, 60000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) relight(); });
    window.addEventListener('tomestead:light', () => { floorKey = ''; if (onCustomize()) renderCustomize(); else placeFloor(); });

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(() => placeFloor());
      ro.observe($('#cases')); ro.observe($('#stage'));
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => placeFloor());
    window.addEventListener('load', () => placeFloor());
    window.addEventListener('resize', () => placeFloor());
    let rt; let lastW = window.innerWidth;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => { if (window.innerWidth !== lastW) { lastW = window.innerWidth; render(); } }, 120);
    });
    window.addEventListener('storage', e => {
      if (e.key === STORE) { books = load(); render(); }  // (another tab of the same reader)
      if (e.key === PREFS) { prefs = Object.assign(prefs, loadJSON(PREFS, {})); D.applyTheme(prefs.theme); render(); }
    });
  }

  // ---------- accounts & syncing ----------
  // a photo cover's cloud copy: where it lives and the link other devices load it from
  function photoFields(a) {
    if (!a || a.status !== 'upload') return {};
    const out = {};
    if (typeof a.url === 'string' && /^https:\/\/firebasestorage\.googleapis\.com\//.test(a.url)) out.url = a.url;
    if (typeof a.path === 'string' && /^covers\/[\w-]+\/[\w.-]+$/.test(a.path)) out.path = a.path;
    return out;
  }
  async function forgetPhoto(b) {
    await Covers.delUpload(b.id);
    if (b.art) { Sync.removeCover(b.art.path); delete b.art.url; delete b.art.path; }
  }
  // send photo covers that only live on this device up to the cloud
  let coversRunning = false;
  async function syncCovers() {
    if (!Sync.signedIn() || coversRunning || navigator.onLine === false) return;
    coversRunning = true;
    try {
      for (const b of books) {
        const a = b.art;
        if (!a || a.status !== 'upload' || a.url) continue;
        const blob = await Covers.getUpload(b.id);
        if (!blob) continue;
        try {
          const up = await Sync.uploadCover(b.id, blob);
          const now = books.find(x => x.id === b.id);
          if (!up) break;
          if (now && now.art && now.art.status === 'upload' && !now.art.url) { Object.assign(now.art, up); save(); }
          else Sync.removeCover(up.path);   // the cover changed while it was uploading
        } catch (e) { console.warn('Tomestead: photo upload failed', e); break; }
      }
    } finally { coversRunning = false; }
  }

  function settingsForSync() {
    return { theme: prefs.theme, goals: prefs.goals, trophies: prefs.trophies, customGoals: prefs.customGoals, recs: prefs.recs };
  }
  function applySettings(s) {
    if (s.theme && typeof s.theme === 'object') prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, migrateTheme(s.theme));
    prefs.goals = s.goals && typeof s.goals === 'object' ? s.goals : {};
    prefs.trophies = s.trophies && typeof s.trophies === 'object' ? s.trophies : {};
    // (a device still on an older version doesn't send these; keep what's here rather than wiping them)
    if (Array.isArray(s.customGoals)) prefs.customGoals = cleanGoals(s.customGoals);
    prefs.recs = s.recs && typeof s.recs === 'object' ? Object.assign({ dismissed: [] }, s.recs) : { dismissed: [] };
    savePrefsHere();
    D.applyTheme(prefs.theme);
    renderSoon();
  }
  function applyBooks({ upserts, removes }) {
    for (const data of upserts) {
      const have = books.find(x => x.id === data.id);
      if (have) { Object.keys(have).forEach(k => delete have[k]); Object.assign(have, data); }
      else books.push(data);
    }
    if (removes.length) {
      const gone = new Set(removes);
      if (reader && reader.isOpen() && gone.has(reader.currentId())) gone.delete(reader.currentId());   // don't pull a book out from under you
      books = books.filter(x => !gone.has(x.id));
    }
    saveHere();
    syncTrophies();
    renderSoon();
  }
  let renderWait = null;
  function renderSoon() {
    clearTimeout(renderWait);
    // wait until the reading table and dialogs are closed, so nothing jumps while you're using it
    if ((reader && reader.isOpen()) || document.querySelector('dialog[open]')) { renderWait = setTimeout(renderSoon, 800); return; }
    if (onCustomize()) renderCustomize(); else render();
  }

  // books saved on this device before accounts existed
  function legacyBooks() {
    try {
      const arr = JSON.parse(localStorage.getItem(LEGACY_STORE));
      return Array.isArray(arr) ? arr.filter(b => b && b.id && b.title) : [];
    } catch { return []; }
  }
  function offerLegacy() {
    if (!firstTimeHere || localStorage.getItem('tomestead.legacy.claimed')) return;
    const old = legacyBooks().filter(b => !books.some(x => x.id === b.id));
    if (!old.length) return;
    $('#claimText').textContent = `This device has ${old.length} ${old.length === 1 ? 'book' : 'books'} from before you signed in. Add ${old.length === 1 ? 'it' : 'them'} to your library? Your goals, trophies and look come too.`;
    $('#claimDialog').showModal();
  }
  function claimLegacy(yes) {
    $('#claimDialog').close();
    if (!yes) { toast('Okay. Those books stay off your shelf.'); return; }
    try { localStorage.setItem('tomestead.legacy.claimed', Sync.uid); } catch {}
    let n = 0;
    for (const b of legacyBooks()) {
      if (!validId(b.id) || books.some(x => x.id === b.id)) continue;
      books.push(b); n++;
    }
    const old = loadJSON(LEGACY_PREFS, {});
    if (old.theme && JSON.stringify(prefs.theme) === JSON.stringify(Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, {}))) {
      prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, migrateTheme(old.theme));
      D.applyTheme(prefs.theme);
    }
    if (old.goals) for (const [y, g] of Object.entries(old.goals)) if (!(prefs.goals[y] > 0)) prefs.goals[y] = g;
    if (old.trophies) for (const [y, t] of Object.entries(old.trophies)) if (!prefs.trophies[y]) prefs.trophies[y] = t;
    for (const g of cleanGoals(old.customGoals)) if (!prefs.customGoals.some(x => x.id === g.id)) prefs.customGoals.push(g);
    if (old.recs && Array.isArray(old.recs.dismissed)) prefs.recs.dismissed = [...new Set([...prefs.recs.dismissed, ...old.recs.dismissed])];
    syncTrophies();
    savePrefs();
    save();
    render();
    syncCovers();
    toast(`Added ${n} ${n === 1 ? 'book' : 'books'} to your library.`);
  }

  if (Sync.enabled) {
    document.querySelectorAll('.signed-in-only').forEach(el => { el.hidden = false; });
    Sync.start({
      books: () => books,
      applyBooks,
      settings: settingsForSync,
      applySettings,
      onReady: () => { offerLegacy(); syncCovers(); },
    });
  }

  D.applyTheme(prefs.theme);
  if (!Sync.gated) savePrefsHere();   // keeps a migrated look for next time (and for the opening scene)
  reader = window.TomesteadReader({
    esc, colorOf, dims, starsHTML, fmtDate, toast,
    theme: () => prefs.theme,
    spineEl: (b) => spine(b),
    getBook: (id) => books.find(x => x.id === id),
    saveBook: () => { save(); scheduleListRefresh(); syncCovers(); },
    forgetPhoto,
    lookup,
    onEdit: (id) => openEditor(id),
    onRemove: (id) => {
      const b = books.find(x => x.id === id);
      books = books.filter(x => x.id !== id);
      Covers.delUpload(id);
      if (b && b.art) Sync.removeCover(b.art.path);
      save(); render();
      toast(b ? `Removed “${b.title}”.` : 'Removed.');
    },
  });
  const recommender = window.TomesteadRecommend({
    esc, toast,
    books: () => books,
    save,
    recs: () => prefs.recs,
    dismiss: (key) => { if (!prefs.recs.dismissed.includes(key)) { prefs.recs.dismissed.push(key); savePrefs(); } },
    addBook: (p) => openEditor(null, today(), p),
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
