import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png';
// import Data from './data.json';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
    
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild( myIcon );

  // console.log(Data);
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
// document.body.appendChild(component());

var element = component();
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}