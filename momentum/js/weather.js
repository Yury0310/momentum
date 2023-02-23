const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const error = document.querySelector(".weather-error");

let city = document.querySelector(".city");

async function getWeather() {
  city.value = getLocalStorage();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=2bd0c9f9541bb28fb71701b1a2e9bab3&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

function setLocalStorage() {
  localStorage.setItem("city", city.value);
}

function getLocalStorage() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
    return city.value;
  }
  return "Minsk";
}

function changeCity(e) {
  if (e.keyCode === 13) {
    setLocalStorage();
    getWeather();
  }
}
window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
getWeather();
city.addEventListener("keydown", changeCity);
