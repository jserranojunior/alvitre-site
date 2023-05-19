export default () => {
  const headerHeight = document.querySelector<HTMLDivElement>("#header");
  const toastNotifications = document.querySelector<HTMLDivElement>("#toastNotifications");

  if (toastNotifications && headerHeight) {
    toastNotifications.style.top = `${headerHeight.offsetHeight + 25}px`;
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(() => {
        console.log("PWA registrado com sucesso, disponível para instalação");
      })
      .catch(() => {
        console.log("Erro ao registrar o PWA");
      });
  } else {
    console.log("CLIENTE: O service worker não é suportado.");
  }

  let myPrompt: any;
  const pwaAlert = document.querySelector<HTMLDivElement>(".div-install-pwa");
  const btnPWA = document.querySelector(".btn-install-pwa");
  const btnPWAClose = document.querySelector(".btn-pwa-close");

  if (pwaAlert) {
    const beforeInstallPromptHandler = (e: Event) => {
      e.preventDefault();
      myPrompt = e;
      pwaAlert.style.display = "block";
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler);
  }

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

  if (btnPWAClose) {
    btnPWAClose.addEventListener("click", () => {
      if (pwaAlert) {
        pwaAlert.style.display = "none";
      }
    });
  }
};
