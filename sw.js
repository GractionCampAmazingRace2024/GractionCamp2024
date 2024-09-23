const CACHE_NAME = 'static-cache-v1';
const resourcesToCache = [
    // ROOT FOLDER
    '/',
    '/GractionCamp2024/',
    '/GractionCamp2024/index.html',
    '/GractionCamp2024/manifest.json',
    '/GractionCamp2024/script.js',
    '/GractionCamp2024/style.css',
    

    '/GractionCamp2024/RickRolled/rickRoll.mp4',
    '/GractionCamp2024/RickRolled/rickRoll.css',

    // Audio
    '/GractionCamp2024/Audio/blueDaBaDee.mp3',
    '/GractionCamp2024/Audio/byebyebye.mp3',
    '/GractionCamp2024/Audio/fail.mp3',
    '/GractionCamp2024/Audio/greenEggs.mp3',
    '/GractionCamp2024/Audio/miiShop.mp3',
    '/GractionCamp2024/Audio/miiTheme.mp3',
    '/GractionCamp2024/Audio/orangeSky.mp3',
    '/GractionCamp2024/Audio/purple.mp3',
    '/GractionCamp2024/Audio/theme.mp3',
    '/GractionCamp2024/Audio/theme1.mp3',
    '/GractionCamp2024/Audio/theme2.mp3',
    '/GractionCamp2024/Audio/trumpetwomp.mp3',
    '/GractionCamp2024/Audio/unlock.mp3',
    // '/GractionCamp2024/Audio/yellowBow.mp3',
    // '/GractionCamp2024/Audio/yellowMellow.mp3',
    '/GractionCamp2024/Audio/yellowSub.mp3',


    // CSS
    '/GractionCamp2024/CSS/admin.css',
    '/GractionCamp2024/CSS/blue.css',
    '/GractionCamp2024/CSS/green.css',
    '/GractionCamp2024/CSS/loader.css',
    '/GractionCamp2024/CSS/orange.css',
    '/GractionCamp2024/CSS/purple.css',

    '/GractionCamp2024/CSS/stickman.css',
    '/GractionCamp2024/CSS/yellow.css',



    // IMAGES
    '/GractionCamp2024/Images/amazing-race.png',
    '/GractionCamp2024/Images/android-chrome-192x192.png',
    '/GractionCamp2024/Images/android-chrome-512x512.png',
    '/GractionCamp2024/Images/apple-touch-icon.png',
    '/GractionCamp2024/Images/favicon-16x16.png',
    '/GractionCamp2024/Images/favicon-32x32.png',
    '/GractionCamp2024/Images/favicon.ico',

    
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
