<template>
  <div class="flex flex-wrap justify-between rounded-xl bg-gray-800 p-2">
    <div class="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 p-1">
      <Calendario></Calendario>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 text-right">
      <router-link to="/financeiro/adicionarconta">
        <button
          class="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-1"
        >
          Adicionar Conta
        </button>
      </router-link>
    </div>
  </div>

  <div class="flex flex-wrap mt-1">
    <hr class="border-t border-gray-700 w-full mb-1" />
    <div class="w-full sm:w-full md:w-full lg:w-4/5 bg-gray-600 p-2 rounded-xl">
      <CategoriaContasAPagar></CategoriaContasAPagar>
    </div>
    <div class="w-full sm:w-full md:w-full lg:w-1/5border-l">
      <FeedbackFinanceiro />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

// import AddEditContas from "../components/AddEditContas";
import CategoriaContasAPagar from "../components/CategoriaContasAPagar.vue";
import FeedbackFinanceiro from "../components/FeedbackFinanceiro.vue";
import Calendario from "../components/calendario/Calendario.vue";
export default {
  setup() {},
  components: {
    CategoriaContasAPagar,
    // AddEditContas,
    FeedbackFinanceiro,
    Calendario,
  },
};
</script>
