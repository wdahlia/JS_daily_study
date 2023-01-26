
const options = document.querySelectorAll('.options div');

// 각 options안의 div들을 잡아와서, 그 각각에 mouseover 이벤트가 발생하였을때,
// 그 안의 innerText값을 잡아주고 변수에 할당해 준 다음 그 값을 함수에 넣어준다.
options.forEach(option => {
  option.addEventListener('mouseover', ()=> {
    let optionValue = option.innerText;
    show(optionValue);
  });
});

// mouseover이벤트가 실행되었을때, 실행될 함수 dropdown안의 input의 value값에 내가 select한 값이 들어가게끔 만들어 준다.
function show(v) {
  let choiceInput = document.getElementById('selectInput');
  choiceInput.value = v;
}

// dropDown의 토글 효과, 그리고 그로 인해 발생하는 arrow화살표 변경, option 목록 보여주기
const dropDown = document.querySelector('.dropdown');

dropDown.addEventListener('click', ()=> { 
  dropDown.classList.toggle('activate');
});