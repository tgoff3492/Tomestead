/* Tomestead · the room grows as you read
   Works out what a reader's library has earned: the size of the room (a cozy study, then a
   two-storey library, then a great hall) and the pieces along the way (the vine, rugs, paintings,
   the reading corner's ottoman and tea, the display case for your favourites, the tome waking up).
   Pure functions; the app keeps what's earned in its synced settings (prefs.earned) and the room
   reads it. Nothing earned is ever taken away. */
(function () {
  'use strict';

  // how big the room is
  const TIERS = [
    { key: 'study', at: 0, name: 'The Study', blurb: 'A cozy study with one bookcase, a desk by the window and a fire.' },
    { key: 'library', at: 25, name: 'The Library', blurb: 'Two storeys high: a gallery with an iron railing runs around the room, lined with bookcases, and the room reaches forward to a pair of tall doors.' },
    { key: 'hall', at: 60, name: 'The Great Hall', blurb: 'A vaulted reading hall: two galleries of books under a barrel vault, chandeliers down the nave and an arched window at the far end.' },
  ];

  // what appears along the way (book counts are books finished, each book once)
  const LADDER = [
    { key: 'tome', at: 1, where: 'tome', name: 'The magic tome wakes', line: (n) => `Your first finished book woke the magic tome.` },
    { key: 'vine', at: 1, where: 'case', name: 'A climbing vine', line: () => `A vine sprouted on your bookcase. It grows with every book.` },
    { key: 'rug', at: 3, where: 'room', name: 'A wool rug', line: () => `Three books laid a wool rug on the bare floorboards.` },
    { key: 'mantel', at: 5, where: 'hearth', name: 'A painting over the fireplace', line: () => `Your fifth book hung a painting over the fireplace.` },
    { key: 'display', at: 5, where: 'display', name: 'A display case for your favourites', line: () => `A glass display case arrived for your five favourite books.` },
    { key: 'ottoman', at: 8, where: 'nook', name: 'An ottoman and a cup of tea', line: () => `Eight books brought an ottoman and a cup of tea to the reading corner.` },
    { key: 'authors', at: 10, where: 'authors', name: 'A gallery of your favourite authors', line: () => `Ten books hung portraits of the authors you've read most.` },
    { key: 'nook', at: 15, where: 'nook', name: 'A painting for the reading corner', line: () => `Fifteen books hung a painting in the reading corner.` },
    { key: 'damask', at: 20, where: 'room', name: 'The claret damask rug', line: () => `Twenty books rolled out the claret damask rug.` },
    { key: 'library', at: 25, where: 'grow', name: TIERS[1].name, line: () => `Twenty-five books. Your study has grown into a library.` },
    { key: 'hall', at: 60, where: 'grow', name: TIERS[2].name, line: () => `Sixty books. Your library has grown into a great hall.` },
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
    return LADDER.filter((x) => n >= x.at).map((x) => x.key);
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
  function tierOf(earned, pick) {
    const top = has(earned, 'hall') ? 'hall' : has(earned, 'library') ? 'library' : 'study';
    if (pick && pick !== 'auto' && TIERS.some((t) => t.key === pick)) {
      const i = TIERS.findIndex((t) => t.key === pick), j = TIERS.findIndex((t) => t.key === top);
      if (i <= j) return pick;
    }
    return top;
  }

  // the next thing on the way, for the fireside's one quiet line
  function next(books, earned) {
    const n = readCount(books);
    const step = LADDER.find((x) => !has(earned, x.key) && x.at > n) || LADDER.find((x) => !has(earned, x.key));
    if (!step) return null;
    const left = Math.max(1, step.at - n);
    return { key: step.key, left, text: `${left} more ${left === 1 ? 'book' : 'books'} and ${lower(step.name)}${step.where === 'grow' ? ' opens up' : ' arrives'}.` };
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

  window.TomesteadGrowth = { TIERS, LADDER, KEYS, readCount, earnedBy, update, has, tierOf, next, favourites, step: (k) => LADDER.find((x) => x.key === k) || null };
})();
