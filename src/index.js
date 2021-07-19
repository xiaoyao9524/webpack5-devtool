import _ from 'lodash';
import './style.css';
import testImg from './test.jpg';
import printMe from './print';

function component() {
  const element = document.createElement('div');

  const testFont = document.createElement('div');
  testFont.innerHTML = _.join(['Hello', 'webpack222 !!!', '你好，世界！'], ' ');
  testFont.classList.add('hello');

  const testBg = document.createElement('div');
  testBg.classList.add('bg-test');

  const testImgElement = document.createElement('div');
  testImgElement.classList.add('test-img');
  const myImg = new Image();
  myImg.src = testImg;
  testImgElement.appendChild(myImg);

  const btnWrapper = document.createElement('div');

  const btn = document.createElement('button');
  btn.innerHTML = '按钮';
  btn.onclick = printMe;
  btnWrapper.appendChild(btn);

  element.appendChild(testFont);
  element.appendChild(testBg);
  element.appendChild(testImgElement);
  element.appendChild(btnWrapper);

  return element;
}

document.body.appendChild(component());
