(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_VegaComp_js"],{

/***/ "./components/VegaComp.js":
/*!********************************!*\
  !*** ./components/VegaComp.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ "./store/index.js");
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
      var resultFunc = func({
        dataSet: dataSet,
        options: options
      });
      resultFunc.render().then(function (viewElement) {
        if ( true && container.current && container) {
          container.current.innerHTML = "";
          container.current.appendChild(viewElement);
        }
      });
    } catch (err) {
      console.log(err);
    }

    return function () {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [container.current, options]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    ref: container,
    tw: "rounded-2xl"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZnVuYyIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJjb250YWluZXIiLCJ1c2VSZWYiLCJkYXRhU2V0IiwidXNlU3RvcmUiLCJzdGF0ZSIsImRhdGFzZXQiLCJ2ZWdhT3B0aW9ucyIsImNvbmZpZyIsImluaXQiLCJ2aWV3IiwidG9vbHRpcCIsInZlZ2FUb29sdGlwIiwiY2FsbCIsInJlbmRlcmVyIiwidmwiLCJ2ZWdhIiwidmVnYUxpdGUiLCJ1c2VFZmZlY3QiLCJyZXN1bHRGdW5jIiwicmVuZGVyIiwidGhlbiIsInZpZXdFbGVtZW50IiwiY3VycmVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE0QztBQUFBOztBQUFBLE1BQXpDQyxJQUF5QyxRQUF6Q0EsSUFBeUM7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDdkQsTUFBTUMsU0FBUyxHQUFHQyw2Q0FBTSxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MscURBQVEsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxPQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFDQSxNQUFNQyxXQUFXLEdBQUc7QUFDbEJDLFVBQU0sRUFBRSxDQUNOO0FBRE0sS0FEVTtBQUlsQkMsUUFBSSxFQUFFLGNBQUNDLElBQUQsRUFBVTtBQUNkO0FBQ0FBLFVBQUksQ0FBQ0MsT0FBTCxDQUFhLElBQUlDLGlEQUFKLEdBQTBCQyxJQUF2QztBQUNELEtBUGlCO0FBUWxCSCxRQUFJLEVBQUU7QUFDSkksY0FBUSxFQUFFO0FBRE47QUFSWSxHQUFwQjtBQVlBQyxxREFBQSxDQUFZQyxpQ0FBWixFQUFrQkMsc0NBQWxCLEVBQTRCVixXQUE1QjtBQUNBVyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJO0FBQ0YsVUFBTUMsVUFBVSxHQUFHdkIsSUFBSSxDQUFDO0FBQUVPLGVBQU8sRUFBUEEsT0FBRjtBQUFXSCxlQUFPLEVBQVBBO0FBQVgsT0FBRCxDQUF2QjtBQUNBbUIsZ0JBQVUsQ0FBQ0MsTUFBWCxHQUFvQkMsSUFBcEIsQ0FBeUIsVUFBQ0MsV0FBRCxFQUFpQjtBQUN4QyxZQUFJLFNBQStCckIsU0FBUyxDQUFDc0IsT0FBekMsSUFBb0R0QixTQUF4RCxFQUFtRTtBQUNqRUEsbUJBQVMsQ0FBQ3NCLE9BQVYsQ0FBa0JDLFNBQWxCLEdBQThCLEVBQTlCO0FBQ0F2QixtQkFBUyxDQUFDc0IsT0FBVixDQUFrQkUsV0FBbEIsQ0FBOEJILFdBQTlCO0FBQ0Q7QUFDRixPQUxEO0FBTUQsS0FSRCxDQVFFLE9BQU9JLEdBQVAsRUFBWTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEOztBQUNELFdBQU8sWUFBTTtBQUNYLFVBQUl6QixTQUFTLENBQUNzQixPQUFkLEVBQXVCO0FBQ3JCdEIsaUJBQVMsQ0FBQ3NCLE9BQVYsQ0FBa0JDLFNBQWxCLEdBQThCLEVBQTlCO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FqQlEsRUFpQk4sQ0FBQ3ZCLFNBQVMsQ0FBQ3NCLE9BQVgsRUFBb0J2QixPQUFwQixDQWpCTSxDQUFUO0FBbUJBLFNBQ0U7QUFBSyxPQUFHLEVBQUVDLFNBQVY7QUFBcUIsTUFBRSxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBeENEOztHQUFNTixJO1VBRVlTLGlEOzs7S0FGWlQsSTtBQXlDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2NvbXBvbmVudHNfVmVnYUNvbXBfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5pbXBvcnQgdXNlU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XG5cbmNvbnN0IE1haW4gPSAoeyBmdW5jLCBuYW1lLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRhdGFTZXQgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmRhdGFzZXQpO1xuICBjb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICB9LFxuICAgIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gICAgfSxcbiAgICB2aWV3OiB7XG4gICAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgICB9LFxuICB9O1xuICB2bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHRGdW5jID0gZnVuYyh7IGRhdGFTZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXN1bHRGdW5jLnJlbmRlcigpLnRoZW4oKHZpZXdFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQgJiYgY29udGFpbmVyLmN1cnJlbnQgJiYgY29udGFpbmVyKSB7XG4gICAgICAgICAgY29udGFpbmVyLmN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICBjb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZCh2aWV3RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjb250YWluZXIuY3VycmVudCkge1xuICAgICAgICBjb250YWluZXIuY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtjb250YWluZXIuY3VycmVudCwgb3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2NvbnRhaW5lcn0gdHc9XCJyb3VuZGVkLTJ4bFwiPlxuICAgICAgey8qIDxDb2ZmZWVMb2FkaW5nIGtleT17bmFtZX0gLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=