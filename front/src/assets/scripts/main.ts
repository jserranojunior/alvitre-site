import "animate.css";


import "../styles/index.css";

import "https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"

import isMobile from ".//isMobile";
import pwa from ".//pwa";
import togleMenu from ".//togleMenu";
import btnToTop from ".//btnToTop";
import loadGoogleAnalytics from "./googleAnalitcs";
isMobile();
pwa();
togleMenu();
btnToTop();
loadGoogleAnalytics()
