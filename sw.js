self.addEventListener('install', event => {
    const resourcesToCache = [

        // ROOT FOLDER
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/manifest.json',


        // IMAGES
        '/Images/amazing-race.png',  



        // TEAMS

        '/Teams/Blue/blue.css',
        '/Teams/Blue/blue.html',


        '/Teams/Green/green.css',
        '/Teams/Green/green.html',


        '/Teams/Orange/orange.css',
        '/Teams/Orange/orange.html',


        '/Teams/Purple/purple.css',
        '/Teams/Purple/purple.html',


        '/Teams/Yellow/yellow.css',
        '/Teams/Yellow/yellow.html',
        '/Teams/Yellow/yellowclue1.html',


    ];

    event.waitUntil(
        caches.open('static-cache-v1').then(cache => {
            return Promise.all(
                resourcesToCache.map(resource => {
                    return cache.add(resource).then(() => {
                        console.log(`Cached successfully: ${resource}`);
                    }).catch(error => {
                        console.error(`Failed to cache: ${resource}`, error);
                    });
                })
            );
        }).catch(error => {
            console.error('Cache opening failed:', error);
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
