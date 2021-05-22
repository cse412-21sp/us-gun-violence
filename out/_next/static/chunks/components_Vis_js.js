(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Vis_js"],{

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
    func({
      dataSet: dataSet,
      options: options
    }).render().then(function (viewElement) {
      // render returns a promise to a DOM element containing the chart
      // viewElement.value contains the Vega View object instance
      document.getElementById(name).appendChild(viewElement);
    });
  }, []);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    id: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 10
  }, _this);
};

_s(Veg, "8GgPA0Dc2eengb4auIjaHYvXvgs=", false, function () {
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


/***/ }),

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

var _ref =  false ? 0 : {
  name: "zjnckp-Vis",
  styles: "width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Vis = function Vis() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
    css: _ref,
    "data-tw": "w-screen flex flex-col justify-center items-center",
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
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
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
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
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
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
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
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
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
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
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
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
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
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


/***/ }),

/***/ "./components/functions/PrepetratorsByGender.js":
/*!******************************************************!*\
  !*** ./components/functions/PrepetratorsByGender.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* harmony import */ var arquero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! arquero */ "./node_modules/arquero/src/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






function perpetratorsByGender(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var p = dataSet.p;
  var brush = vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.selectInterval() // Brush is a better (vivid?) name than selection in this case!
  .encodings("x"); // limit selection to x-axis (year) values

  var x = vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.x().yearmonth("date");
  var gender_ratio = p.filter(function (d) {
    return d.type === "Subject-Suspect";
  }).derive({
    month: function month(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.utcmonth(d.date);
    },
    is_male: function is_male(d) {
      return d.gender === "Male";
    },
    is_female: function is_female(d) {
      return d.gender === "Female";
    }
  }).groupby(["month", "year"]).rollup({
    female_pctg: function female_pctg(d) {
      return 100 * arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_female) / (arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_female) + arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_male));
    },
    male_pctg: function male_pctg(d) {
      return 100 * arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_male) / (arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_female) + arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_male));
    },
    date: function date(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.min(arquero__WEBPACK_IMPORTED_MODULE_4__.op.utcdatetime(d.date));
    }
  }).derive({
    date: function date(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.datetime(d.year, d.month);
    }
  }).rename({
    male_pctg: "male",
    female_pctg: "female"
  }).fold(["female", "male"]).rename({
    key: "gender"
  });
  var gender_count = p.filter(function (d) {
    return d.type === "Subject-Suspect";
  }).derive({
    month: function month(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.utcmonth(d.date);
    },
    is_male: function is_male(d) {
      return d.gender === "Male";
    },
    is_female: function is_female(d) {
      return d.gender === "Female";
    }
  }).groupby(["month", "year"]).rollup({
    female_count: function female_count(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_female);
    },
    male_count: function male_count(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.sum(d.is_male);
    },
    date: function date(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.min(arquero__WEBPACK_IMPORTED_MODULE_4__.op.utcdatetime(d.date));
    }
  }).derive({
    date: function date(d) {
      return arquero__WEBPACK_IMPORTED_MODULE_4__.op.datetime(d.year, d.month);
    }
  }).rename({
    male_count: "male",
    female_count: "female"
  }).fold(["female", "male"]).rename({
    key: "gender"
  });
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.hconcat(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markArea({
    opacity: 0.5
  }).data(gender_count).encode(x, vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().fieldQ("value").title("Number of perpetrators"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().fieldN("gender").scale({
    scheme: "set1"
  })).params(brush), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markArea({
    opacity: 0.5
  }).data(gender_ratio).encode(x, vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().fieldQ("value").title("Percentage of perpetrators"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().fieldN("gender").scale({
    scheme: "set1"
  })).encode(x.scale({
    domain: brush
  })));
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
/* harmony default export */ __webpack_exports__["default"] = (perpetratorsByGender);

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


/***/ }),

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


/***/ }),

/***/ "./components/functions/gunArea.js":
/*!*****************************************!*\
  !*** ./components/functions/gunArea.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function gunArea(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var g = dataSet.g;
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markArea({
    opacity: 0.8
  }).data(g).transform(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.filter("datum['gun'] != 'Unknown'")).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.x().yearmonth("date"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().count().title("Number of guns"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().fieldN("gun").scale({
    scheme: "category20b"
  }).title("Gun type")).height(400).width(700);
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
/* harmony default export */ __webpack_exports__["default"] = (gunArea);

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


/***/ }),

/***/ "./components/functions/gunCounts.js":
/*!*******************************************!*\
  !*** ./components/functions/gunCounts.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function gunCounts(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var yearStart = options.yearStart,
      yearEnd = options.yearEnd;
  var g = dataSet.g;
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markBar({
    opacity: 0.8
  }).data(g).transform(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.filter("datum['gun'] != 'Unknown' && datum['year'] >= " + yearStart + " && datum['year'] <= " + yearEnd)).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().fieldN("gun").sort(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.count()), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.x().count().title("Number of guns"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().fieldN("gun").scale({
    scheme: "category20b"
  }).legend(false).title("Gun type"));
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
/* harmony default export */ __webpack_exports__["default"] = (gunCounts);

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


/***/ }),

/***/ "./components/functions/gunKillCounts.js":
/*!***********************************************!*\
  !*** ./components/functions/gunKillCounts.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function gunKillCounts(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var yearStart = options.yearStart,
      yearEnd = options.yearEnd;
  var g = dataSet.g;
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markBar({
    opacity: 0.8
  }).data(g).transform(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.filter("datum['gun'] != 'Unknown' && datum['year'] >= " + yearStart + " && datum['year'] <= " + yearEnd)).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().fieldN("gun").sort(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean("n_killed")), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.x().mean("n_killed").title("Mean kill counts in an incident"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().fieldN("gun").scale({
    scheme: "category20b"
  }).legend(false).title("Gun type"));
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
/* harmony default export */ __webpack_exports__["default"] = (gunKillCounts);

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


