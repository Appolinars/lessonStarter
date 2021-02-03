const renderCalendar = ({ appElement, currentDate }) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  calendarContainer.prepend(calendarHead);
  calendarContainer.append(calendarBody);
  appElement.append(calendarContainer);

  const headRow = document.createElement("tr");
  calendarHead.prepend(headRow);
  headRow.classList.add("head-row");

  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let date = new Date(year, month);
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);

  for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {

    let dayOfWeek = date.toLocaleDateString("en-GB", { weekday: "short" }).slice(0, 2);
    if (dayOfWeek === "Sa") {
      dayOfWeek = "St";
    }

    headRow.insertAdjacentHTML(
      "beforeend",
      `<th class='head-row__cell'>
        <span class='head-row__day'>${dayOfWeek}</span> <span class='head-row__num'>${i}</span>
      </th>`,
    );
    
    if (dayOfWeek === "St" || dayOfWeek === "Su") {
      headRow.lastChild.classList.add("head-row__cell--weekends");
    }

    date.setDate(date.getDate() + 1);
  }
};

export default renderCalendar;
