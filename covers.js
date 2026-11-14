/* Tomestead covers: finds cover art and a short summary on Open Library,
   and keeps your own cover photos on this device (IndexedDB). When you're
   signed in, app.js also sends those photos to the cloud (see sync.js). */
(() => {
  'use strict';
  const OL = 'https://openlibrary.org';
  const coverURL = (id, size = 'L') => `https://covers.openlibrary.org/b/id/${id}-${size}.jpg?default=false`;

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
  async function search(text, limit = 7) {
    const isbn = isbnOf(text);
    if (isbn) { const one = await byISBN(isbn); return one ? [one] : []; }
    const q = new URLSearchParams({ q: text, limit: String(limit), fields: FIND_FIELDS });
    const docs = (await getJSON(`${OL}/search.json?${q}`)).docs || [];
    return docs.filter(d => d.title).map(fromDoc);
  }
  const fromDoc = (d) => ({
    olKey: d.key || null, title: d.title, author: (d.author_name || []).slice(0, 2).join(' & '),
    year: d.first_publish_year || null, pages: d.number_of_pages_median || null, cover: d.cover_i || null,
    subjects: (d.subject || []).slice(0, 40),
  });
  async function byISBN(isbn) {
    isbn = isbnOf(isbn);
    if (!isbn) return null;
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
    if (book.olKey) {
      const out = { olKey: book.olKey, ids: [], about: null };
      const seed = book.art && Array.isArray(book.art.ids) ? book.art.ids : [];
      seed.forEach(c => { if (c > 0 && !out.ids.includes(c)) out.ids.push(c); });
      const w = await getJSON(`${OL}${book.olKey}.json`);
      const d = typeof w.description === 'string' ? w.description : w.description && w.description.value;
      if (d) out.about = { text: cleanDesc(d), source: 'Open Library', url: `${OL}${book.olKey}` };
      (w.covers || []).forEach(c => { if (c > 0 && !out.ids.includes(c)) out.ids.push(c); });
      return out;
    }
    if (book.isbn) {
      const hit = await byISBN(book.isbn).catch(() => null);
      if (hit && hit.olKey) return lookup({ olKey: hit.olKey, art: { ids: hit.cover ? [hit.cover] : [] } });
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
    if (a.ids && a.ids.length) return coverURL(a.ids[a.i || 0], size);
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

  window.TomesteadCovers = { coverURL, lookup, moreCovers, coverSrc, probe, putUpload, getUpload, delUpload, uploadURL, allUploads, resizeImage, cleanDesc, search, byISBN, isbnOf, genreFrom };
})();
