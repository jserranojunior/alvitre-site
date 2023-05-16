




const gaTrackingCode = "G-P7E03M70BX";

function loadGoogleAnalytics() {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingCode}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", gaTrackingCode);

  console.log("GSAP ITS WORK")
}

export default loadGoogleAnalytics