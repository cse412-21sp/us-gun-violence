self["webpackHotUpdate_N_E"]("components_VegaComp_js",{

/***/ "./components/VegaComp.js":
/*!********************************!*\
  !*** ./components/VegaComp.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_yeraf_proj_us_gun_violence_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega */ "./node_modules/vega/build/vega.module.js");
/* harmony import */ var vega_lite_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vega-lite-api */ "./node_modules/vega-lite-api/src/index.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vega-lite */ "./node_modules/vega-lite/build/src/index.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vega-tooltip */ "./node_modules/vega-tooltip/build/vega-tooltip.module.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index */ "./store/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/yeraf/proj/us-gun-violence/components/VegaComp.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_yeraf_proj_us_gun_violence_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Veg = function Veg(props) {
  var _s = $RefreshSig$();

  var Main = react__WEBPACK_IMPORTED_MODULE_1___default().callback(_s(function (_ref) {
    _s();

    var func = _ref.func,
        name = _ref.name,
        width = _ref.width,
        height = _ref.height,
        options = _ref.options;
    var container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var dataSet = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.default)(function (state) {
      return state.dataset;
    });
    var vegaOptions = {
      config: {// Vega-Lite default configuration
      },
      init: function init(view) {
        // initialize tooltip handler
        view.tooltip(new vega_tooltip__WEBPACK_IMPORTED_MODULE_5__.Handler().call);
      },
      view: {
        renderer: "canvas"
      }
    };
    vega_lite_api__WEBPACK_IMPORTED_MODULE_3__.register(vega__WEBPACK_IMPORTED_MODULE_2__, vega_lite__WEBPACK_IMPORTED_MODULE_4__, vegaOptions);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      try {
        func({
          dataSet: dataSet,
          options: options
        }).render().then(function (viewElement) {
          if ( true && container.current && container) {
            container.current.appendChild(viewElement);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }, [container, container.current]);
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      ref: container,
      tw: "rounded-2xl"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 14
    }, _this);
  }, "t7qbgatf0ULOCt8MZ2KRuDcYC60=", false, function () {
    return [_store_index__WEBPACK_IMPORTED_MODULE_6__.default];
  }), [props]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Main, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 10
  }, _this);
};

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZWdhQ29tcC5qcyJdLCJuYW1lcyI6WyJWZWciLCJwcm9wcyIsIk1haW4iLCJSZWFjdCIsImZ1bmMiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiY29udGFpbmVyIiwidXNlUmVmIiwiZGF0YVNldCIsInVzZVN0b3JlIiwic3RhdGUiLCJkYXRhc2V0IiwidmVnYU9wdGlvbnMiLCJjb25maWciLCJpbml0IiwidmlldyIsInRvb2x0aXAiLCJ2ZWdhVG9vbHRpcCIsImNhbGwiLCJyZW5kZXJlciIsInZsIiwidmVnYSIsInZlZ2FMaXRlIiwidXNlRWZmZWN0IiwicmVuZGVyIiwidGhlbiIsInZpZXdFbGVtZW50IiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNyQixNQUFNQyxJQUFJLEdBQUdDLHFEQUFBLElBQ1gsZ0JBQTRDO0FBQUE7O0FBQUEsUUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLFFBQW5DQyxJQUFtQyxRQUFuQ0EsSUFBbUM7QUFBQSxRQUE3QkMsS0FBNkIsUUFBN0JBLEtBQTZCO0FBQUEsUUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLFFBQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMxQyxRQUFNQyxTQUFTLEdBQUdDLDZDQUFNLEVBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxxREFBUSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxhQUFXQSxLQUFLLENBQUNDLE9BQWpCO0FBQUEsS0FBRCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBRztBQUNsQkMsWUFBTSxFQUFFLENBQ047QUFETSxPQURVO0FBSWxCQyxVQUFJLEVBQUUsY0FBQ0MsSUFBRCxFQUFVO0FBQ2Q7QUFDQUEsWUFBSSxDQUFDQyxPQUFMLENBQWEsSUFBSUMsaURBQUosR0FBMEJDLElBQXZDO0FBQ0QsT0FQaUI7QUFRbEJILFVBQUksRUFBRTtBQUNKSSxnQkFBUSxFQUFFO0FBRE47QUFSWSxLQUFwQjtBQVlBQyx1REFBQSxDQUFZQyxpQ0FBWixFQUFrQkMsc0NBQWxCLEVBQTRCVixXQUE1QjtBQUNBVyxvREFBUyxDQUFDLFlBQU07QUFDZCxVQUFJO0FBQ0Z0QixZQUFJLENBQUM7QUFBRU8saUJBQU8sRUFBUEEsT0FBRjtBQUFXSCxpQkFBTyxFQUFQQTtBQUFYLFNBQUQsQ0FBSixDQUNHbUIsTUFESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsV0FBRCxFQUFpQjtBQUNyQixjQUNFLFNBQ0FwQixTQUFTLENBQUNxQixPQURWLElBRUFyQixTQUhGLEVBSUU7QUFDQUEscUJBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JDLFdBQWxCLENBQThCRixXQUE5QjtBQUNEO0FBQ0YsU0FWSDtBQVdELE9BWkQsQ0FZRSxPQUFPRyxHQUFQLEVBQVk7QUFDWkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUNGLEtBaEJRLEVBZ0JOLENBQUN2QixTQUFELEVBQVlBLFNBQVMsQ0FBQ3FCLE9BQXRCLENBaEJNLENBQVQ7QUFrQkEsV0FBTztBQUFLLFNBQUcsRUFBRXJCLFNBQVY7QUFBcUIsUUFBRSxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBcENVO0FBQUEsWUFHT0csaURBSFA7QUFBQSxNQXFDWCxDQUFDWCxLQUFELENBckNXLENBQWI7QUF1Q0EsU0FBTyx1RUFBQyxJQUFELG9CQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBekNEOztLQUFNRCxHO0FBMENOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL2NvbXBvbmVudHNfVmVnYUNvbXBfanMuZGQwZTE2YzJiYWY4ZDcxNzUyZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgdmVnYSBmcm9tIFwidmVnYVwiO1xuaW1wb3J0ICogYXMgdmwgZnJvbSBcInZlZ2EtbGl0ZS1hcGlcIjtcbmltcG9ydCAqIGFzIHZlZ2FMaXRlIGZyb20gXCJ2ZWdhLWxpdGVcIjtcbmltcG9ydCAqIGFzIHZlZ2FUb29sdGlwIGZyb20gXCJ2ZWdhLXRvb2x0aXBcIjtcbmltcG9ydCB1c2VTdG9yZSBmcm9tIFwiLi4vc3RvcmUvaW5kZXhcIjtcblxuY29uc3QgVmVnID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IE1haW4gPSBSZWFjdC5jYWxsYmFjayhcbiAgICAoeyBmdW5jLCBuYW1lLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zIH0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZigpO1xuICAgICAgY29uc3QgZGF0YVNldCA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuZGF0YXNldCk7XG4gICAgICBjb25zdCB2ZWdhT3B0aW9ucyA9IHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgLy8gVmVnYS1MaXRlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgICAgICB9LFxuICAgICAgICBpbml0OiAodmlldykgPT4ge1xuICAgICAgICAgIC8vIGluaXRpYWxpemUgdG9vbHRpcCBoYW5kbGVyXG4gICAgICAgICAgdmlldy50b29sdGlwKG5ldyB2ZWdhVG9vbHRpcC5IYW5kbGVyKCkuY2FsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICByZW5kZXJlcjogXCJjYW52YXNcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICB2bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwgdmVnYU9wdGlvbnMpO1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmdW5jKHsgZGF0YVNldCwgb3B0aW9ucyB9KVxuICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgICAgICAudGhlbigodmlld0VsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jdXJyZW50ICYmXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKHZpZXdFbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0sIFtjb250YWluZXIsIGNvbnRhaW5lci5jdXJyZW50XSk7XG5cbiAgICAgIHJldHVybiA8ZGl2IHJlZj17Y29udGFpbmVyfSB0dz1cInJvdW5kZWQtMnhsXCI+PC9kaXY+O1xuICAgIH0sXG4gICAgW3Byb3BzXVxuICApO1xuICByZXR1cm4gPE1haW4gey4uLnByb3BzfT48L01haW4+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFZlZztcbiJdLCJzb3VyY2VSb290IjoiIn0=