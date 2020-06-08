var CACHE_NAME = "v1.7";
var urlsToCache = [
  "/alvitre/",
  "/alvitre/index.html",
  "/alvitre/js/scripts.js",
  "/alvitre/js/portfolio.js",
  "/alvitre/css/style.css",
  "/alvitre/images/alvitre.webp",
  "/alvitre/sw.js",
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
