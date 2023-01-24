const menu = document.querySelector('.menu')

menu.onclick = function () {
    document.querySelector('header').classList.toggle('open')
}