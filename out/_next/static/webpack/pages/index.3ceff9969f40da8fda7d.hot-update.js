self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/index */ "./store/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loadingg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadingg */ "./node_modules/react-loadingg/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/yeraf/proj/us-gun-violence/pages/index.js",
    _this = undefined,
    _s = $RefreshSig$();

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// import { WindMillLoading } from "react-loadingg";




var Vis = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_styled_base_dist_emotion-styled-base_browser_esm_js-node_modules-2e3dd6"), __webpack_require__.e("components_Vis_js-node_modules_moment_locale_sync_recursive_")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Vis */ "./components/Vis.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/Vis */ "./components/Vis.js")];
    },
    modules: ["index.js -> " + "../components/Vis"]
  }
});
_c2 = Vis;

var _ref =  false ? 0 : {
  name: "z2lzsq-Home",
  styles: "width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;label:Home;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "sadyip-Home",
  styles: "padding-top:16rem;label:Home;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 =  false ? 0 : {
  name: "o53d90-Home",
  styles: "font-size:1.5rem;line-height:2rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";label:Home;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Home = function Home() {
  _s();

  var dataset = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.default)(function (store) {
    return store.dataset;
  });
  var loadDataSet = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.default)(function (state) {
    return state.loadDataSet;
  });
  var loadjson = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.default)(function (store) {
    return store.loadjson;
  });
  console.log(dataset);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    loadDataSet("p");
    loadDataSet("ppst");
    loadDataSet("pst");
    loadDataSet("stf");
    loadDataSet("stp");
    loadDataSet("g");
    loadjson("usa");
  }, []);

  if (dataset.p && dataset.usa && dataset.pst && dataset.g && dataset.ppst && dataset.stf && dataset.stp) {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Vis, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, _this);
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
    css: _ref,
    "data-tw": "w-screen h-screen flex flex-col items-center justify-center",
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_loadingg__WEBPACK_IMPORTED_MODULE_3__.CoffeeLoading, {
        size: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      css: _ref2,
      "data-tw": "pt-64",
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        css: _ref3,
        "data-tw": "text-2xl font-sans",
        children: "We are loading site"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(Home, "krYVx1wyqFrOAVYX7fJbcGWapTg=", false, function () {
  return [_store_index__WEBPACK_IMPORTED_MODULE_0__.default, _store_index__WEBPACK_IMPORTED_MODULE_0__.default, _store_index__WEBPACK_IMPORTED_MODULE_0__.default];
});

_c3 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3;

$RefreshReg$(_c, "Vis$dynamic");
$RefreshReg$(_c2, "Vis");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVmlzIiwiZHluYW1pYyIsIkhvbWUiLCJkYXRhc2V0IiwidXNlU3RvcmUiLCJzdG9yZSIsImxvYWREYXRhU2V0Iiwic3RhdGUiLCJsb2FkanNvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJwIiwidXNhIiwicHN0IiwiZyIsInBwc3QiLCJzdGYiLCJzdHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sc1ZBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDhDQUFkO0FBQUE7QUFBQSwrQkFBYyxtQkFBZDtBQUFBO0FBQUEsRUFBbkI7TUFBTUQsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQUlDLE9BQU8sR0FBR0MscURBQVEsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixPQUFqQjtBQUFBLEdBQUQsQ0FBdEI7QUFDQSxNQUFJRyxXQUFXLEdBQUdGLHFEQUFRLENBQUMsVUFBQ0csS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0QsV0FBakI7QUFBQSxHQUFELENBQTFCO0FBQ0EsTUFBSUUsUUFBUSxHQUFHSixxREFBUSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLFFBQWpCO0FBQUEsR0FBRCxDQUF2QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBWjtBQUNBUSxrREFBUyxDQUFDLFlBQU07QUFDZEwsZUFBVyxDQUFDLEdBQUQsQ0FBWDtBQUNBQSxlQUFXLENBQUMsTUFBRCxDQUFYO0FBQ0FBLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUEsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBQSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FBLGVBQVcsQ0FBQyxHQUFELENBQVg7QUFDQUUsWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNELEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBU0EsTUFDRUwsT0FBTyxDQUFDUyxDQUFSLElBQ0FULE9BQU8sQ0FBQ1UsR0FEUixJQUVBVixPQUFPLENBQUNXLEdBRlIsSUFHQVgsT0FBTyxDQUFDWSxDQUhSLElBSUFaLE9BQU8sQ0FBQ2EsSUFKUixJQUtBYixPQUFPLENBQUNjLEdBTFIsSUFNQWQsT0FBTyxDQUFDZSxHQVBWLEVBUUU7QUFDQSxXQUFPLHVFQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQSxlQUNFO0FBQUEsZ0JBQ0UsdUVBQUMseURBQUQ7QUFBZSxZQUFJLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlFO0FBQUE7QUFBQTtBQUFBLGdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBbkNEOztHQUFNaEIsSTtVQUNVRSxpRCxFQUNJQSxpRCxFQUNIQSxpRDs7O01BSFhGLEk7QUFvQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2NlZmY5OTY5ZjQwZGE4ZmRhN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFdpbmRNaWxsTG9hZGluZyB9IGZyb20gXCJyZWFjdC1sb2FkaW5nZ1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgdXNlU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IENvZmZlZUxvYWRpbmcgfSBmcm9tIFwicmVhY3QtbG9hZGluZ2dcIjtcblxuY29uc3QgVmlzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL1Zpc1wiKSk7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBkYXRhc2V0ID0gdXNlU3RvcmUoKHN0b3JlKSA9PiBzdG9yZS5kYXRhc2V0KTtcbiAgbGV0IGxvYWREYXRhU2V0ID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5sb2FkRGF0YVNldCk7XG4gIGxldCBsb2FkanNvbiA9IHVzZVN0b3JlKChzdG9yZSkgPT4gc3RvcmUubG9hZGpzb24pO1xuICBjb25zb2xlLmxvZyhkYXRhc2V0KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkRGF0YVNldChcInBcIik7XG4gICAgbG9hZERhdGFTZXQoXCJwcHN0XCIpO1xuICAgIGxvYWREYXRhU2V0KFwicHN0XCIpO1xuICAgIGxvYWREYXRhU2V0KFwic3RmXCIpO1xuICAgIGxvYWREYXRhU2V0KFwic3RwXCIpO1xuICAgIGxvYWREYXRhU2V0KFwiZ1wiKTtcbiAgICBsb2FkanNvbihcInVzYVwiKTtcbiAgfSwgW10pO1xuICBpZiAoXG4gICAgZGF0YXNldC5wICYmXG4gICAgZGF0YXNldC51c2EgJiZcbiAgICBkYXRhc2V0LnBzdCAmJlxuICAgIGRhdGFzZXQuZyAmJlxuICAgIGRhdGFzZXQucHBzdCAmJlxuICAgIGRhdGFzZXQuc3RmICYmXG4gICAgZGF0YXNldC5zdHBcbiAgKSB7XG4gICAgcmV0dXJuIDxWaXMgLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiB0dz17XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwifT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8Q29mZmVlTG9hZGluZyBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdHc9e1wicHQtNjRcIn0+XG4gICAgICAgIDxoMSB0dz17XCJ0ZXh0LTJ4bCBmb250LXNhbnNcIn0+V2UgYXJlIGxvYWRpbmcgc2l0ZTwvaDE+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9