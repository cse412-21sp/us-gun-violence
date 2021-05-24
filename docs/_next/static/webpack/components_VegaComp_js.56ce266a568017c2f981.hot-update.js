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







var Main = react__WEBPACK_IMPORTED_MODULE_0___default().callback(_c = _s(function (_ref) {
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
  }, void 0, false, {
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

$RefreshReg$(_c, "Main$React.callback");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyJdLCJuYW1lcyI6WyJNYWluIiwiUmVhY3QiLCJmdW5jIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImNvbnRhaW5lciIsInVzZVJlZiIsImRhdGFTZXQiLCJ1c2VTdG9yZSIsInN0YXRlIiwiZGF0YXNldCIsInZlZ2FPcHRpb25zIiwiY29uZmlnIiwiaW5pdCIsInZpZXciLCJ0b29sdGlwIiwidmVnYVRvb2x0aXAiLCJjYWxsIiwicmVuZGVyZXIiLCJ2bCIsInZlZ2EiLCJ2ZWdhTGl0ZSIsInVzZUVmZmVjdCIsInJlbmRlciIsInRoZW4iLCJ2aWV3RWxlbWVudCIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MscURBQUEsU0FDWCxnQkFBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsSUFBeUMsUUFBekNBLElBQXlDO0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxLQUE2QixRQUE3QkEsS0FBNkI7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzFDLE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHFEQUFRLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsT0FBakI7QUFBQSxHQUFELENBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxVQUFNLEVBQUUsQ0FDTjtBQURNLEtBRFU7QUFJbEJDLFFBQUksRUFBRSxjQUFDQyxJQUFELEVBQVU7QUFDZDtBQUNBQSxVQUFJLENBQUNDLE9BQUwsQ0FBYSxJQUFJQyxpREFBSixHQUEwQkMsSUFBdkM7QUFDRCxLQVBpQjtBQVFsQkgsUUFBSSxFQUFFO0FBQ0pJLGNBQVEsRUFBRTtBQUROO0FBUlksR0FBcEI7QUFZQUMscURBQUEsQ0FBWUMsaUNBQVosRUFBa0JDLHNDQUFsQixFQUE0QlYsV0FBNUI7QUFDQVcsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTtBQUNGdEIsVUFBSSxDQUFDO0FBQUVPLGVBQU8sRUFBUEEsT0FBRjtBQUFXSCxlQUFPLEVBQVBBO0FBQVgsT0FBRCxDQUFKLENBQ0dtQixNQURILEdBRUdDLElBRkgsQ0FFUSxVQUFDQyxXQUFELEVBQWlCO0FBQ3JCLFlBQUksU0FBK0JwQixTQUFTLENBQUNxQixPQUF6QyxJQUFvRHJCLFNBQXhELEVBQW1FO0FBQ2pFQSxtQkFBUyxDQUFDcUIsT0FBVixDQUFrQkMsV0FBbEIsQ0FBOEJGLFdBQTlCO0FBQ0Q7QUFDRixPQU5IO0FBT0QsS0FSRCxDQVFFLE9BQU9HLEdBQVAsRUFBWTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsR0FaUSxFQVlOLENBQUN2QixTQUFELEVBQVlBLFNBQVMsQ0FBQ3FCLE9BQXRCLENBWk0sQ0FBVDtBQWNBLFNBQU87QUFBSyxPQUFHLEVBQUVyQixTQUFWO0FBQXFCLE1BQUUsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWhDVTtBQUFBLFVBR09HLGlEQUhQO0FBQUEsSUFpQ1gsQ0FBQ3VCLEtBQUQsQ0FqQ1csQ0FBYjtNQUFNakMsSTtBQW1DTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9jb21wb25lbnRzX1ZlZ2FDb21wX2pzLjU2Y2UyNjZhNTY4MDE3YzJmOTgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5pbXBvcnQgdXNlU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XG5cbmNvbnN0IE1haW4gPSBSZWFjdC5jYWxsYmFjayhcbiAgKHsgZnVuYywgbmFtZSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyB9KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gICAgY29uc3QgZGF0YVNldCA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuZGF0YXNldCk7XG4gICAgY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgICAgfSxcbiAgICAgIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICAgICAgfSxcbiAgICAgIHZpZXc6IHtcbiAgICAgICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gICAgICB9LFxuICAgIH07XG4gICAgdmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZnVuYyh7IGRhdGFTZXQsIG9wdGlvbnMgfSlcbiAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgICAudGhlbigodmlld0VsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQgJiYgY29udGFpbmVyLmN1cnJlbnQgJiYgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKHZpZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0sIFtjb250YWluZXIsIGNvbnRhaW5lci5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gPGRpdiByZWY9e2NvbnRhaW5lcn0gdHc9XCJyb3VuZGVkLTJ4bFwiPjwvZGl2PjtcbiAgfSxcbiAgW3Byb3BzXVxuKTtcbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9