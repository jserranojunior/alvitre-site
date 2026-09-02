const cacheName = "js13kPWA-v2.6.5";
const contentToCache = ["/"];

self.addEventListener("install", (event) => {
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
      try {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
  
        const networkResponse = await fetch(event.request);
  
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
          return networkResponse;
        }
  
        const clonedResponse = networkResponse.clone();
        await cache.put(event.request, clonedResponse);
  
        return networkResponse;
      } catch (error) {
        console.error("Erro ao lidar com a solicitação de cache:", error);
        throw error;
      }
    })()
  );
});
