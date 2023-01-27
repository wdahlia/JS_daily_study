const carousel = [...document.querySelectorAll('.carousel')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];

carousel.forEach((item, i) => {
    let items = item.getBoundingClientRect();
    let widths = items.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += widths
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= widths
    })
})