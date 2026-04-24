const CACHE_NAME = 'chess-assistant-cache-v1';

// Assets to strictly cache for offline execution
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data/timeline.json',
  './data/eligibility-rules.json',
  './data/faqs.json'
];

// Install: Precache App Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); // Activate new worker immediately
});

// Activate: Cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Cache-First strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached asset if it exists, otherwise reach out to network
      return cachedResponse || fetch(event.request);
    })
  );
});
