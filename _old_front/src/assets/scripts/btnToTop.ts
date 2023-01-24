export default function toTop() {
  const btnToTop = document.querySelector("#totop");
  if (btnToTop instanceof HTMLButtonElement) {
    console.log("add");
    btnToTop.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }
}
