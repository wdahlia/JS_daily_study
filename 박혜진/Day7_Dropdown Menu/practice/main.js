let dropdown = document.querySelector('.dropdown')
let selectOption = document.querySelectorAll('.option div')

function show(a) {
    document.querySelector('.selectmenu').value = a;
}

dropdown.onclick = function() {
    dropdown.classList.toggle('active')
}