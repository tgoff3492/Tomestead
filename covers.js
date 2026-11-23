/* Tomestead covers: finds cover art and a short summary on Open Library,
   and keeps your own cover photos on this device (IndexedDB). When you're
   signed in, app.js also sends those photos to the cloud (see sync.js). */
(() => {
  'use strict';
  const OL = 'https://openlibrary.org';
  // a cover is an Open Library cover id (a number) or, from the other sources, a picture's address
  const coverURL = (id, size = 'L') => {
    if (typeof id === 'string') {
      if (!/^https:\/\//.test(id)) return null;
      if (/books\.google|googleusercontent/.test(id)) return id.replace(/&edge=curl/g, '').replace(/&fife=[^&]*/g, '') + `&fife=w${size === 'S' ? 140 : size === 'M' ? 320 : 640}`;
      return id;
    }
    return `https://covers.openlibrary.org/b/id/${id}-${size}.jpg?default=false`;
  };
  const okCover = (c) => (typeof c === 'number' && c > 0) || (typeof c === 'string' && /^https:\/\//.test(c));

  // ---------- your own photos ----------
  let dbp = null;
  function db() {
    if (!dbp) dbp = new Promise((res, rej) => {
      const r = indexedDB.open('tomestead', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('covers');
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  function tx(mode, fn) {
    return db().then(d => new Promise((res, rej) => {
      const t = d.transaction('covers', mode);
      const req = fn(t.objectStore('covers'));
      t.oncomplete = () => res(req && req.result);
      t.onerror = () => rej(t.error);
    }));
  }
  const urlCache = new Map();
  async function putUpload(id, blob) {
    await tx('readwrite', s => s.put(blob, id));
    if (urlCache.has(id)) { URL.revokeObjectURL(urlCache.get(id)); urlCache.delete(id); }
  }
  const getUpload = (id) => tx('readonly', s => s.get(id)).catch(() => null);
  async function delUpload(id) {
    await tx('readwrite', s => s.delete(id)).catch(() => {});
    if (urlCache.has(id)) { URL.revokeObjectURL(urlCache.get(id)); urlCache.delete(id); }
  }
  async function uploadURL(id) {
    if (urlCache.has(id)) return urlCache.get(id);
    const blob = await getUpload(id);
    if (!blob) return null;
    const u = URL.createObjectURL(blob);
    urlCache.set(id, u);
    return u;
  }
  async function allUploads() {
    const out = {};
    const d = await db();
    await new Promise((res) => {
      const t = d.transaction('covers', 'readonly');
      const req = t.objectStore('covers').openCursor();
      req.onsuccess = () => { const c = req.result; if (c) { out[c.key] = c.value; c.continue(); } };
      t.oncomplete = res; t.onerror = res;
    });
    return out;
  }

  // shrink a photo to a sensible cover size before saving it
  function resizeImage(file, maxH = 900) {
    return new Promise((res, rej) => {
      const img = new Image();
      const u = URL.createObjectURL(file);
      img.onload = () => {
        const s = Math.min(1, maxH / img.naturalHeight, (maxH * .8) / img.naturalWidth);   // wide photos too
        const c = document.createElement('canvas');
        c.width = Math.round(img.naturalWidth * s);
        c.height = Math.round(img.naturalHeight * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(u);
        c.toBlob(b => (b ? res(b) : rej(new Error('resize'))), 'image/jpeg', 0.86);
      };
      img.onerror = () => { URL.revokeObjectURL(u); rej(new Error('image')); };
      img.src = u;
    });
  }

  // ---------- Open Library lookups ----------
  function cleanDesc(s) {
    if (!s) return '';
    s = String(s).replace(/\r/g, '');
    s = s.split(/\n\s*-{3,}\s*\n/)[0];                         // drop "----" appendix sections
    s = s.replace(/\[([^\]]+)\]\[\d+\]/g, '$1')                 // [text][1]
         .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')               // [text](url)
         .replace(/^\s*\[\d+\]:.*$/gm, '')                       // reference lines
         .replace(/\(\s*source:?[^)]*\)/gi, '')
         .replace(/<[^>]+>/g, '')
         .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
         .replace(/[ \t]+/g, ' ')
         .replace(/\n{3,}/g, '\n\n')
         .trim();
    if (s.length > 760) {
      const cut = s.slice(0, 760);
      const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('." '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
      s = (end > 300 ? cut.slice(0, end + 1) : cut.replace(/\s+\S*$/, '')) + ' …';
    }
    return s;
  }

  async function getJSON(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(r.status);
    return r.json();
  }

  // ---------- finding a book while you type (or from its barcode) ----------
  const FIND_FIELDS = 'key,title,author_name,cover_i,first_publish_year,number_of_pages_median,subject,edition_count';
  const isbnOf = (s) => { const d = String(s || '').replace(/[\s-]/g, '').toUpperCase(); return /^(97[89]\d{10}|\d{9}[\dX])$/.test(d) ? d : ''; };
  // Returns [{ olKey, title, author, year, pages, cover, subjects }]
  // what you type is a title: search titles only, so "Laura" finds the book, not authors named Laura
  // with an author too (or only an author), the search narrows to their books
  async function search(text, limit = 7, author = '') {
    text = String(text || '').trim(); author = String(author || '').trim();
    const isbn = isbnOf(text);
    if (isbn) { const one = await byISBN(isbn); return one ? [one] : []; }
    const ask = async (params) => (await getJSON(`${OL}/search.json?${new URLSearchParams(Object.assign({ limit: '20', fields: FIND_FIELDS }, params))}`)).docs || [];
    if (author.length >= 2) return searchWithAuthor(text, author, limit, ask);
    let docs = titleMatches(await ask({ title: text }), text);
    // still typing the last word ("the hobb"): search the whole words, then match the rest by prefix
    if (!docs.length && /\s/.test(text.trim())) docs = titleMatches(await ask({ title: text.trim().replace(/\s+\S*$/, '') }), text).slice();
    let out = docs.slice(0, limit).map(fromDoc);
    // Open Library came up short (new, small-press or self-published books): ask Google Books too
    if (out.length < 3 && text.trim().length >= 3) {
      try {
        const want = foldWords(text);
        const g = (await gbAsk(`intitle:${text.trim()}`, 15)).filter(x => { const w = foldWords(x.title); return want.slice(0, -1).every(t => w.includes(t)) && w.some(t => t.startsWith(want[want.length - 1])); });
        const seen = new Set(out.map(x => foldWords(x.title).join(' ') + '|' + foldWords(x.author)[0]));
        for (const x of g) { const k = foldWords(x.title).join(' ') + '|' + foldWords(x.author)[0]; if (!seen.has(k) && out.length < limit) { seen.add(k); out.push(x); } }
      } catch {}
    }
    return out;
  }
  // books by an author (and, if a title is typed too, only theirs that match it)
  async function searchWithAuthor(text, author, limit, ask) {
    const aw = foldWords(author);
    const byThem = (name) => { const w = foldWords(name); return aw.every((x) => w.some((y) => y.startsWith(x))); };
    let docs = [];
    if (text.length >= 2) {
      docs = titleMatches(await ask({ title: text, author }), text);
      if (!docs.length && /\s/.test(text)) docs = titleMatches(await ask({ title: text.replace(/\s+\S*$/, ''), author }), text);
    } else {
      docs = (await ask({ author, sort: 'readinglog', limit: '30' })).filter((d) => d && d.title);
      const seen = new Set();
      docs = docs.filter((d) => { const k = foldWords(d.title).join(' '); if (seen.has(k)) return false; seen.add(k); return true; });
    }
    docs = docs.filter((d) => (d.author_name || []).some(byThem));
    let out = docs.slice(0, limit).map(fromDoc);
    if (out.length < 3) {
      try {
        const q = (text.length >= 2 ? `intitle:${text} ` : '') + `inauthor:${author}`;
        const want = foldWords(text);
        const g = (await gbAsk(q, 15)).filter((x) => byThem(x.author) && (!want.length || (want.slice(0, -1).every((t) => foldWords(x.title).includes(t)) && foldWords(x.title).some((t) => t.startsWith(want[want.length - 1])))));
        const seen = new Set(out.map((x) => foldWords(x.title).join(' ')));
        for (const x of g) { const k = foldWords(x.title).join(' '); if (!seen.has(k) && out.length < limit) { seen.add(k); out.push(x); } }
      } catch {}
    }
    return out;
  }
  // keep only books whose title has every word you typed (the last one can be half-typed), best matches first
  const foldWords = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’']/g, '').split(/[^a-z0-9]+/).filter(Boolean);
  function titleMatches(docs, text) {
    const want = foldWords(text);
    if (!want.length) return [];
    const last = want[want.length - 1], whole = want.slice(0, -1);
    const typed = want.join(' ');
    const seen = new Set();
    return docs.filter(d => d && d.title).map((d, i) => {
      const words = foldWords(d.title), t = words.join(' ');
      const ok = whole.every(w => words.includes(w)) && words.some(w => w.startsWith(last));
      const rank = t === typed ? 0 : t.startsWith(typed) ? 1 : (' ' + t + ' ').includes(' ' + typed + ' ') ? 2 : 3;
      return { d, i, ok, rank, len: t.length, key: t + '|' + (d.author_name || [''])[0] };
    }).filter(x => x.ok && !seen.has(x.key) && seen.add(x.key))
      .sort((a, b) => a.rank - b.rank || (a.rank === 1 ? a.len - b.len : 0) || a.i - b.i).map(x => x.d);
  }
  const fromDoc = (d) => ({
    olKey: d.key || null, title: d.title, author: (d.author_name || []).slice(0, 2).join(' & '),
    year: d.first_publish_year || null, pages: d.number_of_pages_median || null, cover: d.cover_i || null,
    subjects: (d.subject || []).slice(0, 40),
  });
  async function olByISBN(isbn) {
    try {
      const q = new URLSearchParams({ q: `isbn:${isbn}`, limit: '1', fields: FIND_FIELDS });
      const d = ((await getJSON(`${OL}/search.json?${q}`)).docs || [])[0];
      if (d && d.title) return Object.assign(fromDoc(d), { isbn });
    } catch {}
    // not in the search index yet: the edition record itself
    try {
      const e = await getJSON(`${OL}/isbn/${isbn}.json`);
      if (!e || !e.title) return null;
      let author = '';
      const ak = (e.authors || [])[0] && e.authors[0].key;
      if (ak) { try { author = (await getJSON(`${OL}${ak}.json`)).name || ''; } catch {} }
      const work = (e.works || [])[0] && e.works[0].key;
      return { olKey: work || null, title: e.title, author, year: parseInt(e.publish_date, 10) || null, pages: e.number_of_pages || null, cover: (e.covers || []).find(c => c > 0) || null, subjects: e.subjects || [], isbn };
    } catch { return null; }
  }

  // ---------- more sources: the shared Tomestead catalog, Google Books, Hardcover ----------
  // A scanned or typed ISBN is looked up in turn: the catalog every reader shares (anything found or
  // fixed once is there for everyone), Open Library, Google Books, then Hardcover. Each fills in what
  // the one before was missing (most often the cover). Whatever is found goes into the catalog; an
  // ISBN nobody knows is noted (misses) so the gaps can be seen.
  const CFG = () => window.TOMESTEAD_BOOKS || {};
  const SY = () => window.TomesteadSync || {};
  const GB = 'https://www.googleapis.com/books/v1/volumes';
  const GB_FIELDS = 'items(id,volumeInfo(title,subtitle,authors,publishedDate,pageCount,categories,imageLinks,industryIdentifiers,description,language))';
  let gbDown = 0;
  async function gbAsk(q, n = 10) {
    if (Date.now() < gbDown) return [];
    const p = new URLSearchParams({ q, maxResults: String(n), printType: 'books', fields: GB_FIELDS });
    if (CFG().googleKey) p.set('key', CFG().googleKey);
    const r = await fetch(`${GB}?${p}`);
    if (r.status === 429 || r.status === 403) { gbDown = Date.now() + 10 * 60 * 1000; return []; }   // over the allowance: rest a while
    if (!r.ok) throw new Error(r.status);
    return ((await r.json()).items || []).map(fromGB).filter(Boolean);
  }
  function fromGB(it) {
    const v = it && it.volumeInfo; if (!v || !v.title) return null;
    const ids = v.industryIdentifiers || [];
    const isbn = (ids.find(x => x.type === 'ISBN_13') || ids.find(x => x.type === 'ISBN_10') || {}).identifier || '';
    const im = v.imageLinks || {};
    const pic = im.thumbnail || im.smallThumbnail || '';
    return {
      olKey: null, gbId: it.id, title: v.title, author: (v.authors || []).slice(0, 2).join(' & '),
      year: parseInt(v.publishedDate, 10) || null, pages: v.pageCount || null,
      cover: pic ? pic.replace(/^http:/, 'https:').replace(/&edge=curl/g, '') : null,
      subjects: (v.categories || []).slice(0, 12), isbn: isbnOf(isbn), about: v.description ? cleanDesc(v.description) : '', src: 'Google Books',
    };
  }
  const gbByISBN = async (isbn) => (await gbAsk(`isbn:${isbn}`, 3).catch(() => []))[0] || null;
  async function hcByISBN(isbn) {
    if (CFG().hardcover === false || !SY().hardcover) return null;
    try { return await SY().hardcover({ isbn }); } catch { return null; }
  }
  // fill the gaps in one record from another
  function fill(a, b) {
    if (!a) return b; if (!b) return a;
    const out = Object.assign({}, a);
    for (const k of ['title', 'author', 'year', 'pages', 'isbn', 'about', 'olKey']) if (!out[k] && b[k]) out[k] = b[k];
    if (!okCover(out.cover) && okCover(b.cover)) { out.cover = b.cover; out.coverSrc = b.src || ''; }
    if ((!out.subjects || !out.subjects.length) && b.subjects) out.subjects = b.subjects;
    return out;
  }
  async function byISBN(isbn) {
    isbn = isbnOf(isbn);
    if (!isbn) return null;
    let hit = null;
    try { hit = SY().catalogGet ? await SY().catalogGet(isbn) : null; } catch {}
    if (hit && hit.title && okCover(hit.cover)) return Object.assign(hit, { isbn });
    const fromCatalog = !!hit;
    hit = fill(hit, await olByISBN(isbn));
    if (!hit || !okCover(hit.cover) || !hit.author) hit = fill(hit, await gbByISBN(isbn));
    if (!hit || !okCover(hit.cover)) hit = fill(hit, await hcByISBN(isbn));
    if (hit && hit.title) {
      hit.isbn = isbn;
      if (SY().catalogPut) SY().catalogPut(isbn, hit, fromCatalog).catch(() => {});
      return hit;
    }
    if (SY().noteMiss) SY().noteMiss(isbn).catch(() => {});
    return null;
  }
  // Open Library subjects → one plain genre (fiction first, so "History" on a novel doesn't win)
  const GENRES = [
    ['science fiction', 'Science fiction'], ['fantasy', 'Fantasy'], ['horror', 'Horror'], ['ghost', 'Horror'],
    ['detective', 'Mystery'], ['mystery', 'Mystery'], ['thriller', 'Thriller'], ['suspense', 'Thriller'],
    ['romance', 'Romance'], ['love stories', 'Romance'], ['historical fiction', 'Historical fiction'],
    ['graphic novel', 'Graphic novel'], ['comic', 'Graphic novel'], ['young adult', 'Young adult'],
    ['juvenile', 'Children’s'], ['children', 'Children’s'], ['poetry', 'Poetry'], ['classic', 'Classics'],
    ['autobiography', 'Memoir', 1], ['memoir', 'Memoir', 1], ['biography', 'Biography', 1], ['self-help', 'Self-help', 1],
    ['business', 'Business', 1], ['psychology', 'Psychology', 1], ['philosophy', 'Philosophy', 1], ['religion', 'Religion', 1],
    ['christian', 'Religion', 1], ['history', 'History', 1], ['science', 'Science', 1], ['cooking', 'Cooking', 1],
    ['literary', 'Literary fiction'], ['fiction', 'Fiction'],
  ];
  function genreFrom(subjects, known = []) {
    const subs = (subjects || []).map(s => String(s).toLowerCase());
    if (!subs.length) return '';
    const fiction = subs.some(s => /\bfiction\b|novel/.test(s));
    for (const [k, g, nonfiction] of GENRES) {
      if (nonfiction && fiction) continue;
      if (subs.some(s => s.includes(k))) return known.find(x => x.toLowerCase() === g.toLowerCase()) || g;
    }
    return '';
  }

  // Returns { olKey, ids: [coverIds], about: {text, source, url} | null }
  // (a book picked from search or scanned already knows its Open Library work)
  async function lookup(book) {
    const r = await olLookup(book).catch(() => ({ olKey: book.olKey || null, ids: [], about: null }));
    if (r.ids.length && r.about) return r;
    // no cover or no summary on Open Library: the catalog, Google Books and Hardcover
    try {
      let x = null;
      const isbn = isbnOf(book.isbn);
      if (isbn) {
        try { x = SY().catalogGet ? await SY().catalogGet(isbn) : null; } catch {}
        if (!x || !okCover(x.cover) || !x.about) x = fill(x, await gbByISBN(isbn));
        if (!x || !okCover(x.cover)) x = fill(x, await hcByISBN(isbn));
      }
      if ((!x || !okCover(x.cover)) && book.title) {
        const sur = String(book.author || '').trim().split(/\s+/).pop();
        const g = await gbAsk(`intitle:"${book.title}"${sur ? ` inauthor:${sur}` : ''}`, 5);
        const want = foldWords(book.title).join(' ');
        x = fill(x, g.find(v => okCover(v.cover) && foldWords(v.title).join(' ').startsWith(want)) || null);
      }
      if (x) {
        if (okCover(x.cover) && !r.ids.includes(x.cover)) r.ids.push(x.cover);
        if (!r.about && x.about) r.about = { text: cleanDesc(x.about), source: x.src || 'Google Books', url: x.gbId ? `https://books.google.com/books?id=${x.gbId}` : null };
        if (isbn && SY().catalogPut) SY().catalogPut(isbn, Object.assign({ title: book.title, author: book.author }, x), false).catch(() => {});
      }
    } catch {}
    return r;
  }
  async function olLookup(book) {
    if (book.olKey) {
      const out = { olKey: book.olKey, ids: [], about: null };
      const seed = book.art && Array.isArray(book.art.ids) ? book.art.ids : [];
      seed.forEach(c => { if (okCover(c) && !out.ids.includes(c)) out.ids.push(c); });
      const w = await getJSON(`${OL}${book.olKey}.json`);
      const d = typeof w.description === 'string' ? w.description : w.description && w.description.value;
      if (d) out.about = { text: cleanDesc(d), source: 'Open Library', url: `${OL}${book.olKey}` };
      (w.covers || []).forEach(c => { if (c > 0 && !out.ids.includes(c)) out.ids.push(c); });
      return out;
    }
    if (book.isbn) {
      const hit = await byISBN(book.isbn).catch(() => null);
      if (hit && hit.olKey) return olLookup({ olKey: hit.olKey, art: { ids: okCover(hit.cover) ? [hit.cover] : [] } });
    }
    const q = new URLSearchParams({ title: book.title, limit: '6', fields: 'key,title,author_name,cover_i,first_publish_year,edition_count' });
    if (book.author) q.set('author', book.author);
    let docs = (await getJSON(`${OL}/search.json?${q}`)).docs || [];
    if (!docs.length && book.author) {
      // retry with a looser query (e.g. "J.R.R. Tolkien" vs "J. R. R. Tolkien")
      const q2 = new URLSearchParams({ q: `${book.title} ${book.author.split(/\s+/).pop()}`, limit: '6', fields: 'key,title,author_name,cover_i,first_publish_year,edition_count' });
      docs = (await getJSON(`${OL}/search.json?${q2}`)).docs || [];
    }
    docs.sort((a, b) => (b.cover_i ? 1 : 0) - (a.cover_i ? 1 : 0) || (b.edition_count || 0) - (a.edition_count || 0));
    const doc = docs[0];
    const out = { olKey: doc ? doc.key : null, ids: [], about: null };
    if (!doc) return out;
    if (doc.cover_i) out.ids.push(doc.cover_i);
    try {
      const w = await getJSON(`${OL}${doc.key}.json`);
      const d = typeof w.description === 'string' ? w.description : w.description && w.description.value;
      if (d) out.about = { text: cleanDesc(d), source: 'Open Library', url: `${OL}${doc.key}` };
      (w.covers || []).forEach(c => { if (c > 0 && !out.ids.includes(c)) out.ids.push(c); });
    } catch {}
    return out;
  }

  // more cover choices from other editions of the same work
  async function moreCovers(olKey, have = []) {
    if (!olKey) return [];
    try {
      const j = await getJSON(`${OL}${olKey}/editions.json?limit=40`);
      const ids = [];
      (j.entries || []).forEach(e => (e.covers || []).forEach(c => { if (c > 0 && !have.includes(c) && !ids.includes(c)) ids.push(c); }));
      return ids;
    } catch { return []; }
  }

  // Resolve which image (if any) a book should show on its cover
  async function coverSrc(book, size = 'L') {
    const a = book.art || {};
    if (a.status === 'upload') return (await uploadURL(book.id)) || a.url || null;   // this device's copy, else the cloud copy
    if (a.status === 'plain') return null;
    if (a.ids && a.ids.length) return coverURL(a.ids[Math.min(a.i || 0, a.ids.length - 1)], size);
    return null;
  }

  // test whether an image actually loads (Open Library returns 404 for missing covers)
  function probe(src) {
    return new Promise(res => {
      if (!src) return res(false);
      const i = new Image();
      i.onload = () => res(i.naturalWidth > 2);
      i.onerror = () => res(false);
      i.src = src;
    });
  }

  window.TomesteadCovers = { okCover, gbAsk, coverURL, lookup, moreCovers, coverSrc, probe, putUpload, getUpload, delUpload, uploadURL, allUploads, resizeImage, cleanDesc, search, titleMatches, byISBN, isbnOf, genreFrom };
})();
