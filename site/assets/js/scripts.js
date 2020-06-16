if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(
    function () {
      console.log("Registrado com sucesso o sw");
    },
    function () {
      console.log("Problema ao fazer o registros");
    }
  );
} else {
  console.log("CLIENT: service worker is not supported.");
}

let myPrompt;
const pwaAlert = document.querySelector(".div-install-pwa");
const btnPWA = document.querySelector(".btn-install-pwa");

window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e);
  e.preventDefault();

  myPrompt = e;
  pwaAlert.style.display = "block";
});

btnPWA.addEventListener("click", () => {
  pwaAlert.style.display = "none";
  myPrompt.prompt();
});

var $portfolio = document.querySelector(".columns-portfolio"),
  portfolios = [
    {
      nome: "lsstar",
      thumbnail: "./assets/images/portfolio/thumbnail/lsstar.webp",
      tipo: "site",
    },
    {
      nome: "abcp",
      thumbnail: "./assets/images/portfolio/thumbnail/abcp.webp",
      tipo: "site",
    },
    {
      nome: "ajz",
      thumbnail: "./assets/images/portfolio/thumbnail/ajz.webp",
      tipo: "blog",
    },
    {
      nome: "bella",
      thumbnail: "./assets/images/portfolio/thumbnail/bella.webp",
      tipo: "blog",
    },
    {
      nome: "bressan",
      thumbnail: "./assets/images/portfolio/thumbnail/bressan.webp",
      tipo: "site",
    },
    {
      nome: "casadelpueblo",
      thumbnail: "./assets/images/portfolio/thumbnail/casadelpueblo.webp",
      tipo: "blog",
    },
    {
      nome: "espacovitoria",
      thumbnail: "./assets/images/portfolio/thumbnail/espacovitoria.webp",
      tipo: "site",
    },
    {
      nome: "fazao",
      thumbnail: "./assets/images/portfolio/thumbnail/fazao.webp",
      tipo: "blog",
    },
    {
      nome: "fenix",
      thumbnail: "./assets/images/portfolio/thumbnail/fenix.webp",
      tipo: "blog",
    },
    {
      nome: "fso",
      thumbnail: "./assets/images/portfolio/thumbnail/fso.webp",
      tipo: "site",
    },
    {
      nome: "papeis",
      thumbnail: "./assets/images/portfolio/thumbnail/papeis.webp",
      tipo: "blog",
    },
    {
      nome: "projetoeducar",
      thumbnail: "./assets/images/portfolio/thumbnail/projetoeducar.webp",
      tipo: "blog",
    },
    {
      nome: "criançamaissaudavel",
      thumbnail: "./assets/images/portfolio/thumbnail/criançamaissaudavel.webp",
      tipo: "blog",
    },
    {
      nome: "maquinas",
      thumbnail: "./assets/images/portfolio/thumbnail/maquinas.webp",
      tipo: "site",
    },
    {
      nome: "mistersalad",
      thumbnail: "./assets/images/portfolio/thumbnail/mistersalad.webp",
      tipo: "site",
    },
    {
      nome: "naturelle",
      thumbnail: "./assets/images/portfolio/thumbnail/naturelle.webp",
      tipo: "site",
    },
    {
      nome: "nnobre",
      thumbnail: "./assets/images/portfolio/thumbnail/nnobre.webp",
      tipo: "site",
    },
    {
      nome: "oneello",
      thumbnail: "./assets/images/portfolio/thumbnail/oneello.webp",
      tipo: "site",
    },
    {
      nome: "psd",
      thumbnail: "./assets/images/portfolio/thumbnail/psd.webp",
      tipo: "site",
    },
    {
      nome: "sandwich",
      thumbnail: "./assets/images/portfolio/thumbnail/sandwich.webp",
      tipo: "site",
    },
    {
      nome: "setup",
      thumbnail: "./assets/images/portfolio/thumbnail/setup.webp",
      tipo: "site",
    },
    {
      nome: "sindimei",
      thumbnail: "./assets/images/portfolio/thumbnail/sindimei.webp",
      tipo: "site",
    },
    {
      nome: "sorveteriamadrid",
      thumbnail: "./assets/images/portfolio/thumbnail/sorveteriamadrid.webp",
      tipo: "blog",
    },
    {
      nome: "telecon",
      thumbnail: "./assets/images/portfolio/thumbnail/telecon.webp",
      tipo: "site",
    },
    {
      nome: "temperato",
      thumbnail: "./assets/images/portfolio/thumbnail/temperato.webp",
      tipo: "site",
    },
    {
      nome: "universidadesabor",
      thumbnail: "./assets/images/portfolio/thumbnail/universidadesabor.webp",
      tipo: "blog",
    },
    {
      nome: "vitastiq",
      thumbnail: "./assets/images/portfolio/thumbnail/vitastiq.webp",
      tipo: "site",
    },
    {
      nome: "lsstar-sistema",
      thumbnail: "./assets/images/portfolio/thumbnail/lsstar-sistema.webp",
      tipo: "sistema",
    },
    {
      nome: "vdlap-financeiro",
      thumbnail: "./assets/images/portfolio/thumbnail/vdlap-financeiro.webp",
      tipo: "sistema",
    },
    {
      nome: "vdlap",
      thumbnail: "./assets/images/portfolio/thumbnail/vdlap.webp",
      tipo: "sistema",
    },
    {
      nome: "megamed",
      thumbnail: "./assets/images/portfolio/thumbnail/megamed.webp",
      tipo: "sistema",
    },
    {
      nome: "megamed-estoque",
      thumbnail: "./assets/images/portfolio/thumbnail/megamed-estoque.webp",
      tipo: "sistema",
    },
    {
      nome: "contadigital",
      thumbnail: "./assets/images/portfolio/thumbnail/contadigital.webp",
      tipo: "sistema",
    },
  ];
function changePortfolio(o) {
  var i = document.getElementsByClassName(o),
    e = document.getElementsByClassName("portfolio");
  "todos" == o
    ? Array.prototype.forEach.call(e, function (o) {
        o.classList.remove("display-none");
      })
    : (Array.prototype.forEach.call(e, function (o) {
        o.classList.add("display-none");
      }),
      Array.prototype.forEach.call(i, function (o) {
        o.classList.remove("display-none");
      }));
}
function modalToggle() {
  document.querySelector("html").classList.toggle("is-clipped"),
    document.querySelector(".modal").classList.toggle("is-active");
}
function navBarToggle() {
  document.querySelector(".navbar-burger").classList.toggle("is-active"),
    document.querySelector(".navbar-menu").classList.toggle("is-active");
}
function efeitoMaquinaDeEscrever(o) {
  const i = o.innerHTML.split("");
  (o.innerHTML = " "),
    i.forEach(function (i, e) {
      setTimeout(function () {
        o.innerHTML += i;
      }, 100 * e);
    });
}
Array.prototype.forEach.call(portfolios, function (o) {
  $portfolio.innerHTML +=
    '<div class="column is-4 portfolio ' +
    o.tipo +
    '"><div class="card"><div class="card-content"><img class="" src="' +
    o.thumbnail +
    '" alt="o.nome"></div></div></div>';
}),
  efeitoMaquinaDeEscrever(document.querySelector(".titulo-principal"));
