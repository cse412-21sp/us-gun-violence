self["webpackHotUpdate_N_E"]("components_Vis_js",{

/***/ "./components/Vis.js":
/*!***************************!*\
  !*** ./components/Vis.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/functions/PrepetratorsByGender */ "./components/functions/PrepetratorsByGender.js");
/* harmony import */ var _components_functions_mapMeanAgeOfPerpetrators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/mapMeanAgeOfPerpetrators */ "./components/functions/mapMeanAgeOfPerpetrators.js");
/* harmony import */ var _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/functions/ageHistogram */ "./components/functions/ageHistogram.js");
/* harmony import */ var _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/functions/gunArea */ "./components/functions/gunArea.js");
/* harmony import */ var _functions_numGunByTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/numGunByTypes */ "./components/functions/numGunByTypes.js");
/* harmony import */ var _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/perpetratorsByTime */ "./components/functions/perpetratorsByTime.js");
/* harmony import */ var _functions_mapunderageAndTotalPerpetrators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/mapunderageAndTotalPerpetrators */ "./components/functions/mapunderageAndTotalPerpetrators.js");
/* harmony import */ var _components_VegaComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/VegaComp */ "./components/VegaComp.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/yeraf/proj/us-gun-violence/components/Vis.js",
    _this = undefined;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










var Section = function Section(props) {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, _this);
};

_c = Section;

