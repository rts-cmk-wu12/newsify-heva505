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

/***/ "./src/sass/_home.scss":
/*!*****************************!*\
  !*** ./src/sass/_home.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/_home.scss?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((module) => {

eval("const API_KEY = 'MlTTn3vMLfdAE6nqruHnKOI2fioS97Ft';\r\nconst BASE_URL = 'https://api.nytimes.com/svc/';\r\nconst endpoints = {\r\n    mostPopularByViews: 'mostpopular/v2/viewed/'\r\n};\r\n\r\nasync function fetchMostPopularByViews(days = 1) {\r\n    const url = new URL(`${endpoints.mostPopularByViews}${days}.json`, BASE_URL);\r\n    url.searchParams.set('api-key', API_KEY);\r\n\r\n    const response = await fetch(url);\r\n\r\n    if (!response.ok) {\r\n        throw new Error(`HTTP error ${response.status}`);\r\n    }\r\n\r\n    const data = await response.json();\r\n    return data;\r\n}\r\n\r\nmodule.exports = fetchMostPopularByViews;\r\n\n\n//# sourceURL=webpack:///./src/js/api.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../sass/_home.scss */ \"./src/sass/_home.scss\");\r\n\r\nconst fetchMostPopularByViews = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n    const settingsButton = document.querySelector('.settings');\r\n    settingsButton.addEventListener('click', () => {\r\n        window.location.href = 'settings.html';\r\n    });\r\n\r\n    try {\r\n        const popularNews = await fetchMostPopularByViews(7);\r\n        console.log(popularNews);\r\n\r\n        const newsSections = document.querySelectorAll('.news-section');\r\n\r\n        popularNews.results.forEach(article => {\r\n            newsSections.forEach(section => {\r\n                const sectionName = section.querySelector('.section-heading__text').textContent.toLowerCase();\r\n                if (article.section.toLowerCase().includes(sectionName)) {\r\n                    const dropdownContent = section.querySelector('.dropdown-content');\r\n                    const articleElement = document.createElement('article');\r\n                    articleElement.classList.add('news-article');\r\n                    articleElement.innerHTML = `\r\n                        <img class=\"news-image\" src=\"${article.media[0]?.['media-metadata'][0].url}\" alt=\"${article.title}\">\r\n                        <div class=\"news-text\">\r\n                            <h3>${article.title}</h3>\r\n                            <p>${article.abstract}</p>\r\n                        </div>\r\n                    `;\r\n                    dropdownContent.appendChild(articleElement);\r\n                }\r\n            });\r\n        });\r\n\r\n        newsSections.forEach(section => {\r\n            const arrow = section.querySelector('.arrow');\r\n            arrow.addEventListener('click', () => {\r\n                section.classList.toggle('open');\r\n            });\r\n        });\r\n    } catch (error) {\r\n        console.error('Error fetching popular news:', error);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/home.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/home.js");
/******/ 	
/******/ })()
;