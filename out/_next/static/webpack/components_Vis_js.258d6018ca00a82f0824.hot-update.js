self["webpackHotUpdate_N_E"]("components_Vis_js",{

/***/ "./components/functions/ageHistogram.js":
/*!**********************************************!*\
  !*** ./components/functions/ageHistogram.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function ageHistogram(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var p = dataSet.p;
  var yearStart = options.yearStart,
      yearEnd = options.yearEnd,
      color = options.color;
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markBar({
    opacity: 0.5
  }).data(p.params({
    yearStart: yearStart,
    yearEnd: yearEnd
  }).filter(function (d) {
    return d.type === "Subject-Suspect";
  }).filter(function (d) {
    return op.year(d.date) >= yearStart && op.year(d.date) <= yearEnd;
  })).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.x().fieldQ("age").scale({
    domain: [0, 100]
  }).bin({
    step: 5
  }), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().count().title("Number of Perpetrators"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().value(color));
}

var vegaOptions = {
  config: {// Vega-Lite default configuration
  },
  init: function init(view) {
    // initialize tooltip handler
    view.tooltip(new vega_tooltip__WEBPACK_IMPORTED_MODULE_3__.Handler().call);
  },
  view: {
    renderer: "canvas"
  }
};
vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.register(vega__WEBPACK_IMPORTED_MODULE_0__, vega_lite__WEBPACK_IMPORTED_MODULE_2__, vegaOptions);
/* harmony default export */ __webpack_exports__["default"] = (ageHistogram);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtLmpzIl0sIm5hbWVzIjpbImFnZUhpc3RvZ3JhbSIsImRhdGFTZXQiLCJvcHRpb25zIiwicCIsInllYXJTdGFydCIsInllYXJFbmQiLCJjb2xvciIsInZsIiwib3BhY2l0eSIsImRhdGEiLCJwYXJhbXMiLCJmaWx0ZXIiLCJkIiwidHlwZSIsIm9wIiwieWVhciIsImRhdGUiLCJlbmNvZGUiLCJmaWVsZFEiLCJzY2FsZSIsImRvbWFpbiIsImJpbiIsInN0ZXAiLCJjb3VudCIsInRpdGxlIiwidmFsdWUiLCJ2ZWdhT3B0aW9ucyIsImNvbmZpZyIsImluaXQiLCJ2aWV3IiwidG9vbHRpcCIsInZlZ2FUb29sdGlwIiwiY2FsbCIsInJlbmRlcmVyIiwidmVnYSIsInZlZ2FMaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQTRDO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUFBLE1BQ2xDQyxDQURrQyxHQUM1QkYsT0FENEIsQ0FDbENFLENBRGtDO0FBQUEsTUFFbENDLFNBRmtDLEdBRUpGLE9BRkksQ0FFbENFLFNBRmtDO0FBQUEsTUFFdkJDLE9BRnVCLEdBRUpILE9BRkksQ0FFdkJHLE9BRnVCO0FBQUEsTUFFZEMsS0FGYyxHQUVKSixPQUZJLENBRWRJLEtBRmM7QUFHMUMsU0FBT0Msa0RBQUEsQ0FDSTtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQURKLEVBRUpDLElBRkksQ0FHSE4sQ0FBQyxDQUNFTyxNQURILENBQ1U7QUFBRU4sYUFBUyxFQUFFQSxTQUFiO0FBQXdCQyxXQUFPLEVBQUVBO0FBQWpDLEdBRFYsRUFFR00sTUFGSCxDQUVVLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLElBQUYsS0FBVyxpQkFBbEI7QUFBQSxHQUZWLEVBR0dGLE1BSEgsQ0FJSSxVQUFDQyxDQUFEO0FBQUEsV0FBT0UsRUFBRSxDQUFDQyxJQUFILENBQVFILENBQUMsQ0FBQ0ksSUFBVixLQUFtQlosU0FBbkIsSUFBZ0NVLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRSCxDQUFDLENBQUNJLElBQVYsS0FBbUJYLE9BQTFEO0FBQUEsR0FKSixDQUhHLEVBVUpZLE1BVkksQ0FXSFYsNENBQUEsR0FFR1csTUFGSCxDQUVVLEtBRlYsRUFHR0MsS0FISCxDQUdTO0FBQUVDLFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKO0FBQVYsR0FIVCxFQUlHQyxHQUpILENBSU87QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FKUCxDQVhHLEVBZ0JIZiw0Q0FBQSxHQUFPZ0IsS0FBUCxHQUFlQyxLQUFmLENBQXFCLHdCQUFyQixDQWhCRyxFQWlCSGpCLGdEQUFBLEdBQVdrQixLQUFYLENBQWlCbkIsS0FBakIsQ0FqQkcsQ0FBUDtBQW1CRDs7QUFFRCxJQUFNb0IsV0FBVyxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsQ0FDTjtBQURNLEdBRFU7QUFJbEJDLE1BQUksRUFBRSxjQUFDQyxJQUFELEVBQVU7QUFDZDtBQUNBQSxRQUFJLENBQUNDLE9BQUwsQ0FBYSxJQUFJQyxpREFBSixHQUEwQkMsSUFBdkM7QUFDRCxHQVBpQjtBQVFsQkgsTUFBSSxFQUFFO0FBQ0pJLFlBQVEsRUFBRTtBQUROO0FBUlksQ0FBcEI7QUFZQTFCLG1EQUFBLENBQVkyQixpQ0FBWixFQUFrQkMsc0NBQWxCLEVBQTRCVCxXQUE1QjtBQUVBLCtEQUFlMUIsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9jb21wb25lbnRzX1Zpc19qcy4yNThkNjAxOGNhMDBhODJmMDgyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcblxuZnVuY3Rpb24gYWdlSGlzdG9ncmFtKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgcCB9ID0gZGF0YVNldDtcbiAgY29uc3QgeyB5ZWFyU3RhcnQsIHllYXJFbmQsIGNvbG9yIH0gPSBvcHRpb25zO1xuICByZXR1cm4gdmxcbiAgICAubWFya0Jhcih7IG9wYWNpdHk6IDAuNSB9KVxuICAgIC5kYXRhKFxuICAgICAgcFxuICAgICAgICAucGFyYW1zKHsgeWVhclN0YXJ0OiB5ZWFyU3RhcnQsIHllYXJFbmQ6IHllYXJFbmQgfSlcbiAgICAgICAgLmZpbHRlcigoZCkgPT4gZC50eXBlID09PSBcIlN1YmplY3QtU3VzcGVjdFwiKVxuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChkKSA9PiBvcC55ZWFyKGQuZGF0ZSkgPj0geWVhclN0YXJ0ICYmIG9wLnllYXIoZC5kYXRlKSA8PSB5ZWFyRW5kXG4gICAgICAgIClcbiAgICApXG4gICAgLmVuY29kZShcbiAgICAgIHZsXG4gICAgICAgIC54KClcbiAgICAgICAgLmZpZWxkUShcImFnZVwiKVxuICAgICAgICAuc2NhbGUoeyBkb21haW46IFswLCAxMDBdIH0pXG4gICAgICAgIC5iaW4oeyBzdGVwOiA1IH0pLFxuICAgICAgdmwueSgpLmNvdW50KCkudGl0bGUoXCJOdW1iZXIgb2YgUGVycGV0cmF0b3JzXCIpLFxuICAgICAgdmwuY29sb3IoKS52YWx1ZShjb2xvcilcbiAgICApO1xufVxuXG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBhZ2VIaXN0b2dyYW07XG4iXSwic291cmNlUm9vdCI6IiJ9