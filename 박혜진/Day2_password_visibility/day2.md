# [비밀번호 보이기](https://tungsten-felidae-9bc.notion.site/Password-Visibility-ce8ca0cd8e5d44d59a51de3409fbc7d8)


### **구현 화면**
![비밀번호](./day2.gif)

<br>
<hr>
<br>

## CSS 속성

<br>

### **box-sizing**

> 박스의 크기를 어떤 것을 기준으로 계산할지를 정하는 속성
>

<br>

|속성|효과|
|---|---|
|content-box|기본값, 콘텐트 영역을 기준으로 크기를 정한다.|
|border-box|테두리를 기준으로 크기를 정한다.|
|initial|기본값으로 정한다.|
|inherit|부모 요소의 속성값을 상속받는다.|

<br>

### **@keyframes**

> 애니메이션 코드를 지정
>
> [참고 문서 / w3schools-keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.php)

<br>
사용 예시

```css
/* 효과 이름 */
@keyframes mymove {
  /* 시작 */
  from {top: 0px;}
  /* 끝 */
  to {top: 200px;}
}
```

<br>

### **background-position**

> 배경의 위치를 지정
>

<br>

|속성|효과|
|---|---|
|left top|왼쪽 상단|
|left center|왼쪽 중앙|
|left bottom|왼쪽 아래|
|rignt top|오른쪽 상단|
|rignt center|오른쪽 중앙|
|rignt bottom|오른쪽 아래|
|center top|가운데 상단|
|center center|가운데 중앙|
|center bottom|가운데 아래|
|x% y%|가로위치 세로위치|

<br>

### **background-size**

> 배경의 크기를 설정
>

<br>

|속성|효과|
|---|---|
|auto|원래 배경 이미지 크기만큼 표시(기본 값)|
|contain|지정한 요소 안에 배경 이미지가 다 들어오도록 이미지를 확대/축소|
|cover|지정한 요소를 다 덮도록 배경이미지를 확대/축소|
|크기 값|너비 값과 높이 값을 지정|
|백분율|지정한 요소를 기준으로 백분율 값을 지정|

<br>

### **place-items**

> 그리드 속성을 사용할 때 블럭 배열 설정
>
> [참고 문서 / mdn place-items](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)

<br>
사용 예시

```css
/* Keyword values */
place-items: center;
place-items: normal start;

/* Positional alignment */
place-items: center normal;
place-items: start legacy;
place-items: end normal;
place-items: self-start legacy;
place-items: self-end normal;
place-items: flex-start legacy;
place-items: flex-end normal;

/* Baseline alignment */
place-items: baseline normal;
place-items: first baseline legacy;
place-items: last baseline normal;
place-items: stretch legacy;

/* Global values */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: revert-layer;
place-items: unset;
```
