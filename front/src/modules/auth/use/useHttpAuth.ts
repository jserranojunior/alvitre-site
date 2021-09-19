import useApiConnect from "../../api/use/useApiConnect";
import { AxiosResponse } from "axios";
const ApiConnect = new useApiConnect();
class useHttpAuth {
  async login(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const urlApi = "/login";
    return await ApiConnect.postWithoutToken(urlApi, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
        console.log(err);
      });
  }

  async register(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const urlApi = "/user";

    return ApiConnect.postWithoutToken(urlApi, data);
  }
}

export default useHttpAuth;

// export const useHttpAuth = () => {

//   return { login };
// };
