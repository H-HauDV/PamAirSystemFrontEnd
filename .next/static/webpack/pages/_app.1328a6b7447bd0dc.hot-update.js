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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Management; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Map */ \"./lib/Map.tsx\");\n/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalBox */ \"./components/ModalBox.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DropDownMenu */ \"./components/DropDownMenu.tsx\");\n/* harmony import */ var _components_LocationList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LocationList */ \"./components/LocationList.tsx\");\n/* harmony import */ var _lib_HaNoiDistrict__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/HaNoiDistrict */ \"./lib/HaNoiDistrict.tsx\");\n/* harmony import */ var _lib_HoChiMinhDistrict__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/HoChiMinhDistrict */ \"./lib/HoChiMinhDistrict.tsx\");\n/* harmony import */ var _lib_VietNamLocationList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/VietNamLocationList */ \"./lib/VietNamLocationList.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar searchArray = function(array, result) {\n    for(var i = 0; i < array.length; i++){\n        if (array[i].includes(result)) {\n            return true;\n        }\n    }\n    return false;\n};\nfunction Management() {\n    _s();\n    var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var dropDownMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), inputState = _useState[0], setInputState = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\",\n        \"\"\n    ]), 2), nameLocationState = _useState1[0], setNameLocationState = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), LoadingOrNot = _useState2[0], setLoadingOrNot = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), dataTable = _useState3[0], setDataTable = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Hourly\"), 2), cityMode = _useState4[0], setCityMode = _useState4[1];\n    var isLoading = null;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inputState != \"\") {\n            searchRef.current.modifyInputValue(inputState);\n            mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n            console.log(searchRef.current.returnInputValue());\n        }\n    }, [\n        inputState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(nameLocationState);\n        setLoadingOrNot(true);\n        var getAPI = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__._)(function() {\n                var res, data;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"http://202.191.58.206/pamair/info\", {\n                                    method: \"POST\",\n                                    headers: {\n                                        \"Content-Type\": \"application/json\"\n                                    },\n                                    body: JSON.stringify({\n                                        district: nameLocationState[0],\n                                        city: nameLocationState[1]\n                                    })\n                                }).then(function(response) {\n                                    if (!response.ok) throw new Error(\"\".concat(response.status));\n                                    else return response;\n                                })\n                            ];\n                        case 1:\n                            res = _state.sent();\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setDataTable(data);\n                            setLoadingOrNot(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getAPI() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nameLocationState[0] != \"\") {\n            try {\n                getAPI();\n            } catch (error) {\n                alert(\"Khu vuc hien tai khong co du lieu\");\n            }\n        }\n    }, [\n        nameLocationState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        isLoading = LoadingOrNot;\n    }, [\n        LoadingOrNot\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ref: searchRef,\n                onClick: function() {\n                    var inputVal = searchRef.current.returnInputValue();\n                    if (searchArray(_lib_HaNoiDistrict__WEBPACK_IMPORTED_MODULE_7__.HaNoiDistrict, inputVal)) {\n                        console.log(2);\n                        setNameLocationState([\n                            inputVal,\n                            \"Ha Noi\"\n                        ]);\n                        modalRef.current.displayOnClick();\n                    } else if (searchArray(_lib_HoChiMinhDistrict__WEBPACK_IMPORTED_MODULE_8__.HoChiMinhDistrict, inputVal)) {\n                        console.log(3);\n                        setNameLocationState([\n                            inputVal,\n                            \"Ho Chi Minh\"\n                        ]);\n                        modalRef.current.displayOnClick();\n                    } else if (searchArray(_lib_VietNamLocationList__WEBPACK_IMPORTED_MODULE_9__.VietNamLocationList, inputVal)) {\n                        console.log(4);\n                        setNameLocationState([\n                            inputVal,\n                            inputVal\n                        ]);\n                        modalRef.current.displayOnClick();\n                    } else {\n                        console.log(5);\n                        alert(\"Enter a valid value lat,lng or district city\");\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: function(e) {\n                    setCityMode(e);\n                },\n                ref: dropDownMenuRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    padding: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LocationList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setInputState(e.currentTarget.className)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_11__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_12__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setNameLocationState(e)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            modalRef.current.displayOnClick();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(),\n                        cityMode: cityMode,\n                        ref: mapRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: dataTable,\n                cityMode: cityMode,\n                Location: nameLocationState[0],\n                loadingOrNot: LoadingOrNot,\n                ref: modalRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\Pam-air-admin-front-end\\\\pages\\\\Management.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Management, \"6okmP6tYIuM8UOEM6NmiWE4qya0=\");\n_c = Management;\nvar _c;\n$RefreshReg$(_c, \"Management\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxhQUFhLENBQUNDLFNBQVM7Ozs0Q0FBN0M7Ozs7Ozs0QkFDRjs0Q0FGZ0JSOzs7Ozs7Ozs7a0NBSWxCLDhEQUFDN0QsZ0RBQUdBO3dCQUNGMEQsT0FBTzt1Q0FBRSw2RUFBT0csR0FBTTs7Ozs0Q0FDcEI7O2dEQUFNdkMscUJBQXFCdUM7Ozs0Q0FBM0I7NENBQ0E5QyxTQUFTZSxPQUFPLENBQUM4QixjQUFjOzs7Ozs7NEJBQ2pDOzRDQUhnQkM7Ozs7d0JBSWhCbEMsVUFBVUE7d0JBQ1Y4QixLQUFLeEM7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ2hCLDREQUFRQTtnQkFDUHVDLE1BQU1mO2dCQUNORSxVQUFVQTtnQkFDVjJDLFVBQVVqRCxpQkFBaUIsQ0FBQyxFQUFFO2dCQUM5QmtELGNBQWNoRDtnQkFDZGtDLEtBQUsxQzs7Ozs7Ozs7Ozs7O0FBSWIsQ0FBQztHQWpIdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01hbmFnZW1lbnQudHN4PzJlOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBtZW1vLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFwLCB7IE1hcEhhbmRsZSB9IGZyb20gXCIuLi9saWIvTWFwXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBNb2RhbEJveCwgeyBNb2RhbEhhbmRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsQm94XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIsIHsgU2VhcmNoSGFuZGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBEcm9wRG93bk1lbnUsIHsgZHJvcERvd25NZW51SGFuZGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRHJvcERvd25NZW51XCI7XHJcbmltcG9ydCBMb2NhdGlvbkxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9jYXRpb25MaXN0XCI7XHJcbmltcG9ydCB7IEhhTm9pRGlzdHJpY3QgfSBmcm9tIFwiLi4vbGliL0hhTm9pRGlzdHJpY3RcIjtcclxuaW1wb3J0IHsgSG9DaGlNaW5oRGlzdHJpY3QgfSBmcm9tIFwiLi4vbGliL0hvQ2hpTWluaERpc3RyaWN0XCI7XHJcbmltcG9ydCB7IFZpZXROYW1Mb2NhdGlvbkxpc3QgfSBmcm9tIFwiLi4vbGliL1ZpZXROYW1Mb2NhdGlvbkxpc3RcIjtcclxuY29uc3Qgc2VhcmNoQXJyYXkgPSAoYXJyYXksIHJlc3VsdCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChhcnJheVtpXS5pbmNsdWRlcyhyZXN1bHQpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnQoKSB7XHJcbiAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8TW9kYWxIYW5kbGU+KCk7XHJcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlUmVmPFNlYXJjaEhhbmRsZT4oKTtcclxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWY8TWFwSGFuZGxlPigpO1xyXG4gIGNvbnN0IGRyb3BEb3duTWVudVJlZiA9IHVzZVJlZjxkcm9wRG93bk1lbnVIYW5kbGU+KCk7XHJcbiAgY29uc3QgW2lucHV0U3RhdGUsIHNldElucHV0U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25hbWVMb2NhdGlvblN0YXRlLCBzZXROYW1lTG9jYXRpb25TdGF0ZV0gPSB1c2VTdGF0ZShbXCJcIiwgXCJcIl0pO1xyXG4gIGNvbnN0IFtMb2FkaW5nT3JOb3QsIHNldExvYWRpbmdPck5vdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGF0YVRhYmxlLCBzZXREYXRhVGFibGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NpdHlNb2RlLCBzZXRDaXR5TW9kZV0gPSB1c2VTdGF0ZShcIkhvdXJseVwiKTtcclxuICBsZXQgaXNMb2FkaW5nID0gbnVsbDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0U3RhdGUgIT0gXCJcIikge1xyXG4gICAgICBzZWFyY2hSZWYuY3VycmVudC5tb2RpZnlJbnB1dFZhbHVlKGlucHV0U3RhdGUpO1xyXG4gICAgICBtYXBSZWYuY3VycmVudC5zZXRNYXBDZW50ZXIoXHJcbiAgICAgICAgSlNPTi5wYXJzZShcIltcIiArIHNlYXJjaFJlZi5jdXJyZW50LnJldHVybklucHV0VmFsdWUoKSArIFwiXVwiKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hSZWYuY3VycmVudC5yZXR1cm5JbnB1dFZhbHVlKCkpO1xyXG4gICAgfVxyXG4gIH0sIFtpbnB1dFN0YXRlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVMb2NhdGlvblN0YXRlKTtcclxuICAgIHNldExvYWRpbmdPck5vdCh0cnVlKTtcclxuICAgIGNvbnN0IGdldEFQSSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMjAyLjE5MS41OC4yMDYvcGFtYWlyL2luZm9cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGRpc3RyaWN0OiBuYW1lTG9jYXRpb25TdGF0ZVswXSxcclxuICAgICAgICAgIGNpdHk6IG5hbWVMb2NhdGlvblN0YXRlWzFdLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0RGF0YVRhYmxlKGRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nT3JOb3QoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGlmIChuYW1lTG9jYXRpb25TdGF0ZVswXSAhPSBcIlwiKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZ2V0QVBJKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJLaHUgdnVjIGhpZW4gdGFpIGtob25nIGNvIGR1IGxpZXVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbbmFtZUxvY2F0aW9uU3RhdGVdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNMb2FkaW5nID0gTG9hZGluZ09yTm90O1xyXG4gIH0sIFtMb2FkaW5nT3JOb3RdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgIHJlZj17c2VhcmNoUmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGxldCBpbnB1dFZhbCA9IHNlYXJjaFJlZi5jdXJyZW50LnJldHVybklucHV0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2VhcmNoQXJyYXkoSGFOb2lEaXN0cmljdCwgaW5wdXRWYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xyXG4gICAgICAgICAgICBzZXROYW1lTG9jYXRpb25TdGF0ZShbaW5wdXRWYWwsIFwiSGEgTm9pXCJdKTtcclxuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5kaXNwbGF5T25DbGljaygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzZWFyY2hBcnJheShIb0NoaU1pbmhEaXN0cmljdCwgaW5wdXRWYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDMpO1xyXG4gICAgICAgICAgICBzZXROYW1lTG9jYXRpb25TdGF0ZShbaW5wdXRWYWwsIFwiSG8gQ2hpIE1pbmhcIl0pO1xyXG4gICAgICAgICAgICBtb2RhbFJlZi5jdXJyZW50LmRpc3BsYXlPbkNsaWNrKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaEFycmF5KFZpZXROYW1Mb2NhdGlvbkxpc3QsIGlucHV0VmFsKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyg0KTtcclxuICAgICAgICAgICAgc2V0TmFtZUxvY2F0aW9uU3RhdGUoW2lucHV0VmFsLCBpbnB1dFZhbF0pO1xyXG4gICAgICAgICAgICBtb2RhbFJlZi5jdXJyZW50LmRpc3BsYXlPbkNsaWNrKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyg1KTtcclxuICAgICAgICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIHZhbHVlIGxhdCxsbmcgb3IgZGlzdHJpY3QgY2l0eVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8RHJvcERvd25NZW51XHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIHNldENpdHlNb2RlKGUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcmVmPXtkcm9wRG93bk1lbnVSZWZ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMb2NhdGlvbkxpc3RcclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldElucHV0U3RhdGUoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1hcFxyXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0TmFtZUxvY2F0aW9uU3RhdGUoZSk7XHJcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuZGlzcGxheU9uQ2xpY2soKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjaXR5TW9kZT17Y2l0eU1vZGV9XHJcbiAgICAgICAgICByZWY9e21hcFJlZn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsQm94XHJcbiAgICAgICAgZGF0YT17ZGF0YVRhYmxlfVxyXG4gICAgICAgIGNpdHlNb2RlPXtjaXR5TW9kZX1cclxuICAgICAgICBMb2NhdGlvbj17bmFtZUxvY2F0aW9uU3RhdGVbMF19XHJcbiAgICAgICAgbG9hZGluZ09yTm90PXtMb2FkaW5nT3JOb3R9XHJcbiAgICAgICAgcmVmPXttb2RhbFJlZn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTWFwIiwiTW9kYWxCb3giLCJTZWFyY2hCYXIiLCJEcm9wRG93bk1lbnUiLCJMb2NhdGlvbkxpc3QiLCJIYU5vaURpc3RyaWN0IiwiSG9DaGlNaW5oRGlzdHJpY3QiLCJWaWV0TmFtTG9jYXRpb25MaXN0Iiwic2VhcmNoQXJyYXkiLCJhcnJheSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIk1hbmFnZW1lbnQiLCJtb2RhbFJlZiIsInNlYXJjaFJlZiIsIm1hcFJlZiIsImRyb3BEb3duTWVudVJlZiIsImlucHV0U3RhdGUiLCJzZXRJbnB1dFN0YXRlIiwibmFtZUxvY2F0aW9uU3RhdGUiLCJzZXROYW1lTG9jYXRpb25TdGF0ZSIsIkxvYWRpbmdPck5vdCIsInNldExvYWRpbmdPck5vdCIsImRhdGFUYWJsZSIsInNldERhdGFUYWJsZSIsImNpdHlNb2RlIiwic2V0Q2l0eU1vZGUiLCJpc0xvYWRpbmciLCJjdXJyZW50IiwibW9kaWZ5SW5wdXRWYWx1ZSIsInNldE1hcENlbnRlciIsIkpTT04iLCJwYXJzZSIsInJldHVybklucHV0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QVBJIiwicmVzIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJzdHJpbmdpZnkiLCJkaXN0cmljdCIsImNpdHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJyZWYiLCJvbkNsaWNrIiwiaW5wdXRWYWwiLCJkaXNwbGF5T25DbGljayIsImUiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsInBhZGRpbmciLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NOYW1lIiwiTG9jYXRpb24iLCJsb2FkaW5nT3JOb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Management.tsx\n"));

/***/ })

});