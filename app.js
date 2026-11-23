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

  // ---------- where you are and what you're on (sent with feedback and error reports) ----------
  const BUILD = (() => { try { return new URL(document.querySelector('link[href*="room.css"]').href).searchParams.get('v') || ''; } catch { return ''; } })();
  const device = () => {
    const ua = navigator.userAgent;
    const os = /iPhone|iPad|iPod/.test(ua) ? 'iOS' : /Android/.test(ua) ? 'Android' : /Mac/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : 'Other';
    const br = /CriOS|Chrome\//.test(ua) && !/Edg/.test(ua) ? 'Chrome' : /Edg/.test(ua) ? 'Edge' : /Firefox|FxiOS/.test(ua) ? 'Firefox' : /Safari/.test(ua) ? 'Safari' : 'Other';
    const app = matchMedia('(display-mode: standalone)').matches || navigator.standalone ? 'installed' : 'browser';
    return `${os} · ${br} · ${app} · ${innerWidth}×${innerHeight}`;
  };
  const whereNow = () => {
    let w = location.hash ? location.hash.slice(1) : 'home';
    try { w = location.hash ? w : viewNow(); } catch {}
    const d = document.querySelector('dialog[open]');
    return d ? `${w} › ${d.id}` : w;
  };
  // errors anyone hits are reported quietly, so they can be fixed without a bug report
  const reportErr = (msg, src, stack) => {
    if (!msg || /ResizeObserver loop|Script error\.?$/.test(msg)) return;
    Sync.reportError({ msg: String(msg).slice(0, 1000), src: String(src || '').slice(0, 300), stack: String(stack || '').slice(0, 3000), where: whereNow(), device: device(), build: BUILD, when: new Date().toISOString() });
  };
  window.addEventListener('error', (e) => reportErr(e.message, e.filename ? `${e.filename}:${e.lineno}:${e.colno}` : '', e.error && e.error.stack));
  window.addEventListener('unhandledrejection', (e) => { const r = e.reason; reportErr(r && r.message ? r.message : String(r), 'promise', r && r.stack); });
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
    // the drawn trinkets became Poly Haven pieces (Nov 16, 2026): carry each pick over, drop the rest
    if (Array.isArray(t.tableItems)) t.tableItems = [...new Set(t.tableItems.map(k => D.TABLE_ITEMS[k] ? k : D.OLD_TABLE_ITEMS[k]).filter(k => k && D.TABLE_ITEMS[k]))];
    if (Array.isArray(t.trinkets)) t.trinkets = [...new Set(t.trinkets.map(k => D.TRINKETS[k] ? k : D.OLD_TRINKETS[k]).filter(k => k && D.TRINKETS[k]))];
    return t;
  }
  prefs.goals = prefs.goals || {};
  prefs.trophies = prefs.trophies || {};
  // the 3D reading room became home in Nov 2026: move every device there once (Classic is one tap away)
  if (!prefs.roomV1) { prefs.view = 'room'; prefs.roomV1 = true; }
  // the room needs WebGL 2; anything without it keeps the classic bookcase
  let canRoom = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext && c.getContext('webgl2')); } catch { return false; } })();
  // the reading room is home: the app always opens there (Room · Classic · List still switches any time)
  if (canRoom) prefs.view = 'room';
  const viewNow = () => (prefs.view === 'room' && !canRoom ? 'shelf' : prefs.view);
  prefs.recs = prefs.recs || { dismissed: [] };
  // days marked as reading days by hand (the reading calendar), and a reading session in progress
  const cleanMarks = (a) => (Array.isArray(a) ? [...new Set(a.filter(d => /^\d{4}-\d{2}-\d{2}$/.test(String(d))))].sort().slice(-3000) : []);
  const cleanTimer = (t) => (t && typeof t === 'object' && /^[A-Za-z0-9_-]{1,120}$/.test(String(t.id || '')) && Number(t.start) > 0 ? { id: String(t.id), start: Number(t.start) } : null);
  prefs.readMarks = cleanMarks(prefs.readMarks);
  prefs.timer = cleanTimer(prefs.timer);
  let calendar = null, memories = null, ritual = null, openLife = () => {};
  // tags: a starter set you can change, plus any you make yourself
  const TAG_PRESETS = ['Favorite', 'Comfort read', 'Book club', 'Cozy', 'Dark', 'Funny', 'Hopeful', 'Emotional', 'Mysterious', 'Adventurous', 'Thought-provoking', 'Fast-paced'];
  function cleanTags(arr) {
    const out = [];
    for (const t of Array.isArray(arr) ? arr : []) {
      const v = String(t || '').replace(/\s+/g, ' ').trim().slice(0, 30);
      if (v && !out.some(x => x.toLowerCase() === v.toLowerCase())) out.push(v);
    }
    return out;
  }
  prefs.tagList = cleanTags(Array.isArray(prefs.tagList) ? prefs.tagList : TAG_PRESETS);
  let tagFilter = null;        // show only books with this tag
  let query = '';
  let justAdded = null;
  let editingId = null;
  let pickedRating = 0;
  let caseIndex = 0;
  let defaultFinished = null;
  let bookendFor = 'read';     // which section Customize → Bookends is choosing for

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
    const pages = pagesOf(b);
    if (pages > 0) width = Math.min(66, Math.max(24, 18 + pages / 16));
    else width = 26 + ((h >>> 5) % 30);                         // 26–55px
    width = Math.round(width * (s < 1 ? 0.86 : 1));
    const variant = (h >>> 9) % 4;
    const fs = Math.max(10, Math.min(17, width * 0.4));
    return { height, width, variant, fs };
  }

  // ---------- reading status, finish dates, format ----------
  // status: 'read' (the default, also older books with none), 'reading', 'want' or 'dnf'.
  // `finished` is the latest time you finished it; `rereads` holds the earlier times.
  const STATUSES = ['read', 'reading', 'want', 'dnf'];
  const statusOf = (b) => (STATUSES.includes(b.status) ? b.status : 'read');
  function datesOf(b) {
    const out = [];
    [b.finished, ...(Array.isArray(b.rereads) ? b.rereads : [])].forEach(d => { d = String(d || ''); if (/^\d{4}/.test(d) && !out.includes(d)) out.push(d); });
    return out;
  }
  // on your read shelves: finished at least once (a book you're rereading stays there too)
  const isRead = (b) => statusOf(b) === 'read' || datesOf(b).length > 0;
  const readBooks = () => books.filter(isRead);
  const FORMATS = { print: 'Print', ebook: 'Ebook', audio: 'Audiobook' };
  const formatOf = (b) => (FORMATS[b.format] ? b.format : 'print');
  const PAGES_PER_HOUR = 30;   // so an audiobook gets a spine about as thick as the printed book
  const pagesOf = (b) => (formatOf(b) === 'audio' && b.hours > 0 ? Math.round(b.hours * PAGES_PER_HOUR) : (b.pages > 0 ? b.pages : 0));
  // how far along a book you're reading is, 0–100 (null if unknown)
  function pctOf(b) {
    const v = Number(b.progress);
    if (!(v >= 0)) return null;
    if (formatOf(b) === 'print') return b.pages > 0 ? Math.min(100, Math.round((v / b.pages) * 100)) : null;
    return Math.min(100, Math.round(v));
  }
  function progressText(b) {
    const v = Number(b.progress) || 0;
    if (!v) return 'Just started';
    if (formatOf(b) === 'print') return b.pages > 0 ? `p. ${v} of ${b.pages}` : `p. ${v}`;
    return `${Math.round(v)}%`;
  }
  const seriesText = (b) => (b.series ? `${b.series}${b.seriesNo != null && b.seriesNo !== '' ? ` #${b.seriesNo}` : ''}` : '');
  const tagsOf = (b) => (Array.isArray(b.tags) ? b.tags : []);
  // every tag you know: your list first, then any only found on books (from an import, another device)
  function tagVocab() {
    const all = [...prefs.tagList];
    for (const b of books) for (const t of tagsOf(b)) if (!all.some(x => x.toLowerCase() === t.toLowerCase())) all.push(t);
    return all;
  }

  // ---------- years & goals ----------
  const yearOf = (b) => (/^\d{4}/.test(b.finished || '') ? b.finished.slice(0, 4) : '');
  const inYear = (b, y) => datesOf(b).some(d => d.slice(0, 4) === y);
  function yearsAvailable() {
    const ys = new Set();
    books.forEach(b => datesOf(b).forEach(d => ys.add(d.slice(0, 4))));
    ys.add(thisYear());
    Object.keys(prefs.goals).forEach(y => ys.add(y));
    return [...ys].sort((a, b) => b.localeCompare(a));
  }
  // every time you finished a book counts (a reread in a new year counts again)
  const countInYear = (y) => books.reduce((n, b) => n + datesOf(b).filter(d => d.slice(0, 4) === y).length, 0);
  const goalFor = (y) => (prefs.goals[y] > 0 ? prefs.goals[y] : 0);
  // years you can still set a goal for: this one and next (a goal counts from the day you set it)
  const goalYearOpen = (y) => /^\d{4}$/.test(y) && y >= thisYear() && y <= String(+thisYear() + 1);
  // ask "set a goal?" only when no goal is set for that year and none of your own is running or coming up
  const offerYearGoal = (y) => goalYearOpen(y) && !goalFor(y) && !prefs.customGoals.some(g => g.end >= today());

  // ---------- goals with your own timeline ----------
  // { id, name, target, start: 'YYYY-MM-DD', end: 'YYYY-MM-DD', createdAt, since, skip[], metAt? }
  // A goal counts books you finish from the day you set it (since); the finishes already on your
  // shelf that day are listed in skip so they don't count. The rules live in goals.js.
  const G = window.TomesteadGoals;
  const ISO = G.ISO, dayNum = G.dayNum, isoOf = G.isoOf;
  const cleanSkip = (a) => (Array.isArray(a) ? a.filter(k => typeof k === 'string' && k.length < 200).slice(0, 3000) : []);
  function cleanGoals(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(g => g && validId(String(g.id || '')) && ISO.test(g.start) && ISO.test(g.end) && g.end >= g.start && Number(g.target) > 0)
      .map(g => Object.assign({
        id: String(g.id), name: String(g.name || '').slice(0, 60).trim(),
        target: Math.min(999, Math.floor(Number(g.target))), start: g.start, end: g.end,
        createdAt: Number(g.createdAt) || Date.now(),
      }, ISO.test(g.since || '') ? { since: g.since, skip: cleanSkip(g.skip) } : {}, ISO.test(g.metAt || '') ? { metAt: g.metAt } : {}));
  }
  function cleanSince(o) {
    const out = {};
    if (o && typeof o === 'object') for (const [y, v] of Object.entries(o)) if (/^\d{4}$/.test(y) && v && ISO.test(v.since || '')) out[y] = { since: v.since, skip: cleanSkip(v.skip) };
    return out;
  }
  const localDay = (ms) => { const d = new Date(ms); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  // a year's goal, as a window like any other
  function yearGoal(y) {
    const s = prefs.goalSince[y] || {};
    return { start: `${y}-01-01`, end: `${y}-12-31`, target: goalFor(y), since: s.since, skip: s.skip };
  }
  const goalFinishes = (g) => G.counted(g, books, datesOf);
  // how many books count toward the year's goal (not the same as how many you finished that year)
  const countForGoal = (y) => (goalFor(y) ? goalFinishes(yearGoal(y)).length : 0);
  // a goal you're setting right now: from today, not counting what's already on the shelf
  const stampGoal = (g) => G.stamp(Object.assign({}, g, { since: '' }), books, datesOf, today());
  // goals saved before that rule: a dated goal counts from the day it was made; a year goal from
  // today (or the whole year, for a year that's already over)
  function adoptOldGoals() {
    if (!books.length) return;           // wait for the library to load, or nothing would be skipped
    let changed = false;
    for (const g of prefs.customGoals) {
      if (g.since) continue;
      Object.assign(g, G.adoptOld(g, books, datesOf, today(), localDay(g.createdAt || Date.now())));
      changed = true;
    }
    for (const y of Object.keys(prefs.goals)) {
      if (!goalFor(y) || prefs.goalSince[y]) continue;
      prefs.goalSince[y] = y < thisYear() ? { since: `${y}-01-01`, skip: [] } : stampGoal(yearGoal(y));
      changed = true;
    }
    if (changed) savePrefs();
  }
  function shortDate(iso, withYear) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(undefined, withYear ? { month: 'short', day: 'numeric', year: 'numeric' } : { month: 'short', day: 'numeric' });
  }
  const shortAuto = (iso) => shortDate(iso, iso.slice(0, 4) !== thisYear());
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
    const done = g.done ?? goalFinishes(g).length;
    return G.info(g, done, today(), g.metAt, shortAuto);
  }
  // remember the day each goal was reached (the finish date of the book that got you there)
  function syncGoalMarks() {
    let changed = false;
    for (const g of prefs.customGoals) {
      const at = G.reachedOn(goalFinishes(g), g.target, today());
      if ((g.metAt || '') !== at) { if (at) g.metAt = at; else delete g.metAt; changed = true; }
    }
    if (changed) savePrefs();
  }
  prefs.customGoals = cleanGoals(prefs.customGoals);
  prefs.goalSince = cleanSince(prefs.goalSince);
  // which goals are reached right now (years and your own), to spot the one a book just finished
  const goalsMet = () => new Set([
    ...prefs.customGoals.filter(g => goalInfo(g).met).map(g => g.id),
    ...Object.keys(prefs.goals).filter(y => goalFor(y) && countForGoal(y) >= goalFor(y)).map(y => 'y' + y),
  ]);

  // a trophy is earned the moment a year's goal is met, and stays earned
  function syncTrophies() {
    let changed = false;
    Object.keys(prefs.goals).forEach(y => {
      const g = goalFor(y);
      if (!g) return;
      const hits = goalFinishes(yearGoal(y));
      if (hits.length < g) return;
      const t = prefs.trophies[y];
      if (!t || t.goal < g) { prefs.trophies[y] = { goal: g, at: G.reachedOn(hits, g, today()) || today() }; changed = true; }
    });
    if (changed) savePrefs();
  }
  // the room grows as you read (growth.js): what this library has earned, kept forever. A reader's
  // history is adopted quietly the first time; anything new after that arrives in the room with a
  // small moment (queued on this device until the room plays it)
  const Grow = window.TomesteadGrowth;
  const ARRIVE_KEY = 'tomestead.arrivals' + (Sync.suffix || '');
  function syncEarned() {
    if (!Grow || Sync.gated) return;
    if (Sync.enabled && !Sync.isReady()) return;     // wait for the cloud's copy before adopting a history
    const r = Grow.update(books, prefs.earned, today());
    if (!r.adopted && !r.fresh.length) return;
    prefs.earned = r.earned;
    savePrefs();
    if (r.fresh.length) {
      const q = loadJSON(ARRIVE_KEY, []);
      try { localStorage.setItem(ARRIVE_KEY, JSON.stringify([...new Set([...(Array.isArray(q) ? q : []), ...r.fresh])])); } catch {}
      if (window.TomesteadRoom && window.TomesteadRoom.arrive) window.TomesteadRoom.arrive();
    }
  }
  function cleanFamily(f) {
    return { share: f && f.share === false ? false : true, name: String((f && f.name) || '').trim().slice(0, 40) };
  }
  prefs.family = cleanFamily(prefs.family);
  function trophiesShown() {
    const y = prefs.year;
    const all = Object.keys(prefs.trophies).sort().map(yr => ({ year: yr, ...prefs.trophies[yr] }));
    if (y === 'none' || STATUSES.includes(y) || query.trim() || tagFilter) return [];
    return y === 'all' ? all : all.filter(t => t.year === y);
  }

  // ---------- sorting & filtering ----------
  // which shelf you're looking at: all you've read, one year, no date, or a status
  function shelfBooks(y = prefs.year) {
    if (y === 'reading' || y === 'want' || y === 'dnf') return books.filter(b => statusOf(b) === y);
    const read = readBooks();
    if (y === 'all') return read;
    if (y === 'none') return read.filter(b => !datesOf(b).length);
    return read.filter(b => inYear(b, y));
  }
  const filtering = () => !!(query.trim() || tagFilter);

  // The All shelf holds every book, in sections, each between its own pair of bookends:
  // what you're reading, what's next, what you've read. Set-aside books stay tucked away
  // (their own pill), except when a search or tag finds one.
  const SECTIONS = { reading: 'Reading now', want: 'To read', read: 'Read', dnf: 'Set aside' };
  const SECTION_ORDER = { reading: 0, want: 1, read: 2, dnf: 3 };
  const sectioned = () => prefs.year === 'all';
  // which bookends stand at each section; reading and to-read default to styles unlike the rest
  const BOOKEND_PICKS = { reading: ['owl', 'stones', 'oak', 'marble', 'brass'], want: ['oak', 'marble', 'stones', 'owl', 'brass'] };
  function sectionBookend(sec) {
    const t = prefs.theme;
    if (sec !== 'reading' && sec !== 'want') return t.bookend;
    const saved = t.bookends && t.bookends[sec];
    if (saved && D.BOOKENDS[saved]) return saved;
    if (t.bookend === 'none') return 'none';
    const taken = [t.bookend];
    if (sec === 'want') taken.push(sectionBookend('reading'));
    return BOOKEND_PICKS[sec].find(k => !taken.includes(k)) || t.bookend;
  }

  function visibleBooks() {
    const q = query.trim().toLowerCase();
    const has = (v) => String(v || '').toLowerCase().includes(q);
    const base = sectioned() ? books.filter(b => statusOf(b) !== 'dnf' || filtering()) : shelfBooks();
    let list = base.filter(b => !q || has(b.title) || has(b.author) || has(b.genre) || has(b.series) || tagsOf(b).some(has));
    if (tagFilter) list = list.filter(b => tagsOf(b).some(t => t.toLowerCase() === tagFilter.toLowerCase()));
    const byStr = (k) => (a, b) => (a[k] || '').localeCompare(b[k] || '', undefined, { sensitivity: 'base' });
    switch (prefs.sort) {
      case 'title': list.sort(byStr('title')); break;
      case 'author': list.sort((a, b) => surname(a.author).localeCompare(surname(b.author)) || byStr('title')(a, b)); break;
      case 'rating': list.sort((a, b) => (b.rating || 0) - (a.rating || 0) || byStr('title')(a, b)); break;
      case 'finished': list.sort((a, b) => (b.finished || '').localeCompare(a.finished || '')); break;
      // each series together, in order; books outside a series after them, by author
      case 'series': list.sort((a, b) => (!a.series - !b.series) || byStr('series')(a, b) || ((Number(a.seriesNo) || 0) - (Number(b.seriesNo) || 0)) || surname(a.author).localeCompare(surname(b.author)) || byStr('title')(a, b)); break;
      default: list.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
    }
    // sections keep their order; the chosen sort applies within each one
    if (sectioned()) list.sort((a, b) => SECTION_ORDER[statusOf(a)] - SECTION_ORDER[statusOf(b)]);
    // in the to-read pile, books marked "Up next" come first, in the order you marked them
    const slots = [], wants = [];
    list.forEach((b, i) => { if (statusOf(b) === 'want') { slots.push(i); wants.push(b); } });
    wants.sort((a, b) => (!a.upNext - !b.upNext) || ((a.upNext || 0) - (b.upNext || 0)));
    slots.forEach((i, k) => { list[i] = wants[k]; });
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
  // whole and half stars (a half star is an empty star with its left half filled)
  function starsHTML(n) {
    let out = '';
    for (let i = 1; i <= 5; i++) out += i <= n ? '<span class="on">★</span>' : i - 0.5 === n ? '<span class="hstar"><span class="off">★</span><span class="on">★</span></span>' : '<span class="off">★</span>';
    return out;
  }
  const starWords = (n) => `${String(n).replace('.5', '½')} of 5 stars`;
  const halfStar = (v) => { const n = parseFloat(v); return n > 0 ? Math.max(0.5, Math.min(5, Math.round(n * 2) / 2)) : 0; };

  const FORMAT_MARK = {
    audio: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 9.5V8a5 5 0 0 1 10 0v1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="2" y="9" width="3" height="5" rx="1.2" fill="currentColor"/><rect x="11" y="9" width="3" height="5" rx="1.2" fill="currentColor"/></svg>',
    ebook: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="1.5" width="9" height="13" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 12.2h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  };
  function spine(b, opts = {}) {
    const d = dims(b), c = colorOf(b);
    const st = statusOf(b);
    const el = document.createElement('button');
    el.type = 'button';
    // a ribbon marks your place in a book you're reading
    // ...and a slip of paper where you stopped in one you set aside
    const mark = opts.plain ? '' : st === 'reading' ? ' ribbon' : st === 'dnf' ? ' slip' : '';
    // books in hand lean a little; books still waiting look new
    const look = opts.plain ? '' : st === 'reading' ? ' lean' : st === 'want' ? ' fresh' : '';
    el.className = `book v${d.variant}${c.light ? ' light' : ''}${b.id === justAdded ? ' arrive' : ''}${mark}${look}`;
    el.style.cssText = `--w:${d.width}px;--h:${d.height}px;--bg:${c.bg};--ink:${c.ink};--fs:${d.fs}px`;
    el.dataset.id = b.id;
    const r = b.rating || 0;
    const note = st === 'reading' ? ', reading now' : st === 'want' ? ', want to read' : st === 'dnf' ? ', set aside' : '';
    el.setAttribute('aria-label', `${b.title} by ${b.author || 'unknown author'}${r ? `, ${starWords(r)}` : ''}${note}`);
    const fm = FORMAT_MARK[formatOf(b)];
    el.innerHTML =
      (r ? `<span class="s-stars" aria-hidden="true">${starsHTML(r)}</span>` : '') +
      `<span class="s-title">${esc(b.title)}</span>` +
      (b.author ? `<span class="s-author">${esc(spineAuthor(b.author))}</span>` : '') +
      (fm ? `<span class="s-format">${fm}</span>` : '') +
      (mark ? `<span class="s-mark" aria-hidden="true"></span>` : '');
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
  // items: [{type:'book', b, sec} | {type:'ghost', year, n}] — packed into rows, 3 rows per bookcase.
  // Each run of one section on a shelf stands between that section's bookends; opts.labels puts a
  // brass label on the shelf edge where a section starts (and again at the top of each bookcase).
  function buildCases(container, items, opts = {}) {
    const s = scale();
    const beOf = (sec) => D.BOOKENDS[sectionBookend(sec)] || D.BOOKENDS.none;
    const beW = (sec) => { const be = beOf(sec); return be.w ? be.w * s + 2 : 0; };
    const gap = 3;
    const segGap = Math.round(12 * s);    // breathing room between two sections on one shelf

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
    const room = Math.max(100 + beW(null) * 2, inner);

    const width = (it) => (it.type === 'book' ? dims(it.b).width : dims({ id: `ghost-${it.year}-${it.n}`, title: 'ghost' }).width);
    const secOf = (it) => it.sec || null;
    // what an item adds to a shelf: itself, plus a pair of bookends when it starts a new run
    const adds = (it, prev) => width(it) + (prev && secOf(prev) === secOf(it) ? 0 : beW(secOf(it)) * 2 + (prev ? segGap : 0));
    const rowWidth = (row) => row.reduce((t, it, i) => t + adds(it, row[i - 1]) + gap, 0);
    const rows = [];
    let cur = [], used = 0;
    for (const it of items) {
      if (cur.length && used + adds(it, cur[cur.length - 1]) > room) { rows.push(cur); cur = []; used = 0; }
      used += adds(it, cur[cur.length - 1]) + gap;
      cur.push(it);
    }
    if (cur.length) rows.push(cur);
    const maxRows = opts.maxRows || Infinity;
    if (rows.length > maxRows) rows.length = maxRows;
    const minRows = opts.minRows ?? SHELVES_PER_CASE;
    const perCase = opts.perCase || SHELVES_PER_CASE;
    while (rows.length < minRows || rows.length % perCase) rows.push([]);

    // where each trinket goes: every piece appears once, somewhere sensible
    const info = rows.map((row, ri) => ({ ri, books: row.length > 0, free: inner - rowWidth(row), caseIdx: Math.floor(ri / perCase) }));
    const nichePlan = planNiches(niche, rows.length / perCase, opts.trophies || [], s);
    const plan = planTrinkets(info, s, rowH, nichePlan.used);

    const cases = [];
    let labeled = new Set();
    rows.forEach((row, ri) => {
      if (ri % perCase === 0) {
        const c = makeCase(opts.plate ? opts.plate(Math.floor(ri / perCase)) : '');
        container.appendChild(c);
        fillNiche(c.querySelector('.niche'), nichePlan.cases[cases.length] || []);
        cases.push(c);
        labeled = new Set();
      }
      const shelves = cases[cases.length - 1].querySelector('.shelves');
      const shelf = document.createElement('div');
      shelf.className = 'shelf';
      const r = document.createElement('div');
      r.className = 'shelf-row' + (row.length ? '' : ' sparse');
      const starts = [];
      row.forEach((it, i) => {
        const prev = row[i - 1];
        const fresh = !prev || secOf(prev) !== secOf(it);
        if (fresh && prev) {
          const pb = beOf(secOf(prev));
          if (pb.w) r.appendChild(decorEl(D.sized(pb.svg, s), 'bookend right'));
        }
        const be = beOf(secOf(it));
        let first = null;
        if (fresh && be.w) r.appendChild(first = decorEl(D.sized(be.svg, s), 'bookend left'));
        const el = it.type === 'book' ? spine(it.b) : ghostSpine(it);
        r.appendChild(el);
        if (fresh) {
          first = first || el;
          if (prev) first.style.marginLeft = `${segGap}px`;
          if (it.sec) first.classList.add('sec-start');
          if (opts.labels && it.sec && !labeled.has(it.sec)) { labeled.add(it.sec); starts.push({ sec: it.sec, el: first }); }
        }
      });
      if (row.length) {
        const lb = beOf(secOf(row[row.length - 1]));
        if (lb.w) r.appendChild(decorEl(D.sized(lb.svg, s), 'bookend right'));
      }
      if (plan[ri].length) r.appendChild(nookEl(plan[ri], info[ri], s));

      shelf.appendChild(r);
      const plank = document.createElement('div');
      plank.className = 'plank';
      shelf.appendChild(plank);
      shelves.appendChild(shelf);
      // a small brass label on the shelf edge where each section begins
      starts.forEach(({ sec, el }) => {
        const n = opts.labels[sec];
        const tag = document.createElement('span');
        tag.className = `shelf-label sec-${sec}`;
        tag.textContent = n != null ? `${SECTIONS[sec]} · ${n}` : SECTIONS[sec];
        plank.appendChild(tag);
        const x = Math.max(4, Math.min(el.offsetLeft, plank.clientWidth - tag.offsetWidth - 4));
        tag.style.left = `${Math.round(x)}px`;
      });
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
  const NICHE_PREF = ['bust', 'chinavase', 'lion', 'horse', 'brassvase', 'photo', 'oillantern', 'pottedplant', 'stonecat', 'frog', 'aloe', 'binoculars', 'compass', 'camera', 'seashell'];
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
    if (picks.includes('bookstack')) {
      const st = tsize('bookstack', s), room = st.top.x1 - st.top.x0;
      stackTop = picks.filter(o => o !== 'bookstack' && D.TRINKETS[o].topper && tsize(o, s).w <= room && st.h - st.top.y + tsize(o, s).h < rowH - 20 * s).pop() || null;
      if (stackTop) used.add(stackTop);
    }
    for (const k of picks) {
      if (used.has(k)) continue;
      used.add(k);
      const sz = tsize(k, s);
      const pile = { key: k, w: sz.w, h: sz.h };
      if (k === 'bookstack' && stackTop) { pile.topper = stackTop; pile.h = sz.h - sz.top.y + tsize(stackTop, s).h; }
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
    if (y === 'reading') return `${shelfBooks(y).length} reading`;
    if (y === 'want') return `${shelfBooks(y).length} to read`;
    if (y === 'dnf') return `${shelfBooks(y).length} set aside`;
    if (y === 'all') return `${readBooks().length} read`;
    if (y === 'none') return `${shelfBooks('none').length} undated`;
    const goal = goalFor(y);
    return goal ? `${y} goal: ${countForGoal(y)} of ${goal}` : `${countInYear(y)} read in ${y}`;
  }

  function renderShelf() {
    const wrap = $('#cases');
    const list = visibleBooks();
    const secs = sectioned();
    const items = list.map(b => ({ type: 'book', b, sec: secs ? statusOf(b) : null }));
    // label the sections once there's more than one on the bookcase
    const counts = {};
    if (secs) list.forEach(b => { const k = statusOf(b); counts[k] = (counts[k] || 0) + 1; });
    const labels = Object.keys(counts).length > 1 ? counts : null;
    const y = prefs.year;
    const goal = (/^\d{4}$/.test(y) && !filtering()) ? goalFor(y) : 0;
    const counted = goal ? countForGoal(y) : 0;
    const ghostCount = Math.min(Math.max(0, goal - counted), 300);
    for (let i = 0; i < ghostCount; i++) items.push({ type: 'ghost', year: y, n: counted + i + 1 });

    const plate = plateText();
    const cases = buildCases(wrap, items, { plate: (i) => plate, trophies: trophiesShown(), labels });

    if (!items.length) {
      const note = document.createElement('div');
      note.className = 'empty-note';
      if (filtering()) {
        note.innerHTML = `<p>${query.trim() ? `No books match “${esc(query)}”` : 'No books here'}${tagFilter ? ' with that filter' : ''}.</p><button class="btn btn-brass" data-clear>Clear ${query.trim() ? 'search' : 'filter'}</button>`;
      } else if (y === 'reading') {
        note.innerHTML = `<p>Nothing on the go right now.</p><button class="btn btn-brass" data-add="reading">Start a book</button>`;
      } else if (y === 'want') {
        note.innerHTML = `<p>Your to-read pile is empty.</p><button class="btn btn-brass" data-add="want">Add a book you want to read</button>`;
      } else if (y === 'dnf') {
        note.innerHTML = `<p>No books set aside. Books you stop partway through rest here.</p><button class="btn btn-brass" data-all>Back to your shelves</button>`;
      } else if (y === 'none') {
        note.innerHTML = `<p>Every book on your shelves has a finish date.</p><button class="btn btn-brass" data-all>Show all years</button>`;
      } else if (y !== 'all') {
        note.innerHTML = `<p>No books finished in ${esc(y)} yet.</p>${offerYearGoal(y) ? `<button class="btn btn-brass" data-goal>Set a ${esc(y)} reading goal</button>` : `<button class="btn btn-brass" data-add>Add a book</button>`}`;
      } else if (books.length) {
        note.innerHTML = `<p>Every book here is set aside.</p><button class="btn btn-brass" data-add>Add a book</button>`;
      } else {
        note.innerHTML = `<p>Your shelves are waiting. Add a book you’ve read, are reading, or want to read, or bring your library over from Goodreads or StoryGraph.</p><button class="btn btn-brass" data-add>Add a book</button> <button class="btn btn-ghost" data-import>Import</button>`;
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
  // a small cover (or a cloth chip when there isn't one); wireThumbs() loads photos and falls back
  function thumbHTML(b, size = 'S') {
    const c = colorOf(b);
    const a = b.art || {};
    return a.status === 'found' && a.ids && a.ids.length
      ? `<img class="thumb" alt="" loading="lazy" src="${Covers.coverURL(a.ids[a.i || 0], size)}" data-bg="${c.bg}">`
      : a.status === 'upload' ? `<img class="thumb" alt="" data-upload="${esc(b.id)}" data-url="${esc(a.url || '')}" data-bg="${c.bg}">`
      : `<span class="chip" style="--bg:${c.bg}" aria-hidden="true"></span>`;
  }
  function wireThumbs(root) {
    const toChip = (img) => { const sp = document.createElement('span'); sp.className = 'chip'; sp.style.setProperty('--bg', img.dataset.bg); sp.setAttribute('aria-hidden', 'true'); img.replaceWith(sp); };
    root.querySelectorAll('img.thumb').forEach(img => img.addEventListener('error', () => toChip(img), { once: true }));
    root.querySelectorAll('img[data-upload]').forEach(async img => {
      const u = (await Covers.uploadURL(img.dataset.upload)) || img.dataset.url;
      if (u) img.src = u; else toChip(img);
    });
  }
  function listRight(b) {
    const st = statusOf(b);
    const stars = b.rating ? `<span class="stars-sm" aria-label="${starWords(b.rating)}">${starsHTML(b.rating)}</span>` : '';
    if (st === 'reading') { const p = pctOf(b); return `<span class="tag-pill reading">Reading</span><br><span class="date">${esc(progressText(b))}${p != null && formatOf(b) === 'print' ? ` · ${p}%` : ''}</span>`; }
    if (st === 'want') return `<span class="tag-pill${b.upNext ? ' upnext' : ''}">${b.upNext ? 'Up next' : 'To read'}</span>`;
    if (st === 'dnf') return `${stars || '<span class="tag-pill">Set aside</span>'}<br><span class="date">${b.stopped ? `Stopped ${esc(fmtDate(b.stopped))}` : 'Set aside'}</span>`;
    const times = datesOf(b).length;
    return `${stars || '<span class="date">Not rated</span>'}<br><span class="date">${esc(fmtDate(b.finished))}${times > 1 ? ` · read ${times}×` : ''}</span>`;
  }
  function renderList() {
    const ol = $('#list');
    const list = visibleBooks();
    // on All, the list follows the bookcase's sections, with a heading for each
    const heads = sectioned() && new Set(list.map(statusOf)).size > 1;
    ol.innerHTML = list.map((b, i) => {
      const sec = statusOf(b);
      const head = heads && (!i || statusOf(list[i - 1]) !== sec)
        ? `<li class="ledger-head" aria-hidden="true">${SECTIONS[sec]} <span>${list.filter(x => statusOf(x) === sec).length}</span></li>` : '';
      return head + listItem(b);
    }).join('');
    wireThumbs(ol);
    finishList(list);
  }
  function listItem(b) {
    const extra = [b.genre, seriesText(b), formatOf(b) !== 'print' ? FORMATS[formatOf(b)] : ''].filter(Boolean).map(esc).join(', ');
    const tags = tagsOf(b);
    return `<li><button type="button" class="ledger-item" data-id="${esc(b.id)}">
      ${thumbHTML(b)}
      <span><h3>${esc(b.title)}</h3><span class="by">${esc(b.author || '')}${extra ? `, ${extra}` : ''}</span></span>
      <span class="right">${listRight(b)}</span>
      ${b.review ? `<p class="excerpt">${esc(b.review)}</p>` : ''}
      ${tags.length ? `<span class="ledger-tags">${tags.map(t => `<span class="tag-pill">${esc(t)}</span>`).join('')}</span>` : ''}
    </button></li>`;
  }
  function finishList(list) {
    const empty = $('#listEmpty');
    empty.hidden = list.length > 0;
    if (filtering()) empty.textContent = query.trim() ? `No books match “${query}”.` : 'No books with that filter.';
    else if (prefs.year === 'reading') empty.textContent = 'Nothing on the go right now. Add a book you’re reading and choose “Reading now”.';
    else if (prefs.year === 'want') empty.textContent = 'Your to-read pile is empty.';
    else if (prefs.year === 'dnf') empty.textContent = 'No books set aside.';
    else if (prefs.year === 'none') empty.textContent = 'Every book has a finish date.';
    else if (prefs.year !== 'all') empty.textContent = `No books finished in ${prefs.year} yet.`;
    else if (books.length) empty.textContent = 'Every book here is set aside. Tap “Set aside” to see them.';
    else empty.textContent = 'Nothing logged yet. Add a book you’ve read, are reading or want to read and it will appear here.';
  }

  // ---------- header, years, goal bar ----------
  function streakNote() {
    if (!calendar) return '';
    const s = calendar.streaks();
    return s.cur >= 2 ? ` <button type="button" class="streak-link" data-cal-open>${s.cur} days in a row</button>` : '';
  }
  function renderStats() {
    const read = readBooks();
    const n = read.length;
    const rated = read.filter(b => b.rating);
    const avg = rated.length ? rated.reduce((s, b) => s + b.rating, 0) / rated.length : 0;
    const y = thisYear();
    // the long line for the classic views; one short line over the room
    const sk = calendar ? calendar.streaks() : null;
    const short = n ? [`${n} read`, `${countInYear(y)} this year`, sk && sk.cur >= 2 ? `<button type="button" class="streak-link" data-cal-open>${sk.cur}-day streak</button>` : ''].filter(Boolean).join(' · ') : '';
    $('#stats').innerHTML = n
      ? `<span class="st-long">${esc(`${n} ${n === 1 ? 'book' : 'books'} read${rated.length ? `, averaging ${avg.toFixed(1)} stars` : ''}. ${countInYear(y)} finished in ${y}.`)}${streakNote()}</span><span class="st-short">${short}</span>`
      : (books.length ? 'Your first finished book goes on the shelf.' : 'Every book you’ve read, on one shelf.');
    $('#genres').innerHTML = [...new Set(books.map(b => b.genre).filter(Boolean))].map(g => `<option value="${esc(g)}">`).join('');
    $('#seriesList').innerHTML = [...new Set(books.map(b => b.series).filter(Boolean))].map(g => `<option value="${esc(g)}">`).join('');
  }

  function renderYears() {
    const years = yearsAvailable();
    const hasUndated = readBooks().some(b => !datesOf(b).length);
    const counts = { reading: shelfBooks('reading').length, want: shelfBooks('want').length, dnf: shelfBooks('dnf').length };
    const y = prefs.year;
    if (/^\d{4}$/.test(y) && !years.includes(y)) prefs.year = 'all';
    if (y === 'none' && !hasUndated) prefs.year = 'all';
    if (STATUSES.includes(y) && y !== 'read' && !counts[y]) prefs.year = 'all';
    const pill = ([v, label]) => `<button role="tab" data-year="${v}" aria-selected="${prefs.year === v}">${label}</button>`;
    const gap = '<span class="pill-gap" aria-hidden="true"></span>';
    // All, then your piles (they're used more than old years), then each year
    const more = [['reading', 'Reading'], ['want', 'To read'], ['dnf', 'Set aside']].filter(([k]) => counts[k]);
    $('#years').innerHTML = pill(['all', 'All']) +
      (more.length ? gap + more.map(([v, label]) =>
        `<button role="tab" class="st-pill" data-year="${v}" aria-selected="${prefs.year === v}">${label} <span class="pill-n">${counts[v]}</span></button>`).join('') + gap : '') +
      [...years.map(y => [y, y]), ...(hasUndated ? [['none', 'No date']] : [])].map(pill).join('');
    // keep the chosen pill in view on a phone
    const on = $('#years [aria-selected="true"]');
    if (on && on.offsetLeft + on.offsetWidth > $('#years').clientWidth) $('#years').scrollLeft = on.offsetLeft - 40;
  }

  // active filter (a tag), with a way out
  function renderFilters() {
    const bar = $('#filterBar');
    const chips = [];
    if (tagFilter) chips.push(`<button type="button" class="filter-chip" data-unfilter="tag" aria-label="Stop showing only “${esc(tagFilter)}”">Tagged <strong>${esc(tagFilter)}</strong> <span aria-hidden="true">✕</span></button>`);
    bar.hidden = !chips.length;
    bar.innerHTML = chips.join('');
  }

  // books you're in the middle of, with how far along you are
  function renderNow() {
    const bar = $('#nowBar');
    const now = books.filter(b => statusOf(b) === 'reading').sort((a, b) => (b.progressAt || b.addedAt || 0) - (a.progressAt || a.addedAt || 0));
    // (on All, the Reading now section of the bookcase takes its place)
    const show = now.length && !filtering() && prefs.year !== 'reading' && !sectioned();
    bar.hidden = !show;
    if (!show) { bar.innerHTML = ''; return; }
    bar.innerHTML = now.map(b => {
      const p = pctOf(b);
      return `<button type="button" class="now-card" data-now="${esc(b.id)}" aria-label="${esc(b.title)}: ${esc(progressText(b))}. Update your progress.">
        <span class="now-cover">${thumbHTML(b, 'M')}</span>
        <span class="now-body">
          <span class="now-label">Reading now</span>
          <span class="now-title">${esc(b.title)}</span>
          <span class="now-meta">${esc(progressText(b))}${p != null && formatOf(b) === 'print' ? ` · ${p}%` : ''}</span>
          <span class="goal-meter" aria-hidden="true"><span style="width:${p || 0}%"></span></span>
        </span>
      </button>`;
    }).join('');
    wireThumbs(bar);
  }

  function renderGoalBar() {
    const rows = goalRows(prefs.year, 3);
    const bar = $('#goalBar');
    bar.hidden = !rows.length;
    bar.className = 'goalbar';
    bar.innerHTML = rows.join('');
    // the 3D room shows this year's goal and the goals running now, under the toolbar
    const rg = $('#roomGoals');
    const rrows = goalRows(thisYear(), 2);
    rg.hidden = !rrows.length;
    rg.innerHTML = rrows.join('');
  }
  function goalRows(y, maxCustom) {
    const rows = [];
    if (/^\d{4}$/.test(y)) {
      const goal = goalFor(y), done = countInYear(y);
      if (!goal) {
        // only ask for a year goal when there's no goal at all yet (and the year isn't over)
        if (offerYearGoal(y)) rows.push(`<div class="goal-row"><p class="goal-text">${done} ${done === 1 ? 'book' : 'books'} in ${esc(y)}.</p><button class="linkbtn" data-goal="${esc(y)}">Set a goal</button></div>`);
      } else {
        const counted = countForGoal(y);
        const pct = Math.min(100, Math.round((counted / goal) * 100));
        const met = counted >= goal;
        const from = G.countsFrom(yearGoal(y));
        const since = from > `${y}-01-01` && !met ? ` since ${shortDate(from, false)}` : '';
        rows.push(`<div class="goal-row${met ? ' met' : ''}"><p class="goal-text"><strong>${counted} of ${goal}</strong>${since} ${met ? '· goal reached' : `· ${goal - counted} to go`}</p>
          <div class="goal-meter" role="progressbar" aria-label="${esc(y)} reading goal" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(counted, goal)}"><span style="width:${pct}%"></span></div>
          <button class="linkbtn" data-goal="${esc(y)}">Change</button></div>`);
      }
    }
    // goals with their own timeline that are running right now
    const live = prefs.customGoals.map(g => ({ g, i: goalInfo(g) })).filter(x => x.i.status === 'active')
      .sort((p, q) => p.g.end.localeCompare(q.g.end));
    live.slice(0, maxCustom).forEach(({ g, i }) => {
      const tail = i.met ? 'goal reached' : (i.daysLeft === 1 ? 'last day' : `${i.daysLeft} days left`);
      rows.push(`<button type="button" class="goal-row custom${i.met ? ' met' : ''}" data-cgoal="${esc(g.id)}" aria-label="${esc(goalName(g))}: ${i.done} of ${g.target}, ${tail}. Edit goal.">
        <span class="goal-text"><span class="goal-name">${esc(goalName(g))}</span> · <strong>${i.done} of ${g.target}</strong>${G.countsFrom(g) > g.start && !i.met ? ` since ${esc(shortDate(G.countsFrom(g), false))}` : ''} · ${tail}</span>
        <span class="goal-meter" aria-hidden="true"><span style="width:${i.pct}%"></span></span></button>`);
    });
    if (live.length > maxCustom) rows.push(`<div class="goal-row"><button class="linkbtn" data-goals>${live.length - maxCustom} more ${live.length - maxCustom === 1 ? 'goal' : 'goals'}</button></div>`);
    return rows;
  }

  // ---------- page routing ----------
  const onCustomize = () => location.hash === '#customize';
  const onYear = () => location.hash === '#year';

  let czWas = false;
  function render() {
    adoptOldGoals();
    syncTrophies();
    syncEarned();
    syncGoalMarks();
    const cz = onCustomize(), yr = onYear();
    // Customize works on the live reading room (a panel over it); without 3D it's a plain page
    const czRoom = cz && canRoom && !Sync.gated;
    document.documentElement.classList.toggle('cz-on', czRoom);
    if (czWas && !czRoom && window.TomesteadRoom) { window.TomesteadRoom.customize(false); window.TomesteadRoom.go('room'); }
    czWas = czRoom;
    if (yr || (cz && !czRoom)) roomHide();
    $('#libraryPage').hidden = cz || yr;
    $('#customizePage').hidden = !cz;
    $('#yearPage').hidden = !yr;
    $('.controls').style.visibility = cz || yr ? 'hidden' : '';
    renderStats();
    if (cz) {
      renderCustomize();
      if (czRoom) { roomShow(); requestAnimationFrame(() => { czLayout(); czShow(); }); }
      return;
    }
    if (yr) { yearReview.render(); placeFloor(); return; }
    renderYears();
    renderFilters();
    renderNow();
    renderGoalBar();
    const view = viewNow(), shelf = view === 'shelf', room = view === 'room';
    $('#shelfView').hidden = !shelf;
    $('#listView').hidden = view !== 'list';
    $('#tab-room').hidden = !canRoom;
    $('#tourBtn').hidden = !canRoom;
    $('#tab-room').setAttribute('aria-selected', String(room));
    $('#tab-shelf').setAttribute('aria-selected', String(shelf));
    $('#tab-list').setAttribute('aria-selected', String(view === 'list'));
    $('#sort').value = prefs.sort;
    if (room) roomShow(); else { roomHide(); if (shelf) renderShelf(); else renderList(); }
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
    const show = !onCustomize() && !onYear() && viewNow() === 'shelf';
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
  // ---------- Customize: the reading room, changed live (the room shows beside or above the panel) ----------
  // one tab at a time; each tab glides the room's camera to what it changes
  let czTab = 'room';
  const CZ_VIEW = { room: () => (window.TomesteadRoom && window.TomesteadRoom.home ? window.TomesteadRoom.home() : 'room'), paint: () => (paintFor === 'nook' ? 'nook' : 'hearth'), case: () => 'case', trinkets: () => 'case', desk: () => 'desk', light: () => (window.TomesteadRoom && window.TomesteadRoom.home ? window.TomesteadRoom.home() : 'room') };
  function czShow() { if (window.TomesteadRoom && document.documentElement.classList.contains('cz-on')) window.TomesteadRoom.show(CZ_VIEW[czTab]()); }
  function czLayout() {
    // the panel covers the right side (wide screens) or the bottom (phones); the room frames itself in the rest
    const el = $('#customizePage'), wide = innerWidth >= 900;
    const r = wide ? el.offsetWidth : 0, b = wide ? 0 : el.offsetHeight;
    if (window.TomesteadRoom) window.TomesteadRoom.customize(true, r, b);
  }
  function renderCustomize() {
    const t = prefs.theme;
    document.querySelectorAll('#czTabs [data-tab]').forEach(b => { const on = b.dataset.tab === czTab; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; });
    document.querySelectorAll('#customizePage [data-pane]').forEach(p => { p.hidden = p.dataset.pane !== czTab; });

    const sun = '<svg viewBox="0 0 64 44" width="64" height="44"><circle cx="32" cy="26" r="10" fill="#f2c45e"/><g stroke="#f2c45e" stroke-width="2.4" stroke-linecap="round"><path d="M32 8v-5M32 49v-5M14 26H9M55 26h-5M19 13l-3-3M45 13l3-3M19 39l-3 3M45 39l3 3"/></g></svg>';
    const moon = '<svg viewBox="0 0 64 44" width="64" height="44"><path d="M38 9a15 15 0 1 0 12 23A12 12 0 0 1 38 9z" fill="#dfe6f5"/><circle cx="14" cy="10" r="1.2" fill="#efe3c0"/><circle cx="54" cy="14" r="1" fill="#efe3c0"/><circle cx="12" cy="34" r="1" fill="#efe3c0"/></svg>';
    const half = '<svg viewBox="0 0 64 44" width="64" height="44"><circle cx="24" cy="24" r="9" fill="#f2c45e"/><path d="M44 10a12 12 0 1 0 9 18A10 10 0 0 1 44 10z" fill="#dfe6f5"/></svg>';
    const lightArt = { system: half, clock: half, day: sun, night: moon };
    $('#czLight').innerHTML = Object.entries(D.LIGHTS).map(([k, l]) => `
      <button type="button" class="tile" role="radio" aria-checked="${(t.light || 'system') === k}" data-light="${k}">
        <span class="tile-art light-art ${k}">${lightArt[k]}</span>
        <span class="tile-label">${l.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('');
    $('#czLightHint').textContent = `Golden hour by day; lamplight and candles by night. ${D.LIGHTS[t.light || 'system'].hint || ''} It’s ${document.documentElement.dataset.light === 'night' ? 'night' : 'day'} in your room right now.`;
    // Room: how big the room is (only sizes your reading has earned), and what it has earned so far
    if (Grow) {
      const earned = prefs.earned || {}, n = Grow.readCount(books), pick = t.roomSize || 'auto';
      const now = Grow.tierOf(earned, pick);
      const SIZE_ART = {
        study: '<svg viewBox="0 0 64 44" width="64" height="44"><rect x="14" y="14" width="36" height="26" fill="#5a3a22"/><path d="M10 16 32 4l22 12" fill="none" stroke="#c9a15b" stroke-width="2"/><rect x="22" y="22" width="20" height="18" fill="#2c1a0f"/><g fill="#9b5b3a"><rect x="24" y="24" width="3" height="7"/><rect x="28" y="25" width="2" height="6"/><rect x="31" y="23" width="3" height="8"/><rect x="35" y="25" width="3" height="6"/></g></svg>',
        library: '<svg viewBox="0 0 64 44" width="64" height="44"><rect x="8" y="6" width="48" height="36" fill="#5a3a22"/><rect x="8" y="20" width="48" height="2" fill="#c9a15b"/><g stroke="#1c1a19" stroke-width="1"><path d="M10 20v-4M14 20v-4M18 20v-4M22 20v-4M42 20v-4M46 20v-4M50 20v-4M54 20v-4"/></g><circle cx="32" cy="12" r="4" fill="#a9c6e8"/><rect x="11" y="24" width="14" height="16" fill="#2c1a0f"/><rect x="39" y="24" width="14" height="16" fill="#2c1a0f"/><rect x="28" y="26" width="8" height="14" fill="#3b2415"/></svg>',
        hall: '<svg viewBox="0 0 64 44" width="64" height="44"><path d="M8 42V18a24 16 0 0 1 48 0v24z" fill="#5a3a22"/><path d="M14 18a18 11 0 0 1 36 0" fill="none" stroke="#c9a15b" stroke-width="1.5"/><rect x="8" y="22" width="48" height="1.6" fill="#c9a15b"/><rect x="8" y="31" width="48" height="1.6" fill="#c9a15b"/><path d="M28 42V30a4 4 0 0 1 8 0v12z" fill="#a9c6e8"/><circle cx="22" cy="27" r="1.4" fill="#ffd98a"/><circle cx="42" cy="27" r="1.4" fill="#ffd98a"/></svg>',
      };
      $('#czSize').innerHTML = `<button type="button" class="tile" role="radio" aria-checked="${pick === 'auto'}" data-size="auto">
          <span class="tile-art size-art"><span style="align-self:center;color:#cdbf9f;font-size:.82rem;text-align:center">Grow with<br>my reading</span></span>
          <span class="tile-label">Automatic</span><span class="check" aria-hidden="true">✓</span></button>` +
        Grow.TIERS.map(tr => {
          const open = tr.at === 0 || Grow.has(earned, tr.key);
          return `<button type="button" class="tile${open ? '' : ' locked'}" role="radio" aria-checked="${pick === tr.key}" data-size="${tr.key}" ${open ? '' : 'aria-disabled="true"'}>
            <span class="tile-art size-art">${SIZE_ART[tr.key]}</span>
            <span class="tile-label">${esc(tr.name)}${open ? '' : `<small>Finish ${tr.at} books</small>`}</span><span class="check" aria-hidden="true">✓</span></button>`;
        }).join('');
      const tierNow = Grow.TIERS.find(x => x.key === now);
      const nx = Grow.next(books, earned);
      $('#czSizeHint').textContent = `${tierNow.blurb} You’ve finished ${n} ${n === 1 ? 'book' : 'books'}.${nx ? ' ' + nx.text : ''}`;
      $('#czEarned').innerHTML = Grow.LADDER.map(x => {
        const got = Grow.has(earned, x.key);
        return `<li class="${got ? 'got' : 'not'}"><span class="mark" aria-hidden="true">${got ? '✦' : '·'}</span><span>${esc(x.name)}</span><small>${got ? 'Earned' : `${x.at} ${x.at === 1 ? 'book' : 'books'}`}</small></li>`;
      }).join('');
      const famOn = Sync.isFamily && Sync.isFamily();
      $('#czFamShare').hidden = !famOn;
      if (famOn) {
        $('#czShareShelf').checked = prefs.family.share !== false;
        if (document.activeElement !== $('#czShelfName')) $('#czShelfName').value = prefs.family.name || '';
        $('#czShelfName').placeholder = (Sync.displayName && Sync.displayName()) || 'Your name';
      }
    }
    const nw = t.nightWall === 'stars' ? 'stars' : 'green';
    $('#czNightWall').innerHTML = [['green', 'Library green', '#3b4a36', '#55684f'], ['stars', 'Star chart', '#0f1a2b', '#27375a']].map(([k, name, a, b]) => `
      <button type="button" class="tile" role="radio" aria-checked="${nw === k}" data-nightwall="${k}">
        <span class="tile-art" style="background: radial-gradient(circle at 50% 40%, ${b}, ${a}); ${k === 'stars' ? 'background-image: radial-gradient(1px 1px at 20% 30%, #efe3c0, transparent), radial-gradient(1px 1px at 70% 60%, #efe3c0, transparent), radial-gradient(1.2px 1.2px at 45% 75%, #efe3c0, transparent), radial-gradient(circle at 50% 40%, ' + b + ', ' + a + ');' : ''}"></span>
        <span class="tile-label">${name}</span><span class="check" aria-hidden="true">✓</span>
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

    $('#czVine').innerHTML = Object.entries(D.VINES).map(([k, v]) => `
      <button type="button" class="tile" role="radio" aria-checked="${(t.vine || 'roses') === k}" data-vine="${k}">
        <span class="tile-art vine-art">${k === 'none' ? '<span style="align-self:center;color:#cdbf9f;font-size:.85rem">None</span>' : (window.TomesteadVine ? window.TomesteadVine.draw(k, 150, 150, 70, 10, 3, .75) : '')}</span>
        <span class="tile-label">${v.name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('');

    // the two paintings in the 3D room
    const pNow = paintingFor(paintFor), pMine = pNow === 'mine';
    const fam = Sync.familyPaintings ? Sync.familyPaintings() : [], famOn = Sync.isFamily && Sync.isFamily();
    document.querySelectorAll('#czPaintFor [data-paintfor]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.paintfor === paintFor)));
    $('#czPaint').setAttribute('aria-label', `Painting ${paintFor === 'mantel' ? 'over the fireplace' : 'in the reading corner'}`);
    $('#czPaint').innerHTML = PAINTINGS.map(([k, name]) => `
      <button type="button" class="tile" role="radio" aria-checked="${!pMine && pNow === k}" data-paint="${k}">
        <span class="tile-art paint-art"><img src="room/tex/paintings/thumbs/${k}.webp" alt="" loading="lazy"></span>
        <span class="tile-label">${name}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('') + fam.map(f => `
      <button type="button" class="tile" role="radio" aria-checked="${pNow === 'fam:' + f.id}" data-paint="fam:${esc(f.id)}">
        <span class="tile-art paint-art${f.url ? '' : ' mine'}">${f.url ? `<img src="${esc(f.url)}" alt="" loading="lazy">` : '<span>Opening…</span>'}</span>
        <span class="tile-label">${esc(f.name)}</span><span class="check" aria-hidden="true">✓</span>
      </button>`).join('') + (famOn ? `
      <button type="button" class="tile" data-paint="famadd">
        <span class="tile-art paint-art mine"><span>+ Family<br>painting</span></span>
        <span class="tile-label">Add for the family</span>
      </button>` : '') + `
      <button type="button" class="tile" role="radio" aria-checked="${pMine}" data-paint="mine">
        <span class="tile-art paint-art mine" id="czPaintMine"><span>+ Your own<br>picture</span></span>
        <span class="tile-label">${pMine ? 'Yours (change)' : 'Your own'}</span><span class="check" aria-hidden="true">✓</span>
      </button>`;
    if (pMine) Covers.uploadURL('painting-' + paintFor).then(u => { const el = $('#czPaintMine'); if (u && el) el.innerHTML = `<img src="${u}" alt="">`; });
    // a family painting you added: say who sees it, and let you take it down
    const famNow = pNow.startsWith('fam:') && fam.find(f => 'fam:' + f.id === pNow);
    $('#czFamNote').hidden = !famNow;
    if (famNow) $('#czFamNote').innerHTML = `“${esc(famNow.name)}” is shared with your family only.` +
      (famNow.by === Sync.myUid() ? ` <button type="button" class="linkbtn" id="czFamRemove">Remove it for everyone</button>` : '');

    // each section of the bookcase can have its own bookends
    document.querySelectorAll('#czBookendFor [data-befor]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.befor === bookendFor)));
    const beNow = sectionBookend(bookendFor);
    $('#czBookend').setAttribute('aria-label', `Bookends for ${SECTIONS[bookendFor]}`);
    $('#czBookend').innerHTML = Object.entries(D.BOOKENDS).map(([k, b]) => `
      <button type="button" class="tile" role="radio" aria-checked="${beNow === k}" data-bookend="${k}">
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
      ? `${n} picked. Each one appears once: a centrepiece or two in the arch at the top of the bookcase, the rest in open spots on the shelves, and a small piece on the stack of books.`
      : 'No trinkets on display. Pick a few to fill the empty spots on your shelves.';


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
      ? `${m} of ${D.MAX_TABLE_ITEMS} on the desk${m >= D.MAX_TABLE_ITEMS ? '. Take one off to add another' : ''}. The lamp and tall pieces go to the back, small things by your hands.`
      : `Pick up to ${D.MAX_TABLE_ITEMS} things to keep beside your book.`;
  }

  // ---------- paintings in the 3D room (room/tex/paintings/; the room draws them) ----------
  const PAINTINGS = [['golden_hills', 'Golden hills'], ['mountain_path', 'Mountain path'], ['misty_pines', 'Misty pines'], ['winter_wood', 'Winter wood'],
    ['lake_dawn', 'Lake at dawn'], ['evening_water', 'Evening water'], ['forest_cliffs', 'Forest cliffs'], ['pastoral', 'Pastoral (oil)'], ['highland', 'Highland cattle']];
  const PAINT_DEFAULT = { mantel: 'golden_hills', nook: 'pastoral' };
  let paintFor = 'mantel';
  const famHas = (id) => typeof id === 'string' && id.startsWith('fam:') && Sync.familyPaintings && Sync.familyPaintings().some(f => 'fam:' + f.id === id);
  const paintingFor = (slot) => { const p = prefs.theme.paintings || {}; return p[slot] === 'mine' || famHas(p[slot]) || PAINTINGS.some(([k]) => k === p[slot]) ? p[slot] : PAINT_DEFAULT[slot]; };
  function setPainting(slot, id) {
    const p = { ...(prefs.theme.paintings || {}), [slot]: id };
    if (id === 'mine') p[slot + 'At'] = Date.now(); else delete p[slot + 'At'];
    setTheme({ paintings: p });
  }
  // a picture cropped to the frame's shape (1024 × 760), as a JPEG
  async function frameCrop(file) {
    const img = await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = URL.createObjectURL(file); });
    const W = 1024, H = 760, c = document.createElement('canvas'); c.width = W; c.height = H;
    const s = Math.max(W / img.naturalWidth, H / img.naturalHeight);
    c.getContext('2d').drawImage(img, (W - img.naturalWidth * s) / 2, (H - img.naturalHeight * s) / 2, img.naturalWidth * s, img.naturalHeight * s);
    URL.revokeObjectURL(img.src);
    return new Promise(res => c.toBlob(res, 'image/jpeg', 0.86));
  }
  // a family painting: shared with the readers marked family on the guest list (Sync.addFamilyPainting)
  let famBlob = null;
  async function familyFromFile(file) {
    try { famBlob = await frameCrop(file); } catch { toast('Couldn’t use that picture. Try a JPEG or PNG photo.'); return; }
    const u = URL.createObjectURL(famBlob);
    $('#famPreview').innerHTML = `<img src="${u}" alt="">`;
    $('#famName').value = ''; $('#famError').hidden = true;
    $('#famDialog').showModal();
    setTimeout(() => $('#famName').focus(), 30);
  }
  async function saveFamily(e) {
    e.preventDefault();
    const name = $('#famName').value.trim();
    if (!name) { $('#famError').textContent = 'Give it a name your family will recognise.'; $('#famError').hidden = false; $('#famName').focus(); return; }
    const btn = $('#famSave'); btn.disabled = true; btn.textContent = 'Hanging it…';
    try {
      const id = await Sync.addFamilyPainting(name, famBlob);
      $('#famDialog').close();
      setPainting(paintFor, 'fam:' + id);
      toast(`“${name}” is hanging ${paintFor === 'mantel' ? 'over the fireplace' : 'in the reading corner'}. Your family can pick it in Customize → Paintings.`);
    } catch (err) {
      $('#famError').textContent = navigator.onLine === false ? 'You’re offline. Connect and try again.' : 'Couldn’t share it just now. Try again in a moment.';
      $('#famError').hidden = false;
      console.warn('family painting', err);
    } finally { btn.disabled = false; btn.textContent = 'Share with the family'; }
  }
  async function removeFamily() {
    const btn = $('#czFamRemove'); if (!btn) return;
    if (!btn.dataset.confirm) { btn.dataset.confirm = '1'; btn.textContent = 'Remove it for everyone? Tap again'; return; }
    const id = paintingFor(paintFor).slice(4);
    try { await Sync.removeFamilyPainting(id); toast('Taken down. The frame has its usual painting back.'); }
    catch { toast('Couldn’t remove it just now. Try again in a moment.'); }
    renderCustomize(); roomRefresh();
  }
  // your own picture: cropped to the frame's shape and kept on this device
  async function paintingFromFile(file) {
    try {
      const blob = await frameCrop(file);
      await Covers.putUpload('painting-' + paintFor, blob);
      setPainting(paintFor, 'mine');
      toast(`Your picture is hanging ${paintFor === 'mantel' ? 'over the fireplace' : 'in the reading corner'}. It stays on this device.`);
    } catch { toast('Couldn’t use that picture. Try a JPEG or PNG photo.'); }
  }

  function setTheme(patch) {
    Object.assign(prefs.theme, patch);
    savePrefs();
    D.applyTheme(prefs.theme);
    renderCustomize();
    if (document.documentElement.classList.contains('cz-on')) roomRefresh();   // the room shows the change at once
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
    const snapshot = [...books].sort((a, c) => (c.addedAt || 0) - (a.addedAt || 0));
    const had = new Set(snapshot.map(b => b.id));
    for (const b of snapshot) {
      if (n >= 600) break;
      if (b.lookedUp || (b.art && (b.art.status === 'upload' || b.art.status === 'plain'))) continue;
      await lookup(b);
      n++;
      await new Promise(r => setTimeout(r, 450));
    }
    queueRunning = false;
    // books that arrived while this ran (an import) get their turn next
    if (books.some(b => !had.has(b.id) && !b.lookedUp)) setTimeout(runLookupQueue, 500);
  }
  let listTimer;
  function scheduleListRefresh() {
    clearTimeout(listTimer);
    listTimer = setTimeout(() => { if (viewNow() === 'list' && !onCustomize() && !(reader && reader.isOpen())) renderList(); }, 400);
  }

  let reader = null;
  function openDetail(id, el) {
    if (!reader) return;
    // in the 3D room, books are carried to the room's desk and open there
    if (inRoom() && window.TomesteadRoom && window.TomesteadRoom.openBook) return window.TomesteadRoom.openBook(id);
    reader.open(id, el);
  }
  const inRoom = () => viewNow() === 'room' && document.documentElement.classList.contains('room-mode') && !onCustomize() && !onYear();

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
    const val = document.createElement('span');
    val.id = 'starValue'; val.className = 'star-value'; val.setAttribute('aria-hidden', 'true');
    sp.appendChild(val);
    const clear = document.createElement('button');
    clear.type = 'button'; clear.className = 'clear'; clear.textContent = 'No rating'; clear.dataset.v = 0;
    sp.appendChild(clear);
    // tap the left half of a star for a half star; tap a full star again to make it a half
    sp.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t) return;
      let v = Number(t.dataset.v);
      if (v && e.detail) {
        const r = t.getBoundingClientRect();
        if (e.clientX < r.left + r.width / 2 || pickedRating === v) v -= 0.5;
      }
      setRating(v);
    });
    sp.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { setRating(Math.min(5, pickedRating + 0.5)); e.preventDefault(); focusStar(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { setRating(Math.max(0.5, pickedRating - 0.5)); e.preventDefault(); focusStar(); }
    });
  }
  function focusStar() { const s = $(`#starPicker button[data-v="${Math.ceil(pickedRating)}"]`); s && s.focus(); }
  function setRating(v) {
    pickedRating = v;
    document.querySelectorAll('#starPicker button[role="radio"]').forEach(btn => {
      const n = Number(btn.dataset.v);
      btn.classList.toggle('on', n <= v);
      btn.classList.toggle('half', n - 0.5 === v);
      btn.setAttribute('aria-checked', String(n === Math.ceil(v)));
      btn.tabIndex = (n === (Math.ceil(v) || 1)) ? 0 : -1;
    });
    $('#starPicker').setAttribute('aria-valuetext', v ? starWords(v) : 'No rating');
    const sv = $('#starValue'); if (sv) sv.textContent = v ? String(v).replace('.5', '½') : '';
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

  // the same book, however it was typed ("The Hobbit" by J.R.R. Tolkien = "hobbit" by Tolkien)
  const normTitle = (t) => String(t || '').toLowerCase().replace(/\s*[(:].*$/, '').replace(/^(the|a|an)\s+/, '').replace(/[^a-z0-9]+/g, '');
  const dupKey = (b) => normTitle(b.title) + '|' + surname(String(b.author || '').split(/\s*(?:&|,| and )\s*/)[0]).replace(/[^a-z]/g, '');
  const findDuplicate = (title, author, except) => { const k = dupKey({ title, author }); return books.find(b => b.id !== except && dupKey(b) === k); };

  // ---------- add / edit a book ----------
  let editStatus = 'read', editFormat = 'print', editTags = [], editRereads = [];
  let pick = null;               // the Open Library match you chose: { olKey, cover, isbn }
  let finishing = false;         // opened from "I finished it"

  function setStatus(st) {
    editStatus = st;
    document.querySelectorAll('#fStatus [data-status]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.status === st)));
    document.querySelectorAll('#bookForm [data-for]').forEach(el => { el.hidden = !el.dataset.for.split(' ').includes(st); });
    const lbl = { read: 'Your review', reading: 'Thoughts so far', want: 'Why you want to read it', dnf: 'Why you put it down' }[st];
    $('#fReviewLabel').innerHTML = `${lbl} <span class="opt">(optional)</span>`;
    $('#fReview').placeholder = st === 'read' ? 'What stayed with you?' : st === 'want' ? 'Who recommended it, what caught your eye…' : '';
    if (!editingId) $('#saveBtn').textContent = { read: 'Put it on the shelf', reading: 'Start reading', want: 'Add to my to-read pile', dnf: 'Set it aside' }[st];
    // a book you were reading and now mark read: finished today. A new book: no date unless you give one,
    // so books you're adding from the past don't land on today (and don't count toward a goal)
    if (st === 'read' && !$('#fFinished').value) {
      const was = editingId && books.find(x => x.id === editingId);
      $('#fFinished').value = defaultFinished || (was && statusOf(was) === 'reading' ? today() : '');
    }
    if (st === 'reading' && !$('#fStarted').value && !editingId) $('#fStarted').value = today();
    if (st === 'dnf' && !$('#fStopped').value) $('#fStopped').value = today();
    setProgressLabel();
  }
  function setFormat(f) {
    editFormat = FORMATS[f] ? f : 'print';
    document.querySelectorAll('#fFormat [data-format]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.format === editFormat)));
    $('#fPagesField').hidden = editFormat === 'audio';
    $('#fHoursField').hidden = editFormat !== 'audio';
    $('#fNarratorField').hidden = editFormat !== 'audio';
    setProgressLabel();
    updateDetailsSum();
  }
  function setProgressLabel() {
    const print = editFormat === 'print', dnf = editStatus === 'dnf';
    $('#fProgressLabel').textContent = dnf ? (print ? 'I stopped at page' : 'I stopped at (%)') : print ? 'I’m on page' : 'How far along (%)';
    $('#fProgress').max = print ? 5000 : 100;
  }
  // a short line on the closed "More details" so you can see what's set without opening it
  function updateDetailsSum() {
    const pages = parseInt($('#fPages').value, 10), hours = parseFloat($('#fHours').value);
    const sn = $('#fSeriesNo').value;
    const bits = [
      editFormat !== 'print' ? FORMATS[editFormat] : '',
      editFormat === 'audio' ? (hours > 0 ? `${hours} hours` : '') : (pages > 0 ? `${pages} pages` : ''),
      $('#fGenre').value.trim(),
      $('#fSeries').value.trim() ? `${$('#fSeries').value.trim()}${sn ? ` #${sn}` : ''}` : '',
    ].filter(Boolean);
    $('#fDetailsSum').textContent = bits.length ? bits.join(' · ') : 'Format, pages, genre, series, spine color';
  }

  function renderRereads() {
    $('#fRereads').innerHTML = editRereads.map((d, i) => `<div class="reread">
        <label for="rr${i}" class="rr-label">Also read</label>
        <input type="date" id="rr${i}" data-rr="${i}" value="${esc(d)}">
        <button type="button" class="rr-x" data-rr-x="${i}" aria-label="Remove this date">✕</button>
      </div>`).join('');
    $('#addReread').textContent = editRereads.length ? '+ Another time' : '+ I read it before, too';
  }

  function renderTagPick() {
    const vocab = tagVocab();
    editTags.forEach(t => { if (!vocab.some(x => x.toLowerCase() === t.toLowerCase())) vocab.push(t); });
    const on = (t) => editTags.some(x => x.toLowerCase() === t.toLowerCase());
    $('#fTags').innerHTML = vocab.map(t => `<button type="button" class="tag-toggle" aria-pressed="${on(t)}" data-tag="${esc(t)}">${esc(t)}</button>`).join('') +
      `<input id="fTagNew" class="tag-new" maxlength="30" autocomplete="off" placeholder="+ New tag" aria-label="Make a new tag" enterkeyhint="done">`;
  }
  function addTagFromInput() {
    const inp = $('#fTagNew');
    const v = cleanTags([inp.value])[0];
    if (!v) return;
    const known = tagVocab().find(x => x.toLowerCase() === v.toLowerCase());
    const name = known || v;
    if (!known) { prefs.tagList.push(name); savePrefs(); }
    if (!editTags.some(x => x.toLowerCase() === name.toLowerCase())) editTags.push(name);
    renderTagPick();
    setTimeout(() => $('#fTagNew').focus(), 0);
  }

  // ---------- finding the book on Open Library as you type ----------
  let findTimer = null, findSeq = 0, findItems = [], findActive = -1;
  function closeSuggest() {
    clearTimeout(findTimer); findSeq++;
    findItems = []; findActive = -1;
    $('#fSuggest').hidden = true; $('#fSuggest').innerHTML = '';
    $('#fTitle').setAttribute('aria-expanded', 'false');
    $('#fTitle').removeAttribute('aria-activedescendant');
  }
  function onTitleInput() {
    if (pick) { pick = null; $('#fMatch').hidden = true; }
    const q = $('#fTitle').value.trim();
    clearTimeout(findTimer);
    if (editingId || q.length < 3 || navigator.onLine === false) { closeSuggest(); return; }
    findTimer = setTimeout(async () => {
      const seq = ++findSeq;
      const ul = $('#fSuggest');
      if (ul.hidden) { ul.innerHTML = '<li class="sg-note">Searching Open Library…</li>'; ul.hidden = false; }
      try {
        const res = await Covers.search(q);
        if (seq !== findSeq) return;
        findItems = res; findActive = -1;
        renderSuggest();
      } catch { if (seq === findSeq) closeSuggest(); }
    }, 320);
  }
  function renderSuggest() {
    const ul = $('#fSuggest');
    ul.innerHTML = findItems.map((it, i) => {
      const by = [it.author, it.year, it.pages ? `${it.pages} pages` : ''].filter(Boolean).map(esc).join(' · ');
      return `<li role="option" id="sg${i}" data-i="${i}" aria-selected="${i === findActive}">
        <span class="sg-cover">${it.cover ? `<img alt="" loading="lazy" src="${Covers.coverURL(it.cover, 'S')}">` : ''}</span>
        <span class="sg-text"><span class="sg-title">${esc(it.title)}</span><span class="sg-by">${by}</span></span></li>`;
    }).join('') + `<li class="sg-note">${findItems.length ? 'Not here? Keep typing, or fill in the rest yourself.' : 'Nothing found on Open Library. Fill in the rest yourself.'}</li>`;
    ul.querySelectorAll('img').forEach(img => img.addEventListener('error', () => img.remove(), { once: true }));
    ul.hidden = false;
    $('#fTitle').setAttribute('aria-expanded', String(findItems.length > 0));
    if (findActive >= 0) $('#fTitle').setAttribute('aria-activedescendant', `sg${findActive}`); else $('#fTitle').removeAttribute('aria-activedescendant');
  }
  function knownGenres() { return [...new Set(books.map(b => b.genre).filter(Boolean))]; }
  function applyPick(it) {
    pick = { olKey: it.olKey || null, cover: it.cover || null, isbn: it.isbn || '' };
    $('#fTitle').value = it.title;
    if (it.author) $('#fAuthor').value = it.author;
    if (it.pages && !$('#fPages').value) $('#fPages').value = it.pages;
    if (!$('#fGenre').value) { const g = Covers.genreFrom(it.subjects, knownGenres()); if (g) $('#fGenre').value = g; }
    closeSuggest();
    const m = $('#fMatch');
    const bits = [it.year ? `first published ${it.year}` : '', it.pages ? `${it.pages} pages` : ''].filter(Boolean).join(', ');
    m.innerHTML = `${it.cover ? `<img alt="" src="${Covers.coverURL(it.cover, 'S')}">` : '<span class="match-tick" aria-hidden="true">✓</span>'}
      <span class="match-text">Found on Open Library${bits ? ` (${esc(bits)})` : ''}. The cover and summary come with it.</span>
      <button type="button" class="linkbtn ink" data-unpick>Not this one</button>`;
    m.querySelectorAll('img').forEach(img => img.addEventListener('error', () => img.remove(), { once: true }));
    m.hidden = false;
    updateDetailsSum();
    const dup = findDuplicate(it.title, it.author, editingId);
    if (dup) toast(`“${dup.title}” is already in your library${statusOf(dup) === 'want' ? ', on your to-read pile' : ''}.`);
    // on to the next thing worth filling in
    const next = editStatus === 'read' || editStatus === 'dnf' ? $('#starPicker button[aria-checked="true"]') || $('#starPicker button') : $('#saveBtn');
    setTimeout(() => next && next.focus(), 30);
  }
  async function scanBarcode() {
    closeSuggest();
    const got = await window.TomesteadScan.scan();
    if (got === 'type') { $('#fTitle').placeholder = 'Type the title, the author or the ISBN'; $('#fTitle').focus(); return; }
    if (!got) return;
    $('#fTitle').value = got;
    toast('Looking it up…');
    const it = await Covers.byISBN(got).catch(() => null);
    if (!it) {
      $('#fTitle').value = '';
      pick = { olKey: null, cover: null, isbn: got };
      toast(`Couldn’t find ISBN ${got} on Open Library. Type the title instead.`);
      $('#fTitle').focus();
      return;
    }
    applyPick(it);
  }

  function openEditor(id = null, finished = null, prefill = null, opts = {}) {
    editingId = id;
    finishing = !!opts.finish;
    const b = id ? books.find(x => x.id === id) : null;
    const f = $('#bookForm');
    f.reset();
    closeSuggest();
    $('#formError').hidden = true;
    $('#fMatch').hidden = true;
    pick = prefill && (prefill.olKey || prefill.cover) ? { olKey: prefill.olKey || null, cover: prefill.cover || null, isbn: '' } : null;
    defaultFinished = finished;
    $('#formTitle').textContent = finishing ? 'You finished it!' : b ? 'Edit book' : 'Add a book';
    $('#fTitle').placeholder = b ? '' : 'Start typing to search, or scan it';
    $('#fTitle').value = b?.title || prefill?.title || '';
    $('#fAuthor').value = b?.author || prefill?.author || '';
    $('#fStarted').value = b?.started || '';
    $('#fFinished').value = b ? (b.finished || '') : (finished || '');
    $('#fStopped').value = b?.stopped || '';
    $('#fProgress').value = b && b.progress != null ? b.progress : '';
    $('#fPages').value = b?.pages || prefill?.pages || '';
    $('#fHours').value = b?.hours || '';
    $('#fNarrator').value = b?.narrator || '';
    $('#fWhy').value = b?.stopWhy || '';
    $('#fGenre').value = b?.genre || prefill?.genre || '';
    $('#fSeries').value = b?.series || '';
    $('#fSeriesNo').value = b && b.seriesNo != null ? b.seriesNo : '';
    $('#fReview').value = b?.review || '';
    editTags = [...tagsOf(b || {})];
    editRereads = b && Array.isArray(b.rereads) ? [...b.rereads] : [];
    const cv = b && Number.isInteger(b.color) ? String(b.color) : 'auto';
    const radio = f.querySelector(`input[name="color"][value="${cv}"]`);
    if (radio) radio.checked = true;
    setRating(b?.rating || 0);
    setFormat(b ? formatOf(b) : 'print');
    let st = opts.status || (b ? statusOf(b) : 'read');
    if (finishing && b) {
      // finishing a reread: the time before moves down to "Also read"
      st = 'read';
      if (b.finished && statusOf(b) === 'reading') editRereads = [b.finished, ...editRereads];
      $('#fFinished').value = today();
    }
    setStatus(st);
    if (b) $('#saveBtn').textContent = finishing ? 'Put it on the shelf' : 'Save changes';
    renderRereads();
    renderTagPick();
    renderWhyChips();
    updateDetailsSum();
    $('#fDetails').open = false;
    $('#scanBtn').hidden = !!b || !(window.TomesteadScan && window.TomesteadScan.supported());
    $('#editor').showModal();
    setTimeout(() => (finishing ? $('#starPicker button') : $('#fTitle')).focus(), 30);
  }

  function submitEditor(e) {
    e.preventDefault();
    closeSuggest();
    const title = $('#fTitle').value.trim();
    const author = $('#fAuthor').value.trim();
    const err = $('#formError');
    if (!title || !author) {
      err.textContent = !title ? 'Add a title to shelve this book.' : 'Add the author’s name to shelve this book.';
      err.hidden = false;
      (!title ? $('#fTitle') : $('#fAuthor')).focus();
      return;
    }
    const st = editStatus;
    const old = editingId ? books.find(x => x.id === editingId) : null;
    const colorVal = $('#bookForm').querySelector('input[name="color"]:checked')?.value;
    const pages = parseInt($('#fPages').value, 10);
    const hours = parseFloat($('#fHours').value);
    const prog = parseFloat($('#fProgress').value);
    const sn = $('#fSeriesNo').value === '' ? null : parseFloat($('#fSeriesNo').value);
    // every time you finished it, newest first: the newest is "finished", the rest are rereads
    let finished = old ? (old.finished || '') : '', rereads = old && Array.isArray(old.rereads) ? old.rereads : [];
    if (st === 'read') {
      const fin = $('#fFinished').value || '';
      const all = [...new Set([fin, ...editRereads].filter(d => ISO.test(d)))].sort().reverse();
      finished = fin && !ISO.test(fin) ? fin : (all[0] || '');
      rereads = all.filter(d => d !== finished);
    }
    const data = {
      title, author, status: st,
      rating: st === 'read' || st === 'dnf' ? (pickedRating || 0) : (old?.rating || 0),
      finished, rereads,
      started: st === 'want' ? '' : ($('#fStarted').value || ''),
      stopped: st === 'dnf' ? ($('#fStopped').value || '') : '',
      pages: pages > 0 ? pages : null,
      genre: $('#fGenre').value.trim(),
      review: $('#fReview').value.trim(),
      color: colorVal && colorVal !== 'auto' ? Number(colorVal) : null,
      format: editFormat,
      hours: editFormat === 'audio' && hours > 0 ? Math.min(300, Math.round(hours * 10) / 10) : null,
      series: $('#fSeries').value.trim().slice(0, 120),
      seriesNo: sn != null && Number.isFinite(sn) ? sn : null,
      tags: cleanTags(editTags),
      narrator: editFormat === 'audio' ? $('#fNarrator').value.trim().slice(0, 120) : '',
      stopWhy: st === 'dnf' ? $('#fWhy').value.trim().slice(0, 120) : '',
    };
    if (st === 'reading') {
      const v = prog >= 0 ? (editFormat === 'print' ? Math.round(prog) : Math.min(100, prog)) : 0;
      if (!old || old.progress !== v || statusOf(old) !== 'reading') data.progressAt = Date.now();
      data.progress = v;
    } else if (st === 'dnf') data.progress = prog >= 0 ? (editFormat === 'print' ? Math.round(prog) : Math.min(100, prog)) : (old?.progress ?? null);
    else data.progress = null;
    if (pick && pick.isbn) data.isbn = pick.isbn;
    const metBefore = goalsMet();
    let target;
    if (old) {
      const b = target = old;
      const renamed = b.title !== data.title || (b.author || '') !== data.author;
      Object.assign(b, data, { updatedAt: Date.now() });
      if (renamed || pick) {
        const keep = b.art && (b.art.status === 'upload' || b.art.status === 'plain') ? Object.assign({ status: b.art.status }, photoFields(b.art)) : null;
        b.art = keep || (pick && pick.cover ? { status: 'found', ids: [pick.cover], i: 0, olKey: pick.olKey } : null);
        b.about = null; b.lookedUp = 0;
        b.olKey = pick ? pick.olKey : null;
      }
      toast(finishing ? `“${title}” is back on the shelf.` : 'Changes saved.');
    } else {
      const b = target = Object.assign({ id: uid(), addedAt: Date.now() }, data);
      if (pick) {
        b.olKey = pick.olKey;
        if (pick.cover) b.art = { status: 'found', ids: [pick.cover], i: 0, olKey: pick.olKey };
      }
      books.push(b);
      justAdded = b.id;
      // make sure you can see where it went
      if (st === 'read' && !shelfBooks().includes(b)) { prefs.year = 'all'; savePrefs(); }
      if (st === 'want' && prefs.year !== 'want' && STATUSES.includes(prefs.year)) { prefs.year = 'want'; savePrefs(); }
      toast({ read: `“${title}” is on the shelf.`, reading: `Enjoy “${title}”! It’s up top under Reading now.`, want: `“${title}” is on your to-read pile.`, dnf: `“${title}” is set aside.` }[st]);
    }
    if (!target.lookedUp) lookup(target).then(() => { if (reader && reader.currentId() === target.id) reader.refresh(); });
    const wasEditing = editingId;
    editingId = null;
    finishing = false;
    save();
    $('#editor').close();
    render();
    if (wasEditing && reader && reader.currentId() === wasEditing) reader.refresh();
    // the book that got you there: a year's trophy first, then a goal with your own dates
    const metNow = goalsMet();
    const wonYear = Object.keys(prefs.goals).sort().find(y => metNow.has('y' + y) && !metBefore.has('y' + y));
    const won = !wonYear && prefs.customGoals.find(g => metNow.has(g.id) && !metBefore.has(g.id));
    if (wonYear) celebrate(wonYear);
    else if (won) celebrateGoal(won);
  }

  // ---------- moving a book between piles ----------
  function addWant(p) {
    const dup = findDuplicate(p.title, p.author);
    if (dup) { toast(`“${dup.title}” is already in your library.`); return; }
    const b = { id: uid(), addedAt: Date.now(), title: p.title, author: p.author || '', status: 'want', rating: 0, finished: '', pages: p.pages || null, genre: p.genre || '', review: '', color: null };
    if (p.olKey) b.olKey = p.olKey;
    if (p.cover) b.art = { status: 'found', ids: [p.cover], i: 0, olKey: p.olKey || null };
    books.push(b);
    save(); render(); lookup(b);
    toast(`“${b.title}” is on your to-read pile.`);
  }
  // ---------- the reading log: what you did each day (it lights up the reading calendar) ----------
  function logRead(b, { m = 0, p = null } = {}) {
    const d = today();
    if (!Array.isArray(b.log)) b.log = [];
    let e = b.log.find(x => x.d === d);
    if (!e) { e = { d }; b.log.push(e); }
    if (m > 0) e.m = Math.min(1440, (e.m || 0) + Math.round(m));
    if (p != null) e.p = p;
    if (b.log.length > 500) b.log = b.log.slice(-500);
  }

  // ---------- reading timer: start it when you sit down, stop it when you're done ----------
  let timerTick = null;
  const timerNow = () => (prefs.timer && books.some(b => b.id === prefs.timer.id) ? prefs.timer : null);
  const roomRefresh = () => { if (window.TomesteadRoom) window.TomesteadRoom.refresh(); };
  const pad2 = (n) => String(n).padStart(2, '0');
  function clockText(ms) {
    const t = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60);
    return h ? `${h}:${pad2(m)}:${pad2(t % 60)}` : `${m}:${pad2(t % 60)}`;
  }
  // settle: step straight into reading mode (the room dims, the sounds start) rather than just a toast
  function startTimer(id, { settle = false } = {}) {
    const b = books.find(x => x.id === id);
    if (!b) return;
    const cur = timerNow();
    if (cur && cur.id === id) { if (settle && ritual) ritual.open(id); return; }
    if (cur) stopTimer({ quiet: true });
    prefs.timer = { id, start: Date.now() };
    savePrefs(); renderTimer(); roomRefresh();
    if (settle && ritual && ritual.open(id)) return;
    toast(`Timer’s running for “${b.title}”. Tap it at the top when you stop.`);
  }
  function stopTimer({ quiet = false, discard = false } = {}) {
    const t = timerNow();
    prefs.timer = null; savePrefs(); renderTimer();
    if (!t) { roomRefresh(); return; }
    const b = books.find(x => x.id === t.id);
    const m = Math.min(720, Math.round((Date.now() - t.start) / 60000));
    if (discard) { toast('Reading session discarded.'); roomRefresh(); return; }
    if (b && m >= 1) { logRead(b, { m }); b.updatedAt = Date.now(); save(); if (calendar) calendar.refresh(); }
    roomRefresh();
    if (!b) return;
    if (!quiet && statusOf(b) === 'reading') { openProgress(b.id, null, { session: m }); return; }
    toast(m >= 1 ? `Logged ${m} min of “${b.title}”.` : 'That was under a minute, so nothing was logged.');
  }
  function renderTimer() {
    const t = timerNow(), chip = $('#timerChip');
    clearInterval(timerTick); timerTick = null;
    if (ritual) ritual.refresh();
    if (!chip) return;
    if (!t) { chip.hidden = true; return; }
    const b = books.find(x => x.id === t.id);
    chip.hidden = false;
    $('#tcTitle').textContent = b.title;
    const tick = () => { $('#tcTime').textContent = clockText(Date.now() - t.start); };
    tick(); timerTick = setInterval(tick, 1000);
  }

  function startReading(b) {
    const again = datesOf(b).length > 0;
    Object.assign(b, { status: 'reading', started: today(), progress: 0, progressAt: Date.now(), stopped: '', updatedAt: Date.now() });
    save(); render();
    if (reader && reader.currentId() === b.id) reader.refresh();
    toast(again ? `Back into “${b.title}”. It’s up top under Reading now.` : `Enjoy “${b.title}”! It’s up top under Reading now.`);
  }
  let asideId = null;
  function setAside(b) {
    if (datesOf(b).length) {
      // stopping a reread: it's still a book you've read
      Object.assign(b, { status: 'read', progress: null, updatedAt: Date.now() });
      toast(`Stopped rereading “${b.title}”.`);
      save(); render();
      if (reader && reader.currentId() === b.id) reader.refresh();
      return;
    }
    // where you stopped and why (both optional)
    asideId = b.id;
    const print = formatOf(b) === 'print';
    $('#asBook').textContent = `${b.title}${b.author ? ` by ${b.author}` : ''}`;
    $('#asAtLabel').firstChild.textContent = print ? 'I stopped at page ' : 'I stopped at (%) ';
    $('#asAt').max = print ? 5000 : 100;
    $('#asAt').value = b.progress != null && b.progress !== '' ? b.progress : '';
    $('#asWhy').value = b.stopWhy || '';
    renderWhyChips();
    $('#asideDialog').showModal();
  }
  function saveAside(e) {
    e.preventDefault();
    const b = books.find(x => x.id === asideId);
    $('#asideDialog').close();
    if (!b) return;
    const at = parseFloat($('#asAt').value);
    Object.assign(b, { status: 'dnf', stopped: today(), stopWhy: $('#asWhy').value.trim().slice(0, 120), updatedAt: Date.now() });
    if (at >= 0) b.progress = formatOf(b) === 'print' ? Math.round(at) : Math.min(100, at);
    if (timerNow() && timerNow().id === b.id) stopTimer({ quiet: true });
    save(); render();
    if (reader && reader.currentId() === b.id) reader.refresh();
    toast(`“${b.title}” is set aside. It’s under Set aside if you come back to it.`);
  }
  const WHY = ['Not for me', 'Lost interest', 'Too slow', 'Not the right time', 'Too heavy right now', 'Library loan ran out'];
  function renderWhyChips() {
    document.querySelectorAll('.why-chips').forEach(box => {
      const input = $('#' + box.dataset.whyFor);
      box.innerHTML = WHY.map(w => `<button type="button" class="why-chip" aria-pressed="${input.value === w}">${w}</button>`).join('');
    });
  }

  // ---------- where you are in a book ----------
  let progressId = null, progressFrom = null;
  function openProgress(id, fromEl, opts = {}) {
    const b = books.find(x => x.id === id);
    if (!b) return;
    progressId = id; progressFrom = fromEl || null;
    const t = timerNow();
    $('#prSession').hidden = opts.session == null;
    $('#prSession').textContent = opts.session >= 1 ? `You read for ${opts.session >= 60 ? `${Math.floor(opts.session / 60)} h ${opts.session % 60} min` : `${opts.session} min`}. Where did you get to?` : 'Where did you get to?';
    $('#prTimer').textContent = t && t.id === id ? `Stop the timer (${clockText(Date.now() - t.start)} so far)` : 'Start a reading timer';
    $('#prTimer').hidden = opts.session != null;
    $('#prLine').hidden = opts.session == null;
    const print = formatOf(b) === 'print';
    $('#prTitle').textContent = b.title;
    $('#prBy').textContent = b.author ? `by ${b.author}` : '';
    $('#prCover').innerHTML = thumbHTML(b, 'M');
    wireThumbs($('#prCover'));
    $('#prLabel').textContent = print ? 'I’m on page' : 'How far along (%)';
    $('#prOfWrap').hidden = !print;
    $('#prTotal').value = b.pages || '';
    $('#prValue').value = Number(b.progress) || 0;
    $('#prValue').max = print ? 5000 : 100;
    progressChanged('value');
    $('#progressDialog').showModal();
    setTimeout(() => { $('#prValue').focus(); $('#prValue').select(); }, 30);
  }
  function progressChanged(from) {
    const b = books.find(x => x.id === progressId);
    if (!b) return;
    const print = formatOf(b) === 'print';
    const total = parseInt($('#prTotal').value, 10) || 0;
    const range = $('#prRange');
    if (print) {
      range.hidden = !total;
      range.max = total || 100;
    } else { range.hidden = false; range.max = 100; }
    if (from === 'range') $('#prValue').value = range.value;
    else range.value = Math.min(Number(range.max), Number($('#prValue').value) || 0);
    const v = Number($('#prValue').value) || 0;
    const pct = print ? (total ? Math.min(100, Math.round((v / total) * 100)) : null) : Math.min(100, Math.round(v));
    $('#prPct').textContent = print && pct != null ? `${pct}%` : '';
    // how it's going, and when you might finish at this pace
    let line = '';
    if (b.started && ISO.test(b.started)) {
      const days = Math.max(1, dayNum(today()) - dayNum(b.started) + 1);
      line = `Started ${shortDate(b.started, b.started.slice(0, 4) !== thisYear())} · day ${days}`;
      if (v > 0 && pct != null && pct < 100) {
        const perDay = v / days;
        if (print) line += ` · about ${Math.max(1, Math.round(perDay))} pages a day`;
        const left = print ? (total - v) / perDay : (100 - v) / perDay;
        if (left > 0 && left < 3650) line += ` · on track to finish around ${shortDate(isoOf(dayNum(today()) + Math.ceil(left)), false)}`;
      }
      line += '.';
    }
    $('#prSub').textContent = line;
  }
  function saveProgress(e, { then } = {}) {
    if (e) e.preventDefault();
    const b = books.find(x => x.id === progressId);
    if (!b) return;
    const print = formatOf(b) === 'print';
    const total = parseInt($('#prTotal').value, 10);
    if (print && total > 0) b.pages = total;
    let v = Math.max(0, Number($('#prValue').value) || 0);
    v = print ? Math.round(b.pages ? Math.min(v, b.pages) : v) : Math.min(100, v);
    b.progress = v; b.progressAt = Date.now(); b.updatedAt = Date.now();
    logRead(b, { p: v });
    save();
    $('#progressDialog').close();
    if (calendar) calendar.refresh();
    render();
    if (reader && reader.currentId() === b.id) reader.refresh();
    const done = print ? (b.pages && v >= b.pages) : v >= 100;
    if (done) openEditor(b.id, null, null, { finish: true });
    else if (then === 'line') openQuote(b.id);
    else toast(`Saved: ${progressText(b)}${print && pctOf(b) != null ? ` (${pctOf(b)}%)` : ''}.`);
  }

  // ---------- favorite lines ----------
  let quoteBook = null, quoteId = null;
  function openQuote(bookId, qid = null) {
    const b = books.find(x => x.id === bookId);
    if (!b) return;
    quoteBook = bookId; quoteId = qid;
    const q = qid && (b.quotes || []).find(x => x.id === qid);
    $('#qTitle').textContent = q ? 'Edit quote' : 'Save a quote';
    $('#qBook').textContent = `from ${b.title}`;
    $('#qText').value = q ? q.text : '';
    $('#qWhere').value = q ? (q.where || '') : (statusOf(b) === 'reading' && formatOf(b) === 'print' && b.progress ? `p. ${b.progress}` : '');
    $('#qError').hidden = true;
    $('#qRemove').hidden = !q;
    $('#qRemove').textContent = 'Delete'; delete $('#qRemove').dataset.confirm;
    $('#quoteDialog').showModal();
    setTimeout(() => $('#qText').focus(), 30);
  }
  function saveQuote(e) {
    e.preventDefault();
    const b = books.find(x => x.id === quoteBook);
    const text = $('#qText').value.trim();
    if (!text) { $('#qError').textContent = 'Type or paste the line you want to keep.'; $('#qError').hidden = false; $('#qText').focus(); return; }
    if (!b) return;
    b.quotes = Array.isArray(b.quotes) ? b.quotes : [];
    const where = $('#qWhere').value.trim().slice(0, 30);
    const q = quoteId && b.quotes.find(x => x.id === quoteId);
    if (q) Object.assign(q, { text, where });
    else b.quotes.push({ id: uid(), text, where, at: today() });
    b.updatedAt = Date.now();
    save();
    $('#quoteDialog').close();
    if (reader && reader.currentId() === b.id) reader.refresh();
    toast(q ? 'Quote updated.' : `Saved. It’s on the pages of “${b.title}”.`);
  }
  function removeQuote() {
    const btn = $('#qRemove');
    if (!btn.dataset.confirm) { btn.dataset.confirm = '1'; btn.textContent = 'Delete for good?'; return; }
    const b = books.find(x => x.id === quoteBook);
    if (b) { b.quotes = (b.quotes || []).filter(x => x.id !== quoteId); b.updatedAt = Date.now(); save(); }
    $('#quoteDialog').close();
    if (b && reader && reader.currentId() === b.id) reader.refresh();
    toast('Quote deleted.');
  }

  // ---------- tags ----------
  function showTag(t) {
    tagFilter = t;
    // look on the pile that has the most books with this tag (your read shelves when it's a tie)
    const has = (y) => shelfBooks(y).filter(b => tagsOf(b).some(x => x.toLowerCase() === t.toLowerCase())).length;
    const here = STATUSES.includes(prefs.year) || prefs.year === 'all' ? prefs.year : 'all';
    const best = ['all', 'reading', 'want', 'dnf'].reduce((a, y) => (has(y) > has(a) ? y : a), here === 'read' ? 'all' : here);
    prefs.year = has(here) ? here : best;
    caseIndex = 0;
    savePrefs();
    render();
    window.scrollTo(0, 0);
  }
  function openTags() { renderTagsList(); $('#tagsDialog').showModal(); }
  function renderTagsList() {
    const vocab = tagVocab();
    const count = (t) => books.filter(b => tagsOf(b).some(x => x.toLowerCase() === t.toLowerCase())).length;
    $('#tagsList').innerHTML = vocab.length ? vocab.map((t, i) => { const n = count(t); return `<li data-ti="${i}">
        <button type="button" class="tl-name" data-tl-show="${esc(t)}" ${n ? '' : 'disabled'}>${esc(t)} <span class="tl-n">${n ? plural(n, 'book') : 'no books yet'}</span></button>
        <button type="button" class="tl-act" data-tl-rename="${esc(t)}" aria-label="Rename ${esc(t)}">Rename</button>
        <button type="button" class="tl-act danger" data-tl-del="${esc(t)}" aria-label="Delete ${esc(t)}">Delete</button>
      </li>`; }).join('') : '<li class="tl-empty">No tags yet. Make one below.</li>';
  }
  function renameTag(from, to) {
    to = cleanTags([to])[0];
    if (!to || to === from) return;
    const same = (x) => x.toLowerCase() === from.toLowerCase();
    const i = prefs.tagList.findIndex(same);
    if (i >= 0) prefs.tagList[i] = to; else prefs.tagList.push(to);
    prefs.tagList = cleanTags(prefs.tagList);
    for (const b of books) if (tagsOf(b).some(same)) { b.tags = cleanTags(b.tags.map(x => (same(x) ? to : x))); b.updatedAt = Date.now(); }
    if (tagFilter && same(tagFilter)) tagFilter = to;
    savePrefs(); save(); render();
    toast(`Renamed to “${to}”.`);
  }
  function deleteTag(t) {
    const same = (x) => x.toLowerCase() === t.toLowerCase();
    prefs.tagList = prefs.tagList.filter(x => !same(x));
    let n = 0;
    for (const b of books) if (tagsOf(b).some(same)) { b.tags = b.tags.filter(x => !same(x)); b.updatedAt = Date.now(); n++; }
    if (tagFilter && same(tagFilter)) tagFilter = null;
    savePrefs(); save(); render();
    toast(n ? `Deleted “${t}” and took it off ${plural(n, 'book')}.` : `Deleted “${t}”.`);
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
      const g = Object.assign(yearGoal(y), { id: y, name: `${y} reading goal`, done: countForGoal(y), metAt: prefs.trophies[y] && prefs.trophies[y].at });
      cards.push({ kind: 'y', g, i: goalInfo(g) });
    }
    // running now first (soonest deadline first), then coming up, then finished
    const rank = (c) => (c.i.status === 'active' ? 0 : c.i.status === 'upcoming' ? 1 : 2);
    cards.sort((p, q) => rank(p) - rank(q) || (rank(p) === 2 ? q.g.end.localeCompare(p.g.end) : rank(p) === 1 ? p.g.start.localeCompare(q.g.start) : p.g.end.localeCompare(q.g.end)));
    $('#goalsList').innerHTML = cards.map(({ kind, g, i }) => `
      <li><button type="button" class="gcard ${i.status}${i.met ? ' met' : ''}" ${kind === 'y' ? `data-ygoal="${esc(g.id)}"` : `data-cgoal="${esc(g.id)}"`}>
        <span class="gc-head"><span class="gc-name">${i.met ? '<span class="gc-check" aria-hidden="true">✓</span>' : ''}${esc(kind === 'y' ? g.name : goalName(g))}</span><span class="gc-count">${i.done} of ${g.target}</span></span>
        ${kind === 'c' && g.name ? `<span class="gc-range">${esc(rangeText(g.start, g.end))}</span>` : ''}
        ${G.countsFrom(g) > g.start && !i.met && i.status !== 'upcoming' ? `<span class="gc-range">Counting books finished from ${esc(shortAuto(G.countsFrom(g)))}</span>` : ''}
        <span class="gc-meter" aria-hidden="true"><span style="width:${i.pct}%"></span></span>
        <span class="gc-note">${esc(i.note)}</span>
      </button></li>`).join('');
    $('#goalsEmpty').hidden = cards.length > 0;
  }

  // one goal: a whole year (trophy + empty spots on that year's shelf) or your own dates
  let goalEdit = null;          // { kind: 'year'|'custom', id? }
  let goalSpan = 'month';
  const spanRange = (span) => G.spanRange(span, today());
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
  // the dated goal being edited (null for a new one)
  const editingCustom = () => (goalEdit && goalEdit.kind === 'custom' && goalEdit.id ? prefs.customGoals.find(x => x.id === goalEdit.id) : null);
  // a live line under the form: what counts, how long the window is
  function goalHint() {
    const sub = $('#goalSub');
    const n = parseInt($('#gCount').value, 10);
    if (goalSpan === 'year') {
      const y = $('#gYear').value, has = goalFor(y) > 0;
      const g = has ? yearGoal(y) : { start: `${y}-01-01`, end: `${y}-12-31`, since: today() };
      const from = G.countsFrom(g), counted = has ? countForGoal(y) : 0;
      let line = has
        ? `${plural(counted, 'book')} counted so far${from > g.start ? `, finished since ${shortAuto(from)}` : ''}.`
        : (from > g.start ? `Counts the books you finish from today on. Books already on your shelf don’t count.` : `Counts the books you finish in ${y}.`);
      line += ` Empty spots on the ${y} shelf hold space for the rest, and reaching it earns a trophy for the arch of your bookcase.`;
      sub.textContent = line;
      $('#goalTitle').textContent = has ? `${y} reading goal` : 'New reading goal';
      $('#goalRemove').hidden = !has;
      return;
    }
    const cur = editingCustom();
    $('#goalTitle').textContent = cur ? 'Edit goal' : 'New reading goal';
    $('#goalRemove').hidden = !cur;
    const a = $('#gStart').value, z = $('#gEnd').value;
    if (!ISO.test(a) || !ISO.test(z) || z < a) { sub.textContent = 'Pick when it starts and ends.'; return; }
    const g = { start: a, end: z, since: cur ? cur.since : today(), skip: cur ? cur.skip : [] };
    const from = G.countsFrom(g);
    if (from > z) { sub.textContent = 'That stretch is already over. Pick an end date from today on.'; return; }
    const days = dayNum(z) - dayNum(from) + 1;
    const counted = cur ? goalFinishes(g).length : 0;
    let line = `${rangeText(a, z)} · ${plural(dayNum(z) - dayNum(a) + 1, 'day')}.`;
    if (cur) line += ` ${plural(counted, 'book')} counted so far.`;
    else line += from > a ? ` Counts the books you finish from today on.` : ` Counts the books you finish in that window.`;
    if (!cur) line += ' Books already on your shelf don’t count.';
    const left = n - counted;
    if (n > 0 && left > 0) {
      const daysLeft = Math.min(days, dayNum(z) - Math.max(dayNum(today()), dayNum(from)) + 1);
      const per = daysLeft / left;
      line += per >= 1.5 ? ` That’s about one book every ${Math.round(per)} days.` : ` That’s about ${Math.max(1, Math.round(left / daysLeft * 7))} books a week.`;
    }
    sub.textContent = line;
  }
  function openGoal(year) {
    // opened from the year's goal bar or a trophy: that year's goal
    const y = year || (/^\d{4}$/.test(prefs.year) ? prefs.year : thisYear());
    openGoalEditor({ kind: 'year', year: goalYearOpen(y) || goalFor(y) ? y : thisYear() });
  }
  function openGoalEditor(opts = {}) {
    // years you can pick: this one, next one, and any year that already has a goal (to change or remove it)
    const years = [...new Set([thisYear(), String(+thisYear() + 1), ...Object.keys(prefs.goals).filter(v => goalFor(v))])].sort((a, b) => b.localeCompare(a));
    const y = opts.year && years.includes(opts.year) ? opts.year : thisYear();
    $('#gYear').innerHTML = years.map(v => `<option${v === y ? ' selected' : ''}>${v}</option>`).join('');
    $('#goalError').hidden = true;
    const spans = $('#gSpanField');
    $('#gStart').min = ''; $('#gEnd').min = today();
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
      $('#gEnd').min = '';
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
      if (!goalFor(y) && !goalYearOpen(y)) return goalError(`${y} is over. Goals count the books you finish from the day you set them.`);
      // a new year goal starts counting today; changing the number keeps the day it was set
      if (!goalFor(y) || !prefs.goalSince[y]) prefs.goalSince[y] = stampGoal(yearGoal(y));
      prefs.goals[y] = n;
      prefs.year = y;
      caseIndex = 0;
      savePrefs();
      $('#goalDialog').close();
      render();
      if ($('#goalsDialog').open) renderGoals();
      const left = n - countForGoal(y);
      toast(left > 0 ? `Goal saved: ${plural(n, 'book')} in ${y}. ${left} to go.` : `Goal saved. You’ve reached it: ${plural(countForGoal(y), 'book')} counted.`);
      return;
    }
    const a = $('#gStart').value, z = $('#gEnd').value;
    if (!ISO.test(a) || !ISO.test(z)) return goalError('Pick a start date and an end date.');
    if (z < a) return goalError('The end date comes before the start date.');
    if (dayNum(z) - dayNum(a) > 3660) return goalError('Keep it to ten years or less.');
    let g = editingCustom();
    if (!g && z < today()) return goalError('That stretch is already over. Pick an end date from today on.');
    const name = $('#gName').value.trim().slice(0, 60);
    if (g) Object.assign(g, { name, target: n, start: a, end: z });
    else {
      g = { id: uid(), name, target: n, start: a, end: z, createdAt: Date.now() };
      Object.assign(g, stampGoal(g));
      prefs.customGoals.push(g);
    }
    syncGoalMarks();
    savePrefs();
    $('#goalDialog').close();
    render();
    if ($('#goalsDialog').open) renderGoals();
    const i = goalInfo(g);
    toast(i.met ? `Goal saved. You’ve reached it: ${plural(i.done, 'book')} counted.` : `Goal saved: ${plural(n, 'book')} by ${shortAuto(z)}. ${i.left} to go.`);
  }
  function removeGoal() {
    if (goalSpan === 'year') {
      const y = $('#gYear').value;
      delete prefs.goals[y];
      delete prefs.goalSince[y];
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

  let shareMoment = null;
  function celebrate(y) {
    syncTrophies();
    syncEarned();
    $('#celebrateText').textContent = `You read ${plural(countForGoal(y), 'book')} toward your ${y} goal of ${goalFor(y)}. Your ${y} trophy now stands in the arch of your bookcase.`;
    $('#celebrateTrophy').innerHTML = Art.drawTrophy(y, goalFor(y), 0.9);
    shareMoment = { kicker: `My ${y} reading goal`, big: countForGoal(y), bigLabel: `of ${goalFor(y)} books: goal reached`, lines: [`Trophy earned ${fmtDate(today())}`], art: Art.drawTrophy(y, goalFor(y), 2.4) };
    $('#celebrateRaise').dataset.year = y;
    delete $('#celebrateRaise').dataset.cgoal;
    confetti();
  }
  function celebrateGoal(g) {
    const i = goalInfo(g);
    $('#celebrateText').textContent = `You read ${plural(i.done, 'book')} ${g.name ? `for “${g.name}”` : `between ${rangeText(g.start, g.end)}`} and hit your goal of ${g.target}${i.status === 'active' && i.daysLeft > 1 ? `, with ${i.daysLeft} days to spare` : ''}.`;
    $('#celebrateTrophy').innerHTML = drawRibbon(g.target, 0.95);
    shareMoment = { kicker: g.name || 'My reading goal', big: i.done, bigLabel: `of ${g.target} books: goal reached`, lines: [g.name ? rangeText(g.start, g.end) : '', `Reached ${fmtDate(today())}`], art: drawRibbon(g.target, 3) };
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
    const payload = { app: 'Tomestead', version: 4, exportedAt: new Date().toISOString(), books: clean, settings: { theme: prefs.theme, goals: prefs.goals, goalSince: prefs.goalSince, trophies: prefs.trophies, customGoals: prefs.customGoals, tagList: prefs.tagList, readMarks: prefs.readMarks }, uploads };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `tomestead-backup-${today()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('Backup downloaded.');
  }
  // ---------- your library as a spreadsheet ----------
  // Goodreads' column names, so Goodreads, StoryGraph and Tomestead itself can read it back in,
  // plus a few of Tomestead's own columns at the end.
  function exportCSV() {
    const cell = (v) => { const t = String(v ?? ''); return /[",\n\r]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t; };
    const shelf = { read: 'read', reading: 'currently-reading', want: 'to-read', dnf: 'did-not-finish' };
    const binding = { print: '', ebook: 'Kindle Edition', audio: 'Audiobook' };
    const day = (iso) => (ISO.test(iso || '') ? iso.replace(/-/g, '/') : '');
    const head = ['Title', 'Author', 'ISBN13', 'My Rating', 'Number of Pages', 'Binding', 'Date Read', 'Date Added', 'Bookshelves', 'Exclusive Shelf', 'My Review', 'Read Count',
      'Date Started', 'Genre', 'Series', 'Series Number', 'Earlier Reads', 'Hours', 'Narrator', 'Progress', 'Set Aside On', 'Set Aside Why', 'Up Next', 'Favorite Lines'];
    const rows = [...books].sort((a, b) => (a.addedAt || 0) - (b.addedAt || 0)).map(b => {
      const st = statusOf(b), f = formatOf(b);
      const title = b.series ? `${b.title} (${b.series}${b.seriesNo != null && b.seriesNo !== '' ? `, #${b.seriesNo}` : ''})` : b.title;
      return [title, b.author, b.isbn || '', b.rating || 0, b.pages || '', binding[f], day(b.finished), day(localDay(b.addedAt || Date.now())),
        tagsOf(b).join(', '), shelf[st], b.review || '', datesOf(b).length,
        day(b.started), b.genre || '', b.series || '', b.seriesNo ?? '', (b.rereads || []).map(day).join('; '), b.hours || '', b.narrator || '',
        st === 'reading' || st === 'dnf' ? (b.progress ?? '') : '', day(b.stopped), b.stopWhy || '', b.upNext ? 'yes' : '',
        (b.quotes || []).map(q => q.text + (q.where ? ` (${q.where})` : '')).join(' | ')].map(cell).join(',');
    });
    const blob = new Blob(['\ufeff' + [head.join(','), ...rows].join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `tomestead-library-${today()}.csv`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(`Spreadsheet downloaded: ${plural(books.length, 'book')}. It opens in Excel, Numbers or Google Sheets, and Goodreads and StoryGraph can import it.`);
  }

  // ---------- feedback ----------
  let fbKind = '';
  function openFeedback() {
    fbKind = '';
    $('#feedbackForm').reset();
    document.querySelectorAll('#fbKind [data-kind]').forEach(b => b.setAttribute('aria-checked', 'false'));
    $('#fbError').hidden = true;
    $('#feedbackDialog').showModal();
    setTimeout(() => $('#fbText').focus(), 30);
  }
  async function sendFeedback(e) {
    e.preventDefault();
    const text = $('#fbText').value.trim();
    if (!text) { $('#fbError').textContent = 'Write a line or two first.'; $('#fbError').hidden = false; $('#fbText').focus(); return; }
    const data = { kind: fbKind || 'other', text: text.slice(0, 5000), doing: $('#fbDoing').value.trim().slice(0, 300), where: whereNow().replace(' › feedbackDialog', ''), device: device(), build: BUILD, books: books.length };
    $('#feedbackDialog').close();
    if (!Sync.enabled) {
      // no accounts on this copy of the app: hand it over to copy and send
      try { await navigator.clipboard.writeText(`[${data.kind}] ${data.text}${data.doing ? `\nTrying to: ${data.doing}` : ''}\n(${data.device}, ${data.where})`); toast('Copied. Paste it in a message to whoever shared Tomestead with you.'); }
      catch { toast('Couldn’t send it from here. Please message whoever shared Tomestead with you.'); }
      return;
    }
    const sent = await Sync.feedback(data);
    toast(sent ? 'Thank you! Your feedback is on its way.' : 'Thank you! It’s saved and will send the next time you’re online.');
  }

  // a book from a backup or an import, with only the fields Tomestead knows, in the shapes it expects
  function cleanBook(b) {
    const day = (d) => (/^\d{4}(-\d{2}(-\d{2})?)?$/.test(String(d || '')) ? String(d) : '');
    const num = (v, max) => { const n = Number(v); return Number.isFinite(n) && n >= 0 ? Math.min(max, n) : null; };
    const out = {
      id: validId(String(b.id || '')) ? String(b.id) : uid(), title: String(b.title).slice(0, 500), author: String(b.author || ''),
      status: statusOf(b),
      rating: halfStar(b.rating),
      finished: day(b.finished), pages: parseInt(b.pages, 10) > 0 ? Math.min(5000, parseInt(b.pages, 10)) : null,
      genre: String(b.genre || ''), review: String(b.review || ''),
      color: Number.isInteger(b.color) ? b.color : null, addedAt: Number(b.addedAt) || Date.now(),
    };
    const rr = (Array.isArray(b.rereads) ? b.rereads : []).map(day).filter(d => d && d !== out.finished);
    if (rr.length) out.rereads = [...new Set(rr)];
    if (FORMATS[b.format] && b.format !== 'print') out.format = b.format;
    if (num(b.hours, 300) > 0) out.hours = num(b.hours, 300);
    if (b.series) out.series = String(b.series).slice(0, 120);
    if (b.series && num(b.seriesNo, 999) != null && b.seriesNo !== '') out.seriesNo = num(b.seriesNo, 999);
    const tags = cleanTags(b.tags);
    if (tags.length) out.tags = tags;
    if (Array.isArray(b.quotes)) {
      const qs = b.quotes.filter(q => q && String(q.text || '').trim()).map(q => ({ id: validId(String(q.id || '')) ? String(q.id) : uid(), text: String(q.text).slice(0, 4000), where: String(q.where || '').slice(0, 30), at: day(q.at) }));
      if (qs.length) out.quotes = qs;
    }
    if (b.narrator) out.narrator = String(b.narrator).slice(0, 120);
    if (b.stopWhy && out.status === 'dnf') out.stopWhy = String(b.stopWhy).slice(0, 120);
    if (Number(b.upNext) > 0 && out.status === 'want') out.upNext = Number(b.upNext);
    if (day(b.started)) out.started = day(b.started);
    if (day(b.stopped)) out.stopped = day(b.stopped);
    if (num(b.progress, 5000) != null && (out.status === 'reading' || out.status === 'dnf')) out.progress = num(b.progress, 5000);
    if (Number(b.progressAt) > 0) out.progressAt = Number(b.progressAt);
    if (Array.isArray(b.log)) {
      const lg = b.log.filter(l => l && /^\d{4}-\d{2}-\d{2}$/.test(String(l.d))).map(l => {
        const o = { d: String(l.d) };
        if (num(l.m, 1440) > 0) o.m = Math.round(num(l.m, 1440));
        if (l.p != null && l.p !== '' && num(l.p, 5000) != null) o.p = num(l.p, 5000);
        return o;
      }).slice(-500);
      if (lg.length) out.log = lg;
    }
    const isbn = Covers.isbnOf(b.isbn);
    if (isbn) out.isbn = isbn;
    if (/^\/works\/OL\d+W$/.test(String(b.olKey || ''))) out.olKey = String(b.olKey);
    return out;
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
          const clean = cleanBook(b);
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
          if (st.goals) {
            prefs.goals = Object.assign({}, prefs.goals, st.goals);
            // the day each restored goal was set comes with it (older backups don't have it; adoptOldGoals fills it in)
            const since = cleanSince(st.goalSince);
            for (const yr of Object.keys(st.goals)) { if (since[yr]) prefs.goalSince[yr] = since[yr]; else delete prefs.goalSince[yr]; }
          }
          if (Array.isArray(st.tagList)) prefs.tagList = cleanTags([...prefs.tagList, ...st.tagList]);
          if (Array.isArray(st.readMarks)) prefs.readMarks = cleanMarks([...prefs.readMarks, ...st.readMarks]);
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

  // ---------- bring in a Goodreads or StoryGraph library ----------
  let incoming = null;
  function openImport() {
    incoming = null;
    $('#imTitle').textContent = 'Bring in your books';
    $('#imBody').innerHTML = `<p>Keep track of your reading on Goodreads or StoryGraph? Bring it all over: ratings, reviews, dates read, what you’re reading now, your to-read list and your shelves (as tags).</p>
      <ol class="im-steps">
        <li><strong>Goodreads:</strong> on the website, open <em>My Books</em>, then <em>Import and export</em>, then <em>Export library</em>. Download the file when it’s ready.</li>
        <li><strong>StoryGraph:</strong> open <em>Manage account</em>, then <em>Export StoryGraph library</em>, and download the file.</li>
        <li>Choose that .csv file here.</li>
      </ol>
      <p class="im-note">Books already in your library are skipped, so it’s safe to do this again later.</p>`;
    $('#imGo').hidden = false;
    $('#imGo').textContent = 'Choose the file';
    $('#imGo').dataset.step = 'choose';
    $('#importDialog').showModal();
  }
  async function readImport(file) {
    let parsed;
    try { parsed = window.TomesteadImport.parse(await file.text()); }
    catch {
      $('#imBody').innerHTML = '<p class="form-error">That file doesn’t look like a Goodreads or StoryGraph export. Choose the .csv file they let you download.</p>';
      return;
    }
    const have = new Set(books.map(dupKey));
    const seen = new Set();
    const fresh = [];
    let skipped = 0;
    for (const b of parsed.books) {
      const k = dupKey(b);
      if (have.has(k) || seen.has(k)) { skipped++; continue; }
      seen.add(k); fresh.push(b);
    }
    const n = (st) => fresh.filter(b => b.status === st).length;
    const parts = [[n('read'), 'read'], [n('reading'), 'reading now'], [n('want'), 'to read'], [n('dnf'), 'set aside']].filter(([c]) => c).map(([c, l]) => `<li><strong>${c}</strong> ${l}</li>`);
    const reviews = fresh.filter(b => b.review).length, rated = fresh.filter(b => b.rating).length;
    const tagged = new Set(fresh.flatMap(b => b.tags || []));
    incoming = fresh;
    $('#imTitle').textContent = `Your ${parsed.source} library`;
    $('#imBody').innerHTML = fresh.length
      ? `<p>Found <strong>${plural(fresh.length, 'book')}</strong> to bring in:</p><ul class="im-counts">${parts.join('')}</ul>
        <p>${[rated ? `${rated} with ratings` : '', reviews ? `${plural(reviews, 'review')}` : '', tagged.size ? `${plural(tagged.size, 'tag')} from your shelves${parsed.source === 'StoryGraph' ? ' and moods' : ''}` : ''].filter(Boolean).join(', ') || 'Titles and authors'} come along too.</p>
        ${skipped ? `<p class="im-note">${plural(skipped, 'book is', 'books are')} already in your library and will be skipped.</p>` : ''}
        <p class="im-note">Covers and summaries fill in on their own over the next few minutes.</p>`
      : `<p>Everything in that file is already in your library${skipped ? ` (${plural(skipped, 'book')})` : ''}. Nothing new to bring in.</p>`;
    $('#imGo').hidden = !fresh.length;
    $('#imGo').textContent = `Add ${plural(fresh.length, 'book')}`;
    $('#imGo').dataset.step = 'go';
  }
  function doImport() {
    if (!incoming || !incoming.length) return;
    const now = Date.now();
    let n = 0;
    incoming.forEach((raw, i) => {
      const b = cleanBook(Object.assign({}, raw, { id: '', addedAt: raw.addedAt || now - i }));
      books.push(b); n++;
    });
    incoming = null;
    save();
    $('#importDialog').close();
    prefs.year = 'all'; caseIndex = 0; savePrefs();
    render();
    toast(`Added ${plural(n, 'book')} to your library. Covers are on their way.`);
    setTimeout(runLookupQueue, 400);
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

  // ---------- install (iPhone: a one-time tip on adding it to the home screen) ----------
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
      const now = e.target.closest('[data-now]');
      if (now) return openProgress(now.dataset.now, now.querySelector('.now-cover'));
      const unf = e.target.closest('[data-unfilter]');
      if (unf) { tagFilter = null; caseIndex = 0; return render(); }
      const add = e.target.closest('[data-add]');
      if (add) return openEditor(null, null, null, STATUSES.includes(add.dataset.add) ? { status: add.dataset.add } : {});
      const gl = e.target.closest('[data-goal]');
      if (gl) return openGoal(gl.dataset.goal || undefined);
      const cg = e.target.closest('[data-cgoal]');
      if (cg) return openGoalEditor({ id: cg.dataset.cgoal });
      if (e.target.closest('[data-goals]')) return openGoals();
      if (e.target.closest('[data-import]')) return openImport();
      if (e.target.closest('[data-all]')) { prefs.year = 'all'; savePrefs(); return render(); }
      if (e.target.closest('[data-clear]')) { query = ''; tagFilter = null; $('#search').value = ''; $('.toolbar').classList.remove('searching'); render(); }
    });

    // bookcase paging
    $('#prevCase').addEventListener('click', () => goCase(currentCase() - 1));
    $('#nextCase').addEventListener('click', () => goCase(currentCase() + 1));
    let st;
    $('#cases').addEventListener('scroll', () => { clearTimeout(st); st = setTimeout(updatePager, 60); }, { passive: true });
    document.addEventListener('keydown', e => {
      if (onCustomize() || onYear() || viewNow() !== 'shelf' || document.querySelector('dialog[open]') || !$('#celebrate').hidden || (reader && reader.isOpen())) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') goCase(currentCase() + 1);
      if (e.key === 'ArrowLeft') goCase(currentCase() - 1);
    });

    document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
    document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
    $('#bookForm').addEventListener('submit', submitEditor);
    // the add / edit form
    $('#fStatus').addEventListener('click', e => { const b = e.target.closest('[data-status]'); if (b) setStatus(b.dataset.status); });
    $('#fFormat').addEventListener('click', e => { const b = e.target.closest('[data-format]'); if (b) setFormat(b.dataset.format); });
    ['#fPages', '#fHours', '#fGenre', '#fSeries', '#fSeriesNo'].forEach(id => $(id).addEventListener('input', updateDetailsSum));
    $('#fTitle').addEventListener('input', onTitleInput);
    $('#fTitle').addEventListener('keydown', e => {
      if ($('#fSuggest').hidden || !findItems.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (e.key === 'ArrowDown') findActive = findActive < findItems.length - 1 ? findActive + 1 : -1;
        else findActive = findActive === -1 ? findItems.length - 1 : findActive - 1;
        renderSuggest();
      } else if (e.key === 'Enter' && findActive >= 0) { e.preventDefault(); applyPick(findItems[findActive]); }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeSuggest(); }
    });
    $('#fTitle').addEventListener('blur', () => setTimeout(() => { if (document.activeElement !== $('#fTitle')) closeSuggest(); }, 250));
    $('#fSuggest').addEventListener('mousedown', e => e.preventDefault());
    $('#fSuggest').addEventListener('click', e => { const li = e.target.closest('[data-i]'); if (li) applyPick(findItems[+li.dataset.i]); });
    $('#fMatch').addEventListener('click', e => {
      if (!e.target.closest('[data-unpick]')) return;
      pick = null; $('#fMatch').hidden = true; $('#fTitle').focus();
    });
    $('#scanBtn').addEventListener('click', scanBarcode);
    $('#addReread').addEventListener('click', () => { editRereads.push(''); renderRereads(); const ins = $('#fRereads').querySelectorAll('input'); ins[ins.length - 1].focus(); });
    $('#fRereads').addEventListener('input', e => { const i = e.target.dataset.rr; if (i != null) editRereads[+i] = e.target.value; });
    $('#fRereads').addEventListener('click', e => { const x = e.target.closest('[data-rr-x]'); if (x) { editRereads.splice(+x.dataset.rrX, 1); renderRereads(); } });
    $('#fTags').addEventListener('click', e => {
      const t = e.target.closest('[data-tag]'); if (!t) return;
      const name = t.dataset.tag;
      const on = editTags.some(x => x.toLowerCase() === name.toLowerCase());
      editTags = on ? editTags.filter(x => x.toLowerCase() !== name.toLowerCase()) : [...editTags, name];
      t.setAttribute('aria-pressed', String(!on));
    });
    $('#fTags').addEventListener('keydown', e => { if (e.target.id === 'fTagNew' && e.key === 'Enter') { e.preventDefault(); addTagFromInput(); } });
    $('#fTags').addEventListener('focusout', e => { if (e.target.id === 'fTagNew' && e.target.value.trim()) addTagFromInput(); });

    // reading progress
    $('#progressForm').addEventListener('submit', saveProgress);
    $('#prValue').addEventListener('input', () => progressChanged('value'));
    $('#prTotal').addEventListener('input', () => progressChanged('total'));
    $('#prRange').addEventListener('input', () => progressChanged('range'));
    $('#progressForm').addEventListener('click', e => {
      const a = e.target.closest('[data-pr]'); if (!a) return;
      const b = books.find(x => x.id === progressId); if (!b) return;
      if (a.dataset.pr === 'line') { saveProgress(null, { then: 'line' }); return; }   // keep where you got to, then the line
      $('#progressDialog').close();
      if (a.dataset.pr === 'finish') openEditor(b.id, null, null, { finish: true });
      else if (a.dataset.pr === 'quote') openQuote(b.id);
      else if (a.dataset.pr === 'dnf') setAside(b);
      else if (a.dataset.pr === 'timer') { const t = timerNow(); if (t && t.id === b.id) stopTimer(); else startTimer(b.id, { settle: true }); }
      else if (a.dataset.pr === 'open') openDetail(b.id, progressFrom && progressFrom.isConnected ? progressFrom : null);
    });
    // quotes
    $('#quoteForm').addEventListener('submit', saveQuote);
    $('#qRemove').addEventListener('click', removeQuote);
    // tags
    $('#tagsList').addEventListener('click', e => {
      const show = e.target.closest('[data-tl-show]');
      if (show) { $('#tagsDialog').close(); return showTag(show.dataset.tlShow); }
      const rn = e.target.closest('[data-tl-rename]');
      if (rn) {
        const li = rn.closest('li'), t = rn.dataset.tlRename;
        li.innerHTML = `<form class="tl-edit"><input value="${esc(t)}" maxlength="30" aria-label="New name for ${esc(t)}"><button class="btn btn-ink btn-sm">Save</button></form>`;
        const inp = li.querySelector('input'); inp.focus(); inp.select();
        li.querySelector('form').addEventListener('submit', ev => { ev.preventDefault(); renameTag(t, inp.value); renderTagsList(); });
        return;
      }
      const del = e.target.closest('[data-tl-del]');
      if (del) {
        if (!del.dataset.confirm) { del.dataset.confirm = '1'; del.textContent = 'Delete?'; return; }
        deleteTag(del.dataset.tlDel); renderTagsList();
      }
    });
    $('#tagAddForm').addEventListener('submit', e => {
      e.preventDefault();
      const v = cleanTags([$('#tagNew').value])[0];
      if (!v) return;
      if (tagVocab().some(x => x.toLowerCase() === v.toLowerCase())) { toast(`You already have “${v}”.`); return; }
      prefs.tagList.push(v); savePrefs();
      $('#tagNew').value = '';
      renderTagsList();
    });
    // Goodreads / StoryGraph
    $('#imGo').addEventListener('click', () => { if ($('#imGo').dataset.step === 'go') doImport(); else $('#imFile').click(); });
    $('#imFile').addEventListener('change', e => { const f = e.target.files[0]; if (f) readImport(f); e.target.value = ''; });

    // goals
    $('#goalForm').addEventListener('submit', saveGoal);
    $('#fToday').addEventListener('click', e => { e.preventDefault(); $('#fFinished').value = today(); });
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
    $('#celebrateShare').hidden = !window.TomesteadShare;
    $('#celebrateShare').addEventListener('click', () => { if (shareMoment) window.TomesteadShare.share(shareMoment, 'tomestead-goal', toast); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#celebrate').hidden) closeCelebrate(); });

    // menu
    const more = $('.more');
    document.addEventListener('click', e => { if (more.open && !more.contains(e.target)) more.open = false; });
    $('#customizeBtn').addEventListener('click', () => { more.open = false; location.hash = 'customize'; });
    $('#goalMenuBtn').addEventListener('click', () => { more.open = false; openGoals(); });
    $('#calBtn').addEventListener('click', () => { more.open = false; calendar.open(); });
    $('#tcStop').addEventListener('click', () => stopTimer());
    $('#tcDiscard').addEventListener('click', () => stopTimer({ discard: true }));
    $('#tcSettle').addEventListener('click', () => { const t = timerNow(); if (t && ritual) ritual.open(t.id); });
    $('#recBtn').addEventListener('click', () => { more.open = false; recommender.open(); });
    $('#yearBtn').addEventListener('click', () => { more.open = false; location.hash = 'year'; });
    $('#lifeBtn').addEventListener('click', () => { more.open = false; openLife(); });
    // over the room, the view switch lives in this menu
    $('#viewClassicBtn').addEventListener('click', () => { more.open = false; prefs.view = 'shelf'; savePrefs(); render(); });
    $('#viewListBtn').addEventListener('click', () => { more.open = false; prefs.view = 'list'; savePrefs(); render(); });
    $('#tagsBtn').addEventListener('click', () => { more.open = false; openTags(); });
    $('#csvBtn').addEventListener('click', () => { more.open = false; openImport(); });
    $('#yrDone').addEventListener('click', () => { history.pushState(null, '', location.pathname + location.search); render(); window.scrollTo(0, 0); });
    $('#czTabs').addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (!b) return; czTab = b.dataset.tab; renderCustomize(); $('.cz-panel').scrollTop = 0; czShow(); });
    $('#czTabs').addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const tabs = [...document.querySelectorAll('#czTabs [data-tab]')], i = tabs.findIndex(b => b.dataset.tab === czTab);
      const nb = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      czTab = nb.dataset.tab; renderCustomize(); nb.focus(); czShow();
    });
    $('#czBookendFor').addEventListener('click', e => { const b = e.target.closest('[data-befor]'); if (b) { bookendFor = b.dataset.befor; renderCustomize(); } });
    $('#czPaintFor').addEventListener('click', e => { const b = e.target.closest('[data-paintfor]'); if (b) { paintFor = b.dataset.paintfor; renderCustomize(); czShow(); } });
    $('#czPaintFile').addEventListener('change', e => { const f = e.target.files[0]; if (f) paintingFromFile(f); e.target.value = ''; });
    $('#czFamFile').addEventListener('change', e => { const f = e.target.files[0]; if (f) familyFromFile(f); e.target.value = ''; });
    $('#famForm').addEventListener('submit', saveFamily);
    $('#czFamNote').addEventListener('click', e => { if (e.target.closest('#czFamRemove')) removeFamily(); });
    $('#exportBtn').addEventListener('click', () => { more.open = false; exportBooks(); });
    $('#csvExportBtn').addEventListener('click', () => { more.open = false; exportCSV(); });
    $('#feedbackBtn').addEventListener('click', () => { more.open = false; openFeedback(); });
    $('#tourBtn').addEventListener('click', () => {
      more.open = false;
      if (viewNow() !== 'room') { prefs.view = 'room'; savePrefs(); render(); }
      const go = () => (window.TomesteadRoom ? window.TomesteadRoom.tour() : setTimeout(go, 300));
      go();
    });
    $('#fbKind').addEventListener('click', e => {
      const b = e.target.closest('[data-kind]'); if (!b) return;
      fbKind = b.dataset.kind;
      document.querySelectorAll('#fbKind [data-kind]').forEach(x => x.setAttribute('aria-checked', String(x === b)));
    });
    $('#feedbackForm').addEventListener('submit', sendFeedback);
    $('#asideForm').addEventListener('submit', saveAside);
    document.addEventListener('click', e => {
      const c = e.target.closest('.why-chip'); if (!c) return;
      const input = $('#' + c.closest('.why-chips').dataset.whyFor);
      input.value = input.value === c.textContent ? '' : c.textContent;
      renderWhyChips();
    });
    ['#fWhy', '#asWhy'].forEach(id => $(id).addEventListener('input', renderWhyChips));
    $('#signOutBtn').addEventListener('click', () => { more.open = false; Sync.signOut(); });
    more.addEventListener('toggle', () => {
      // the room's cards sit over everything else; tuck them away while the menu is open
      document.documentElement.classList.toggle('menu-open', more.open);
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
    $('#iosTipClose').addEventListener('click', () => { $('#iosTip').hidden = true; prefs.iosTipDismissed = true; savePrefs(); });

    // customize page
    window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
    window.addEventListener('resize', () => { if (document.documentElement.classList.contains('cz-on')) czLayout(); });
    // the family paintings arrived or were opened: show them in Customize and hang them in the room
    window.addEventListener('tomestead:family', () => { if (onCustomize()) renderCustomize(); roomRefresh(); });
    $('#czShareShelf').addEventListener('change', e => { prefs.family = cleanFamily({ ...prefs.family, share: e.target.checked }); savePrefs(); if (Sync.publishShelf) Sync.publishShelf(true); toast(e.target.checked ? 'Your family can see your shelves.' : 'Your shelves are private again.'); });
    $('#czShelfName').addEventListener('change', e => { prefs.family = cleanFamily({ ...prefs.family, name: e.target.value }); savePrefs(); if (Sync.publishShelf) Sync.publishShelf(true); });
    $('#czDone').addEventListener('click', () => {
      history.pushState(null, '', location.pathname + location.search);
      render(); window.scrollTo(0, 0);
      toast('Your reading room has its new look.');
    });
    $('#customizePage').addEventListener('click', e => {
      const t = e.target.closest('.tile'); if (!t) return;
      if (t.dataset.paint) { if (t.dataset.paint === 'mine') $('#czPaintFile').click(); else if (t.dataset.paint === 'famadd') $('#czFamFile').click(); else setPainting(paintFor, t.dataset.paint); return; }
      if (t.dataset.wood) setTheme({ wood: t.dataset.wood });
      else if (t.dataset.bookend) {
        const k = t.dataset.bookend;
        if (bookendFor === 'read') {
          // keep the other sections' current look when Read changes
          const keep = { ...(prefs.theme.bookends || {}) };
          ['reading', 'want'].forEach(sec => { if (!keep[sec]) keep[sec] = sectionBookend(sec); });
          setTheme({ bookend: k, bookends: keep });
        } else setTheme({ bookends: { ...(prefs.theme.bookends || {}), [bookendFor]: k } });
      }
      else if (t.dataset.light) setTheme({ light: t.dataset.light });
      else if (t.dataset.nightwall) setTheme({ nightWall: t.dataset.nightwall });
      else if (t.dataset.size) {
        if (t.classList.contains('locked')) { const tr = Grow.TIERS.find(x => x.key === t.dataset.size); toast(`${tr.name} opens up when you’ve finished ${tr.at} books.`); return; }
        setTheme({ roomSize: t.dataset.size });
      }
      else if (t.dataset.vine) setTheme({ vine: t.dataset.vine });
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
      const attr = ['wall', 'light', 'wood', 'vine', 'bookend', 'table', 'titem', 'trinket', 'size'].find(a => t.dataset[a]);
      const sel = `[data-${attr}="${t.dataset[attr]}"]`;
      const again = $(`#customizePage .tile${sel}`); again && again.focus();
    });
    $('#czReset').addEventListener('click', () => {
      setTheme({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems], bookends: {}, paintings: {} });
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
    window.addEventListener('tomestead:light', () => { floorKey = ''; if (onCustomize()) renderCustomize(); else if (!onYear()) placeFloor(); });

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
    return { theme: prefs.theme, goals: prefs.goals, goalSince: prefs.goalSince, trophies: prefs.trophies, customGoals: prefs.customGoals, recs: prefs.recs, tagList: prefs.tagList, readMarks: prefs.readMarks, timer: prefs.timer || null, earned: prefs.earned || null, family: prefs.family || null };
  }
  function applySettings(s) {
    if (s.theme && typeof s.theme === 'object') prefs.theme = Object.assign({ ...D.DEFAULTS, trinkets: [...D.DEFAULTS.trinkets], tableItems: [...D.DEFAULTS.tableItems] }, migrateTheme(s.theme));
    prefs.goals = s.goals && typeof s.goals === 'object' ? s.goals : {};
    prefs.trophies = s.trophies && typeof s.trophies === 'object' ? s.trophies : {};
    // (a device still on an older version doesn't send these; keep what's here rather than wiping them)
    if (Array.isArray(s.customGoals)) {
      // an older device sends goals without the day they were set: keep what this device knows
      const here = new Map(prefs.customGoals.map(g => [g.id, g]));
      prefs.customGoals = cleanGoals(s.customGoals).map(g => (!g.since && here.get(g.id) && here.get(g.id).since ? Object.assign(g, { since: here.get(g.id).since, skip: here.get(g.id).skip }) : g));
    }
    if (s.goalSince && typeof s.goalSince === 'object') prefs.goalSince = cleanSince(s.goalSince);
    if (Array.isArray(s.tagList)) prefs.tagList = cleanTags(s.tagList);
    prefs.recs = s.recs && typeof s.recs === 'object' ? Object.assign({ dismissed: [] }, s.recs) : { dismissed: [] };
    // (older devices don't send these; keep what's here)
    if (Array.isArray(s.readMarks)) prefs.readMarks = cleanMarks(s.readMarks);
    if ('timer' in s) prefs.timer = cleanTimer(s.timer);
    // what the room has earned is kept forever: join both sides rather than replace
    if (s.earned && typeof s.earned === 'object') prefs.earned = Object.assign({}, s.earned, prefs.earned || {});
    if (s.family && typeof s.family === 'object') prefs.family = cleanFamily(s.family);
    savePrefsHere();
    renderTimer();
    if (calendar) calendar.refresh();
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
    adoptOldGoals();
    syncTrophies();
    syncEarned();
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
    if (Array.isArray(old.tagList)) prefs.tagList = cleanTags([...prefs.tagList, ...old.tagList]);
    if (old.recs && Array.isArray(old.recs.dismissed)) prefs.recs.dismissed = [...new Set([...prefs.recs.dismissed, ...old.recs.dismissed])];
    syncTrophies();
    syncEarned();
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
      onReady: () => { offerLegacy(); syncCovers(); syncEarned(); },
      family: () => prefs.family,
    });
    // the family's shelves arrived: the family room restocks
    window.addEventListener('tomestead:familyshelves', () => roomRefresh());
  }

  D.applyTheme(prefs.theme);
  if (!Sync.gated) savePrefsHere();   // keeps a migrated look for next time (and for the opening scene)
  syncEarned();
  // what the open book's pages say about where this book stands
  function nextInSeries(b) {
    const no = Number(b.seriesNo);
    if (!b.series || !(no >= 0) || b.seriesNo === '' || b.seriesNo == null) return null;
    const key = String(b.series).trim().toLowerCase();
    const later = books.filter(x => x.id !== b.id && String(x.series || '').trim().toLowerCase() === key && Number(x.seriesNo) > no)
      .sort((p, q) => Number(p.seriesNo) - Number(q.seriesNo));
    if (later.length) return { book: later[0] };
    return { no: Math.floor(no) + 1 };
  }
  function toggleUpNext(b) {
    b.upNext = b.upNext ? null : Date.now();
    b.updatedAt = Date.now();
    save(); render();
    if (reader && reader.currentId() === b.id) reader.refresh();
    toast(b.upNext ? `“${b.title}” is up next.` : `“${b.title}” is back in the pile.`);
  }
  function describeBook(b) {
    const st = statusOf(b);
    const f = formatOf(b);
    const dates = datesOf(b);
    const d = { statusKey: st, status: '', action: null, pct: null, rated: st === 'read' || st === 'dnf' || !!b.rating, tags: tagsOf(b) };
    const stamp = (t) => { const x = new Date(t); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`; };
    if (st === 'reading') {
      const p = pctOf(b);
      d.status = `${dates.length ? 'Rereading' : 'Reading now'} · ${progressText(b)}${p != null && f === 'print' ? ` (${p}%)` : ''}`;
      d.pct = p;
      d.action = { rd: 'progress', label: 'Update my progress' };
    } else if (st === 'want') {
      d.status = `${b.upNext ? 'Up next on' : 'On'} your to-read pile${b.addedAt ? ` since ${fmtDate(stamp(b.addedAt))}` : ''}`;
      d.action = { rd: 'start', label: 'Start reading' };
      d.links = [{ rd: 'upnext', label: b.upNext ? 'Take it off Up next' : 'Make it up next' }];
    } else if (st === 'dnf') {
      const at = b.progress ? (f === 'print' ? ` at p. ${b.progress}` : ` at ${Math.round(b.progress)}%`) : '';
      d.status = `Set aside${b.stopped ? ` ${fmtDate(b.stopped)}` : ''}${at}${b.stopWhy ? ` · ${b.stopWhy}` : ''}`;
      d.action = { rd: 'start', label: 'Pick it back up', quiet: true };
    } else {
      d.action = { rd: 'again', label: 'Read it again', quiet: true };
    }
    if (dates.length > 1) d.reads = `Read ${dates.length} times: ${dates.map(x => fmtDate(x)).join(', ')}`;
    else if (dates.length) d.reads = `Finished ${fmtDate(dates[0])}${b.started && st === 'read' && b.started <= dates[0] ? ` · started ${fmtDate(b.started)}` : ''}`;
    else if (b.started && st !== 'want') d.reads = `Started ${fmtDate(b.started)}`;
    d.series = seriesText(b) ? `Series: ${seriesText(b)}` : '';
    d.details = [f !== 'print' ? FORMATS[f] : '', f === 'audio' ? (b.hours ? `${b.hours} hours` : '') : (b.pages ? `${b.pages} pages` : ''), f === 'audio' && b.narrator ? `narrated by ${b.narrator}` : '', b.genre].filter(Boolean).join(', ');
    // the next book in the series: on your shelves already, or one tap from your to-read pile
    const nx = nextInSeries(b);
    if (nx && nx.book) (d.links = d.links || []).push({ rd: 'goto', id: nx.book.id, label: `Next in the series: ${nx.book.title}` });
    else if (nx && st === 'read') (d.links = d.links || []).push({ rd: 'series-next', label: `Add ${b.series} #${nx.no} to my to-read pile` });
    d.reviewHeading = { read: 'My review', reading: 'Thoughts so far', want: 'Why I want to read it', dnf: 'Why I put it down' }[st];
    d.reviewEmpty = { read: 'You haven’t written a review yet.', reading: 'Nothing noted yet.', want: 'No note yet.', dnf: 'No note yet.' }[st];
    d.reviewCta = { read: 'Write my review', reading: 'Add a note', want: 'Add a note', dnf: 'Add a note' }[st];
    return d;
  }

  // ---------- the 3D reading room ----------
  // room/room.js is loaded the first time the room is shown; it draws behind the page and hands
  // back to the app's own screens (the reading table, progress, suggestions, goals, year in review).
  let roomLoading = false;
  function roomOrigin(rect) {
    // a stand-in for the spine the reading table flies the book out of
    const el = $('#roomOrigin');
    Object.assign(el.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, visibility: 'visible' });
    return el;
  }
  window.TomesteadRoomHost = {
    data: () => ({ books, theme: prefs.theme, trophies: prefs.trophies, earned: prefs.earned || {} }),
    arrivals: () => { const q = loadJSON(ARRIVE_KEY, []); return Array.isArray(q) ? q : []; },
    arrived: (key) => { const q = loadJSON(ARRIVE_KEY, []); try { localStorage.setItem(ARRIVE_KEY, JSON.stringify((Array.isArray(q) ? q : []).filter(k => k !== key))); } catch {} },
    nextUnlock: () => (Grow ? Grow.next(books, prefs.earned || {}) : null),
    openCustomize: (tab) => { if (tab) czTab = tab; location.hash = 'customize'; },
    family: () => ({ on: !!(Sync.isFamily && Sync.isFamily()), shelves: Sync.familyShelves ? Sync.familyShelves() : [], share: prefs.family.share }),
    familySig: () => (Sync.familyShelves ? Sync.familyShelves() : []).map(f => f.uid + ':' + f.sig).join(',') + '|' + (Sync.familyPaintings ? Sync.familyPaintings() : []).map(f => f.id + (f.url ? '+' : '')).join(','),
    openBook: (id, rect) => reader.open(id, rect ? roomOrigin(rect) : null),
    openOnDesk: (id, hooks) => reader.openOnDesk(id, hooks || {}),
    openProgress: (id) => openProgress(id),
    openRecs: () => recommender.open(),
    openGoals: () => openGoals(),
    openYear: () => { location.hash = 'year'; },
    addBook: () => openEditor(),
    openCalendar: () => calendar.open(),
    streak: () => calendar.streaks(),
    timer: () => { const t = timerNow(); return t ? { id: t.id, start: t.start } : null; },
    startTimer: (id) => startTimer(id, { settle: true }),
    stopTimer: () => stopTimer(),
    settle: (id) => { const t = timerNow(); if (t && ritual) ritual.open(id || t.id); },
    openLife: () => openLife(),
    startBook: (id) => { const b = books.find(x => x.id === id); if (b) startReading(b); },
    paintingPhoto: (slot) => Covers.uploadURL('painting-' + slot),
    familyPainting: (id) => ((Sync.familyPaintings ? Sync.familyPaintings() : []).find(f => f.id === id) || {}).url || null,
    paintSig: () => (Sync.familyPaintings ? Sync.familyPaintings() : []).map(f => f.id + (f.url ? '+' : '')).join(','),
    openImport: () => openImport(),
    wantBook: (p) => addWant(p),
    unavailable: () => { canRoom = false; document.documentElement.classList.remove('room-mode'); render(); },
    ready: (room) => {
      if (document.documentElement.classList.contains('cz-on')) { room.setActive(true); czLayout(); czShow(); }
      else if (viewNow() === 'room' && !onCustomize() && !onYear()) room.setActive(true); else room.setActive(false);
    },
  };
  function roomShow() {
    if (Sync.gated) return roomHide();          // the sign-in card comes first; the page reloads once you're in
    document.documentElement.classList.add('room-mode');
    $('#room3d').hidden = false;
    if (window.TomesteadRoom) { window.TomesteadRoom.setActive(true); window.TomesteadRoom.refresh(); return; }
    if (roomLoading) return;
    roomLoading = true;
    import('./room/room.js?v=20261122213349').catch(() => window.TomesteadRoomHost.unavailable());
  }
  function roomHide() {
    document.documentElement.classList.remove('room-mode');
    $('#room3d').hidden = true;
    if (window.TomesteadRoom) window.TomesteadRoom.setActive(false);
  }

  reader = window.TomesteadReader({
    esc, colorOf, dims, starsHTML, fmtDate, toast,
    describe: describeBook,
    onTag: (t) => showTag(t),
    onPage: (act, id, el) => {
      const b = books.find(x => x.id === id);
      if (!b) return;
      if (act === 'progress') openProgress(id);
      else if (act === 'start' || act === 'again') startReading(b);
      else if (act === 'quote-add') openQuote(id);
      else if (act === 'quote') openQuote(id, el.dataset.q);
      else if (act === 'upnext') toggleUpNext(b);
      else if (act === 'dnf') setAside(b);
      else if (act === 'goto' && el.dataset.id) reader.putBack().then(() => openDetail(el.dataset.id, null));
      else if (act === 'series-next') {
        const nx = nextInSeries(b);
        reader.putBack().then(() => {
          openEditor(null, null, null, { status: 'want' });
          $('#fSeries').value = b.series; $('#fSeriesNo').value = nx ? nx.no : '';
          if (b.author) $('#fAuthor').value = b.author;
          $('#fTitle').value = b.series; $('#fTitle').placeholder = `The title of ${b.series} #${nx ? nx.no : ''}`;
          onTitleInput(); updateDetailsSum();
        });
      }
    },
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
    addBook: (p) => openEditor(null, null, p),
    wantBook: (p) => addWant(p),
  });
  const yearReview = window.TomesteadYear({
    esc, plural, fmtDate, starsHTML, thumbHTML, wireThumbs, colorOf,
    books: () => books, datesOf, statusOf, formatOf, pagesOf, tagsOf, isRead, goalFor, goalDone: countForGoal, thisYear, yearsAvailable,
    trophies: () => prefs.trophies,
    drawTrophy: (y, n, sc) => Art.drawTrophy(y, n, sc),
    openBook: (id, el) => openDetail(id, el),
    streak: () => (calendar ? calendar.streaks() : null),
    toast,
  });
  // your reading life: the timeline on the year page
  openLife = () => { yearReview.select('life'); if (location.hash === '#year') render(); else location.hash = 'year'; };
  calendar = window.TomesteadCalendar({
    esc, books: () => books, datesOf, statusOf, formatOf, today,
    marked: () => prefs.readMarks,
    toggleMark: (d) => {
      const set = new Set(prefs.readMarks);
      if (set.has(d)) set.delete(d); else set.add(d);
      prefs.readMarks = cleanMarks([...set]); savePrefs(); renderStats(); roomRefresh();
    },
    openBook: (id) => openDetail(id, null),
    otherYears: (iso) => memories.sameDayOtherYears(iso),
  });
  // On this day: your own reading, a year (or more) ago
  memories = window.TomesteadMemories({
    esc, books: () => books, datesOf, statusOf, today, starsHTML, thumbHTML, wireThumbs,
    openBook: (id) => openDetail(id, null),
  });
  // reading mode: settle in with a book while the timer runs
  ritual = window.TomesteadRitual({
    esc, thumbHTML, wireThumbs, clockText,
    book: (id) => books.find(x => x.id === id),
    timer: () => timerNow(),
    stopTimer: () => stopTimer(),
    openQuote: (id) => openQuote(id),
    streak: () => (calendar ? calendar.streaks() : null),
    progressText: (b) => (statusOf(b) === 'reading' && Number(b.progress) ? progressText(b) : ''),
    room: () => (viewNow() === 'room' && !$('#room3d').hidden && window.TomesteadRoom ? window.TomesteadRoom : null),
  });
  // props on the reading table
  wire();
  render();
  renderTimer();
  if (!Sync.gated) memories.maybeShow();
  document.addEventListener('click', e => { if (e.target.closest('[data-cal-open]')) calendar.open(); });
  setupIosTip();
  setTimeout(runLookupQueue, 1500);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => render());

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
