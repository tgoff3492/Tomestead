/* Tomestead · a book lookup on Hardcover (hardcover.app), for ISBNs Open Library and Google Books
   don't know or have no cover for. It runs here so Hardcover's token never sits in the public app.
   Only signed-in readers on the guest list can use it.
   Deploy (once): see SETUP-ACCOUNTS.md → "Finding more books". */
const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
admin.initializeApp();

const HARDCOVER_TOKEN = defineSecret('HARDCOVER_TOKEN');
const ORIGINS = [/^https:\/\/tgoff3492\.github\.io$/, /^http:\/\/localhost(:\d+)?$/];

const QUERY = `query Edition($isbn: String!) {
  editions(where: {_or: [{isbn_13: {_eq: $isbn}}, {isbn_10: {_eq: $isbn}}]}, limit: 1) {
    title
    pages
    release_date
    image { url }
    book {
      title
      pages
      release_year
      description
      image { url }
      contributions { author { name } }
    }
  }
}`;

exports.hardcover = onRequest({ secrets: [HARDCOVER_TOKEN], cors: ORIGINS, maxInstances: 2, memory: '256MiB', timeoutSeconds: 20 }, async (req, res) => {
  try {
    // signed in, email confirmed, on the guest list
    const m = String(req.get('Authorization') || '').match(/^Bearer (.+)$/);
    if (!m) return res.status(401).json({ error: 'sign-in' });
    const who = await admin.auth().verifyIdToken(m[1]);
    if (!who.email_verified || !who.email) return res.status(403).json({ error: 'unverified' });
    const invite = await admin.firestore().doc(`invites/${who.email.toLowerCase()}`).get();
    if (!invite.exists) return res.status(403).json({ error: 'not-invited' });

    const isbn = String(req.query.isbn || '').replace(/[^0-9X]/gi, '').toUpperCase();
    if (!/^(\d{9}[\dX]|\d{13})$/.test(isbn)) return res.status(400).json({ error: 'isbn' });

    const token = HARDCOVER_TOKEN.value().replace(/^Bearer\s+/i, '');
    const r = await fetch('https://api.hardcover.app/v1/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'User-Agent': 'Tomestead (personal reading app)' },
      body: JSON.stringify({ query: QUERY, variables: { isbn } }),
    });
    if (!r.ok) return res.status(502).json({ error: 'hardcover ' + r.status });
    const j = await r.json();
    const e = j && j.data && j.data.editions && j.data.editions[0];
    if (!e) return res.json({ book: null });
    const b = e.book || {};
    const cover = (e.image && e.image.url) || (b.image && b.image.url) || null;
    res.set('Cache-Control', 'private, max-age=86400');
    return res.json({ book: {
      title: e.title || b.title || '',
      author: (b.contributions || []).map((c) => c && c.author && c.author.name).filter(Boolean).slice(0, 2).join(' & '),
      pages: e.pages || b.pages || null,
      year: parseInt(e.release_date, 10) || b.release_year || null,
      cover: cover && /^https:\/\//.test(cover) ? cover : null,
      about: b.description || '',
      subjects: [],
      olKey: null,
    } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'failed' });
  }
});
