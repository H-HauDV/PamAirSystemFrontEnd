"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.tsx\");\n/* harmony import */ var _public_style_App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/style/App.css */ \"./public/style/App.css\");\n/* harmony import */ var _public_style_App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_style_App_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Management_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Management.tsx */ \"./pages/Management.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Management\"), 2), pageRoute = _useState[0], setPageRoute = _useState[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onClick: function(e) {\n                        console.log(e);\n                        setPageRoute(\"TestAPI\");\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Management_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"0J+aPuji/6wud25DuFSaRQeGx+k=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTREO0FBRXhCO0FBQ0g7QUFJUztBQUUxQyxTQUFTRyxNQUFNOztJQUNiLElBQWtDSCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsbUJBQXBDSSxZQUEyQkosY0FBaEJLLGVBQWdCTDtJQUNsQyxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7OzhCQUNDLDhEQUFDTCx1REFBR0E7b0JBQ0ZPLFNBQVMsU0FBQ0MsR0FBTTt3QkFDZEMsUUFBUUMsR0FBRyxDQUFDRjt3QkFDWkosYUFBYTtvQkFDZjs7Ozs7OzhCQUVGLDhEQUFDSCx1REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkI7R0FmU0M7S0FBQUE7QUFpQlQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIG1lbW8sIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuLi9saWIvTWFwXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBcIi4uL3B1YmxpYy9zdHlsZS9BcHAuY3NzXCI7XHJcbmltcG9ydCBNb2RhbEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbEJveFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gXCIuLi9jb21wb25lbnRzL0Ryb3BEb3duTWVudVwiO1xyXG5pbXBvcnQgTWFuYWdlbWVudCBmcm9tIFwiLi9NYW5hZ2VtZW50LnRzeFwiO1xyXG5pbXBvcnQgVGVzdEFQSSBmcm9tIFwiLi9UZXN0QVBJXCI7XHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbcGFnZVJvdXRlLCBzZXRQYWdlUm91dGVdID0gdXNlU3RhdGUoXCJNYW5hZ2VtZW50XCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICBzZXRQYWdlUm91dGUoXCJUZXN0QVBJXCIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxNYW5hZ2VtZW50IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJOYXYiLCJNYW5hZ2VtZW50IiwiQXBwIiwicGFnZVJvdXRlIiwic2V0UGFnZVJvdXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});