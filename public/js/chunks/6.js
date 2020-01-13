(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/DashboardLayout/dashboard.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/layouts/DashboardLayout/dashboard.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\r\n   background: rgb(255, 252, 220);\r\n}\r\n\r\n.auth_overlay{\r\n    background: rgba(0, 138, 132, 0.83);\r\n    padding-top: 100px;\r\n}\r\n\r\ninput[type=radio] {\r\n    display: none;\r\n  }\r\n  \r\n  ul {\r\n    margin: 0;\r\n  }\r\n  \r\n  label {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  input[type=radio] ~ ul {\r\n    -webkit-animation: close 1.5;\r\n            animation: close 1.5;\r\n    display: none;\r\n    heihgt: 0;\r\n    max-height: 500px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  input[type=radio]:checked ~ ul {\r\n    -webkit-animation: open 1.5s;\r\n            animation: open 1.5s;\r\n    display: block;\r\n    heihgt: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  @-webkit-keyframes open {\r\n    from {\r\n      max-height: 0;\r\n    }\r\n    to {\r\n      max-height: auto;\r\n    }\r\n  }\r\n  \r\n  @keyframes open {\r\n    from {\r\n      max-height: 0;\r\n    }\r\n    to {\r\n      max-height: auto;\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes close {\r\n    from {\r\n      display: block;\r\n      max-height: auto;\r\n    }\r\n    to {\r\n      display: none;\r\n      height: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes close {\r\n    from {\r\n      display: block;\r\n      max-height: auto;\r\n    }\r\n    to {\r\n      display: none;\r\n      height: 0;\r\n    }\r\n  }", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/DashboardLayout/ui/DashLink/dashlink.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/layouts/DashboardLayout/ui/DashLink/dashlink.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/DashboardLayout/ui/LeftExpander/left_expander.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/layouts/DashboardLayout/ui/LeftExpander/left_expander.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.left-block{\r\n    background: #009690cc;\r\n    height: 100%;\r\n    float: left;\r\n    /* width: 70px;\r\n    transition: all .3s linear; */\r\n    width: 250px;\r\n}\r\n\r\n.left-block:hover{\r\n    width: 250px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/layouts/DashboardLayout/DashboardLayout.js":
/*!*****************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout/DashboardLayout.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.css */ "./resources/js/layouts/DashboardLayout/dashboard.css");
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_LeftExpander_LeftExpander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/LeftExpander/LeftExpander */ "./resources/js/layouts/DashboardLayout/ui/LeftExpander/LeftExpander.js");




var DashboardLayout = function DashboardLayout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_LeftExpander_LeftExpander__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardLayout);

/***/ }),

/***/ "./resources/js/layouts/DashboardLayout/dashboard.css":
/*!************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout/dashboard.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./dashboard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/DashboardLayout/dashboard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/layouts/DashboardLayout/ui/DashLink/DashLink.js":
/*!**********************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout/ui/DashLink/DashLink.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashlink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashlink.css */ "./resources/js/layouts/DashboardLayout/ui/DashLink/dashlink.css");
/* harmony import */ var _dashlink_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashlink_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var DashLink = function DashLink(_ref) {
  var path = _ref.path,
      label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null);
};

/* harmony default export */ __webpack_exports__["default"] = (DashLink);

/***/ }),

/***/ "./resources/js/layouts/DashboardLayout/ui/DashLink/dashlink.css":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout/ui/DashLink/dashlink.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./dashlink.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/DashboardLayout/ui/DashLink/dashlink.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/layouts/DashboardLayout/ui/LeftExpander/LeftExpander.js":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout/ui/LeftExpander/LeftExpander.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _left_expander_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left_expander.css */ "./resources/js/layouts/DashboardLayout/ui/LeftExpander/left_expander.css");
/* harmony import */ var _left_expander_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_left_expander_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashLink_DashLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DashLink/DashLink */ "./resources/js/layouts/DashboardLayout/ui/DashLink/DashLink.js");


 //import { Link } from 'react-router-dom'

var LeftExpander = function LeftExpander(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftExpander);

/***/ }),

/***/ "./resources/js/layouts/DashboardLayout/ui/LeftExpander/left_expander.css":
/*!********************************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout/ui/LeftExpander/left_expander.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./left_expander.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/DashboardLayout/ui/LeftExpander/left_expander.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=6.js.map