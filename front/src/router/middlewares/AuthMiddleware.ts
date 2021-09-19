import  {useAuth}  from "../../modules/auth/use/useAuth";
import {RouteLocationNormalized}  from "vue-router"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthMiddleware = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  async function auth(to: RouteLocationNormalized, _from:RouteLocationNormalized, next:Function) {
    return useAuth()
      .isLogged()
      .then((res) => {
        if (to.name !== "Login" && res) {
          next();
        } else if (to.name !== "Login" && !res) {
          return next({ name: "Login" });
        } else if (to.name === "Login" && res) {
          return next({ name: "Financeiro" });
        } else if (to.name === "Login" && !res) {
          next();
        }
      });
  }
  return { auth };
};
