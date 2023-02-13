// password 인풋과 toggleIcon
let passwordInput = document.getElementById('pswrd');
const eyeToggleIcon = document.querySelector('.show-icon');

// ul안의 li태그
let lowerChar = document.getElementById('lower');
let upperChar = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

// show icon 누르면 text로 바뀌게끔 만들어 줄것
// onclick아닌 clickEvent 변환
eyeToggleIcon.addEventListener('click', ()=>{
  if (passwordInput.type === "password") {
    passwordInput.setAttribute('type', 'text');
    eyeToggleIcon.classList.add('hide');
  } else {
    passwordInput.setAttribute('type', 'password');
    eyeToggleIcon.classList.remove('hide');
  }
});

// keyup 이벤트 사용, keydown의 이벤트의 경우 눌릴때 먹는 것이라 그런지
// shift와 함께 사용하는 특수문자의 경우 먹지 않아 validation이 되지 아니함
// onkeyup 이벤트 아닌 keyup 이벤트 사용
passwordInput.addEventListener('keyup', ()=> {
  let pw = passwordInput.value;
  // 정규표현식에 대한 공부는 https://poiemaweb.com/js-regexp 참고
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#\$%\^&\*])');
  const length = new RegExp('(?=.{8,})');

  // 소문자 validation
  if (lower.test(pw)) {
    lowerChar.classList.add('valid');
  } else {
    lowerChar.classList.remove('valid');
  }

  // 대문자 validation
  if (upper.test(pw)) {
    upperChar.classList.add('valid');
  } else {
    upperChar.classList.remove('valid');
  }

  // 숫자 validation
  if (number.test(pw)) {
    digit.classList.add('valid');
  } else {
    digit.classList.remove('valid');
  }

  // 특수문자 validation
  if (special.test(pw)) {
    specialChar.classList.add('valid');
  } else {
    specialChar.classList.remove('valid');
  }

  // 길이 validation
  if (length.test(pw)) {
    minLength.classList.add('valid');
  } else {
    minLength.classList.remove('valid');
  }
});