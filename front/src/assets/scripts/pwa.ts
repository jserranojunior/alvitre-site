export default () => {
  const headerHeight = document.querySelector<HTMLDivElement>("#header");
  const toastNotifications = document.querySelector<HTMLDivElement>(
    "#toastNotifications"
  );

  if (toastNotifications && headerHeight) {
    toastNotifications.style.top = `${headerHeight.offsetHeight + 25}px`;
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(
      function () {
        console.log("Registrado com sucesso o pwa, disponível para instalação");
      },
      function () {
        console.log("Problema ao fazer o registros");
      }
    );
  } else {
    console.log("CLIENT: service worker is not supported.");
  }

  let myPrompt: any | Event;
  const pwaAlert = document.querySelector<HTMLDivElement>(".div-install-pwa");
  const btnPWA = document.querySelector(".btn-install-pwa");
  const btnPWAClose = document.querySelector(".btn-pwa-close");

  if (pwaAlert) {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      myPrompt = e;
      pwaAlert.style.display = "block";
    });
  }

  if (btnPWA) {
    btnPWA.addEventListener("click", () => {
      if (pwaAlert) {
        pwaAlert.style.display = "none";
      }

      myPrompt.prompt();
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
