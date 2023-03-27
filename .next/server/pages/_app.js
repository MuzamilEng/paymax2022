(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "use-scroll-position"
var external_use_scroll_position_namespaceObject = require("use-scroll-position");;
var external_use_scroll_position_default = /*#__PURE__*/__webpack_require__.n(external_use_scroll_position_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js

var __jsx = (external_react_default()).createElement;











function MyApp({
  Component,
  pageProps
}) {
  const {
    0: toggle1,
    1: setToggle1
  } = (0,external_react_.useState)(false);
  const {
    0: body_,
    1: setbody_
  } = (0,external_react_.useState)();
  const {
    0: header,
    1: setHeader
  } = (0,external_react_.useState)("fixed");
  const {
    0: header_,
    1: setHeader_
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  let scrollPosition = external_use_scroll_position_default()();
  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return __jsx((external_react_default()).Fragment, null, __jsx((head_default()), null, __jsx("title", null, "PayMax - Payments & Much More"), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/favicon.png"
  })), __jsx("div", {
    className: "page-wraper"
  }, __jsx(Component, pageProps)), __jsx("a", {
    href: "https://themeforest.net/cart/configure_before_adding/32950742/?license=regular;",
    target: "_blank",
    className: "bt-buy-now theme-btn"
  }, __jsx("i", {
    className: "ti-shopping-cart"
  }), __jsx("span", null, "Buy Now")), __jsx("a", {
    href: "https://support.w3itexperts.com",
    target: "_blank",
    className: "bt-support-now theme-btn"
  }, __jsx("i", {
    className: "ti-headphone-alt"
  }), __jsx("span", null, "Support")), __jsx("a", {
    href: "#top"
  }, __jsx("button", {
    className: "scroltop icon-up",
    type: "button",
    style: {
      display: "inline-block"
    }
  }, __jsx("i", {
    className: "fa fa-arrow-up"
  }))));
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7149));
module.exports = __webpack_exports__;

})();