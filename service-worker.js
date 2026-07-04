// Service Worker Minimalis agar Syarat PWA Chrome Terpenuhi
const CACHE_NAME = 'imapala-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Biarkan browser melakukan fetch data normal dari Google Apps Script iframe
  event.respondWith(fetch(event.request));
});
