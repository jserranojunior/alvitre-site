export function registryCache() {
    return new Promise((resolve, reject) => {
      let swRegistration: ServiceWorkerRegistration | null = null;
  
      if ("serviceWorker" in navigator && "Notification" in window) {
        navigator.serviceWorker.register("sw.js")
          .then((registration) => {
            console.log("Cache registrado com sucesso");
            swRegistration = registration;
            console.log("swRegistration", swRegistration);
            resolve(swRegistration);
          })
          .catch((error) => {
            console.log("Erro ao registrar o cache", error);
            reject(error);
          });
      } else {
        console.log("CLIENTE: O service worker ou notificações não são suportados.");
        reject(new Error("Service Worker ou Notificações não suportados"));
      }
    });
  }