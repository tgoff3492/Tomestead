/* Tomestead service worker: always fresh when online, still works offline */
const VERSION = 'tomestead-v21';
const SHELL = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'art.js',
  'decor.js',
  'intro.js',
  'table.js',
  'covers.js',
  'reader.js',
  'recommend.js',
  'importer.js',
  'scan.js',
  'yearreview.js',
  'goals.js',
  'motes.js',
  'vine.js',
  'tex/wood-v.webp',
  'tex/wood-h.webp',
  'tex/plaster.webp',
  'tex/cloth.webp',
  'tex/leather.webp',
  'tex/floor.webp',
  'sync.js',
  'firebase-config.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
];
const FIREBASE = ['app', 'auth', 'firestore', 'storage'].map((n) => `https://www.gstatic.com/firebasejs/13.3.0/firebase-${n}.js`);

self.addEventListener('install', (event) => {
  // the sign-in code is cached too, so a signed-in reader can open the app offline (not fatal if it fails)
  event.waitUntil(caches.open(VERSION)
    .then((c) => c.addAll(SHELL).then(() => c.addAll(FIREBASE).catch(() => {})))
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
      const cached = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
      // Fonts, cover images, cover photos and the (versioned) sign-in code don't change: serve from cache first.
      if ((isFont || isCover || isSdk || isPhoto) && cached) return cached;
      // App files: get the newest copy when online, fall back to the saved copy offline.
      try {
        const res = await fetch(req);
        if (res && (res.ok || (res.type === 'opaque' && !isCover))) cache.put(req, res.clone());
        return res;
      } catch {
        return cached || (req.mode === 'navigate' ? cache.match('index.html') : Response.error());
      }
    })
  );
});
