import _ from 'lodash';
import './style.css';
import Logo from './webpack-logo.svg';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hi', 'poopy'], ' ');

  element.classList.add('hello');

  var webpackLogo = new Image();
  webpackLogo.src = Logo;
  element.appendChild(webpackLogo);

  return element;
}

document.body.appendChild(component());
