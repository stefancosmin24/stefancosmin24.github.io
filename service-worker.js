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
"icon11.png"
];
self.addEventListener("install", function(e) {
console.log("[Service Worker] Install");
e.waitUntil(
caches.open(cacheName).then(function(cache) {
console.log("[Service Worker] Caching files");
return cache.addAll(cacheFiles);
})
);
});