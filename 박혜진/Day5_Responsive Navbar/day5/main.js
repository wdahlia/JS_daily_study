let searchBtn = document.querySelector('.searchbtn');
let closeBtn = document.querySelector('.closebtn');
let searchBox = document.querySelector('.searchbox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menutoggle');
let header = document.querySelector('header');


searchBtn.onclick = function() {
    searchBtn.classList.add('active');
    closeBtn.classList.add('active');
    searchBox.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
}

searchBtn.onclick = function() {
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBox.classList.remove('active');
    menuToggle.classList.remove('hide');
}

menuToggle.onclick = function() {
    header.classList.toggle('open');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBox.classList.remove('active');
}