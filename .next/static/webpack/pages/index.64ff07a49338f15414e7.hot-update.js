self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_asus_Desktop_todolist_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\asus\\Desktop\\todolist\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var Index = function Index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      todoList = _useState2[0],
      setTodolist = _useState2[1];

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setTodolist([input].concat((0,C_Users_asus_Desktop_todolist_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(todoList)));
  };

  var handleDelete = function handleDelete(todo) {
    var filteredlist = todoList.filter(function (todoitem) {
      return todoList.indexOf(todoitem) !== todoList.indexOf(todo);
    });
    setTodolist(filteredlist);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Todo List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        value: true,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        disabled: input === "",
        onClick: handleSubmit,
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 16
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: todoList.map(function (todo, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [todo, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick(e) {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 51
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Index, "pLZsEFE7uIs0aSWYdTHn39m1soU=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJ0b2RvTGlzdCIsInNldFRvZG9saXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwiZmlsdGVyZWRsaXN0IiwiZmlsdGVyIiwidG9kb2l0ZW0iLCJpbmRleE9mIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQywrQ0FBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFBQSxtQkFFZ0JGLCtDQUFRLENBQUMsRUFBRCxDQUZ4QjtBQUFBLE1BRVRHLFFBRlM7QUFBQSxNQUVDQyxXQUZEOztBQUdoQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTCxZQUFRLENBQUNJLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDSCxHQUhEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLENBQUQsRUFBSztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUFILGVBQVcsRUFBRUgsS0FBRix5SUFBWUUsUUFBWixHQUFYO0FBRUgsR0FMRDs7QUFNQSxNQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFFM0IsUUFBTUMsWUFBWSxHQUFHVixRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBQUMsUUFBUSxFQUFJO0FBQzlDLGFBQ0NaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkQsUUFBakIsTUFBK0JaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkosSUFBakIsQ0FEaEM7QUFHRixLQUpvQixDQUFyQjtBQUtBUixlQUFXLENBQUNTLFlBQUQsQ0FBWDtBQUNILEdBUkQ7O0FBU0Esc0JBQ0k7QUFBQSw0QkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILGVBRUc7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGFBQUssTUFBeEI7QUFBeUIsZ0JBQVEsRUFBRVI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBUSxnQkFBUSxFQUFFSixLQUFLLEtBQUksRUFBM0I7QUFBK0IsZUFBTyxFQUFFUyxZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZILGVBT0c7QUFBQSxnQkFFUVAsUUFBUSxDQUFDYyxHQUFULENBQWEsVUFBQ0wsSUFBRCxFQUFNTSxLQUFOLEVBQWM7QUFDdkIsNEJBQ0k7QUFBQSxxQkFBaUJOLElBQWpCLG9CQUF1QjtBQUFRLG1CQUFPLEVBQUUsaUJBQUNOLENBQUQsRUFBSztBQUN6Q0EsZUFBQyxDQUFDQyxjQUFGO0FBQ0FJLDBCQUFZLENBQUNDLElBQUQsQ0FBWjtBQUNILGFBSHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF2QjtBQUFBLFdBQVNNLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQU1ILE9BUEQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0E1Q0Q7O0dBQU1uQixLOztLQUFBQSxLO0FBOENOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0ZmYwN2E0OTMzOGYxNTQxNGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9saXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCkgICAgICAgIFxyXG4gICAgICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VG9kb2xpc3QoW2lucHV0LCAuLi50b2RvTGlzdF0pICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKHRvZG8pID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9pdGVtID0+IHtcclxuICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIHRvZG9MaXN0LmluZGV4T2YodG9kb2l0ZW0pICE9PSB0b2RvTGlzdC5pbmRleE9mKHRvZG8pXHJcbiAgICAgICAgICAgKSBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRvZG9saXN0KGZpbHRlcmVkbGlzdClcclxuICAgIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPGgxPlRvZG8gTGlzdDwvaDE+IFxyXG4gICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpbnB1dD09PSBcIlwifSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5tYXAoKHRvZG8saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e3RvZG99IDxidXR0b24gb25DbGljaz17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9