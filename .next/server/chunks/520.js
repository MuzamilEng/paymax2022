exports.id = 520;
exports.ids = [520,69];
exports.modules = {

/***/ 5069:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function Footer() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("footer", {
    className: "site-footer style-1",
    id: "footer",
    style: {
      backgroundImage: "url(images/background/bg10.png)"
    }
  }, __jsx("div", {
    className: "footer-bottom wow fadeIn",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.2s"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-12 text-center"
  }, __jsx("span", {
    className: "copyright-text"
  }, "Copyright \xA9 2022", " ", __jsx("a", {
    href: "https://paymax.ng/",
    target: "_blank"
  }, "PayMax"), ". All rights reserved.")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ 7676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Header3() {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("home");
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("header", {
    className: "site-header header-transparent mo-left",
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
    className: "custom-logo-white",
    src: "images/logo-white.png",
    alt: ""
  }), __jsx("img", {
    className: "custom-logo",
    src: "images/logo.png",
    alt: ""
  })))), __jsx("button", {
    className: `navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`,
    onClick: () => setShow(!show)
  }, __jsx("span", null), __jsx("span", null), __jsx("span", null)), __jsx("div", {
    className: "extra-nav"
  }, __jsx("div", {
    className: "extra-cell"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "contact-us-1"
  }, __jsx("a", {
    className: "btn btn-corner gradient btn-primary"
  }, __jsx("i", {
    className: "fa fa-angle-right m-r10"
  }), "Get A Quote")))), __jsx("div", {
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
  }, __jsx("a", null, "Home"))), __jsx("li", {
    className: `${open === "about" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("about")
  }, __jsx("span", null, "Pages"), __jsx("i", {
    className: "fa fa-chevron-down"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/about-us-1"
  }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/faq-1"
  }, __jsx("a", null, "Faq"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/pricing-table-1"
  }, __jsx("a", null, "Pricing Table"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/team-1"
  }, __jsx("a", null, "Team"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/coming-soon"
  }, __jsx("a", null, "Coming Soon"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/error-404"
  }, __jsx("a", null, "Error 404"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/sitedown"
  }, __jsx("a", null, "Site Down"))))), __jsx("li", {
    className: `${open === "services" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("services")
  }, __jsx("span", null, "Services"), __jsx("i", {
    className: "fa fa-chevron-down"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-1"
  }, __jsx("a", null, "Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-details-1"
  }, __jsx("a", null, "Services Details"))))), __jsx("li", {
    className: `${open === "blog" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("blog")
  }, __jsx("span", null, "Blog"), __jsx("i", {
    className: "fa fa-chevron-down"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-large-right-sidebar"
  }, __jsx("a", null, "Large Right Sidebar"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, "Blog Details"))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/contact-us-1"
  }, __jsx("a", null, "Contact Us")))), __jsx("div", {
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

/* harmony default export */ __webpack_exports__["Z"] = (Header3);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;