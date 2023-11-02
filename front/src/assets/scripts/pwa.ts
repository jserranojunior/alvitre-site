export default () => {

  let myPrompt: any;
  let swRegistration: ServiceWorkerRegistration | null = null;


  if ("serviceWorker" in navigator && "Notification" in window) {
    navigator.serviceWorker.register("sw.js")
      .then((registration) => {
        console.log("Cache registrado com sucesso, disponível para instalação");
        swRegistration = registration;
      })
      .catch(() => {
        console.log("Erro ao registrar o cache");
      });
  } else {
    console.log("CLIENTE: O service worker ou notificações não são suportados.");
  }

   /* Altura da notificação*/
  const headerHeight = document.querySelector<HTMLDivElement>("#header");
  const toastNotifications = document.querySelector<HTMLDivElement>("#toastNotifications");

  if (toastNotifications && headerHeight) {
    toastNotifications.style.top = `${headerHeight.offsetHeight + 25}px`;
  }
  /* ##################### */


 /*  Verifica se existe o botão para instação e adiciona o evento nele*/
  const pwaAlert = document.querySelector<HTMLDivElement>(".div-install-pwa");
  if (pwaAlert) {
    const beforeInstallPromptHandler = (e: Event) => {
      e.preventDefault();
      myPrompt = e;
      pwaAlert.style.display = "block";
    };
    window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler);
  }
  /* ##################### */


 /* Ao clicar ele exibe a tela de instatação e oculta o botão*/
  const btnPWA = document.querySelector(".btn-install-pwa");
  if (btnPWA) {
    btnPWA.addEventListener("click", () => {
      if (pwaAlert) {
        pwaAlert.style.display = "none";
      }
      if (myPrompt) {
        myPrompt.prompt();
      }
    });
  }
  /* ##################### */

 /* Cancela a instalação e oculta o botão*/
  const btnPWAClose = document.querySelector(".btn-pwa-close");
  if (btnPWAClose) {
    btnPWAClose.addEventListener("click", () => {
      if (pwaAlert) {
        pwaAlert.style.display = "none";
      }
    });
  }
   /* ##################### */


    /* Adicionar código para solicitar permissões de notificação */
  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Permissão de notificação concedida");

  showNotification();
      } else {
        console.log("Permissão de notificação negada");
      }
    } catch (error) {
      console.error("Erro ao solicitar permissão de notificação:", error);
    }
  };

  // Chamar a função acima em algum ponto do seu código, por exemplo, quando a página carrega.
  requestNotificationPermission();


  function showNotification (){
    console.log("functionandio")
    if (swRegistration) {
/*       const options = {
        body: "Agradecemos pela inscrição",
        icon: "/static/logo/png/alvitre.png",
      }; */

      const options = {
        body: 'Bem-vindo ao nosso serviço!',
        icon: '/static/logo/png/alvitre.png',
        image: '/static/logo/png/logo-alvitre-dark-mode-retangulo-arrendodado.png',
        badge: '/static/logo/png/logo-circulo-de-fundo.png',
        actions: [
          { action: 'close', title: 'Fechar' }
        ],
        requireInteraction: true,
        silent: false,
        timestamp: Date.now()
      };
      
  
      swRegistration.showNotification("Obrigado por se inscrever", options);
    }
  };


};
