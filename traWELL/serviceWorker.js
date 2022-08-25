const statCache = 'statv1';
const dynCache = 'dynv1';
const statAssets = ['/CB010434/traWELL/home.html', '/CB010434/traWELL/wildlife.html', '/CB010434/traWELL/beaches.html', '/CB010434/traWELL/heritage.html', '/CB010434/traWELL/sigiriya.html', '/CB010434/traWELL/dalada_maligawa.html', '/CB010434/traWELL/food.html', '/CB010434/traWELL/contact.html', '/CB010434/traWELL/fallback.html', '/CB010434/traWELL/styles/dalada_maligawa.css', '/CB010434/traWELL/styles/footer.css', '/CB010434/traWELL/styles/form.css', '/CB010434/traWELL/styles/form2.css', '/CB010434/traWELL/styles/general.css', '/CB010434/traWELL/styles/header.css', '/CB010434/traWELL/styles/nav.css', '/CB010434/traWELL/styles/section.css', '/CB010434/traWELL/styles/sigiriya.css', '/CB010434/traWELL/styles/fallback.css', '/CB010434/traWELL/main.js', '/CB010434/traWELL/resources/logo/logo.png', '/CB010434/traWELL/resources/logo/logo_black.png', '/CB010434/traWELL/resources/logo/logo_grey.png', '/CB010434/traWELL/resources/logo/logo_white.png', '/CB010434/traWELL/resources/icons/404.jpg', '/CB010434/traWELL/resources/icons/facebook.png', '/CB010434/traWELL/resources/icons/home.png', '/CB010434/traWELL/resources/icons/instagram.png', '/CB010434/traWELL/resources/icons/linkedin.png', '/CB010434/traWELL/resources/icons/question-mark.png', '/CB010434/traWELL/resources/icons/shopping-cart.png', '/CB010434/traWELL/resources/icons/telephone.png', '/CB010434/traWELL/resources/icons/twitter.png', '/CB010434/traWELL/resources/icons/youtube.png', '/CB010434/traWELL/resources/images/activities.jpg', '/CB010434/traWELL/resources/images/ancient-sigiriya.jpg', '/CB010434/traWELL/resources/images/ancient-sigiriya.webp', '/CB010434/traWELL/resources/images/arugambay.jpg', '/CB010434/traWELL/resources/images/arugambay.webp', '/CB010434/traWELL/resources/images/aurudu-food.jpg', '/CB010434/traWELL/resources/images/aurudu-food.webp', '/CB010434/traWELL/resources/images/background.jpg', '/CB010434/traWELL/resources/images/beach_bg.jpg', '/CB010434/traWELL/resources/images/beach_bg.webp', '/CB010434/traWELL/resources/images/dalada_2.jpg', '/CB010434/traWELL/resources/images/dalada_3_3x.jpg', '/CB010434/traWELL/resources/images/dalada_3.jpg', '/CB010434/traWELL/resources/images/dalada_maligawa.jpg', '/CB010434/traWELL/resources/images/dalada_maligawa.webp', '/CB010434/traWELL/resources/images/dalada_maligawa1.jpg', '/CB010434/traWELL/resources/images/dalada_maligawa1.webp', '/CB010434/traWELL/resources/images/dalada_maligawa2.jpg', '/CB010434/traWELL/resources/images/dalada_maligawa2.webp', '/CB010434/traWELL/resources/images/dalada_maligawa3.jpg', '/CB010434/traWELL/resources/images/dalada_maligawa3.webp', '/CB010434/traWELL/resources/images/dalada.jpg', '/CB010434/traWELL/resources/images/dambulla-cave-temple.jpg', '/CB010434/traWELL/resources/images/dambulla-cave-temple.webp', '/CB010434/traWELL/resources/images/food_bg.jpg', '/CB010434/traWELL/resources/images/heritage_bg.jpg', '/CB010434/traWELL/resources/images/heritage_bg.webp', '/CB010434/traWELL/resources/images/hikkaduwa_bg.jpg', '/CB010434/traWELL/resources/images/hikkaduwa_bg.webp', '/CB010434/traWELL/resources/images/hikkaduwa-coral-reef2.jpg', '/CB010434/traWELL/resources/images/hikkaduwa-coral-reef2.webp', '/CB010434/traWELL/resources/images/hortanplains_bg.jpg', '/CB010434/traWELL/resources/images/hortanplains_bg.webp', '/CB010434/traWELL/resources/images/hortanplains.jpg', '/CB010434/traWELL/resources/images/hortanplains.webp', '/CB010434/traWELL/resources/images/main_course.jpg', '/CB010434/traWELL/resources/images/main_course.webp', '/CB010434/traWELL/resources/images/merch1.jpg', '/CB010434/traWELL/resources/images/merch2.jpg', '/CB010434/traWELL/resources/images/merch3.jpg', '/CB010434/traWELL/resources/images/merch4.jpg', '/CB010434/traWELL/resources/images/minneriya_bg.jpg', '/CB010434/traWELL/resources/images/minneriya_bg.webp', '/CB010434/traWELL/resources/images/minneriya.jpg', '/CB010434/traWELL/resources/images/minneriya.webp', '/CB010434/traWELL/resources/images/mirissa-coast.jpg', '/CB010434/traWELL/resources/images/mirissa-coast.webp', '/CB010434/traWELL/resources/images/mt.lavania.jpg', '/CB010434/traWELL/resources/images/mt.lavania.webp', '/CB010434/traWELL/resources/images/safaris.jpg', '/CB010434/traWELL/resources/images/safaris.webp', '/CB010434/traWELL/resources/images/scuba-diving.jpg', '/CB010434/traWELL/resources/images/scuba-diving.webp', '/CB010434/traWELL/resources/images/side_dishes_bg.jpg', '/CB010434/traWELL/resources/images/side_dishes_bg.webp', '/CB010434/traWELL/resources/images/sigiriya_bg.jpg', '/CB010434/traWELL/resources/images/sigiriya.jpg', '/CB010434/traWELL/resources/images/sigiriya.webp', '/CB010434/traWELL/resources/images/sigiriya1.jpg', '/CB010434/traWELL/resources/images/sigiriya1.webp', '/CB010434/traWELL/resources/images/sigiriya2.jpg', '/CB010434/traWELL/resources/images/sigiriya2.webp', '/CB010434/traWELL/resources/images/spices.jpg', '/CB010434/traWELL/resources/images/spices.webp', '/CB010434/traWELL/resources/images/surfing.jpg', '/CB010434/traWELL/resources/images/surfing.webp', '/CB010434/traWELL/resources/images/table_bg.jpg', '/CB010434/traWELL/resources/images/table_bg.webp', '/CB010434/traWELL/resources/images/white-water-rafting.jpg', '/CB010434/traWELL/resources/images/white-water-rafting.webp', '/CB010434/traWELL/resources/images/wildlife_bg.jpg', '/CB010434/traWELL/resources/images/wildlife_bg.webp', '/CB010434/traWELL/resources/images/wilpattu_bg.jpg', '/CB010434/traWELL/resources/images/wilpattu.jpg', '/CB010434/traWELL/resources/images/wilpattu.webp', '/CB010434/traWELL/resources/images/wilpattu2.jpg', '/CB010434/traWELL/resources/images/wilpattu2.webp', '/CB010434/traWELL/resources/images/yala_bg.jpg', '/CB010434/traWELL/resources/images/yala.jpg', '/CB010434/traWELL/resources/images/yala.webp', '/CB010434/traWELL/resources/images/yala2.jpg', '/CB010434/traWELL/resources/images/yala2.webp', 'https://fonts.googleapis.com/css?family=Special+Elite|Rajdhani|Montserrat|Smooch|Rock+Salt|Kaushan+Script|Oxanium'];

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