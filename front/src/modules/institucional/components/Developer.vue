<template>
  <div class="sm:w-full md:w-full lg:w-1/2">
    <section id="desenvolvedor" class="section py-6">
      <div class="flex pb-5">
        <div class="w-full justify-center text-center">
          <h2 class="text-2xl text-center">DESENVOLVEDOR</h2>
        </div>
      </div>
      <div class="alvitre-card">
        <div class="flex m-2 justify-center">
          <div class="w-auto shadow-lg p-1 bg-blue-900 text-gray-100">
            <div class="flex flex-wrap justify-center">
              <div class="w-full sm:w-full md:w-1/2 p-1">
                <div class="flex flex-wrap justify-center h-full">
                  <div class="mt-auto mb-auto">
                    <picture class="rounded-full object-none object-center h-64 w-64">
                      <source
                        srcset="./assets/img/desenvolvedor/webp/jorge.webp"
                        type="image/webp"
                      />
                      <source
                        srcset="./assets/img/desenvolvedor/webp/jorge.webp"
                        type="image/jpeg"
                      />
                      <img
                        class="rounded-full h-56 ml-auto mr-auto"
                        src="./assets/img/logo/webp/alvitre.webp"
                        alt="Foto desenvolvedor!"
                      />
                    </picture>
                    <!-- <picture>
                  
                                                          <img class="rounded-full object-none object-center h-64 w-64"
                                                              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
                                                              alt="Img Bio!">
                                                      </picture> -->
                  </div>
                </div>
              </div>
              <div class="w-full sm:w-full md:w-3/6 p-1">
                <div
                  class="rounded w-full p-2 justify-center items-center text-center shadow h-full bg-gray-800 text-gray-100"
                >
                  <div class="text-sm">
                    <h3 class="font-bold text-xl text-center">Jorge Serrano Junior</h3>
                  </div>
                  <div
                    class="flex flex-wrap w-full h-full border-gray-200 pb-1 text-sm items-center"
                  >
                    <div class="w-full">
                      <div class="mb-5 text-center">
                        <p>Desenvolver de sistemas full-stack</p>
                      </div>
                      <div>
                        <p>
                          Fundador da <span class="text-blue-700 font-bold">Alvitre</span>
                        </p>

                        <p>São Paulo - Brasil</p>
                        <br />
                        <p>jorgeserranojunior@hotmail.com</p>
                        <p>www.alvitre.com.br</p>
                      </div>
                    </div>
                    <div
                      class="w-full border-b border-t border-gray-200 m-4 p-2 text-center text-xs"
                    >
                      <a name="github" href="https://github.com/jserranojunior">
                        <button
                          class="bg-purple-800 font-bold text-white rounded p-1"
                          name="github"
                        >
                          Github
                        </button>
                      </a>
                      <a
                        name="linkedin"
                        href="https://www.linkedin.com/in/jorgeserranojunior/"
                      >
                        <button
                          class="bg-green-800 font-bold text-white rounded-sm p-1"
                          name="linkedin"
                        >
                          <i class="fab fa-linkedin"></i>Linkedin
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Developer",
};
</script>
