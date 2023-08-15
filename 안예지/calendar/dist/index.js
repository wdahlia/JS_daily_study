const currentDate = document.querySelector(".current-date"), daysTag = document.querySelector(".days"), prevNextIcon = document.querySelectorAll(".icons span");
// 새로운 date 객체를 얻어서 현재 연도와 월을 반환
let date = new Date(), currYear = date.getFullYear(), currMonth = date.getMonth();
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const renderCalendar = () => {
    // 시작일 반환
    let firstDayOfMonth = new Date(currYear, currMonth).getDay(), 
    // 말일 반환
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(), lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";
    // 전월 날짜
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
    // 나머지 날짜들
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()
            ? "active"
            : "";
        liTag += `<li class=${isToday}>${i}</li>`;
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }
    // 타입검사
    if (currentDate && daysTag) {
        currentDate.innerText = `${currYear} ${months[currMonth]}`;
        daysTag.textContent = "";
        daysTag.insertAdjacentHTML("beforeend", liTag);
    }
};
renderCalendar();
prevNextIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        date = new Date();
        renderCalendar();
    });
});
export {};
