export default () => {
let swRegistration: ServiceWorkerRegistration | null = null;
      function urlBase64ToUint8Array(base64String:any) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
          .replace(/\-/g, '+')
          .replace(/_/g, '/');
      
        const rawData = atob(base64);
        const outputArray = new Uint8Array(rawData.length);
      
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
      
        return outputArray;
      }
      const applicationServerKey = 'vW3CmWp9VWGrVHHEMZoRR7VoFg2bV6MyABqjz6fzmFQ';
      const convertedKey = urlBase64ToUint8Array(applicationServerKey);
      function registryUserOnServer(){
        console.log(convertedKey)
        // Código de exemplo para enviar o token de notificação para o seu servidor
      navigator.serviceWorker.ready.then(registration => {
      registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey
      })
        .then(subscription => {
          // Enviar subscription.endpoint para o servidor
          console.log('Subscription:', subscription);
        })
        .catch(error => {
          console.error('Erro ao se inscrever:', error);
        });
    });
      }
    }