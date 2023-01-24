const cacheName = "js13kPWA-v2.2";
const contentToCache = ["/"];

/* self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE_NAME).then((e) => e.addAll(urlsToCache)));
}),
  self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request).then((s) => s || fetch(e.request)));
  });
 */

self.addEventListener("install", (e) => {
  console.log("SW START");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })()
  );
});

self.addEventListener("fetch", (e) => {});
