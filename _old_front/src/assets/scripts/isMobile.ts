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
    return true;
  } else {
    return false;
  }
}

function verifyDevice() {
  let whatsapp = document.querySelectorAll<HTMLLinkElement>(".whatsapp");
  if (isMobile()) {
    whatsapp.forEach((item) => {
      item.href = "whatsapp://send?phone=5511946439695";
    });
    console.log("É mobile");
    return whatsapp;
  } else {
    whatsapp.forEach((item) => {
      item.href = "https://web.whatsapp.com/send?phone=5511946439695";
    });
    console.log("Não é mobile");
    return whatsapp;
  }
}

export default verifyDevice;
