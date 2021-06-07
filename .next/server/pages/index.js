(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\asus\\Desktop\\todolist\\pages\\index.js";


const Index = () => {
  const {
    0: input,
    1: setInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: todoList,
    1: setTodolist
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodolist([input, ...todoList]);
  };

  const handleDelete = todo => {
    const filteredlist = todoList.filter(todoitem => {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        value: input,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        disabled: input === "",
        onClick: handleSubmit,
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: todoList.map((todo, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [todo, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: e => {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 51
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 28
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90b2RvbGlzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkluZGV4IiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwidG9kb0xpc3QiLCJzZXRUb2RvbGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsImZpbHRlcmVkbGlzdCIsImZpbHRlciIsInRvZG9pdGVtIiwiaW5kZXhPZiIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7O0FBQ0EsUUFBTUcsWUFBWSxHQUFJQyxDQUFELElBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTixZQUFRLENBQUNLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDSCxHQUhEOztBQUlBLFFBQU1DLFlBQVksR0FBSUosQ0FBRCxJQUFLO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUgsZUFBVyxDQUFDLENBQUNKLEtBQUQsRUFBUSxHQUFHRyxRQUFYLENBQUQsQ0FBWDtBQUVILEdBTEQ7O0FBTUEsUUFBTVEsWUFBWSxHQUFJQyxJQUFELElBQVU7QUFFM0IsVUFBTUMsWUFBWSxHQUFHVixRQUFRLENBQUNXLE1BQVQsQ0FBZ0JDLFFBQVEsSUFBSTtBQUM5QyxhQUNDWixRQUFRLENBQUNhLE9BQVQsQ0FBaUJELFFBQWpCLE1BQStCWixRQUFRLENBQUNhLE9BQVQsQ0FBaUJKLElBQWpCLENBRGhDO0FBR0YsS0FKb0IsQ0FBckI7QUFLQVIsZUFBVyxDQUFDUyxZQUFELENBQVg7QUFDSCxHQVJEOztBQVNBLHNCQUNJO0FBQUEsNEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZUFFRztBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFYixLQUExQjtBQUFpQyxnQkFBUSxFQUFFSztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBUSxnQkFBUSxFQUFFTCxLQUFLLEtBQUksRUFBM0I7QUFBK0IsZUFBTyxFQUFFVSxZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkgsZUFPRztBQUFBLGdCQUVRUCxRQUFRLENBQUNjLEdBQVQsQ0FBYSxDQUFDTCxJQUFELEVBQU1NLEtBQU4sS0FBYztBQUN2Qiw0QkFDSTtBQUFBLHFCQUFpQk4sSUFBakIsb0JBQXVCO0FBQVEsbUJBQU8sRUFBR04sQ0FBRCxJQUFLO0FBQ3pDQSxlQUFDLENBQUNDLGNBQUY7QUFDQUksMEJBQVksQ0FBQ0MsSUFBRCxDQUFaO0FBQ0gsYUFIc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXZCO0FBQUEsV0FBU00sS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBTUgsT0FQRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFzQkgsQ0E1Q0Q7O0FBOENBLCtEQUFlbkIsS0FBZixFOzs7Ozs7Ozs7OztBQ2hEQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb2xpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKSAgICAgICAgXHJcbiAgICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICBzZXRUb2RvbGlzdChbaW5wdXQsIC4uLnRvZG9MaXN0XSkgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJlZGxpc3QgPSB0b2RvTGlzdC5maWx0ZXIodG9kb2l0ZW0gPT4ge1xyXG4gICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgdG9kb0xpc3QuaW5kZXhPZih0b2RvaXRlbSkgIT09IHRvZG9MaXN0LmluZGV4T2YodG9kbylcclxuICAgICAgICAgICApIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0VG9kb2xpc3QoZmlsdGVyZWRsaXN0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8aDE+VG9kbyBMaXN0PC9oMT4gXHJcbiAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aW5wdXQ9PT0gXCJcIn0gb25DbGljaz17aGFuZGxlU3VibWl0fT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubWFwKCh0b2RvLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9Pnt0b2RvfSA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==