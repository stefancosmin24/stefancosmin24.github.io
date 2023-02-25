var cacheName = "webstore-v1";
var cacheFiles = [
    "Coursework1.html",
    //"products.js",
    "icons-192.png",
    "icons-512.png",
    "icon.png",
    "icon2.png",
    "icon3.png",
    "icon4.png",
    "icon5.png",
    "icon6.png",
    "icon7.png",
    "icon8.png",
    "icon9.png",
    "icon10.png",
    "icon11.png",
    "fetch-server.js",
    "shopping cart.png"
];
self.addEventListener("install", function (e) {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log("[Service Worker] Caching files");
            return cache.addAll(cacheFiles);
        })
    );
});
self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (cachedFile) {
            //download the file if it is not in the cache
            if (cachedFile) {
                console.log("[Service Worker] Resource fetched from the cache for: " + e.request.url);
                return cachedFile;
            } else {
                return fetch(e.request).then(function (response) {
                    return caches.open(cacheName).then(function (cache) {
                        //add the new file to the cache
                        cache.put(e.request, response.clone());
                        console.log("[Service Worker] Resource fetched and saved in the cache for: " +
                            e.request.url);
                        return response;
                    });
                });
            }
        })
    );
});