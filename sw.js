self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-cache-v1').then(cache => {
            return cache.addAll([
                '/',
                // Main Root Directory Stuff
                '/index.html',
                '/style.css',
                '/script.js',
                '/manifest.json',

                // Image Folders
                '/Images/amazing-race.png',



                // Teams
                '/Blue/blue.css',
                '/Blue/blue.html',

                '/Green/green.css',
                '/Green/green.html',

                '/Orange/orange.css',
                '/Orange/orange.html',

                '/Purple/purple.css',
                '/Purple/purple.html',

                '/Yellow/yellow.css',
                '/Yellow/yellow.html',
                
            ]);
        }).catch(error => {
            console.error('Failed to cache', error);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
