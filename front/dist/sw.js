const cacheName = "js13kPWA-v2.4";
const contentToCache = ["/"];

self.addEventListener("install", (event) => {
  console.log("Service Worker started");
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        const networkResponse = await fetch(event.request);
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === "basic"
        ) {
          const clonedResponse = networkResponse.clone();
          cache.put(event.request, clonedResponse);
        }
        return networkResponse;
      }
    })()
  );
});
