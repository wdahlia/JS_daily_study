const currentDate: HTMLParagraphElement | null =
    document.querySelector(".current-date"),
  daysTag: HTMLUListElement | null = document.querySelector(".days"),
  prevNextIcon: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".icons span");

// 새로운 date 객체를 얻어서 현재 연도와 월을 반환
let date: Date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months: string[] = [
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

type returnedData = number;

const renderCalendar = (): void => {
  // 시작일 반환
  let firstDayOfMonth: returnedData = new Date(currYear, currMonth).getDay(),
    // 말일 반환
    lastDateOfMonth: returnedData = new Date(
      currYear,
      currMonth + 1,
      0
    ).getDate(),
    lastDayOfMonth: returnedData = new Date(
      currYear,
      currMonth,
      lastDateOfMonth
    ).getDay(),
    lastDateOfLastMonth: returnedData = new Date(
      currYear,
      currMonth,
      0
    ).getDate();

  let liTag: string = "";

  // 전월 날짜
  for (let i: number = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  // 나머지 날짜들
  for (let i: number = 1; i <= lastDateOfMonth; i++) {
    let isToday: string =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class=${isToday}>${i}</li>`;
  }

  for (let i: number = lastDayOfMonth; i < 6; i++) {
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

prevNextIcon.forEach((icon: HTMLSpanElement) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
      return;
    }
    date = new Date();
    renderCalendar();
  });
});
