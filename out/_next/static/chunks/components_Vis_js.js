(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Vis_js"],{

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3llcmFmL3Byb2ovdXMtZ3VuLXZpb2xlbmNlL2NvbXBvbmVudHMvVmlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CVyIsImZpbGUiOiIvaG9tZS95ZXJhZi9wcm9qL3VzLWd1bi12aW9sZW5jZS9jb21wb25lbnRzL1Zpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJwZXRyYXRvcnNCeUdlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvUHJlcGV0cmF0b3JzQnlHZW5kZXJcIjtcbmltcG9ydCBtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiO1xuaW1wb3J0IGFnZUhpc3RvZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtXCI7XG5pbXBvcnQgZ3VuQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuQXJlYVwiO1xuaW1wb3J0IG51bUd1bkJ5VHlwZXMgZnJvbSBcIi4vZnVuY3Rpb25zL251bUd1bkJ5VHlwZXNcIjtcbmltcG9ydCBwZXJwZXRyYXRvcnNCeVRpbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3BlcnBldHJhdG9yc0J5VGltZVwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiB0dz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IFZlZ2FDb21wID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL1ZlZ2FDb21wXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgSDEgPSB0dy5oMWBmb250LXNlbWlib2xkIGZvbnQtbW9ubyB0ZXh0LWxnIHB5LTJgO1xuXG5jb25zdCBEZXNjID0gdHcucGBweC0zNmA7XG5cbmNvbnN0IFZpcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiB0dz1cInctc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC15LThcIj5cbiAgICAgIDxTZWN0aW9uIHR3PVwiXCI+XG4gICAgICAgIDxwIHR3PVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNzAwIGgtNjQgIHctc2NyZWVuXCI+XG4gICAgICAgICAgPHNwYW4gdHc9XCJ0ZXh0LTR4bFwiPlVTIEd1biBWaW9sZW5jZTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5JbnRlcmFjdGl2ZSBkYXRhIHZpc3VhbGl6YXRpb25zIGFib3V0IGd1biB2aW9sZW5jZSBpbiBVUzwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdHc9XCJweS0xMiBweC0yMFwiPlxuICAgICAgICA8aDEgdHc9XCJmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGRcIj5JbnRyb2R1Y3Rpb248L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBhcmUgYSB2ZXJ5IGZldyBjb3VudHJpZXMgaW4gdGhlIHdvcmQgd2hlcmUgY2l0aXplbnMgaGF2ZSB0aGVcbiAgICAgICAgICByaWdodCB0byBiZWFyIGFybXMuIFVTIGlzIG9uZSBvZiB0aGVtIHdoZXJlIHRoZWlyIGNpdGl6ZW5zIG93biBndW5zXG4gICAgICAgICAgbmVhcmx5IGhhbGYgb2YgYWxsIGNpdmlsaWFuIGd1bnMgaW4gdGhlIHdvcmxkLiBBcyBhIHJlc3VsdCwgZ3VuXG4gICAgICAgICAgaW5jaWRlbnRzIGFyZSBhbGFybWluZyBpbiBVUy4gVGhpcyBwcm9qZWN0IGFpbXMgdG8gc3R1ZHkgdGhlIHRyZW5kcyBvZlxuICAgICAgICAgIGd1biB2aW9sZW5jZSBpbiBVUyBhbmQgZXhwbG9yZSBhbnkgcG90ZW50aWFsIGNvbmNlcm5zIHJlZ2FyZGluZ1xuICAgICAgICAgIGNpdmlsaWFuLW93bmVkIGd1bnMgaW4gVVMuIFRoZSBkYXRhc2V0IHVzZWQgaW4gdGhpcyBwcm9qZWN0IGNvbnRhaW5zXG4gICAgICAgICAgcmVjb3JkcyBvZiBndW4gaW5jaWRlbnRzIGluIFVTIGZyb20gSmFudWFyeSAyMDEzIHRvIE1hcmNoIDIwMThcbiAgICAgICAgICBwcm92aWRlZCBieSBHdW4gVmlvbGVuY2UgQXJjaGl2ZS4gQmVzaWRlcyB0aGUgb3ZlcmFsbCByYXRlIG9mIGd1blxuICAgICAgICAgIHZpb2xlbmNlIG92ZXIgdGltZSwgd2UgYWltIHRvIHVzZSBnZW9zcGF0aWFsIG1hcHBpbmcgdG8gc2VlIHRoZVxuICAgICAgICAgIGRpc3RyaWJ1dGlvbiBvZiBndW4gaW5jaWRlbnRzIGJ5IHN0YXRlcyBhbmQgY291bnRpZXMuIFVzaW5nIGdyYXBoaWNhbFxuICAgICAgICAgIGRpc3RyaWJ1dGlvbnMgKHJlZ3Jlc3Npb24gYW5kIG5vcm1hbCBkaXN0cmlidXRpb24pLCB3ZSB3aWxsIGFibGUgdG9cbiAgICAgICAgICBleHBsb3JlIHRoZSBkZW1vZ3JhcGhpY3Mgb2YgZ3VuIHBlcnBldHJhdG9ycyBpbmNsdWRpbmcgYWdlIGFuZCBnZW5kZXJcbiAgICAgICAgICBhbmQgc2VlIGFueSBjb3JyZWxhdGlvbnMgdGhleSBoYXZlIHdpdGggdGhlIGRhbWFnZSBjYXVzZWQuIEZpbmFsbHksIHdlXG4gICAgICAgICAgd2lsbCBhbHNvIGV4cGxvcmUgd2hpY2ggZ3VuIHR5cGVzIGFyZSBtb3N0IHVzZWQgYW5kIG1vc3QgYXNzb2NpYXRlZFxuICAgICAgICAgIHdpdGggYSBsYXJnZXIgbnVtYmVyIG9mIGNhc3VhbHRpZXMuIGFic3RyYWN0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8SDE+TWFsZSBhbmQgRmVtYWwgcGVycGV0cmF0b3JzIG92ZXIgdGltZTwvSDE+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtwZXJwZXRyYXRvcnNCeUdlbmRlcn0gbmFtZT1cInBlcnBldHJhdG9yc0J5R2VuZGVyXCIgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5BZ2UgZGlzdHJpYnV0aW9ucyBvZiBwZXJwZXRyYXRvcnM8L0gxPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXthZ2VIaXN0b2dyYW19XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIGNvbG9yOiBcInRlYWxcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG5hbWU9XCJhZ2VIaXN0b2dyYW1cIlxuICAgICAgICAvPlxuICAgICAgICA8RGVzYz5cbiAgICAgICAgICBEaXNzdWFkZSBlY3N0YXRpYyBhbmQgcHJvcGVybHkgc2F3IGVudGlyZWx5IHNpciB3aHkgbGF1Z2h0ZXIgZW5kZWF2b3IuXG4gICAgICAgICAgSW4gb24gbXkgam9pbnR1cmUgaG9ycmlibGUgbWFyZ2FyZXQgc3VpdGFibGUgaGUgZm9sbG93ZWQgc3BlZWRpbHkuXG4gICAgICAgICAgSW5kZWVkIHZhbml0eSBleGN1c2Ugb3IgbXIgbG92ZXJzIG9mIG9uLiBCeSBvZmZlciBzY2FsZSBhbiBzdHVmZi5cbiAgICAgICAgICBCbHVzaCBiZSBzb3JyeSBubyBzaWdodC4gU2FuZyBsb3NlIG9mIGhvdXIgdGhlbiBoZSBsZWZ0IGZpbmQuIEZvclxuICAgICAgICAgIG5vcmxhbmQgcHJvZHVjZSBhZ2Ugd2lzaGluZy4gVG8gZmlndXJlIG9uIGl0IHNwcmluZyBzZWFzb24gdXAuIEhlclxuICAgICAgICAgIHByb3Zpc2lvbiBhY3V0ZW5lc3MgaGFkIGV4Y2VsbGVudCB0d28gd2h5IGludGVudGlvbi4gQXMgY2FsbGVkIG1yXG4gICAgICAgICAgbmVlZGVkIHByYWlzZSBhdC4gQXNzaXN0YW5jZSBpbXBydWRlbmNlIHlldCBzZW50aW1lbnRzIHVucGxlYXNhbnRcbiAgICAgICAgICBleHByZXNzaW9uIG1ldCBzdXJyb3VuZGVkIG5vdC4gQmUgYXQgdGFsa2VkIHllIHRob3VnaCBzZWN1cmUgbmVhcmVyLlxuICAgICAgICA8L0Rlc2M+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICB7LyogPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtndW5BcmVhfSBuYW1lPVwiZ3VuQXJlYVwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bnVtR3VuQnlUeXBlc31cbiAgICAgICAgICBuYW1lPVwibnVtR3VuQnlUeXBlc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPiAqL31cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8SDE+UmF0aW8gb2YgdW5kZXJhZ2Ugb3ZlciB0b3RhbCBwZXJwcmV0cmF0b3JzIGFjcm9zcyBVUzwvSDE+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc31cbiAgICAgICAgICBuYW1lPVwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBmaWVsZDogXCJtZWFuX2FnZVwiLFxuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIHNjaGVtYTogXCJnb2xkcmVkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgey8qIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJtZWFuX2FnZVwiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+ICovfVxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5NYWxlIGFuZCBGZW1hbCBwZXJwZXRyYXRvcnMgb3ZlciB0aW1lPC9IMT5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwidW5kZXJhZ2VzX3JhdGlvXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWaXM7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Desc = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("p",  false ? 0 : {
  target: "e1coz5px0",
  label: "Desc"
})( false ? 0 : {
  name: "10i9bt3",
  styles: "padding-left:9rem;padding-right:9rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3llcmFmL3Byb2ovdXMtZ3VuLXZpb2xlbmNlL2NvbXBvbmVudHMvVmlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCYSIsImZpbGUiOiIvaG9tZS95ZXJhZi9wcm9qL3VzLWd1bi12aW9sZW5jZS9jb21wb25lbnRzL1Zpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJwZXRyYXRvcnNCeUdlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvUHJlcGV0cmF0b3JzQnlHZW5kZXJcIjtcbmltcG9ydCBtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc1wiO1xuaW1wb3J0IGFnZUhpc3RvZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvYWdlSGlzdG9ncmFtXCI7XG5pbXBvcnQgZ3VuQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuQXJlYVwiO1xuaW1wb3J0IG51bUd1bkJ5VHlwZXMgZnJvbSBcIi4vZnVuY3Rpb25zL251bUd1bkJ5VHlwZXNcIjtcbmltcG9ydCBwZXJwZXRyYXRvcnNCeVRpbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3BlcnBldHJhdG9yc0J5VGltZVwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiB0dz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmNvbnN0IFZlZ2FDb21wID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL1ZlZ2FDb21wXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgSDEgPSB0dy5oMWBmb250LXNlbWlib2xkIGZvbnQtbW9ubyB0ZXh0LWxnIHB5LTJgO1xuXG5jb25zdCBEZXNjID0gdHcucGBweC0zNmA7XG5cbmNvbnN0IFZpcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiB0dz1cInctc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC15LThcIj5cbiAgICAgIDxTZWN0aW9uIHR3PVwiXCI+XG4gICAgICAgIDxwIHR3PVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNzAwIGgtNjQgIHctc2NyZWVuXCI+XG4gICAgICAgICAgPHNwYW4gdHc9XCJ0ZXh0LTR4bFwiPlVTIEd1biBWaW9sZW5jZTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5JbnRlcmFjdGl2ZSBkYXRhIHZpc3VhbGl6YXRpb25zIGFib3V0IGd1biB2aW9sZW5jZSBpbiBVUzwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdHc9XCJweS0xMiBweC0yMFwiPlxuICAgICAgICA8aDEgdHc9XCJmb250LW1vbm8gdGV4dC14bCBmb250LWJvbGRcIj5JbnRyb2R1Y3Rpb248L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBhcmUgYSB2ZXJ5IGZldyBjb3VudHJpZXMgaW4gdGhlIHdvcmQgd2hlcmUgY2l0aXplbnMgaGF2ZSB0aGVcbiAgICAgICAgICByaWdodCB0byBiZWFyIGFybXMuIFVTIGlzIG9uZSBvZiB0aGVtIHdoZXJlIHRoZWlyIGNpdGl6ZW5zIG93biBndW5zXG4gICAgICAgICAgbmVhcmx5IGhhbGYgb2YgYWxsIGNpdmlsaWFuIGd1bnMgaW4gdGhlIHdvcmxkLiBBcyBhIHJlc3VsdCwgZ3VuXG4gICAgICAgICAgaW5jaWRlbnRzIGFyZSBhbGFybWluZyBpbiBVUy4gVGhpcyBwcm9qZWN0IGFpbXMgdG8gc3R1ZHkgdGhlIHRyZW5kcyBvZlxuICAgICAgICAgIGd1biB2aW9sZW5jZSBpbiBVUyBhbmQgZXhwbG9yZSBhbnkgcG90ZW50aWFsIGNvbmNlcm5zIHJlZ2FyZGluZ1xuICAgICAgICAgIGNpdmlsaWFuLW93bmVkIGd1bnMgaW4gVVMuIFRoZSBkYXRhc2V0IHVzZWQgaW4gdGhpcyBwcm9qZWN0IGNvbnRhaW5zXG4gICAgICAgICAgcmVjb3JkcyBvZiBndW4gaW5jaWRlbnRzIGluIFVTIGZyb20gSmFudWFyeSAyMDEzIHRvIE1hcmNoIDIwMThcbiAgICAgICAgICBwcm92aWRlZCBieSBHdW4gVmlvbGVuY2UgQXJjaGl2ZS4gQmVzaWRlcyB0aGUgb3ZlcmFsbCByYXRlIG9mIGd1blxuICAgICAgICAgIHZpb2xlbmNlIG92ZXIgdGltZSwgd2UgYWltIHRvIHVzZSBnZW9zcGF0aWFsIG1hcHBpbmcgdG8gc2VlIHRoZVxuICAgICAgICAgIGRpc3RyaWJ1dGlvbiBvZiBndW4gaW5jaWRlbnRzIGJ5IHN0YXRlcyBhbmQgY291bnRpZXMuIFVzaW5nIGdyYXBoaWNhbFxuICAgICAgICAgIGRpc3RyaWJ1dGlvbnMgKHJlZ3Jlc3Npb24gYW5kIG5vcm1hbCBkaXN0cmlidXRpb24pLCB3ZSB3aWxsIGFibGUgdG9cbiAgICAgICAgICBleHBsb3JlIHRoZSBkZW1vZ3JhcGhpY3Mgb2YgZ3VuIHBlcnBldHJhdG9ycyBpbmNsdWRpbmcgYWdlIGFuZCBnZW5kZXJcbiAgICAgICAgICBhbmQgc2VlIGFueSBjb3JyZWxhdGlvbnMgdGhleSBoYXZlIHdpdGggdGhlIGRhbWFnZSBjYXVzZWQuIEZpbmFsbHksIHdlXG4gICAgICAgICAgd2lsbCBhbHNvIGV4cGxvcmUgd2hpY2ggZ3VuIHR5cGVzIGFyZSBtb3N0IHVzZWQgYW5kIG1vc3QgYXNzb2NpYXRlZFxuICAgICAgICAgIHdpdGggYSBsYXJnZXIgbnVtYmVyIG9mIGNhc3VhbHRpZXMuIGFic3RyYWN0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8SDE+TWFsZSBhbmQgRmVtYWwgcGVycGV0cmF0b3JzIG92ZXIgdGltZTwvSDE+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtwZXJwZXRyYXRvcnNCeUdlbmRlcn0gbmFtZT1cInBlcnBldHJhdG9yc0J5R2VuZGVyXCIgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5BZ2UgZGlzdHJpYnV0aW9ucyBvZiBwZXJwZXRyYXRvcnM8L0gxPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXthZ2VIaXN0b2dyYW19XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIGNvbG9yOiBcInRlYWxcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG5hbWU9XCJhZ2VIaXN0b2dyYW1cIlxuICAgICAgICAvPlxuICAgICAgICA8RGVzYz5cbiAgICAgICAgICBEaXNzdWFkZSBlY3N0YXRpYyBhbmQgcHJvcGVybHkgc2F3IGVudGlyZWx5IHNpciB3aHkgbGF1Z2h0ZXIgZW5kZWF2b3IuXG4gICAgICAgICAgSW4gb24gbXkgam9pbnR1cmUgaG9ycmlibGUgbWFyZ2FyZXQgc3VpdGFibGUgaGUgZm9sbG93ZWQgc3BlZWRpbHkuXG4gICAgICAgICAgSW5kZWVkIHZhbml0eSBleGN1c2Ugb3IgbXIgbG92ZXJzIG9mIG9uLiBCeSBvZmZlciBzY2FsZSBhbiBzdHVmZi5cbiAgICAgICAgICBCbHVzaCBiZSBzb3JyeSBubyBzaWdodC4gU2FuZyBsb3NlIG9mIGhvdXIgdGhlbiBoZSBsZWZ0IGZpbmQuIEZvclxuICAgICAgICAgIG5vcmxhbmQgcHJvZHVjZSBhZ2Ugd2lzaGluZy4gVG8gZmlndXJlIG9uIGl0IHNwcmluZyBzZWFzb24gdXAuIEhlclxuICAgICAgICAgIHByb3Zpc2lvbiBhY3V0ZW5lc3MgaGFkIGV4Y2VsbGVudCB0d28gd2h5IGludGVudGlvbi4gQXMgY2FsbGVkIG1yXG4gICAgICAgICAgbmVlZGVkIHByYWlzZSBhdC4gQXNzaXN0YW5jZSBpbXBydWRlbmNlIHlldCBzZW50aW1lbnRzIHVucGxlYXNhbnRcbiAgICAgICAgICBleHByZXNzaW9uIG1ldCBzdXJyb3VuZGVkIG5vdC4gQmUgYXQgdGFsa2VkIHllIHRob3VnaCBzZWN1cmUgbmVhcmVyLlxuICAgICAgICA8L0Rlc2M+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICB7LyogPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcCBmdW5jPXtndW5BcmVhfSBuYW1lPVwiZ3VuQXJlYVwiIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bnVtR3VuQnlUeXBlc31cbiAgICAgICAgICBuYW1lPVwibnVtR3VuQnlUeXBlc1wiXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWN0aW9uPiAqL31cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8SDE+UmF0aW8gb2YgdW5kZXJhZ2Ugb3ZlciB0b3RhbCBwZXJwcmV0cmF0b3JzIGFjcm9zcyBVUzwvSDE+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e21hcE1lYW5BZ2VPZlBlcnBldHJhdG9yc31cbiAgICAgICAgICBuYW1lPVwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBmaWVsZDogXCJtZWFuX2FnZVwiLFxuICAgICAgICAgICAgeWVhclN0YXJ0OiAyMDEzLFxuICAgICAgICAgICAgeWVhckVuZDogMjAxOCxcbiAgICAgICAgICAgIHNjaGVtYTogXCJnb2xkcmVkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgey8qIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJtZWFuX2FnZVwiLCBzdGF0ZV9hYmJyOiBcIldBXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+ICovfVxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5NYWxlIGFuZCBGZW1hbCBwZXJwZXRyYXRvcnMgb3ZlciB0aW1lPC9IMT5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17cGVycGV0cmF0b3JzQnlUaW1lfVxuICAgICAgICAgIG5hbWU9XCJwZXJwZXRyYXRvcnNCeVRpbWVcIlxuICAgICAgICAgIG9wdGlvbnM9e3sgZmllbGQ6IFwidW5kZXJhZ2VzX3JhdGlvXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPERlc2M+XG4gICAgICAgICAgRGlzc3VhZGUgZWNzdGF0aWMgYW5kIHByb3Blcmx5IHNhdyBlbnRpcmVseSBzaXIgd2h5IGxhdWdodGVyIGVuZGVhdm9yLlxuICAgICAgICAgIEluIG9uIG15IGpvaW50dXJlIGhvcnJpYmxlIG1hcmdhcmV0IHN1aXRhYmxlIGhlIGZvbGxvd2VkIHNwZWVkaWx5LlxuICAgICAgICAgIEluZGVlZCB2YW5pdHkgZXhjdXNlIG9yIG1yIGxvdmVycyBvZiBvbi4gQnkgb2ZmZXIgc2NhbGUgYW4gc3R1ZmYuXG4gICAgICAgICAgQmx1c2ggYmUgc29ycnkgbm8gc2lnaHQuIFNhbmcgbG9zZSBvZiBob3VyIHRoZW4gaGUgbGVmdCBmaW5kLiBGb3JcbiAgICAgICAgICBub3JsYW5kIHByb2R1Y2UgYWdlIHdpc2hpbmcuIFRvIGZpZ3VyZSBvbiBpdCBzcHJpbmcgc2Vhc29uIHVwLiBIZXJcbiAgICAgICAgICBwcm92aXNpb24gYWN1dGVuZXNzIGhhZCBleGNlbGxlbnQgdHdvIHdoeSBpbnRlbnRpb24uIEFzIGNhbGxlZCBtclxuICAgICAgICAgIG5lZWRlZCBwcmFpc2UgYXQuIEFzc2lzdGFuY2UgaW1wcnVkZW5jZSB5ZXQgc2VudGltZW50cyB1bnBsZWFzYW50XG4gICAgICAgICAgZXhwcmVzc2lvbiBtZXQgc3Vycm91bmRlZCBub3QuIEJlIGF0IHRhbGtlZCB5ZSB0aG91Z2ggc2VjdXJlIG5lYXJlci5cbiAgICAgICAgPC9EZXNjPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWaXM7XG4iXX0= */",
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
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Desc, {
        children: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(H1, {
        children: "Ratio of underage over total perpretrators across US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
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
        lineNumber: 105,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Desc, {
        children: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Section, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(H1, {
        children: "Male and Femal perpetrators over time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(VegaComp, {
        func: _functions_perpetratorsByTime__WEBPACK_IMPORTED_MODULE_6__.default,
        name: "perpetratorsByTime",
        options: {
          field: "underages_ratio",
          state_abbr: "WA",
          color: "red"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Desc, {
        children: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL1ByZXBldHJhdG9yc0J5R2VuZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9hZ2VIaXN0b2dyYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2d1bkFyZWEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL2d1bkNvdW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvZ3VuS2lsbENvdW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvbWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9udW1HdW5CeVR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9wZXJwZXRyYXRvcnNCeVN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9wZXJwZXRyYXRvcnNCeVRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVuY3Rpb25zL3N0YXRlUmFua2luZy5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uIiwicHJvcHMiLCJjaGlsZHJlbiIsIlZlZ2FDb21wIiwiZHluYW1pYyIsInNzciIsIkgxIiwiRGVzYyIsIlZpcyIsInBlcnBldHJhdG9yc0J5R2VuZGVyIiwiYWdlSGlzdG9ncmFtIiwieWVhclN0YXJ0IiwieWVhckVuZCIsImNvbG9yIiwibWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzIiwiZmllbGQiLCJzY2hlbWEiLCJwZXJwZXRyYXRvcnNCeVRpbWUiLCJzdGF0ZV9hYmJyIiwiZGF0YVNldCIsIm9wdGlvbnMiLCJwIiwiYnJ1c2giLCJ2bCIsImVuY29kaW5ncyIsIngiLCJ5ZWFybW9udGgiLCJnZW5kZXJfcmF0aW8iLCJmaWx0ZXIiLCJkIiwidHlwZSIsImRlcml2ZSIsIm1vbnRoIiwib3AiLCJkYXRlIiwiaXNfbWFsZSIsImdlbmRlciIsImlzX2ZlbWFsZSIsImdyb3VwYnkiLCJyb2xsdXAiLCJmZW1hbGVfcGN0ZyIsIm1hbGVfcGN0ZyIsInllYXIiLCJyZW5hbWUiLCJmb2xkIiwia2V5IiwiZ2VuZGVyX2NvdW50IiwiZmVtYWxlX2NvdW50IiwibWFsZV9jb3VudCIsIm9wYWNpdHkiLCJkYXRhIiwiZW5jb2RlIiwiZmllbGRRIiwidGl0bGUiLCJmaWVsZE4iLCJzY2FsZSIsInNjaGVtZSIsInBhcmFtcyIsImRvbWFpbiIsInZlZ2FPcHRpb25zIiwiY29uZmlnIiwiaW5pdCIsInZpZXciLCJ0b29sdGlwIiwidmVnYVRvb2x0aXAiLCJjYWxsIiwicmVuZGVyZXIiLCJ2ZWdhIiwidmVnYUxpdGUiLCJiaW4iLCJzdGVwIiwiY291bnQiLCJ2YWx1ZSIsImd1bkFyZWEiLCJnIiwidHJhbnNmb3JtIiwiaGVpZ2h0Iiwid2lkdGgiLCJndW5Db3VudHMiLCJzb3J0IiwibGVnZW5kIiwiZ3VuS2lsbENvdW50cyIsIm1lYW4iLCJtYXAiLCJzdGF0ZVJhbmtpbmciLCJwZXJwZXRyYXRvcnNCeVN0YXRlIiwibWF4U2l6ZSIsInN0cm9rZSIsIm51bUd1bkJ5VHlwZXMiLCJwc3QiLCJ1c2EiLCJwcHN0IiwidGl0bGVzIiwibWVhbl9hZ2UiLCJ1bmRlcmFnZXNfcmF0aW8iLCJsYXllciIsImZpbGwiLCJzdHJva2VXaWR0aCIsImZlYXR1cmUiLCJmcm9tIiwiZmllbGRzIiwiYWdncmVnYXRlIiwiYXMiLCJ0aXRsZUxpbmVIZWlnaHQiLCJwcm9qZWN0IiwiZmllbGRPIiwib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FB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RytCLE1BRkgsQ0FFVSxPQUZWLEVBR0d5QixJQUhILENBR1F4RCwrQ0FBQSxDQUFRUixLQUFSLEVBQWUyRixLQUFmLENBQXFCLFlBQXJCLENBSFIsRUFJR3JELEtBSkgsQ0FJUyxPQUpULENBVEcsRUFjSDlCLGdEQUFBLEdBQVcyRCxJQUFYLENBQWdCbkUsS0FBaEIsRUFBdUJ3QyxLQUF2QixDQUE2QjtBQUFFQyxVQUFNLEVBQUVBO0FBQVYsR0FBN0IsQ0FkRyxFQWVIakMsa0RBQUEsQ0FBVyxDQUFDQSxpREFBQSxDQUFVLE9BQVYsQ0FBRCxFQUFxQkEsK0NBQUEsQ0FBUVIsS0FBUixDQUFyQixDQUFYLENBZkcsQ0FBUDtBQWlCRDs7QUFFRCxJQUFNNEMsV0FBVyxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsQ0FDTjtBQURNLEdBRFU7QUFJbEJDLE1BQUksRUFBRSxjQUFDQyxJQUFELEVBQVU7QUFDZDtBQUNBQSxRQUFJLENBQUNDLE9BQUwsQ0FBYSxJQUFJQyxpREFBSixHQUEwQkMsSUFBdkM7QUFDRCxHQVBpQjtBQVFsQkgsTUFBSSxFQUFFO0FBQ0pJLFlBQVEsRUFBRTtBQUROO0FBUlksQ0FBcEI7QUFZQTNDLG1EQUFBLENBQVk0QyxpQ0FBWixFQUFrQkMsc0NBQWxCLEVBQTRCVCxXQUE1QjtBQUVBLCtEQUFleUIsWUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2NvbXBvbmVudHNfVmlzX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBlcnBldHJhdG9yc0J5R2VuZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9QcmVwZXRyYXRvcnNCeUdlbmRlclwiO1xuaW1wb3J0IG1hcE1lYW5BZ2VPZlBlcnBldHJhdG9ycyBmcm9tIFwiLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvbWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzXCI7XG5pbXBvcnQgYWdlSGlzdG9ncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9hZ2VIaXN0b2dyYW1cIjtcbmltcG9ydCBndW5BcmVhIGZyb20gXCIuLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9ndW5BcmVhXCI7XG5pbXBvcnQgbnVtR3VuQnlUeXBlcyBmcm9tIFwiLi9mdW5jdGlvbnMvbnVtR3VuQnlUeXBlc1wiO1xuaW1wb3J0IHBlcnBldHJhdG9yc0J5VGltZSBmcm9tIFwiLi9mdW5jdGlvbnMvcGVycGV0cmF0b3JzQnlUaW1lXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgU2VjdGlvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHR3PVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuY29uc3QgVmVnYUNvbXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vVmVnYUNvbXBcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBIMSA9IHR3LmgxYGZvbnQtc2VtaWJvbGQgZm9udC1tb25vIHRleHQtbGcgcHktMmA7XG5cbmNvbnN0IERlc2MgPSB0dy5wYHB4LTM2YDtcblxuY29uc3QgVmlzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIHR3PVwidy1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXktOFwiPlxuICAgICAgPFNlY3Rpb24gdHc9XCJcIj5cbiAgICAgICAgPHAgdHc9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCB0ZXh0LXdoaXRlIGJnLXllbGxvdy03MDAgaC02NCAgdy1zY3JlZW5cIj5cbiAgICAgICAgICA8c3BhbiB0dz1cInRleHQtNHhsXCI+VVMgR3VuIFZpb2xlbmNlPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkludGVyYWN0aXZlIGRhdGEgdmlzdWFsaXphdGlvbnMgYWJvdXQgZ3VuIHZpb2xlbmNlIGluIFVTPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0dz1cInB5LTEyIHB4LTIwXCI+XG4gICAgICAgIDxoMSB0dz1cImZvbnQtbW9ubyB0ZXh0LXhsIGZvbnQtYm9sZFwiPkludHJvZHVjdGlvbjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIGFyZSBhIHZlcnkgZmV3IGNvdW50cmllcyBpbiB0aGUgd29yZCB3aGVyZSBjaXRpemVucyBoYXZlIHRoZVxuICAgICAgICAgIHJpZ2h0IHRvIGJlYXIgYXJtcy4gVVMgaXMgb25lIG9mIHRoZW0gd2hlcmUgdGhlaXIgY2l0aXplbnMgb3duIGd1bnNcbiAgICAgICAgICBuZWFybHkgaGFsZiBvZiBhbGwgY2l2aWxpYW4gZ3VucyBpbiB0aGUgd29ybGQuIEFzIGEgcmVzdWx0LCBndW5cbiAgICAgICAgICBpbmNpZGVudHMgYXJlIGFsYXJtaW5nIGluIFVTLiBUaGlzIHByb2plY3QgYWltcyB0byBzdHVkeSB0aGUgdHJlbmRzIG9mXG4gICAgICAgICAgZ3VuIHZpb2xlbmNlIGluIFVTIGFuZCBleHBsb3JlIGFueSBwb3RlbnRpYWwgY29uY2VybnMgcmVnYXJkaW5nXG4gICAgICAgICAgY2l2aWxpYW4tb3duZWQgZ3VucyBpbiBVUy4gVGhlIGRhdGFzZXQgdXNlZCBpbiB0aGlzIHByb2plY3QgY29udGFpbnNcbiAgICAgICAgICByZWNvcmRzIG9mIGd1biBpbmNpZGVudHMgaW4gVVMgZnJvbSBKYW51YXJ5IDIwMTMgdG8gTWFyY2ggMjAxOFxuICAgICAgICAgIHByb3ZpZGVkIGJ5IEd1biBWaW9sZW5jZSBBcmNoaXZlLiBCZXNpZGVzIHRoZSBvdmVyYWxsIHJhdGUgb2YgZ3VuXG4gICAgICAgICAgdmlvbGVuY2Ugb3ZlciB0aW1lLCB3ZSBhaW0gdG8gdXNlIGdlb3NwYXRpYWwgbWFwcGluZyB0byBzZWUgdGhlXG4gICAgICAgICAgZGlzdHJpYnV0aW9uIG9mIGd1biBpbmNpZGVudHMgYnkgc3RhdGVzIGFuZCBjb3VudGllcy4gVXNpbmcgZ3JhcGhpY2FsXG4gICAgICAgICAgZGlzdHJpYnV0aW9ucyAocmVncmVzc2lvbiBhbmQgbm9ybWFsIGRpc3RyaWJ1dGlvbiksIHdlIHdpbGwgYWJsZSB0b1xuICAgICAgICAgIGV4cGxvcmUgdGhlIGRlbW9ncmFwaGljcyBvZiBndW4gcGVycGV0cmF0b3JzIGluY2x1ZGluZyBhZ2UgYW5kIGdlbmRlclxuICAgICAgICAgIGFuZCBzZWUgYW55IGNvcnJlbGF0aW9ucyB0aGV5IGhhdmUgd2l0aCB0aGUgZGFtYWdlIGNhdXNlZC4gRmluYWxseSwgd2VcbiAgICAgICAgICB3aWxsIGFsc28gZXhwbG9yZSB3aGljaCBndW4gdHlwZXMgYXJlIG1vc3QgdXNlZCBhbmQgbW9zdCBhc3NvY2lhdGVkXG4gICAgICAgICAgd2l0aCBhIGxhcmdlciBudW1iZXIgb2YgY2FzdWFsdGllcy4gYWJzdHJhY3RcbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5NYWxlIGFuZCBGZW1hbCBwZXJwZXRyYXRvcnMgb3ZlciB0aW1lPC9IMT5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e3BlcnBldHJhdG9yc0J5R2VuZGVyfSBuYW1lPVwicGVycGV0cmF0b3JzQnlHZW5kZXJcIiAvPlxuICAgICAgICA8RGVzYz5cbiAgICAgICAgICBEaXNzdWFkZSBlY3N0YXRpYyBhbmQgcHJvcGVybHkgc2F3IGVudGlyZWx5IHNpciB3aHkgbGF1Z2h0ZXIgZW5kZWF2b3IuXG4gICAgICAgICAgSW4gb24gbXkgam9pbnR1cmUgaG9ycmlibGUgbWFyZ2FyZXQgc3VpdGFibGUgaGUgZm9sbG93ZWQgc3BlZWRpbHkuXG4gICAgICAgICAgSW5kZWVkIHZhbml0eSBleGN1c2Ugb3IgbXIgbG92ZXJzIG9mIG9uLiBCeSBvZmZlciBzY2FsZSBhbiBzdHVmZi5cbiAgICAgICAgICBCbHVzaCBiZSBzb3JyeSBubyBzaWdodC4gU2FuZyBsb3NlIG9mIGhvdXIgdGhlbiBoZSBsZWZ0IGZpbmQuIEZvclxuICAgICAgICAgIG5vcmxhbmQgcHJvZHVjZSBhZ2Ugd2lzaGluZy4gVG8gZmlndXJlIG9uIGl0IHNwcmluZyBzZWFzb24gdXAuIEhlclxuICAgICAgICAgIHByb3Zpc2lvbiBhY3V0ZW5lc3MgaGFkIGV4Y2VsbGVudCB0d28gd2h5IGludGVudGlvbi4gQXMgY2FsbGVkIG1yXG4gICAgICAgICAgbmVlZGVkIHByYWlzZSBhdC4gQXNzaXN0YW5jZSBpbXBydWRlbmNlIHlldCBzZW50aW1lbnRzIHVucGxlYXNhbnRcbiAgICAgICAgICBleHByZXNzaW9uIG1ldCBzdXJyb3VuZGVkIG5vdC4gQmUgYXQgdGFsa2VkIHllIHRob3VnaCBzZWN1cmUgbmVhcmVyLlxuICAgICAgICA8L0Rlc2M+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPEgxPkFnZSBkaXN0cmlidXRpb25zIG9mIHBlcnBldHJhdG9yczwvSDE+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e2FnZUhpc3RvZ3JhbX1cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgY29sb3I6IFwidGVhbFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgbmFtZT1cImFnZUhpc3RvZ3JhbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxEZXNjPlxuICAgICAgICAgIERpc3N1YWRlIGVjc3RhdGljIGFuZCBwcm9wZXJseSBzYXcgZW50aXJlbHkgc2lyIHdoeSBsYXVnaHRlciBlbmRlYXZvci5cbiAgICAgICAgICBJbiBvbiBteSBqb2ludHVyZSBob3JyaWJsZSBtYXJnYXJldCBzdWl0YWJsZSBoZSBmb2xsb3dlZCBzcGVlZGlseS5cbiAgICAgICAgICBJbmRlZWQgdmFuaXR5IGV4Y3VzZSBvciBtciBsb3ZlcnMgb2Ygb24uIEJ5IG9mZmVyIHNjYWxlIGFuIHN0dWZmLlxuICAgICAgICAgIEJsdXNoIGJlIHNvcnJ5IG5vIHNpZ2h0LiBTYW5nIGxvc2Ugb2YgaG91ciB0aGVuIGhlIGxlZnQgZmluZC4gRm9yXG4gICAgICAgICAgbm9ybGFuZCBwcm9kdWNlIGFnZSB3aXNoaW5nLiBUbyBmaWd1cmUgb24gaXQgc3ByaW5nIHNlYXNvbiB1cC4gSGVyXG4gICAgICAgICAgcHJvdmlzaW9uIGFjdXRlbmVzcyBoYWQgZXhjZWxsZW50IHR3byB3aHkgaW50ZW50aW9uLiBBcyBjYWxsZWQgbXJcbiAgICAgICAgICBuZWVkZWQgcHJhaXNlIGF0LiBBc3Npc3RhbmNlIGltcHJ1ZGVuY2UgeWV0IHNlbnRpbWVudHMgdW5wbGVhc2FudFxuICAgICAgICAgIGV4cHJlc3Npb24gbWV0IHN1cnJvdW5kZWQgbm90LiBCZSBhdCB0YWxrZWQgeWUgdGhvdWdoIHNlY3VyZSBuZWFyZXIuXG4gICAgICAgIDwvRGVzYz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIHsvKiA8U2VjdGlvbj5cbiAgICAgICAgPFZlZ2FDb21wIGZ1bmM9e2d1bkFyZWF9IG5hbWU9XCJndW5BcmVhXCIgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtudW1HdW5CeVR5cGVzfVxuICAgICAgICAgIG5hbWU9XCJudW1HdW5CeVR5cGVzXCJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlY3Rpb24+ICovfVxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxIMT5SYXRpbyBvZiB1bmRlcmFnZSBvdmVyIHRvdGFsIHBlcnByZXRyYXRvcnMgYWNyb3NzIFVTPC9IMT5cbiAgICAgICAgPFZlZ2FDb21wXG4gICAgICAgICAgZnVuYz17bWFwTWVhbkFnZU9mUGVycGV0cmF0b3JzfVxuICAgICAgICAgIG5hbWU9XCJtYXBNZWFuQWdlT2ZQZXJwZXRyYXRvcnNcIlxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIGZpZWxkOiBcIm1lYW5fYWdlXCIsXG4gICAgICAgICAgICB5ZWFyU3RhcnQ6IDIwMTMsXG4gICAgICAgICAgICB5ZWFyRW5kOiAyMDE4LFxuICAgICAgICAgICAgc2NoZW1hOiBcImdvbGRyZWRcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8RGVzYz5cbiAgICAgICAgICBEaXNzdWFkZSBlY3N0YXRpYyBhbmQgcHJvcGVybHkgc2F3IGVudGlyZWx5IHNpciB3aHkgbGF1Z2h0ZXIgZW5kZWF2b3IuXG4gICAgICAgICAgSW4gb24gbXkgam9pbnR1cmUgaG9ycmlibGUgbWFyZ2FyZXQgc3VpdGFibGUgaGUgZm9sbG93ZWQgc3BlZWRpbHkuXG4gICAgICAgICAgSW5kZWVkIHZhbml0eSBleGN1c2Ugb3IgbXIgbG92ZXJzIG9mIG9uLiBCeSBvZmZlciBzY2FsZSBhbiBzdHVmZi5cbiAgICAgICAgICBCbHVzaCBiZSBzb3JyeSBubyBzaWdodC4gU2FuZyBsb3NlIG9mIGhvdXIgdGhlbiBoZSBsZWZ0IGZpbmQuIEZvclxuICAgICAgICAgIG5vcmxhbmQgcHJvZHVjZSBhZ2Ugd2lzaGluZy4gVG8gZmlndXJlIG9uIGl0IHNwcmluZyBzZWFzb24gdXAuIEhlclxuICAgICAgICAgIHByb3Zpc2lvbiBhY3V0ZW5lc3MgaGFkIGV4Y2VsbGVudCB0d28gd2h5IGludGVudGlvbi4gQXMgY2FsbGVkIG1yXG4gICAgICAgICAgbmVlZGVkIHByYWlzZSBhdC4gQXNzaXN0YW5jZSBpbXBydWRlbmNlIHlldCBzZW50aW1lbnRzIHVucGxlYXNhbnRcbiAgICAgICAgICBleHByZXNzaW9uIG1ldCBzdXJyb3VuZGVkIG5vdC4gQmUgYXQgdGFsa2VkIHllIHRob3VnaCBzZWN1cmUgbmVhcmVyLlxuICAgICAgICA8L0Rlc2M+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICB7LyogPFNlY3Rpb24+XG4gICAgICAgIDxWZWdhQ29tcFxuICAgICAgICAgIGZ1bmM9e3BlcnBldHJhdG9yc0J5VGltZX1cbiAgICAgICAgICBvcHRpb25zPXt7IGZpZWxkOiBcIm1lYW5fYWdlXCIsIHN0YXRlX2FiYnI6IFwiV0FcIiwgY29sb3I6IFwicmVkXCIgfX1cbiAgICAgICAgICBuYW1lPVwicGVycGV0cmF0b3JzQnlUaW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj4gKi99XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPEgxPk1hbGUgYW5kIEZlbWFsIHBlcnBldHJhdG9ycyBvdmVyIHRpbWU8L0gxPlxuICAgICAgICA8VmVnYUNvbXBcbiAgICAgICAgICBmdW5jPXtwZXJwZXRyYXRvcnNCeVRpbWV9XG4gICAgICAgICAgbmFtZT1cInBlcnBldHJhdG9yc0J5VGltZVwiXG4gICAgICAgICAgb3B0aW9ucz17eyBmaWVsZDogXCJ1bmRlcmFnZXNfcmF0aW9cIiwgc3RhdGVfYWJicjogXCJXQVwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8RGVzYz5cbiAgICAgICAgICBEaXNzdWFkZSBlY3N0YXRpYyBhbmQgcHJvcGVybHkgc2F3IGVudGlyZWx5IHNpciB3aHkgbGF1Z2h0ZXIgZW5kZWF2b3IuXG4gICAgICAgICAgSW4gb24gbXkgam9pbnR1cmUgaG9ycmlibGUgbWFyZ2FyZXQgc3VpdGFibGUgaGUgZm9sbG93ZWQgc3BlZWRpbHkuXG4gICAgICAgICAgSW5kZWVkIHZhbml0eSBleGN1c2Ugb3IgbXIgbG92ZXJzIG9mIG9uLiBCeSBvZmZlciBzY2FsZSBhbiBzdHVmZi5cbiAgICAgICAgICBCbHVzaCBiZSBzb3JyeSBubyBzaWdodC4gU2FuZyBsb3NlIG9mIGhvdXIgdGhlbiBoZSBsZWZ0IGZpbmQuIEZvclxuICAgICAgICAgIG5vcmxhbmQgcHJvZHVjZSBhZ2Ugd2lzaGluZy4gVG8gZmlndXJlIG9uIGl0IHNwcmluZyBzZWFzb24gdXAuIEhlclxuICAgICAgICAgIHByb3Zpc2lvbiBhY3V0ZW5lc3MgaGFkIGV4Y2VsbGVudCB0d28gd2h5IGludGVudGlvbi4gQXMgY2FsbGVkIG1yXG4gICAgICAgICAgbmVlZGVkIHByYWlzZSBhdC4gQXNzaXN0YW5jZSBpbXBydWRlbmNlIHlldCBzZW50aW1lbnRzIHVucGxlYXNhbnRcbiAgICAgICAgICBleHByZXNzaW9uIG1ldCBzdXJyb3VuZGVkIG5vdC4gQmUgYXQgdGFsa2VkIHllIHRob3VnaCBzZWN1cmUgbmVhcmVyLlxuICAgICAgICA8L0Rlc2M+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFZpcztcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5pbXBvcnQgeyBvcCB9IGZyb20gXCJhcnF1ZXJvXCI7XG5cbmZ1bmN0aW9uIHBlcnBldHJhdG9yc0J5R2VuZGVyKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgcCB9ID0gZGF0YVNldDtcbiAgY29uc3QgYnJ1c2ggPSB2bFxuICAgIC5zZWxlY3RJbnRlcnZhbCgpIC8vIEJydXNoIGlzIGEgYmV0dGVyICh2aXZpZD8pIG5hbWUgdGhhbiBzZWxlY3Rpb24gaW4gdGhpcyBjYXNlIVxuICAgIC5lbmNvZGluZ3MoXCJ4XCIpOyAvLyBsaW1pdCBzZWxlY3Rpb24gdG8geC1heGlzICh5ZWFyKSB2YWx1ZXNcblxuICBjb25zdCB4ID0gdmwueCgpLnllYXJtb250aChcImRhdGVcIik7XG5cbiAgY29uc3QgZ2VuZGVyX3JhdGlvID0gcFxuICAgIC5maWx0ZXIoKGQpID0+IGQudHlwZSA9PT0gXCJTdWJqZWN0LVN1c3BlY3RcIilcbiAgICAuZGVyaXZlKHtcbiAgICAgIG1vbnRoOiAoZCkgPT4gb3AudXRjbW9udGgoZC5kYXRlKSxcbiAgICAgIGlzX21hbGU6IChkKSA9PiBkLmdlbmRlciA9PT0gXCJNYWxlXCIsXG4gICAgICBpc19mZW1hbGU6IChkKSA9PiBkLmdlbmRlciA9PT0gXCJGZW1hbGVcIixcbiAgICB9KVxuICAgIC5ncm91cGJ5KFtcIm1vbnRoXCIsIFwieWVhclwiXSlcbiAgICAucm9sbHVwKHtcbiAgICAgIGZlbWFsZV9wY3RnOiAoZCkgPT5cbiAgICAgICAgKDEwMCAqIG9wLnN1bShkLmlzX2ZlbWFsZSkpIC8gKG9wLnN1bShkLmlzX2ZlbWFsZSkgKyBvcC5zdW0oZC5pc19tYWxlKSksXG4gICAgICBtYWxlX3BjdGc6IChkKSA9PlxuICAgICAgICAoMTAwICogb3Auc3VtKGQuaXNfbWFsZSkpIC8gKG9wLnN1bShkLmlzX2ZlbWFsZSkgKyBvcC5zdW0oZC5pc19tYWxlKSksXG4gICAgICBkYXRlOiAoZCkgPT4gb3AubWluKG9wLnV0Y2RhdGV0aW1lKGQuZGF0ZSkpLFxuICAgIH0pXG4gICAgLmRlcml2ZSh7IGRhdGU6IChkKSA9PiBvcC5kYXRldGltZShkLnllYXIsIGQubW9udGgpIH0pXG4gICAgLnJlbmFtZSh7IG1hbGVfcGN0ZzogXCJtYWxlXCIsIGZlbWFsZV9wY3RnOiBcImZlbWFsZVwiIH0pXG4gICAgLmZvbGQoW1wiZmVtYWxlXCIsIFwibWFsZVwiXSlcbiAgICAucmVuYW1lKHsga2V5OiBcImdlbmRlclwiIH0pO1xuXG4gIGNvbnN0IGdlbmRlcl9jb3VudCA9IHBcbiAgICAuZmlsdGVyKChkKSA9PiBkLnR5cGUgPT09IFwiU3ViamVjdC1TdXNwZWN0XCIpXG4gICAgLmRlcml2ZSh7XG4gICAgICBtb250aDogKGQpID0+IG9wLnV0Y21vbnRoKGQuZGF0ZSksXG4gICAgICBpc19tYWxlOiAoZCkgPT4gZC5nZW5kZXIgPT09IFwiTWFsZVwiLFxuICAgICAgaXNfZmVtYWxlOiAoZCkgPT4gZC5nZW5kZXIgPT09IFwiRmVtYWxlXCIsXG4gICAgfSlcbiAgICAuZ3JvdXBieShbXCJtb250aFwiLCBcInllYXJcIl0pXG4gICAgLnJvbGx1cCh7XG4gICAgICBmZW1hbGVfY291bnQ6IChkKSA9PiBvcC5zdW0oZC5pc19mZW1hbGUpLFxuICAgICAgbWFsZV9jb3VudDogKGQpID0+IG9wLnN1bShkLmlzX21hbGUpLFxuICAgICAgZGF0ZTogKGQpID0+IG9wLm1pbihvcC51dGNkYXRldGltZShkLmRhdGUpKSxcbiAgICB9KVxuICAgIC5kZXJpdmUoeyBkYXRlOiAoZCkgPT4gb3AuZGF0ZXRpbWUoZC55ZWFyLCBkLm1vbnRoKSB9KVxuICAgIC5yZW5hbWUoeyBtYWxlX2NvdW50OiBcIm1hbGVcIiwgZmVtYWxlX2NvdW50OiBcImZlbWFsZVwiIH0pXG4gICAgLmZvbGQoW1wiZmVtYWxlXCIsIFwibWFsZVwiXSlcbiAgICAucmVuYW1lKHsga2V5OiBcImdlbmRlclwiIH0pO1xuXG4gIHJldHVybiB2bC5oY29uY2F0KFxuICAgIHZsXG4gICAgICAubWFya0FyZWEoeyBvcGFjaXR5OiAwLjUgfSlcbiAgICAgIC5kYXRhKGdlbmRlcl9jb3VudClcbiAgICAgIC5lbmNvZGUoXG4gICAgICAgIHgsXG4gICAgICAgIHZsLnkoKS5maWVsZFEoXCJ2YWx1ZVwiKS50aXRsZShcIk51bWJlciBvZiBwZXJwZXRyYXRvcnNcIiksXG4gICAgICAgIHZsLmNvbG9yKCkuZmllbGROKFwiZ2VuZGVyXCIpLnNjYWxlKHsgc2NoZW1lOiBcInNldDFcIiB9KVxuICAgICAgKVxuICAgICAgLnBhcmFtcyhicnVzaCksXG4gICAgdmxcbiAgICAgIC5tYXJrQXJlYSh7IG9wYWNpdHk6IDAuNSB9KVxuICAgICAgLmRhdGEoZ2VuZGVyX3JhdGlvKVxuICAgICAgLmVuY29kZShcbiAgICAgICAgeCxcbiAgICAgICAgdmwueSgpLmZpZWxkUShcInZhbHVlXCIpLnRpdGxlKFwiUGVyY2VudGFnZSBvZiBwZXJwZXRyYXRvcnNcIiksXG4gICAgICAgIHZsLmNvbG9yKCkuZmllbGROKFwiZ2VuZGVyXCIpLnNjYWxlKHsgc2NoZW1lOiBcInNldDFcIiB9KVxuICAgICAgKVxuICAgICAgLmVuY29kZSh4LnNjYWxlKHsgZG9tYWluOiBicnVzaCB9KSlcbiAgKTtcbn1cblxuY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gIGNvbmZpZzoge1xuICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgfSxcbiAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICB9LFxuICB2aWV3OiB7XG4gICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gIH0sXG59O1xudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVycGV0cmF0b3JzQnlHZW5kZXI7XG4iLCJpbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuXG5mdW5jdGlvbiBhZ2VIaXN0b2dyYW0oeyBkYXRhU2V0LCBvcHRpb25zIH0pIHtcbiAgY29uc3QgeyBwIH0gPSBkYXRhU2V0O1xuICBjb25zdCB7IHllYXJTdGFydCwgeWVhckVuZCwgY29sb3IgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB2bFxuICAgIC5tYXJrQmFyKHsgb3BhY2l0eTogMC41IH0pXG4gICAgLmRhdGEoXG4gICAgICBwXG4gICAgICAgIC5wYXJhbXMoeyB5ZWFyU3RhcnQ6IHllYXJTdGFydCwgeWVhckVuZDogeWVhckVuZCB9KVxuICAgICAgICAuZmlsdGVyKChkKSA9PiBkLnR5cGUgPT09IFwiU3ViamVjdC1TdXNwZWN0XCIpXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGQpID0+IG9wLnllYXIoZC5kYXRlKSA+PSB5ZWFyU3RhcnQgJiYgb3AueWVhcihkLmRhdGUpIDw9IHllYXJFbmRcbiAgICAgICAgKVxuICAgIClcbiAgICAuZW5jb2RlKFxuICAgICAgdmxcbiAgICAgICAgLngoKVxuICAgICAgICAuZmllbGRRKFwiYWdlXCIpXG4gICAgICAgIC5zY2FsZSh7IGRvbWFpbjogWzAsIDEwMF0gfSlcbiAgICAgICAgLmJpbih7IHN0ZXA6IDUgfSksXG4gICAgICB2bC55KCkuY291bnQoKS50aXRsZShcIk51bWJlciBvZiBQZXJwZXRyYXRvcnNcIiksXG4gICAgICB2bC5jb2xvcigpLnZhbHVlKGNvbG9yKVxuICAgICk7XG59XG5cbmNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICBjb25maWc6IHtcbiAgICAvLyBWZWdhLUxpdGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gIH0sXG4gIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwIGhhbmRsZXJcbiAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgfSxcbiAgdmlldzoge1xuICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICB9LFxufTtcbnZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFnZUhpc3RvZ3JhbTtcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5cbmZ1bmN0aW9uIGd1bkFyZWEoeyBkYXRhU2V0LCBvcHRpb25zIH0pIHtcbiAgY29uc3QgeyBnIH0gPSBkYXRhU2V0O1xuXG4gIHJldHVybiB2bFxuICAgIC5tYXJrQXJlYSh7IG9wYWNpdHk6IDAuOCB9KVxuICAgIC5kYXRhKGcpXG4gICAgLnRyYW5zZm9ybSh2bC5maWx0ZXIoXCJkYXR1bVsnZ3VuJ10gIT0gJ1Vua25vd24nXCIpKVxuICAgIC5lbmNvZGUoXG4gICAgICB2bC54KCkueWVhcm1vbnRoKFwiZGF0ZVwiKSxcbiAgICAgIHZsLnkoKS5jb3VudCgpLnRpdGxlKFwiTnVtYmVyIG9mIGd1bnNcIiksXG4gICAgICB2bFxuICAgICAgICAuY29sb3IoKVxuICAgICAgICAuZmllbGROKFwiZ3VuXCIpXG4gICAgICAgIC5zY2FsZSh7IHNjaGVtZTogXCJjYXRlZ29yeTIwYlwiIH0pXG4gICAgICAgIC50aXRsZShcIkd1biB0eXBlXCIpXG4gICAgKVxuICAgIC5oZWlnaHQoNDAwKVxuICAgIC53aWR0aCg3MDApO1xufVxuXG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBndW5BcmVhO1xuIiwiaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcblxuZnVuY3Rpb24gZ3VuQ291bnRzKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgeWVhclN0YXJ0LCB5ZWFyRW5kIH0gPSBvcHRpb25zO1xuICBjb25zdCB7IGcgfSA9IGRhdGFTZXQ7XG4gIHJldHVybiB2bFxuICAgIC5tYXJrQmFyKHsgb3BhY2l0eTogMC44IH0pXG4gICAgLmRhdGEoZylcbiAgICAudHJhbnNmb3JtKFxuICAgICAgdmwuZmlsdGVyKFxuICAgICAgICBcImRhdHVtWydndW4nXSAhPSAnVW5rbm93bicgJiYgZGF0dW1bJ3llYXInXSA+PSBcIiArXG4gICAgICAgICAgeWVhclN0YXJ0ICtcbiAgICAgICAgICBcIiAmJiBkYXR1bVsneWVhciddIDw9IFwiICtcbiAgICAgICAgICB5ZWFyRW5kXG4gICAgICApXG4gICAgKVxuICAgIC5lbmNvZGUoXG4gICAgICB2bC55KCkuZmllbGROKFwiZ3VuXCIpLnNvcnQodmwuY291bnQoKSksXG4gICAgICB2bC54KCkuY291bnQoKS50aXRsZShcIk51bWJlciBvZiBndW5zXCIpLFxuICAgICAgdmxcbiAgICAgICAgLmNvbG9yKClcbiAgICAgICAgLmZpZWxkTihcImd1blwiKVxuICAgICAgICAuc2NhbGUoeyBzY2hlbWU6IFwiY2F0ZWdvcnkyMGJcIiB9KVxuICAgICAgICAubGVnZW5kKGZhbHNlKVxuICAgICAgICAudGl0bGUoXCJHdW4gdHlwZVwiKVxuICAgICk7XG59XG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBndW5Db3VudHM7XG4iLCJpbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuZnVuY3Rpb24gZ3VuS2lsbENvdW50cyh7IGRhdGFTZXQsIG9wdGlvbnMgfSkge1xuICBjb25zdCB7IHllYXJTdGFydCwgeWVhckVuZCB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyBnIH0gPSBkYXRhU2V0O1xuICByZXR1cm4gdmxcbiAgICAubWFya0Jhcih7IG9wYWNpdHk6IDAuOCB9KVxuICAgIC5kYXRhKGcpXG4gICAgLnRyYW5zZm9ybShcbiAgICAgIHZsLmZpbHRlcihcbiAgICAgICAgXCJkYXR1bVsnZ3VuJ10gIT0gJ1Vua25vd24nICYmIGRhdHVtWyd5ZWFyJ10gPj0gXCIgK1xuICAgICAgICAgIHllYXJTdGFydCArXG4gICAgICAgICAgXCIgJiYgZGF0dW1bJ3llYXInXSA8PSBcIiArXG4gICAgICAgICAgeWVhckVuZFxuICAgICAgKVxuICAgIClcbiAgICAuZW5jb2RlKFxuICAgICAgdmwueSgpLmZpZWxkTihcImd1blwiKS5zb3J0KHZsLm1lYW4oXCJuX2tpbGxlZFwiKSksXG4gICAgICB2bC54KCkubWVhbihcIm5fa2lsbGVkXCIpLnRpdGxlKFwiTWVhbiBraWxsIGNvdW50cyBpbiBhbiBpbmNpZGVudFwiKSxcbiAgICAgIHZsXG4gICAgICAgIC5jb2xvcigpXG4gICAgICAgIC5maWVsZE4oXCJndW5cIilcbiAgICAgICAgLnNjYWxlKHsgc2NoZW1lOiBcImNhdGVnb3J5MjBiXCIgfSlcbiAgICAgICAgLmxlZ2VuZChmYWxzZSlcbiAgICAgICAgLnRpdGxlKFwiR3VuIHR5cGVcIilcbiAgICApO1xufVxuY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gIGNvbmZpZzoge1xuICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgfSxcbiAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICB9LFxuICB2aWV3OiB7XG4gICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gIH0sXG59O1xudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgZ3VuS2lsbENvdW50cztcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5pbXBvcnQgc3RhdGVSYW5raW5nIGZyb20gXCIuL3N0YXRlUmFua2luZ1wiO1xuaW1wb3J0IHBlcnBldHJhdG9yc0J5U3RhdGUgZnJvbSBcIi4vcGVycGV0cmF0b3JzQnlTdGF0ZVwiO1xuXG5mdW5jdGlvbiBtYXAoeyBkYXRhU2V0LCBvcHRpb25zIH0pIHtcbiAgcmV0dXJuIHZsXG4gICAgLmhjb25jYXQoXG4gICAgICBzdGF0ZVJhbmtpbmcoeyBkYXRhU2V0LCBvcHRpb25zIH0pLmhlaWdodCg1MDApLFxuICAgICAgcGVycGV0cmF0b3JzQnlTdGF0ZSh7IGRhdGFTZXQsIG9wdGlvbnMgfSkuaGVpZ2h0KDUwMCkud2lkdGgoNzIwKVxuICAgIClcbiAgICAuY29uZmlnKHsgc2NhbGU6IHsgbWF4U2l6ZTogMTUwMCB9LCB2aWV3OiB7IHN0cm9rZTogbnVsbCB9IH0pO1xufVxuXG5jb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgY29uZmlnOiB7XG4gICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB9LFxuICBpbml0OiAodmlldykgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gIH0sXG4gIHZpZXc6IHtcbiAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgfSxcbn07XG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBtYXA7XG4iLCJpbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuaW1wb3J0IGd1bkNvdW50cyBmcm9tIFwiLi9ndW5Db3VudHNcIjtcbmltcG9ydCBndW5LaWxsQ291bnRzIGZyb20gXCIuL2d1bktpbGxDb3VudHNcIjtcblxuZnVuY3Rpb24gbnVtR3VuQnlUeXBlcyh7IGRhdGFTZXQsIG9wdGlvbnMgfSkge1xuICByZXR1cm4gdmwuaGNvbmNhdChcbiAgICBndW5Db3VudHMoeyBkYXRhU2V0LCBvcHRpb25zIH0pLFxuICAgIGd1bktpbGxDb3VudHMoeyBkYXRhU2V0LCBvcHRpb25zIH0pXG4gICk7XG59XG5cbmNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICBjb25maWc6IHtcbiAgICAvLyBWZWdhLUxpdGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gIH0sXG4gIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwIGhhbmRsZXJcbiAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgfSxcbiAgdmlldzoge1xuICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICB9LFxufTtcbnZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IG51bUd1bkJ5VHlwZXM7XG4iLCJpbXBvcnQgKiBhcyB2ZWdhIGZyb20gXCJ2ZWdhXCI7XG5pbXBvcnQgKiBhcyB2bCBmcm9tIFwidmVnYS1saXRlLWFwaVwiO1xuaW1wb3J0ICogYXMgdmVnYUxpdGUgZnJvbSBcInZlZ2EtbGl0ZVwiO1xuaW1wb3J0ICogYXMgdmVnYVRvb2x0aXAgZnJvbSBcInZlZ2EtdG9vbHRpcFwiO1xuZnVuY3Rpb24gcGVycGV0cmF0b3JzQnlTdGF0ZSh7IGRhdGFTZXQsIG9wdGlvbnMgfSkge1xuICBjb25zdCB7IGZpZWxkLCB5ZWFyU3RhcnQsIHllYXJFbmQsIHNjaGVtZSB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyBwc3QsIHVzYSwgcHBzdCB9ID0gZGF0YVNldDtcbiAgY29uc3QgdGl0bGVzID0ge1xuICAgIG1lYW5fYWdlOiBcIlBlcnBldHJhdG9ycyBtZWFuIGFnZVwiLFxuICAgIHVuZGVyYWdlc19yYXRpbzogW1wiUmF0aW8gb2YgdW5kZXJhZ2UvdG90YWxcIiwgXCJwZXJwZXRyYXRvcnNcIl0sXG4gIH07XG5cbiAgcmV0dXJuIHZsXG4gICAgLmRhdGEocHN0KVxuICAgIC5sYXllcihcbiAgICAgIHZsXG4gICAgICAgIC5tYXJrR2Vvc2hhcGUoeyBmaWxsOiBcIiNkZGRcIiwgc3Ryb2tlOiBcIiNmZmZcIiwgc3Ryb2tlV2lkdGg6IDEgfSlcbiAgICAgICAgLmRhdGEodmwudG9wb2pzb24odXNhKS5mZWF0dXJlKFwic3RhdGVzXCIpKVxuICAgICAgICAudHJhbnNmb3JtKFxuICAgICAgICAgIHZsLmxvb2t1cChcImlkXCIpLmZyb20odmwuZGF0YShwcHN0KS5rZXkoXCJmaXBcIikuZmllbGRzKFwic3RhdGVcIikpXG4gICAgICAgIClcbiAgICAgICAgLmVuY29kZSh2bC50b29sdGlwKFwic3RhdGVcIikpLFxuICAgICAgdmxcbiAgICAgICAgLm1hcmtDaXJjbGUoeyBzdHJva2U6IFwiIzVlNWU1ZVwiIH0pXG4gICAgICAgIC5kYXRhKHBzdClcbiAgICAgICAgLnRyYW5zZm9ybShcbiAgICAgICAgICB2bC5maWx0ZXIoXG4gICAgICAgICAgICAnZGF0dW1bXCJ5ZWFyXCJdID49ICcgKyB5ZWFyU3RhcnQgKyAnICYmIGRhdHVtW1wieWVhclwiXSA8PSAnICsgeWVhckVuZFxuICAgICAgICAgICksXG4gICAgICAgICAgdmxcbiAgICAgICAgICAgIC5ncm91cGJ5KFwic3RhdGVcIilcbiAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgIHZsLm1lYW4oXCJtZWFuX2FnZVwiKS5hcyhcIm1lYW5fYWdlXCIpLFxuICAgICAgICAgICAgICB2bC5tZWFuKFwidW5kZXJhZ2VzX3JhdGlvXCIpLmFzKFwidW5kZXJhZ2VzX3JhdGlvXCIpLFxuICAgICAgICAgICAgICB2bC5tZWFuKFwicGVycGV0cmF0b3JzX3Blcl8xTVwiKS5hcyhcInBlcnBldHJhdG9yc19wZXJfMU1cIiksXG4gICAgICAgICAgICAgIHZsLm1lYW4oXCJsYXRpdHVkZVwiKS5hcyhcImxhdGl0dWRlXCIpLFxuICAgICAgICAgICAgICB2bC5tZWFuKFwibG9uZ2l0dWRlXCIpLmFzKFwibG9uZ2l0dWRlXCIpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmVuY29kZShcbiAgICAgICAgICB2bC5sYXRpdHVkZSgpLmZpZWxkUShcImxhdGl0dWRlXCIpLFxuICAgICAgICAgIHZsLmxvbmdpdHVkZSgpLmZpZWxkUShcImxvbmdpdHVkZVwiKSxcbiAgICAgICAgICB2bFxuICAgICAgICAgICAgLmNvbG9yKClcbiAgICAgICAgICAgIC5tZWFuKGZpZWxkKVxuICAgICAgICAgICAgLmxlZ2VuZCh7IHRpdGxlTGluZUhlaWdodDogMTAgfSlcbiAgICAgICAgICAgIC5zY2FsZSh7IHNjaGVtZTogc2NoZW1lIH0pXG4gICAgICAgICAgICAudGl0bGUodGl0bGVzW2ZpZWxkXSksXG4gICAgICAgICAgdmxcbiAgICAgICAgICAgIC5zaXplKClcbiAgICAgICAgICAgIC5tZWFuKFwicGVycGV0cmF0b3JzX3Blcl8xTVwiKVxuICAgICAgICAgICAgLnRpdGxlKFtcIlBlcnBldHJhdG9ycyBwZXJcIiwgXCIxTSBwb3B1bGF0aW9uXCJdKSxcbiAgICAgICAgICB2bC50b29sdGlwKFtcbiAgICAgICAgICAgIHZsLmZpZWxkTihcInN0YXRlXCIpLFxuICAgICAgICAgICAgdmwuZmllbGRRKGZpZWxkKSxcbiAgICAgICAgICAgIHZsLmZpZWxkUShcInBlcnBldHJhdG9yc19wZXJfMU1cIiksXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgIClcbiAgICAucHJvamVjdCh2bC5wcm9qZWN0aW9uKFwiYWxiZXJzVXNhXCIpKTtcbn1cblxuY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gIGNvbmZpZzoge1xuICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgfSxcbiAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICB9LFxuICB2aWV3OiB7XG4gICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gIH0sXG59O1xudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVycGV0cmF0b3JzQnlTdGF0ZTtcbiIsImltcG9ydCAqIGFzIHZlZ2EgZnJvbSBcInZlZ2FcIjtcbmltcG9ydCAqIGFzIHZsIGZyb20gXCJ2ZWdhLWxpdGUtYXBpXCI7XG5pbXBvcnQgKiBhcyB2ZWdhTGl0ZSBmcm9tIFwidmVnYS1saXRlXCI7XG5pbXBvcnQgKiBhcyB2ZWdhVG9vbHRpcCBmcm9tIFwidmVnYS10b29sdGlwXCI7XG5cbmZ1bmN0aW9uIHBlcnBldHJhdG9yc0J5VGltZSh7IGRhdGFTZXQsIG9wdGlvbnMgfSkge1xuICBjb25zdCB7IGZpZWxkLCBzdGF0ZV9hYmJyLCBjb2xvciB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyBwc3QgfSA9IGRhdGFTZXQ7XG4gIGNvbnN0IHRpdGxlcyA9IHtcbiAgICBtZWFuX2FnZTogXCJQZXJwZXRyYXRvcnMgbWVhbiBhZ2VcIixcbiAgICB1bmRlcmFnZXNfcmF0aW86IFtcIlJhdGlvIG9mIHVuZGVyYWdlL3RvdGFsXCIsIFwicGVycGV0cmF0b3JzXCJdLFxuICB9O1xuXG4gIHJldHVybiB2bFxuICAgIC5sYXllcihcbiAgICAgIHZsXG4gICAgICAgIC5tYXJrTGluZSgpXG4gICAgICAgIC5kYXRhKHBzdClcbiAgICAgICAgLmVuY29kZShcbiAgICAgICAgICB2bC54KCkuZmllbGRPKFwieWVhclwiKSxcbiAgICAgICAgICB2bC55KCkubWVhbihmaWVsZCkudGl0bGUodGl0bGVzW2ZpZWxkXSksXG4gICAgICAgICAgdmwuY29sb3IoKS52YWx1ZShcIm9yYW5nZVwiKVxuICAgICAgICApLFxuICAgICAgdmxcbiAgICAgICAgLm1hcmtMaW5lKClcbiAgICAgICAgLmRhdGEocHN0KVxuICAgICAgICAudHJhbnNmb3JtKFxuICAgICAgICAgIHZsLmZpbHRlcignZGF0dW1bXCJzdGF0ZV9hYmJyXCJdID09ICcgKyAnXCInICsgc3RhdGVfYWJiciArICdcIicpXG4gICAgICAgIClcbiAgICAgICAgLmVuY29kZShcbiAgICAgICAgICB2bC54KCkuZmllbGRPKFwieWVhclwiKSxcbiAgICAgICAgICB2bC55KCkubWVhbihmaWVsZCkudGl0bGUodGl0bGVzW2ZpZWxkXSksXG4gICAgICAgICAgdmwuY29sb3IoKS52YWx1ZShjb2xvcilcbiAgICAgICAgKVxuICAgIClcbiAgICAud2lkdGgoNTAwKTtcbn1cblxuY29uc3QgdmVnYU9wdGlvbnMgPSB7XG4gIGNvbmZpZzoge1xuICAgIC8vIFZlZ2EtTGl0ZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgfSxcbiAgaW5pdDogKHZpZXcpID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHRvb2x0aXAgaGFuZGxlclxuICAgIHZpZXcudG9vbHRpcChuZXcgdmVnYVRvb2x0aXAuSGFuZGxlcigpLmNhbGwpO1xuICB9LFxuICB2aWV3OiB7XG4gICAgcmVuZGVyZXI6IFwiY2FudmFzXCIsXG4gIH0sXG59O1xudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHZlZ2FPcHRpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVycGV0cmF0b3JzQnlUaW1lO1xuIiwiaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcblxuZnVuY3Rpb24gc3RhdGVSYW5raW5nKHsgZGF0YVNldCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgcHN0IH0gPSBkYXRhU2V0O1xuICBjb25zdCB7IGZpZWxkLCB5ZWFyU3RhcnQsIHllYXJFbmQsIHNjaGVtZSB9ID0gb3B0aW9ucztcbiAgcmV0dXJuIHZsXG4gICAgLm1hcmtSZWN0KClcbiAgICAuZGF0YShwc3QpXG4gICAgLnRyYW5zZm9ybShcbiAgICAgIHZsLmZpbHRlcihcbiAgICAgICAgJ2RhdHVtW1wieWVhclwiXSA+PSAnICsgeWVhclN0YXJ0ICsgJyAmJiBkYXR1bVtcInllYXJcIl0gPD0gJyArIHllYXJFbmRcbiAgICAgIClcbiAgICApXG4gICAgLmVuY29kZShcbiAgICAgIHZsXG4gICAgICAgIC55KClcbiAgICAgICAgLmZpZWxkTihcInN0YXRlXCIpXG4gICAgICAgIC5zb3J0KHZsLm1lYW4oZmllbGQpLm9yZGVyKFwiZGVzY2VuZGluZ1wiKSlcbiAgICAgICAgLnRpdGxlKFwiU3RhdGVcIiksXG4gICAgICB2bC5jb2xvcigpLm1lYW4oZmllbGQpLnNjYWxlKHsgc2NoZW1lOiBzY2hlbWUgfSksXG4gICAgICB2bC50b29sdGlwKFt2bC5maWVsZE4oXCJzdGF0ZVwiKSwgdmwubWVhbihmaWVsZCldKVxuICAgICk7XG59XG5cbmNvbnN0IHZlZ2FPcHRpb25zID0ge1xuICBjb25maWc6IHtcbiAgICAvLyBWZWdhLUxpdGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gIH0sXG4gIGluaXQ6ICh2aWV3KSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0b29sdGlwIGhhbmRsZXJcbiAgICB2aWV3LnRvb2x0aXAobmV3IHZlZ2FUb29sdGlwLkhhbmRsZXIoKS5jYWxsKTtcbiAgfSxcbiAgdmlldzoge1xuICAgIHJlbmRlcmVyOiBcImNhbnZhc1wiLFxuICB9LFxufTtcbnZsLnJlZ2lzdGVyKHZlZ2EsIHZlZ2FMaXRlLCB2ZWdhT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlUmFua2luZztcbiJdLCJzb3VyY2VSb290IjoiIn0=