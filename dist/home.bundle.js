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

/***/ "./src/sass/_stayle.scss":
/*!*******************************!*\
  !*** ./src/sass/_stayle.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/_stayle.scss?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../sass/_stayle.scss */ \"./src/sass/_stayle.scss\")\r\n\r\n\r\n\r\nconst fetchMostPopularByViews = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/fetch-most-popular-by-views'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n \r\n/*\r\nfetchMostPopolarByViews(1).then(\r\n    data => console.log(data)\r\n   \r\n);\r\n*/\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n \r\n \r\n \r\n    const settings = document.querySelector('.settings');\r\n    settings.addEventListener('click', () => {\r\n        window.location.href = 'settings.html';\r\n         \r\n     });\r\n \r\n    const popularNews = await fetchMostPopularByViews(7);\r\n    console.log(popularNews);\r\n \r\n \r\n    const sections = document.querySelectorAll('.news-section');\r\n \r\n    popularNews.results.forEach(article => {\r\n        sections.forEach(section => {\r\n            const sectionName = section.querySelector('.section-heading__text').textContent.toLowerCase();\r\n            if (article.section.toLowerCase().includes(sectionName)) {\r\n                const dropdownContent = section.querySelector('.dropdown-content');\r\n                const articleElement = document.createElement('article');\r\n                articleElement.classList.add('news-article');\r\n                articleElement.innerHTML = `\r\n                         <img class=\"news-image\" src=\"${article.media[0]?.['media-metadata'][0].url}\" alt=\"${article.title}\">\r\n                          <div class= \"news-text\">\r\n                           <h3>${article.title}</h3>\r\n                              <p>${article.abstract}</p>\r\n                             </div>`;\r\n \r\n \r\n                // newsText.appendChild(newsArticleHeading, newsArticleDescription);\r\n                //articleElement.appendChild(newsImage, newsText);\r\n                dropdownContent.appendChild(articleElement);\r\n \r\n            }\r\n \r\n \r\n        });\r\n    });\r\n \r\n    sections.forEach(section => {\r\n        const arrow = section.querySelector('.arrow');\r\n \r\n \r\n        arrow.addEventListener('click', () => {\r\n            const content = section.querySelector('.dropdown-content');\r\n            section.classList.toggle('open');\r\n \r\n \r\n            console.log('Arrow clicked:', section);\r\n        });\r\n    });\r\n \r\n});    \r\n \r\n \r\n \r\n \r\n \r\n\n\n//# sourceURL=webpack:///./src/js/home.js?");

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