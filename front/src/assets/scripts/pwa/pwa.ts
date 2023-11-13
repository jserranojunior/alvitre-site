import {registryCache} from "./pwaRegistryCache";
import {popupInstall} from "./pwaPopupInstall";
import {requestNotify} from "./pwaRequestNotify";
import { layoutNotify } from "./pwaSendNotify";
import pwaNotify from "./pwaNotify";

let swRegistration: ServiceWorkerRegistration | null = null;
let optionsNotify:any

export default () => {
  registryCache().then((sw:any) => {
    swRegistration = sw
    popupInstall();
    requestNotify() 
    pwaNotify()
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
