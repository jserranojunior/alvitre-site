/* function modalToggle() {
  document.querySelector("html").classList.toggle("is-clipped"),
    document.querySelector(".modal").classList.toggle("is-active");
}
function navBarToggle() {
  document.querySelector(".navbar-burger").classList.toggle("is-active"),
    document.querySelector(".navbar-menu").classList.toggle("is-active");
} */

function togleMenu() {
  const menu = document.querySelector("#main-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

function addTogleMenuButtonClick() {
  console.log("funcionando");
  const btnTogleMenu = document.querySelector<HTMLButtonElement>("#togleMenu");
  if (btnTogleMenu) {
    btnTogleMenu.onclick = togleMenu;
  }
}

export default addTogleMenuButtonClick;
