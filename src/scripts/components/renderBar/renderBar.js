const renderBar = ({ appElement, currentDate }) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendarBar");

  let currentMonth = currentDate.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  calendarToolbar.innerHTML = `${currentMonth}`;

  appElement.prepend(calendarToolbar);
};

export default renderBar;
