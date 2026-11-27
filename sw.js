/* Tomestead service worker: always fresh when online, still works offline */
const VERSION = 'tomestead-v54';
const SHELL = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'art.js',
  'decor.js',
  'intro.js',
  'quotes.js',
  'trivia.js',
  'table.js',
  'covers.js',
  'reader.js',
  'growth.js',
  'authors.js',
  'recommend.js',
  'importer.js',
  'scan.js',
  'yearreview.js',
  'share.js',
  'calendar.js',
  'memories.js',
  'ritual.js',
  'goals.js',
  'motes.js',
  'vine.js',
  'tex/wood-v.webp',
  'tex/wood-h.webp',
  'tex/plaster.webp',
  'tex/cloth.webp',
  'tex/leather.webp',
  'tex/floor.webp',
  // the default shelf trinkets (Classic bookcase pictures); the rest are cached when first shown
  'tex/trinkets/pottedplant.webp',
  'tex/trinkets/bookstack.webp',
  'tex/trinkets/compass.webp',
  'tex/trinkets/bust.webp',
  'tex/trinkets/chinavase.webp',
  'tex/trinkets/stonecat.webp',
  'tex/table/lamp.webp',
  'tex/table/tea.webp',
  'tex/table/glasses.webp',
  'sync.js',
  'firebase-config.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
];
const ROOM = ['room/room.js', 'room/room.css'];
const FIREBASE = ['app', 'auth', 'firestore', 'storage'].map((n) => `https://www.gstatic.com/firebasejs/13.3.0/firebase-${n}.js`);

self.addEventListener('install', (event) => {
  // the sign-in code is cached too, so a signed-in reader can open the app offline (not fatal if it fails)
  event.waitUntil(caches.open(VERSION)
    .then((c) => c.addAll(SHELL)
      // the reading room too (kept under its plain address), so a weak signal can't keep it from opening
      .then(() => c.addAll(ROOM).catch(() => {}))
      .then(() => c.addAll(FIREBASE).catch(() => {})))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  const isCover = url.hostname === 'covers.openlibrary.org';
  const isSdk = url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/');
  const isPhoto = url.hostname === 'firebasestorage.googleapis.com' && req.destination === 'image';
  if (url.origin !== self.location.origin && !isFont && !isCover && !isSdk && !isPhoto) return;

  event.respondWith(
    caches.open(VERSION).then(async (cache) => {
      // the room's files carry a build tag (?v=…): keep one copy of each, under its plain address
      const key = url.pathname.includes('/room/') ? url.origin + url.pathname : req;
      const cached = await cache.match(key, { ignoreSearch: req.mode === 'navigate' });
      // Fonts, cover images, cover photos and the (versioned) sign-in code don't change: serve from cache first.
      if ((isFont || isCover || isSdk || isPhoto) && cached) return cached;
      // App files: get the newest copy when online, fall back to the saved copy offline.
      try {
        const res = await fetch(req);
        if (res && (res.ok || (res.type === 'opaque' && !isCover))) { cache.put(key, res.clone()); return res; }
        // a server error (e.g. mid-deploy) shouldn't beat a good saved copy
        if (res && res.status >= 500 && cached) return cached;
        return res;
      } catch {
        return cached || (req.mode === 'navigate' ? cache.match('index.html') : Response.error());
      }
    })
  );
});
