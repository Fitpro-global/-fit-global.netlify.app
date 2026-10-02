const CACHE_NAME = 'fit-global-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/aluno.html',
  '/manifest.json',
  '/icon-512.png',
  '/icon.svg',
  '/treinos.js',
  '/ia-treinos.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});