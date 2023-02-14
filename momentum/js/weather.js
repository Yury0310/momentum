const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

const city = document.querySelector(".city");

async function getWeather() {
  // window.addEventListener("beforeunload", setLocalStorage);
  // window.addEventListener("load", getLocalStorage);
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
  localStorage.setItem("temp", temperature.textContent);
  localStorage.setItem("desc", weatherDescription.textContent);
  localStorage.setItem("wind", wind.textContent);
  localStorage.setItem("hum", humidity.textContent);
}

function getLocalStorage() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
    temperature.textContent = localStorage.getItem("temp");
    weatherDescription.textContent = localStorage.getItem("desc");
    wind.textContent = localStorage.getItem("wind");
    humidity.textContent = localStorage.getItem("hum");
  }
}

function changeCity(e) {
  if (e.keyCode === 13) {
    getWeather();
  }
}
window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
getWeather();
city.addEventListener("keydown", changeCity);
