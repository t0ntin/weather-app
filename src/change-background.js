import { conditionEl, wrapper } from './dom-cache';
import partlyCloudy from './images/partly-cloudy.jpg';
import mostlyCloudy from './images/mostly-cloudy.jpg';
import rainy from './images/rainy.webp';
import sunny from './images/sunny.jpg';
import freezingFog from './images/freezing-fog.jpg';
import foggy from './images/foggy.jpeg';
import heavySnowFall from './images/heavy-snow-fall.webp';
import moderateSnowFall from './images/moderate-snow-fall.jpg';

const changeBackground = () => {
  if (conditionEl.innerText == 'Parcialmente nublado') {
    wrapper.style.backgroundImage = `url('${partlyCloudy}')`;
  }
  if (conditionEl.innerText == 'Despejado') {
    wrapper.style.backgroundImage = `url('${sunny}')`;
  }
  if (
    conditionEl.innerText == 'Cielo cubierto'
    || conditionEl.innerText == 'Nublado'
  ) {
    wrapper.style.backgroundImage = `url('${mostlyCloudy}')`;
  }
  if (
    conditionEl.innerText.includes('Lluvia')
    || conditionEl.innerText.includes('lluvias')
  ) {
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
  if (
    conditionEl.innerText == 'Nieve moderada'
    || conditionEl.innerText == 'Nevadas ligeras'
  ) {
    wrapper.style.backgroundImage = `url('${moderateSnowFall}')`;
  }
};

export default changeBackground;
