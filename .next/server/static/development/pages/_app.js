module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/site.css":
/*!**********************!*\
  !*** ./css/site.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Layout */ "./src/Layout.js");
var _jsxFileName = "/Users/tnelson/Documents/Self Study/Pluralsight/ReactWithNextJS/FinalOptimizedNextJS/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_src_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    })));
  }

}

/***/ }),

/***/ "./src/Footer.js":
/*!***********************!*\
  !*** ./src/Footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tnelson/Documents/Self Study/Pluralsight/ReactWithNextJS/FinalOptimizedNextJS/src/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "jumbotron text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("h7", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }
    }, "Silicon Valley Code Camp 2018"), " is Hosted by PayPal in San Jose at their Town Hall location. 2121 North First Street. ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 79
      }
    }, "March 17-20 2020")));
  }

}

Footer.propTypes = {};
Footer.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_SVCClogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/SVCClogo.png */ "./static/SVCClogo.png");
/* harmony import */ var _static_SVCClogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_SVCClogo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tnelson/Documents/Self Study/Pluralsight/ReactWithNextJS/FinalOptimizedNextJS/src/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jumbotron",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-12 col-sm-4 text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }
    }, __jsx("h6", {
      className: "text-uppercase",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 29
      }
    }, "March 17-20\xA0\xA02020"), __jsx("h6", {
      className: "text-uppercase",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 29
      }
    }, "San Jose, California")), __jsx("div", {
      className: "col-12 col-sm-8 text-lg-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: _static_SVCClogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 34
      }
    })), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 29
      }
    }, "Silicon Valley Code Camp 2020")))));
  }

}

Header.propTypes = {};
Header.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Layout.js":
/*!***********************!*\
  !*** ./src/Layout.js ***!
  \***********************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/site.css */ "./css/site.css");
/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_site_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./src/Footer.js");
var _jsxFileName = "/Users/tnelson/Documents/Self Study/Pluralsight/ReactWithNextJS/FinalOptimizedNextJS/src/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      children
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }));
  }

}

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tnelson/Documents/Self Study/Pluralsight/ReactWithNextJS/FinalOptimizedNextJS/src/Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("nav", {
      className: "navbar navbar-expand-sm bg-dark navbar-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "navbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("ul", {
      className: "navbar-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 29
      }
    }, "Home")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "/speakers",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, "Speakers")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "/sessions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 29
      }
    }, "Sessions")))));
  }

}

Menu.propTypes = {};
Menu.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./static/SVCClogo.png":
/*!*****************************!*\
  !*** ./static/SVCClogo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map