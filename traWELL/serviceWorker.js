const statCache = 'statv2';
const dynCache = 'dynv1';
const statAssets = ['./', './home.html', './wildlife.html', './beaches.html', './heritage.html', './sigiriya.html', './dalada_maligawa.html', './food.html', './contact.html', './fallback.html', './styles/dalada_maligawa.css', './styles/footer.css', './styles/form.css', './styles/form2.css', './styles/general.css', './styles/header.css', './styles/nav.css', './styles/section.css', './styles/sigiriya.css', './styles/fallback.css', 'https://fonts.googleapis.com/css?family=Special+Elite|Rajdhani|Montserrat|Smooch|Rock+Salt|Kaushan+Script|Oxanium', './scripts/main.js', './resources/logo/logo.png', './resources/logo/logo_black.png', './resources/logo/logo_grey.png', './resources/logo/logo_white.png', './resources/icons/404.jpg', './resources/icons/facebook.png', './resources/icons/home.png', './resources/icons/instagram.png', './resources/icons/linkedin.png', './resources/icons/question-mark.png', './resources/icons/shopping-cart.png', './resources/icons/telephone.png', './resources/icons/twitter.png', './resources/icons/youtube.png', './resources/images/activities.jpg', './resources/images/ancient-sigiriya.jpg', './resources/images/ancient-sigiriya.webp', './resources/images/arugambay.jpg', './resources/images/arugambay.webp', './resources/images/aurudu-food.jpg', './resources/images/aurudu-food.webp', './resources/images/background.jpg', './resources/images/beach_bg.jpg', './resources/images/beach_bg.webp', './resources/images/dalada_2.jpg', './resources/images/dalada_3_3x.jpg', './resources/images/dalada_3.jpg', './resources/images/dalada_maligawa.jpg', './resources/images/dalada_maligawa.webp', './resources/images/dalada_maligawa1.jpg', './resources/images/dalada_maligawa1.webp', './resources/images/dalada_maligawa2.jpg', './resources/images/dalada_maligawa2.webp', './resources/images/dalada_maligawa3.jpg', './resources/images/dalada_maligawa3.webp', './resources/images/dalada.jpg', './resources/images/dambulla-cave-temple.jpg', './resources/images/dambulla-cave-temple.webp', './resources/images/food_bg.jpg', './resources/images/heritage_bg.jpg', './resources/images/heritage_bg.webp', './resources/images/hikkaduwa_bg.jpg', './resources/images/hikkaduwa_bg.webp', './resources/images/hikkaduwa-coral-reef2.jpg', './resources/images/hikkaduwa-coral-reef2.webp', './resources/images/hortanplains_bg.jpg', './resources/images/hortanplains_bg.webp', './resources/images/hortanplains.jpg', './resources/images/hortanplains.webp', './resources/images/main_course.jpg', './resources/images/main_course.webp', './resources/images/merch1.jpg', './resources/images/merch2.jpg', './resources/images/merch3.jpg', './resources/images/merch4.jpg', './resources/images/minneriya_bg.jpg', './resources/images/minneriya_bg.webp', './resources/images/minneriya.jpg', './resources/images/minneriya.webp', './resources/images/mirissa-coast.jpg', './resources/images/mirissa-coast.webp', './resources/images/mt.lavania.jpg', './resources/images/mt.lavania.webp', './resources/images/safaris.jpg', './resources/images/safaris.webp', './resources/images/scuba-diving.jpg', './resources/images/scuba-diving.webp', './resources/images/side_dishes_bg.jpg', './resources/images/side_dishes_bg.webp', './resources/images/sigiriya_bg.jpg', './resources/images/sigiriya.jpg', './resources/images/sigiriya.webp', './resources/images/sigiriya1.jpg', './resources/images/sigiriya1.webp', './resources/images/sigiriya2.jpg', './resources/images/sigiriya2.webp', './resources/images/spices.jpg', './resources/images/spices.webp', './resources/images/surfing.jpg', './resources/images/surfing.webp', './resources/images/table_bg.jpg', './resources/images/table_bg.webp', './resources/images/white-water-rafting.jpg', './resources/images/white-water-rafting.webp', './resources/images/wildlife_bg.jpg', './resources/images/wildlife_bg.webp', './resources/images/wilpattu_bg.jpg', './resources/images/wilpattu.jpg', './resources/images/wilpattu.webp', './resources/images/wilpattu2.jpg', './resources/images/wilpattu2.webp', './resources/images/yala_bg.jpg', './resources/images/yala.jpg', './resources/images/yala.webp', './resources/images/yala2.jpg', './resources/images/yala2.webp'];

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