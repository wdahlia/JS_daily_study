let dropdown = document.querySelector('.dropdown');
let optionSelect = document.querySelectorAll('.option div');

function show(a) {
      document.querySelector('.selectMenu').value = a;
    }

dropdown.onclick = function() {
    dropdown.classList.toggle('active');
}