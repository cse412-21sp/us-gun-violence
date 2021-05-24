self["webpackHotUpdate_N_E"]("components_VegaComp_js",{

/***/ "./components/VegaComp.js":
/*!********************************!*\
  !*** ./components/VegaComp.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ "./store/index.js");
/* harmony import */ var react_loadingg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadingg */ "./node_modules/react-loadingg/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/yeraf/proj/us-gun-violence/components/VegaComp.js",
    _this = undefined,
    _s = $RefreshSig$();









var Main = function Main(_ref) {
  _s();

  var func = _ref.func,
      name = _ref.name,
      width = _ref.width,
      height = _ref.height,
      options = _ref.options;
  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var dataSet = (0,_store_index__WEBPACK_IMPORTED_MODULE_5__.default)(function (state) {
    return state.dataset;
  });
  var vegaOptions = {
    config: {// Vega-Lite default configuration
    },
    init: function init(view) {
      // initialize tooltip handler
      view.tooltip(new vega_tooltip__WEBPACK_IMPORTED_MODULE_4__.Handler().call);
    },
    view: {
      renderer: "canvas"
    }
  };
  vega_lite_api__WEBPACK_IMPORTED_MODULE_2__.register(vega__WEBPACK_IMPORTED_MODULE_1__, vega_lite__WEBPACK_IMPORTED_MODULE_3__, vegaOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    try {
      func({
        dataSet: dataSet,
        options: options
      }).render().then(function (viewElement) {
        if ( true && container.current && container) {
          container.current.appendChild(viewElement);
        }
      });
    } catch (err) {
      console.log(err);
    }

    return function () {
      container.current.innerHtml = "";
    };
  }, [container.current]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    ref: container,
    tw: "rounded-2xl"
  }, name, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 10
  }, _this);
};

_s(Main, "t7qbgatf0ULOCt8MZ2KRuDcYC60=", false, function () {
  return [_store_index__WEBPACK_IMPORTED_MODULE_5__.default];
});

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZnVuYyIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJjb250YWluZXIiLCJ1c2VSZWYiLCJkYXRhU2V0IiwidXNlU3RvcmUiLCJzdGF0ZSIsImRhdGFzZXQiLCJ2ZWdhT3B0aW9ucyIsImNvbmZpZyIsImluaXQiLCJ2aWV3IiwidG9vbHRpcCIsInZlZ2FUb29sdGlwIiwiY2FsbCIsInJlbmRlcmVyIiwidmwiLCJ2ZWdhIiwidmVnYUxpdGUiLCJ1c2VFZmZlY3QiLCJyZW5kZXIiLCJ0aGVuIiwidmlld0VsZW1lbnQiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIdG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxJQUFtQyxRQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsS0FBNkIsUUFBN0JBLEtBQTZCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN2RCxNQUFNQyxTQUFTLEdBQUdDLDZDQUFNLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxxREFBUSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE9BQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUNsQkMsVUFBTSxFQUFFLENBQ047QUFETSxLQURVO0FBSWxCQyxRQUFJLEVBQUUsY0FBQ0MsSUFBRCxFQUFVO0FBQ2Q7QUFDQUEsVUFBSSxDQUFDQyxPQUFMLENBQWEsSUFBSUMsaURBQUosR0FBMEJDLElBQXZDO0FBQ0QsS0FQaUI7QUFRbEJILFFBQUksRUFBRTtBQUNKSSxjQUFRLEVBQUU7QUFETjtBQVJZLEdBQXBCO0FBWUFDLHFEQUFBLENBQVlDLGlDQUFaLEVBQWtCQyxzQ0FBbEIsRUFBNEJWLFdBQTVCO0FBQ0FXLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk7QUFDRnRCLFVBQUksQ0FBQztBQUFFTyxlQUFPLEVBQVBBLE9BQUY7QUFBV0gsZUFBTyxFQUFQQTtBQUFYLE9BQUQsQ0FBSixDQUNHbUIsTUFESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsV0FBRCxFQUFpQjtBQUNyQixZQUFJLFNBQStCcEIsU0FBUyxDQUFDcUIsT0FBekMsSUFBb0RyQixTQUF4RCxFQUFtRTtBQUNqRUEsbUJBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JDLFdBQWxCLENBQThCRixXQUE5QjtBQUNEO0FBQ0YsT0FOSDtBQU9ELEtBUkQsQ0FRRSxPQUFPRyxHQUFQLEVBQVk7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRDs7QUFDRCxXQUFPLFlBQU07QUFDWHZCLGVBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JLLFNBQWxCLEdBQThCLEVBQTlCO0FBQ0QsS0FGRDtBQUdELEdBZlEsRUFlTixDQUFDMUIsU0FBUyxDQUFDcUIsT0FBWCxDQWZNLENBQVQ7QUFpQkEsU0FBTztBQUFLLE9BQUcsRUFBRXJCLFNBQVY7QUFBZ0MsTUFBRSxFQUFDO0FBQW5DLEtBQTBCSixJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWxDRDs7R0FBTUYsSTtVQUVZUyxpRDs7O0tBRlpULEk7QUFtQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c19WZWdhQ29tcF9qcy41YmQyYmJhNjcxNmE3M2RmY2FmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xuaW1wb3J0IHsgQ29mZmVlTG9hZGluZyB9IGZyb20gXCJyZWFjdC1sb2FkaW5nZ1wiO1xuXG5jb25zdCBNYWluID0gKHsgZnVuYywgbmFtZSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZigpO1xuICBjb25zdCBkYXRhU2V0ID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5kYXRhc2V0KTtcbiAgY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gICAgY29uZmlnOiB7XG4gICAgICAvLyBWZWdhLUxpdGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgfSxcbiAgICBpbml0OiAodmlldykgPT4ge1xuICAgICAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwIGhhbmRsZXJcbiAgICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICAgIH0sXG4gICAgdmlldzoge1xuICAgICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gICAgfSxcbiAgfTtcbiAgdmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgZnVuYyh7IGRhdGFTZXQsIG9wdGlvbnMgfSlcbiAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIC50aGVuKCh2aWV3RWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQgJiYgY29udGFpbmVyLmN1cnJlbnQgJiYgY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZCh2aWV3RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb250YWluZXIuY3VycmVudC5pbm5lckh0bWwgPSBcIlwiO1xuICAgIH07XG4gIH0sIFtjb250YWluZXIuY3VycmVudF0pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17Y29udGFpbmVyfSBrZXk9e25hbWV9IHR3PVwicm91bmRlZC0yeGxcIj48L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=