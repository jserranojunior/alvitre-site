<template>
       <section id="header">
      <header>
        <div
          class="flex flex-wrap sm:justify-center md:justify-between px-4 header mx-0 md:mx-8"
        >
          <nav class="navbar">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"></path>
                  </svg>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li><a href="/#header"> Inicio</a></li>

                  <li><a href="/#sistemas"> Sistemas</a></li>
                  <li><a href="/#servicos"> Serviços</a></li>
                  <li>
                    <a href="/#tecnologias"> Tecnologias</a>
                  </li>
                  <li>
                    <a href="https://alvitre.com.br#desenvolvedor">
                      Desenvolvedor
                    </a>
                  </li>

                  <li><a href="/#portfolio"> Portfólio</a></li>
                </ul>
              </div>
              <div class="btn btn-ghost normal-case text-xl">
                <img
                  width="50"
                  height="50"
                  class="mr-4"
                  src="/static/logo/webp/alvitre.webp"
                  alt="Logo da Alvitre!"
                />
                Alvitre
              </div>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li><a href="/#header"> Inicio</a></li>

                <li><a href="/#sistemas"> Sistemas</a></li>
                <li><a href="/#servicos"> Serviços</a></li>
                <li>
                  <a href="/#tecnologias"> Tecnologias</a>
                </li>
                <li>
                  <a href="https://alvitre.com.br#desenvolvedor">
                    Desenvolvedor
                  </a>
                </li>

                <li><a href="/#portfolio"> Portfólio</a></li>
              </ul>
            </div>
            <div class="navbar-end">
              <a
                id="whatsapp"
                href="https://web.whatsapp.com/send?phone=5511946439695"
                target="__blank"
                class="btn btn-outline border">Contato</a
              >
            </div>
          </nav>
        
        </div>
      </header>
    </section>
</template>