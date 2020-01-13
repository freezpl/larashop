(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/AuthLayout/auth_layout.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/layouts/AuthLayout/auth_layout.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth_layout{\r\n   background: url('/public/img/logo/auth_background.jpg');\r\n   background-size: cover;\r\n}\r\n\r\n.auth_overlay{\r\n    background: rgba(0, 138, 132, 0.83);\r\n    padding-top: 100px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/layouts/AuthLayout/AuthLayout.js":
/*!*******************************************************!*\
  !*** ./resources/js/layouts/AuthLayout/AuthLayout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth_layout.css */ "./resources/js/layouts/AuthLayout/auth_layout.css");
/* harmony import */ var _auth_layout_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth_layout_css__WEBPACK_IMPORTED_MODULE_1__);



var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "auth_layout"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "auth_overlay row justify-content-center h-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./resources/js/layouts/AuthLayout/auth_layout.css":
/*!*********************************************************!*\
  !*** ./resources/js/layouts/AuthLayout/auth_layout.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./auth_layout.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/layouts/AuthLayout/auth_layout.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=7.js.map