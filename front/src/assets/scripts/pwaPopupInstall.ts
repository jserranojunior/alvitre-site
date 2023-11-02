
export function popupInstall (){


let myPrompt: any;
const btnPWA = document.querySelector(".btn-install-pwa");
const pwaAlert = document.querySelector<HTMLDivElement>(".div-install-pwa");


    
 /*  Verifica se existe o botão para instação e adiciona o evento nele*/
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
 if (btnPWA) {
    console.log("Disponível para instalação")
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
}