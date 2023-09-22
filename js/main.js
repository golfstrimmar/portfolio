/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/btn-wave/btn-wave.js":
/*!****************************************************!*\
  !*** ./src/blocks/components/btn-wave/btn-wave.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: function() { return /* binding */ Button; }
/* harmony export */ });
"use ctrict";

var Button = function Button(e) {
  var target = e.target.closest('.but-wave');
  e.preventDefault();
  var mValue = Math.max(target.clientWidth, target.clientHeight),
    addDiv = document.createElement("div"),
    rect = target.getBoundingClientRect();
  addDiv.classList.add("addDiv");
  addDiv.style.width = addDiv.style.height = mValue + "px";
  addDiv.style.left = e.clientX - rect.left - mValue / 2 + "px";
  addDiv.style.top = e.clientY - rect.top - mValue / 2 + "px";
  target.closest(".but-wave").append(addDiv);
  setTimeout(function () {
    addDiv.remove();
  }, 3000);
};

/***/ }),

/***/ "./src/blocks/modules/accord/accord.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/accord/accord.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accords: function() { return /* binding */ Accords; }
/* harmony export */ });
"use ctrict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Accords = function Accords() {
  var Accord = /*#__PURE__*/function () {
    function Accord(accord) {
      _classCallCheck(this, Accord);
      this.Accord = accord;
      this.NavButtons = _toConsumableArray(this.Accord.querySelectorAll("._accord-nav-js button"));
      this.Hidden = this.Accord.querySelector("._accord-hidden-js");
      this.HiddenWrap = this.Accord.querySelector("._accord-hidden-wrap-js");
      this.Hiddens = _toConsumableArray(this.Accord.querySelectorAll("._accord-content-js"));
      this.Index;
    }
    _createClass(Accord, [{
      key: "activItem",
      value: function activItem() {
        var _this = this;
        var _loop = function _loop(i) {
          _this.NavButtons[i].addEventListener("click", function (e) {
            _this.resetClasses();
            _this.itemsReset();
            _this.NavButtons[i].classList.add("_is-active");
            _this.NavButtons[i].setAttribute("disabled", true);
            if (!_this.Hidden.classList.contains("_is-active")) {
              _this.Hidden.classList.add("_is-active");
              for (var k = 0; k < _this.Hiddens.length; ++k) {
                _this.Hiddens[k].classList.remove("_is-active");
                _this.Hiddens[i].classList.add("_is-active");
              }
            } else {
              _this.Hidden.classList.remove("_is-active");
              setTimeout(function () {
                for (var l = 0; l < _this.Hiddens.length; ++l) {
                  _this.Hiddens[l].classList.remove("_is-active");
                  _this.Hiddens[i].classList.add("_is-active");
                }
                _this.Hidden.classList.add("_is-active");
              }, 200);
            }
          });
        };
        for (var i = 0; i < this.NavButtons.length; ++i) {
          _loop(i);
        }
      }
    }, {
      key: "itemsReset",
      value: function itemsReset() {
        for (var i = 0; i < this.NavButtons.length; ++i) {
          this.NavButtons[i].classList.remove("_is-active");
          this.NavButtons[i].removeAttribute("disabled");
        }
      }
    }, {
      key: "hiddenReset",
      value: function hiddenReset() {
        var _this2 = this;
        this.Hidden.classList.remove("_is-active");
        setTimeout(function () {
          for (var i = 0; i < _this2.Hiddens.length; ++i) {
            _this2.Hiddens[i].classList.remove("_is-active");
          }
        }, 200);
      }
    }, {
      key: "resetAll",
      value: function resetAll() {
        var _this3 = this;
        document.addEventListener("click", function (e) {
          if (!e.target.closest("._accord-js")) {
            _this3.itemsReset();
            _this3.hiddenReset();
          }
        });
      }
    }, {
      key: "resetClasses",
      value: function resetClasses() {
        var _this4 = this;
        var _loop2 = function _loop2(j) {
            if (allClassAccords[j].el !== _this4.Accord) {
              if (allClassAccords[j].el.querySelector("._accord-default-js")) {
                ddd = allClassAccords[j].el.querySelector("._accord-default-js");
                if (!ddd.classList.contains("_is-active")) {
                  allClassAccords[j].elClass.itemsReset();
                  allClassAccords[j].elClass.hiddenReset();
                  setTimeout(function () {
                    allClassAccords[j].elClass.openDefault();
                  }, 200);
                }
              } else {
                allClassAccords[j].elClass.itemsReset();
                allClassAccords[j].elClass.hiddenReset();
              }
            }
          },
          ddd;
        for (var j = 0; j < allClassAccords.length; ++j) {
          _loop2(j);
        }
      }
    }, {
      key: "start",
      value: function start() {
        this.activItem();
        this.resetAll();
      }
    }]);
    return Accord;
  }(); // ====================================
  var accordAll = _toConsumableArray(document.querySelectorAll("._accord-js"));
  var allClassAccords = [];
  var temp = {};
  var AccordGefault = /*#__PURE__*/function (_Accord) {
    _inherits(AccordGefault, _Accord);
    var _super = _createSuper(AccordGefault);
    function AccordGefault(accord) {
      var _this5;
      _classCallCheck(this, AccordGefault);
      _this5 = _super.call(this, accord);
      _this5.Default = _this5.Accord.querySelector("._accord-default-js");
      _this5.Index = _this5.Hiddens.indexOf(_this5.Default);
      return _this5;
    }
    _createClass(AccordGefault, [{
      key: "openDefault",
      value: function openDefault() {
        this.NavButtons[this.Index].classList.add("_is-active");
        this.NavButtons[this.Index].setAttribute("disabled", true);
        this.Hiddens[this.Index].classList.add("_is-active");
        this.Hidden.classList.add("_is-active");
      }
    }, {
      key: "resetAll",
      value: function resetAll() {
        document.addEventListener("click", function (e) {
          if (!e.target.closest("._accord-js")) {
            allClassAccords.forEach(function (cell) {
              if (cell.el.querySelector("._accord-default-js")) {
                var ddd = cell.el.querySelector("._accord-default-js");
                if (!ddd.classList.contains("_is-active")) {
                  cell.elClass.itemsReset();
                  cell.elClass.hiddenReset();
                  setTimeout(function () {
                    cell.elClass.openDefault();
                  }, 200);
                }
              }
            });
          }
        });
      }
    }]);
    return AccordGefault;
  }(Accord);
  accordAll.forEach(function (cell) {
    if (cell.querySelector("._accord-default-js")) {
      temp = new AccordGefault(cell);
      temp.openDefault();
    } else {
      temp = new Accord(cell);
    }
    allClassAccords.push({
      el: cell,
      elClass: temp
    });
  });
  allClassAccords.forEach(function (cell) {
    Object.assign(Accord.prototype, allClassAccords);
    cell.elClass.start();
  });
};

