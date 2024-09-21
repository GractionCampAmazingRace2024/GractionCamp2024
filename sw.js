const CACHE_NAME = 'static-cache-v1';
const resourcesToCache = [
    // ROOT FOLDER
    '/',
    '/GractionCamp2024/',
    '/GractionCamp2024/index.html',
    '/GractionCamp2024/style.css',
    '/GractionCamp2024/stickman.css',
    '/GractionCamp2024/script.js',
    '/GractionCamp2024/manifest.json',

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


    // MP3 and MP4
    '/GractionCamp2024/Teams/Admin/rickrolling.html',
    '/GractionCamp2024/RickRoll/RickRoll.mp4',
    '/GractionCamp2024/Admin/rickroll.css',
    '/GractionCamp2024/SoundEffects/fail.mp3',
    '/GractionCamp2024/SoundEffects/theme.mp3',
    '/GractionCamp2024/SoundEffects/wompwomp.mp3',

    // TEAMS
    '/GractionCamp2024/Teams/Blue/blue.css',
    '/GractionCamp2024/Teams/Blue/blue.html',

    '/GractionCamp2024/Teams/Green/green.css',
    '/GractionCamp2024/Teams/Green/green.html',
    '/GractionCamp2024/Teams/Green/green1.html',
    '/GractionCamp2024/Teams/Green/green2.html',
    '/GractionCamp2024/Teams/Green/green3.html',
    '/GractionCamp2024/Teams/Green/green4.html',

    '/GractionCamp2024/Teams/Orange/orange.css',
    '/GractionCamp2024/Teams/Orange/orange.html',
    '/GractionCamp2024/Teams/Orange/orange1.html',
    '/GractionCamp2024/Teams/Orange/orange2.html',
    '/GractionCamp2024/Teams/Orange/orange3.html',
    '/GractionCamp2024/Teams/Orange/orange4.html',


    '/GractionCamp2024/Teams/Purple/purple.css',
    '/GractionCamp2024/Teams/Purple/purple.html',
    '/GractionCamp2024/Teams/Purple/purple1.html',
    '/GractionCamp2024/Teams/Purple/purple2.html',
    '/GractionCamp2024/Teams/Purple/purple3.html',
    '/GractionCamp2024/Teams/Purple/purple4.html',

    '/GractionCamp2024/Teams/Yellow/yellow.css',
    '/GractionCamp2024/Teams/Yellow/yellow.html',
    '/GractionCamp2024/Teams/Yellow/yellow1.html',
    '/GractionCamp2024/Teams/Yellow/yellow2.html',
    '/GractionCamp2024/Teams/Yellow/yellow3.html',
    '/GractionCamp2024/Teams/Yellow/yellow4.html',
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



// Optional: Handle messages for fullscreen requests
self.addEventListener('message', event => {
    if (event.data && event.data.action === 'requestFullscreen') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'requestFullscreen' });
            });
        });
    }
});
