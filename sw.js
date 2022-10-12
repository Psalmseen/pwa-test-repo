const cacheName = 'cache-v1';
const resourcesToPrecache = [
  '/',
  'index.html',
  'src/app.ts',
  'src/app.styles.ts',
  'manifest.json',
  'sw-config.js',
];

//  Installs the service worker and saves file to cache
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});
//  Service worker activate function
self.addEventListener('activate', () => {
  console.log('service worker active');
});

//  service worker fetches intercepts the data and fetches from cache or the cloud
self.addEventListener('fetch', (event) => {
  console.log('Fetch called');
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
