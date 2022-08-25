const statCache = 'statv1';
const dynCache = 'dynv1';
const statAssets = ['./', './home.html', './wildlife.html', './beaches.html', './heritage.html', './sigiriya.html', './dalada_maligawa.html', './food.html', './contact.html', './fallback.html', './styles/dalada_maligawa.css', './styles/footer.css', './styles/form.css', './styles/form2.css', './styles/general.css', './styles/header.css', './styles/nav.css', './styles/section.css', './styles/sigiriya.css', './styles/fallback.css', 'https://fonts.googleapis.com/css?family=Special+Elite|Rajdhani|Montserrat|Smooch|Rock+Salt|Kaushan+Script|Oxanium', './main.js', './resources/logo/logo.png', './resources/logo/logo_black.png', './resources/logo/logo_grey.png', './resources/logo/logo_white.png', './resources/icons/404.jpg', './resources/icons/facebook.png', './resources/icons/home.png', './resources/icons/instagram.png', './resources/icons/linkedin.png', './resources/icons/question-mark.png', './resources/icons/shopping-cart.png', './resources/icons/telephone.png', './resources/icons/twitter.png', './resources/icons/youtube.png', './resources/images/activities.jpg', './resources/images/ancient-sigiriya.jpg', './resources/images/ancient-sigiriya.webp', './resources/images/arugambay.jpg', './resources/images/arugambay.webp', './resources/images/aurudu-food.jpg', './resources/images/aurudu-food.webp'];

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