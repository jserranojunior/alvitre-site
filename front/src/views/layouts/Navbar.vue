<template>
  <header>
    <div class="flex flex-wrap sm:justify-center md:justify-between my-2 px-4 header">
      <div class="w-full sm:w-full md:w-auto lg:auto text-center md:text-left">
        <nav class="align-middle flex">
          <span class="block lg:hidden">
            <button
              onclick="togleMenu()"
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-white active:border-0"
            >
              <svg
                class="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </span>
          <span id="main-menu" class="mt-1 hidden lg:block">
            <a name="inicio" href="#header" class="nav-item mx-4 mt-4 text-dark">
              Inicio
            </a>
            <a name="sistemas" href="#sistemas" class="nav-item mx-4 mt-4 text-dark">
              Sistemas
            </a>
            <a name="servicos" href="#servicos" class="nav-item mx-4 mt-4 text-dark">
              Serviços
            </a>
            <a
              name="tecnologias"
              href="#tecnologias"
              class="nav-item mx-4 mt-4 text-dark"
            >
              Tecnologias
            </a>
            <a
              name="desenvolvedor"
              href=" #desenvolvedor"
              class="nav-item mx-4 mt-4 text-dark"
            >
              Desenvolvedor
            </a>

            <a name="portfolio" href="#portfolio" class="nav-item mx-4 mt-4 text-dark">
              Portfólio
            </a>

            <a
              id="whatsapp"
              href="https://web.whatsapp.com/send?phone=5511946439695"
              class="nav-item mx-4 mt-4 text-dark whatsapp"
            >
              <span class="icon is large text-green-600">
                <i class="fab fa-1x fa-whatsapp"></i>
              </span>
              Contato
            </a>
          </span>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
