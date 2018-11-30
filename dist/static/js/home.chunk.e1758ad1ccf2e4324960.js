(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);



const Default = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "this home page");

const NotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "404");

const About = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/* import() | about */ 1).then(__webpack_require__.bind(null, 24)));
const Info = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/* import() | info */ 4).then(__webpack_require__.bind(null, 25)));
class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "menu"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      to: "/home"
    }, "home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      to: "/list"
    }, "list")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      to: "/home/info"
    }, "info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      to: "/home/about"
    }, "about"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "chilren page...")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      exact: true,
      path: "/home",
      component: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      exact: true,
      path: "/home/about",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, null)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      exact: true,
      path: "/home/info",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, null)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      path: "*",
      component: NotFound
    })))));
  }

}

/***/ })

}]);