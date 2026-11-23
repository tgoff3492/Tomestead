/* Tomestead · your top authors, for the portrait gallery in the reading room.
   Top authors: the ones you've finished the most books by, then your highest average stars.
   For each: a portrait and a few lines "about the author", from Open Library (author photos and
   bios) and, where Open Library has none, Wikipedia's page summary. Kept on this device for a month. */
(function () {
  'use strict';
  const OL = 'https://openlibrary.org';
  const KEY = 'tomestead.author:';
  const MONTH = 30 * 864e5;
  const fold = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  // the first author of a book ("Neil Gaiman & Terry Pratchett" → Neil Gaiman)
  const firstAuthor = (a) => String(a || '').split(/\s*(?:&|;|,| and )\s*/i)[0].trim();

  function top(books, n = 6) {
    const by = new Map();
    for (const b of books || []) {
      if (!b || (b.status || 'read') !== 'read') continue;
      const name = firstAuthor(b.author);
      if (!name || name.length < 3) continue;
      const k = fold(name);
      const e = by.get(k) || { name, count: 0, stars: 0, rated: 0, titles: [] };
      e.count++; e.titles.push(b.title);
      if (Number(b.rating) > 0) { e.stars += Number(b.rating); e.rated++; }
      by.set(k, e);
    }
    return [...by.values()]
      .map((e) => ({ name: e.name, count: e.count, avg: e.rated ? Math.round((e.stars / e.rated) * 10) / 10 : null, titles: e.titles.slice(0, 6) }))
      .sort((a, b) => b.count - a.count || (b.avg || 0) - (a.avg || 0) || a.name.localeCompare(b.name))
      .slice(0, n);
  }

  const cleanBio = (s) => {
    let t = String((s && s.value) || s || '').replace(/\r/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (t.length > 520) { const cut = t.slice(0, 520); const end = cut.lastIndexOf('. '); t = (end > 200 ? cut.slice(0, end + 1) : cut.replace(/\s+\S*$/, '') + ' …'); }
    return t;
  };
  const yearOf = (d) => { const m = String(d || '').match(/(\d{3,4})(?!.*\d{3,4})/); return m ? m[1] : ''; };
  async function getJSON(url) { const r = await fetch(url); if (!r.ok) throw new Error(r.status); return r.json(); }

  async function fromOpenLibrary(name) {
    const j = await getJSON(`${OL}/search/authors.json?${new URLSearchParams({ q: name, limit: '5' })}`);
    const want = fold(name);
    const docs = (j.docs || []).sort((a, b) => (fold(b.name) === want) - (fold(a.name) === want) || (b.work_count || 0) - (a.work_count || 0));
    const d = docs.find((x) => fold(x.name) === want) || docs[0];
    if (!d || !d.key) return null;
    const a = await getJSON(`${OL}/authors/${d.key}.json`);
    const photo = (a.photos || []).find((p) => p > 0);
    return {
      key: d.key, born: yearOf(a.birth_date || d.birth_date), died: yearOf(a.death_date || d.death_date),
      bio: cleanBio(a.bio), photo: photo ? `https://covers.openlibrary.org/a/id/${photo}-L.jpg` : null,
      wiki: typeof a.wikipedia === 'string' ? a.wikipedia : (a.links || []).map((l) => l && l.url).find((u) => /wikipedia\.org/.test(u || '')) || null,
      url: `${OL}/authors/${d.key}`,
    };
  }
  async function fromWikipedia(name, wiki) {
    const title = wiki && /\/wiki\/([^?#]+)/.test(wiki) ? decodeURIComponent(wiki.match(/\/wiki\/([^?#]+)/)[1]) : name.replace(/\s+/g, '_');
    const j = await getJSON(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    if (!j || j.type === 'disambiguation') return null;
    if (!wiki && !/writer|author|novelist|poet|playwright|essayist|journalist|historian|biographer|scholar|philosopher|theologian|illustrator|cartoonist/i.test(String(j.description || '') + ' ' + String(j.extract || '').slice(0, 300))) return null;
    return { bio: cleanBio(j.extract), photo: (j.thumbnail && j.thumbnail.source) || null, url: j.content_urls && j.content_urls.desktop ? j.content_urls.desktop.page : `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`, desc: j.description || '' };
  }

  const inflight = new Map();
  function info(name) {
    try {
      const c = JSON.parse(localStorage.getItem(KEY + fold(name)) || 'null');
      if (c && Date.now() - c.at < MONTH) return Promise.resolve(c);
    } catch {}
    if (inflight.has(name)) return inflight.get(name);
    const p = (async () => {
      let ol = null, wk = null;
      try { ol = await fromOpenLibrary(name); } catch {}
      if (!ol || !ol.photo || !ol.bio) { try { wk = await fromWikipedia(name, ol && ol.wiki); } catch {} }
      const photo = (ol && ol.photo) || (wk && wk.photo) || null;
      const out = {
        name, born: (ol && ol.born) || '', died: (ol && ol.died) || '',
        bio: (ol && ol.bio) || (wk && wk.bio) || '', bioSrc: ol && ol.bio ? 'Open Library' : wk && wk.bio ? 'Wikipedia' : '',
        photo, credit: photo ? (ol && ol.photo ? 'Portrait from Open Library' : 'Portrait from Wikimedia Commons, via Wikipedia') : '',
        url: (wk && wk.url) || (ol && ol.wiki) || (ol && ol.url) || null, at: Date.now(),
      };
      // only keep a full answer for a month; a failed lookup is tried again next time
      if (ol || wk) { try { localStorage.setItem(KEY + fold(name), JSON.stringify(out)); } catch {} }
      return out;
    })();
    inflight.set(name, p);
    p.finally(() => inflight.delete(name));
    return p;
  }

  // the gallery: top authors with what we know about each
  async function gallery(books, n = 6) {
    const list = top(books, n);
    const infos = await Promise.all(list.map((a) => info(a.name).catch(() => ({ name: a.name }))));
    return list.map((a, i) => Object.assign({}, infos[i], a));
  }

  window.TomesteadAuthors = { top, info, gallery, firstAuthor };
})();
