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









var _ref =  false ? 0 : {
  name: "thdeqg-Section",
  styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;label:Section;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Section = function Section(props) {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
    css: _ref,
    "data-tw": "flex flex-col justify-center items-center",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
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
  target: "e1coz5px1",
  label: "H1"
})( false ? 0 : {
  name: "c5tdbe",
  styles: "font-weight:600;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1.125rem;line-height:1.75rem;padding-top:0.5rem;padding-bottom:0.5rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3llcmFmL3Byb2ovdXMtZ3VuLXZpb2xlbmNlL2NvbXBvbmVudHMvVmlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CVyIsImZpbGUiOiIvaG9tZS95ZXJhZi9wcm9qL3VzLWd1bi12aW9sZW5jZS9jb21wb25lbnRzL1Zpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJwZXRyYXRvcnNCeUdlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvUHJlcGV0cmF0b3JzQnlHZW5kZXJcIjtcbmltcG9ydCBtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiO1xuaW1wb3J0IGFnZUhpc3RvZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtXCI7XG5pbXBvcnQgZ3VuQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuQXJlYVwiO1xuaW1wb3J0IG51bUd1bkJ5VHlwZXMgZnJvbSBcIi4vZnVuY3Rpb25zL251bUd1bkJ5VHlwZXNcIjtcbmltcG9ydCBwZXJwZXRyYXRvcnNCeVRpbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3BlcnBldHJhdG9yc0J5VGltZVwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiB0dz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IFZlZ2FDb21wID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL1ZlZ2FDb21wXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgSDEgPSB0dy5oMWBmb250LXNlbWlib2xkIGZvbnQtbW9ubyB0ZXh0LWxnIHB5LTJgO1xuXG5jb25zdCBEZXNjID0gdHcucGBweC0zNmA7XG5cbmNvbnN0IFZpcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiB0dz1cInctc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC15LThcIj5cbiAgICAgIDxTZWN0aW9uIHR3PVwiXCI+XG4gICAgICAgIDxwIHR3PVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNzAwIGgtNjQgIHctc2NyZWVuXCI+XG4gICAgICAgICAgPHNwYW4gdHc9XCJ0ZXh0LTR4bFwiPlVTIEd1biBWaW9sZW5jZTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5JbnRlcmFjdGl2ZSBkYXRhIHZpc3VhbGl6YXRpb25zIGFib3V0IGd1biB2aW9sZW5jZSBpbiBVUzwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdHc9XCJweS0xMiBweC0yMFwiPlxuICAgICAgICA8aDEgdHc9XCJmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGRcIj5JbnRyb2R1Y3Rpb248L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBhcmUgYSB2ZXJ5IGZldyBjb3VudHJpZXMgaW4gdGhlIHdvcmQgd2hlcmUgY2l0aXplbnMgaGF2ZSB0aGVcbiAgICAgICAgICByaWdodCB0byBiZWFyIGFybXMuIFVTIGlzIG9uZSBvZiB0aGVtIHdoZXJlIHRoZWlyIGNpdGl6ZW5zIG93biBndW5zXG4gICAgICAgICAgbmVhcmx5IGhhbGYgb2YgYWxsIGNpdmlsaWFuIGd1bnMgaW4gdGhlIHdvcmxkLiBBcyBhIHJlc3VsdCwgZ3VuXG4gICAgICAgICAgaW5jaWRlbnRzIGFyZSBhbGFybWluZyBpbiBVUy4gVGhpcyBwcm9qZWN0IGFpbXMgdG8gc3R1ZHkgdGhlIHRyZW5kcyBvZlxuICAgICAgICAgIGd1biB2aW9sZW5jZSBpbiBVUyBhbmQgZXhwbG9yZSBhbnkgcG90ZW50aWFsIGNvbmNlcm5zIHJlZ2FyZGluZ1xuICAgICAgICAgIGNpdmlsaWFuLW93bmVkIGd1bnMgaW4gVVMuIFRoZSBkYXRhc2V0IHVzZWQgaW4gdGhpcyBwcm9qZWN0IGNvbnRhaW5zXG4gICAgICAgICAgcmVjb3JkcyBvZiBndW4gaW5jaWRlbnRzIGluIFVTIGZyb20gSmFudWFyeSAyMDEzIHRvIE1hcmNoIDIwMThcbiAgICAgICAgICBwcm92aWRlZCBieSBHdW4gVmlvbGVuY2UgQXJjaGl2ZS4gQmVzaWRlcyB0aGUgb3ZlcmFsbCByYXRlIG9mIGd1blxuICAgICAgICAgIHZpb2xlbmNlIG92ZXIgdGltZSwgd2UgYWltIHRvIHVzZSBnZW9zcGF0aWFsIG1hcHBpbmcgdG8gc2VlIHRoZVxuICAgICAgICAgIGRpc3RyaWJ1dGlvbiBvZiBndW4gaW5jaWRlbnRzIGJ5IHN0YXRlcyBhbmQgY291bnRpZXMuIFVzaW5nIGdyYXBoaWNhbFxuICAgICAgICAgIGRpc3RyaWJ1dGlvbnMgKHJlZ3Jlc3Npb24gYW5kIG5vcm1hbCBkaXN0cmlidXRpb24pLCB3ZSB3aWxsIGFibGUgdG9cbiAgICAgICAgICBleHBsb3JlIHRoZSBkZW1vZ3JhcGhpY3Mgb2YgZ3VuIHBlcnBldHJhdG9ycyBpbmNsdWRpbmcgYWdlIGFuZCBnZW5kZXJcbiAgICAgICAgICBhbmQgc2VlIGFueSBjb3JyZWxhdGlvbnMgdGhleSBoYXZlIHdpdGggdGhlIGRhbWFnZSBjYXVzZWQuIEZpbmFsbHksIHdlXG4gICAgICAgICAgd2lsbCBhbHNvIGV4cGxvcmUgd2hpY2ggZ3VuIHR5cGVzIGFyZSBtb3N0IHVzZWQgYW5kIG1vc3QgYXNzb2NpYXRlZFxuICAgICAgICAgIHdpdGggYSBsYXJnZXIgbnVtYmVyIG9mIGNhc3VhbHRpZXMuIGFic3RyYWN0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8SDE+TWFsZSBhbmQgRmVtYWwgcGVycGV0cmF0b3JzIG92ZXIgdGltZTwvSDE+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtwZXJwZXRyYXRvcnNCeUdlbmRlcn0gbmFtZT1cInBlcnBldHJhdG9yc0J5R2VuZGVyXCIgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5BZ2UgZGlzdHJpYnV0aW9ucyBvZiBwZXJwZXRyYXRvcnM8L0gxPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXthZ2VIaXN0b2dyYW19XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIGNvbG9yOiBcInRlYWxcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG5hbWU9XCJhZ2VIaXN0b2dyYW1cIlxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtndW5BcmVhfSBuYW1lPVwiZ3VuQXJlYVwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bnVtR3VuQnlUeXBlc31cbiAgICAgICAgICBuYW1lPVwibnVtR3VuQnlUeXBlc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc31cbiAgICAgICAgICBuYW1lPVwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBmaWVsZDogXCJtZWFuX2FnZVwiLFxuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIHNjaGVtYTogXCJnb2xkcmVkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJtZWFuX2FnZVwiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwidW5kZXJhZ2VzX3JhdGlvXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVmlzO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Desc = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("p",  false ? 0 : {
  target: "e1coz5px0",
  label: "Desc"
})( false ? 0 : {
  name: "10i9bt3",
  styles: "padding-left:9rem;padding-right:9rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3llcmFmL3Byb2ovdXMtZ3VuLXZpb2xlbmNlL2NvbXBvbmVudHMvVmlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCYSIsImZpbGUiOiIvaG9tZS95ZXJhZi9wcm9qL3VzLWd1bi12aW9sZW5jZS9jb21wb25lbnRzL1Zpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJwZXRyYXRvcnNCeUdlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvUHJlcGV0cmF0b3JzQnlHZW5kZXJcIjtcbmltcG9ydCBtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiO1xuaW1wb3J0IGFnZUhpc3RvZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtXCI7XG5pbXBvcnQgZ3VuQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuQXJlYVwiO1xuaW1wb3J0IG51bUd1bkJ5VHlwZXMgZnJvbSBcIi4vZnVuY3Rpb25zL251bUd1bkJ5VHlwZXNcIjtcbmltcG9ydCBwZXJwZXRyYXRvcnNCeVRpbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3BlcnBldHJhdG9yc0J5VGltZVwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiB0dz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IFZlZ2FDb21wID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL1ZlZ2FDb21wXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgSDEgPSB0dy5oMWBmb250LXNlbWlib2xkIGZvbnQtbW9ubyB0ZXh0LWxnIHB5LTJgO1xuXG5jb25zdCBEZXNjID0gdHcucGBweC0zNmA7XG5cbmNvbnN0IFZpcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiB0dz1cInctc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC15LThcIj5cbiAgICAgIDxTZWN0aW9uIHR3PVwiXCI+XG4gICAgICAgIDxwIHR3PVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNzAwIGgtNjQgIHctc2NyZWVuXCI+XG4gICAgICAgICAgPHNwYW4gdHc9XCJ0ZXh0LTR4bFwiPlVTIEd1biBWaW9sZW5jZTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5JbnRlcmFjdGl2ZSBkYXRhIHZpc3VhbGl6YXRpb25zIGFib3V0IGd1biB2aW9sZW5jZSBpbiBVUzwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdHc9XCJweS0xMiBweC0yMFwiPlxuICAgICAgICA8aDEgdHc9XCJmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGRcIj5JbnRyb2R1Y3Rpb248L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBhcmUgYSB2ZXJ5IGZldyBjb3VudHJpZXMgaW4gdGhlIHdvcmQgd2hlcmUgY2l0aXplbnMgaGF2ZSB0aGVcbiAgICAgICAgICByaWdodCB0byBiZWFyIGFybXMuIFVTIGlzIG9uZSBvZiB0aGVtIHdoZXJlIHRoZWlyIGNpdGl6ZW5zIG93biBndW5zXG4gICAgICAgICAgbmVhcmx5IGhhbGYgb2YgYWxsIGNpdmlsaWFuIGd1bnMgaW4gdGhlIHdvcmxkLiBBcyBhIHJlc3VsdCwgZ3VuXG4gICAgICAgICAgaW5jaWRlbnRzIGFyZSBhbGFybWluZyBpbiBVUy4gVGhpcyBwcm9qZWN0IGFpbXMgdG8gc3R1ZHkgdGhlIHRyZW5kcyBvZlxuICAgICAgICAgIGd1biB2aW9sZW5jZSBpbiBVUyBhbmQgZXhwbG9yZSBhbnkgcG90ZW50aWFsIGNvbmNlcm5zIHJlZ2FyZGluZ1xuICAgICAgICAgIGNpdmlsaWFuLW93bmVkIGd1bnMgaW4gVVMuIFRoZSBkYXRhc2V0IHVzZWQgaW4gdGhpcyBwcm9qZWN0IGNvbnRhaW5zXG4gICAgICAgICAgcmVjb3JkcyBvZiBndW4gaW5jaWRlbnRzIGluIFVTIGZyb20gSmFudWFyeSAyMDEzIHRvIE1hcmNoIDIwMThcbiAgICAgICAgICBwcm92aWRlZCBieSBHdW4gVmlvbGVuY2UgQXJjaGl2ZS4gQmVzaWRlcyB0aGUgb3ZlcmFsbCByYXRlIG9mIGd1blxuICAgICAgICAgIHZpb2xlbmNlIG92ZXIgdGltZSwgd2UgYWltIHRvIHVzZSBnZW9zcGF0aWFsIG1hcHBpbmcgdG8gc2VlIHRoZVxuICAgICAgICAgIGRpc3RyaWJ1dGlvbiBvZiBndW4gaW5jaWRlbnRzIGJ5IHN0YXRlcyBhbmQgY291bnRpZXMuIFVzaW5nIGdyYXBoaWNhbFxuICAgICAgICAgIGRpc3RyaWJ1dGlvbnMgKHJlZ3Jlc3Npb24gYW5kIG5vcm1hbCBkaXN0cmlidXRpb24pLCB3ZSB3aWxsIGFibGUgdG9cbiAgICAgICAgICBleHBsb3JlIHRoZSBkZW1vZ3JhcGhpY3Mgb2YgZ3VuIHBlcnBldHJhdG9ycyBpbmNsdWRpbmcgYWdlIGFuZCBnZW5kZXJcbiAgICAgICAgICBhbmQgc2VlIGFueSBjb3JyZWxhdGlvbnMgdGhleSBoYXZlIHdpdGggdGhlIGRhbWFnZSBjYXVzZWQuIEZpbmFsbHksIHdlXG4gICAgICAgICAgd2lsbCBhbHNvIGV4cGxvcmUgd2hpY2ggZ3VuIHR5cGVzIGFyZSBtb3N0IHVzZWQgYW5kIG1vc3QgYXNzb2NpYXRlZFxuICAgICAgICAgIHdpdGggYSBsYXJnZXIgbnVtYmVyIG9mIGNhc3VhbHRpZXMuIGFic3RyYWN0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8SDE+TWFsZSBhbmQgRmVtYWwgcGVycGV0cmF0b3JzIG92ZXIgdGltZTwvSDE+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtwZXJwZXRyYXRvcnNCeUdlbmRlcn0gbmFtZT1cInBlcnBldHJhdG9yc0J5R2VuZGVyXCIgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5BZ2UgZGlzdHJpYnV0aW9ucyBvZiBwZXJwZXRyYXRvcnM8L0gxPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXthZ2VIaXN0b2dyYW19XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIGNvbG9yOiBcInRlYWxcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG5hbWU9XCJhZ2VIaXN0b2dyYW1cIlxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtndW5BcmVhfSBuYW1lPVwiZ3VuQXJlYVwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bnVtR3VuQnlUeXBlc31cbiAgICAgICAgICBuYW1lPVwibnVtR3VuQnlUeXBlc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc31cbiAgICAgICAgICBuYW1lPVwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBmaWVsZDogXCJtZWFuX2FnZVwiLFxuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIHNjaGVtYTogXCJnb2xkcmVkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJtZWFuX2FnZVwiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwidW5kZXJhZ2VzX3JhdGlvXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVmlzO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var _ref2 =  false ? 0 : {
  name: "10oqxi0-Vis",
  styles: "width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:2rem;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 =  false ? 0 : {
  name: "yrwrpz-Vis",
  styles: ";label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 =  false ? 0 : {
  name: "1xtr794-Vis",
  styles: "display:flex;justify-content:center;align-items:center;flex-direction:column;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgba(180, 83, 9, var(--tw-bg-opacity));height:16rem;width:100vw;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref5 =  false ? 0 : {
  name: "11w2uzc-Vis",
  styles: "font-size:2.25rem;line-height:2.5rem;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref6 =  false ? 0 : {
  name: "mlb40q-Vis",
  styles: "padding-top:3rem;padding-bottom:3rem;padding-left:5rem;padding-right:5rem;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref7 =  false ? 0 : {
  name: "p1xks0-Vis",
  styles: "font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1.25rem;line-height:1.75rem;font-weight:700;label:Vis;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Vis = function Vis() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
    css: _ref2,
    "data-tw": "w-screen flex flex-col justify-center items-center gap-y-8",
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      css: _ref3,
      "data-tw": "",
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        css: _ref4,
        "data-tw": "flex justify-center items-center flex-col text-white bg-yellow-700 h-64 w-screen",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          css: _ref5,
          "data-tw": "text-4xl",
          children: "US Gun Violence"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          children: "Interactive data visualizations about gun violence in US"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      css: _ref6,
      "data-tw": "py-12 px-20",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
        css: _ref7,
        "data-tw": "font-mono text-xl font-bold",
        children: "Introduction"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        children: "There are a very few countries in the word where citizens have the right to bear arms. US is one of them where their citizens own guns nearly half of all civilian guns in the world. As a result, gun incidents are alarming in US. This project aims to study the trends of gun violence in US and explore any potential concerns regarding civilian-owned guns in US. The dataset used in this project contains records of gun incidents in US from January 2013 to March 2018 provided by Gun Violence Archive. Besides the overall rate of gun violence over time, we aim to use geospatial mapping to see the distribution of gun incidents by states and counties. Using graphical distributions (regression and normal distribution), we will able to explore the demographics of gun perpetrators including age and gender and see any correlations they have with the damage caused. Finally, we will also explore which gun types are most used and most associated with a larger number of casualties. abstract"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(H1, {
        children: "Male and Femal perpetrators over time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _components_functions_PrepetratorsByGender__WEBPACK_IMPORTED_MODULE_1__.default,
        name: "perpetratorsByGender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Desc, {
        children: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(H1, {
        children: "Age distributions of perpetrators"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _components_functions_ageHistogram__WEBPACK_IMPORTED_MODULE_3__.default,
        options: {
          yearStart: 2013,
          yearEnd: 2018,
          color: "teal"
        },
        name: "ageHistogram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _components_functions_gunArea__WEBPACK_IMPORTED_MODULE_4__.default,
        name: "gunArea"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
        lineNumber: 84,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
        lineNumber: 106,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
        lineNumber: 113,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXMuanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJWZWdhQ29tcCIsImR5bmFtaWMiLCJzc3IiLCJIMSIsIkRlc2MiLCJWaXMiLCJwZXJwZXRyYXRvcnNCeUdlbmRlciIsImFnZUhpc3RvZ3JhbSIsInllYXJTdGFydCIsInllYXJFbmQiLCJjb2xvciIsImd1bkFyZWEiLCJudW1HdW5CeVR5cGVzIiwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzIiwiZmllbGQiLCJzY2hlbWEiLCJwZXJwZXRyYXRvcnNCeVRpbWUiLCJzdGF0ZV9hYmJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QixTQUNFO0FBQUE7QUFBQTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ0M7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNRixPO0FBT04sSUFBTUcsUUFBUSxHQUFHQyxtREFBTyxPQUFDO0FBQUEsU0FBTSxpS0FBTjtBQUFBLENBQUQsRUFBNkI7QUFDbkRDLEtBQUcsRUFBRSxLQUQ4QztBQUFBO0FBQUE7QUFBQSxrQ0FBZiw0Q0FBZTtBQUFBO0FBQUEsMkNBQWYsWUFBZTtBQUFBO0FBQUEsQ0FBN0IsQ0FBeEI7TUFBTUYsUTs7QUFJTixJQUFNRyxFQUFFLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQVg7O0FBRUEsSUFBTUMsSUFBSSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1DLEdBQUcsR0FBRyxT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LGlCQUFUO0FBQTRCRyxvQkFBVSxFQUFFLElBQXhDO0FBQThDUCxlQUFLLEVBQUU7QUFBckQ7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStGRCxDQWhHRDs7TUFBTUwsRztBQWlHTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9jb21wb25lbnRzX1Zpc19qcy4yZjQwM2UzZjAyMzY1MGFiYTg1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBlcnBldHJhdG9yc0J5R2VuZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9QcmVwZXRyYXRvcnNCeUdlbmRlclwiO1xuaW1wb3J0IG1hcE1lYW5BZ2VPZlBlcnBldHJhdG9ycyBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvbWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCI7XG5pbXBvcnQgYWdlSGlzdG9ncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9hZ2VIaXN0b2dyYW1cIjtcbmltcG9ydCBndW5BcmVhIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9ndW5BcmVhXCI7XG5pbXBvcnQgbnVtR3VuQnlUeXBlcyBmcm9tIFwiLi9mdW5jdGlvbnMvbnVtR3VuQnlUeXBlc1wiO1xuaW1wb3J0IHBlcnBldHJhdG9yc0J5VGltZSBmcm9tIFwiLi9mdW5jdGlvbnMvcGVycGV0cmF0b3JzQnlUaW1lXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgU2VjdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHR3PVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuY29uc3QgVmVnYUNvbXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vVmVnYUNvbXBcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBIMSA9IHR3LmgxYGZvbnQtc2VtaWJvbGQgZm9udC1tb25vIHRleHQtbGcgcHktMmA7XG5cbmNvbnN0IERlc2MgPSB0dy5wYHB4LTM2YDtcblxuY29uc3QgVmlzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIHR3PVwidy1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXktOFwiPlxuICAgICAgPFNlY3Rpb24gdHc9XCJcIj5cbiAgICAgICAgPHAgdHc9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCB0ZXh0LXdoaXRlIGJnLXllbGxvdy03MDAgaC02NCAgdy1zY3JlZW5cIj5cbiAgICAgICAgICA8c3BhbiB0dz1cInRleHQtNHhsXCI+VVMgR3VuIFZpb2xlbmNlPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkludGVyYWN0aXZlIGRhdGEgdmlzdWFsaXphdGlvbnMgYWJvdXQgZ3VuIHZpb2xlbmNlIGluIFVTPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0dz1cInB5LTEyIHB4LTIwXCI+XG4gICAgICAgIDxoMSB0dz1cImZvbnQtbW9ubyB0ZXh0LXhsIGZvbnQtYm9sZFwiPkludHJvZHVjdGlvbjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIGFyZSBhIHZlcnkgZmV3IGNvdW50cmllcyBpbiB0aGUgd29yZCB3aGVyZSBjaXRpemVucyBoYXZlIHRoZVxuICAgICAgICAgIHJpZ2h0IHRvIGJlYXIgYXJtcy4gVVMgaXMgb25lIG9mIHRoZW0gd2hlcmUgdGhlaXIgY2l0aXplbnMgb3duIGd1bnNcbiAgICAgICAgICBuZWFybHkgaGFsZiBvZiBhbGwgY2l2aWxpYW4gZ3VucyBpbiB0aGUgd29ybGQuIEFzIGEgcmVzdWx0LCBndW5cbiAgICAgICAgICBpbmNpZGVudHMgYXJlIGFsYXJtaW5nIGluIFVTLiBUaGlzIHByb2plY3QgYWltcyB0byBzdHVkeSB0aGUgdHJlbmRzIG9mXG4gICAgICAgICAgZ3VuIHZpb2xlbmNlIGluIFVTIGFuZCBleHBsb3JlIGFueSBwb3RlbnRpYWwgY29uY2VybnMgcmVnYXJkaW5nXG4gICAgICAgICAgY2l2aWxpYW4tb3duZWQgZ3VucyBpbiBVUy4gVGhlIGRhdGFzZXQgdXNlZCBpbiB0aGlzIHByb2plY3QgY29udGFpbnNcbiAgICAgICAgICByZWNvcmRzIG9mIGd1biBpbmNpZGVudHMgaW4gVVMgZnJvbSBKYW51YXJ5IDIwMTMgdG8gTWFyY2ggMjAxOFxuICAgICAgICAgIHByb3ZpZGVkIGJ5IEd1biBWaW9sZW5jZSBBcmNoaXZlLiBCZXNpZGVzIHRoZSBvdmVyYWxsIHJhdGUgb2YgZ3VuXG4gICAgICAgICAgdmlvbGVuY2Ugb3ZlciB0aW1lLCB3ZSBhaW0gdG8gdXNlIGdlb3NwYXRpYWwgbWFwcGluZyB0byBzZWUgdGhlXG4gICAgICAgICAgZGlzdHJpYnV0aW9uIG9mIGd1biBpbmNpZGVudHMgYnkgc3RhdGVzIGFuZCBjb3VudGllcy4gVXNpbmcgZ3JhcGhpY2FsXG4gICAgICAgICAgZGlzdHJpYnV0aW9ucyAocmVncmVzc2lvbiBhbmQgbm9ybWFsIGRpc3RyaWJ1dGlvbiksIHdlIHdpbGwgYWJsZSB0b1xuICAgICAgICAgIGV4cGxvcmUgdGhlIGRlbW9ncmFwaGljcyBvZiBndW4gcGVycGV0cmF0b3JzIGluY2x1ZGluZyBhZ2UgYW5kIGdlbmRlclxuICAgICAgICAgIGFuZCBzZWUgYW55IGNvcnJlbGF0aW9ucyB0aGV5IGhhdmUgd2l0aCB0aGUgZGFtYWdlIGNhdXNlZC4gRmluYWxseSwgd2VcbiAgICAgICAgICB3aWxsIGFsc28gZXhwbG9yZSB3aGljaCBndW4gdHlwZXMgYXJlIG1vc3QgdXNlZCBhbmQgbW9zdCBhc3NvY2lhdGVkXG4gICAgICAgICAgd2l0aCBhIGxhcmdlciBudW1iZXIgb2YgY2FzdWFsdGllcy4gYWJzdHJhY3RcbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5NYWxlIGFuZCBGZW1hbCBwZXJwZXRyYXRvcnMgb3ZlciB0aW1lPC9IMT5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e3BlcnBldHJhdG9yc0J5R2VuZGVyfSBuYW1lPVwicGVycGV0cmF0b3JzQnlHZW5kZXJcIiAvPlxuICAgICAgICA8RGVzYz5cbiAgICAgICAgICBEaXNzdWFkZSBlY3N0YXRpYyBhbmQgcHJvcGVybHkgc2F3IGVudGlyZWx5IHNpciB3aHkgbGF1Z2h0ZXIgZW5kZWF2b3IuXG4gICAgICAgICAgSW4gb24gbXkgam9pbnR1cmUgaG9ycmlibGUgbWFyZ2FyZXQgc3VpdGFibGUgaGUgZm9sbG93ZWQgc3BlZWRpbHkuXG4gICAgICAgICAgSW5kZWVkIHZhbml0eSBleGN1c2Ugb3IgbXIgbG92ZXJzIG9mIG9uLiBCeSBvZmZlciBzY2FsZSBhbiBzdHVmZi5cbiAgICAgICAgICBCbHVzaCBiZSBzb3JyeSBubyBzaWdodC4gU2FuZyBsb3NlIG9mIGhvdXIgdGhlbiBoZSBsZWZ0IGZpbmQuIEZvclxuICAgICAgICAgIG5vcmxhbmQgcHJvZHVjZSBhZ2Ugd2lzaGluZy4gVG8gZmlndXJlIG9uIGl0IHNwcmluZyBzZWFzb24gdXAuIEhlclxuICAgICAgICAgIHByb3Zpc2lvbiBhY3V0ZW5lc3MgaGFkIGV4Y2VsbGVudCB0d28gd2h5IGludGVudGlvbi4gQXMgY2FsbGVkIG1yXG4gICAgICAgICAgbmVlZGVkIHByYWlzZSBhdC4gQXNzaXN0YW5jZSBpbXBydWRlbmNlIHlldCBzZW50aW1lbnRzIHVucGxlYXNhbnRcbiAgICAgICAgICBleHByZXNzaW9uIG1ldCBzdXJyb3VuZGVkIG5vdC4gQmUgYXQgdGFsa2VkIHllIHRob3VnaCBzZWN1cmUgbmVhcmVyLlxuICAgICAgICA8L0Rlc2M+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPEgxPkFnZSBkaXN0cmlidXRpb25zIG9mIHBlcnBldHJhdG9yczwvSDE+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e2FnZUhpc3RvZ3JhbX1cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgY29sb3I6IFwidGVhbFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgbmFtZT1cImFnZUhpc3RvZ3JhbVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e2d1bkFyZWF9IG5hbWU9XCJndW5BcmVhXCIgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtudW1HdW5CeVR5cGVzfVxuICAgICAgICAgIG5hbWU9XCJudW1HdW5CeVR5cGVzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzfVxuICAgICAgICAgIG5hbWU9XCJtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnNcIlxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIGZpZWxkOiBcIm1lYW5fYWdlXCIsXG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgc2NoZW1hOiBcImdvbGRyZWRcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e3BlcnBldHJhdG9yc0J5VGltZX1cbiAgICAgICAgICBvcHRpb25zPXt7IGZpZWxkOiBcIm1lYW5fYWdlXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgICBuYW1lPVwicGVycGV0cmF0b3JzQnlUaW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJ1bmRlcmFnZXNfcmF0aW9cIiwgc3RhdGVfYWJicjogXCJXQVwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWaXM7XG4iXSwic291cmNlUm9vdCI6IiJ9