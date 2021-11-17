<template>
  <section id="portfolio" class="bg-gray-800">
    <div class="flex pb-4 pt-8">
      <div class="w-full justify-center text-center">
        <h2 class="text-2xl text-center">Sites</h2>
      </div>
    </div>

    <div class="flex flex-wrap flex-portfolio m-4">
      <div
        v-for="portfolio in portfolios"
        :key="portfolio.nome"
        :class="`w-full sm:w-full md:w-1/5 p-2  portfolio ${portfolio.tipo}`"
      >
        <div class="painel p-1 m-2 shadow-inner rounded-lg bg-gray-700">
          <div class="painel-content">
            <picture>
              <source :srcset="portfolio.webp" type="image/webp" />
              <source :srcset="portfolio.png" type="image/png" />
              <img class="rounded-lg" :src="portfolio.png" :alt="portfolio.nome" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      webpSupported: true,
      portfolios: [
        {
          nome: "lsstar",
          webp: "./src/assets/img/portfolio/thumbnail/webp/lsstar.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/lsstar.png",
          tipo: "site",
        },
        {
          nome: "abcp",
          webp: "./src/assets/img/portfolio/thumbnail/webp/abcp.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/abcp.png",
          tipo: "site",
        },
        {
          nome: "ajz",
          webp: "./src/assets/img/portfolio/thumbnail/webp/ajz.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/ajz.png",
          tipo: "blog",
        },
        {
          nome: "bella",
          webp: "./src/assets/img/portfolio/thumbnail/webp/bella.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/bella.png",
          tipo: "blog",
        },
        {
          nome: "bressan",
          webp: "./src/assets/img/portfolio/thumbnail/webp/bressan.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/bressan.png",
          tipo: "site",
        },
        {
          nome: "casadelpueblo",
          webp: "./src/assets/img/portfolio/thumbnail/webp/casadelpueblo.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/casadelpueblo.png",
          tipo: "blog",
        },
        {
          nome: "espacovitoria",
          webp: "./src/assets/img/portfolio/thumbnail/webp/espacovitoria.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/espacovitoria.png",
          tipo: "site",
        },
        {
          nome: "fazao",
          webp: "./src/assets/img/portfolio/thumbnail/webp/fazao.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/fazao.png",
          tipo: "blog",
        },
        {
          nome: "fenix",
          webp: "./src/assets/img/portfolio/thumbnail/webp/fenix.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/fenix.png",
          tipo: "blog",
        },
        {
          nome: "fso",
          webp: "./src/assets/img/portfolio/thumbnail/webp/fso.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/fso.png",
          tipo: "site",
        },
        {
          nome: "papeis",
          webp: "./src/assets/img/portfolio/thumbnail/webp/papeis.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/papeis.png",
          tipo: "blog",
        },
        {
          nome: "projetoeducar",
          webp: "./src/assets/img/portfolio/thumbnail/webp/projetoeducar.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/projetoeducar.png",
          tipo: "blog",
        },
        {
          nome: "criançamaissaudavel",
          webp: "./src/assets/img/portfolio/thumbnail/webp/criançamaissaudavel.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/criançamaissaudavel.png",
          tipo: "blog",
        },
        {
          nome: "maquinas",
          webp: "./src/assets/img/portfolio/thumbnail/webp/maquinas.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/maquinas.png",
          tipo: "site",
        },
        {
          nome: "mistersalad",
          webp: "./src/assets/img/portfolio/thumbnail/webp/mistersalad.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/mistersalad.png",
          tipo: "site",
        },
        {
          nome: "naturelle",
          webp: "./src/assets/img/portfolio/thumbnail/webp/naturelle.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/naturelle.png",
          tipo: "site",
        },
        {
          nome: "nnobre",
          webp: "./src/assets/img/portfolio/thumbnail/webp/nnobre.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/nnobre.png",
          tipo: "site",
        },
        {
          nome: "oneello",
          webp: "./src/assets/img/portfolio/thumbnail/webp/oneello.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/oneello.png",
          tipo: "site",
        },
        {
          nome: "psd",
          webp: "./src/assets/img/portfolio/thumbnail/webp/psd.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/psd.png",
          tipo: "site",
        },
        {
          nome: "sandwich",
          webp: "./src/assets/img/portfolio/thumbnail/webp/sandwich.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/sandwich.png",
          tipo: "site",
        },
        {
          nome: "setup",
          webp: "./src/assets/img/portfolio/thumbnail/webp/setup.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/setup.png",
          tipo: "site",
        },
        {
          nome: "sindimei",
          webp: "./src/assets/img/portfolio/thumbnail/webp/sindimei.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/sindimei.png",
          tipo: "site",
        },
        {
          nome: "sorveteriamadrid",
          webp: "./src/assets/img/portfolio/thumbnail/webp/sorveteriamadrid.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/sorveteriamadrid.png",
          tipo: "blog",
        },
        {
          nome: "telecon",
          webp: "./src/assets/img/portfolio/thumbnail/webp/telecon.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/telecon.png",
          tipo: "site",
        },
        {
          nome: "temperato",
          webp: "./src/assets/img/portfolio/thumbnail/webp/temperato.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/temperato.png",
          tipo: "site",
        },
        {
          nome: "universidadesabor",
          webp: "./src/assets/img/portfolio/thumbnail/webp/universidadesabor.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/universidadesabor.png",
          tipo: "blog",
        },
        {
          nome: "vitastiq",
          webp: "./src/assets/img/portfolio/thumbnail/webp/vitastiq.webp",
          png: "./src/assets/img/portfolio/thumbnail/png/vitastiq.png",
          tipo: "site",
        },
        // {
        //   nome: "lsstar-sistema",
        //   webp: "./src/assets/img/portfolio/thumbnail/webp/lsstar-sistema.webp",
        //   png: "./src/assets/img/portfolio/thumbnail/png/lsstar-sistema.png",
        //   tipo: "sistema",
        // },
        // {
        //   nome: "vdlap-financeiro",
        //   webp: "./src/assets/img/portfolio/thumbnail/webp/vdlap-financeiro.webp",
        //   png: "./src/assets/img/portfolio/thumbnail/png/vdlap-financeiro.png",
        //   tipo: "sistema",
        // },
        // {
        //   nome: "vdlap",
        //   webp: "./src/assets/img/portfolio/thumbnail/webp/vdlap.webp",
        //   png: "./src/assets/img/portfolio/thumbnail/png/vdlap.png",
        //   tipo: "sistema",
        // },
        // {
        //   nome: "megamed",
        //   webp: "./src/assets/img/portfolio/thumbnail/webp/megamed.webp",
        //   png: "./src/assets/img/portfolio/thumbnail/png/megamed.png",
        //   tipo: "sistema",
        // },
        // {
        //   nome: "megamed-estoque",
        //   webp: "./src/assets/img/portfolio/thumbnail/webp/megamed-estoque.webp",
        //   png: "./src/assets/img/portfolio/thumbnail/png/megamed-estoque.png",
        //   tipo: "sistema",
        // },
        // {
        //   nome: "contadigital",
        //   webp: "./src/assets/img/portfolio/thumbnail/webp/contadigital.webp",
        //   png: "./src/assets/img/portfolio/thumbnail/png/contadigital.png",
        //   tipo: "sistema",
        // },
      ],
    };
  },
};
</script>
