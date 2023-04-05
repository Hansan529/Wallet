// 위치에 따른 배경 색상 변경
window.addEventListener("scroll", function () {
  let currentScroll = document.documentElement.scrollTop; // 현재 스크롤 위치
  let main = document.querySelector(".main");

  let maxScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight; // 최대 스크롤 위치
  console.log("maxScroll: ", maxScroll);

  if (currentScroll >= 500 && currentScroll < 4100) {
    main.style.backgroundColor = "#3496ca";
    return;
  } else if (currentScroll >= 4100 && currentScroll < 6500) {
    main.style.backgroundColor = "#fbae04";
    return;
  } else if (currentScroll >= 6500 && currentScroll < 9400) {
    main.style.backgroundColor = "#50be3e";
    return;
  } else if (currentScroll >= 9400) {
    main.style.backgroundColor = "#f26d60";
  } else {
    main.style.backgroundColor = "#d9d6cc";
  }
});
