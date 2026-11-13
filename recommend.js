/* Tomestead recommender: suggests what to read next from the books on your shelves.
   Your ratings shape a taste profile (subjects and authors from Open Library), then
   well-loved books that share it, and that you haven't logged, are ranked. */
window.TomesteadRecommend = function (api) {
  'use strict';
  const OL = 'https://openlibrary.org';
  const $ = (s, el = document) => el.querySelector(s);
  const esc = api.esc;
  const FIELDS = 'key,title,author_name,cover_i,first_publish_year,subject,ratings_average,ratings_count,number_of_pages_median';

  // subjects that say nothing about taste
  const JUNK = /^(fiction|nonfiction|non-fiction|accessible book|protected daisy|in library|lending library|large type books|open library staff picks|internet archive wishlist|overdrive|popular print disabled books|reading level|english language|literature|general|textual|translations into english|american literature|english literature|fiction, general|novel|novels|roman|ficción|fiction in english|history and criticism|criticism and interpretation|juvenile literature|readers|children's fiction|nyt|new york times|award|series|bestseller|.*long now.*|.*\b(19|20)\d\d\b.*)/;
  const norm = (s) => String(s || '').toLowerCase().replace(/^the\s+|^a\s+|^an\s+/, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const cleanSubj = (s) => {
    const t = String(s).toLowerCase().replace(/\s+/g, ' ').trim();
    if (t.length < 3 || t.length > 36 || JUNK.test(t) || /^[a-z]+:/.test(t) || /\(fictitious character\)/.test(t)) return null;
    return t.replace(/, fiction$/, '').replace(/^fiction, /, '');
  };
  const pretty = (s) => s.replace(/\b([a-z])/g, (m) => m.toUpperCase());

  async function getJSON(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(r.status);
    return r.json();
  }

  // how much each book tells us about your taste
  function weightOf(b) {
    const w = { 5: 3, 4: 2, 3: 0.5, 2: -1, 1: -2 }[b.rating] ?? 1;
    const recent = b.finished && (Date.now() - new Date(b.finished).getTime()) < 400 * 864e5 ? 1.2 : 1;
    return w * recent;
  }

  // subjects for each shelf book, fetched once and kept on the book
  async function subjectsFor(b) {
    if (Array.isArray(b.subj)) return b.subj;
    const q = new URLSearchParams({ title: b.title, limit: '3', fields: 'key,subject' });
    if (b.author) q.set('author', b.author);
    const docs = (await getJSON(`${OL}/search.json?${q}`)).docs || [];
    const doc = docs.find(d => d.subject && d.subject.length) || docs[0];
    b.subj = doc && doc.subject ? [...new Set(doc.subject.slice(0, 40).map(cleanSubj).filter(Boolean))].slice(0, 24) : [];
    if (doc && doc.key && !b.olWork) b.olWork = doc.key;
    return b.subj;
  }

  async function pool(items, n, fn) {
    const out = [];
    let i = 0;
    await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; try { out[k] = await fn(items[k]); } catch { out[k] = null; } } }));
    return out;
  }

  async function profile(books) {
    const ranked = [...books].sort((a, b) => Math.abs(weightOf(b)) - Math.abs(weightOf(a)) || (b.addedAt || 0) - (a.addedAt || 0)).slice(0, 36);
    await pool(ranked.filter(b => !Array.isArray(b.subj)), 4, subjectsFor);
    api.save();
    const S = new Map(), count = new Map(), A = new Map();
    for (const b of ranked) {
      const w = weightOf(b);
      for (const s of b.subj || []) { S.set(s, (S.get(s) || 0) + w); count.set(s, (count.get(s) || 0) + 1); }
      if (b.author && w > 0) A.set(b.author, (A.get(b.author) || 0) + w);
    }
    for (const [s, v] of S) S.set(s, v * (1 + 0.4 * ((count.get(s) || 1) - 1)));
    return { S, A, books: ranked };
  }

  async function candidates(P, shelf) {
    const topSubj = [...P.S].filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([s]) => s);
    const topAuth = [...P.A].sort((a, b) => b[1] - a[1]).filter(([, v]) => v >= 3).slice(0, 3).map(([a]) => a);
    const queries = [
      ...topSubj.map(s => ({ url: `${OL}/search.json?${new URLSearchParams({ q: `subject:"${s}"`, sort: 'readinglog', limit: '40', fields: FIELDS })}`, via: 'subject' })),
      ...topAuth.map(a => ({ url: `${OL}/search.json?${new URLSearchParams({ author: a, sort: 'readinglog', limit: '15', fields: FIELDS })}`, via: 'author' })),
    ];
    const results = await pool(queries, 4, async (q) => ((await getJSON(q.url)).docs || []).map(d => ({ ...d, via: q.via })));
    const seenTitles = new Set(shelf.map(b => norm(b.title)));
    const seenKeys = new Set(shelf.map(b => b.olWork || (b.art && b.art.olKey)).filter(Boolean));
    const dismissed = new Set(api.recs().dismissed || []);
    const byKey = new Map();
    for (const list of results) for (const d of list || []) {
      if (!d || !d.key || !d.title || seenKeys.has(d.key) || dismissed.has(d.key) || seenTitles.has(norm(d.title))) continue;
      const prev = byKey.get(d.key);
      if (prev) { prev.hits++; continue; }
      byKey.set(d.key, { ...d, hits: 1 });
    }
    return [...byKey.values()];
  }

  function score(c, P) {
    const subs = [...new Set((c.subject || []).map(cleanSubj).filter(Boolean))];
    let m = 0, neg = 0;
    const shared = [];
    for (const s of subs) {
      const v = P.S.get(s);
      if (v > 0) { m += v; shared.push([s, v]); } else if (v < 0) neg += v;
    }
    const author = (c.author_name || [])[0] || '';
    const fav = P.A.get(author) || 0;
    const n = c.ratings_count || 0, avg = c.ratings_average || 3.5;
    if (n < 8 && !fav) return null;
    const quality = Math.pow(Math.max(2.5, Math.min(5, avg)) / 5, 2.4) * (0.55 + 0.15 * Math.log10(n + 10));
    const s = (Math.sqrt(Math.max(0, m)) * 1.4 + fav * 0.9 + (c.hits - 1) * 0.8 + neg * 0.4) * quality;
    if (s <= 0) return null;
    shared.sort((a, b) => b[1] - a[1]);
    return { ...c, author, score: s, shared: shared.slice(0, 3).map(x => x[0]), fav };
  }

  // the shelf books a pick is most like, for the "because…" line
  function because(c, P) {
    if (c.fav) {
      const mine = P.books.filter(b => b.author === c.author && weightOf(b) > 0).sort((a, b) => (b.rating || 0) - (a.rating || 0));
      if (mine.length) return { books: mine.slice(0, 2), author: true };
    }
    const sh = new Set(c.shared);
    const like = P.books.filter(b => weightOf(b) > 0 && (b.subj || []).some(s => sh.has(s)))
      .map(b => ({ b, k: (b.subj || []).filter(s => sh.has(s)).length * weightOf(b) }))
      .sort((a, b) => b.k - a.k).slice(0, 2).map(x => x.b);
    return { books: like, author: false };
  }

  // ---------- the dialog ----------
  const dlg = $('#recDialog');
  const body = $('#recBody');
  let list = [], at = 0, P = null, stamp = '';

  function stars(avg) {
    const r = Math.round((avg || 0) * 2) / 2;
    let out = '';
    for (let i = 1; i <= 5; i++) out += `<span class="${i <= r ? 'on' : i - 0.5 === r ? 'half' : 'off'}">★</span>`;
    return out;
  }
  function names(arr) { return arr.length > 1 ? `${arr.slice(0, -1).join(', ')} and ${arr[arr.length - 1]}` : arr[0] || ''; }

  function show() {
    const c = list[at];
    if (!c) {
      body.innerHTML = `<p class="rec-empty">That’s every idea for now. Rate a few more books and come back for fresh suggestions.</p>`;
      return;
    }
    const why = because(c, P);
    const titles = why.books.map(b => `<em>${esc(b.title)}</em>`);
    const rated = why.books.length && why.books.every(b => b.rating === 5) ? 'gave five stars to' : 'enjoyed';
    let reason;
    if (why.author && titles.length) reason = `You ${rated} ${names(titles)}, and this is another by ${esc(c.author)}.`;
    else if (titles.length) reason = `Because you ${rated} ${names(titles)}${c.shared.length ? `. It shares their ${c.shared.length > 1 ? 'mix of' : 'love of'} ${names(c.shared.slice(0, 2).map(s => esc(s)))}` : ''}.`;
    else reason = `It sits right in the subjects you rate highest${c.shared.length ? `: ${names(c.shared.slice(0, 2).map(s => esc(s)))}` : ''}.`;
    const meta = [c.first_publish_year, c.number_of_pages_median ? `${c.number_of_pages_median} pages` : ''].filter(Boolean).join(' · ');
    const cover = c.cover_i ? `<img alt="" src="https://covers.openlibrary.org/b/id/${c.cover_i}-M.jpg?default=false">` : '';
    const more = list.slice(at + 1, at + 5);
    body.innerHTML = `
      <article class="rec-pick">
        <div class="rec-cover">${cover}<span class="rec-cover-plain">${esc(c.title)}</span></div>
        <div class="rec-info">
          <h3 class="rec-title">${esc(c.title)}</h3>
          <p class="rec-author">by ${esc(c.author || 'unknown author')}</p>
          ${c.ratings_count ? `<p class="rec-rating"><span class="rec-stars" aria-hidden="true">${stars(c.ratings_average)}</span> ${(c.ratings_average || 0).toFixed(1)} from ${c.ratings_count.toLocaleString()} Open Library readers</p>` : ''}
          ${meta ? `<p class="rec-meta">${meta}</p>` : ''}
        </div>
        <div class="rec-rest">
          <p class="rec-why">${reason}</p>
          ${c.shared.length ? `<p class="rec-tags">${c.shared.map(s => `<span>${esc(pretty(s))}</span>`).join('')}</p>` : ''}
          <div class="rec-actions">
            <button type="button" class="btn btn-ink" data-rec="next">Another idea</button>
            <button type="button" class="btn btn-ghost" data-rec="read">I’ve read it</button>
            <button type="button" class="btn btn-ghost" data-rec="nope">Not for me</button>
          </div>
          <a class="rec-link" href="${OL}${esc(c.key)}" target="_blank" rel="noopener">See it on Open Library</a>
        </div>
      </article>
      ${more.length ? `<h4 class="rec-more-h">More ideas</h4><div class="rec-more">${more.map((m, i) => `
        <button type="button" class="rec-mini" data-rec-go="${at + 1 + i}">
          <span class="rec-mini-cover">${esc(m.title)}${m.cover_i ? `<img alt="" loading="lazy" src="https://covers.openlibrary.org/b/id/${m.cover_i}-M.jpg?default=false">` : ''}</span>
          <span class="rec-mini-t">${esc(m.title)}</span><span class="rec-mini-a">${esc(m.author)}</span>
        </button>`).join('')}</div>` : ''}`;
    body.querySelectorAll('img').forEach(img => img.addEventListener('error', () => img.remove(), { once: true }));
  }

  async function open() {
    const books = api.books();
    const rated = books.filter(b => weightOf(b) > 0);
    dlg.showModal();
    if (rated.length < 2) {
      body.innerHTML = `<p class="rec-empty">Add and rate a few books you’ve read, and Tomestead will suggest what to read next.</p>`;
      return;
    }
    if (navigator.onLine === false) {
      body.innerHTML = `<p class="rec-empty">Suggestions come from Open Library, so they need an internet connection. Try again once you’re online.</p>`;
      return;
    }
    const key = books.map(b => `${b.id}:${b.rating || 0}`).join('|') + '#' + (api.recs().dismissed || []).length;
    if (key === stamp && list.length) { show(); return; }
    body.innerHTML = `<div class="rec-loading"><span class="rec-spinner" aria-hidden="true"></span><p>Looking over your shelves…</p></div>`;
    try {
      P = await profile(books);
      const cands = await candidates(P, books);
      list = cands.map(c => score(c, P)).filter(Boolean).sort((a, b) => b.score - a.score);
      // don't let one author or one series crowd the list
      const perAuthor = new Map();
      list = list.filter(c => { const n = (perAuthor.get(c.author) || 0) + 1; perAuthor.set(c.author, n); return n <= 2; }).slice(0, 30);
      at = 0; stamp = key;
      if (!list.length) { body.innerHTML = `<p class="rec-empty">Open Library didn’t turn up anything new for your shelves this time. Rate a few more books and try again.</p>`; return; }
      show();
    } catch {
      body.innerHTML = `<p class="rec-empty">Open Library didn’t answer just now. Try again in a moment.</p>`;
    }
  }

  body.addEventListener('click', (e) => {
    const go = e.target.closest('[data-rec-go]');
    if (go) { const i = +go.dataset.recGo; const [c] = list.splice(i, 1); list.splice(at, 0, c); show(); body.scrollTop = 0; return; }
    const b = e.target.closest('[data-rec]');
    if (!b) return;
    const c = list[at];
    if (b.dataset.rec === 'next') { at = (at + 1) % Math.max(1, list.length); show(); body.scrollTop = 0; }
    if (b.dataset.rec === 'nope' && c) {
      api.dismiss(c.key);
      list.splice(at, 1);
      if (at >= list.length) at = 0;
      api.toast('Got it. It won’t come up again.');
      show();
    }
    if (b.dataset.rec === 'read' && c) {
      api.dismiss(c.key);
      list.splice(at, 1);
      if (at >= list.length) at = 0;
      dlg.close();
      api.addBook({ title: c.title, author: c.author, pages: c.number_of_pages_median || null });
    }
  });

  return { open };
};
