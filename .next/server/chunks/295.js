exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 2555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Header() {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("home");
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("header", {
    className: "site-header header-transparent text-black mo-left",
    id: "fix-header"
  }, __jsx("div", {
    className: "sticky-header main-bar-wraper navbar-expand-lg"
  }, __jsx("div", {
    className: "main-bar clearfix "
  }, __jsx("div", {
    className: "container clearfix"
  }, __jsx("div", {
    className: "logo-header mostion logo-dark"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "images/logo1.png",
    alt: ""
  })))), __jsx("button", {
    className: `navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`,
    onClick: () => setShow(!show)
  }, __jsx("span", null), __jsx("span", null), __jsx("span", null)), __jsx("div", {
    className: `header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`,
    id: "navbarNavDropdown"
  }, __jsx("div", {
    className: "logo-header"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "images/logo.png",
    alt: ""
  })))), __jsx("ul", {
    className: "nav navbar-nav navbar"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", null, "Service Portal")))), __jsx("div", {
    className: "dlab-social-icon"
  }, __jsx("ul", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "https://en-gb.facebook.com/"
  }, __jsx("a", {
    className: "fa fa-facebook"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "https://twitter.com/login?lang=en"
  }, __jsx("a", {
    className: "fa fa-twitter"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "https://www.linkedin.com/login"
  }, __jsx("a", {
    className: "fa fa-linkedin"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "https://www.instagram.com/"
  }, __jsx("a", {
    className: "fa fa-instagram"
  }))))))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (Header);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;