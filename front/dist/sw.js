const cacheName="js13kPWA-v2.3",contentToCache=["/"];self.addEventListener("install",(e=>{console.log("SW START"),e.waitUntil((async()=>{const e=await caches.open(cacheName);await e.addAll(contentToCache)})())})),self.addEventListener("fetch",(e=>{}));
