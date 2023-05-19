function isMobile() {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
  return navigator.userAgent.match(mobileRegex) !== null;
}

function updateWhatsAppLinks(whatsappElements: NodeListOf<HTMLLinkElement>, isMobile: boolean) {
  const whatsappURL = isMobile ? "whatsapp://send?phone=5511946439695" : "https://web.whatsapp.com/send?phone=5511946439695";
  whatsappElements.forEach((item) => {
    item.href = whatsappURL;
  });
}

export default function verifyDevice() {
  const whatsapp = document.querySelectorAll<HTMLLinkElement>(".whatsapp");
  const isMobileDevice = isMobile();

  updateWhatsAppLinks(whatsapp, isMobileDevice);

  console.log(isMobileDevice ? "É mobile" : "Não é mobile");

  return whatsapp;
}
