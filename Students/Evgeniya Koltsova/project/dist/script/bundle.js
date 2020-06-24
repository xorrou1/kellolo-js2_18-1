/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];\r\nlet prices = [100, 120, 130, 50, 150];\r\nlet ids = [1, 2, 3, 4, 5];\r\nlet imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150',]\r\n\r\nlet createItem = index => ({\r\n    product_name: names[index],\r\n    price: prices[index],\r\n    id_product: ids[index],\r\n    img: imgs[index]\r\n});\r\n\r\nlet fillCatalog = () => {\r\n    ids.forEach((el, index) => {\r\n        catalog.items.push(createItem(index));\r\n    });\r\n};\r\n\r\nlet basket = {\r\n    items: [],\r\n    show: false,\r\n    container: '.basket-items',\r\n    init() {\r\n        this._render();\r\n        this._eventHandler();\r\n    },\r\n    _eventHandler() {\r\n        document.querySelector(this.container).addEventListener('click', (e) => {\r\n            if (e.target.name == 'remove') {\r\n                this.remove(e.target.dataset); //todo\r\n            }\r\n        });\r\n\r\n        document.querySelector('.btn-basket').addEventListener('click', () => {\r\n            this.show = !this.show;\r\n            document.querySelector('.basket-block').classList.toggle('invisible');\r\n        })\r\n    },\r\n    _render() {\r\n        let htmlStr = '';\r\n        this.items.forEach (item => {\r\n            htmlStr += `<div class=\"basket-item\">\r\n                            <img src=\"http://placehold.it/100x80\" alt=\"${item.product_name}\">\r\n                            <div class=\"product-desc\">\r\n                                <p class=\"product-title\">${item.product_name}</p>\r\n                                <p class=\"product-amount\">${item.amount}</p>\r\n                                <p class=\"product-single-price\">${item.price}</p>\r\n                            </div>\r\n                            <div class=\"right-block\">\r\n                                <p class=\"product-price\">${item.price * item.amount}</p>\r\n                                <button class=\"del-btn\" name=\"remove\" data-id=\"${item.id_product}\">&times;</button>\r\n                            </div>\r\n                        </div>`\r\n        });\r\n        document.querySelector(this.container).innerHTML = htmlStr; \r\n    },\r\n    add(item) {\r\n        let find = this.items.find(el => el.id_product == item.id);\r\n\r\n        if (!find) {\r\n            this.items.push(Object.assign({}, createItem(+item.id - 1), {amount: 1}));\r\n        } else {\r\n            find.amount++;\r\n        }\r\n        this._render();\r\n    },\r\n    remove(item) {\r\n        let find = this.items.find(el => el.id_product == item.id);\r\n\r\n        if (find.amount == 1) {\r\n            this.items.splice(this.items.indexOf(find), 1);\r\n        } else {\r\n            find.amount--;\r\n        }\r\n        this._render();\r\n    }\r\n}\r\n\r\nlet catalog = {\r\n    items: [],\r\n    container: '.catalog-items',\r\n    basket: basket,\r\n\r\n    init() {\r\n        fillCatalog();\r\n        this._render();\r\n        this._eventHandler();\r\n    },\r\n    _eventHandler() {\r\n        document.querySelector(this.container).addEventListener('click', (e) => {\r\n            if (e.target.name == 'buy') {\r\n                this.basket.add(e.target.dataset);\r\n            }\r\n        });\r\n    },\r\n    _render() {\r\n        let htmlStr = '';\r\n        this.items.forEach (item => {\r\n            htmlStr += `<div class=\"catalog-item\">\r\n                        <img src=\"${item.img}\" alt=\"${item.product_name}\">\r\n                        <div class=\"desc\">\r\n                            <h3>${item.product_name}</h3>\r\n                            <p>${item.price} $</p>\r\n                            <button \r\n                                class=\"buy-btn\" \r\n                                name=\"buy\"\r\n                                data-id=\"${item.id_product}\"\r\n                            >Buy</button>\r\n                        </div>\r\n                    </div>`\r\n        })\r\n        document.querySelector(this.container).innerHTML = htmlStr;      \r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    basket.init();\r\n    catalog.init();   \r\n});\n\n//# sourceURL=webpack:///./src/components/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main.js */ \"./src/components/main.js\");\n/* harmony import */ var _layout_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/css/style.css */ \"./src/layout/css/style.css\");\n/* harmony import */ var _layout_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/css/normalize.css */ \"./src/layout/css/normalize.css\");\n/* harmony import */ var _layout_css_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\nObject(_components_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layout/css/normalize.css":
/*!**************************************!*\
  !*** ./src/layout/css/normalize.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/layout/css/normalize.css?");

/***/ }),

/***/ "./src/layout/css/style.css":
/*!**********************************!*\
  !*** ./src/layout/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/layout/css/style.css?");

/***/ })

/******/ });