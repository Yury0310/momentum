import showGreeting from "./hello.js";

const time = document.querySelector(".time");
const date1 = document.querySelector(".date");

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}

function showDate() {
  const date = new Date();

  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const currentDate = date.toLocaleDateString("en-EN", options);
  date1.textContent = currentDate;
}

showTime();
