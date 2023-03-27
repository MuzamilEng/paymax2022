exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 9643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4289);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function onChange(value) {
  console.log("Captcha value:", value);
}

function Quote() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("section", {
    className: "content-inner",
    style: {
      "backgroundImage": "url(images/background/bg1.png)"
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-xl-6 col-lg-7 m-b30 wow fadeInLeft",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.2s"
  }, __jsx("div", {
    className: "section-head style-1"
  }, __jsx("h6", {
    className: "sub-title bgl-primary m-b20 text-primary"
  }, "Contact Us"), __jsx("h2", {
    className: "title"
  }, "We Love To Help Great Companies To Enlarge Their Revenues.")), __jsx("form", {
    className: "dlab-form dzForm",
    method: "POST",
    action: "script/contact.php"
  }, __jsx("div", {
    className: "dzFormMsg"
  }), __jsx("input", {
    type: "hidden",
    className: "form-control",
    name: "dzToDo",
    value: "Contact"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "input-group-prepend"
  }, __jsx("span", {
    className: "input-group-text"
  }, __jsx("i", {
    className: "la la-user"
  }))), __jsx("input", {
    name: "dzName",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "First Name"
  }))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "input-group-prepend"
  }, __jsx("span", {
    className: "input-group-text"
  }, __jsx("i", {
    className: "la la-user"
  }))), __jsx("input", {
    name: "dzOther[last_name]",
    type: "text",
    className: "form-control",
    required: true,
    placeholder: "Last Name"
  }))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "input-group-prepend"
  }, __jsx("span", {
    className: "input-group-text"
  }, __jsx("i", {
    className: "la la-envelope"
  }))), __jsx("input", {
    name: "dzEmail",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Email Address"
  }))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "input-group-prepend"
  }, __jsx("span", {
    className: "input-group-text"
  }, __jsx("i", {
    className: "la la-phone"
  }))), __jsx("input", {
    name: "dzOther[phone]",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Phone No."
  }))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "input-group-prepend"
  }, __jsx("span", {
    className: "input-group-text"
  }, __jsx("i", {
    className: "la la-file-alt"
  }))), __jsx("input", {
    name: "dzOther[project_title]",
    type: "text",
    className: "form-control",
    required: true,
    placeholder: "Project Title"
  }))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "input-group-prepend"
  }, __jsx("span", {
    className: "input-group-text"
  }, __jsx("i", {
    className: "la la-list"
  }))), __jsx("select", {
    name: "dzOther[choose_service]",
    className: "form-control",
    required: true
  }, __jsx("option", {
    selected: true
  }, "Choose Service"), __jsx("option", {
    value: "1"
  }, "Web Development"), __jsx("option", {
    value: "2"
  }, "Web Design"), __jsx("option", {
    value: "3"
  }, "Strategy & Research")))), __jsx("div", {
    className: "col-sm-12"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "input-group-prepend"
  }, __jsx("span", {
    className: "input-group-text"
  }, __jsx("i", {
    className: "la la-sms"
  }))), __jsx("textarea", {
    name: "dzMessage",
    required: true,
    className: "form-control",
    placeholder: "Message"
  }))), __jsx("div", {
    className: "col-sm-12"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("div", {
    className: "g-recaptcha",
    "data-sitekey": "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
    "data-callback": "verifyRecaptchaCallback",
    "data-expired-callback": "expiredRecaptchaCallback"
  }), __jsx("input", {
    className: "form-control d-none",
    style: {
      "display": "none"
    },
    "data-recaptcha": "true",
    required: true,
    "data-error": "Please complete the Captcha"
  }))), __jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1___default()), {
    sitekey: "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",
    onChange: onChange
  }), __jsx("div", {
    className: "col-sm-12 mt-2"
  }, __jsx("button", {
    name: "submit",
    type: "submit",
    value: "Submit",
    className: "btn btn-link d-inline-flex align-items-center"
  }, __jsx("i", {
    className: "fa fa-angle-right m-r10"
  }), "Submit Now"))))), __jsx("div", {
    className: "col-xl-6 col-lg-5 m-b30 wow fadeInRight",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.4s"
  }, __jsx("div", {
    className: "dlab-media cf-r-img"
  }, __jsx("img", {
    src: "images/about/img2.png",
    className: "move-1",
    alt: ""
  })))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (Quote);

/***/ })

};
;