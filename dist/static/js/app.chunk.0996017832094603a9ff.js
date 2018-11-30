(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(8);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ../node_modules/react-router-dom/es/BrowserRouter.js + 2 modules
var BrowserRouter = __webpack_require__(20);

// EXTERNAL MODULE: ../node_modules/react-router-dom/es/Switch.js + 1 modules
var Switch = __webpack_require__(22);

// EXTERNAL MODULE: ../node_modules/react-router-dom/es/Route.js + 1 modules
var Route = __webpack_require__(23);

// EXTERNAL MODULE: ../node_modules/react-router-dom/es/Redirect.js + 2 modules
var Redirect = __webpack_require__(21);

// CONCATENATED MODULE: ../src/app.js



const Home = Object(react["lazy"])(() => Promise.all(/* import() | home */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 26)));
const List = Object(react["lazy"])(() => __webpack_require__.e(/* import() | list */ 5).then(__webpack_require__.bind(null, 27)));
class app_App extends react["Component"] {
  render() {
    return react_default.a.createElement(BrowserRouter["a" /* default */], null, react_default.a.createElement(react["Suspense"], {
      fallback: react_default.a.createElement("div", null, "loading...")
    }, react_default.a.createElement(Switch["a" /* default */], null, react_default.a.createElement(Route["a" /* default */], {
      path: "/home",
      component: props => react_default.a.createElement(Home, props)
    }), react_default.a.createElement(Route["a" /* default */], {
      exact: true,
      path: "/list",
      render: () => react_default.a.createElement(List, null)
    }), react_default.a.createElement(Redirect["a" /* default */], {
      to: "/home"
    }))));
  }

}
// CONCATENATED MODULE: ../src/index.js



react_dom_default.a.render(react_default.a.createElement(app_App, null), document.getElementById('app'));

/***/ })

},[[17,6,0]]]);