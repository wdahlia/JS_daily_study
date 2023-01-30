![responsive_navbar](assets/responsive_navbar.gif)

# 1. HTML 마크업

ul 태그 사용해서 

ionicons 사이트 아이콘 활용



# 2. CSS 초기화

> margin, padding, box-sizing: border-box

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```



# 3. CSS

- 새로 알게 된 속성

  ```css
  text-transform : uppercase
  ```

  대문자로

  ```css
  transform-origin
  ```

  문서를 봐도 이해가 안됨 ??? 원점이라는 의미 같은데

  `origin` 속성 값에 따라 transform 시작 위치가 달라졌음.

  ```css
  transform: scaleX
  ```

  

- `gap`과 `margin` 속성의 차이



- `opacity: 0`과 `visibility: hidden` `display: none`의 차이

  [인프런/답변 - visibility와 opacity를 왜 같이 써주나요?](https://www.inflearn.com/questions/71083/visibility%EC%99%80-opacity)

  > opacity / visibility : 해당

<hr>

- opacity의 특징

​	1. 요소의 투명도를 조절하는 속성

​	2. `opacity: 0` 으로 투명도 조절을해 요소를 숨겼을때 눈에 보이지는 않지만 해당 요소의 *아래에 있는 요소의 제어를 방해할 수 있다.*(이벤트에 반응한다)

​	3. transition 전이 속성에 반응하며 부드러운 fadein과 fadeout 효과를 처리 가능



- visibility 특징

1. `visibility: hidden` 으로 요소를 숨길 경우 눈에 보이지 않지만 <u>해당 위치에 그대로 자리</u>잡고 있기 때문에 hidden으로 숨긴 요소의 다음 요소는 hidden으로 숨긴 요소의 *영역 <u>아래에</u> 위치하게 된다.*

2. `visibility: hidden` 으로 요소를 숨겼을때 hidden으로 숨긴 요소의 *아래에 있는 요소의 제어를 방해하지 않는다.*
3. visibility 속성은 transition 전이 속성에 반응한다.



- display: none 특징

1. `display: none` 으로 요소를 숨길수 있고 none으로 숨긴 요소는 <u>해당 위치에 자리잡고 있지 않기 때문에</u> none으로 숨긴 *다음 요소는 숨긴 요소의 영역을 차지*한다.

2. display 속성은 transition 전이에 반응한다.



=>  opacity로 *부드러운 등장 처리*를 하고 (display: none이 아닌) visibility로 요소를 숨겨두어 버튼이라던지 *사용자가 제어해야하는 요소들을 가리지 않도록* 함.

![opacity만_있을_때](assets/opacity만_있을_때.gif)

**opacity만 있을 때(sclae:0 혹은 visibility로 처리 안 할 경우)**

마크업상 아래에 있는 요소인 닫기 버튼이 돋보기 버튼의 제어를 방해한다.

<hr>

```css
.closeBtn {
    /* 왜 투명도 조절까지 해주는 걸까? */
    /* 후에 opacity 1이 될 때 부드럽게 등장 처리하기 위함 */
    opacity: 0;
    /* 기본적으로 안 보이게 */
    /* (1)나중에 검색창이 열리면 보이게 바뀔 것 */
    visibility: hidden;
    transition: 0.5s;
    scale: 0;
}
```

```css
.closeBtn.active {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
    scale: 1;
}
```

나의 의문점 ? 위에 `active`  클래스가 추가되기 전에 scale이 0이면 화면에 안 보이는 건 마찬가지이지 않나? 근데 왜 `visibility`, `opacity`까지 다 동원해서 안보이게 하는 방법이란 방법은 다 쓰는가?



아래 두 화면은 차이가 없다.



![Honeycam 2023-01-25 01-32-23](C:/Users/user/Desktop/js-theory/안예지/assets/Honeycam 2023-01-25 01-32-23.gif)

**visibility 없을 때**

![visiblity있을_때](assets/visiblity있을_때.gif)

**visibility 있을 때**



> 성능상의 이유, scale: 0 은 transform 이랑만

화면상으로는 차이가 없다. `display: none`과 `visibility: hidden`의 차이가 요소가 실제 위치를 차지하지 않는다/한다의 차이인데, `scale: 0`도 visibility와 마찬가지로 요소가 실제 공간을 차지하기 때문에 `scale: 0`과 `visibility: hidden`은 차이점이 없다.

 하지만, 성능 상의 이유로 단순히 화면에 보이지 않게 하기 위해 `scale: 0`을 활용하는 것은 좋은 방법은 아닌 것 같다. `scale: 0` 은 `transform`과 같이 쓰이므로, *크기 조정 변환을 정의하고 싶을 때 사용*하는 것이 효율적이어 보인다.

단순히 화면에 보이지 않게 하기 위함이라면, `display: none`이 가장 성능상 효율적인 방법이라고 한다. 레이아웃에 영향을 주지 않으며 공간 역시도 차지하지 않기 때문이다.

[reddit/답변 - display: none vs transform: scale(0) vs visibility: hidden](https://www.reddit.com/r/webdev/comments/52pc3r/perf_display_none_vs_visibility_hidden_vs/)

```
visibility: hidden및 모두 transform: scale(0)요소의 공간을 보존합니다. 후자는 또한 렌더링 프레임을 생성하여 성능을 저하시킵니다. 
```



- 참고하면 좋을 사이트 : <u>요소를 숨기는 방법</u>

  [코-딩동댕: 요소 숨기기](https://sshin4882.tistory.com/67)

=> 결론 : 위 코드에서는 어차피 transform을 위해 scale 속성으로 조정을 해야해서 visiblility를 쓸 필요는 없어보인다. 하지만 쓴 데는 시맨틱한 이유가 있는 것 같다. 나중에 알게 되지 않을까?