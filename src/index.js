import _ from 'lodash';
import './style.css';
import printMe from './print.js';


import logo from './logo.png';

function component () {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.classList.add('hello');
  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = logo;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());