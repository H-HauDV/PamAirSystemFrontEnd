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

/***/ "./pages/Management.tsx":
/*!******************************!*\
  !*** ./pages/Management.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Management; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Map */ \"./lib/Map.tsx\");\n/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalBox */ \"./components/ModalBox.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DropDownMenu */ \"./components/DropDownMenu.tsx\");\n/* harmony import */ var _components_LocationList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LocationList */ \"./components/LocationList.tsx\");\n/* harmony import */ var _lib_HaNoiDistrict__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/HaNoiDistrict */ \"./lib/HaNoiDistrict.tsx\");\n/* harmony import */ var _lib_HoChiMinhDistrict__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/HoChiMinhDistrict */ \"./lib/HoChiMinhDistrict.tsx\");\n/* harmony import */ var _lib_VietNamLocationList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/VietNamLocationList */ \"./lib/VietNamLocationList.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar searchArray = function(array, result) {\n    for(var i = 0; i < array.length; i++){\n        if (array[i].includes(result)) {\n            return true;\n        }\n    }\n    return false;\n};\nfunction Management() {\n    _s();\n    var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var dropDownMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), inputState = _useState[0], setInputState = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\",\n        \"\"\n    ]), 2), nameLocationState = _useState1[0], setNameLocationState = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), LoadingOrNot = _useState2[0], setLoadingOrNot = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), dataTable = _useState3[0], setDataTable = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Hourly\"), 2), cityMode = _useState4[0], setCityMode = _useState4[1];\n    var isLoading = null;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inputState != \"\") {\n            searchRef.current.modifyInputValue(inputState);\n            mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n            console.log(searchRef.current.returnInputValue());\n        }\n    }, [\n        inputState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(nameLocationState);\n        setLoadingOrNot(true);\n        var getAPI = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__._)(function() {\n                var res, data;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"http://202.191.58.206/pamair/info\", {\n                                    method: \"POST\",\n                                    headers: {\n                                        \"Content-Type\": \"application/json\"\n                                    },\n                                    body: JSON.stringify({\n                                        district: nameLocationState[0],\n                                        city: nameLocationState[1]\n                                    })\n                                }).then(function(response) {\n                                    console.log(response);\n                                    if (!response.ok) throw new Error(\"\".concat(response.status));\n                                    else return response;\n                                })\n                            ];\n                        case 1:\n                            res = _state.sent();\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setDataTable(data);\n                            setLoadingOrNot(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getAPI() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nameLocationState[0] != \"\") {\n            try {\n                getAPI();\n            } catch (error) {\n                alert(\"Khu vuc hien tai khong co du lieu\");\n            }\n        }\n    }, [\n        nameLocationState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        isLoading = LoadingOrNot;\n    }, [\n        LoadingOrNot\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ref: searchRef,\n                onClick: function() {\n                    var inputVal = searchRef.current.returnInputValue();\n                    if (searchArray(_lib_HaNoiDistrict__WEBPACK_IMPORTED_MODULE_7__.HaNoiDistrict, inputVal)) {\n                        console.log(2);\n                        setNameLocationState([\n                            inputVal,\n                            \"Ha Noi\"\n                        ]);\n                        modalRef.current.displayOnClick();\n                    } else if (searchArray(_lib_HoChiMinhDistrict__WEBPACK_IMPORTED_MODULE_8__.HoChiMinhDistrict, inputVal)) {\n                        console.log(3);\n                        setNameLocationState([\n                            inputVal,\n                            \"Ho Chi Minh\"\n                        ]);\n                        modalRef.current.displayOnClick();\n                    } else if (searchArray(_lib_VietNamLocationList__WEBPACK_IMPORTED_MODULE_9__.VietNamLocationList, inputVal)) {\n                        console.log(4);\n                        setNameLocationState([\n                            inputVal,\n                            inputVal\n                        ]);\n                        modalRef.current.displayOnClick();\n                    } else {\n                        console.log(5);\n                        alert(\"Enter a valid value lat,lng or district city\");\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: function(e) {\n                    setCityMode(e);\n                },\n                ref: dropDownMenuRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    padding: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LocationList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setInputState(e.currentTarget.className)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setNameLocationState(e)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            modalRef.current.displayOnClick();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(),\n                        cityMode: cityMode,\n                        ref: mapRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: dataTable,\n                cityMode: cityMode,\n                Location: nameLocationState[0],\n                loadingOrNot: LoadingOrNot,\n                ref: modalRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Management, \"6okmP6tYIuM8UOEM6NmiWE4qya0=\");\n_c = Management;\nvar _c;\n$RefreshReg$(_c, \"Management\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQjs7Z0RBQU16QyxjQUFjeUMsRUFBRU8sYUFBYSxDQUFDQyxTQUFTOzs7NENBQTdDOzs7Ozs7NEJBQ0Y7NENBRmdCUjs7Ozs7Ozs7O2tDQUlsQiw4REFBQzdELGdEQUFHQTt3QkFDRjBELE9BQU87dUNBQUUsNkVBQU9HLEdBQU07Ozs7NENBQ3BCOztnREFBTXZDLHFCQUFxQnVDOzs7NENBQTNCOzRDQUNBOUMsU0FBU2UsT0FBTyxDQUFDOEIsY0FBYzs7Ozs7OzRCQUNqQzs0Q0FIZ0JDOzs7O3dCQUloQmxDLFVBQVVBO3dCQUNWOEIsS0FBS3hDOzs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNoQiw0REFBUUE7Z0JBQ1B1QyxNQUFNZjtnQkFDTkUsVUFBVUE7Z0JBQ1YyQyxVQUFVakQsaUJBQWlCLENBQUMsRUFBRTtnQkFDOUJrRCxjQUFjaEQ7Z0JBQ2RrQyxLQUFLMUM7Ozs7Ozs7Ozs7OztBQUliLENBQUM7R0FsSHVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYW5hZ2VtZW50LnRzeD8yZTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgbWVtbywgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1hcCwgeyBNYXBIYW5kbGUgfSBmcm9tIFwiLi4vbGliL01hcFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgTW9kYWxCb3gsIHsgTW9kYWxIYW5kbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbEJveFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyLCB7IFNlYXJjaEhhbmRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgRHJvcERvd25NZW51LCB7IGRyb3BEb3duTWVudUhhbmRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Ryb3BEb3duTWVudVwiO1xyXG5pbXBvcnQgTG9jYXRpb25MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xvY2F0aW9uTGlzdFwiO1xyXG5pbXBvcnQgeyBIYU5vaURpc3RyaWN0IH0gZnJvbSBcIi4uL2xpYi9IYU5vaURpc3RyaWN0XCI7XHJcbmltcG9ydCB7IEhvQ2hpTWluaERpc3RyaWN0IH0gZnJvbSBcIi4uL2xpYi9Ib0NoaU1pbmhEaXN0cmljdFwiO1xyXG5pbXBvcnQgeyBWaWV0TmFtTG9jYXRpb25MaXN0IH0gZnJvbSBcIi4uL2xpYi9WaWV0TmFtTG9jYXRpb25MaXN0XCI7XHJcbmNvbnN0IHNlYXJjaEFycmF5ID0gKGFycmF5LCByZXN1bHQpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYXJyYXlbaV0uaW5jbHVkZXMocmVzdWx0KSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50KCkge1xyXG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPE1vZGFsSGFuZGxlPigpO1xyXG4gIGNvbnN0IHNlYXJjaFJlZiA9IHVzZVJlZjxTZWFyY2hIYW5kbGU+KCk7XHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmPE1hcEhhbmRsZT4oKTtcclxuICBjb25zdCBkcm9wRG93bk1lbnVSZWYgPSB1c2VSZWY8ZHJvcERvd25NZW51SGFuZGxlPigpO1xyXG4gIGNvbnN0IFtpbnB1dFN0YXRlLCBzZXRJbnB1dFN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lTG9jYXRpb25TdGF0ZSwgc2V0TmFtZUxvY2F0aW9uU3RhdGVdID0gdXNlU3RhdGUoW1wiXCIsIFwiXCJdKTtcclxuICBjb25zdCBbTG9hZGluZ09yTm90LCBzZXRMb2FkaW5nT3JOb3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RhdGFUYWJsZSwgc2V0RGF0YVRhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaXR5TW9kZSwgc2V0Q2l0eU1vZGVdID0gdXNlU3RhdGUoXCJIb3VybHlcIik7XHJcbiAgbGV0IGlzTG9hZGluZyA9IG51bGw7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbnB1dFN0YXRlICE9IFwiXCIpIHtcclxuICAgICAgc2VhcmNoUmVmLmN1cnJlbnQubW9kaWZ5SW5wdXRWYWx1ZShpbnB1dFN0YXRlKTtcclxuICAgICAgbWFwUmVmLmN1cnJlbnQuc2V0TWFwQ2VudGVyKFxyXG4gICAgICAgIEpTT04ucGFyc2UoXCJbXCIgKyBzZWFyY2hSZWYuY3VycmVudC5yZXR1cm5JbnB1dFZhbHVlKCkgKyBcIl1cIilcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVmLmN1cnJlbnQucmV0dXJuSW5wdXRWYWx1ZSgpKTtcclxuICAgIH1cclxuICB9LCBbaW5wdXRTdGF0ZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lTG9jYXRpb25TdGF0ZSk7XHJcbiAgICBzZXRMb2FkaW5nT3JOb3QodHJ1ZSk7XHJcbiAgICBjb25zdCBnZXRBUEkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzIwMi4xOTEuNTguMjA2L3BhbWFpci9pbmZvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBkaXN0cmljdDogbmFtZUxvY2F0aW9uU3RhdGVbMF0sXHJcbiAgICAgICAgICBjaXR5OiBuYW1lTG9jYXRpb25TdGF0ZVsxXSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICBlbHNlIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXREYXRhVGFibGUoZGF0YSk7XHJcbiAgICAgIHNldExvYWRpbmdPck5vdChmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKG5hbWVMb2NhdGlvblN0YXRlWzBdICE9IFwiXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBnZXRBUEkoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIktodSB2dWMgaGllbiB0YWkga2hvbmcgY28gZHUgbGlldVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtuYW1lTG9jYXRpb25TdGF0ZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc0xvYWRpbmcgPSBMb2FkaW5nT3JOb3Q7XHJcbiAgfSwgW0xvYWRpbmdPck5vdF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgcmVmPXtzZWFyY2hSZWZ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGlucHV0VmFsID0gc2VhcmNoUmVmLmN1cnJlbnQucmV0dXJuSW5wdXRWYWx1ZSgpO1xyXG5cclxuICAgICAgICAgIGlmIChzZWFyY2hBcnJheShIYU5vaURpc3RyaWN0LCBpbnB1dFZhbCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coMik7XHJcbiAgICAgICAgICAgIHNldE5hbWVMb2NhdGlvblN0YXRlKFtpbnB1dFZhbCwgXCJIYSBOb2lcIl0pO1xyXG4gICAgICAgICAgICBtb2RhbFJlZi5jdXJyZW50LmRpc3BsYXlPbkNsaWNrKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaEFycmF5KEhvQ2hpTWluaERpc3RyaWN0LCBpbnB1dFZhbCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coMyk7XHJcbiAgICAgICAgICAgIHNldE5hbWVMb2NhdGlvblN0YXRlKFtpbnB1dFZhbCwgXCJIbyBDaGkgTWluaFwiXSk7XHJcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuZGlzcGxheU9uQ2xpY2soKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoQXJyYXkoVmlldE5hbUxvY2F0aW9uTGlzdCwgaW5wdXRWYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDQpO1xyXG4gICAgICAgICAgICBzZXROYW1lTG9jYXRpb25TdGF0ZShbaW5wdXRWYWwsIGlucHV0VmFsXSk7XHJcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuZGlzcGxheU9uQ2xpY2soKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDUpO1xyXG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgdmFsdWUgbGF0LGxuZyBvciBkaXN0cmljdCBjaXR5XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEcm9wRG93bk1lbnVcclxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0Q2l0eU1vZGUoZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICByZWY9e2Ryb3BEb3duTWVudVJlZn1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExvY2F0aW9uTGlzdFxyXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0SW5wdXRTdGF0ZShlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWFwXHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBzZXROYW1lTG9jYXRpb25TdGF0ZShlKTtcclxuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5kaXNwbGF5T25DbGljaygpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNpdHlNb2RlPXtjaXR5TW9kZX1cclxuICAgICAgICAgIHJlZj17bWFwUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxCb3hcclxuICAgICAgICBkYXRhPXtkYXRhVGFibGV9XHJcbiAgICAgICAgY2l0eU1vZGU9e2NpdHlNb2RlfVxyXG4gICAgICAgIExvY2F0aW9uPXtuYW1lTG9jYXRpb25TdGF0ZVswXX1cclxuICAgICAgICBsb2FkaW5nT3JOb3Q9e0xvYWRpbmdPck5vdH1cclxuICAgICAgICByZWY9e21vZGFsUmVmfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJNYXAiLCJNb2RhbEJveCIsIlNlYXJjaEJhciIsIkRyb3BEb3duTWVudSIsIkxvY2F0aW9uTGlzdCIsIkhhTm9pRGlzdHJpY3QiLCJIb0NoaU1pbmhEaXN0cmljdCIsIlZpZXROYW1Mb2NhdGlvbkxpc3QiLCJzZWFyY2hBcnJheSIsImFycmF5IiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwiTWFuYWdlbWVudCIsIm1vZGFsUmVmIiwic2VhcmNoUmVmIiwibWFwUmVmIiwiZHJvcERvd25NZW51UmVmIiwiaW5wdXRTdGF0ZSIsInNldElucHV0U3RhdGUiLCJuYW1lTG9jYXRpb25TdGF0ZSIsInNldE5hbWVMb2NhdGlvblN0YXRlIiwiTG9hZGluZ09yTm90Iiwic2V0TG9hZGluZ09yTm90IiwiZGF0YVRhYmxlIiwic2V0RGF0YVRhYmxlIiwiY2l0eU1vZGUiLCJzZXRDaXR5TW9kZSIsImlzTG9hZGluZyIsImN1cnJlbnQiLCJtb2RpZnlJbnB1dFZhbHVlIiwic2V0TWFwQ2VudGVyIiwiSlNPTiIsInBhcnNlIiwicmV0dXJuSW5wdXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBUEkiLCJyZXMiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsImRpc3RyaWN0IiwiY2l0eSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJhbGVydCIsImRpdiIsInJlZiIsIm9uQ2xpY2siLCJpbnB1dFZhbCIsImRpc3BsYXlPbkNsaWNrIiwiZSIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwicGFkZGluZyIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc05hbWUiLCJMb2NhdGlvbiIsImxvYWRpbmdPck5vdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Management.tsx\n"));

/***/ })

});