/***/ }),

/***/ "./src/blocks/modules/cases/cases.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/cases/cases.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CasesInit: function() { return /* binding */ CasesInit; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
"use ctrict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var CasesInit = function CasesInit() {
  // ==========================================
  var contentCases = /*#__PURE__*/function () {
    function contentCases(cell, num) {
      _classCallCheck(this, contentCases);
      this.cell = cell;
      this.numberItems = num.numberItems;
      this.slider = this.cell.querySelector(".slider-cases");
      this.sliderWrapper = this.cell.querySelector(".swiper-wrapper");
      this.allcontentCases = _toConsumableArray(cell.querySelectorAll("._accord-content-js "));
      this.content = {};
      this.temp = [];
      this.CaseSrc = "";
      this.StoreElement = {};
    }
    _createClass(contentCases, [{
      key: "createSlide",
      value: function createSlide(StoreElement) {
        var tempSlide = document.createElement("li");
        tempSlide.classList.add("slider__item", "swiper-slide");
        tempSlide.innerHTML = "<div class=\"imgs\"><img src=\"".concat(StoreElement.src, "\"></div>");
        this.sliderWrapper.append(tempSlide);
      }
    }, {
      key: "start",
      value: function start(numberItems) {
        var _this = this;
        this.allcontentCases.forEach(function (sell) {
          if (sell.matches("._accord-default-js ")) {
            _toConsumableArray(sell.querySelectorAll("img")).forEach(function (cell) {
              _this.CaseSrc = cell.getAttribute("src");
              _this.StoreElement = {
                src: _this.CaseSrc
              };
              _this.createSlide(_this.StoreElement);
            });
          }
        });
        var tempSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](this.slider, {
          spaceBetween: 10,
          slidesPerView: 1,
          // slidesPerGroup: 4,
          // loop: "true",
          speed: 500,
          grabCursor: true,
          modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
          navigation: {
            prevEl: ".cases-prev",
            nextEl: ".cases-next"
          },
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          breakpoints: {
            600: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1260: {
              slidesPerView: this.numberItems,
              spaceBetween: 30
            }
          }
        });
        var Change = function Change() {
          setTimeout(function () {
            _this.sliderWrapper.innerHTML = "";
            _this.allcontentCases.forEach(function (sell) {
              if (sell.matches("._is-active")) {
                _toConsumableArray(sell.querySelectorAll("img")).forEach(function (cell) {
                  _this.CaseSrc = cell.getAttribute("src");
                  _this.StoreElement = {
                    src: _this.CaseSrc
                  };
                  _this.createSlide(_this.StoreElement);
                });
              }
            });
            tempSwiper.slideTo(0, 0);
          }, 200);
        };
        document.addEventListener("click", function (e) {
          if (e.target.closest("._accord-cases-js") && e.target.closest("._accord-nav-js button")) {
            Change();
          }
          if (!e.target.closest("._accord-js")) {
            var def = _this.cell.querySelector("._accord-default-js");
            if (!def.matches("._is-active")) {
              Change();
            }
          }
          if (e.target.closest("._accord-js") && e.target.closest("._accord-js") !== _this.cell && e.target.closest("._accord-nav-js button")) {
            Change();
          }
        });
      }
    }]);
    return contentCases;
  }();
  if (document.querySelector("#works-cases ")) {
    var accordCases1 = document.querySelector("#works-cases");
    var accordCases1Act = new contentCases(accordCases1, {
      numberItems: 3
    });
    accordCases1Act.start();
  }
};