/***/ }),

/***/ "./components/functions/mapMeanAgeOfPerpetrators.js":
/*!**********************************************************!*\
  !*** ./components/functions/mapMeanAgeOfPerpetrators.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* harmony import */ var _stateRanking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateRanking */ "./components/functions/stateRanking.js");
/* harmony import */ var _perpetratorsByState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perpetratorsByState */ "./components/functions/perpetratorsByState.js");
/* module decorator */ module = __webpack_require__.hmd(module);







function map(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.hconcat((0,_stateRanking__WEBPACK_IMPORTED_MODULE_4__.default)({
    dataSet: dataSet,
    options: options
  }).height(500), (0,_perpetratorsByState__WEBPACK_IMPORTED_MODULE_5__.default)({
    dataSet: dataSet,
    options: options
  }).height(500).width(720)).config({
    scale: {
      maxSize: 1500
    },
    view: {
      stroke: null
    }
  });
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
/* harmony default export */ __webpack_exports__["default"] = (map);

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


/***/ }),

/***/ "./components/functions/numGunByTypes.js":
/*!***********************************************!*\
  !*** ./components/functions/numGunByTypes.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* harmony import */ var _gunCounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gunCounts */ "./components/functions/gunCounts.js");
/* harmony import */ var _gunKillCounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gunKillCounts */ "./components/functions/gunKillCounts.js");
/* module decorator */ module = __webpack_require__.hmd(module);







function numGunByTypes(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.hconcat((0,_gunCounts__WEBPACK_IMPORTED_MODULE_4__.default)({
    dataSet: dataSet,
    options: options
  }), (0,_gunKillCounts__WEBPACK_IMPORTED_MODULE_5__.default)({
    dataSet: dataSet,
    options: options
  }));
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
/* harmony default export */ __webpack_exports__["default"] = (numGunByTypes);

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


/***/ }),

/***/ "./components/functions/perpetratorsByState.js":
/*!*****************************************************!*\
  !*** ./components/functions/perpetratorsByState.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function perpetratorsByState(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var field = options.field,
      yearStart = options.yearStart,
      yearEnd = options.yearEnd,
      scheme = options.scheme;
  var pst = dataSet.pst,
      usa = dataSet.usa,
      ppst = dataSet.ppst;
  var titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Ratio of underage/total", "perpetrators"]
  };
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.data(pst).layer(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markGeoshape({
    fill: "#ddd",
    stroke: "#fff",
    strokeWidth: 1
  }).data(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.topojson(usa).feature("states")).transform(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.lookup("id").from(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.data(ppst).key("fip").fields("state"))).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.tooltip("state")), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markCircle({
    stroke: "#5e5e5e"
  }).data(pst).transform(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.filter('datum["year"] >= ' + yearStart + ' && datum["year"] <= ' + yearEnd), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.groupby("state").aggregate(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean("mean_age").as("mean_age"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean("underages_ratio").as("underages_ratio"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean("perpetrators_per_1M").as("perpetrators_per_1M"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean("latitude").as("latitude"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean("longitude").as("longitude"))).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.latitude().fieldQ("latitude"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.longitude().fieldQ("longitude"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().mean(field).legend({
    titleLineHeight: 10
  }).scale({
    scheme: scheme
  }).title(titles[field]), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.size().mean("perpetrators_per_1M").title(["Perpetrators per", "1M population"]), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.tooltip([vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.fieldN("state"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.fieldQ(field), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.fieldQ("perpetrators_per_1M")]))).project(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.projection("albersUsa"));
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
/* harmony default export */ __webpack_exports__["default"] = (perpetratorsByState);

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


/***/ }),

/***/ "./components/functions/perpetratorsByTime.js":
/*!****************************************************!*\
  !*** ./components/functions/perpetratorsByTime.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function perpetratorsByTime(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var field = options.field,
      state_abbr = options.state_abbr,
      color = options.color;
  var pst = dataSet.pst;
  var titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Ratio of underage/total", "perpetrators"]
  };
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.layer(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markLine().data(pst).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.x().fieldO("year"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().mean(field).title(titles[field]), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().value("orange")), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markLine().data(pst).transform(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.filter('datum["state_abbr"] == ' + '"' + state_abbr + '"')).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.x().fieldO("year"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().mean(field).title(titles[field]), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().value(color))).width(500);
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
/* harmony default export */ __webpack_exports__["default"] = (perpetratorsByTime);

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


/***/ }),

