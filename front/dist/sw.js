var CACHE_NAME = "v1.3.6",
  urlsToCache = ["/"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE_NAME).then((e) => e.addAll(urlsToCache)));
}),
  self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request).then((s) => s || fetch(e.request)));
  });