/***/ }),

/***/ "./src/blocks/modules/galCases/galCases.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/galCases/galCases.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalCases: function() { return /* binding */ GalCases; }
/* harmony export */ });


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GalCases = function GalCases() {
  var GALCASE = /*#__PURE__*/function () {
    function GALCASE(elem, options) {
      _classCallCheck(this, GALCASE);
      this.elem = elem;
      this.GAL = elem.querySelector("._galCases-plaza-js");
      this.Button = elem.querySelector("._galCases-button-js");
      this.Columns = options.numberColumns;
      this.Items = options.numberItems;
      this.NumberAddItems = this.Columns;
      this.tempActive = [];
      this.elements = _toConsumableArray(this.GAL.querySelectorAll("._galCases-item-js"));
    }
    _createClass(GALCASE, [{
      key: "startOrigin",
      value: function startOrigin() {
        for (var i = 0; i < this.elements.length; ++i) {
          if (i < this.Columns) {
            this.elements[i].classList.contains("_is-active") ? this.elements[i] : this.elements[i].classList.add("_is-active");
          } else {
            this.elements[i].classList.contains("_is-active") ? this.elements[i].classList.remove("_is-active") : this.elements[i];
          }
        }
      }
    }, {
      key: "buttonActive",
      value: function buttonActive() {
        if (this.Button.querySelector("svg")) {
          var buttonSvg = this.Button.querySelector("svg");
          buttonSvg.classList.add("_is-active");
          setTimeout(function () {
            buttonSvg.classList.remove("_is-active");
          }, 500);
        }
      }
    }, {
      key: "checkNummbersItems",
      value: function checkNummbersItems() {
        this.tempActive = this.elements.filter(function (el) {
          return el.classList.contains("_is-active");
        });
      }
    }, {
      key: "close",
      value: function close() {
        this.tempActive = [];
        this.NumberAddItems = this.Columns;
        this.startOrigin();
        this.Button.innerHTML = '<span>More<svg><use xlink:href="#load"></use></svg></span>';
      }
    }, {
      key: "addItems",
      value: function addItems() {
        this.checkNummbersItems();
        if (this.tempActive.length === this.elements.length) {
          this.close();
        } else {
          this.NumberAddItems = this.NumberAddItems + this.Items;
          for (var i = 0; i < this.elements.length; ++i) {
            if (i < this.NumberAddItems) {
              this.elements[i].classList.add("_is-active");
            }
          }
          this.checkNummbersItems();
          if (this.tempActive.length === this.elements.length) {
            this.Button.innerHTML = "<span>Close</span>";
          }
        }
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;
        this.startOrigin();
        document.addEventListener("click", function (e) {
          if (!e.target.closest(".galCases__body")) {
            _this.close();
          }
          if (e.target.closest(".galCases") !== _this.elem) {
            _this.close();
          } else if (e.target.closest("._galCases-button-js ") == _this.Button) {
            _this.buttonActive(), setTimeout(function () {
              _this.addItems();
            }, 200);
          }
        });
      }
    }]);
    return GALCASE;
  }(); // ============
  if (document.querySelector("#galCasesteam ")) {
    var galCasesteam = document.querySelector("#galCasesteam ");
    var galCasesteamAct = new GALCASE(galCasesteam, {
      numberColumns: 4,
      numberItems: 4
    });
    galCasesteamAct.start();
  }

  // if (document.querySelector("#galCases2 ")) {
  //   const galCases2 = document.querySelector("#galCases2 ");
  //   const galCases2Act = new GALCASE(galCases2, {
  //     numberColumns: 3,
  //     numberItems: 3,
  //   });
  //   galCases2Act.start();
  // }

  // if (document.querySelector("#galCases3 ")) {
  //   const galCases3 = document.querySelector("#galCases3 ");
  //   const galCases3Act = new GALCASE(galCases3, {
  //     numberColumns: 3,
  //     numberItems: 3,
  //   });
  //   galCases3Act.start();
  // }

  // =================
};

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: function() { return /* binding */ Header; }
/* harmony export */ });
"use ctrict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Header = function Header() {
  var menu = document.querySelector(".menu");
  var header = document.querySelector("header");
  var info = document.querySelector(".info");
  var burger = document.querySelector(".header__burger");
  // const logo = document.querySelector(".logo");
  // const nowLogo = logo.cloneNode(true);
  var now = info.cloneNode(true);
  var body = document.querySelector("body");
  var activeInfo = function activeInfo() {
    menu.classList.add("menu-active");
    now.classList.add("info-active");
    // menu.prepend(nowLogo);
    menu.append(now);
    body.classList.contains("lock") ? body.classList.remove("lock") : body.classList.add("lock");
  };
  var normalInfo = function normalInfo() {
    menu.classList.remove("menu-active");
    menu.querySelector(".info").remove();
    info.classList.remove("info-active");
    body.classList.remove("lock");
  };
  var activeMenu = function activeMenu() {
    menu.classList.contains("_is-active") ? menu.classList.remove("_is-active") : menu.classList.add("_is-active");
    burger.classList.contains("_is-active") ? burger.classList.remove("_is-active") : burger.classList.add("_is-active");
  };
  var activeItemHEAD = function activeItemHEAD(event) {
    var temp = event.target.closest(".menu__link");
    _toConsumableArray(document.querySelectorAll(".menu__link ")).forEach(function (cell) {
      temp == cell ? cell.classList.add("menu__link--active") : cell.classList.remove("menu__link--active");
    });
  };
  document.addEventListener("click", function (event) {
    if (event.target.closest(".header__burger") && window.innerWidth <= 767) {
      activeInfo();
      activeMenu();
    } else if (event.target.closest(".header__burger") && window.innerWidth >= 768) {
      menu.classList.contains("active-menu") ? menu.classList.remove("active-menu") : menu.classList.add("active-menu");
      burger.classList.contains("_is-active") ? burger.classList.remove("_is-active") : burger.classList.add("_is-active");
    }
    // if (event.target.closest(".header__close")) {
    //   normalInfo();
    // }

    if (event.target.closest(".menu__link")) {
      activeItemHEAD(event);
    }

    // if (event.target.closest(".menu-link-js")) {
    //   var temp = event.target.closest(".menu-link-js");
    //   [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
    //     if (temp == cell) {
    //       cell.classList.contains("_is-active")
    //         ? cell.classList.remove("_is-active")
    //         : cell.classList.add("_is-active");
    //     } else {
    //       cell.classList.remove("_is-active");
    //     }
    //   });
    // } else {
    //   [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
    //     cell.classList.remove("_is-active");
    //   });
    // }
  });

  var resetAll = function resetAll() {
    menu.querySelector(".header__info").remove();
    burger.classList.remove("_is-active");
    menu.classList.remove("active-menu");
    menu.classList.remove("_is-active");
    info.classList.remove("info-active");
    body.classList.remove("lock");
  };

  // --------------------------
  if (window.pageYOffset > 100) {
    header.classList.add("responciveHeader");
  }
  // --------------------------

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
      header.classList.add("responciveHeader");
    } else {
      header.classList.remove("responciveHeader");
    }
  });

  // ---------------------------------------------
  if (window.innerWidth >= 767) {
    if (menu.querySelector(".header__info")) {
      resetAll();
    }
  }
  window.onresize = function () {
    if (window.innerWidth >= 767) {
      resetAll();
    } else {
      if (menu.classList.contains("active-menu")) {
        menu.classList.remove("active-menu");
        activeInfo();
        activeMenu();
        burger.classList.add("_is-active");
      }
    }
  };

  // // -----------------------------------
  var Dark = function Dark() {
    var temadark = document.querySelector("#temadark");
    var temadarkRadio = document.querySelector(".fildset-radio--tema");
    temadarkRadio.addEventListener("click", function (e) {
      if (temadark.checked) {
        document.querySelector("body").classList.add("_dark");
      } else {
        document.querySelector("body").classList.remove("_dark");
      }
    });
  };
  Dark();
};

