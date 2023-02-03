# [파일 업로드 버튼](https://www.notion.so/Custom-File-Upload-Button-f5cb00acb54546fe9f881cfcf7857586)

> [유튜브 강의 영상](https://www.youtube.com/watch?v=E0jNJ_uLaZQ&list=LL&index=5&t=2s)
>

<br>

### **구현 화면**
![슬라이드](./day15.gif)

<br>
<hr>
<br>

## HTML

<br>

### [**input태그 multiple**](http://www.tcpschool.com/html-tag-attrs/input-multiple)

> input태그 요소에 사용자가 둘 이상의 값을 입력할 수 있음.
>
> multiple 속성은 불린(boolean) 속성으로 속성을 명시하지 않으면 기본값은 False.
>

<br>

### multiple 속성이 제대로 동작하는 type 속성값 **email**, **file**

|속성값|multiple 사용 방법|
|---|---|
|email|이메일 사이에 콤마(,)를 추가하여 여러 이메일 주소를 동시에 입력|
|file|CTRL이나 SHIFT키를 사용하여 여러 파일을 동시에 선택|

<br>

```html
<form>
    업로드할 파일 : <input type="file" name="upload[]" multiple><br>
    <input type="submit">
</form>
```

<br>
<hr>
<br>

## JS

<br>

### [**$**](http://www.tcpschool.com/jquery/jq_basic_syntax)

> Jquery 객체라는 의미로 jquery에 접근할 수 있게 하는 식별자
>
> 문자열의 가독성을 높일 수 있음
>
> [참고 블로그](https://leftday.tistory.com/70)

<br>

#### $ 기호를 이용한 템플릿 스트링 표기 방법

```javascript
let name = "gildong";
let age = 18;

// 백틱 ` 와 $ 기호를 이용한 문자열
console.log(`이름은 ${name}이고 나이는 ${age}살 입니다.`);
// + 연산자와 함께 사용 가능
console.log(`이름은 ${name + "님"}이고 나이는 ${age + 10}살 입니다.`);
```

<br>

### [**for...of**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)

> 배열 안에 객체들이 있으면 반복문을 실행하여 배열 안의 객체 요소를 하나씩 꺼냄
>

<br>

```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

<br>

### [**new**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new)

> 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성
>

<br>

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// Expected output: "Eagle"
```

<br>

### [**FileReader()**](https://developer.mozilla.org/ko/docs/Web/API/FileReader)

> type이 file인 input 태그 또는 API 요청과 같은 인터페이스를 통해 File 또는 Blob 객체를 편리하게 처리할 수 있는 방법을 제공하는 객체
>
>  대용량 파일을 선택하고 파일 정보를 저장하는 과정이 동기식으로 동작한다면, 파일 정보를 저장할 때까지 HTML 렌더링에 영향을 끼칠 수 있기 때문에 `비동기 방식`으로 작동
>

<br>

### [**toFixed()**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

> 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시
>
>  소수점 뒤에 나타날 자릿수로 `0 이상 20 이하의 값`을 사용할 수 있으며, 구현체에 따라 더 넓은 범위의 값을 지원할 수도 있음
>
> 값을 지정하지 않으면 0을 사용

<br>

```javascript
var numObj = 12345.6789;

numObj.toFixed();       // Returns '12346': 반올림하며, 소수 부분을 남기지 않습니다.
numObj.toFixed(1);      // Returns '12345.7': 반올림합니다.
numObj.toFixed(6);      // Returns '12345.678900': 빈 공간을 0으로 채웁니다.
(1.23e+20).toFixed(2);  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Returns '0.00'
2.34.toFixed(1);        // Returns '2.3'
2.35.toFixed(1);        // Returns '2.4'. 이 경우에는 올림을 합니다.
-2.34.toFixed(1);       // Returns -2.3 (연산자의 적용이 우선이기 때문에, 음수의 경우 문자열로 반환하지 않습니다...)
(-2.34).toFixed(1);     // Returns '-2.3' (...괄호를 사용할 경우 문자열을 반환합니다.)
```