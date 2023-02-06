let chk1 = document.getElementById('chk1');
let chk2 = document.getElementById('chk2');
let chk3 = document.getElementById('chk3');
const restartBtn = document.querySelector('.reset');

chk1.onclick = function(){
  if (chk1.checked) {
    chk1.disabled = 'true';
  }
}

chk2.onclick = function(){
  if (chk1.checked) {
    chk1.disabled = 'true';
  }
}

chk3.onclick = function(){
  if (chk1.checked) {
    chk1.disabled = 'true';
  }
}

restartBtn.onclick = function(){
  chk1.disabled = false;
  chk1.checked = false;

  chk2.disabled = false;
  chk2.checked = false;

  chk3.disabled = false;
  chk3.checked = false;
}