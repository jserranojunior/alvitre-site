import { reactive, toRefs } from "vue";
import { datePtBrToUs } from "../../../helpers/dates/helpersDates";
// import { money } from "@/helpers/filters/filters";
import { useRouter } from 'vue-router'

import useHttpFinancial from "./useHttpFinancial";
const HttpFinancial = new useHttpFinancial();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useFinancial = () => {
   const router = useRouter()
const state = reactive({
  categoriaContas: {},
  editarContaAPagar: {},
  Calendario: {
    selectedDate: datePtBrToUs(
      new Date().toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    ),
  },
  ContaAPagar: {
    ValoresContasAPagar: { valor: 0, data_pagamento: "" },
    categorias_contas_a_pagar_id: 0,
    favorecido: "" ,
    inicio_data_pagamento: "",
    fim_data_pagamento: "",
       forma_pagamento: "",
    tipo_conta: ""
  },
  editAddMode: { mode: "" },
  dataAtual: datePtBrToUs(
    new Date().toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  ),
  err: "",
});

function getCategoriaContas() {
  if (state.Calendario.selectedDate) {
    const Financial = HttpFinancial.get(state.Calendario.selectedDate);
    Financial.then((res) => {
      if (res && res.data.data) {
        state.categoriaContas = res.data.data;
      }
    });
  }
}
function filtersBillsToPay() {
    if(typeof (state.ContaAPagar.categorias_contas_a_pagar_id) == "string"){

  state.ContaAPagar.categorias_contas_a_pagar_id = parseInt(
    state.ContaAPagar.categorias_contas_a_pagar_id
  );
    }
 

  if(typeof (state.ContaAPagar.ValoresContasAPagar.valor) == "string"){
 state.ContaAPagar.ValoresContasAPagar.valor = parseFloat(
    state.ContaAPagar.ValoresContasAPagar.valor
  );
  }
  if (state.Calendario.selectedDate) {
    state.ContaAPagar.ValoresContasAPagar.data_pagamento =
      state.Calendario.selectedDate;
  }
}
function setDataCalendario(data: string) {
  if (data) {
    state.Calendario.selectedDate = data;
    getCategoriaContas();
  }
}
function makeBillPayment(id: number) {
  const data = {
    contas_a_pagar_id: id,
    data_pagamento: state.Calendario.selectedDate,
  };
  const Financial = HttpFinancial.storePaidAccount(data);
  Financial.then(() => {
    getCategoriaContas();
    return true;
  });
}
function deleteBillPayment(id: number) {
  const Financial = HttpFinancial.deletePaidAccount(id);
  Financial.then(() => {
    getCategoriaContas();
    return true;
  });
}
async function editBillsToPay(id: number) {
  if (!id) {
    router.push("/financeiro");
  }
  if(state.Calendario.selectedDate){
      const Financial = HttpFinancial.edit(id, state.Calendario.selectedDate);
  Financial.then((res) => {
    if(res){
 state.ContaAPagar = res.data.data[0];
    return true;
    }   
  });
  }

}
async function storeBillsToPay() {
  if (
    !state.ContaAPagar.favorecido ||
    !state.ContaAPagar.inicio_data_pagamento
  ) {
    state.err = "Campos Vazios";
  } else {
    filtersBillsToPay();
   const Financial = HttpFinancial
      .store(state.ContaAPagar)
      Financial.then((res) => {
        getCategoriaContas();
        router.push("/financeiro");
        return res;
      });
  }
}
function updateBillsToPay() {
  if (
    !state.ContaAPagar.favorecido ||
    !state.ContaAPagar.inicio_data_pagamento
  ) {
    state.err = "Campos Vazios";
  } else {

    filtersBillsToPay();
      console.log( typeof (state.ContaAPagar.ValoresContasAPagar.valor))

       const Financial = HttpFinancial
      .update(state.ContaAPagar)
     Financial .then((res) => {
        getCategoriaContas();
        router.push("/financeiro");
        return res;
      });
  }
}
function addBillsToPay() {
  state.ContaAPagar = {  
    ValoresContasAPagar: { valor: 0, data_pagamento: "" },
    categorias_contas_a_pagar_id: 0,
    favorecido: "" ,
    inicio_data_pagamento: "",
    fim_data_pagamento: "",
    forma_pagamento: "",
    tipo_conta: ""
  }
  state.ContaAPagar.ValoresContasAPagar.valor = 0;
if(state.dataAtual){
  state.ContaAPagar.inicio_data_pagamento = state.dataAtual;
state.ContaAPagar.fim_data_pagamento = state.dataAtual;
}
  
  state.ContaAPagar.forma_pagamento = "Cartão";
  state.ContaAPagar.tipo_conta = "Extra";
  state.ContaAPagar.categorias_contas_a_pagar_id = 2;
}
async function setEditAddMode(mode: string) {
  state.editAddMode.mode = mode;
  return mode;
}

  return {
    ...toRefs(state),
    getCategoriaContas,
    setDataCalendario,
    makeBillPayment,
    deleteBillPayment,
    editBillsToPay,
    storeBillsToPay,
    addBillsToPay,
    updateBillsToPay,
    setEditAddMode,
  };
};


// const editApi = {
//   ID: 91,
//   CreatedAt: "2020-11-14T00:00:00Z",
//   UpdatedAt: "2021-02-17T19:32:10.019Z",
//   DeletedAt: null,
//   user_id: 49,
//   categorias_contas_a_pagar_id: 1,
//   favorecido: "Teste 2",
//   inicio_data_pagamento: "2020-11-14",
//   fim_data_pagamento: "2021-02-18",
//   descricao: "TA ROLANDO A BIND",
//   forma_pagamento: "Dinheiro",
//   tipo_conta: "Fixa",
//   parcelas: "",
//   ValoresContasAPagar: {
//     ID: 126,
//     CreatedAt: "2021-02-17T19:32:10.017Z",
//     UpdatedAt: "2021-02-17T19:32:10.017Z",
//     DeletedAt: null,
//     contas_a_pagar_id: 91,
//     data_pagamento: "2020-02-15",
//     valor: 114,
//   },
//   ContasPagas: {
//     ID: 153,
//     CreatedAt: "2021-02-15T13:27:51.434Z",
//     UpdatedAt: "2021-02-15T13:27:51.434Z",
//     DeletedAt: null,
//     contas_a_pagar_id: 91,
//     data_pagamento: "2021-02-15",
//   },
// };