/***/ }),

/***/ "./src/blocks/modules/popup/popup.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/popup/popup.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popup: function() { return /* binding */ Popup; }
/* harmony export */ });
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Popup = function Popup() {
  var Popup = /*#__PURE__*/function () {
    function Popup(popup) {
      _classCallCheck(this, Popup);
      this.popInit = popup;
      this.rel = this.popInit.getAttribute("rel");
      this.pop = document.querySelector(".popup-js");
      this.content = "";
      this.newPlayer = "";
      this.body = document.querySelector("body");
    }
    _createClass(Popup, [{
      key: "newPlyr",
      value: function newPlyr(arg) {
        var r = "#".concat(arg);
        this.newPlayer = new (plyr__WEBPACK_IMPORTED_MODULE_0___default())(r);
        this.newPlayer.play();
      }
      // =====================
    }, {
      key: "closePlyr",
      value: function closePlyr() {
        if (this.newPlayer) {
          this.newPlayer.destroy();
          this.newPlayer = "";
        }
      }
      // =====================
    }, {
      key: "open",
      value: function open() {
        this.pop.classList.add("_is-active");
        this.content = this.pop.querySelector(this.rel);
        this.content.classList.add("_is-active");
        if (this.content.matches(".popup__content--plyr")) {
          this.linkPlyr = this.content.querySelector("video").getAttribute("id");
          if (this.linkPlyr) {
            this.newPlyr(this.linkPlyr);
          }
        }
      }

      // =====================
    }, {
      key: "startGalary",
      value: function startGalary(plasa, itemIndex) {
        var popupGalerySwiper = this.pop.querySelector("#popupGalerySwiper");
        popupGalerySwiper.innerHTML = "";
        for (var i = 0; i < plasa.length; i++) {
          var temp = document.createElement("li");
          temp.classList.add("slider__item", "swiper-slide", "rel");
          temp.innerHTML = " <div class=\"imgs\">\n        <img src= \"".concat(plasa[i], "\"> </img>\n      </div>");
          popupGalerySwiper.append(temp);
        }
        mySwiperGalary.update();
        mySwiperGalary.slideTo(itemIndex, 0);
      }
      // =====================
    }, {
      key: "start",
      value: function start(tempPopup) {
        var _this = this;
        this.popInit = tempPopup;
        this.rel = this.popInit.getAttribute("rel");
        this.body.classList.add("lock");
        setTimeout(function () {
          _this.open();
        }, 200);
      }
      // =====================
    }], [{
      key: "close",
      value: function close() {
        document.querySelector("body").classList.remove("lock");
        document.querySelector(".popup-js").classList.remove("_is-active");
        document.querySelector(".popup__content._is-active").classList.remove("_is-active");
      }
    }]);
    return Popup;
  }();
  var mySwiperGalary = {};
  var logikPopup = function logikPopup() {
    var newPopup = new Popup(document.querySelector(".popups-init-js"));
    var tempPopup = [];
    document.addEventListener("click", function (e) {
      if (e.target.closest(".popups-init-js")) {
        tempPopup = e.target.closest(".popups-init-js");
        newPopup.start(tempPopup);
      }
      if (e.target == document.querySelector(".popup-overlay-js") || e.target.closest(".popup-close-js")) {
        newPopup.closePlyr();
        Popup.close();
        document.querySelector(".popup__content").classList.remove("_is-active");
      }
      if (e.target.closest(".galery__item")) {
        var temp = _toConsumableArray(e.target.closest("._accord-content-js").querySelectorAll(".galery__item img"));
        var plasa = _toConsumableArray(e.target.closest("._accord-js").querySelector("._accord-content-js._is-active").querySelectorAll(".galery__item "));
        temp = temp.map(function (el) {
          return el.getAttribute("src");
        });
        var itemIndex = plasa.indexOf(e.target.closest(".galery__item"));
        newPopup.startGalary(temp, itemIndex);
      }
    });
  };
  var SliderGalery = function SliderGalery() {
    mySwiperGalary = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]("#slider-galery", {
      slidesPerView: 1,
      speed: 500,
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
      navigation: {
        nextEl: ".arrow-galery-next",
        prevEl: ".arrow-galery-prev"
      },
      grabCursor: true
    });
  };
  logikPopup();
  if (document.querySelector("#slider-galery")) {
    SliderGalery();
  }
};

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_btn_wave_btn_wave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/btn-wave/btn-wave */ "./src/blocks/components/btn-wave/btn-wave.js");
/* harmony import */ var _utils_scroll_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/scroll-link */ "./src/js/utils/scroll-link.js");
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/animation */ "./src/js/utils/animation.js");
/* harmony import */ var _utils_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/lazy */ "./src/js/utils/lazy.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




