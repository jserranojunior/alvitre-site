const cacheName = "js13kPWA-v1";
const contentToCache = ["/"];

/* self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE_NAME).then((e) => e.addAll(urlsToCache)));
}),
  self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request).then((s) => s || fetch(e.request)));
  });
 */

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(contentToCache);
    })()
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
