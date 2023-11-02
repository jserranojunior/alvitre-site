import {registryCache} from "./pwaRegistryCache";
import {popupInstall} from "./pwaPopupInstall";
import {requestNotify} from "./pwaRequestNotify";
import { layoutNotify } from "./pwaSendNotify";

let swRegistration: ServiceWorkerRegistration | null = null;
let optionsNotify:any

export default () => {
  registryCache().then((sw:any) => {
    swRegistration = sw
    popupInstall();
    requestNotify() 
  });

  const btnSendNotify = document.querySelector(".btn-notify");
  if (btnSendNotify) {
    btnSendNotify.addEventListener("click", () => {
      if(swRegistration){
        optionsNotify = layoutNotify(swRegistration)
        optionsNotify.body = "FUNCIONANDO PASSANDO O PARAMETRO AQUI"
        swRegistration.showNotification("Alvitre",optionsNotify);
      }
    });
  }
};