// import { myCopy } from "../utils/myCopy";

document.addEventListener("DOMContentLoaded", function () {
  //   // ==========Button=============
  if (document.querySelector(".but-wave")) {
    _toConsumableArray(document.querySelectorAll(".but-wave")).forEach(function (cell) {
      cell.addEventListener("click", _components_btn_wave_btn_wave__WEBPACK_IMPORTED_MODULE_0__.Button);
    });
  }
  if (document.querySelector("#bunner-link")) {
    (0,_utils_scroll_link__WEBPACK_IMPORTED_MODULE_1__.ScrollLink)();
  }

  //   // ==========Button=============
  // if (document.querySelector(".copy")) {
  //   myCopy();
  // }
  // ============появление текста================
  (0,_utils_animation__WEBPACK_IMPORTED_MODULE_2__.Anim)();

  //   // ========Lazy===============

  if (document.querySelector("img")) {
    var temp = _toConsumableArray(document.querySelectorAll("img")).map(function (el) {
      return el.getAttribute("data");
    });
    temp = temp.filter(function (el) {
      return el !== null;
    });
    if (temp.length > 0) {
      (0,_utils_lazy__WEBPACK_IMPORTED_MODULE_3__.Lazy)();
    }
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_accord_accord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/accord/accord */ "./src/blocks/modules/accord/accord.js");
/* harmony import */ var _modules_cases_cases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/cases/cases */ "./src/blocks/modules/cases/cases.js");
/* harmony import */ var _modules_galCases_galCases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/galCases/galCases */ "./src/blocks/modules/galCases/galCases.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/popup/popup */ "./src/blocks/modules/popup/popup.js");

// import { bunnerSwiper } from "%modules%/bunner/bunner";
// import { Tab } from "%modules%/tab/tab";

// import { SideMenu } from "%modules%/side-menu/side-menu";

// import { GalleryInit } from "%modules%/galery/galery";

// import { Marque } from "%modules%/marque/marque";
// import { Swiperwk } from "%modules%/wk/wk";
// import { Swiper1 } from "%modules%/swiper-1/swiper-1";
// import { SwiperFull } from "%modules%/slider-full/slider-full";
// import { SwiperScroll } from "%modules%/slider-scroll/slider-scroll";
// import { Double } from "%modules%/slider-double/sdouble.js";
// import { MyRange } from "%modules%/range/range";
// import { Select } from "%modules%/select/select";

// import { Look } from "%modules%/look/look";
// // import { TypedItem } from "%modules%/typed/typedHover";

document.addEventListener("DOMContentLoaded", function () {
  // =====Look==================
  // if (document.querySelector("video")) {
  //   Look();
  // }

  // =====Header==================
  if (document.querySelector("header")) {
    (0,_modules_header_header__WEBPACK_IMPORTED_MODULE_0__.Header)();
  }

  //   // =========bunner slider==============
  // if (document.querySelector("#bunner-slider")) {
  //   bunnerSwiper();
  // }
  // ========popup===============
  if (document.querySelector(".popups-init-js")) {
    (0,_modules_popup_popup__WEBPACK_IMPORTED_MODULE_4__.Popup)();
  }
  //   // ======Tab=================
  // if (document.querySelector("._tabs-container-js")) {
  //   Tab();
  // }
  //   // =========sideMenu==============
  // if (document.querySelector("._smenu-js")) {
  //   SideMenu();
  // }
  //   // ====Accords=====
  if (document.querySelector(".accord")) {
    (0,_modules_accord_accord__WEBPACK_IMPORTED_MODULE_1__.Accords)();
  }
  //   // ========Cases=============
  if (document.querySelector("._accord-cases-js")) {
    (0,_modules_cases_cases__WEBPACK_IMPORTED_MODULE_2__.CasesInit)();
  }
  //   // ======Gallery======================
  // if (document.querySelector("._accord-galery-js")) {
  //   GalleryInit();
  // }
  //   // ====GalCases=====
  if (document.querySelector("._galCases-plaza-js")) {
    (0,_modules_galCases_galCases__WEBPACK_IMPORTED_MODULE_3__.GalCases)();
  }

  // =========swiper-1==============
  // if (document.querySelector("#swiperwk")) {
  //   Swiperwk();
  // }
  // =========swiper-1==============
  // if (document.querySelector("#swiper-1")) {
  //   Swiper1();
  // }
  //   // ========swiper-1licens===============
  // if (document.querySelector("#swiper-1licens")) {
  //   Swiper1licens();
  // }
  //   // =======================
  // if (document.querySelector(".marque")) {
  //   Marque();
  // }
  // // ======slider-full=================
  // if (document.querySelector("#slider-full")) {
  //   SwiperFull();
  // }
  // //   // =====swiper-scroll==================
  // if (document.querySelector("#swiper-scroll")) {
  //   SwiperScroll();
  // }
  // //   // ========swiperDouble===============
  // if (document.querySelector("#swiperDoubleTop")) {
  //   Double();
  // }

  // //   // =======================
  // const ranges = [...document.querySelectorAll(".range-wrap")];
  // if (ranges.length > 0) {
  //   ranges.forEach((item) => {
  //     MyRange(item);
  //   });
  // }
  // //   // =========Select==============
  // const selects = [...document.querySelectorAll(".select")];
  // if (selects.length > 0) {
  //   selects.forEach((select) => {
  //     Select(select);
  //   });
  // }

  //   // =======================

  // const textTypedAll = [...document.querySelectorAll("._hover-typed")];
  // if (textTypedAll.length > 0) {
  //   textTypedAll.forEach((item) => {
  //     TypedItem(item);
  //   });
  // }

  // // =======================

  // // // ======GalSlider==================
  // // if (document.querySelector("#galSlider")) {
  // //   GalSlider();
  // // }
  // // const tabs = document.querySelectorAll(".tabs-container-js");
  // // if (tabs.length > 0) {
  // //   document.addEventListener("click", (e) => {
  // //     if (e.target.closest(".tab-title-js")) {
  // //       const target = e.target.closest(".tab-js");
  // //       const Tab = new MyTab(target);
  // //       Tab.start();
  // //     } else if (!e.target.closest(".tabs-container-js")) {
  // //       MyTab.resetAll();
  // //     } else if (!e.target.closest(".tab-js")) {
  // //       MyTab.resetAll();
  // //     }
  // //   });
  // // }
  // // ===============================================
  // Object.defineProperty(HTMLElement.prototype, "addAct", {
  //   get: function () {
  //     if (!this.matches("_is-active")) {
  //       return this.classList.add("_is-active");
  //     }
  //   },
  // });

  // Object.defineProperty(HTMLElement.prototype, "remAct", {
  //   get: function () {
  //     if (this.matches("_is-active")) {
  //       return this.classList.remove("_is-active");
  //     }
  //   },
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");


// import { createApp } from "vue";
// import VueDatePicker from "@vuepic/vue-datepicker";

// import Rooms from "./../familia/rooms/Rooms.vue";
// import CheckIn from "../blocks/components/vue-components/CheckIn.vue";
// import CheckOut from "../blocks/components/vue-components/CheckOut.vue";

// createApp(Rooms).mount("#app");
// createApp(CheckIn).component("VueDatePicker", VueDatePicker).mount("#check-in");
// createApp(CheckOut)
// .component("VueDatePicker", VueDatePicker)
// .mount("#check-out");

/***/ }),

/***/ "./src/js/utils/animation.js":
/*!***********************************!*\
  !*** ./src/js/utils/animation.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anim: function() { return /* binding */ Anim; }
