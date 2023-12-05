import './style.css';
import plus from './images/plus.svg';

console.log('test');

const testDiv = document.querySelector('.test');
const plusImage = new Image();
plusImage.src = plus;
testDiv.append(plusImage);
plusImage.style.width = '200px';
