# [애니메이션](https://tungsten-felidae-9bc.notion.site/Animation-58fc64d4eb1a4658adc36ed657a9ae40)

> [스타벅스 홈페이지](https://www.starbucks.co.kr/index.do) 슬라이드 효과
>

<br>

### **구현 화면**
![슬라이드](./practice/day3.gif)

<br>
<hr>
<br>

## CSS 속성

<br>

### [**animation-fill-mode**](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)

> 애니메이션의 실행 전후에 대상에 스타일을 적용하는 방법을 설정
>

<br>

|속성|효과|
|---|---|
|none|아무것도 지정되지 않음.|
|forwards|키프레임의 100%에 도달하면 마지막 프레임을 유지.|
|backwards|애니메이션이 시작되기 전에 미리 적용.|
|both|forwards와 backwards 둘 다 적용.|

<br>
<hr>
<br>

## JS addEventListener

<br>

### [**scroll**](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event)

> 문서가 스크롤이 되면 발생
>

<br>

```javascript
// 스크롤 이벤트가 발생하면
window.addEventListener('scroll', function(){
// 화면이 세로로 얼마큼 이동했는지 출력
  console.log( window.scrollY )
});
```