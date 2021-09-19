import { provide } from "vue";
import { useAuth } from "@/modules/auth/use/useAuth";
import { useInstitucional } from "@/modules/institucional/use/useInstitucional";
import { useFinancial } from "@/modules/financeiro/use/useFinancial";
import useApiConnect from "@/modules/api/use/useApiConnect";

const ApiConnect = new useApiConnect();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Provides = () => {
  provide("financial", useFinancial());
  provide("auth", useAuth());
  provide("apiconnect", ApiConnect);
  provide("institucional", useInstitucional())

};
