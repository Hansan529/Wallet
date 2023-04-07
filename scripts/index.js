/** 반응형 사이즈 체크 */
const mediaQueryMobile = window.matchMedia("(max-width:767px)");
const mediaQueryTablet = window.matchMedia(
  "(min-width: 768px) and (max-width:1280px)"
);
const mediaQueryDesktop = window.matchMedia("(min-width:1281px)");
const moreOpenBtn = document.querySelectorAll(".more__btn > button");
const moreCloseBtn = document.querySelectorAll(".more__wrap > .close");

/** 사용법 버튼을 클릭하면 more__wrap이 fixed되며 화면 전체에 보여짐 */
function moreOpen(e) {
  const parent = e.target.closest(".wrap");
  const moreWrap = parent.querySelector(".more__wrap");
  moreWrap.style.display = "block";

  if (mediaQueryTablet.matches || mediaQueryDesktop.matches) {
    moreWrap.style.display = "flex";
  }

  /* display:block과 동시에 실행되어 transition이 적용되지 않는 현상을 막기 위해 사용함 */
  requestAnimationFrame(() => {
    moreWrap.classList.add("open");
  });
}

/** 닫기 버튼을 클릭 하면 해당 fixed된 요소 제거 */
function moreClose(e) {
  const parent = e.currentTarget.parentNode;
  parent.classList.remove("open");

  /* transition이 종료되면, inline CSS를 제거함에 따라 기본 값인 display: none으로 돌아가게 됨 */
  setTimeout(() => {
    parent.removeAttribute("style");
  }, 500);
}

moreOpenBtn.forEach((btn) => {
  btn.addEventListener("click", moreOpen);
});
moreCloseBtn.forEach((btn) => {
  btn.addEventListener("click", moreClose);
});

/** 즉시 실행하여 전역 변수,상수에 영향이 끼치지 않도록 설정함 */
(() => {
  const main = document.querySelector(".main");

  /** 네이빙 구별을 위해, 같은 값이여도 지정해놓았음 */
  const breakpoints = {
    mobile: 500,
    tablet: 500,
    desktop: 500,
  };

  /** 변경될 메인의 배경 색상 */
  const colors = {
    1: "#3496ca",
    2: "#fbae04",
    3: "#50be3e",
    4: "#f26d60",
    default: "#d9d6cc",
  };

  /** handleScroll 함수에서 사용 할 코드: 배경의 색상을 변경하는 함수 */
  const setBackground = (color) => {
    main.style.backgroundColor = color;
  };

  /** 스크롤을 할 때, 위치 값에 따라 배경 색상을 변경하는 함수 */
  const handleScroll = () => {
    /** 현재 마우스의 위치를 알 수 있는 상수 */
    const currentScroll = document.documentElement.scrollTop;
    let colorIndex = "default";

    /** 반응형 사이즈 체크후, 맞다면 하단의 실행문을 이행함 */
    /** 모바일 */
    if (currentScroll >= breakpoints.mobile) {
      if (currentScroll < 4000) {
        colorIndex = 1;
      } else if (currentScroll < 6400) {
        colorIndex = 2;
      } else if (currentScroll < 9100) {
        colorIndex = 3;
      } else {
        colorIndex = 4;
      }
    }
    /** 테블릿 */
    if (currentScroll >= breakpoints.tablet) {
      if (currentScroll < 3900) {
        colorIndex = 1;
      } else if (currentScroll < 6200) {
        colorIndex = 2;
      } else if (currentScroll < 8500) {
        colorIndex = 3;
      } else {
        colorIndex = 4;
      }
    }
    /** 데스크탑 */
    if (currentScroll >= breakpoints.desktop) {
      if (currentScroll < 4200) {
        colorIndex = 1;
      } else if (currentScroll < 6600) {
        colorIndex = 2;
      } else if (currentScroll < 9000) {
        colorIndex = 3;
      } else {
        colorIndex = 4;
      }
    }

    /** main의 배경 색상을 colorIndex 배열 순서대로 입력하는 코드 */
    setBackground(colors[colorIndex]);
  };

  window.addEventListener("scroll", handleScroll);
})();
