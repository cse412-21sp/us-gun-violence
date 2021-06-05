self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_yeraf_proj_us_gun_violence_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.js");
/* harmony import */ var arquero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! arquero */ "./node_modules/arquero/src/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_yeraf_proj_us_gun_violence_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ds = {
  p: "https://us-gun-violence-data.netlify.app/perpetrators.csv",
  g: "https://us-gun-violence-data.netlify.app/guns.csv",
  pst: "https://us-gun-violence-data.netlify.app/perpetrators_by_state.csv",
  stp: "https://us-gun-violence-data.netlify.app/state_pop.csv",
  stf: "https://us-gun-violence-data.netlify.app/state_fips.csv",
  ppst: "https://us-gun-violence-data.netlify.app/perpetrators_by_state.csv",
  gsty: "https://us-gun-violence-data.netlify.app/guns_by_state_year.csv",
  gstm: "https://us-gun-violence-data.netlify.app/guns_by_state_month.csv",
  gdc: "https://us-gun-violence-data.netlify.app/gender_count.csv",
  gdp: "https://us-gun-violence-data.netlify.app/gender_pctg.csv"
};
var json = {
  usa: "https://raw.githubusercontent.com/vega/vega-datasets/master/data/us-10m.json"
};
var useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.default)(function (set, get) {
  return {
    dataset: {},
    loadDataSet: function loadDataSet(name) {
      fetch(ds[name]).then(function (r) {
        return r.text();
      }).then(function (inp) {
        var oldDataset = get().dataset;
        inp = (0,arquero__WEBPACK_IMPORTED_MODULE_1__.fromCSV)(inp);
        set({
          dataset: _objectSpread(_objectSpread({}, oldDataset), {}, (0,_home_yeraf_proj_us_gun_violence_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, inp))
        });
      });
    },
    loadDataSets: function loadDataSets(names) {
      var _iterator = _createForOfIteratorHelper(names),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          get().loadDataSet(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    loadjson: function loadjson(name) {
      fetch(json[name]).then(function (r) {
        return r.json();
      }).then(function (js) {
        var oldDataset = get().dataset;
        set({
          dataset: _objectSpread(_objectSpread({}, oldDataset), {}, (0,_home_yeraf_proj_us_gun_violence_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, js))
        });
      });
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (useStore);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiZHMiLCJwIiwiZyIsInBzdCIsInN0cCIsInN0ZiIsInBwc3QiLCJnc3R5IiwiZ3N0bSIsImdkYyIsImdkcCIsImpzb24iLCJ1c2EiLCJ1c2VTdG9yZSIsImNyZWF0ZSIsInNldCIsImdldCIsImRhdGFzZXQiLCJsb2FkRGF0YVNldCIsIm5hbWUiLCJmZXRjaCIsInRoZW4iLCJyIiwidGV4dCIsImlucCIsIm9sZERhdGFzZXQiLCJmcm9tQ1NWIiwibG9hZERhdGFTZXRzIiwibmFtZXMiLCJsb2FkanNvbiIsImpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUc7QUFDVEMsR0FBQyxFQUFFLDJEQURNO0FBRVRDLEdBQUMsRUFBRSxtREFGTTtBQUdUQyxLQUFHLEVBQUUsb0VBSEk7QUFJVEMsS0FBRyxFQUFFLHdEQUpJO0FBS1RDLEtBQUcsRUFBRSx5REFMSTtBQU1UQyxNQUFJLEVBQUUsb0VBTkc7QUFPVEMsTUFBSSxFQUFFLGlFQVBHO0FBUVRDLE1BQUksRUFBRSxrRUFSRztBQVNUQyxLQUFHLEVBQUUsMkRBVEk7QUFVVEMsS0FBRyxFQUFFO0FBVkksQ0FBWDtBQWFBLElBQU1DLElBQUksR0FBRztBQUNYQyxLQUFHLEVBQUU7QUFETSxDQUFiO0FBSUEsSUFBTUMsUUFBUSxHQUFHQyxnREFBTSxDQUFDLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWU7QUFDckNDLFdBQU8sRUFBRSxFQUQ0QjtBQUVyQ0MsZUFBVyxFQUFFLHFCQUFDQyxJQUFELEVBQVU7QUFDckJDLFdBQUssQ0FBQ3BCLEVBQUUsQ0FBQ21CLElBQUQsQ0FBSCxDQUFMLENBQ0dFLElBREgsQ0FDUSxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxJQUFGLEVBQVA7QUFBQSxPQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxHQUFELEVBQVM7QUFDYixZQUFNQyxVQUFVLEdBQUdULEdBQUcsR0FBR0MsT0FBekI7QUFDQU8sV0FBRyxHQUFHRSxnREFBTyxDQUFDRixHQUFELENBQWI7QUFDQVQsV0FBRyxDQUFDO0FBQUVFLGlCQUFPLGtDQUFPUSxVQUFQLDZKQUFvQk4sSUFBcEIsRUFBMkJLLEdBQTNCO0FBQVQsU0FBRCxDQUFIO0FBQ0QsT0FOSDtBQU9ELEtBVm9DO0FBV3JDRyxnQkFBWSxFQUFFLHNCQUFDQyxLQUFELEVBQVc7QUFBQSxpREFDTkEsS0FETTtBQUFBOztBQUFBO0FBQ3ZCLDREQUF3QjtBQUFBLGNBQWZULElBQWU7QUFDdEJILGFBQUcsR0FBR0UsV0FBTixDQUFrQkMsSUFBbEI7QUFDRDtBQUhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXhCLEtBZm9DO0FBZ0JyQ1UsWUFBUSxFQUFFLGtCQUFDVixJQUFELEVBQVU7QUFDbEJDLFdBQUssQ0FBQ1QsSUFBSSxDQUFDUSxJQUFELENBQUwsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ1gsSUFBRixFQUFQO0FBQUEsT0FEUixFQUVHVSxJQUZILENBRVEsVUFBQ1MsRUFBRCxFQUFRO0FBQ1osWUFBTUwsVUFBVSxHQUFHVCxHQUFHLEdBQUdDLE9BQXpCO0FBQ0FGLFdBQUcsQ0FBQztBQUFFRSxpQkFBTyxrQ0FBT1EsVUFBUCw2SkFBb0JOLElBQXBCLEVBQTJCVyxFQUEzQjtBQUFULFNBQUQsQ0FBSDtBQUNELE9BTEg7QUFNRDtBQXZCb0MsR0FBZjtBQUFBLENBQUQsQ0FBdkI7QUEwQkEsK0RBQWVqQixRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlZDhiZWM0N2ZiNGU0MmYyYjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kXCI7XG5pbXBvcnQgeyBmcm9tQ1NWIH0gZnJvbSBcImFycXVlcm9cIjtcblxuY29uc3QgZHMgPSB7XG4gIHA6IFwiaHR0cHM6Ly91cy1ndW4tdmlvbGVuY2UtZGF0YS5uZXRsaWZ5LmFwcC9wZXJwZXRyYXRvcnMuY3N2XCIsXG4gIGc6IFwiaHR0cHM6Ly91cy1ndW4tdmlvbGVuY2UtZGF0YS5uZXRsaWZ5LmFwcC9ndW5zLmNzdlwiLFxuICBwc3Q6IFwiaHR0cHM6Ly91cy1ndW4tdmlvbGVuY2UtZGF0YS5uZXRsaWZ5LmFwcC9wZXJwZXRyYXRvcnNfYnlfc3RhdGUuY3N2XCIsXG4gIHN0cDogXCJodHRwczovL3VzLWd1bi12aW9sZW5jZS1kYXRhLm5ldGxpZnkuYXBwL3N0YXRlX3BvcC5jc3ZcIixcbiAgc3RmOiBcImh0dHBzOi8vdXMtZ3VuLXZpb2xlbmNlLWRhdGEubmV0bGlmeS5hcHAvc3RhdGVfZmlwcy5jc3ZcIixcbiAgcHBzdDogXCJodHRwczovL3VzLWd1bi12aW9sZW5jZS1kYXRhLm5ldGxpZnkuYXBwL3BlcnBldHJhdG9yc19ieV9zdGF0ZS5jc3ZcIixcbiAgZ3N0eTogXCJodHRwczovL3VzLWd1bi12aW9sZW5jZS1kYXRhLm5ldGxpZnkuYXBwL2d1bnNfYnlfc3RhdGVfeWVhci5jc3ZcIixcbiAgZ3N0bTogXCJodHRwczovL3VzLWd1bi12aW9sZW5jZS1kYXRhLm5ldGxpZnkuYXBwL2d1bnNfYnlfc3RhdGVfbW9udGguY3N2XCIsXG4gIGdkYzogXCJodHRwczovL3VzLWd1bi12aW9sZW5jZS1kYXRhLm5ldGxpZnkuYXBwL2dlbmRlcl9jb3VudC5jc3ZcIixcbiAgZ2RwOiBcImh0dHBzOi8vdXMtZ3VuLXZpb2xlbmNlLWRhdGEubmV0bGlmeS5hcHAvZ2VuZGVyX3BjdGcuY3N2XCJcbn07XG5cbmNvbnN0IGpzb24gPSB7XG4gIHVzYTogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdmVnYS92ZWdhLWRhdGFzZXRzL21hc3Rlci9kYXRhL3VzLTEwbS5qc29uXCIsXG59O1xuXG5jb25zdCB1c2VTdG9yZSA9IGNyZWF0ZSgoc2V0LCBnZXQpID0+ICh7XG4gIGRhdGFzZXQ6IHt9LFxuICBsb2FkRGF0YVNldDogKG5hbWUpID0+IHtcbiAgICBmZXRjaChkc1tuYW1lXSlcbiAgICAgIC50aGVuKChyKSA9PiByLnRleHQoKSlcbiAgICAgIC50aGVuKChpbnApID0+IHtcbiAgICAgICAgY29uc3Qgb2xkRGF0YXNldCA9IGdldCgpLmRhdGFzZXQ7XG4gICAgICAgIGlucCA9IGZyb21DU1YoaW5wKTtcbiAgICAgICAgc2V0KHsgZGF0YXNldDogeyAuLi5vbGREYXRhc2V0LCBbbmFtZV06IGlucCB9IH0pO1xuICAgICAgfSk7XG4gIH0sXG4gIGxvYWREYXRhU2V0czogKG5hbWVzKSA9PiB7XG4gICAgZm9yIChsZXQgbmFtZSBvZiBuYW1lcykge1xuICAgICAgZ2V0KCkubG9hZERhdGFTZXQobmFtZSk7XG4gICAgfVxuICB9LFxuICBsb2FkanNvbjogKG5hbWUpID0+IHtcbiAgICBmZXRjaChqc29uW25hbWVdKVxuICAgICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oKGpzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZERhdGFzZXQgPSBnZXQoKS5kYXRhc2V0O1xuICAgICAgICBzZXQoeyBkYXRhc2V0OiB7IC4uLm9sZERhdGFzZXQsIFtuYW1lXToganMgfSB9KTtcbiAgICAgIH0pO1xuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=