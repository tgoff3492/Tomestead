/* Tomestead service worker: always fresh when online, still works offline */
const VERSION = 'tomestead-v4';
const SHELL = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'decor.js',
  'covers.js',
  'reader.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
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
  if (url.origin !== self.location.origin && !isFont && !isCover) return;

  event.respondWith(
    caches.open(VERSION).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
      // Fonts and cover images rarely change: serve from cache first.
      if ((isFont || isCover) && cached) return cached;
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
