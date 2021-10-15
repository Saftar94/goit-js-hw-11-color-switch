/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layouts_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/color */ \"./src/layouts/color.js\");\n/* harmony import */ var _layouts_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layouts_color__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://goit-js-hw-11-color-switch/./src/index.js?");

/***/ }),

/***/ "./src/layouts/color.js":
/*!******************************!*\
  !*** ./src/layouts/color.js ***!
  \******************************/
/***/ (() => {

eval("const colors = [\n  '#FFFFFF',\n  '#2196F3',\n  '#4CAF50',\n  '#FF9800',\n  '#009688',\n  '#795548',\n]\n\nconst refs = {\n  startBtn: document.querySelector('[data-action=\"start\"]'),\n  stopBtn: document.querySelector('[data-action=\"stop\"]'),\n  bodyEl: document.querySelector('body'),\n}\n\nconst { startBtn, stopBtn, bodyEl } = refs\n\nstartBtn.addEventListener('click', startclor)\nstopBtn.addEventListener('click', stopInterval)\n\nlet index = 0\nlet arr_count = colors.length - 0\nlet isActive = false\nfunction startclor() {\n  if (isActive) {\n    return\n  }\n  isActive = true\n\n  intervalId = setInterval(() => {\n    console.log(colors[index])\n\n    if (index == arr_count) {\n      index = 0\n    } else {\n      bodyEl.style.backgroundColor =\n        colors[randomIntegerFromInterval([0], colors.length - 1)]\n      startBtn.style.color =\n        colors[randomIntegerFromInterval([0], colors.length - 1)]\n    }\n  }, 1000)\n}\n\nfunction stopInterval() {\n  clearInterval(intervalId)\n  isActive = false\n}\n\nconst randomIntegerFromInterval = (min, max) => {\n  return Math.floor(Math.random() * (max - min + 1) + min)\n}\n\n\n//# sourceURL=webpack://goit-js-hw-11-color-switch/./src/layouts/color.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;