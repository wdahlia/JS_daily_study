let title = document.querySelector(".title-img")
let content = document.querySelector(".content-img")

window.addEventListener("scroll", function() {
    let value = window.scrollY

    if (value > 200) {
        title.style.animation = "title-out 2s ease-out forwards";
        content.style.animation = "content-out 2s ease-out forwards";
    } else {
        title.style.animation = "title 2s ease-out";
        content.style.animation = "content 3s ease-out";
    }
});