/***/ "./components/functions/stateRanking.js":
/*!**********************************************!*\
  !*** ./components/functions/stateRanking.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);





function stateRanking(_ref) {
  var dataSet = _ref.dataSet,
      options = _ref.options;
  var pst = dataSet.pst;
  var field = options.field,
      yearStart = options.yearStart,
      yearEnd = options.yearEnd,
      scheme = options.scheme;
  return vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.markRect().data(pst).transform(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.filter('datum["year"] >= ' + yearStart + ' && datum["year"] <= ' + yearEnd)).encode(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.y().fieldN("state").sort(vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean(field).order("descending")).title("State"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.color().mean(field).scale({
    scheme: scheme
  }), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.tooltip([vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.fieldN("state"), vega_lite_api__WEBPACK_IMPORTED_MODULE_1__.mean(field)]));
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
/* harmony default export */ __webpack_exports__["default"] = (stateRanking);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL1ByZXBldHJhdG9yc0J5R2VuZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9hZ2VIaXN0b2dyYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2d1bkFyZWEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2d1bkNvdW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuS2lsbENvdW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvbWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9udW1HdW5CeVR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9wZXJwZXRyYXRvcnNCeVN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9wZXJwZXRyYXRvcnNCeVRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL3N0YXRlUmFua2luZy5qcyJdLCJuYW1lcyI6WyJWZWciLCJmdW5jIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImRhdGFTZXQiLCJ1c2VTdG9yZSIsInN0YXRlIiwiZGF0YXNldCIsInZlZ2FPcHRpb25zIiwiY29uZmlnIiwiaW5pdCIsInZpZXciLCJ0b29sdGlwIiwidmVnYVRvb2x0aXAiLCJjYWxsIiwicmVuZGVyZXIiLCJ2bCIsInZlZ2EiLCJ2ZWdhTGl0ZSIsInVzZUVmZmVjdCIsInJlbmRlciIsInRoZW4iLCJ2aWV3RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsIlNlY3Rpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwiVmlzIiwicGVycGV0cmF0b3JzQnlHZW5kZXIiLCJhZ2VIaXN0b2dyYW0iLCJ5ZWFyU3RhcnQiLCJ5ZWFyRW5kIiwiY29sb3IiLCJndW5BcmVhIiwibnVtR3VuQnlUeXBlcyIsIm1hcE1lYW5BZ2VPZlBlcnBldHJhdG9ycyIsImZpZWxkIiwic2NoZW1hIiwicGVycGV0cmF0b3JzQnlUaW1lIiwic3RhdGVfYWJiciIsInAiLCJicnVzaCIsImVuY29kaW5ncyIsIngiLCJ5ZWFybW9udGgiLCJnZW5kZXJfcmF0aW8iLCJmaWx0ZXIiLCJkIiwidHlwZSIsImRlcml2ZSIsIm1vbnRoIiwib3AiLCJkYXRlIiwiaXNfbWFsZSIsImdlbmRlciIsImlzX2ZlbWFsZSIsImdyb3VwYnkiLCJyb2xsdXAiLCJmZW1hbGVfcGN0ZyIsIm1hbGVfcGN0ZyIsInllYXIiLCJyZW5hbWUiLCJmb2xkIiwia2V5IiwiZ2VuZGVyX2NvdW50IiwiZmVtYWxlX2NvdW50IiwibWFsZV9jb3VudCIsIm9wYWNpdHkiLCJkYXRhIiwiZW5jb2RlIiwiZmllbGRRIiwidGl0bGUiLCJmaWVsZE4iLCJzY2FsZSIsInNjaGVtZSIsInBhcmFtcyIsImRvbWFpbiIsImJpbiIsInN0ZXAiLCJjb3VudCIsInZhbHVlIiwiZyIsInRyYW5zZm9ybSIsImd1bkNvdW50cyIsInNvcnQiLCJsZWdlbmQiLCJndW5LaWxsQ291bnRzIiwibWVhbiIsIm1hcCIsInN0YXRlUmFua2luZyIsInBlcnBldHJhdG9yc0J5U3RhdGUiLCJtYXhTaXplIiwic3Ryb2tlIiwicHN0IiwidXNhIiwicHBzdCIsInRpdGxlcyIsIm1lYW5fYWdlIiwidW5kZXJhZ2VzX3JhdGlvIiwibGF5ZXIiLCJmaWxsIiwic3Ryb2tlV2lkdGgiLCJmZWF0dXJlIiwiZnJvbSIsImZpZWxkcyIsImFnZ3JlZ2F0ZSIs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LENBQVgsQ0FmRyxDQUFQO0FBaUJEOztBQUVELElBQU05QixXQUFXLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSxDQUNOO0FBRE0sR0FEVTtBQUlsQkMsTUFBSSxFQUFFLGNBQUNDLElBQUQsRUFBVTtBQUNkO0FBQ0FBLFFBQUksQ0FBQ0MsT0FBTCxDQUFhLElBQUlDLGlEQUFKLEdBQTBCQyxJQUF2QztBQUNELEdBUGlCO0FBUWxCSCxNQUFJLEVBQUU7QUFDSkksWUFBUSxFQUFFO0FBRE47QUFSWSxDQUFwQjtBQVlBQyxtREFBQSxDQUFZQyxpQ0FBWixFQUFrQkMsc0NBQWxCLEVBQTRCVixXQUE1QjtBQUVBLCtEQUFlbUYsWUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2NvbXBvbmVudHNfVmlzX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcbmltcG9ydCB1c2VTdG9yZSBmcm9tIFwiLi4vc3RvcmUvaW5kZXhcIjtcblxuY29uc3QgVmVnID0gKHsgZnVuYywgbmFtZSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IGRhdGFTZXQgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmRhdGFzZXQpO1xuICBjb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICB9LFxuICAgIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gICAgfSxcbiAgICB2aWV3OiB7XG4gICAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgICB9LFxuICB9O1xuICB2bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmMoeyBkYXRhU2V0LCBvcHRpb25zIH0pXG4gICAgICAucmVuZGVyKClcbiAgICAgIC50aGVuKCh2aWV3RWxlbWVudCkgPT4ge1xuICAgICAgICAvLyByZW5kZXIgcmV0dXJucyBhIHByb21pc2UgdG8gYSBET00gZWxlbWVudCBjb250YWluaW5nIHRoZSBjaGFydFxuICAgICAgICAvLyB2aWV3RWxlbWVudC52YWx1ZSBjb250YWlucyB0aGUgVmVnYSBWaWV3IG9iamVjdCBpbnN0YW5jZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKS5hcHBlbmRDaGlsZCh2aWV3RWxlbWVudCk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGRpdiBpZD17bmFtZX0+PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFZlZztcbiIsImltcG9ydCBwZXJwZXRyYXRvcnNCeUdlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvUHJlcGV0cmF0b3JzQnlHZW5kZXJcIjtcbmltcG9ydCBtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiO1xuaW1wb3J0IGFnZUhpc3RvZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtXCI7XG5pbXBvcnQgZ3VuQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuQXJlYVwiO1xuaW1wb3J0IG51bUd1bkJ5VHlwZXMgZnJvbSBcIi4vZnVuY3Rpb25zL251bUd1bkJ5VHlwZXNcIjtcbmltcG9ydCBwZXJwZXRyYXRvcnNCeVRpbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3BlcnBldHJhdG9yc0J5VGltZVwiO1xuaW1wb3J0IFZlZ2FDb21wIGZyb20gXCIuLi9jb21wb25lbnRzL1ZlZ2FDb21wXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgU2VjdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPHNlY3Rpb24+e3Byb3BzLmNoaWxkcmVufTwvc2VjdGlvbj47XG59O1xuXG5jb25zdCBWaXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gdHc9XCJ3LXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtwZXJwZXRyYXRvcnNCeUdlbmRlcn0gbmFtZT1cInBlcnBldHJhdG9yc0J5R2VuZGVyXCIgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXthZ2VIaXN0b2dyYW19XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIGNvbG9yOiBcInRlYWxcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG5hbWU9XCJhZ2VIaXN0b2dyYW1cIlxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtndW5BcmVhfSBuYW1lPVwiZ3VuQXJlYVwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bnVtR3VuQnlUeXBlc31cbiAgICAgICAgICBuYW1lPVwibnVtR3VuQnlUeXBlc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc31cbiAgICAgICAgICBuYW1lPVwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBmaWVsZDogXCJtZWFuX2FnZVwiLFxuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIHNjaGVtYTogXCJnb2xkcmVkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJtZWFuX2FnZVwiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwidW5kZXJhZ2VzX3JhdGlvXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVmlzO1xuIiwiaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcbmltcG9ydCB7IG9wIH0gZnJvbSBcImFycXVlcm9cIjtcblxuZnVuY3Rpb24gcGVycGV0cmF0b3JzQnlHZW5kZXIoeyBkYXRhU2V0LCBvcHRpb25zIH0pIHtcbiAgY29uc3QgeyBwIH0gPSBkYXRhU2V0O1xuICBjb25zdCBicnVzaCA9IHZsXG4gICAgLnNlbGVjdEludGVydmFsKCkgLy8gQnJ1c2ggaXMgYSBiZXR0ZXIgKHZpdmlkPykgbmFtZSB0aGFuIHNlbGVjdGlvbiBpbiB0aGlzIGNhc2UhXG4gICAgLmVuY29kaW5ncyhcInhcIik7IC8vIGxpbWl0IHNlbGVjdGlvbiB0byB4LWF4aXMgKHllYXIpIHZhbHVlc1xuXG4gIGNvbnN0IHggPSB2bC54KCkueWVhcm1vbnRoKFwiZGF0ZVwiKTtcblxuICBjb25zdCBnZW5kZXJfcmF0aW8gPSBwXG4gICAgLmZpbHRlcigoZCkgPT4gZC50eXBlID09PSBcIlN1YmplY3QtU3VzcGVjdFwiKVxuICAgIC5kZXJpdmUoe1xuICAgICAgbW9udGg6IChkKSA9PiBvcC51dGNtb250aChkLmRhdGUpLFxuICAgICAgaXNfbWFsZTogKGQpID0+IGQuZ2VuZGVyID09PSBcIk1hbGVcIixcbiAgICAgIGlzX2ZlbWFsZTogKGQpID0+IGQuZ2VuZGVyID09PSBcIkZlbWFsZVwiLFxuICAgIH0pXG4gICAgLmdyb3VwYnkoW1wibW9udGhcIiwgXCJ5ZWFyXCJdKVxuICAgIC5yb2xsdXAoe1xuICAgICAgZmVtYWxlX3BjdGc6IChkKSA9PlxuICAgICAgICAoMTAwICogb3Auc3VtKGQuaXNfZmVtYWxlKSkgLyAob3Auc3VtKGQuaXNfZmVtYWxlKSArIG9wLnN1bShkLmlzX21hbGUpKSxcbiAgICAgIG1hbGVfcGN0ZzogKGQpID0+XG4gICAgICAgICgxMDAgKiBvcC5zdW0oZC5pc19tYWxlKSkgLyAob3Auc3VtKGQuaXNfZmVtYWxlKSArIG9wLnN1bShkLmlzX21hbGUpKSxcbiAgICAgIGRhdGU6IChkKSA9PiBvcC5taW4ob3AudXRjZGF0ZXRpbWUoZC5kYXRlKSksXG4gICAgfSlcbiAgICAuZGVyaXZlKHsgZGF0ZTogKGQpID0+IG9wLmRhdGV0aW1lKGQueWVhciwgZC5tb250aCkgfSlcbiAgICAucmVuYW1lKHsgbWFsZV9wY3RnOiBcIm1hbGVcIiwgZmVtYWxlX3BjdGc6IFwiZmVtYWxlXCIgfSlcbiAgICAuZm9sZChbXCJmZW1hbGVcIiwgXCJtYWxlXCJdKVxuICAgIC5yZW5hbWUoeyBrZXk6IFwiZ2VuZGVyXCIgfSk7XG5cbiAgY29uc3QgZ2VuZGVyX2NvdW50ID0gcFxuICAgIC5maWx0ZXIoKGQpID0+IGQudHlwZSA9PT0gXCJTdWJqZWN0LVN1c3BlY3RcIilcbiAgICAuZGVyaXZlKHtcbiAgICAgIG1vbnRoOiAoZCkgPT4gb3AudXRjbW9udGgoZC5kYXRlKSxcbiAgICAgIGlzX21hbGU6IChkKSA9PiBkLmdlbmRlciA9PT0gXCJNYWxlXCIsXG4gICAgICBpc19mZW1hbGU6IChkKSA9PiBkLmdlbmRlciA9PT0gXCJGZW1hbGVcIixcbiAgICB9KVxuICAgIC5ncm91cGJ5KFtcIm1vbnRoXCIsIFwieWVhclwiXSlcbiAgICAucm9sbHVwKHtcbiAgICAgIGZlbWFsZV9jb3VudDogKGQpID0+IG9wLnN1bShkLmlzX2ZlbWFsZSksXG4gICAgICBtYWxlX2NvdW50OiAoZCkgPT4gb3Auc3VtKGQuaXNfbWFsZSksXG4gICAgICBkYXRlOiAoZCkgPT4gb3AubWluKG9wLnV0Y2RhdGV0aW1lKGQuZGF0ZSkpLFxuICAgIH0pXG4gICAgLmRlcml2ZSh7IGRhdGU6IChkKSA9PiBvcC5kYXRldGltZShkLnllYXIsIGQubW9udGgpIH0pXG4gICAgLnJlbmFtZSh7IG1hbGVfY291bnQ6IFwibWFsZVwiLCBmZW1hbGVfY291bnQ6IFwiZmVtYWxlXCIgfSlcbiAgICAuZm9sZChbXCJmZW1hbGVcIiwgXCJtYWxlXCJdKVxuICAgIC5yZW5hbWUoeyBrZXk6IFwiZ2VuZGVyXCIgfSk7XG5cbiAgcmV0dXJuIHZsLmhjb25jYXQoXG4gICAgdmxcbiAgICAgIC5tYXJrQXJlYSh7IG9wYWNpdHk6IDAuNSB9KVxuICAgICAgLmRhdGEoZ2VuZGVyX2NvdW50KVxuICAgICAgLmVuY29kZShcbiAgICAgICAgeCxcbiAgICAgICAgdmwueSgpLmZpZWxkUShcInZhbHVlXCIpLnRpdGxlKFwiTnVtYmVyIG9mIHBlcnBldHJhdG9yc1wiKSxcbiAgICAgICAgdmwuY29sb3IoKS5maWVsZE4oXCJnZW5kZXJcIikuc2NhbGUoeyBzY2hlbWU6IFwic2V0MVwiIH0pXG4gICAgICApXG4gICAgICAucGFyYW1zKGJydXNoKSxcbiAgICB2bFxuICAgICAgLm1hcmtBcmVhKHsgb3BhY2l0eTogMC41IH0pXG4gICAgICAuZGF0YShnZW5kZXJfcmF0aW8pXG4gICAgICAuZW5jb2RlKFxuICAgICAgICB4LFxuICAgICAgICB2bC55KCkuZmllbGRRKFwidmFsdWVcIikudGl0bGUoXCJQZXJjZW50YWdlIG9mIHBlcnBldHJhdG9yc1wiKSxcbiAgICAgICAgdmwuY29sb3IoKS5maWVsZE4oXCJnZW5kZXJcIikuc2NhbGUoeyBzY2hlbWU6IFwic2V0MVwiIH0pXG4gICAgICApXG4gICAgICAuZW5jb2RlKHguc2NhbGUoeyBkb21haW46IGJydXNoIH0pKVxuICApO1xufVxuXG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBwZXJwZXRyYXRvcnNCeUdlbmRlcjtcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5cbmZ1bmN0aW9uIGFnZUhpc3RvZ3JhbSh7IGRhdGFTZXQsIG9wdGlvbnMgfSkge1xuICBjb25zdCB7IHAgfSA9IGRhdGFTZXQ7XG4gIGNvbnN0IHsgeWVhclN0YXJ0LCB5ZWFyRW5kLCBjb2xvciB9ID0gb3B0aW9ucztcbiAgcmV0dXJuIHZsXG4gICAgLm1hcmtCYXIoeyBvcGFjaXR5OiAwLjUgfSlcbiAgICAuZGF0YShcbiAgICAgIHBcbiAgICAgICAgLnBhcmFtcyh7IHllYXJTdGFydDogeWVhclN0YXJ0LCB5ZWFyRW5kOiB5ZWFyRW5kIH0pXG4gICAgICAgIC5maWx0ZXIoKGQpID0+IGQudHlwZSA9PT0gXCJTdWJqZWN0LVN1c3BlY3RcIilcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoZCkgPT4gb3AueWVhcihkLmRhdGUpID49IHllYXJTdGFydCAmJiBvcC55ZWFyKGQuZGF0ZSkgPD0geWVhckVuZFxuICAgICAgICApXG4gICAgKVxuICAgIC5lbmNvZGUoXG4gICAgICB2bFxuICAgICAgICAueCgpXG4gICAgICAgIC5maWVsZFEoXCJhZ2VcIilcbiAgICAgICAgLnNjYWxlKHsgZG9tYWluOiBbMCwgMTAwXSB9KVxuICAgICAgICAuYmluKHsgc3RlcDogNSB9KSxcbiAgICAgIHZsLnkoKS5jb3VudCgpLnRpdGxlKFwiTnVtYmVyIG9mIFBlcnBldHJhdG9yc1wiKSxcbiAgICAgIHZsLmNvbG9yKCkudmFsdWUoY29sb3IpXG4gICAgKTtcbn1cblxuY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gIGNvbmZpZzoge1xuICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgfSxcbiAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICB9LFxuICB2aWV3OiB7XG4gICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gIH0sXG59O1xudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgYWdlSGlzdG9ncmFtO1xuIiwiaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcblxuZnVuY3Rpb24gZ3VuQXJlYSh7IGRhdGFTZXQsIG9wdGlvbnMgfSkge1xuICBjb25zdCB7IGcgfSA9IGRhdGFTZXQ7XG5cbiAgcmV0dXJuIHZsXG4gICAgLm1hcmtBcmVhKHsgb3BhY2l0eTogMC44IH0pXG4gICAgLmRhdGEoZylcbiAgICAudHJhbnNmb3JtKHZsLmZpbHRlcihcImRhdHVtWydndW4nXSAhPSAnVW5rbm93bidcIikpXG4gICAgLmVuY29kZShcbiAgICAgIHZsLngoKS55ZWFybW9udGgoXCJkYXRlXCIpLFxuICAgICAgdmwueSgpLmNvdW50KCkudGl0bGUoXCJOdW1iZXIgb2YgZ3Vuc1wiKSxcbiAgICAgIHZsXG4gICAgICAgIC5jb2xvcigpXG4gICAgICAgIC5maWVsZE4oXCJndW5cIilcbiAgICAgICAgLnNjYWxlKHsgc2NoZW1lOiBcImNhdGVnb3J5MjBiXCIgfSlcbiAgICAgICAgLnRpdGxlKFwiR3VuIHR5cGVcIilcbiAgICApXG4gICAgLmhlaWdodCg0MDApXG4gICAgLndpZHRoKDcwMCk7XG59XG5cbmNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICBjb25maWc6IHtcbiAgICAvLyBWZWdhLUxpdGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gIH0sXG4gIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwIGhhbmRsZXJcbiAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgfSxcbiAgdmlldzoge1xuICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICB9LFxufTtcbnZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IGd1bkFyZWE7XG4iLCJpbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuXG5mdW5jdGlvbiBndW5Db3VudHMoeyBkYXRhU2V0LCBvcHRpb25zIH0pIHtcbiAgY29uc3QgeyB5ZWFyU3RhcnQsIHllYXJFbmQgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgZyB9ID0gZGF0YVNldDtcbiAgcmV0dXJuIHZsXG4gICAgLm1hcmtCYXIoeyBvcGFjaXR5OiAwLjggfSlcbiAgICAuZGF0YShnKVxuICAgIC50cmFuc2Zvcm0oXG4gICAgICB2bC5maWx0ZXIoXG4gICAgICAgIFwiZGF0dW1bJ2d1biddICE9ICdVbmtub3duJyAmJiBkYXR1bVsneWVhciddID49IFwiICtcbiAgICAgICAgICB5ZWFyU3RhcnQgK1xuICAgICAgICAgIFwiICYmIGRhdHVtWyd5ZWFyJ10gPD0gXCIgK1xuICAgICAgICAgIHllYXJFbmRcbiAgICAgIClcbiAgICApXG4gICAgLmVuY29kZShcbiAgICAgIHZsLnkoKS5maWVsZE4oXCJndW5cIikuc29ydCh2bC5jb3VudCgpKSxcbiAgICAgIHZsLngoKS5jb3VudCgpLnRpdGxlKFwiTnVtYmVyIG9mIGd1bnNcIiksXG4gICAgICB2bFxuICAgICAgICAuY29sb3IoKVxuICAgICAgICAuZmllbGROKFwiZ3VuXCIpXG4gICAgICAgIC5zY2FsZSh7IHNjaGVtZTogXCJjYXRlZ29yeTIwYlwiIH0pXG4gICAgICAgIC5sZWdlbmQoZmFsc2UpXG4gICAgICAgIC50aXRsZShcIkd1biB0eXBlXCIpXG4gICAgKTtcbn1cbmNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICBjb25maWc6IHtcbiAgICAvLyBWZWdhLUxpdGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gIH0sXG4gIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwIGhhbmRsZXJcbiAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgfSxcbiAgdmlldzoge1xuICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICB9LFxufTtcbnZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IGd1bkNvdW50cztcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5mdW5jdGlvbiBndW5LaWxsQ291bnRzKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgeWVhclN0YXJ0LCB5ZWFyRW5kIH0gPSBvcHRpb25zO1xuICBjb25zdCB7IGcgfSA9IGRhdGFTZXQ7XG4gIHJldHVybiB2bFxuICAgIC5tYXJrQmFyKHsgb3BhY2l0eTogMC44IH0pXG4gICAgLmRhdGEoZylcbiAgICAudHJhbnNmb3JtKFxuICAgICAgdmwuZmlsdGVyKFxuICAgICAgICBcImRhdHVtWydndW4nXSAhPSAnVW5rbm93bicgJiYgZGF0dW1bJ3llYXInXSA+PSBcIiArXG4gICAgICAgICAgeWVhclN0YXJ0ICtcbiAgICAgICAgICBcIiAmJiBkYXR1bVsneWVhciddIDw9IFwiICtcbiAgICAgICAgICB5ZWFyRW5kXG4gICAgICApXG4gICAgKVxuICAgIC5lbmNvZGUoXG4gICAgICB2bC55KCkuZmllbGROKFwiZ3VuXCIpLnNvcnQodmwubWVhbihcIm5fa2lsbGVkXCIpKSxcbiAgICAgIHZsLngoKS5tZWFuKFwibl9raWxsZWRcIikudGl0bGUoXCJNZWFuIGtpbGwgY291bnRzIGluIGFuIGluY2lkZW50XCIpLFxuICAgICAgdmxcbiAgICAgICAgLmNvbG9yKClcbiAgICAgICAgLmZpZWxkTihcImd1blwiKVxuICAgICAgICAuc2NhbGUoeyBzY2hlbWU6IFwiY2F0ZWdvcnkyMGJcIiB9KVxuICAgICAgICAubGVnZW5kKGZhbHNlKVxuICAgICAgICAudGl0bGUoXCJHdW4gdHlwZVwiKVxuICAgICk7XG59XG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBndW5LaWxsQ291bnRzO1xuIiwiaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcbmltcG9ydCBzdGF0ZVJhbmtpbmcgZnJvbSBcIi4vc3RhdGVSYW5raW5nXCI7XG5pbXBvcnQgcGVycGV0cmF0b3JzQnlTdGF0ZSBmcm9tIFwiLi9wZXJwZXRyYXRvcnNCeVN0YXRlXCI7XG5cbmZ1bmN0aW9uIG1hcCh7IGRhdGFTZXQsIG9wdGlvbnMgfSkge1xuICByZXR1cm4gdmxcbiAgICAuaGNvbmNhdChcbiAgICAgIHN0YXRlUmFua2luZyh7IGRhdGFTZXQsIG9wdGlvbnMgfSkuaGVpZ2h0KDUwMCksXG4gICAgICBwZXJwZXRyYXRvcnNCeVN0YXRlKHsgZGF0YVNldCwgb3B0aW9ucyB9KS5oZWlnaHQoNTAwKS53aWR0aCg3MjApXG4gICAgKVxuICAgIC5jb25maWcoeyBzY2FsZTogeyBtYXhTaXplOiAxNTAwIH0sIHZpZXc6IHsgc3Ryb2tlOiBudWxsIH0gfSk7XG59XG5cbmNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICBjb25maWc6IHtcbiAgICAvLyBWZWdhLUxpdGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gIH0sXG4gIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwIGhhbmRsZXJcbiAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgfSxcbiAgdmlldzoge1xuICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICB9LFxufTtcbnZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcDtcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5pbXBvcnQgZ3VuQ291bnRzIGZyb20gXCIuL2d1bkNvdW50c1wiO1xuaW1wb3J0IGd1bktpbGxDb3VudHMgZnJvbSBcIi4vZ3VuS2lsbENvdW50c1wiO1xuXG5mdW5jdGlvbiBudW1HdW5CeVR5cGVzKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIHJldHVybiB2bC5oY29uY2F0KFxuICAgIGd1bkNvdW50cyh7IGRhdGFTZXQsIG9wdGlvbnMgfSksXG4gICAgZ3VuS2lsbENvdW50cyh7IGRhdGFTZXQsIG9wdGlvbnMgfSlcbiAgKTtcbn1cblxuY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gIGNvbmZpZzoge1xuICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgfSxcbiAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICB9LFxuICB2aWV3OiB7XG4gICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gIH0sXG59O1xudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtR3VuQnlUeXBlcztcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5mdW5jdGlvbiBwZXJwZXRyYXRvcnNCeVN0YXRlKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgZmllbGQsIHllYXJTdGFydCwgeWVhckVuZCwgc2NoZW1lIH0gPSBvcHRpb25zO1xuICBjb25zdCB7IHBzdCwgdXNhLCBwcHN0IH0gPSBkYXRhU2V0O1xuICBjb25zdCB0aXRsZXMgPSB7XG4gICAgbWVhbl9hZ2U6IFwiUGVycGV0cmF0b3JzIG1lYW4gYWdlXCIsXG4gICAgdW5kZXJhZ2VzX3JhdGlvOiBbXCJSYXRpbyBvZiB1bmRlcmFnZS90b3RhbFwiLCBcInBlcnBldHJhdG9yc1wiXSxcbiAgfTtcblxuICByZXR1cm4gdmxcbiAgICAuZGF0YShwc3QpXG4gICAgLmxheWVyKFxuICAgICAgdmxcbiAgICAgICAgLm1hcmtHZW9zaGFwZSh7IGZpbGw6IFwiI2RkZFwiLCBzdHJva2U6IFwiI2ZmZlwiLCBzdHJva2VXaWR0aDogMSB9KVxuICAgICAgICAuZGF0YSh2bC50b3BvanNvbih1c2EpLmZlYXR1cmUoXCJzdGF0ZXNcIikpXG4gICAgICAgIC50cmFuc2Zvcm0oXG4gICAgICAgICAgdmwubG9va3VwKFwiaWRcIikuZnJvbSh2bC5kYXRhKHBwc3QpLmtleShcImZpcFwiKS5maWVsZHMoXCJzdGF0ZVwiKSlcbiAgICAgICAgKVxuICAgICAgICAuZW5jb2RlKHZsLnRvb2x0aXAoXCJzdGF0ZVwiKSksXG4gICAgICB2bFxuICAgICAgICAubWFya0NpcmNsZSh7IHN0cm9rZTogXCIjNWU1ZTVlXCIgfSlcbiAgICAgICAgLmRhdGEocHN0KVxuICAgICAgICAudHJhbnNmb3JtKFxuICAgICAgICAgIHZsLmZpbHRlcihcbiAgICAgICAgICAgICdkYXR1bVtcInllYXJcIl0gPj0gJyArIHllYXJTdGFydCArICcgJiYgZGF0dW1bXCJ5ZWFyXCJdIDw9ICcgKyB5ZWFyRW5kXG4gICAgICAgICAgKSxcbiAgICAgICAgICB2bFxuICAgICAgICAgICAgLmdyb3VwYnkoXCJzdGF0ZVwiKVxuICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgdmwubWVhbihcIm1lYW5fYWdlXCIpLmFzKFwibWVhbl9hZ2VcIiksXG4gICAgICAgICAgICAgIHZsLm1lYW4oXCJ1bmRlcmFnZXNfcmF0aW9cIikuYXMoXCJ1bmRlcmFnZXNfcmF0aW9cIiksXG4gICAgICAgICAgICAgIHZsLm1lYW4oXCJwZXJwZXRyYXRvcnNfcGVyXzFNXCIpLmFzKFwicGVycGV0cmF0b3JzX3Blcl8xTVwiKSxcbiAgICAgICAgICAgICAgdmwubWVhbihcImxhdGl0dWRlXCIpLmFzKFwibGF0aXR1ZGVcIiksXG4gICAgICAgICAgICAgIHZsLm1lYW4oXCJsb25naXR1ZGVcIikuYXMoXCJsb25naXR1ZGVcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuZW5jb2RlKFxuICAgICAgICAgIHZsLmxhdGl0dWRlKCkuZmllbGRRKFwibGF0aXR1ZGVcIiksXG4gICAgICAgICAgdmwubG9uZ2l0dWRlKCkuZmllbGRRKFwibG9uZ2l0dWRlXCIpLFxuICAgICAgICAgIHZsXG4gICAgICAgICAgICAuY29sb3IoKVxuICAgICAgICAgICAgLm1lYW4oZmllbGQpXG4gICAgICAgICAgICAubGVnZW5kKHsgdGl0bGVMaW5lSGVpZ2h0OiAxMCB9KVxuICAgICAgICAgICAgLnNjYWxlKHsgc2NoZW1lOiBzY2hlbWUgfSlcbiAgICAgICAgICAgIC50aXRsZSh0aXRsZXNbZmllbGRdKSxcbiAgICAgICAgICB2bFxuICAgICAgICAgICAgLnNpemUoKVxuICAgICAgICAgICAgLm1lYW4oXCJwZXJwZXRyYXRvcnNfcGVyXzFNXCIpXG4gICAgICAgICAgICAudGl0bGUoW1wiUGVycGV0cmF0b3JzIHBlclwiLCBcIjFNIHBvcHVsYXRpb25cIl0pLFxuICAgICAgICAgIHZsLnRvb2x0aXAoW1xuICAgICAgICAgICAgdmwuZmllbGROKFwic3RhdGVcIiksXG4gICAgICAgICAgICB2bC5maWVsZFEoZmllbGQpLFxuICAgICAgICAgICAgdmwuZmllbGRRKFwicGVycGV0cmF0b3JzX3Blcl8xTVwiKSxcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgKVxuICAgIC5wcm9qZWN0KHZsLnByb2plY3Rpb24oXCJhbGJlcnNVc2FcIikpO1xufVxuXG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBwZXJwZXRyYXRvcnNCeVN0YXRlO1xuIiwiaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcblxuZnVuY3Rpb24gcGVycGV0cmF0b3JzQnlUaW1lKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgZmllbGQsIHN0YXRlX2FiYnIsIGNvbG9yIH0gPSBvcHRpb25zO1xuICBjb25zdCB7IHBzdCB9ID0gZGF0YVNldDtcbiAgY29uc3QgdGl0bGVzID0ge1xuICAgIG1lYW5fYWdlOiBcIlBlcnBldHJhdG9ycyBtZWFuIGFnZVwiLFxuICAgIHVuZGVyYWdlc19yYXRpbzogW1wiUmF0aW8gb2YgdW5kZXJhZ2UvdG90YWxcIiwgXCJwZXJwZXRyYXRvcnNcIl0sXG4gIH07XG5cbiAgcmV0dXJuIHZsXG4gICAgLmxheWVyKFxuICAgICAgdmxcbiAgICAgICAgLm1hcmtMaW5lKClcbiAgICAgICAgLmRhdGEocHN0KVxuICAgICAgICAuZW5jb2RlKFxuICAgICAgICAgIHZsLngoKS5maWVsZE8oXCJ5ZWFyXCIpLFxuICAgICAgICAgIHZsLnkoKS5tZWFuKGZpZWxkKS50aXRsZSh0aXRsZXNbZmllbGRdKSxcbiAgICAgICAgICB2bC5jb2xvcigpLnZhbHVlKFwib3JhbmdlXCIpXG4gICAgICAgICksXG4gICAgICB2bFxuICAgICAgICAubWFya0xpbmUoKVxuICAgICAgICAuZGF0YShwc3QpXG4gICAgICAgIC50cmFuc2Zvcm0oXG4gICAgICAgICAgdmwuZmlsdGVyKCdkYXR1bVtcInN0YXRlX2FiYnJcIl0gPT0gJyArICdcIicgKyBzdGF0ZV9hYmJyICsgJ1wiJylcbiAgICAgICAgKVxuICAgICAgICAuZW5jb2RlKFxuICAgICAgICAgIHZsLngoKS5maWVsZE8oXCJ5ZWFyXCIpLFxuICAgICAgICAgIHZsLnkoKS5tZWFuKGZpZWxkKS50aXRsZSh0aXRsZXNbZmllbGRdKSxcbiAgICAgICAgICB2bC5jb2xvcigpLnZhbHVlKGNvbG9yKVxuICAgICAgICApXG4gICAgKVxuICAgIC53aWR0aCg1MDApO1xufVxuXG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBwZXJwZXRyYXRvcnNCeVRpbWU7XG4iLCJpbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuXG5mdW5jdGlvbiBzdGF0ZVJhbmtpbmcoeyBkYXRhU2V0LCBvcHRpb25zIH0pIHtcbiAgY29uc3QgeyBwc3QgfSA9IGRhdGFTZXQ7XG4gIGNvbnN0IHsgZmllbGQsIHllYXJTdGFydCwgeWVhckVuZCwgc2NoZW1lIH0gPSBvcHRpb25zO1xuICByZXR1cm4gdmxcbiAgICAubWFya1JlY3QoKVxuICAgIC5kYXRhKHBzdClcbiAgICAudHJhbnNmb3JtKFxuICAgICAgdmwuZmlsdGVyKFxuICAgICAgICAnZGF0dW1bXCJ5ZWFyXCJdID49ICcgKyB5ZWFyU3RhcnQgKyAnICYmIGRhdHVtW1wieWVhclwiXSA8PSAnICsgeWVhckVuZFxuICAgICAgKVxuICAgIClcbiAgICAuZW5jb2RlKFxuICAgICAgdmxcbiAgICAgICAgLnkoKVxuICAgICAgICAuZmllbGROKFwic3RhdGVcIilcbiAgICAgICAgLnNvcnQodmwubWVhbihmaWVsZCkub3JkZXIoXCJkZXNjZW5kaW5nXCIpKVxuICAgICAgICAudGl0bGUoXCJTdGF0ZVwiKSxcbiAgICAgIHZsLmNvbG9yKCkubWVhbihmaWVsZCkuc2NhbGUoeyBzY2hlbWU6IHNjaGVtZSB9KSxcbiAgICAgIHZsLnRvb2x0aXAoW3ZsLmZpZWxkTihcInN0YXRlXCIpLCB2bC5tZWFuKGZpZWxkKV0pXG4gICAgKTtcbn1cblxuY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gIGNvbmZpZzoge1xuICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgfSxcbiAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICB9LFxuICB2aWV3OiB7XG4gICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gIH0sXG59O1xudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVSYW5raW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==