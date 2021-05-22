self["webpackHotUpdate_N_E"]("components_Vis_js",{

/***/ "./components/Vis.js":
/*!***************************!*\
  !*** ./components/Vis.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/functions/PrepetratorsByGender */ "./components/functions/PrepetratorsByGender.js");
/* harmony import */ var _components_functions_mapMeanAgeOfPerpetrators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/mapMeanAgeOfPerpetrators */ "./components/functions/mapMeanAgeOfPerpetrators.js");
/* harmony import */ var _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/functions/ageHistogram */ "./components/functions/ageHistogram.js");
/* harmony import */ var _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/functions/gunArea */ "./components/functions/gunArea.js");
/* harmony import */ var _functions_numGunByTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/numGunByTypes */ "./components/functions/numGunByTypes.js");
/* harmony import */ var _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/perpetratorsByTime */ "./components/functions/perpetratorsByTime.js");
/* harmony import */ var _components_VegaComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/VegaComp */ "./components/VegaComp.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/yeraf/proj/us-gun-violence/components/Vis.js",
    _this = undefined;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var _ref =  false ? 0 : {
  name: "zjnckp-Vis",
  styles: "width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

// const section = (props) => {
//   return <section>{props.children}</section>;
// };
var Vis = function Vis() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
    css: _ref,
    "data-tw": "w-screen flex flex-col justify-center items-center",
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_6__.default, {
        func: _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_0__.default,
        name: "perpetratorsByGender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_6__.default, {
        func: _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_2__.default,
        options: {
          yearStart: 2013,
          yearEnd: 2018,
          color: "teal"
        },
        name: "ageHistogram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_6__.default, {
        func: _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_3__.default,
        name: "gunArea"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_6__.default, {
        func: _functions_numGunByTypes__WEBPACK_IMPORTED_MODULE_4__.default,
        name: "numGunByTypes",
        options: {
          yearStart: 2013,
          yearEnd: 2018
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_6__.default, {
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
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_6__.default, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__.default,
        options: {
          field: "mean_age",
          state_abbr: "WA",
          color: "red"
        },
        name: "perpetratorsByTime"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_VegaComp__WEBPACK_IMPORTED_MODULE_6__.default, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__.default,
        name: "perpetratorsByTime",
        options: {
          field: "underages_ratio",
          state_abbr: "WA",
          color: "red"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_c = Vis;
/* harmony default export */ __webpack_exports__["default"] = (Vis);

var _c;

$RefreshReg$(_c, "Vis");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXMuanMiXSwibmFtZXMiOlsiVmlzIiwicGVycGV0cmF0b3JzQnlHZW5kZXIiLCJhZ2VIaXN0b2dyYW0iLCJ5ZWFyU3RhcnQiLCJ5ZWFyRW5kIiwiY29sb3IiLCJndW5BcmVhIiwibnVtR3VuQnlUeXBlcyIsIm1hcE1lYW5BZ2VPZlBlcnBldHJhdG9ycyIsImZpZWxkIiwic2NoZW1hIiwicGVycGV0cmF0b3JzQnlUaW1lIiwic3RhdGVfYWJiciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2hCLFNBQ0U7QUFBQTtBQUFBO0FBQUEsZUFDRTtBQUFBLGdCQUNFLHVFQUFDLHlEQUFEO0FBQVUsWUFBSSxFQUFFQywrRUFBaEI7QUFBc0MsWUFBSSxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFJRTtBQUFBLGdCQUNFLHVFQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFFQyx1RUFEUjtBQUVFLGVBQU8sRUFBRTtBQUNQQyxtQkFBUyxFQUFFLElBREo7QUFFUEMsaUJBQU8sRUFBRSxJQUZGO0FBR1BDLGVBQUssRUFBRTtBQUhBLFNBRlg7QUFPRSxZQUFJLEVBQUM7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBZUU7QUFBQSxnQkFDRSx1RUFBQyx5REFBRDtBQUFVLFlBQUksRUFBRUMsa0VBQWhCO0FBQXlCLFlBQUksRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLEVBa0JFO0FBQUEsZ0JBQ0UsdUVBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUVDLDZEQURSO0FBRUUsWUFBSSxFQUFDLGVBRlA7QUFHRSxlQUFPLEVBQUU7QUFDUEosbUJBQVMsRUFBRSxJQURKO0FBRVBDLGlCQUFPLEVBQUU7QUFGRjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGLEVBNEJFO0FBQUEsZ0JBQ0UsdUVBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUVJLG1GQURSO0FBRUUsWUFBSSxFQUFDLDBCQUZQO0FBR0UsZUFBTyxFQUFFO0FBQ1BDLGVBQUssRUFBRSxVQURBO0FBRVBOLG1CQUFTLEVBQUUsSUFGSjtBQUdQQyxpQkFBTyxFQUFFLElBSEY7QUFJUE0sZ0JBQU0sRUFBRTtBQUpEO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkYsRUF3Q0U7QUFBQSxnQkFDRSx1RUFBQyx5REFBRDtBQUNFLFlBQUksRUFBRUMsa0VBRFI7QUFFRSxlQUFPLEVBQUU7QUFBRUYsZUFBSyxFQUFFLFVBQVQ7QUFBcUJHLG9CQUFVLEVBQUUsSUFBakM7QUFBdUNQLGVBQUssRUFBRTtBQUE5QyxTQUZYO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Q0YsRUErQ0U7QUFBQSxnQkFDRSx1RUFBQyx5REFBRDtBQUNFLFlBQUksRUFBRU0sa0VBRFI7QUFFRSxZQUFJLEVBQUMsb0JBRlA7QUFHRSxlQUFPLEVBQUU7QUFBRUYsZUFBSyxFQUFFLGlCQUFUO0FBQTRCRyxvQkFBVSxFQUFFLElBQXhDO0FBQThDUCxlQUFLLEVBQUU7QUFBckQ7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlERCxDQTFERDs7S0FBTUwsRztBQTJETiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9jb21wb25lbnRzX1Zpc19qcy4yMjljNmQyODRiNmY5Yzk5YjBjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBlcnBldHJhdG9yc0J5R2VuZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9QcmVwZXRyYXRvcnNCeUdlbmRlclwiO1xuaW1wb3J0IG1hcE1lYW5BZ2VPZlBlcnBldHJhdG9ycyBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvbWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCI7XG5pbXBvcnQgYWdlSGlzdG9ncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9hZ2VIaXN0b2dyYW1cIjtcbmltcG9ydCBndW5BcmVhIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9ndW5BcmVhXCI7XG5pbXBvcnQgbnVtR3VuQnlUeXBlcyBmcm9tIFwiLi9mdW5jdGlvbnMvbnVtR3VuQnlUeXBlc1wiO1xuaW1wb3J0IHBlcnBldHJhdG9yc0J5VGltZSBmcm9tIFwiLi9mdW5jdGlvbnMvcGVycGV0cmF0b3JzQnlUaW1lXCI7XG5pbXBvcnQgVmVnYUNvbXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVnYUNvbXBcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG4vLyBjb25zdCBzZWN0aW9uID0gKHByb3BzKSA9PiB7XG4vLyAgIHJldHVybiA8c2VjdGlvbj57cHJvcHMuY2hpbGRyZW59PC9zZWN0aW9uPjtcbi8vIH07XG5cbmNvbnN0IFZpcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiB0dz1cInctc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e3BlcnBldHJhdG9yc0J5R2VuZGVyfSBuYW1lPVwicGVycGV0cmF0b3JzQnlHZW5kZXJcIiAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e2FnZUhpc3RvZ3JhbX1cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgY29sb3I6IFwidGVhbFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgbmFtZT1cImFnZUhpc3RvZ3JhbVwiXG4gICAgICAgIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e2d1bkFyZWF9IG5hbWU9XCJndW5BcmVhXCIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtudW1HdW5CeVR5cGVzfVxuICAgICAgICAgIG5hbWU9XCJudW1HdW5CeVR5cGVzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzfVxuICAgICAgICAgIG5hbWU9XCJtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnNcIlxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIGZpZWxkOiBcIm1lYW5fYWdlXCIsXG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgc2NoZW1hOiBcImdvbGRyZWRcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e3BlcnBldHJhdG9yc0J5VGltZX1cbiAgICAgICAgICBvcHRpb25zPXt7IGZpZWxkOiBcIm1lYW5fYWdlXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgICBuYW1lPVwicGVycGV0cmF0b3JzQnlUaW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJ1bmRlcmFnZXNfcmF0aW9cIiwgc3RhdGVfYWJicjogXCJXQVwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWaXM7XG4iXSwic291cmNlUm9vdCI6IiJ9