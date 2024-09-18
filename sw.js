const CACHE_VERSION = 2;  // Increment this whenever you make significant changes to cache
const CACHE_NAME = `static-cache-v${CACHE_VERSION}`; // Dynamic cache name with versioning

const resourcesToCache = [
    // ROOT FOLDER
    '/GractionCamp2024/',
    '/GractionCamp2024/index.html',
    '/GractionCamp2024/style.css',
    '/GractionCamp2024/script.js',
    '/GractionCamp2024/manifest.webmanifest',

    // IMAGES
    '/GractionCamp2024/Images/amazing-race.png',
    '/GractionCamp2024/Images/android-chrome-192x192.png',
    '/GractionCamp2024/Images/android-chrome-512x512.png',
    '/GractionCamp2024/Images/apple-touch-icon.png',
    '/GractionCamp2024/Images/favicon-16x16.png',
    '/GractionCamp2024/Images/favicon-32x32.png',
    '/GractionCamp2024/Images/favicon.ico',

    // ADMIN STUFF
    '/GractionCamp2024/Teams/Admin/admin.css',
    '/GractionCamp2024/Teams/Admin/admin.html',
    '/GractionCamp2024/Teams/Admin/admin1.html',
    '/GractionCamp2024/Teams/Admin/admin2.html',

    // TEAMS
    '/GractionCamp2024/Teams/Blue/blue.css',
    '/GractionCamp2024/Teams/Blue/blue.html',
    '/GractionCamp2024/Teams/Green/green.css',
    '/GractionCamp2024/Teams/Green/green.html',
    '/GractionCamp2024/Teams/Orange/orange.css',
    '/GractionCamp2024/Teams/Orange/orange.html',
    '/GractionCamp2024/Teams/Purple/purple.css',
    '/GractionCamp2024/Teams/Purple/purple.html',
    '/GractionCamp2024/Teams/Yellow/yellow.css',
    '/GractionCamp2024/Teams/Yellow/yellow.html',
    '/GractionCamp2024/Teams/Yellow/yellowclue1.html',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            // Delete all caches that don't match the current CACHE_NAME
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log(`Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Open the new cache and add all resources to it
            return caches.open(CACHE_NAME).then(cache => {
                return cache.addAll(resourcesToCache).then(() => {
                    console.log(`All resources cached in ${CACHE_NAME}`);
                }).catch(error => {
                    console.error('Failed to cache resources:', error);
                });
            });
        }).then(() => {
            return self.skipWaiting();  // Activate the new service worker immediately
        })
    );
});

self.addEventListener('activate', event => {
    // Ensure the clients are controlled immediately by the new service worker
    event.waitUntil(
        self.clients.claim()
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                // Serve from cache if available
                return response;
            }
            // Otherwise fetch from network
            return fetch(event.request).then(fetchResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());  // Add the fetched resource to cache
                    return fetchResponse;
                });
            }).catch(error => {
                console.error('Fetch failed:', error);
                throw error;
            });
        })
    );
});
