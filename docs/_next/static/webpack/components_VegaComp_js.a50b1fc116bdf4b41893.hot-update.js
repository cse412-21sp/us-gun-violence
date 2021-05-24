self["webpackHotUpdate_N_E"]("components_VegaComp_js",{

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







var Main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(_c = _s(function (_ref) {
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
  }, [container, container.current]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    ref: container,
    tw: "rounded-2xl"
  }, name, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 12
  }, _this);
}, "t7qbgatf0ULOCt8MZ2KRuDcYC60=", false, function () {
  return [_store_index__WEBPACK_IMPORTED_MODULE_5__.default];
}), [props]);
_c2 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2;

$RefreshReg$(_c, "Main$React.memo");
$RefreshReg$(_c2, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyJdLCJuYW1lcyI6WyJNYWluIiwiUmVhY3QiLCJmdW5jIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImNvbnRhaW5lciIsInVzZVJlZiIsImRhdGFTZXQiLCJ1c2VTdG9yZSIsInN0YXRlIiwiZGF0YXNldCIsInZlZ2FPcHRpb25zIiwiY29uZmlnIiwiaW5pdCIsInZpZXciLCJ0b29sdGlwIiwidmVnYVRvb2x0aXAiLCJjYWxsIiwicmVuZGVyZXIiLCJ2bCIsInZlZ2EiLCJ2ZWdhTGl0ZSIsInVzZUVmZmVjdCIsInJlbmRlciIsInRoZW4iLCJ2aWV3RWxlbWVudCIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksZ0JBQUdDLGlEQUFBLFNBQ1gsZ0JBQTRDO0FBQUE7O0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxJQUFtQyxRQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsS0FBNkIsUUFBN0JBLEtBQTZCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMxQyxNQUFNQyxTQUFTLEdBQUdDLDZDQUFNLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxxREFBUSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE9BQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUNsQkMsVUFBTSxFQUFFLENBQ047QUFETSxLQURVO0FBSWxCQyxRQUFJLEVBQUUsY0FBQ0MsSUFBRCxFQUFVO0FBQ2Q7QUFDQUEsVUFBSSxDQUFDQyxPQUFMLENBQWEsSUFBSUMsaURBQUosR0FBMEJDLElBQXZDO0FBQ0QsS0FQaUI7QUFRbEJILFFBQUksRUFBRTtBQUNKSSxjQUFRLEVBQUU7QUFETjtBQVJZLEdBQXBCO0FBWUFDLHFEQUFBLENBQVlDLGlDQUFaLEVBQWtCQyxzQ0FBbEIsRUFBNEJWLFdBQTVCO0FBQ0FXLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk7QUFDRnRCLFVBQUksQ0FBQztBQUFFTyxlQUFPLEVBQVBBLE9BQUY7QUFBV0gsZUFBTyxFQUFQQTtBQUFYLE9BQUQsQ0FBSixDQUNHbUIsTUFESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsV0FBRCxFQUFpQjtBQUNyQixZQUFJLFNBQStCcEIsU0FBUyxDQUFDcUIsT0FBekMsSUFBb0RyQixTQUF4RCxFQUFtRTtBQUNqRUEsbUJBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JDLFdBQWxCLENBQThCRixXQUE5QjtBQUNEO0FBQ0YsT0FOSDtBQU9ELEtBUkQsQ0FRRSxPQUFPRyxHQUFQLEVBQVk7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUNGLEdBWlEsRUFZTixDQUFDdkIsU0FBRCxFQUFZQSxTQUFTLENBQUNxQixPQUF0QixDQVpNLENBQVQ7QUFjQSxTQUFPO0FBQUssT0FBRyxFQUFFckIsU0FBVjtBQUFnQyxNQUFFLEVBQUM7QUFBbkMsS0FBMEJKLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBaENVO0FBQUEsVUFHT08saURBSFA7QUFBQSxJQWlDWCxDQUFDdUIsS0FBRCxDQWpDVyxDQUFiO01BQU1qQyxJO0FBbUNOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL2NvbXBvbmVudHNfVmVnYUNvbXBfanMuYTUwYjFmYzExNmJkZjRiNDE4OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcbmltcG9ydCB1c2VTdG9yZSBmcm9tIFwiLi4vc3RvcmUvaW5kZXhcIjtcblxuY29uc3QgTWFpbiA9IFJlYWN0Lm1lbW8oXG4gICh7IGZ1bmMsIG5hbWUsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMgfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmRhdGFzZXQpO1xuICAgIGNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICAgIH0sXG4gICAgICBpbml0OiAodmlldykgPT4ge1xuICAgICAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgICAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgICAgIH0sXG4gICAgICB2aWV3OiB7XG4gICAgICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZ1bmMoeyBkYXRhU2V0LCBvcHRpb25zIH0pXG4gICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgICAgLnRoZW4oKHZpZXdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkICYmIGNvbnRhaW5lci5jdXJyZW50ICYmIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZCh2aWV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9LCBbY29udGFpbmVyLCBjb250YWluZXIuY3VycmVudF0pO1xuXG4gICAgcmV0dXJuIDxkaXYgcmVmPXtjb250YWluZXJ9IGtleT17bmFtZX0gdHc9XCJyb3VuZGVkLTJ4bFwiPjwvZGl2PjtcbiAgfSxcbiAgW3Byb3BzXVxuKTtcbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9