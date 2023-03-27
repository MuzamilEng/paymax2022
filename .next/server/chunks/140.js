exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 6463:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Header2() {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("home");
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("header", {
    className: "site-header mo-left header-transparent d-none"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "top-bar"
  }, __jsx("div", {
    className: "row d-flex justify-content-between align-items-center"
  }, __jsx("div", {
    className: "dlab-topbar-left"
  }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
    className: "la la-envelope"
  }), " ", "info@example.com"), __jsx("li", null, __jsx("i", {
    className: "la la-phone-volume"
  }), " +91 987-654-3210"))), __jsx("div", {
    className: "dlab-topbar-right"
  }, __jsx("ul", {
    className: "dlab-social-icon"
  }, __jsx("li", null, __jsx("a", {
    className: "fa fa-facebook",
    href: "https://en-gb.facebook.com/"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-instagram",
    href: "https://www.instagram.com/"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-twitter",
    href: "https://twitter.com/login?lang=en"
  }))))))), __jsx("div", {
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
    href: "contact-us-2"
  }, __jsx("a", {
    className: "btn btn-light rounded-xl shadow"
  }, "Get A Quote")))), __jsx("div", {
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
  }, __jsx("li", {
    className: `${open === "home" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("home")
  }, __jsx("span", null, "Home"), __jsx("i", {
    className: "fa fa-chevron-down"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", null, "Home 1"))))), __jsx("li", {
    className: `${open === "about" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("about")
  }, __jsx("span", null, "Pages"), __jsx("i", {
    className: "fa fa-chevron-down"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx("li", {
    className: `${open === "aboutsub1" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("aboutsub1")
  }, "About Us", " ", __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/about-us-1"
  }, __jsx("a", null, "About Us 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/about-us-2"
  }, __jsx("a", null, "About Us 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/about-us-3"
  }, __jsx("a", null, "About Us 3")))), __jsx("li", {
    className: `${open === "aboutsub2" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("aboutsub2")
  }, "Faq", " ", __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/faq-1"
  }, __jsx("a", null, "Faq 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/faq-2"
  }, __jsx("a", null, "Faq 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/faq-3"
  }, __jsx("a", null, "Faq 3")))), __jsx("li", {
    className: `${open === "pricing" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("pricing")
  }, "Pricing Table  ", __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/pricing-table-1"
  }, __jsx("a", null, "Pricing Table 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/pricing-table-2"
  }, __jsx("a", null, "Pricing Table 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/pricing-table-3"
  }, __jsx("a", null, "Pricing Table 3")))), __jsx("li", {
    className: `${open === "team" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("team")
  }, "Team", __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/team-1"
  }, __jsx("a", null, "Team 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/team-2"
  }, __jsx("a", null, "Team 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/team-3"
  }, __jsx("a", null, "Team 3")))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
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
  }, __jsx("li", {
    className: `${open === "service" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("service")
  }, "Services ", __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-1"
  }, __jsx("a", null, "Services 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-2"
  }, __jsx("a", null, "Services 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-3"
  }, __jsx("a", null, "Services 3")))), __jsx("li", {
    className: `${open === "servicedetails" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("servicedetails")
  }, "Services Details ", __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-details-1"
  }, __jsx("a", null, "Services Details 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-details-2"
  }, __jsx("a", null, "Services Details 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/services-details-3"
  }, __jsx("a", null, "Services Details 3")))))), __jsx("li", {
    className: `${open === "blog" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("blog")
  }, __jsx("span", null, "Blog"), __jsx("i", {
    className: "fa fa-chevron-down"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-grid-2"
  }, __jsx("a", null, "Blog Grid 2"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-large-left-sidebar"
  }, __jsx("a", null, "Large Left Sidebar"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-large-right-sidebar"
  }, __jsx("a", null, "Large Right Sidebar"))), __jsx("li", {
    className: `${open === "blogdetail" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("blogdetail")
  }, "Blog Details ", __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, "Blog Details 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-details-2"
  }, __jsx("a", null, "Blog Details 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-details-3"
  }, __jsx("a", null, "Blog Details 3")))))), __jsx("li", {
    className: `${open === "contact" ? "open" : ""}`
  }, __jsx("a", {
    onClick: () => setOpen("contact")
  }, __jsx("span", null, "Contact Us"), __jsx("i", {
    className: "fa fa-chevron-down"
  })), __jsx("ul", {
    className: "sub-menu"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/contact-us-1"
  }, __jsx("a", null, "Contact Us 1"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/contact-us-2"
  }, __jsx("a", null, "Contact Us 2"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/contact-us-3"
  }, __jsx("a", null, "Contact Us 3")))))), __jsx("div", {
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

/* harmony default export */ __webpack_exports__["Z"] = (Header2);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;