const checkInput = document.querySelectorAll('.checkbox');
const resetBtn = document.querySelector('.reBtn');

// check된 checkbox를 다시 눌렀을 때 false가되서 다시 움직이게하는것을 막기 위함
checkInput.forEach(checkbox => {
  checkbox.addEventListener('click', (e) => {
    let box = e.target;
    box.disabled = 'true';
  })
});

// resetBtn을 눌렀을 때 원상태로 초기화 시키는 코드

resetBtn.addEventListener('click', ()=> {
  checkInput.forEach(el => {
    el.disabled = false;
    el.checked = false;
  });
});