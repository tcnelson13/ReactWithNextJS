webpackHotUpdate("static/development/pages/speakers.js",{

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_SpeakerCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/SpeakerCard */ "./src/SpeakerCard.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/tnelson/Documents/Self Study/Pluralsight/ReactWithNextJS/FinalOptimizedNextJS/pages/speakers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_10___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Speakers = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Speakers, _React$Component);

  var _super = _createSuper(Speakers);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Speakers, null, [{
    key: "GetSpeakersUrl",
    value: function GetSpeakersUrl() {
      if (false) {} else {
        return "http://localhost:4000/speakers";
      }
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, isServer, promise;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req;
              // REST calls using json-server
              isServer = !!req;
              console.log('isServer: ', isServer);

              if (!isServer) {
                _context.next = 8;
                break;
              }

              promise = axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(Speakers.GetSpeakersUrl()).then(function (response) {
                return {
                  isLoading: false,
                  hasErrored: false,
                  speakerData: response.data
                };
              })["catch"](function (error) {
                return {
                  hasErrored: true,
                  messaage: error.message
                };
              });
              return _context.abrupt("return", promise);

            case 8:
              console.log('are we here');
              return _context.abrupt("return", {
                speakerData: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(5)).map(function (_, i) {
                  return {
                    firstName: "",
                    lastName: "",
                    id: i
                  };
                }),
                isLoading: true
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  function Speakers(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Speakers);

    _this = _super.call(this, props); // Initializing state to axios call to db.json result data

    _this.state = {
      isLoading: props.isLoading,
      hasErrored: props.hasErrored,
      message: props.message,
      speakerData: props.speakerData
    }; // console.log(props.speakerData);

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Speakers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(Speakers.GetSpeakersUrl()).then(function (response) {
        _this2.setState({
          hasErrored: false,
          isLoading: false,
          speakerData: response.data
        });
      })["catch"](function (error) {
        _this2.setState({
          hasErrored: true,
          isLoading: false,
          speakerData: []
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // console.log('isLoading: ', this.state.isLoading);
      // if (this.state.isLoading) {
      //     return <div>...is Loading</div>
      // }
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "card-deck",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      }, this.state.speakerData.map(function (speaker) {
        return __jsx("div", {
          className: "card col-4 cardmin margintopbotton20",
          key: speaker.id,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }
        }, __jsx(_src_SpeakerCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isLoading: _this3.props.isLoading,
          speaker: speaker,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 33
          }
        }));
      }))));
    }
  }]);

  return Speakers;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ })

})
//# sourceMappingURL=speakers.js.33243c9c6d9cdd33bf7b.hot-update.js.map