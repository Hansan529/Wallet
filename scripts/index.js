const moreCloseBtn = document.querySelectorAll(".more__wrap > .close");

function moreClose(e) {
  const parent = e.currentTarget.parentNode;
  parent.style.opacity = "0";

  setTimeout(() => {
    parent.style.display = "none";
  }, 500);
}

moreCloseBtn.forEach((btn) => {
  btn.addEventListener("click", moreClose);
});

/** 즉시 실행하여 전역 변수,상수에 영향이 끼치지 않도록 설정함 */
(() => {
  const main = document.querySelector(".main");
  /** 반응형 사이즈 체크 */
  const mediaQueryMobile = window.matchMedia("(max-width:767px)");
  const mediaQueryTablet = window.matchMedia(
    "(min-width: 768px) and (max-width:1280px)"
  );
  const mediaQueryDesktop = window.matchMedia("(min-width:1281px)");

  /** handleScroll 함수에서 사용 할 코드: 배경의 색상을 변경하는 함수 */
  const setBackground = (color) => {
    main.style.backgroundColor = color;
  };

  /** 스크롤을 할 때, 위치 값에 따라 배경 색상을 변경하는 함수 */
  const handleScroll = () => {
    /** 현재 마우스의 위치를 알 수 있는 상수 */
    const currentScroll = document.documentElement.scrollTop;

    /** 반응형 사이즈 체크후, 맞다면 하단의 실행문을 이행함 */
    if (mediaQueryMobile.matches || mediaQueryTablet.matches) {
      if (currentScroll >= 500 && currentScroll < 4100) {
        setBackground("#3496ca");
      } else if (currentScroll >= 4100 && currentScroll < 6500) {
        setBackground("#fbae04");
      } else if (currentScroll >= 6500 && currentScroll < 9400) {
        setBackground("#50be3e");
      } else if (currentScroll >= 9400) {
        setBackground("#f26d60");
      } else {
        setBackground("#d9d6cc");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
})();
