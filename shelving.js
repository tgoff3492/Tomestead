/* Tomestead · shelved like a real library
   Where each finished book goes on your shelves, and when your shelves are full.
   - Sections: Fiction first (A–Z by the author's last name, a series kept together in order), then
     nonfiction by Dewey class, 000 to 900, the way most public libraries shelve.
   - A book's section: the one you chose for it (b.shelf), else its Dewey number (b.ddc, from Open
     Library; 8x3 is fiction in any language, 741.5 is comics), else its genre, else Fiction.
   - How thick a book stands on the shelf (from its pages), the same here as in the room.
   - The rooms' shelves, row by row in shelving order (measured from room/src/shell.js and the first
     bookcase in room/src/main.js), so the app can tell when a room's shelves are full and the next
     room opens up. Shared by the app and the reading room (window.TomesteadShelving). */
(function () {
  'use strict';

  const SECTIONS = [
    { key: 'F', name: 'Fiction', long: 'Fiction, A–Z by author' },
    { key: '000', name: 'General', long: 'General knowledge & reference' },
    { key: '100', name: 'Philosophy', long: 'Philosophy & psychology' },
    { key: '200', name: 'Religion', long: 'Religion & mythology' },
    { key: '300', name: 'Society', long: 'Society, politics & business' },
    { key: '400', name: 'Language', long: 'Language' },
    { key: '500', name: 'Science', long: 'Science & nature' },
    { key: '600', name: 'Home & Health', long: 'Home, health & technology' },
    { key: '700', name: 'Arts', long: 'Arts, music & sport' },
    { key: '800', name: 'Literature', long: 'Poetry, plays & essays' },
    { key: '900', name: 'History', long: 'History, travel & lives' },
  ];
  const KEYS = SECTIONS.map((s) => s.key);
  const byKey = Object.fromEntries(SECTIONS.map((s) => [s.key, s]));

  // a genre (as the app keeps it) → a section
  const GENRE = [
    [/memoir|biograph|autobiograph|history|histor|travel|geograph|war\b/, '900'],
    [/self-help|self help|psycholog|philosoph|mindful/, '100'],
    [/religio|christian|spiritual|theolog|bible|faith|myth/, '200'],
    [/business|econom|politic|true crime|educat|law\b|sociolog|finance|leadership|manage/, '300'],
    [/language|linguist|grammar/, '400'],
    [/science|nature|math|astronom|physics|biolog|animal|environment/, '500'],
    [/cook|health|fitness|parent|garden|technolog|medic|diet|nutrition|craft|home/, '600'],
    [/\bart\b|arts|music|film|sport|games|photograph|design/, '700'],
    [/poetry|poems|plays|drama|essay|criticism/, '800'],
    [/reference|encyclop|computer|programming/, '000'],
  ];
  const FICTION = /fiction|fantasy|sci-fi|mystery|thriller|romance|horror|crime|young adult|children|classic|novel|graphic|comic|dystop|adventure|short stor|suspense|western|fairy/;

  function fromDdc(d) {
    d = String(d || '').trim();
    if (!d) return '';
    if (/fic|^\[?[ef]\]?$/i.test(d)) return 'F';
    const m = d.match(/(\d{3})(?:\/?\.(\d+))?/);
    if (!m) return '';
    const n = m[1], dec = (m[2] || '').replace(/\D/g, '');
    if (n[0] === '8' && n[2] === '3') return 'F';                 // 813 American fiction, 823 English …
    if (n === '891' && /^\d3/.test(dec)) return 'F';               // 891.73 Russian fiction …
    if (n === '741' && dec.startsWith('5')) return 'F';            // comics and graphic novels
    return n[0] + '00';
  }
  // a book's section key
  function section(b) {
    if (!b) return 'F';
    if (b.shelf && byKey[b.shelf]) return b.shelf;
    const d = fromDdc(b.ddc);
    if (d) return d;
    const g = String(b.genre || '').toLowerCase();
    if (g) {
      if (FICTION.test(g) && !/nonfiction|non-fiction/.test(g)) return 'F';
      for (const [re, k] of GENRE) if (re.test(g)) return k;
      if (/nonfiction|non-fiction/.test(g)) return '000';
    }
    return 'F';
  }

  // ---- library order
  const fold = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  const SUFFIX = /^(jr|sr|ii|iii|iv|phd|md)\.?$/i;
  // "Ursula K. Le Guin" → "le guin ursula k."; "Tolkien, J.R.R." stays "tolkien j.r.r."
  function authorKey(a) {
    let s = String(a || '').split(/\s*(?:&| and |;)\s*/)[0].trim();
    if (!s) return '~';
    if (s.includes(',')) { const [last, first] = s.split(','); return fold(last + ' ' + (first || '')); }
    const w = s.split(/\s+/).filter((x) => !SUFFIX.test(x));
    if (w.length < 2) return fold(s);
    const PART = /^(le|la|de|du|van|von|der|den|da|di|del|st\.?|mac|o')$/i;
    let i = w.length - 1;
    while (i > 0 && PART.test(w[i - 1])) i--;
    return fold(w.slice(i).join(' ') + ' ' + w.slice(0, i).join(' '));
  }
  const titleKey = (t) => fold(t).replace(/^(the|a|an)\s+/, '');
  const num = (x) => String(Math.round((Number(x) || 0) * 100)).padStart(7, '0');
  function sortKey(b) {
    const s = section(b), si = String(KEYS.indexOf(s)).padStart(2, '0');
    const series = b.series ? fold(b.series) + ' ' + num(b.seriesNo || 0) : '';
    if (s === 'F') return [si, authorKey(b.author), series || '~', titleKey(b.title)].join('\u0001');
    const m = String(b.ddc || '').match(/(\d{3})(?:\/?\.(\d+))?/);
    const ddc = m && fromDdc(b.ddc) === s ? m[1] + '.' + (m[2] || '').replace(/\D/g, '').padEnd(6, '0') : '999';
    return [si, ddc, authorKey(b.author), series || '~', titleKey(b.title)].join('\u0001');
  }
  // the books that go on the shelves (finished ones), in library order
  const finished = (books) => (books || []).filter((b) => b && (b.status || 'read') === 'read');
  function order(books) {
    return finished(books).map((b) => ({ b, k: sortKey(b) })).sort((p, q) => (p.k < q.k ? -1 : p.k > q.k ? 1 : 0)).map((x) => x.b);
  }
  // a short range for a label, from the first and last book on a stretch of shelf
  function range(first, last) {
    const s = section(first), e = section(last);
    if (s === 'F' && e === 'F') {
      const a = authorKey(first.author)[0] || '', z = authorKey(last.author)[0] || '';
      return 'Fiction  ' + (a === z ? a.toUpperCase() : a.toUpperCase() + '–' + z.toUpperCase());
    }
    if (s === e) return s + '  ' + byKey[s].name;
    return (s === 'F' ? 'Fiction' : s) + ' – ' + (e === 'F' ? 'Fiction' : e);
  }

  // ---- how much shelf a book takes (the room uses exactly this)
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  const SCALE = 1.2;                    // books are drawn a fifth larger than life, so spines read on a phone
  const GAP = 0.0025;
  const pagesOf = (b) => (b.format === 'audio' && b.hours ? b.hours * 30 : Number(b.pages) || 0);
  function thick(b) {
    const h0 = hash(b.id + '|' + b.title), pages = pagesOf(b);
    return (pages > 0 ? Math.min(66, Math.max(24, 18 + pages / 16)) : 26 + ((h0 >>> 5) % 30)) * 0.00082 * SCALE;
  }
  const width = (b) => thick(b) + GAP;

  // ---- the rooms' shelves, in shelving order: [shelf length (m), how many shelves of that length]
  // First the bookcase (3 shelves, less the bookends at either end), then the bookcases each room adds.
  // Keep in step with room/src/shell.js (the lab page warns when they drift apart).
  const ROOMS = {
    study: [[1.5, 3]],
    den: [[1.5, 3], [0.665, 6], [0.69, 6]],
    library: [[1.5, 3], [0.665, 6], [0.69, 6], [0.98, 24]],
    hall: [[1.5, 3], [0.846, 48], [0.94, 24], [0.715, 8]],
  };

  const ROOM_KEYS = ['study', 'den', 'library', 'hall'];
  const ENDS = 0.07;                    // room kept at the start of the first shelf for a bookend
  // lay the books along the shelves, shelf by shelf; how many fit, and how many shelves they fill
  function pack(books, room) {
    const rows = [];
    for (const [len, n] of ROOMS[room] || ROOMS.study) for (let i = 0; i < n; i++) rows.push(len);
    let r = 0, x = ENDS, placed = 0;
    for (const b of books) {
      const w = width(b);
      if (x + w > rows[r] && x > 0) { r++; x = 0; if (r >= rows.length) break; }
      x += w; placed++;
    }
    return { placed, all: placed >= books.length, rows: rows.length, used: Math.min(rows.length, r + (x > 0 ? 1 : 0)) };
  }
  // the smallest room whose shelves hold every finished book
  function roomFor(books) {
    const list = order(books);
    for (const k of ROOM_KEYS) if (pack(list, k).all) return k;
    return 'hall';
  }
  // books that would still fit in a room (roughly: the free shelf over a typical book)
  function roomLeft(books, room) {
    const list = order(books);
    const total = (ROOMS[room] || []).reduce((t, [len, n]) => t + len * n, 0) - ENDS;
    const used = list.reduce((t, b) => t + width(b), 0);
    const avg = list.length ? used / list.length : 0.04;
    return Math.max(0, Math.floor((total - used) * 0.96 / avg));
  }

  window.TomesteadShelving = { SECTIONS, KEYS, byKey, section, fromDdc, sortKey, order, finished, range, authorKey, hash, thick, width, GAP, SCALE, ROOMS, ROOM_KEYS, pack, roomFor, roomLeft };
})();
