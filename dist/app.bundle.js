webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print_js__ = __webpack_require__(4);

// import './style.css';
// import Icon from './icon.png';
// import Data from './data.json';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
    
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild( myIcon );

  // console.log(Data);
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = __WEBPACK_IMPORTED_MODULE_1__print_js__["a" /* default */];

  element.appendChild(btn);

  return element;
}
// document.body.appendChild(component());

var element = component();
document.body.appendChild(element);

if(false) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = printMe;
function printMe() {
  console.log('I get called from print.js!');
}

/***/ })
],[1]);