/* harmony export */ });
"use ctrict";

var Anim = function Anim() {
  var observer1 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("top-animation");
      }
    });
  });
  var et = document.querySelectorAll("._enter-top");
  if (et.length > 0) {
    et.forEach(function (ent) {
      observer1.observe(ent);
    });
  }
  // ======================
  var observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("left-animation");
      }
    });
  });
  var left = document.querySelectorAll("._enter-left");
  if (left.length > 0) {
    left.forEach(function (ent) {
      observer2.observe(ent);
    });
  }

  // ===============================

  var observer3 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("right-animation");
      }
    });
  });
  var right = document.querySelectorAll("._enter-right");
  if (right.length > 0) {
    right.forEach(function (ent) {
      observer3.observe(ent);
    });
  }
};

/***/ }),

/***/ "./src/js/utils/lazy.js":
/*!******************************!*\
  !*** ./src/js/utils/lazy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lazy: function() { return /* binding */ Lazy; }
/* harmony export */ });
"use ctrict";

var Lazy = function Lazy() {
  var images = document.querySelectorAll("img");
  // const options = {
  //   root: null,
  //   rootMargin: "-255px",
  //   threshold: 0.1,
  // };
  // function handleImg(myImg, observer) {
  //   myImg.forEach((myImgSingle) => {
  //     // console.log(myImgSingle.intersectionRatio);
  //     if (myImgSingle.intersectionRatio > 0) {
  //       loadImg(myImgSingle.target);
  //     }
  //   });
  // }
  // function loadImg(img) {
  //   if (img.getAttribute("data")) {
  //     img.style.opacity = 1;

  //     img.src = img.getAttribute("data");
  //   }
  // }

  // const observer = new IntersectionObserver(handleImg, options);
  images.forEach(function (img) {
    if (img.getAttribute("data")) {
      img.style.opacity = 0;
      // observer.observe(img);img.clientHeight
      window.addEventListener("scroll", function () {
        if (img.getBoundingClientRect().top < document.documentElement.clientHeight - 5) {
          img.style.opacity = 1;
          img.src = img.getAttribute("data");
          return;
        }
      });
    }
  });

  // const MyLazysource = () => {
  //   // let images = document.querySelectorAll("source");
  //   const options = {
  //     root: null,
  //     rootMargin: "-5px",
  //     threshold: 0.1,
  //   };
  //   function handleImg(myImg, observer) {
  //     myImg.forEach((myImgSingle) => {
  //       // console.log(myImgSingle.intersectionRatio);
  //       if (myImgSingle.intersectionRatio > 0) {
  //         loadImg(myImgSingle.target);
  //       }
  //     });
  //   }
  //   function loadImg(img) {
  //     if (img.getAttribute("data")) {
  //       img.srcset = img.getAttribute("data");
  //       img.src = img.getAttribute("data");
  //     }
  //   }

  //   const observer = new IntersectionObserver(handleImg, options);
  //   images.forEach((img) => {
  //     observer.observe(img);
  //   });
  // };
  // MyLazysource();
};

/***/ }),

/***/ "./src/js/utils/scroll-link.js":
/*!*************************************!*\
  !*** ./src/js/utils/scroll-link.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollLink: function() { return /* binding */ ScrollLink; }
/* harmony export */ });
"use ctrict";

var ScrollLink = function ScrollLink() {
  // собираем все якоря; устанавливаем время анимации и количество кадров
  var anchor = document.querySelector("#bunner-link"),
    animationTime = 100,
    framesCount = 20;
  // каждому якорю присваиваем обработчик события
  anchor.addEventListener("click", function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    var coordY = document.querySelector("".concat(anchor.getAttribute("href"))).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    var scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      var scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
};

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map