const CACHE_NAME = 'static-cache-v1';
const resourcesToCache = [
    // ROOT FOLDER
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    
    '/GractionCamp2024/index.html',
    '/GractionCamp2024/style.css',
    '/GractionCamp2024/script.js',
    '/GractionCamp2024/manifest.json',

    // TO BE CHANGEd ===========================================================
    // IMAGES
    '/GractionCamp2024/Images/amazing-race.png',
    '/Images/amazing-race.png',

    '/GractionCamp2024/Images/finish-flag.png',
    '/Images/finish-flag.png',
    




    // ADMIN STUFFF FOR JONO ===================================================
    '/GractionCamp2024/Teams/Admin/admin.css',
    '/GractionCamp2024/Teams/Admin/admin.html',
    '/GractionCamp2024/Teams/Admin/admin1.html',
    '/GractionCamp2024/Teams/Admin/admin2.html',
    // ADMIN STUFFF FOR JONO ===================================================





    // TEAMS
    
    '/GractionCamp2024/Teams/Admin/admin.css',
    '/GractionCamp2024/Teams/Admin/admin.html',

    '/Teams/Admin/admin.css',
    '/Teams/Admin/admin.html',



    '/GractionCamp2024/Teams/Blue/blue.css',
    '/GractionCamp2024/Teams/Blue/blue.html',

    '/Teams/Blue/blue.css',
    '/Teams/Blue/blue.html',



    '/GractionCamp2024/Teams/Green/green.css',
    '/GractionCamp2024/Teams/Green/green.html',

    '/Teams/Green/green.css',
    '/Teams/Green/green.html',



    '/GractionCamp2024/Teams/Orange/orange.css',
    '/GractionCamp2024/Teams/Orange/orange.html',

    '/Teams/Orange/orange.css',
    '/Teams/Orange/orange.html',



    '/GractionCamp2024/Teams/Purple/purple.css',
    '/GractionCamp2024/Teams/Purple/purple.html',

    '/Teams/Purple/purple.css',
    '/Teams/Purple/purple.html',
    


    '/GractionCamp2024/Teams/Yellow/yellow.css',
    '/GractionCamp2024/Teams/Yellow/yellow.html',
    '/GractionCamp2024/Teams/Yellow/yellowclue1.html',

    '/Teams/Yellow/yellow.css',
    '/Teams/Yellow/yellow.html',
    '/Teams/Yellow/yellowclue1.html',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(resourcesToCache).then(() => {
                console.log('All resources cached successfully');
            }).catch(error => {
                console.error('Failed to cache resources:', error);
            });
        })
    );
});

self.addEventListener('activate', event => {
    const currentCaches = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!currentCaches.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Old caches deleted');
        }).catch(error => {
            console.error('Failed to delete old caches:', error);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                // Optional: Add the response to the cache if it's not already cached
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(error => {
            console.error('Fetch failed:', error);
            throw error;
        })
    );
});
