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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/HelloWorld.js":
/*!*************************************!*\
  !*** ./js/components/HelloWorld.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (name => (\n  `\n    <h1>Olá mundo! Tudo bem?</h1>\n    <h2>Você está no ${name}</h2>\n    <hr />\n  `\n));\n\n\n//# sourceURL=webpack:///./js/components/HelloWorld.js?");

/***/ }),

/***/ "./js/components/List.js":
/*!*******************************!*\
  !*** ./js/components/List.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (data => (\n  `\n    <ul>\n      ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li>`).join('')}\n    </ul>\n  `\n));\n\n//# sourceURL=webpack:///./js/components/List.js?");

/***/ }),

/***/ "./js/components/index.js":
/*!********************************!*\
  !*** ./js/components/index.js ***!
  \********************************/
/*! exports provided: HelloWorld, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld */ \"./js/components/HelloWorld.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HelloWorld\", function() { return _HelloWorld__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ \"./js/components/List.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return _List__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./js/components/index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ */ \"./js/components/index.js\");\n/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils */ \"./js/modules/utils.js\");\n/* harmony import */ var _mock_pessoas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/pessoas */ \"./js/mock/pessoas.js\");\n\n\n\n\n\n\n// console.log('eDeMaior', eMaioridade(10));\n// console.log('eDeMaior', eMaioridade(20));\n\nconst { maiores, menores } = Object(_modules_utils__WEBPACK_IMPORTED_MODULE_1__[\"agrupaPorMaiorEMenor\"])(_mock_pessoas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst html = `\n  ${_components___WEBPACK_IMPORTED_MODULE_0__[\"HelloWorld\"]('Programador a Bordo')}\n  <h3>Maiores</h3>\n  ${_components___WEBPACK_IMPORTED_MODULE_0__[\"List\"](maiores)}\n  <h3>Menores</h3>\n  ${_components___WEBPACK_IMPORTED_MODULE_0__[\"List\"](menores)}\n`\n\ndocument.querySelector('#app').innerHTML = html;\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/mock/pessoas.js":
/*!****************************!*\
  !*** ./js/mock/pessoas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pessoas = [\n  {\n    nome: 'Ayrton',\n    idade: 27\n  },\n  {\n    nome: 'João',\n    idade: 14\n  },\n  {\n    nome: 'Maria',\n    idade: 23\n  },\n  {\n    nome: 'Joana',\n    idade: 21\n  },\n  {\n    nome: 'Lucas',\n    idade: 32\n  },\n  {\n    nome: 'Mateus',\n    idade: 15\n  },\n  {\n    nome: 'Isa',\n    idade: 23\n  },\n  {\n    nome: 'Luiza',\n    idade: 17\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pessoas);\n\n//# sourceURL=webpack:///./js/mock/pessoas.js?");

/***/ }),

/***/ "./js/modules/utils.js":
/*!*****************************!*\
  !*** ./js/modules/utils.js ***!
  \*****************************/
/*! exports provided: eDeMaior, agrupaPorMaiorEMenor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eDeMaior\", function() { return eDeMaior; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"agrupaPorMaiorEMenor\", function() { return agrupaPorMaiorEMenor; });\nconst eDeMaior = idade => idade >= 18;\n\nconst agrupaPorMaiorEMenor = pessoas => (\n  pessoas.reduce(function(valorAcumulador, valorArray) {\n    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';\n\n    valorAcumulador[propMaiorOuMenor].push(valorArray);\n\n    return valorAcumulador;\n   }, { maiores: [], menores: []})\n)\n\n//# sourceURL=webpack:///./js/modules/utils.js?");

/***/ })

/******/ });