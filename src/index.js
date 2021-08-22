
import './styles/main.scss';

import SalvoToon from './svg/salvo.svg';
import Fb from './svg/fb.svg';
import Twitter from './svg/twitter.svg';
import Email from './svg/email.svg';

const timer = 1500;
const $ = (selector) => document.querySelector(selector);

const moveToon = () => {
  const toon = $('#salvo');
  const amount = 30;

  toon.style.top = (Math.random() * amount) + 'px';
  toon.style.left = (Math.random() * amount) + 50 + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
  $('#salvo').src = SalvoToon;
  $('#fb img').src = Fb;
  $('#twitter img').src = Twitter;
  $('#email img').src = Email;

  setInterval(moveToon, timer);
}); 