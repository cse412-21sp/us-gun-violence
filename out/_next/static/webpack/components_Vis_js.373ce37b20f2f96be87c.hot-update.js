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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/yeraf/proj/us-gun-violence/components/Vis.js",
    _this = undefined;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var Section = function Section(props) {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, _this);
};

_c = Section;
var VegaComp = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c2 = function _c2() {
  return __webpack_require__.e(/*! import() */ "components_VegaComp_js").then(__webpack_require__.bind(__webpack_require__, /*! ./VegaComp */ "./components/VegaComp.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./VegaComp */ "./components/VegaComp.js")];
    },
    modules: ["../components/Vis.js -> " + "./VegaComp"]
  }
});
_c3 = VegaComp;

var _ref =  false ? 0 : {
  name: "zjnckp-Vis",
  styles: "width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "yrwrpz-Vis",
  styles: ";label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 =  false ? 0 : {
  name: "1xtr794-Vis",
  styles: "display:flex;justify-content:center;align-items:center;flex-direction:column;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgba(180, 83, 9, var(--tw-bg-opacity));height:16rem;width:100vw;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 =  false ? 0 : {
  name: "11w2uzc-Vis",
  styles: "font-size:2.25rem;line-height:2.5rem;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Vis = function Vis() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
    css: _ref,
    "data-tw": "w-screen flex flex-col justify-center items-center",
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      css: _ref2,
      "data-tw": "",
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
        css: _ref3,
        "data-tw": "flex justify-center items-center flex-col text-white bg-yellow-700 h-64 w-screen",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          css: _ref4,
          "data-tw": "text-4xl",
          children: "US Gun Violence"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          children: "Interactive data visualizations about gun violence in US"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(VegaComp, {
        func: _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_0__.default,
        name: "perpetratorsByGender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(VegaComp, {
        func: _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_2__.default,
        options: {
          yearStart: 2013,
          yearEnd: 2018,
          color: "teal"
        },
        name: "ageHistogram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(VegaComp, {
        func: _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_3__.default,
        name: "gunArea"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(VegaComp, {
        func: _functions_numGunByTypes__WEBPACK_IMPORTED_MODULE_4__.default,
        name: "numGunByTypes",
        options: {
          yearStart: 2013,
          yearEnd: 2018
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(VegaComp, {
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
        lineNumber: 54,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(VegaComp, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__.default,
        options: {
          field: "mean_age",
          state_abbr: "WA",
          color: "red"
        },
        name: "perpetratorsByTime"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(VegaComp, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_5__.default,
        name: "perpetratorsByTime",
        options: {
          field: "underages_ratio",
          state_abbr: "WA",
          color: "red"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_c4 = Vis;
/* harmony default export */ __webpack_exports__["default"] = (Vis);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "VegaComp$dynamic");
$RefreshReg$(_c3, "VegaComp");
$RefreshReg$(_c4, "Vis");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXMuanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJWZWdhQ29tcCIsImR5bmFtaWMiLCJzc3IiLCJWaXMiLCJwZXJwZXRyYXRvcnNCeUdlbmRlciIsImFnZUhpc3RvZ3JhbSIsInllYXJTdGFydCIsInllYXJFbmQiLCJjb2xvciIsImd1bkFyZWEiLCJudW1HdW5CeVR5cGVzIiwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzIiwiZmllbGQiLCJzY2hlbWEiLCJwZXJwZXRyYXRvcnNCeVRpbWUiLCJzdGF0ZV9hYmJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsU0FBTztBQUFBLGNBQVVBLEtBQUssQ0FBQ0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7S0FBTUYsTztBQUdOLElBQU1HLFFBQVEsR0FBR0MsbURBQU8sT0FBQztBQUFBLFNBQU0saUtBQU47QUFBQSxDQUFELEVBQTZCO0FBQ25EQyxLQUFHLEVBQUUsS0FEOEM7QUFBQTtBQUFBO0FBQUEsa0NBQWYsNENBQWU7QUFBQTtBQUFBLDJDQUFmLFlBQWU7QUFBQTtBQUFBLENBQTdCLENBQXhCO01BQU1GLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR04sSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixTQUNFO0FBQUE7QUFBQTtBQUFBLGVBQ0UsdUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQSxnQkFDRTtBQUFBO0FBQUE7QUFBQSxtQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFPRSx1RUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQVFFLHVFQUFDLE9BQUQ7QUFBQSxnQkFDRSx1RUFBQyxRQUFEO0FBQVUsWUFBSSxFQUFFQywrRUFBaEI7QUFBc0MsWUFBSSxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsRUFXRSx1RUFBQyxPQUFEO0FBQUEsZ0JBQ0UsdUVBQUMsUUFBRDtBQUNFLFlBQUksRUFBRUMsdUVBRFI7QUFFRSxlQUFPLEVBQUU7QUFDUEMsbUJBQVMsRUFBRSxJQURKO0FBRVBDLGlCQUFPLEVBQUUsSUFGRjtBQUdQQyxlQUFLLEVBQUU7QUFIQSxTQUZYO0FBT0UsWUFBSSxFQUFDO0FBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixFQXNCRSx1RUFBQyxPQUFEO0FBQUEsZ0JBQ0UsdUVBQUMsUUFBRDtBQUFVLFlBQUksRUFBRUMsa0VBQWhCO0FBQXlCLFlBQUksRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRixFQXlCRSx1RUFBQyxPQUFEO0FBQUEsZ0JBQ0UsdUVBQUMsUUFBRDtBQUNFLFlBQUksRUFBRUMsNkRBRFI7QUFFRSxZQUFJLEVBQUMsZUFGUDtBQUdFLGVBQU8sRUFBRTtBQUNQSixtQkFBUyxFQUFFLElBREo7QUFFUEMsaUJBQU8sRUFBRTtBQUZGO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkYsRUFtQ0UsdUVBQUMsT0FBRDtBQUFBLGdCQUNFLHVFQUFDLFFBQUQ7QUFDRSxZQUFJLEVBQUVJLG1GQURSO0FBRUUsWUFBSSxFQUFDLDBCQUZQO0FBR0UsZUFBTyxFQUFFO0FBQ1BDLGVBQUssRUFBRSxVQURBO0FBRVBOLG1CQUFTLEVBQUUsSUFGSjtBQUdQQyxpQkFBTyxFQUFFLElBSEY7QUFJUE0sZ0JBQU0sRUFBRTtBQUpEO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQ0YsRUErQ0UsdUVBQUMsT0FBRDtBQUFBLGdCQUNFLHVFQUFDLFFBQUQ7QUFDRSxZQUFJLEVBQUVDLGtFQURSO0FBRUUsZUFBTyxFQUFFO0FBQUVGLGVBQUssRUFBRSxVQUFUO0FBQXFCRyxvQkFBVSxFQUFFLElBQWpDO0FBQXVDUCxlQUFLLEVBQUU7QUFBOUMsU0FGWDtBQUdFLFlBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0NGLEVBc0RFLHVFQUFDLE9BQUQ7QUFBQSxnQkFDRSx1RUFBQyxRQUFEO0FBQ0UsWUFBSSxFQUFFTSxrRUFEUjtBQUVFLFlBQUksRUFBQyxvQkFGUDtBQUdFLGVBQU8sRUFBRTtBQUFFRixlQUFLLEVBQUUsaUJBQVQ7QUFBNEJHLG9CQUFVLEVBQUUsSUFBeEM7QUFBOENQLGVBQUssRUFBRTtBQUFyRDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0VELENBakVEOztNQUFNTCxHO0FBa0VOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL2NvbXBvbmVudHNfVmlzX2pzLjM3M2NlMzdiMjBmMmY5NmJlODdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGVycGV0cmF0b3JzQnlHZW5kZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL1ByZXBldHJhdG9yc0J5R2VuZGVyXCI7XG5pbXBvcnQgbWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9tYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnNcIjtcbmltcG9ydCBhZ2VIaXN0b2dyYW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2FnZUhpc3RvZ3JhbVwiO1xuaW1wb3J0IGd1bkFyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2d1bkFyZWFcIjtcbmltcG9ydCBudW1HdW5CeVR5cGVzIGZyb20gXCIuL2Z1bmN0aW9ucy9udW1HdW5CeVR5cGVzXCI7XG5pbXBvcnQgcGVycGV0cmF0b3JzQnlUaW1lIGZyb20gXCIuL2Z1bmN0aW9ucy9wZXJwZXRyYXRvcnNCeVRpbWVcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBTZWN0aW9uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8c2VjdGlvbj57cHJvcHMuY2hpbGRyZW59PC9zZWN0aW9uPjtcbn07XG5jb25zdCBWZWdhQ29tcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9WZWdhQ29tcFwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5jb25zdCBWaXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gdHc9XCJ3LXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPFNlY3Rpb24gdHc9XCJcIj5cbiAgICAgICAgPHAgdHc9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCB0ZXh0LXdoaXRlIGJnLXllbGxvdy03MDAgaC02NCAgdy1zY3JlZW5cIj5cbiAgICAgICAgICA8c3BhbiB0dz1cInRleHQtNHhsXCI+VVMgR3VuIFZpb2xlbmNlPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkludGVyYWN0aXZlIGRhdGEgdmlzdWFsaXphdGlvbnMgYWJvdXQgZ3VuIHZpb2xlbmNlIGluIFVTPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj48L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e3BlcnBldHJhdG9yc0J5R2VuZGVyfSBuYW1lPVwicGVycGV0cmF0b3JzQnlHZW5kZXJcIiAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e2FnZUhpc3RvZ3JhbX1cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgY29sb3I6IFwidGVhbFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgbmFtZT1cImFnZUhpc3RvZ3JhbVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e2d1bkFyZWF9IG5hbWU9XCJndW5BcmVhXCIgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtudW1HdW5CeVR5cGVzfVxuICAgICAgICAgIG5hbWU9XCJudW1HdW5CeVR5cGVzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzfVxuICAgICAgICAgIG5hbWU9XCJtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnNcIlxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIGZpZWxkOiBcIm1lYW5fYWdlXCIsXG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgc2NoZW1hOiBcImdvbGRyZWRcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e3BlcnBldHJhdG9yc0J5VGltZX1cbiAgICAgICAgICBvcHRpb25zPXt7IGZpZWxkOiBcIm1lYW5fYWdlXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgICBuYW1lPVwicGVycGV0cmF0b3JzQnlUaW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJ1bmRlcmFnZXNfcmF0aW9cIiwgc3RhdGVfYWJicjogXCJXQVwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWaXM7XG4iXSwic291cmNlUm9vdCI6IiJ9