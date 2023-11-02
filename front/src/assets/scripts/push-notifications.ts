// push-notifications.js

if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker.ready
      .then(registration => {
        subscribeToPush(registration);
      })
      .catch(error => {
        console.error("Erro ao obter o Service Worker pronto:", error);
      });
  }
  
  function subscribeToPush(registration) {
    registration.pushManager
      .subscribe({ userVisibleOnly: true })
      .then(subscription => {
        console.log("Recebido PushSubscription:", JSON.stringify(subscription));
        // Envie 'subscription' para o seu servidor para futuros envios de notificações
      })
      .catch(error => {
        console.error("Erro ao se inscrever para notificações push:", error);
      });
  }
  