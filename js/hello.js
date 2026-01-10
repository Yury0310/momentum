const greeting = document.querySelector(".greeting");
let timeOfDay = "";

function showGreeting() {
  timeOfDays();
  greeting.textContent = `Good ${timeOfDay},`;
}
export default showGreeting;

function timeOfDays() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) timeOfDay = `Morning`;
  else if (hours >= 12 && hours < 18) timeOfDay = `Afternoon`;
  else if (hours >= 18 && hours < 24) timeOfDay = `Evening`;
  else timeOfDay = `Night`;
  return timeOfDay;
}
//export { timeOfDays };

const name = document.querySelector(".name");

function setLocalStorage() {
  localStorage.setItem("name", name.value);
}

function getLocalStorage() {
  if (localStorage.getItem("name")) name.value = localStorage.getItem("name");
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
