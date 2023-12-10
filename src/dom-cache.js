const wrapper = document.querySelector('.wrapper');
const mainEl = document.querySelector('.main');
const cityNameEl = document.querySelector('.city-name-el');
const timeEl = document.querySelector('.time-el');
const conditionEl = document.querySelector('.condition-el');
const celsiusEl = document.querySelector('.celsius-el');
const fahrenheitEl = document.querySelector('.fahrenheit-el');
const humidityEl = document.querySelector('.humidity-p');

const tomorrowDateEl = document.querySelector('.tomorrow-date-el');
const celsiusEl2 = document.querySelector('.celsius-el-2');
const fahrenheitEl2 = document.querySelector('.fahrenheit-el-2');
const conditionEl2 = document.querySelector('.condition-el-2');

const cityInputEl = document.querySelector('.city-input-el');
const searchButton = document.querySelector('.search-button');
const baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=dc5b7d95a22a4c70ba820628230312&q=';
const conditionImg = document.querySelector('.condition-img');
const conditionImg2 = document.querySelector('.condition-img-2');

const displayCurrentDayInfo = (json) => {
  cityNameEl.innerText = json.location.name;
  conditionEl.innerText = json.current.condition.text;
  conditionImg.setAttribute('src', json.current.condition.icon);
  celsiusEl.innerText = `${json.current.temp_c}°C / `;
  fahrenheitEl.innerText = `${json.current.temp_f}°F`;
  humidityEl.innerText = `Humedad: ${json.current.humidity}`;
};

const displayTomorrowsInfo = (json) => {
  celsiusEl2.innerText = json.forecast.forecastday[1].day.maxtemp_c;
  fahrenheitEl2.innerText = json.forecast.forecastday[1].day.maxtemp_f;
  conditionEl2.innerText = json.forecast.forecastday[1].day.condition.text;
  conditionImg2.setAttribute('src', json.forecast.forecastday[1].day.condition.icon);
};

const transformConditionImg = () => {
  conditionImg.classList.add('active');
  conditionImg2.classList.add('active');
};

export {
  wrapper,
  mainEl,
  cityNameEl,
  timeEl,
  conditionEl,
  celsiusEl,
  fahrenheitEl,
  humidityEl,
  tomorrowDateEl,
  celsiusEl2,
  fahrenheitEl2,
  conditionEl2,
  cityInputEl,
  searchButton,
  baseUrl,
  conditionImg,
  conditionImg2,
  displayCurrentDayInfo,
  displayTomorrowsInfo,
  transformConditionImg,
};
