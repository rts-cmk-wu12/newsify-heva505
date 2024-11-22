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

/***/ "./src/sass/_auth.scss":
/*!*****************************!*\
  !*** ./src/sass/_auth.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/_auth.scss?");

/***/ }),

/***/ "./src/sass/_home.scss":
/*!*****************************!*\
  !*** ./src/sass/_home.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/_home.scss?");

/***/ }),

/***/ "./src/sass/_resets.scss":
/*!*******************************!*\
  !*** ./src/sass/_resets.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/_resets.scss?");

/***/ }),

/***/ "./src/sass/_settings.scss":
/*!*********************************!*\
  !*** ./src/sass/_settings.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/_settings.scss?");

/***/ }),

/***/ "./src/sass/_stayle.scss":
/*!*******************************!*\
  !*** ./src/sass/_stayle.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/sass/_stayle.scss?");

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

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_settings_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/_settings.scss */ \"./src/sass/_settings.scss\");\n/* harmony import */ var _sass_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/_home.scss */ \"./src/sass/_home.scss\");\n/* harmony import */ var _sass_auth_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/_auth.scss */ \"./src/sass/_auth.scss\");\n/* harmony import */ var _sass_resets_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/_resets.scss */ \"./src/sass/_resets.scss\");\n/* harmony import */ var _sass_stayle_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/_stayle.scss */ \"./src/sass/_stayle.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst fetchMostPopularByViews = __webpack_require__(/*! ./home.js */ \"./src/js/home.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n  const app = document.getElementById('app');\r\n\r\n  class SplashScreen {\r\n    #element = null;\r\n\r\n    get element() {\r\n      return this.#element;\r\n    }\r\n\r\n    constructor() {\r\n      this.#element = document.createElement('div');\r\n      this.#element.classList.add('splash-screen');\r\n    }\r\n\r\n    createLogo() {\r\n      const logo = document.createElement('img');\r\n      logo.classList.add('newsify-logo');\r\n      logo.src = './screens/newsify_logo-1.jpg'; // Update the image path\r\n      logo.alt = 'Logo';\r\n      this.#element.append(logo);\r\n      setTimeout(() => {\r\n        logo.style.opacity = 1;\r\n        logo.style.transition = 'opacity 1s ease-in-out';\r\n      }, 1000);\r\n    }\r\n\r\n    createHeading() {\r\n      const heading = document.createElement('h1');\r\n      heading.textContent = 'Newsify';\r\n      heading.classList.add('newsify-heading');\r\n      heading.style.opacity = 0;\r\n      this.#element.append(heading);\r\n      setTimeout(() => {\r\n        heading.style.opacity = 1;\r\n        heading.style.transition = 'opacity 1s ease-in-out';\r\n      }, 2000);\r\n    }\r\n  }\r\n\r\n  const splashScreen = new SplashScreen();\r\n  splashScreen.createLogo();\r\n  splashScreen.createHeading();\r\n  app.appendChild(splashScreen.element);\r\n\r\n  const showOnboarding = () => {\r\n    app.innerHTML = `\r\n      <div id=\"onboarding\" class=\"onboarding\">\r\n        <div id=\"wrapper\">\r\n          <section class=\"onborard\">\r\n            <div class=\"onboard_img\">\r\n              <img src=\"./screens/Onboarding-1.png\" alt=\"onborard\">\r\n            </div>\r\n            <div class=\"onboard1\">\r\n              <h1 class=\"onboard_heading\">Stay Connected,<br>Everywhere, Anytime</h1>\r\n              <p class=\"onboard_writing\">Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>\r\n            </div>\r\n            <div class=\"swap\">\r\n              <span class=\"first_dot\"></span>\r\n              <span class=\"dot\"></span>\r\n              <span class=\"dot\"></span>\r\n            </div>\r\n            <div class=\"onboard_button\">\r\n              <button class=\"skip_button\">Skip</button>\r\n              <button class=\"continue_button\">Continue</button>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n    `;\r\n    initializeOnboarding();\r\n  };\r\n\r\n  setTimeout(showOnboarding, 4000);\r\n\r\n  function initializeOnboarding() {\r\n    const slides = [\r\n      {\r\n        image: './screens/Onboarding-2.png',\r\n        heading: 'Stay Connected,<br>Everywhere, Anytime',\r\n        text: 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.'\r\n      },\r\n      {\r\n        image: './screens/Onboarding-3.png',\r\n        heading: 'Discover the World,<br>One Story at a Time',\r\n        text: 'Explore a wide range of topics and stories from around the globe, tailored just for you.'\r\n      },\r\n      {\r\n        image: './screens/Onboarding-4.png',\r\n        heading: 'Stay Informed,<br>Stay Ahead',\r\n        text: 'Get timely updates and notifications on the topics that matter most to you.'\r\n      }\r\n    ];\r\n\r\n    let currentIndex = 0;\r\n\r\n    const onboardImage = document.querySelector('.onboard_img img');\r\n    const onboardHeading = document.querySelector('.onboard_heading');\r\n    const onboardWriting = document.querySelector('.onboard_writing');\r\n    const continueButton = document.querySelector('.continue_button');\r\n    const skipButton = document.querySelector('.skip_button');\r\n    const dots = document.querySelectorAll('.dot, .first_dot');\r\n\r\n    continueButton.addEventListener('click', () => {\r\n      if (currentIndex === slides.length - 1) {\r\n        window.location.href = 'auth.html';\r\n      } else {\r\n        currentIndex = (currentIndex + 1) % slides.length;\r\n        updateSlide(currentIndex);\r\n      }\r\n    });\r\n\r\n    skipButton.addEventListener('click', () => {\r\n      window.location.href = 'auth.html';\r\n    });\r\n\r\n    function updateSlide(index) {\r\n      onboardImage.src = slides[index].image;\r\n      onboardHeading.innerHTML = slides[index].heading;\r\n      onboardWriting.textContent = slides[index].text;\r\n      updateDots(index);\r\n    }\r\n\r\n    function updateDots(index) {\r\n      dots.forEach((dot, idx) => {\r\n        dot.classList.toggle('active', idx === index);\r\n      });\r\n    }\r\n\r\n    updateSlide(currentIndex);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;