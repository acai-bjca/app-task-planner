importScripts('/cache-polyfill.js');

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('app-task-planner').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.html?homescreen=1',
                '/?homescreen=1',
                '/index.js',
                '/favicon.ico',
                '/manifest.json',
                '/App.js',
                '/App.css'
            ]);
        })
    );
});


self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});