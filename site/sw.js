var CACHE_NAME = "v1.9.3";
var urlsToCache = [
  "/",
  "/site/index.html",
  "/site/assets/js/scripts-min.js",
  "/site/assets/css/style-min.css",
  "/site/assets/img/webp/alvitre.webp",
  "/site/sw.js",
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
