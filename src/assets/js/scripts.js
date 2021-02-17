const headerHeight = document.querySelector(".header").offsetHeight;
const toastNotifications = document.querySelector(".toastNotifications");
toastNotifications.style.top = `${headerHeight + 25}px`;
// console.log(toastNotifications.style.margin);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(
    function () {
      console.log("Registrado com sucesso o pwa, disponível para instalação");
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
const btnPWAClose = document.querySelector(".btn-pwa-close");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();

  myPrompt = e;
  pwaAlert.style.display = "block";
});

btnPWA.addEventListener("click", () => {
  pwaAlert.style.display = "none";
  myPrompt.prompt();
});

btnPWAClose.addEventListener("click", () => {
  pwaAlert.style.display = "none";
});

var $portfolio = document.querySelector(".flex-portfolio"),
  portfolios = [
    {
      nome: "lsstar",
      webp: "./assets/img/portfolio/thumbnail/webp/lsstar.webp",
      png: "./assets/img/portfolio/thumbnail/png/lsstar.png",
      tipo: "site",
    },
    {
      nome: "abcp",
      webp: "./assets/img/portfolio/thumbnail/webp/abcp.webp",
      png: "./assets/img/portfolio/thumbnail/png/abcp.png",
      tipo: "site",
    },
    {
      nome: "ajz",
      webp: "./assets/img/portfolio/thumbnail/webp/ajz.webp",
      png: "./assets/img/portfolio/thumbnail/png/ajz.png",
      tipo: "blog",
    },
    {
      nome: "bella",
      webp: "./assets/img/portfolio/thumbnail/webp/bella.webp",
      png: "./assets/img/portfolio/thumbnail/png/bella.png",
      tipo: "blog",
    },
    {
      nome: "bressan",
      webp: "./assets/img/portfolio/thumbnail/webp/bressan.webp",
      png: "./assets/img/portfolio/thumbnail/png/bressan.png",
      tipo: "site",
    },
    {
      nome: "casadelpueblo",
      webp: "./assets/img/portfolio/thumbnail/webp/casadelpueblo.webp",
      png: "./assets/img/portfolio/thumbnail/png/casadelpueblo.png",
      tipo: "blog",
    },
    {
      nome: "espacovitoria",
      webp: "./assets/img/portfolio/thumbnail/webp/espacovitoria.webp",
      png: "./assets/img/portfolio/thumbnail/png/espacovitoria.png",
      tipo: "site",
    },
    {
      nome: "fazao",
      webp: "./assets/img/portfolio/thumbnail/webp/fazao.webp",
      png: "./assets/img/portfolio/thumbnail/png/fazao.png",
      tipo: "blog",
    },
    {
      nome: "fenix",
      webp: "./assets/img/portfolio/thumbnail/webp/fenix.webp",
      png: "./assets/img/portfolio/thumbnail/png/fenix.png",
      tipo: "blog",
    },
    {
      nome: "fso",
      webp: "./assets/img/portfolio/thumbnail/webp/fso.webp",
      png: "./assets/img/portfolio/thumbnail/png/fso.png",
      tipo: "site",
    },
    {
      nome: "papeis",
      webp: "./assets/img/portfolio/thumbnail/webp/papeis.webp",
      png: "./assets/img/portfolio/thumbnail/png/papeis.png",
      tipo: "blog",
    },
    {
      nome: "projetoeducar",
      webp: "./assets/img/portfolio/thumbnail/webp/projetoeducar.webp",
      png: "./assets/img/portfolio/thumbnail/png/projetoeducar.png",
      tipo: "blog",
    },
    {
      nome: "criançamaissaudavel",
      webp: "./assets/img/portfolio/thumbnail/webp/criançamaissaudavel.webp",
      png: "./assets/img/portfolio/thumbnail/png/criançamaissaudavel.png",
      tipo: "blog",
    },
    {
      nome: "maquinas",
      webp: "./assets/img/portfolio/thumbnail/webp/maquinas.webp",
      png: "./assets/img/portfolio/thumbnail/png/maquinas.png",
      tipo: "site",
    },
    {
      nome: "mistersalad",
      webp: "./assets/img/portfolio/thumbnail/webp/mistersalad.webp",
      png: "./assets/img/portfolio/thumbnail/png/mistersalad.png",
      tipo: "site",
    },
    {
      nome: "naturelle",
      webp: "./assets/img/portfolio/thumbnail/webp/naturelle.webp",
      png: "./assets/img/portfolio/thumbnail/png/naturelle.png",
      tipo: "site",
    },
    {
      nome: "nnobre",
      webp: "./assets/img/portfolio/thumbnail/webp/nnobre.webp",
      png: "./assets/img/portfolio/thumbnail/png/nnobre.png",
      tipo: "site",
    },
    {
      nome: "oneello",
      webp: "./assets/img/portfolio/thumbnail/webp/oneello.webp",
      png: "./assets/img/portfolio/thumbnail/png/oneello.png",
      tipo: "site",
    },
    {
      nome: "psd",
      webp: "./assets/img/portfolio/thumbnail/webp/psd.webp",
      png: "./assets/img/portfolio/thumbnail/png/psd.png",
      tipo: "site",
    },
    {
      nome: "sandwich",
      webp: "./assets/img/portfolio/thumbnail/webp/sandwich.webp",
      png: "./assets/img/portfolio/thumbnail/png/sandwich.png",
      tipo: "site",
    },
    {
      nome: "setup",
      webp: "./assets/img/portfolio/thumbnail/webp/setup.webp",
      png: "./assets/img/portfolio/thumbnail/png/setup.png",
      tipo: "site",
    },
    {
      nome: "sindimei",
      webp: "./assets/img/portfolio/thumbnail/webp/sindimei.webp",
      png: "./assets/img/portfolio/thumbnail/png/sindimei.png",
      tipo: "site",
    },
    {
      nome: "sorveteriamadrid",
      webp: "./assets/img/portfolio/thumbnail/webp/sorveteriamadrid.webp",
      png: "./assets/img/portfolio/thumbnail/png/sorveteriamadrid.png",
      tipo: "blog",
    },
    {
      nome: "telecon",
      webp: "./assets/img/portfolio/thumbnail/webp/telecon.webp",
      png: "./assets/img/portfolio/thumbnail/png/telecon.png",
      tipo: "site",
    },
    {
      nome: "temperato",
      webp: "./assets/img/portfolio/thumbnail/webp/temperato.webp",
      png: "./assets/img/portfolio/thumbnail/png/temperato.png",
      tipo: "site",
    },
    {
      nome: "universidadesabor",
      webp: "./assets/img/portfolio/thumbnail/webp/universidadesabor.webp",
      png: "./assets/img/portfolio/thumbnail/png/universidadesabor.png",
      tipo: "blog",
    },
    {
      nome: "vitastiq",
      webp: "./assets/img/portfolio/thumbnail/webp/vitastiq.webp",
      png: "./assets/img/portfolio/thumbnail/png/vitastiq.png",
      tipo: "site",
    },
    // {
    //   nome: "lsstar-sistema",
    //   webp: "./assets/img/portfolio/thumbnail/webp/lsstar-sistema.webp",
    //   png: "./assets/img/portfolio/thumbnail/png/lsstar-sistema.png",
    //   tipo: "sistema",
    // },
    // {
    //   nome: "vdlap-financeiro",
    //   webp: "./assets/img/portfolio/thumbnail/webp/vdlap-financeiro.webp",
    //   png: "./assets/img/portfolio/thumbnail/png/vdlap-financeiro.png",
    //   tipo: "sistema",
    // },
    // {
    //   nome: "vdlap",
    //   webp: "./assets/img/portfolio/thumbnail/webp/vdlap.webp",
    //   png: "./assets/img/portfolio/thumbnail/png/vdlap.png",
    //   tipo: "sistema",
    // },
    // {
    //   nome: "megamed",
    //   webp: "./assets/img/portfolio/thumbnail/webp/megamed.webp",
    //   png: "./assets/img/portfolio/thumbnail/png/megamed.png",
    //   tipo: "sistema",
    // },
    // {
    //   nome: "megamed-estoque",
    //   webp: "./assets/img/portfolio/thumbnail/webp/megamed-estoque.webp",
    //   png: "./assets/img/portfolio/thumbnail/png/megamed-estoque.png",
    //   tipo: "sistema",
    // },
    // {
    //   nome: "contadigital",
    //   webp: "./assets/img/portfolio/thumbnail/webp/contadigital.webp",
    //   png: "./assets/img/portfolio/thumbnail/png/contadigital.png",
    //   tipo: "sistema",
    // },
  ];
