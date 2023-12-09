import './style.css';
import { convertEpochToDate } from './dates';
import partlyCloudy from './images/partly-cloudy.jpg';
import mostlyCloudy from './images/mostly-cloudy.jpg';
import rainy from './images/rainy.webp';
import sunny from './images/sunny.jpg';
import freezingFog from './images/freezing-fog.jpg';
import foggy from './images/foggy.jpeg';
import heavySnowFall from './images/heavy-snow-fall.webp';
import moderateSnowFall from './images/moderate-snow-fall.jpg';

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

const mockWeatherData = {
  location: {
    name: 'Cali',
    region: 'Valle del Cauca',
    country: 'Colombia',
    tz_id: 'America/Bogota',
    localtime_epoch: 1701810354,
    localtime: '2023-12-05 16:05',
  },
  current: {
    temp_c: 32,
    temp_f: 89.6,
    is_day: 1,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    },
    wind_mph: 8.1,
    wind_kph: 13,
    humidity: 46,
    feelslike_c: 38,
    feelslike_f: 100.3,
  },
  forecast: {
    forecastday: [
      {
        date: '2023-12-05',
        date_epoch: 1701734400,
        day: {
          maxtemp_c: 29.9,
          maxtemp_f: 85.9,
          mintemp_c: 14.5,
          mintemp_f: 58.1,
          avgtemp_c: 20.3,
          avgtemp_f: 68.6,
          totalsnow_cm: 0,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 87,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: 'Moderate rain',
            icon: '//cdn.weatherapi.com/weather/64x64/day/302.png',
            code: 1189,
          },
          uv: 5,
        },
        astro: {
          sunrise: '05:59 AM',
          sunset: '05:55 PM',
        },
        hour: [
          {
            condition: {},
          },
          {
            condition: {},
          },
        ],
      },
      {
        date: '2023-12-06',
        date_epoch: 1701820800,
        day: {
          maxtemp_c: 29,
          maxtemp_f: 84.1,
          mintemp_c: 14.6,
          mintemp_f: 58.3,
          avgtemp_c: 20.3,
          avgtemp_f: 68.5,
          totalsnow_cm: 0,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 87,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: 'Lluvia moderada a intervalos',
            icon: '//cdn.weatherapi.com/weather/64x64/day/302.png',
            code: 1189,
          },
          uv: 5,
        },
        astro: {
          sunrise: '05:59 AM',
          sunset: '05:55 PM',
        },
        hour: [
          {
            condition: {},
          },
          {
            condition: {},
          },
        ],
      },
    ],
  },
};

const mockFetch = async () => ({
  json: async () => mockWeatherData,
});

const displayCurrentDayInfo = (json) => {
  cityNameEl.innerText = json.location.name;
  conditionEl.innerText = json.current.condition.text;
  conditionImg.setAttribute('src', json.current.condition.icon);
  celsiusEl.innerText = `${json.current.temp_c}°C / `;
  fahrenheitEl.innerText = `${json.current.temp_f}°F`;
  humidityEl.innerText = `Humidity: ${json.current.humidity}`;
};

const displayTomorrowsInfo = (json) => {
  celsiusEl2.innerText = json.forecast.forecastday[1].day.maxtemp_c;
  fahrenheitEl2.innerText = json.forecast.forecastday[1].day.maxtemp_f;
  conditionEl2.innerText = json.forecast.forecastday[1].day.condition.text;
  conditionImg2.setAttribute('src', json.forecast.forecastday[1].day.condition.icon);
};

const displayTodaysDate = (json) => {
  const dateEpoch = json.location.localtime_epoch;
  const { formattedDate } = convertEpochToDate(dateEpoch);
  timeEl.innerText = formattedDate;
};

const displayTomorrowsDate = (json) => {
  const dateEpoch = json.forecast.forecastday[1].date_epoch;
  const formattedDate = convertEpochToDate(dateEpoch).formattedDate2;
  tomorrowDateEl.innerText = formattedDate;
};

const changeBackground = () => {
  if (conditionEl.innerText == 'Parcialmente nublado') {
    wrapper.style.backgroundImage = `url('${partlyCloudy}')`;
  }
  if (conditionEl.innerText == 'Soleado') {
    wrapper.style.backgroundImage = `url('${sunny}')`;
  }
  if (conditionEl.innerText == 'Cielo cubierto' || conditionEl.innerText == 'Nublado') {
    wrapper.style.backgroundImage = `url('${mostlyCloudy}')`;
  }
  if (conditionEl.innerText.includes('Lluvia')) {
    wrapper.style.backgroundImage = `url('${rainy}')`;
  }
  if (conditionEl.innerText == 'Niebla helada') {
    wrapper.style.backgroundImage = `url('${freezingFog}')`;
  }
  if (conditionEl.innerText == 'Neblina') {
    wrapper.style.backgroundImage = `url('${foggy}')`;
  }
  if (conditionEl.innerText == 'Fuertes nevadas') {
    wrapper.style.backgroundImage = `url('${heavySnowFall}')`;
  }
  if (conditionEl.innerText == 'Nieve moderada' || conditionEl.innerText == 'Nevadas ligeras') {
    wrapper.style.backgroundImage = `url('${moderateSnowFall}')`;
  }
};

const showWeatherInfo = () => {
  mainEl.classList.add('active');
};

const handleSearchClick = async () => {
  const cityName = cityInputEl.value;
  const url = `${baseUrl}${cityName}&days=2&aqi=no&alerts=no&lang=es`;
  console.log(url);
  // const response = await fetch(url, { mode: 'cors' });
  const response = await mockFetch();
  const json = await response.json();
  // console.log(json);
  showWeatherInfo();
  displayTodaysDate(json);
  displayCurrentDayInfo(json);
  // tomorrow
  displayTomorrowsDate(json);
  displayTomorrowsInfo(json);
  changeBackground();
  return json;
};

searchButton.addEventListener('click', handleSearchClick);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearchClick();
  }
});