var _ref =  false ? 0 : {
  name: "sl3glw-Vis",
  styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Vis = function Vis() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
    css: _ref,
    "data-tw": "flex flex-col justify-center items-center",
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_7__.default, {
        func: _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_0__.default,
        name: "perpetratorsByGender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_7__.default, {
        func: _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_2__.default,
        options: {
          yearStart: 2013,
          yearEnd: 2018,
          color: "teal"
        },
        name: "ageHistogram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_7__.default, {
        func: _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_3__.default,
        name: "gunArea"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_7__.default, {
        func: _functions_numGunByTypes__WEBPACK_IMPORTED_MODULE_4__.default,
        name: "numGunByTypes",
        options: {
          yearStart: 2013,
          yearEnd: 2018
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_7__.default, {
        func: _components_functions_mapMeanAgeOfPerpetrators__WEBPACK_IMPORTED_MODULE_1__.default,
        name: "mapMeanAgeOfPerpetrators",
        options: {
          field: "mean_age",
          yearStart: 2013,
          yearEnd: 2018,
          schema: "goldred"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_7__.default, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__.default,
        options: {
          field: "mean_age",
          state_abbr: "WA",
          color: "red"
        },
        name: "perpetratorsByTime"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_7__.default, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__.default,
        name: "perpetratorsByTime",
        options: {
          field: "underages_ratio",
          state_abbr: "WA",
          color: "red"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c2 = Vis;
/* harmony default export */ __webpack_exports__["default"] = (Vis);

var _c, _c2;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "Vis");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXMuanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJWaXMiLCJwZXJwZXRyYXRvcnNCeUdlbmRlciIsImFnZUhpc3RvZ3JhbSIsInllYXJTdGFydCIsInllYXJFbmQiLCJjb2xvciIsImd1bkFyZWEiLCJudW1HdW5CeVR5cGVzIiwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzIiwiZmllbGQiLCJzY2hlbWEiLCJwZXJwZXRyYXRvcnNCeVRpbWUiLCJzdGF0ZV9hYmJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QixTQUFPO0FBQUEsY0FBVUEsS0FBSyxDQUFDQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztLQUFNRixPOzs7Ozs7OztBQUlOLElBQU1HLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsU0FDRTtBQUFBO0FBQUE7QUFBQSxlQUNFLHVFQUFDLE9BQUQ7QUFBQSxnQkFDRSx1RUFBQyx5REFBRDtBQUFVLFlBQUksRUFBRUMsK0VBQWhCO0FBQXNDLFlBQUksRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUUsdUVBQUMsT0FBRDtBQUFBLGdCQUNFLHVFQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFFQyx1RUFEUjtBQUVFLGVBQU8sRUFBRTtBQUNQQyxtQkFBUyxFQUFFLElBREo7QUFFUEMsaUJBQU8sRUFBRSxJQUZGO0FBR1BDLGVBQUssRUFBRTtBQUhBLFNBRlg7QUFPRSxZQUFJLEVBQUM7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBZUUsdUVBQUMsT0FBRDtBQUFBLGdCQUNFLHVFQUFDLHlEQUFEO0FBQVUsWUFBSSxFQUFFQyxrRUFBaEI7QUFBeUIsWUFBSSxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkYsRUFrQkUsdUVBQUMsT0FBRDtBQUFBLGdCQUNFLHVFQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFFQyw2REFEUjtBQUVFLFlBQUksRUFBQyxlQUZQO0FBR0UsZUFBTyxFQUFFO0FBQ1BKLG1CQUFTLEVBQUUsSUFESjtBQUVQQyxpQkFBTyxFQUFFO0FBRkY7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixFQTRCRSx1RUFBQyxPQUFEO0FBQUEsZ0JBQ0UsdUVBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUVJLG1GQURSO0FBRUUsWUFBSSxFQUFDLDBCQUZQO0FBR0UsZUFBTyxFQUFFO0FBQ1BDLGVBQUssRUFBRSxVQURBO0FBRVBOLG1CQUFTLEVBQUUsSUFGSjtBQUdQQyxpQkFBTyxFQUFFLElBSEY7QUFJUE0sZ0JBQU0sRUFBRTtBQUpEO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkYsRUF3Q0UsdUVBQUMsT0FBRDtBQUFBLGdCQUNFLHVFQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFFQyxrRUFEUjtBQUVFLGVBQU8sRUFBRTtBQUFFRixlQUFLLEVBQUUsVUFBVDtBQUFxQkcsb0JBQVUsRUFBRSxJQUFqQztBQUF1Q1AsZUFBSyxFQUFFO0FBQTlDLFNBRlg7QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDRixFQStDRSx1RUFBQyxPQUFEO0FBQUEsZ0JBQ0UsdUVBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUVNLGtFQURSO0FBRUUsWUFBSSxFQUFDLG9CQUZQO0FBR0UsZUFBTyxFQUFFO0FBQUVGLGVBQUssRUFBRSxpQkFBVDtBQUE0Qkcsb0JBQVUsRUFBRSxJQUF4QztBQUE4Q1AsZUFBSyxFQUFFO0FBQXJEO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5REQsQ0ExREQ7O01BQU1MLEc7QUEyRE4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c19WaXNfanMuOGFhMjY0ZjNiYzM5ZTA2OTAwZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJwZXRyYXRvcnNCeUdlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvUHJlcGV0cmF0b3JzQnlHZW5kZXJcIjtcbmltcG9ydCBtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiO1xuaW1wb3J0IGFnZUhpc3RvZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtXCI7XG5pbXBvcnQgZ3VuQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuQXJlYVwiO1xuaW1wb3J0IG51bUd1bkJ5VHlwZXMgZnJvbSBcIi4vZnVuY3Rpb25zL251bUd1bkJ5VHlwZXNcIjtcbmltcG9ydCBwZXJwZXRyYXRvcnNCeVRpbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3BlcnBldHJhdG9yc0J5VGltZVwiO1xuaW1wb3J0IG1hcHVuZGVyYWdlQW5kVG90YWxQZXJwZXRyYXRvcnMgZnJvbSBcIi4vZnVuY3Rpb25zL21hcHVuZGVyYWdlQW5kVG90YWxQZXJwZXRyYXRvcnNcIjtcbmltcG9ydCBWZWdhQ29tcCBmcm9tIFwiLi4vY29tcG9uZW50cy9WZWdhQ29tcFwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxzZWN0aW9uPntwcm9wcy5jaGlsZHJlbn08L3NlY3Rpb24+O1xufTtcblxuY29uc3QgVmlzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIHR3PVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXAgZnVuYz17cGVycGV0cmF0b3JzQnlHZW5kZXJ9IG5hbWU9XCJwZXJwZXRyYXRvcnNCeUdlbmRlclwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17YWdlSGlzdG9ncmFtfVxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHllYXJTdGFydDogMjAxMyxcbiAgICAgICAgICAgIHllYXJFbmQ6IDIwMTgsXG4gICAgICAgICAgICBjb2xvcjogXCJ0ZWFsXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBuYW1lPVwiYWdlSGlzdG9ncmFtXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXAgZnVuYz17Z3VuQXJlYX0gbmFtZT1cImd1bkFyZWFcIiAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e251bUd1bkJ5VHlwZXN9XG4gICAgICAgICAgbmFtZT1cIm51bUd1bkJ5VHlwZXNcIlxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHllYXJTdGFydDogMjAxMyxcbiAgICAgICAgICAgIHllYXJFbmQ6IDIwMTgsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXttYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnN9XG4gICAgICAgICAgbmFtZT1cIm1hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgZmllbGQ6IFwibWVhbl9hZ2VcIixcbiAgICAgICAgICAgIHllYXJTdGFydDogMjAxMyxcbiAgICAgICAgICAgIHllYXJFbmQ6IDIwMTgsXG4gICAgICAgICAgICBzY2hlbWE6IFwiZ29sZHJlZFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwibWVhbl9hZ2VcIiwgc3RhdGVfYWJicjogXCJXQVwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e3BlcnBldHJhdG9yc0J5VGltZX1cbiAgICAgICAgICBuYW1lPVwicGVycGV0cmF0b3JzQnlUaW1lXCJcbiAgICAgICAgICBvcHRpb25zPXt7IGZpZWxkOiBcInVuZGVyYWdlc19yYXRpb1wiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFZpcztcbiJdLCJzb3VyY2VSb290IjoiIn0=