function changePortfolio(className) {
  const portSelected = document.getElementsByClassName(className),
    allItensPort = document.getElementsByClassName("portfolio");

  className == "todos"
    ? Array.prototype.forEach.call(allItensPort, function (className) {
        className.classList.remove("hidden");
      })
    : (Array.prototype.forEach.call(allItensPort, function (className) {
        className.classList.add("hidden");
      }),
      Array.prototype.forEach.call(portSelected, function (className) {
        className.classList.remove("hidden");
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
// function efeitoMaquinaDeEscrever(o) {
//   const i = o.innerHTML.split("");
//   (o.innerHTML = " "),
//     i.forEach(function (i, e) {
//       setTimeout(function () {
//         o.innerHTML += i;
//       }, 100 * e);
//     });
// }
Array.prototype.forEach.call(portfolios, function (item) {
  $portfolio.innerHTML += `
  <div class="w-full sm:w-full md:w-1/5 p-2  portfolio ${item.tipo}">
    <div class="painel p-1 m-2 shadow-inner rounded-lg bg-gray-700">
      <div class="painel-content">
 
      <picture>
      <source srcset="${item.webp}" type="image/webp"></source>
      <source srcset="${item.png}" type="image/png"></source>

      <img class="rounded-lg" src="${item.webp}" alt="${item.nome}">

      </picture> 
      </div>
    </div>
  </div>
  `;
});

function togleMenu() {
  const menu = document.querySelector("#main-menu");
  menu.classList.toggle("hidden");
}

function isMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true; // está utilizando celular
  } else {
    return false; // não é celular
  }
}

function verifyDevice() {
  let whatsapp = document.querySelectorAll(".whatsapp");
  console.log(whatsapp);

  if (isMobile()) {
    whatsapp.forEach((item) => {
      item.href = "whatsapp://send?phone=5511946439695";
      console.log(item.href);
    });
    return whatsapp;
  } else {
    whatsapp.forEach((item) => {
      item = item.href = "https://web.whatsapp.com/send?phone=5511946439695";
      console.log(item.href);
    });
    return whatsapp;
  }
}

verifyDevice();
// console.log(verifyDevice());
