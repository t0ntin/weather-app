import './style.css';
import plus from './images/plus.svg';

console.log('test');

const testDiv = document.querySelector('.test');
const plusImage = new Image();
plusImage.src = plus;
testDiv.append(plusImage);
plusImage.style.width = '50px';

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
    ],
  },
};

const mockFetch = async (url) => ({
  json: async () => mockWeatherData,
});

const weatherDataEl = document.querySelector('.weather-data-el');
const cityInputEl = document.querySelector('.city-input-el');
const searchButton = document.querySelector('.search-button');
const baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=dc5b7d95a22a4c70ba820628230312&q=';
const conditionImg = document.querySelector('.condition-img');

const handleSearchClick = async () => {
  const cityName = cityInputEl.value;
  const url = `${baseUrl}${cityName}&days=2&aqi=no&alerts=no`;
  console.log(url);
  // const response = await fetch(url, { mode: 'cors' });
  const response = await mockFetch();
  const json = await response.json();
  console.log(json);
  conditionImg.setAttribute('src', json.current.condition.icon);
  weatherDataEl.append(conditionImg);
};

searchButton.addEventListener('click', handleSearchClick);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearchClick();
  }
});
