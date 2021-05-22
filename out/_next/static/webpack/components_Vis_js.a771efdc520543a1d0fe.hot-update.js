self["webpackHotUpdate_N_E"]("components_Vis_js",{

/***/ "./components/Vis.js":
/*!***************************!*\
  !*** ./components/Vis.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functions/PrepetratorsByGender */ "./components/functions/PrepetratorsByGender.js");
/* harmony import */ var _components_functions_mapMeanAgeOfPerpetrators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/functions/mapMeanAgeOfPerpetrators */ "./components/functions/mapMeanAgeOfPerpetrators.js");
/* harmony import */ var _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/functions/ageHistogram */ "./components/functions/ageHistogram.js");
/* harmony import */ var _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/functions/gunArea */ "./components/functions/gunArea.js");
/* harmony import */ var _functions_numGunByTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/numGunByTypes */ "./components/functions/numGunByTypes.js");
/* harmony import */ var _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/perpetratorsByTime */ "./components/functions/perpetratorsByTime.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/yeraf/proj/us-gun-violence/components/Vis.js",
    _this = undefined;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var Section = function Section(props) {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, _this);
};

_c = Section;
var VegaComp = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c2 = function _c2() {
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

var H1 = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("h1",  false ? 0 : {
  target: "e1coz5px0",
  label: "H1"
})( false ? 0 : {
  name: "vo1wjh",
  styles: "font-weight:600;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1.25rem;line-height:1.75rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3llcmFmL3Byb2ovdXMtZ3VuLXZpb2xlbmNlL2NvbXBvbmVudHMvVmlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCVyIsImZpbGUiOiIvaG9tZS95ZXJhZi9wcm9qL3VzLWd1bi12aW9sZW5jZS9jb21wb25lbnRzL1Zpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJwZXRyYXRvcnNCeUdlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvUHJlcGV0cmF0b3JzQnlHZW5kZXJcIjtcbmltcG9ydCBtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiO1xuaW1wb3J0IGFnZUhpc3RvZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtXCI7XG5pbXBvcnQgZ3VuQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuQXJlYVwiO1xuaW1wb3J0IG51bUd1bkJ5VHlwZXMgZnJvbSBcIi4vZnVuY3Rpb25zL251bUd1bkJ5VHlwZXNcIjtcbmltcG9ydCBwZXJwZXRyYXRvcnNCeVRpbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3BlcnBldHJhdG9yc0J5VGltZVwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxzZWN0aW9uPntwcm9wcy5jaGlsZHJlbn08L3NlY3Rpb24+O1xufTtcbmNvbnN0IFZlZ2FDb21wID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL1ZlZ2FDb21wXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgSDEgPSB0dy5oMWBmb250LXNlbWlib2xkIGZvbnQtbW9ubyB0ZXh0LXhsYDtcblxuY29uc3QgVmlzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIHR3PVwidy1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxTZWN0aW9uIHR3PVwiXCI+XG4gICAgICAgIDxwIHR3PVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNzAwIGgtNjQgIHctc2NyZWVuXCI+XG4gICAgICAgICAgPHNwYW4gdHc9XCJ0ZXh0LTR4bFwiPlVTIEd1biBWaW9sZW5jZTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5JbnRlcmFjdGl2ZSBkYXRhIHZpc3VhbGl6YXRpb25zIGFib3V0IGd1biB2aW9sZW5jZSBpbiBVUzwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdHc9XCJweS0xNCBweC0yMFwiPlxuICAgICAgICA8aDEgdHc9XCJmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGRcIj5JbnRyb2R1Y3Rpb248L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBhcmUgYSB2ZXJ5IGZldyBjb3VudHJpZXMgaW4gdGhlIHdvcmQgd2hlcmUgY2l0aXplbnMgaGF2ZSB0aGVcbiAgICAgICAgICByaWdodCB0byBiZWFyIGFybXMuIFVTIGlzIG9uZSBvZiB0aGVtIHdoZXJlIHRoZWlyIGNpdGl6ZW5zIG93biBndW5zXG4gICAgICAgICAgbmVhcmx5IGhhbGYgb2YgYWxsIGNpdmlsaWFuIGd1bnMgaW4gdGhlIHdvcmxkLiBBcyBhIHJlc3VsdCwgZ3VuXG4gICAgICAgICAgaW5jaWRlbnRzIGFyZSBhbGFybWluZyBpbiBVUy4gVGhpcyBwcm9qZWN0IGFpbXMgdG8gc3R1ZHkgdGhlIHRyZW5kcyBvZlxuICAgICAgICAgIGd1biB2aW9sZW5jZSBpbiBVUyBhbmQgZXhwbG9yZSBhbnkgcG90ZW50aWFsIGNvbmNlcm5zIHJlZ2FyZGluZ1xuICAgICAgICAgIGNpdmlsaWFuLW93bmVkIGd1bnMgaW4gVVMuIFRoZSBkYXRhc2V0IHVzZWQgaW4gdGhpcyBwcm9qZWN0IGNvbnRhaW5zXG4gICAgICAgICAgcmVjb3JkcyBvZiBndW4gaW5jaWRlbnRzIGluIFVTIGZyb20gSmFudWFyeSAyMDEzIHRvIE1hcmNoIDIwMThcbiAgICAgICAgICBwcm92aWRlZCBieSBHdW4gVmlvbGVuY2UgQXJjaGl2ZS4gQmVzaWRlcyB0aGUgb3ZlcmFsbCByYXRlIG9mIGd1blxuICAgICAgICAgIHZpb2xlbmNlIG92ZXIgdGltZSwgd2UgYWltIHRvIHVzZSBnZW9zcGF0aWFsIG1hcHBpbmcgdG8gc2VlIHRoZVxuICAgICAgICAgIGRpc3RyaWJ1dGlvbiBvZiBndW4gaW5jaWRlbnRzIGJ5IHN0YXRlcyBhbmQgY291bnRpZXMuIFVzaW5nIGdyYXBoaWNhbFxuICAgICAgICAgIGRpc3RyaWJ1dGlvbnMgKHJlZ3Jlc3Npb24gYW5kIG5vcm1hbCBkaXN0cmlidXRpb24pLCB3ZSB3aWxsIGFibGUgdG9cbiAgICAgICAgICBleHBsb3JlIHRoZSBkZW1vZ3JhcGhpY3Mgb2YgZ3VuIHBlcnBldHJhdG9ycyBpbmNsdWRpbmcgYWdlIGFuZCBnZW5kZXJcbiAgICAgICAgICBhbmQgc2VlIGFueSBjb3JyZWxhdGlvbnMgdGhleSBoYXZlIHdpdGggdGhlIGRhbWFnZSBjYXVzZWQuIEZpbmFsbHksIHdlXG4gICAgICAgICAgd2lsbCBhbHNvIGV4cGxvcmUgd2hpY2ggZ3VuIHR5cGVzIGFyZSBtb3N0IHVzZWQgYW5kIG1vc3QgYXNzb2NpYXRlZFxuICAgICAgICAgIHdpdGggYSBsYXJnZXIgbnVtYmVyIG9mIGNhc3VhbHRpZXMuIGFic3RyYWN0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8SDE+TWFsZSBhbmQgRmVtYWwgcGVycGV0cmF0b3JzIG92ZXIgdGltZTwvSDE+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtwZXJwZXRyYXRvcnNCeUdlbmRlcn0gbmFtZT1cInBlcnBldHJhdG9yc0J5R2VuZGVyXCIgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXthZ2VIaXN0b2dyYW19XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIGNvbG9yOiBcInRlYWxcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG5hbWU9XCJhZ2VIaXN0b2dyYW1cIlxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtndW5BcmVhfSBuYW1lPVwiZ3VuQXJlYVwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bnVtR3VuQnlUeXBlc31cbiAgICAgICAgICBuYW1lPVwibnVtR3VuQnlUeXBlc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc31cbiAgICAgICAgICBuYW1lPVwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBmaWVsZDogXCJtZWFuX2FnZVwiLFxuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIHNjaGVtYTogXCJnb2xkcmVkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJtZWFuX2FnZVwiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwidW5kZXJhZ2VzX3JhdGlvXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVmlzO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

var _ref5 =  false ? 0 : {
  name: "uswhwj-Vis",
  styles: "padding-top:3.5rem;padding-bottom:3.5rem;padding-left:5rem;padding-right:5rem;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref6 =  false ? 0 : {
  name: "p1xks0-Vis",
  styles: "font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1.25rem;line-height:1.75rem;font-weight:700;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Vis = function Vis() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
    css: _ref,
    "data-tw": "w-screen flex flex-col justify-center items-center",
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      css: _ref2,
      "data-tw": "",
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        css: _ref3,
        "data-tw": "flex justify-center items-center flex-col text-white bg-yellow-700 h-64 w-screen",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          css: _ref4,
          "data-tw": "text-4xl",
          children: "US Gun Violence"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          children: "Interactive data visualizations about gun violence in US"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      css: _ref5,
      "data-tw": "py-14 px-20",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
        css: _ref6,
        "data-tw": "font-mono text-xl font-bold",
        children: "Introduction"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        children: "There are a very few countries in the word where citizens have the right to bear arms. US is one of them where their citizens own guns nearly half of all civilian guns in the world. As a result, gun incidents are alarming in US. This project aims to study the trends of gun violence in US and explore any potential concerns regarding civilian-owned guns in US. The dataset used in this project contains records of gun incidents in US from January 2013 to March 2018 provided by Gun Violence Archive. Besides the overall rate of gun violence over time, we aim to use geospatial mapping to see the distribution of gun incidents by states and counties. Using graphical distributions (regression and normal distribution), we will able to explore the demographics of gun perpetrators including age and gender and see any correlations they have with the damage caused. Finally, we will also explore which gun types are most used and most associated with a larger number of casualties. abstract"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(H1, {
        children: "Male and Femal perpetrators over time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_1__.default,
        name: "perpetratorsByGender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_3__.default,
        options: {
          yearStart: 2013,
          yearEnd: 2018,
          color: "teal"
        },
        name: "ageHistogram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_4__.default,
        name: "gunArea"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _functions_numGunByTypes__WEBPACK_IMPORTED_MODULE_5__.default,
        name: "numGunByTypes",
        options: {
          yearStart: 2013,
          yearEnd: 2018
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _components_functions_mapMeanAgeOfPerpetrators__WEBPACK_IMPORTED_MODULE_2__.default,
        name: "mapMeanAgeOfPerpetrators",
        options: {
          field: "mean_age",
          yearStart: 2013,
          yearEnd: 2018,
          schema: "goldred"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_6__.default,
        options: {
          field: "mean_age",
          state_abbr: "WA",
          color: "red"
        },
        name: "perpetratorsByTime"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_6__.default,
        name: "perpetratorsByTime",
        options: {
          field: "underages_ratio",
          state_abbr: "WA",
          color: "red"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXMuanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJWZWdhQ29tcCIsImR5bmFtaWMiLCJzc3IiLCJIMSIsIlZpcyIsInBlcnBldHJhdG9yc0J5R2VuZGVyIiwiYWdlSGlzdG9ncmFtIiwieWVhclN0YXJ0IiwieWVhckVuZCIsImNvbG9yIiwiZ3VuQXJlYSIsIm51bUd1bkJ5VHlwZXMiLCJtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMiLCJmaWVsZCIsInNjaGVtYSIsInBlcnBldHJhdG9yc0J5VGltZSIsInN0YXRlX2FiYnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLFNBQU87QUFBQSxjQUFVQSxLQUFLLENBQUNDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0tBQU1GLE87QUFHTixJQUFNRyxRQUFRLEdBQUdDLG1EQUFPLE9BQUM7QUFBQSxTQUFNLGlLQUFOO0FBQUEsQ0FBRCxFQUE2QjtBQUNuREMsS0FBRyxFQUFFLEtBRDhDO0FBQUE7QUFBQTtBQUFBLGtDQUFmLDRDQUFlO0FBQUE7QUFBQSwyQ0FBZixZQUFlO0FBQUE7QUFBQSxDQUE3QixDQUF4QjtNQUFNRixROztBQUlOLElBQU1HLEVBQUUsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2hCLFNBQ0U7QUFBQTtBQUFBO0FBQUEsZUFDRSx1RUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBLGdCQUNFO0FBQUE7QUFBQTtB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ZWJwYWNrL2NvbXBvbmVudHNfVmlzX2pzLmE3NzFlZmRjNTIwNTQzYTFkMGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGVycGV0cmF0b3JzQnlHZW5kZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL1ByZXBldHJhdG9yc0J5R2VuZGVyXCI7XG5pbXBvcnQgbWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9tYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnNcIjtcbmltcG9ydCBhZ2VIaXN0b2dyYW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2FnZUhpc3RvZ3JhbVwiO1xuaW1wb3J0IGd1bkFyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2d1bkFyZWFcIjtcbmltcG9ydCBudW1HdW5CeVR5cGVzIGZyb20gXCIuL2Z1bmN0aW9ucy9udW1HdW5CeVR5cGVzXCI7XG5pbXBvcnQgcGVycGV0cmF0b3JzQnlUaW1lIGZyb20gXCIuL2Z1bmN0aW9ucy9wZXJwZXRyYXRvcnNCeVRpbWVcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBTZWN0aW9uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8c2VjdGlvbj57cHJvcHMuY2hpbGRyZW59PC9zZWN0aW9uPjtcbn07XG5jb25zdCBWZWdhQ29tcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9WZWdhQ29tcFwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IEgxID0gdHcuaDFgZm9udC1zZW1pYm9sZCBmb250LW1vbm8gdGV4dC14bGA7XG5cbmNvbnN0IFZpcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiB0dz1cInctc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8U2VjdGlvbiB0dz1cIlwiPlxuICAgICAgICA8cCB0dz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIHRleHQtd2hpdGUgYmcteWVsbG93LTcwMCBoLTY0ICB3LXNjcmVlblwiPlxuICAgICAgICAgIDxzcGFuIHR3PVwidGV4dC00eGxcIj5VUyBHdW4gVmlvbGVuY2U8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+SW50ZXJhY3RpdmUgZGF0YSB2aXN1YWxpemF0aW9ucyBhYm91dCBndW4gdmlvbGVuY2UgaW4gVVM8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIHR3PVwicHktMTQgcHgtMjBcIj5cbiAgICAgICAgPGgxIHR3PVwiZm9udC1tb25vIHRleHQteGwgZm9udC1ib2xkXCI+SW50cm9kdWN0aW9uPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgYXJlIGEgdmVyeSBmZXcgY291bnRyaWVzIGluIHRoZSB3b3JkIHdoZXJlIGNpdGl6ZW5zIGhhdmUgdGhlXG4gICAgICAgICAgcmlnaHQgdG8gYmVhciBhcm1zLiBVUyBpcyBvbmUgb2YgdGhlbSB3aGVyZSB0aGVpciBjaXRpemVucyBvd24gZ3Vuc1xuICAgICAgICAgIG5lYXJseSBoYWxmIG9mIGFsbCBjaXZpbGlhbiBndW5zIGluIHRoZSB3b3JsZC4gQXMgYSByZXN1bHQsIGd1blxuICAgICAgICAgIGluY2lkZW50cyBhcmUgYWxhcm1pbmcgaW4gVVMuIFRoaXMgcHJvamVjdCBhaW1zIHRvIHN0dWR5IHRoZSB0cmVuZHMgb2ZcbiAgICAgICAgICBndW4gdmlvbGVuY2UgaW4gVVMgYW5kIGV4cGxvcmUgYW55IHBvdGVudGlhbCBjb25jZXJucyByZWdhcmRpbmdcbiAgICAgICAgICBjaXZpbGlhbi1vd25lZCBndW5zIGluIFVTLiBUaGUgZGF0YXNldCB1c2VkIGluIHRoaXMgcHJvamVjdCBjb250YWluc1xuICAgICAgICAgIHJlY29yZHMgb2YgZ3VuIGluY2lkZW50cyBpbiBVUyBmcm9tIEphbnVhcnkgMjAxMyB0byBNYXJjaCAyMDE4XG4gICAgICAgICAgcHJvdmlkZWQgYnkgR3VuIFZpb2xlbmNlIEFyY2hpdmUuIEJlc2lkZXMgdGhlIG92ZXJhbGwgcmF0ZSBvZiBndW5cbiAgICAgICAgICB2aW9sZW5jZSBvdmVyIHRpbWUsIHdlIGFpbSB0byB1c2UgZ2Vvc3BhdGlhbCBtYXBwaW5nIHRvIHNlZSB0aGVcbiAgICAgICAgICBkaXN0cmlidXRpb24gb2YgZ3VuIGluY2lkZW50cyBieSBzdGF0ZXMgYW5kIGNvdW50aWVzLiBVc2luZyBncmFwaGljYWxcbiAgICAgICAgICBkaXN0cmlidXRpb25zIChyZWdyZXNzaW9uIGFuZCBub3JtYWwgZGlzdHJpYnV0aW9uKSwgd2Ugd2lsbCBhYmxlIHRvXG4gICAgICAgICAgZXhwbG9yZSB0aGUgZGVtb2dyYXBoaWNzIG9mIGd1biBwZXJwZXRyYXRvcnMgaW5jbHVkaW5nIGFnZSBhbmQgZ2VuZGVyXG4gICAgICAgICAgYW5kIHNlZSBhbnkgY29ycmVsYXRpb25zIHRoZXkgaGF2ZSB3aXRoIHRoZSBkYW1hZ2UgY2F1c2VkLiBGaW5hbGx5LCB3ZVxuICAgICAgICAgIHdpbGwgYWxzbyBleHBsb3JlIHdoaWNoIGd1biB0eXBlcyBhcmUgbW9zdCB1c2VkIGFuZCBtb3N0IGFzc29jaWF0ZWRcbiAgICAgICAgICB3aXRoIGEgbGFyZ2VyIG51bWJlciBvZiBjYXN1YWx0aWVzLiBhYnN0cmFjdFxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPEgxPk1hbGUgYW5kIEZlbWFsIHBlcnBldHJhdG9ycyBvdmVyIHRpbWU8L0gxPlxuICAgICAgICA8VmVnYUNvbXAgZnVuYz17cGVycGV0cmF0b3JzQnlHZW5kZXJ9IG5hbWU9XCJwZXJwZXRyYXRvcnNCeUdlbmRlclwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17YWdlSGlzdG9ncmFtfVxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHllYXJTdGFydDogMjAxMyxcbiAgICAgICAgICAgIHllYXJFbmQ6IDIwMTgsXG4gICAgICAgICAgICBjb2xvcjogXCJ0ZWFsXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBuYW1lPVwiYWdlSGlzdG9ncmFtXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXAgZnVuYz17Z3VuQXJlYX0gbmFtZT1cImd1bkFyZWFcIiAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e251bUd1bkJ5VHlwZXN9XG4gICAgICAgICAgbmFtZT1cIm51bUd1bkJ5VHlwZXNcIlxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHllYXJTdGFydDogMjAxMyxcbiAgICAgICAgICAgIHllYXJFbmQ6IDIwMTgsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXttYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnN9XG4gICAgICAgICAgbmFtZT1cIm1hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgZmllbGQ6IFwibWVhbl9hZ2VcIixcbiAgICAgICAgICAgIHllYXJTdGFydDogMjAxMyxcbiAgICAgICAgICAgIHllYXJFbmQ6IDIwMTgsXG4gICAgICAgICAgICBzY2hlbWE6IFwiZ29sZHJlZFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwibWVhbl9hZ2VcIiwgc3RhdGVfYWJicjogXCJXQVwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e3BlcnBldHJhdG9yc0J5VGltZX1cbiAgICAgICAgICBuYW1lPVwicGVycGV0cmF0b3JzQnlUaW1lXCJcbiAgICAgICAgICBvcHRpb25zPXt7IGZpZWxkOiBcInVuZGVyYWdlc19yYXRpb1wiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFZpcztcbiJdLCJzb3VyY2VSb290IjoiIn0=