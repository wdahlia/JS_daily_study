# [캐러셀 1](https://www.notion.so/Image-Slider-1-6df15a47332647f89bf81d54d06ef825)

> [단순 캐러셀](https://www.youtube.com/watch?v=OQZNAMjC6Vg)
>

<br>

### **구현 화면**
![슬라이드](./day8.gif)

<br>
<hr>
<br>

## CSS 속성

<br>

### [**overflow-y**](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)

> 세로의 너비가 넘칠 때 어떻게 보여질 것인지 설정
>

![오버플로우](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B9EE3359EE9A8A32)

<br>

|속성|효과|스크롤바|
|---|---|---|
|visible|요소가 크기를 벗어나도 보여줌. 기본값.||
|hidden|부모요소의 범위를 넘어가는 자식 요소의 부분은 보이지 않도록 처리|세로 스크롤바는 표시되지 않으나 가로 스크롤바는 나타날 수 있음.|
|scroll|부모요소의 범위를 넘어가는 자식요소의 부분은 보이지 않지만, 사용자가 확인 할 수 있도록 스크롤바를 표시.|세로 스크롤바가 항상 나타남.|
|auto|부모요소의 범위를 넘어가는 자식요소의 부분이 있을 경우 해당 부분을 보이지 않도록 처리하고, 사용자가 해당 부분을 확인 할 수 있도록 스크롤바를 표시.|내용이 넘칠때만 세로 스크롤바 표시|


### [**scroll-behavior**](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

> 웹페이지에서 스크롤이 원하는 위치로 이동하는 방법
>
> 속도 조절 불가
>

<br>

#### `smooth`를 사용하는 이유

    자바스크립트의 사용을 최소화할 수 있음.

<br>

### [**::-webkit-scrollbar**](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

> 웹킷엔진을 이용해서 스크롤바 커스텀 가능.
>
> [webkit-scrollbar 참고 블로그](https://webisfree.com/2019-01-08/css-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%8A%A4%ED%81%AC%EB%A1%A4%EB%B0%94-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A7%80%EC%A0%95-%EB%B0%94%EA%BE%B8%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)

<br>

![웹킷](https://webisfree.com/static/uploads/2019/6306_scrollbar10.jpg)

## JS

<br>

### [**[...]**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

> 값을 가져올 때 원래 그대로의 값을 가져옴.
>

<br>

```javascript
let tempMovingItem;
const movingItem = {
  type: "tree",
  direction: 0,
  top: 0, 
  left: 0, 
};

// ...연산자는 원래값을 출력
tempMovingItem = {...movingItem};
tempMovingItem.top = 4; // 적용되지 않음.
console.log(movingItem);
// 출력결과 {type: 'tree', direction: 0, top: 0, left: 0}

tempMovingItem = movingItem;
tempMovingItem.top = 4; // 변경된 값이 적용.
console.log(movingItem);
// 출력결과 {type: 'tree', direction: 0, top: 4, left: 0}
```

<br>

### [**getBoundingClientRect()**](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

> 윈도우(window)룰 기준으로 특정 엘리먼트의 위치 값을 구해주는 DOM 메서드.
>

<br>

```html
<img id="test" src="my_img.jpg" />

<script>
    const ele = document.querySelector('#test');
    const imgRect = ele.getBoundingClientRect();

    console(imgRect);

    // 출력결과
    // {
    //   bottom: 178
    //   height: 44
    //   left: 212.5
    //   right: 1092.5
    //   top: 134
    //   width: 880
    //   x: 212.5
    //   y: 134
    // }
</script>
```