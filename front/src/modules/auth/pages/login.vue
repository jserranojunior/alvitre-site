<template>
  <div class="flex flex-wrap justify-center pt-16">
    <div class="w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6">
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-auto text-center">
          <img class="img-fluid" width="150" src="@/assets/img/logo_albank.jpeg" alt="" />
        </div>
      </div>
      <div class="text-white text-center">
        <div class="font-bold text-2xl mt-6">Login</div>
        <div class="mt-2">
          <form action="">
            <SInputT
              v-model="loginInputs.cellphone"
              v-maska="'(##) #####-####'"
              class="mt-2 form-tail"
              placeholder="Telefone/Whatsapp ( ) 00000-0000"
            ></SInputT>
            <SInputP
              v-model="loginInputs.password"
              class="mt-2"
              placeholder="Digite sua senha"
            ></SInputP>
          </form>

          <p class="underline text-right text-sm">esqueci minha senha</p>
          <SBtn class="btn-warning-tail" value="Entrar">Entrar</SBtn>
        </div>
      </div>
    </div>
    <div class="w-full text-center text-white">
      <h3 class="text-xl my-7 font-bold">
        Não possui uma conta?
        <router-link to="/cadastro">
          <span class="text-yellow-500 underline cursor-pointer">Cadastre-se</span>
        </router-link>
      </h3>
    </div>
    <div class="w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6">
      <div class="flex flex-wrap row-space justify-center mt-2">
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-2xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fab fa-whatsapp"></i>
              </h5>
            </a>
          </div>
        </div>
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-2xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fab fa-facebook-f"></i>
              </h5>
            </a>
          </div>
        </div>
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-2xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fas fa-map-marker-alt"></i>
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useInstitucional = inject("institucional");
    const { linkWhatsApp } = useInstitucional;

    const useAuth = inject("auth");
    const { loginInputs, auth, Login } = useAuth;

    return { loginInputs, auth, Login, linkWhatsApp };
  },
};
</script>
