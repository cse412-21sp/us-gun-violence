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








var Veg = function Veg(_ref) {
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
    console.log(container);

    try {
      func({
        dataSet: dataSet,
        options: options
      }).render().then(function (viewElement) {
        // // render returns a promise to a DOM element containing the chart
        // // viewElement.value contains the Vega View object instance
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
    lineNumber: 41,
    columnNumber: 10
  }, _this);
};

_s(Veg, "t7qbgatf0ULOCt8MZ2KRuDcYC60=", false, function () {
  return [_store_index__WEBPACK_IMPORTED_MODULE_5__.default];
});

_c = Veg;
/* harmony default export */ __webpack_exports__["default"] = (Veg);

var _c;

$RefreshReg$(_c, "Veg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyJdLCJuYW1lcyI6WyJWZWciLCJmdW5jIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImNvbnRhaW5lciIsInVzZVJlZiIsImRhdGFTZXQiLCJ1c2VTdG9yZSIsInN0YXRlIiwiZGF0YXNldCIsInZlZ2FPcHRpb25zIiwiY29uZmlnIiwiaW5pdCIsInZpZXciLCJ0b29sdGlwIiwidmVnYVRvb2x0aXAiLCJjYWxsIiwicmVuZGVyZXIiLCJ2bCIsInZlZ2EiLCJ2ZWdhTGl0ZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJ0aGVuIiwidmlld0VsZW1lbnQiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsSUFBeUMsUUFBekNBLElBQXlDO0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxLQUE2QixRQUE3QkEsS0FBNkI7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3RELE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHFEQUFRLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsT0FBakI7QUFBQSxHQUFELENBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxVQUFNLEVBQUUsQ0FDTjtBQURNLEtBRFU7QUFJbEJDLFFBQUksRUFBRSxjQUFDQyxJQUFELEVBQVU7QUFDZDtBQUNBQSxVQUFJLENBQUNDLE9BQUwsQ0FBYSxJQUFJQyxpREFBSixHQUEwQkMsSUFBdkM7QUFDRCxLQVBpQjtBQVFsQkgsUUFBSSxFQUFFO0FBQ0pJLGNBQVEsRUFBRTtBQUROO0FBUlksR0FBcEI7QUFZQUMscURBQUEsQ0FBWUMsaUNBQVosRUFBa0JDLHNDQUFsQixFQUE0QlYsV0FBNUI7QUFDQVcsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsU0FBWjs7QUFDQSxRQUFJO0FBQ0ZMLFVBQUksQ0FBQztBQUFFTyxlQUFPLEVBQVBBLE9BQUY7QUFBV0gsZUFBTyxFQUFQQTtBQUFYLE9BQUQsQ0FBSixDQUNHcUIsTUFESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsV0FBRCxFQUFpQjtBQUNyQjtBQUNBO0FBQ0EsWUFBSSxTQUErQnRCLFNBQVMsQ0FBQ3VCLE9BQXpDLElBQW9EdkIsU0FBeEQsRUFBbUU7QUFDakVBLG1CQUFTLENBQUN1QixPQUFWLENBQWtCQyxXQUFsQixDQUE4QkYsV0FBOUI7QUFDRDtBQUNGLE9BUkg7QUFTRCxLQVZELENBVUUsT0FBT0csR0FBUCxFQUFZO0FBQ1pQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFaO0FBQ0Q7QUFDRixHQWZRLEVBZU4sQ0FBQ3pCLFNBQUQsRUFBWUEsU0FBUyxDQUFDdUIsT0FBdEIsQ0FmTSxDQUFUO0FBaUJBLFNBQU87QUFBSyxPQUFHLEVBQUV2QixTQUFWO0FBQXFCLE1BQUUsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWxDRDs7R0FBTU4sRztVQUVZUyxpRDs7O0tBRlpULEc7QUFtQ04sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c19WZWdhQ29tcF9qcy4wYzY4YzY2ZDIyMWFjNDliYWZjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xuXG5jb25zdCBWZWcgPSAoeyBmdW5jLCBuYW1lLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRhdGFTZXQgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmRhdGFzZXQpO1xuICBjb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICB9LFxuICAgIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gICAgfSxcbiAgICB2aWV3OiB7XG4gICAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgICB9LFxuICB9O1xuICB2bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG4gICAgdHJ5IHtcbiAgICAgIGZ1bmMoeyBkYXRhU2V0LCBvcHRpb25zIH0pXG4gICAgICAgIC5yZW5kZXIoKVxuICAgICAgICAudGhlbigodmlld0VsZW1lbnQpID0+IHtcbiAgICAgICAgICAvLyAvLyByZW5kZXIgcmV0dXJucyBhIHByb21pc2UgdG8gYSBET00gZWxlbWVudCBjb250YWluaW5nIHRoZSBjaGFydFxuICAgICAgICAgIC8vIC8vIHZpZXdFbGVtZW50LnZhbHVlIGNvbnRhaW5zIHRoZSBWZWdhIFZpZXcgb2JqZWN0IGluc3RhbmNlXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCAmJiBjb250YWluZXIuY3VycmVudCAmJiBjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKHZpZXdFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH0sIFtjb250YWluZXIsIGNvbnRhaW5lci5jdXJyZW50XSk7XG5cbiAgcmV0dXJuIDxkaXYgcmVmPXtjb250YWluZXJ9IHR3PVwicm91bmRlZC0yeGxcIj48L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgVmVnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==