var CACHE_NAME = "v1.2.4";
var urlsToCache = [
  "/",
  "/index.html",
  "/assets/js/scripts-min.js",
  "/assets/css/style-min.css",
  "/assets/img/logo/webp/alvitre.webp",
  "/assets/img/logo/png/alvitre.png",
  "/sw.js",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheResponse) => cacheResponse || fetch(event.request))
  );
});
