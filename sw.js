/* Service worker: pagina se ia întâi de pe rețea (versiunea cea mai nouă), iar offline din cache.
   Iconițele/imaginile: cache-first. Funcționează offline după prima încărcare. */
const CACHE = 'verificator-ur20-v5';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './og-image.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function saveCopy(req, res) {
  if (res && res.ok) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  const isPage = req.mode === 'navigate' || req.destination === 'document' ||
    /\/(index\.html)?$/.test(new URL(req.url).pathname) || req.url.endsWith('.webmanifest');

  if (isPage) {
    // network-first: vizitatorii văd imediat versiunea nouă; offline → cache
    event.respondWith(
      fetch(req)
        .then((res) => saveCopy(req, res))
        .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // cache-first pentru imagini/iconițe
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => saveCopy(req, res)))
  );
});
