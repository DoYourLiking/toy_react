/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MyCon = /*#__PURE__*/function (_Component) {\n  _inherits(MyCon, _Component);\n\n  var _super = _createSuper(MyCon);\n\n  function MyCon() {\n    var _this;\n\n    _classCallCheck(this, MyCon);\n\n    _this = _super.call(this);\n    _this.state = {\n      a: 1,\n      b: 2\n    };\n    return _this;\n  }\n\n  _createClass(MyCon, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return (0,_react__WEBPACK_IMPORTED_MODULE_0__.zk_creatElement)(\"div\", null, (0,_react__WEBPACK_IMPORTED_MODULE_0__.zk_creatElement)(\"h1\", null, \"\\u8FD9\\u662F\\u4E00\\u4E2A\\u7EC4\\u4EF6\\u51FD\\u6570\"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.zk_creatElement)(\"h2\", null, this.state.a.toString()), (0,_react__WEBPACK_IMPORTED_MODULE_0__.zk_creatElement)(\"h2\", null, this.state.b.toString()), (0,_react__WEBPACK_IMPORTED_MODULE_0__.zk_creatElement)(\"button\", {\n        onclick: function onclick() {\n          _this2.setState({\n            a: _this2.state.a + 1\n          });\n        }\n      }, \"add\"), this.childRen);\n    }\n  }]);\n\n  return MyCon;\n}(_react__WEBPACK_IMPORTED_MODULE_0__.Component); // var a = zk_creatElement(\"div\", {\n//     id: \"root\",\n//     \"class\": \"root\"\n//   }, \"222\", zk_creatElement(\"div\", {\n//     name: \"child\"\n//   }), zk_creatElement(\"div\", {\n//     name: \"child\"\n//   }), zk_creatElement(\"div\", {\n//     name: \"child\"\n//   }));\n// let a = <div id=\"root\" class=\"root\">222<div name=\"child\"></div><div name=\"child\"></div><div\n// a由babel后会变成上图的形式，会自动对子节点递归进行creatElement函数，因此只需要定义一个createElement函数即可。此函数只需要最终最终能将属性添加到dom上并且，能够将子节点也添加进去即可（无需递归）。\n\n\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.render)((0,_react__WEBPACK_IMPORTED_MODULE_0__.zk_creatElement)(MyCon, {\n  name: \"main\",\n  \"class\": \"my-con\"\n}, (0,_react__WEBPACK_IMPORTED_MODULE_0__.zk_creatElement)(\"div\", null, \"child 1\")), document.body);\n\n//# sourceURL=webpack://toy_react/./src/main.js?");

/***/ }),

/***/ "./src/react.js":
/*!**********************!*\
  !*** ./src/react.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"zk_creatElement\": () => (/* binding */ zk_creatElement),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol(\"render\");\n\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.dom = document.createElement(type);\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(key, value) {\n      if (key.match(/^on([\\s\\S]+)$/)) {\n        this.dom.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n          return c.toLocaleLowerCase();\n        }), value, false);\n      } else {\n        this.dom.setAttribute(key, value);\n      }\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      var range = document.createRange();\n      range.setStart(this.dom, this.dom.childNodes.length);\n      range.setEnd(this.dom, this.dom.childNodes.length);\n      child[RENDER_TO_DOM](range);\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.dom);\n    }\n  }]);\n\n  return ElementWrapper;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.dom = document.createTextNode(content);\n  }\n\n  _createClass(TextWrapper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.dom);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\nvar Component = /*#__PURE__*/function () {\n  function Component(type) {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    this.childRen = [];\n    this._dom = null;\n    this._range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(key, value) {\n      this.props[key] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.childRen.push(child);\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      this.render()[RENDER_TO_DOM](range);\n    }\n  }, {\n    key: \"reRender\",\n    value: function reRender() {\n      this._range.deleteContents();\n\n      this[RENDER_TO_DOM](this._range);\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(new_state) {\n      if (this.state == null || _typeof(this.state) !== \"object\") {\n        this.state = new_state;\n        this.reRender();\n        return;\n      }\n\n      var merge = function merge(old_state, new_state) {\n        for (var i in new_state) {\n          if (old_state[i] !== null || _typeof(old_state[i]) !== \"object\") {\n            old_state[i] = new_state[i];\n          } else {\n            merge(old_state[i], new_state[i]);\n          }\n        }\n      };\n\n      merge(this.state, new_state);\n      this.reRender();\n    } // get dom() {\n    //     if (!this._dom) {\n    //         this._dom = this.render().dom\n    //     }\n    //     return this._dom不能添加else,拿到以后必须返回dom,改为将render_to_dom方法写到textWrapper和textWrapper\n    // }\n\n  }]);\n\n  return Component;\n}();\nfunction zk_creatElement(tagName, options) {\n  var e;\n\n  if (typeof tagName === \"string\") {\n    e = new ElementWrapper(tagName);\n  } else {\n    e = new tagName();\n  }\n\n  for (var i in options) {\n    e.setAttribute(i, options[i]);\n  } // for(let i of childRen){\n  //     if(typeof i==\"string\"){\n  //         i=new TextWrapper(i)\n  //     }\n  //     e.appendChild(i)\n  // }未考虑数组的情况,即<MyCon><div></div></MyCon>,最后{this.children}，此时jsx会把this.children收集到当前的children数组，会出现就会出现appendChild(child)的情况。\n\n\n  var insert = function insert(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _i = _step.value;\n\n        if (typeof _i == \"string\") {\n          _i = new TextWrapper(_i);\n        }\n\n        if (Array.isArray(_i)) {\n          insert(_i);\n        } else {\n          e.appendChild(_i);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, childRen = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    childRen[_key - 2] = arguments[_key];\n  }\n\n  insert(childRen);\n  return e;\n}\nfunction render(component, parentDom) {\n  var range = document.createRange();\n  range.setStart(parentDom, 0);\n  range.setEnd(parentDom, parentDom.childNodes.length);\n  component[RENDER_TO_DOM](range);\n}\n\n//# sourceURL=webpack://toy_react/./src/react.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;