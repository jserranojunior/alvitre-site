import useApiConnect from "../../../modules/api/use/useApiConnect";
import {AxiosResponse} from "axios";
const ApiConnect = new useApiConnect();

class useHttpFinancial {
    async  get(dataSelecionada: string) :Promise<void | AxiosResponse>{
    const urlApi = `/financial/viewcategories/${dataSelecionada}`;
      return await ApiConnect.get(urlApi).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }
    async  edit(id: number, dataSelecionada: string) :Promise<void | AxiosResponse> {
    const urlApi = `/financial/editbills/${id}/${dataSelecionada}`;
          return await ApiConnect.get(urlApi).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  async store(data:Record<string, unknown>) :Promise<void | AxiosResponse> {
    const urlApi = `/financial/billstopay`;
        return await ApiConnect.post(urlApi, data).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async update(data:Record<string, any>):Promise<void | AxiosResponse>  {
    const urlApi = `/financial/billstopay/${data.ID}/${data.ValoresContasAPagar.data_pagamento}`;
          return await ApiConnect.put(urlApi, data).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  async storePaidAccount(data:Record<string, unknown>):Promise<void | AxiosResponse> {
    const urlApi = `/financial/paidbills`;
       return await ApiConnect.post(urlApi, data).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  async deletePaidAccount(data:number):Promise<void | AxiosResponse>{
    const urlApi = `/financial/paidbills/${data}`;
       return await ApiConnect.delet(urlApi).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }
}

export default useHttpFinancial

//   return { get, edit, store, update, storePaidAccount, deletePaidAccount };
// };
