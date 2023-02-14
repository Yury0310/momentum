// import { timeOfDays } from "./hello";

const body = document.getElementsByTagName("body")[0];
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
let timeOfDay = "";

// body.style.backgroundImage =
//   "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/11.jpg')";

function timeOfDays() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) timeOfDay = `Morning`;
  else if (hours >= 12 && hours < 18) timeOfDay = `Afternoon`;
  else if (hours >= 18 && hours < 24) timeOfDay = `Evening`;
  else timeOfDay = `Night`;
  return timeOfDay;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

var randomNum = getRandomIntInclusive(1, 20);

function setBg() {
  timeOfDays();
  if (timeOfDay == "Morning")
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${randomNum}.jpg')`;
  else if (timeOfDay == "Afternoon")
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${randomNum}.jpg')`;
  else if (timeOfDay == "Evening") {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${randomNum}.jpg')`;
  } else
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${randomNum}.jpg')`;
}

function getSlideNext() {
  randomNum += 1;
  if (randomNum == 21) randomNum = 1;
  setBg();
}

function getSlidePrev() {
  randomNum -= 1;
  if (randomNum == 0) randomNum = 20;
  setBg();
}
slidePrev.addEventListener("click", getSlidePrev);
slideNext.addEventListener("click", getSlideNext);
setBg();
