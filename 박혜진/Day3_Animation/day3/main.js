let mainText = document.querySelector('h1')

window.addEventListener("scroll", function () {
    // 윈도우창 세로 스크롤 위치
    let value = window.scrollY;

    if( value > 200) {
        // forwards 사라지고 고정
        mainText.style.animation = "disappear 1s ease-out forwards"
    } else {
        mainText.style.animation = "slide 1s ease-out"
    }
});