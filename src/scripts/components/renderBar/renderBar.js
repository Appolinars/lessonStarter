import { doc } from "prettier";

const renderBar = ({ appElement, currentDate }) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendarBar");
  appElement.prepend(calendarToolbar);

  const toolbarDate = document.createElement('div');

  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let date = new Date(year, month);

  function getDate() {
    let currentMonth = date.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    toolbarDate.innerHTML = `${currentMonth}`;
  }

  getDate();

  calendarToolbar.prepend(toolbarDate);
  calendarToolbar.insertAdjacentHTML("afterbegin", '<button class="toolbar-btn toolbar-btn__prev"></button>');
  calendarToolbar.insertAdjacentHTML("beforeend", '<button class="toolbar-btn toolbar-btn__next"></button>');

  const prevBtn = document.querySelector('.toolbar-btn__prev');
  prevBtn.addEventListener('click', () => {
    date = new Date(year, month--);
    getDate();
  });

  const nextBtn = document.querySelector('.toolbar-btn__next');
  nextBtn.addEventListener('click', () => {
    date = new Date(year, month++);
    getDate();
  });

  // document.addEventListener('DOMContentLoaded', () => {
  //   nextBtn.click();
  // });
};

export default renderBar;
