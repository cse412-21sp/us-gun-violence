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
          container.current.innerHTML = "";
          console.log(container.current);
          container.current.appendChild(viewElement);
        }
      });
    } catch (err) {
      console.log(err);
    }

    return function () {
      container.current.innerHTML = "";
    };
  }, [container.current]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    ref: container,
    tw: "rounded-2xl"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyJdLCJuYW1lcyI6WyJNYWluIiwiZnVuYyIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJjb250YWluZXIiLCJ1c2VSZWYiLCJkYXRhU2V0IiwidXNlU3RvcmUiLCJzdGF0ZSIsImRhdGFzZXQiLCJ2ZWdhT3B0aW9ucyIsImNvbmZpZyIsImluaXQiLCJ2aWV3IiwidG9vbHRpcCIsInZlZ2FUb29sdGlwIiwiY2FsbCIsInJlbmRlcmVyIiwidmwiLCJ2ZWdhIiwidmVnYUxpdGUiLCJ1c2VFZmZlY3QiLCJyZW5kZXIiLCJ0aGVuIiwidmlld0VsZW1lbnQiLCJjdXJyZW50IiwiaW5uZXJIVE1MIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxJQUFtQyxRQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsS0FBNkIsUUFBN0JBLEtBQTZCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN2RCxNQUFNQyxTQUFTLEdBQUdDLDZDQUFNLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxxREFBUSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE9BQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBRztBQUNsQkMsVUFBTSxFQUFFLENBQ047QUFETSxLQURVO0FBSWxCQyxRQUFJLEVBQUUsY0FBQ0MsSUFBRCxFQUFVO0FBQ2Q7QUFDQUEsVUFBSSxDQUFDQyxPQUFMLENBQWEsSUFBSUMsaURBQUosR0FBMEJDLElBQXZDO0FBQ0QsS0FQaUI7QUFRbEJILFFBQUksRUFBRTtBQUNKSSxjQUFRLEVBQUU7QUFETjtBQVJZLEdBQXBCO0FBWUFDLHFEQUFBLENBQVlDLGlDQUFaLEVBQWtCQyxzQ0FBbEIsRUFBNEJWLFdBQTVCO0FBQ0FXLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk7QUFDRnRCLFVBQUksQ0FBQztBQUFFTyxlQUFPLEVBQVBBLE9BQUY7QUFBV0gsZUFBTyxFQUFQQTtBQUFYLE9BQUQsQ0FBSixDQUNHbUIsTUFESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsV0FBRCxFQUFpQjtBQUNyQixZQUFJLFNBQStCcEIsU0FBUyxDQUFDcUIsT0FBekMsSUFBb0RyQixTQUF4RCxFQUFtRTtBQUNqRUEsbUJBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JDLFNBQWxCLEdBQThCLEVBQTlCO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWXhCLFNBQVMsQ0FBQ3FCLE9BQXRCO0FBQ0FyQixtQkFBUyxDQUFDcUIsT0FBVixDQUFrQkksV0FBbEIsQ0FBOEJMLFdBQTlCO0FBQ0Q7QUFDRixPQVJIO0FBU0QsS0FWRCxDQVVFLE9BQU9NLEdBQVAsRUFBWTtBQUNaSCxhQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWjtBQUNEOztBQUNELFdBQU8sWUFBTTtBQUNYMUIsZUFBUyxDQUFDcUIsT0FBVixDQUFrQkMsU0FBbEIsR0FBOEIsRUFBOUI7QUFDRCxLQUZEO0FBR0QsR0FqQlEsRUFpQk4sQ0FBQ3RCLFNBQVMsQ0FBQ3FCLE9BQVgsQ0FqQk0sQ0FBVDtBQW1CQSxTQUNFO0FBQUssT0FBRyxFQUFFckIsU0FBVjtBQUFxQixNQUFFLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0F4Q0Q7O0dBQU1OLEk7VUFFWVMsaUQ7OztLQUZaVCxJO0FBeUNOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL2NvbXBvbmVudHNfVmVnYUNvbXBfanMuYTE4OTgyYzY0YzcyNDQ1OWI2NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcbmltcG9ydCB1c2VTdG9yZSBmcm9tIFwiLi4vc3RvcmUvaW5kZXhcIjtcbmltcG9ydCB7IENvZmZlZUxvYWRpbmcgfSBmcm9tIFwicmVhY3QtbG9hZGluZ2dcIjtcblxuY29uc3QgTWFpbiA9ICh7IGZ1bmMsIG5hbWUsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMgfSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGF0YVNldCA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuZGF0YXNldCk7XG4gIGNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICAgIGNvbmZpZzoge1xuICAgICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgIH0sXG4gICAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgICB9LFxuICAgIHZpZXc6IHtcbiAgICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICAgIH0sXG4gIH07XG4gIHZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZ1bmMoeyBkYXRhU2V0LCBvcHRpb25zIH0pXG4gICAgICAgIC5yZW5kZXIoKVxuICAgICAgICAudGhlbigodmlld0VsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkICYmIGNvbnRhaW5lci5jdXJyZW50ICYmIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lci5jdXJyZW50KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKHZpZXdFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jdXJyZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfTtcbiAgfSwgW2NvbnRhaW5lci5jdXJyZW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17Y29udGFpbmVyfSB0dz1cInJvdW5kZWQtMnhsXCI+XG4gICAgICB7LyogPENvZmZlZUxvYWRpbmcga2V5PXtuYW1lfSAvPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==