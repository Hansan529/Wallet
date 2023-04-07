[홈페이지 바로가기](http://hansan529.github.io/Wallet/index.html)

1. 제작 환경: 1920\*1080px, Chrome 환경 (Safari, Edge 정상 작동)
2. 반응형 웹 디자인 (767px 미만, 1280px 미만, 1280px 이상) - 350px 미만의 경우 비정상적으로 보일 수 있음.
3. 스크롤 위치에 따른 동적 변화 기능

---

img 태그만이 아닌, picture 태그를 통해서, 반응형 웹 디자인에 더 효율적으로 코드를 작성 할 수 있었다.
불필요한 로드를 하지 않아 브라우저에 요청하는 사항이 적어져 응답에 걸리는 소요 시간이 줄어들어 빠른 정보를 전달 할 수 있게 된다.

<br>

of 선택자 구문을 활용해 별도의 클래스나 아이디를 부여하지 않고도 원하는 요소를 선택 할 수 있다.

```html
<ul>
  <li class="list"></li>
  <li class="list select"></li>
  <li class="list"></li>
  <li class="list select"></li>
  <li class="list"></li>
</ul>
```

```css
:nth-child(2).select {
  background-color: #eee;
}

:nth-child(2 of .select) {
  background-color: #999;
}
```

  <ul>
    <li class="list">1</li>
    <li class="list select">2</li>
    <li class="list">3</li>
    <li class="list select">4</li>
    <li class="list">5</li>
  </ul>

<style>
  ul {
    display: flex;
    justify-content: space-evenly;
  }
  .list {
    list-style: none;
    width: 100px;
    height: 100px;
    background-color: skyblue;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    line-height: 100px;
  }
  :nth-child(2).select {
  background-color: #eee;
  }
  
  :nth-child(2 of .select) {
  background-color: #999;
  }
</style>

<br>

:is 의사 클래스를 사용해서 코드를 반복적이 아닌, 효율적으로 사용 할 수 있었다.

```css
/* before */
h1 {
  font-size: 46px;
}

section h1,
article h1,
div h1 {
  font -size:36px;
}

section section h1,
section div h1,
section article h1,
article section h1,
article div h1,
article article h1,
div section h1,
div div h1,
div article h1 {
  font-size:26px;
}
```

```css
/* after */
h1 {
  font-size: 46px;
}

:is (section, article, div) h1 {
  font-size: 36px;
}

:is (section, article, div) is (section, article, div) h1 {
  font-size: 36px;
}
```

Image by
<a
      href="https://www.freepik.com/free-vector/collection-monochrome-flat-design-book-logo_12067421.htm#query=university%20symbol&position=13&from_view=keyword&track=ais"
      >Freepik</a
    >
