<template>
  <div>
    <div id="header" class="flex flex-wrap justify-center py-8">
      <div class="w-full">
        <div class="mr-auto ml-auto bg-gray-200 rounded-full w-48 h-48 shadow-lg p-1">
          <picture>
            <source :srcset="logo" type="image/webp" />
            <source :srcset="logoPng" type="image/jpeg" />
            <img class="w-auto h-40 ml-auto mr-auto" :src="logo" alt="Logo da Alvitre!" />
          </picture>
        </div>
      </div>
      <div class="w-full">
        <h1 class="text-white text-center text-4xl">Alvitre</h1>
      </div>
      <div class="w-full mt-2">
        <h4 class="text-white text-1xl text-center">DESENVOLVIMENTO</h4>
        <h4 class="text-white text-1xl text-center">SISTEMAS | SITES | APLICATIVOS</h4>
      </div>
      <div class="w-full px-4">
        <div class="flex justify-end">
          <div class="mt-4">
            <div class="div-install-pwa toastNotifications">
              <div
                class="border-blue-700 border-l-4 mx-auto bg-gray-800 shadow-lg rounded-lg hover:bg-gray-900"
              >
                <div class="flex flex-wrap justify-between">
                  <div class="text-sm p-3 btn-install-pwa cursor-pointer">
                    <span class="text-left font-bold">Adicione a tela inicial</span>
                    <div class="toast-body-tail">
                      <div class="text-gray-600 tracking-tight dark:text-gray-200">
                        Disponível para instalação
                      </div>
                    </div>
                  </div>

                  <div class="border-l px-1 cursor-pointer btn-pwa-close">
                    <div class="text-center my-5">
                      <svg
                        class="fill-current hover:text-red-600 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                      >
                        <path
                          class="heroicon-ui"
                          d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Sistemas />
      <Servicos />
      <div class="flex dark:bg-gray-600">
        <div class="sm:w-full md:w-full lg:w-1/2">
          <Developer />
        </div>
        <div class="sm:w-full md:w-full lg:w-1/2 px-2">
          <Tecnologias />
        </div>
      </div>
      <Portfolio />
    </div>
  </div>
</template>

<script>
import Sistemas from "./components/Sistemas.vue";
import Servicos from "./components/Servicos.vue";
import Developer from "./components/Developer.vue";
import Tecnologias from "./components/Tecnologias.vue";

import Portfolio from "./components/Portfolio.vue";

// import { inject, onBeforeMount } from "vue";
import { reactive } from "vue";
import logo from "@/assets/img/logo/webp/alvitre.webp";
import logoPng from "@/assets/img/logo/png/alvitre.png";
export default {
  components: {
    Sistemas,
    Servicos,
    Developer,
    Tecnologias,
    Portfolio,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const state = reactive({ logo, logoPng });
    return { ...state };
  },
};
</script>
<style lang="css">
#header {
  background: #e8008d;
  background: linear-gradient(90deg, #e8008d7a 0, #05c4feb8 47%, #116deb8c 100%);
}
</style>
