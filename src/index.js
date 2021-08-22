
import './styles/main.scss';

import SalvoToon from './svg/salvo.svg';

const $ = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', () => {
  $('#salvo').src = SalvoToon;
}); 