export default function toTop() {
  const btnToTop = document.querySelector("#totop") as HTMLButtonElement | null;
  if (btnToTop) {
    btnToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}
