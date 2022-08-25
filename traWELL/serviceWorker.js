const statCache = 'statv1';
const dynCache = 'dynv1';
const statAssets = ['https://fonts.googleapis.com/css?family=Special+Elite|Rajdhani|Montserrat|Smooch|Rock+Salt|Kaushan+Script|Oxanium', './', './home.html'];

// install event
self.addEventListener('install', (evt) => {
    console.log("Service Worker installed.");
    evt.waitUntil(
        caches.open(statCache)
        .then((cache) => {
            console.log("caching assets...");
            cache.addAll(statAssets);
        })
    );
});

// activate event
self.addEventListener('activate', (evt) => {
    console.log("Service Worker activated.");
    evt.waitUntil(
        caches.keys()
        .then((keys) => {
            return Promise.all(
                keys.filter(key => key != statCache && key != dynCache)
                .map(key => caches.delete(key))
            );
        })
    );
});

// fetch event handler
self.addEventListener('fetch', (evt) => {
    console.log("Event fetched.", evt);
    evt.respondWith(
        caches.match(evt.request)
        .then((cacheRes) => {
            return cacheRes || fetch(evt.request)
            .then(fetchRes => {
                return caches.open(dynCache)
                .then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                });
            });
        }) 
        .catch(() => {
            if (evt.request.url.indexOf('.html') > -1) {
                return caches.match('./fallback.html')
            };
        })
    );
});