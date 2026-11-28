/* Tomestead · the room grows as you read
   Works out what a reader's library has earned: the size of the room (a cottage with one bookcase,
   then a study, a two-storey library and a great hall, each earned when the last one's shelves are
   full: see shelving.js) and the pieces along the way (the vine, rugs, paintings,
   the reading corner's ottoman and tea, the display case for your favourites, the tome waking up).
   Pure functions; the app keeps what's earned in its synced settings (prefs.earned) and the room
   reads it. Nothing earned is ever taken away. */
(function () {
  'use strict';

  // how big the room is
  // (keys are the room's own: 'study' is the cottage, 'den' the study, kept so saved choices still work)
  const TIERS = [
    { key: 'study', grow: null, name: 'The Cottage', blurb: 'A cozy room with one bookcase, a desk by the window and a fire.' },
    { key: 'den', grow: 'roomStudy', name: 'The Study', blurb: 'The room reaches forward under its beams, with two more bookcases waiting to be filled.' },
    { key: 'library', grow: 'roomLibrary', name: 'The Library', blurb: 'Two storeys high: a gallery with an iron railing, lined with empty bookcases along the back, and tall doors at the front.' },
    { key: 'hall', grow: 'roomHall', name: 'The Great Hall', blurb: 'A vaulted reading hall: a long wall of bookcases below, two galleries of shelves above, chandeliers down the nave.' },
  ];
  const S = () => window.TomesteadShelving;

  // what appears along the way (book counts are books finished, each book once)
  const LADDER = [
    { key: 'tome', at: 1, where: 'tome', name: 'The magic tome wakes', line: (n) => `Your first finished book woke the magic tome.` },
    { key: 'vine', at: 1, where: 'case', name: 'A climbing vine', line: () => `A vine sprouted on your bookcase. It grows with every book.` },
    { key: 'cat', at: 3, where: 'hearth', name: 'A cat by the fire', line: () => `Three books brought a cat to doze on the hearth.` },
    { key: 'mantel', at: 5, where: 'hearth', name: 'A painting over the fireplace', line: () => `Your fifth book hung a painting over the fireplace.` },
    { key: 'display', at: 5, where: 'display', name: 'A display case for your favourites', line: () => `A glass display case arrived for your five favourite books.` },
    { key: 'ottoman', at: 8, where: 'nook', name: 'An ottoman and a cup of tea', line: () => `Eight books brought an ottoman and a cup of tea to the reading corner.` },
    { key: 'authors', at: 10, where: 'authors', name: 'A gallery of your favourite authors', line: () => `Ten books hung portraits of the authors you've read most.` },
    { key: 'nook', at: 15, where: 'nook', name: 'A painting for the reading corner', line: () => `Fifteen books hung a painting in the reading corner.` },
    // the bigger rooms come when your shelves are full (not at a count)
    { key: 'roomStudy', where: 'grow', tier: 'den', name: TIERS[1].name, line: () => `Your bookcase is full. The cottage has grown into a study, with new shelves to fill.` },
    { key: 'roomLibrary', where: 'grow', tier: 'library', name: TIERS[2].name, line: () => `The study's shelves are full. It has grown into a library.` },
    { key: 'roomHall', where: 'grow', tier: 'hall', name: TIERS[3].name, line: () => `The library's shelves are full. It has grown into a great hall.` },
  ];
  const KEYS = LADDER.map((x) => x.key);

  // books finished, each counted once (rereads, audiobooks and ebooks count; set-aside books don't)
  function readCount(books) {
    const seen = new Set();
    for (const b of books || []) {
      if (!b) continue;
      const st = b.status || 'read';
      const done = st === 'read' || (Array.isArray(b.rereads) && b.rereads.length) || (st === 'reading' && b.finished);
      if (!done) continue;
      seen.add(String(b.olKey || b.isbn || (String(b.title || '').trim().toLowerCase() + '|' + String(b.author || '').trim().toLowerCase())));
    }
    return seen.size;
  }

  // everything a library has earned right now (by count)
  function earnedBy(books) {
    const n = readCount(books);
    const room = S() ? S().ROOM_KEYS.indexOf(S().roomFor(books)) : 0;
    return LADDER.filter((x) => (x.where === 'grow' ? TIERS.findIndex((t) => t.key === x.tier) <= room : n >= x.at)).map((x) => x.key);
  }

  // join what's earned now with what was earned before (kept forever). Returns the new map and the
  // keys that are new since `before` (empty when `before` was never set: a reader's history is
  // adopted quietly the first time)
  function update(books, before, day) {
    const had = before && typeof before === 'object' ? before : null;
    const out = Object.assign({}, had || {});
    const fresh = [];
    for (const k of earnedBy(books)) {
      if (out[k]) continue;
      out[k] = day;
      if (had) fresh.push(k);
    }
    return { earned: out, fresh, adopted: !had };
  }

  const has = (earned, key) => !!(earned && earned[key]);

  // the biggest room earned, or the one picked in Customize (only earned sizes can be picked)
  // (a smaller room can only be picked while its shelves still hold every finished book)
  function tierOf(earned, pick, books) {
    let top = 'study';
    for (const t of TIERS) if (!t.grow || has(earned, t.grow)) top = t.key;
    if (pick && pick !== 'auto' && TIERS.some((t) => t.key === pick)) {
      const i = TIERS.findIndex((t) => t.key === pick), j = TIERS.findIndex((t) => t.key === top);
      if (i <= j && fits(books, pick)) return pick;
    }
    return top;
  }
  const fits = (books, room) => !books || !S() || S().pack(S().order(books), room).all;

  // the next thing on the way, for the fireside's one quiet line
  function next(books, earned) {
    const n = readCount(books);
    const steps = [];
    const count = LADDER.find((x) => x.where !== 'grow' && !has(earned, x.key) && x.at > n);
    if (count) steps.push({ step: count, left: Math.max(1, count.at - n) });
    // the next room: about how many more books until this room's shelves are full
    const grow = LADDER.find((x) => x.where === 'grow' && !has(earned, x.key));
    if (grow && S()) {
      const before = TIERS[TIERS.findIndex((t) => t.key === grow.tier) - 1];
      steps.push({ step: grow, left: Math.max(1, S().roomLeft(books, before.key) + 1), about: true });
    }
    if (!steps.length) return null;
    const { step, left, about } = steps.sort((a, b) => a.left - b.left)[0];
    return { key: step.key, left, text: `${about ? 'About ' : ''}${left} more ${left === 1 ? 'book' : 'books'} and ${lower(step.name)}${step.where === 'grow' ? ' opens up' : ' arrives'}.`};
  }
  const lower = (s) => (/^The /.test(s) ? 'the ' + s.slice(4) : s.charAt(0).toLowerCase() + s.slice(1));

  // the top five: highest rated finished books, most recently finished first among equals
  function favourites(books, n = 5) {
    const last = (b) => [b.finished, ...(b.rereads || [])].filter(Boolean).sort().pop() || '';
    return (books || [])
      .filter((b) => b && (b.status || 'read') === 'read' && Number(b.rating) > 0)
      .sort((a, b) => (Number(b.rating) - Number(a.rating)) || last(b).localeCompare(last(a)) || (Number(b.addedAt) || 0) - (Number(a.addedAt) || 0))
      .slice(0, n);
  }

  window.TomesteadGrowth = { TIERS, LADDER, KEYS, readCount, earnedBy, update, has, tierOf, fits, next, favourites, step: (k) => LADDER.find((x) => x.key === k) || null };
})();
