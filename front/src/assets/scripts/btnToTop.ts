export default function toTop() {
  const btnToTop = document.querySelector("#totop") as HTMLButtonElement | null;
  if (btnToTop) {
    console.log("add");
    btnToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}
