const iphoneDark = document.querySelector(".dark__wrap .iphone");
const iphoneDarkStatus = iphoneDark.children[2];
const iphoneDarkIco = iphoneDark.children[4];

function darkMode() {
  iphoneDarkStatus.childNodes[1].src = "../images/ico_cellularbars.svg";
  iphoneDarkStatus.childNodes[3].src = "../images/ico_wifi.svg";

  iphoneDarkIco.querySelector(".ellipsis").src = "../images/ico_ellipsis.svg";
  iphoneDarkIco.querySelector(".search").src = "../images/ico_search.svg";
}
