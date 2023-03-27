exports.id = 280;
exports.ids = [280,69];
exports.modules = {

/***/ 7656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ testimonial_delivery; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./component/testimonialDeliverySlider.js

var __jsx = (external_react_default()).createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function TestimonialSlider() {
  const {
    0: asd,
    1: setAsd
  } = (0,external_react_.useState)();
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
      breakpoint: 1320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }]
  };

  const renderArrows = () => {
    return __jsx("div", {
      className: "owl-nav"
    }, __jsx("div", {
      className: "owl-prev",
      onClick: () => asd.slickPrev()
    }, __jsx("i", {
      className: "fa fa-arrow-left"
    })), __jsx("div", {
      className: "owl-next",
      onClick: () => asd.slickNext()
    }, __jsx("i", {
      className: "fa fa-arrow-right"
    })));
  };

  return __jsx((external_react_default()).Fragment, null, __jsx("div", {
    className: "testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center"
  }, __jsx((external_react_slick_default()), _extends({
    ref: c => setAsd(c)
  }, settings), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.2s"
  }, __jsx("div", {
    className: "testimonial-1"
  }, __jsx("div", {
    className: "testimonial-text"
  }, __jsx("p", null, "\u201CA key benefit of our partnership with PayMax is that I am now able to focus on our product quality. I do not have to worry about the details of taking the ordered items to any of my customers because PayMax has reliably managed that segment of our business.\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic3.jpg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Cak Dikin"), __jsx("span", {
    className: "testimonial-position"
  }, "CEO & Founder "), __jsx("ul", {
    className: "star-rating"
  }, __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  }))))))), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.4s"
  }, __jsx("div", {
    className: "testimonial-1"
  }, __jsx("div", {
    className: "testimonial-text"
  }, __jsx("p", null, "\u201CAenean massa diam, sollicitudin non dui ut, facilisis viverra libero. Nulla facilisi. Nunc sed purus erat. Praesent placerat dictum libero, eu varius nulla vulputate non\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic3.jpg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Lora Price"), __jsx("span", {
    className: "testimonial-position"
  }, "CEO & Founder "), __jsx("ul", {
    className: "star-rating"
  }, __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  }))))))), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.6s"
  }, __jsx("div", {
    className: "testimonial-1"
  }, __jsx("div", {
    className: "testimonial-text"
  }, __jsx("p", null, "\u201CAenean massa diam, sollicitudin non dui ut, facilisis viverra libero. Nulla facilisi. Nunc sed purus erat. Praesent placerat dictum libero, eu varius nulla vulputate non\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic3.jpg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Cak Dikin"), __jsx("span", {
    className: "testimonial-position"
  }, "CEO & Founder "), __jsx("ul", {
    className: "star-rating"
  }, __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  }))))))), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.6s"
  }, __jsx("div", {
    className: "testimonial-1"
  }, __jsx("div", {
    className: "testimonial-text"
  }, __jsx("p", null, "\u201CAenean massa diam, sollicitudin non dui ut, facilisis viverra libero. Nulla facilisi. Nunc sed purus erat. Praesent placerat dictum libero, eu varius nulla vulputate non\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic3.jpg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Cak Dikin"), __jsx("span", {
    className: "testimonial-position"
  }, "CEO & Founder "), __jsx("ul", {
    className: "star-rating"
  }, __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })), __jsx("li", null, __jsx("i", {
    className: "fa fa-star text-warning"
  })))))))), renderArrows()));
}

/* harmony default export */ var testimonialDeliverySlider = (TestimonialSlider);
;// CONCATENATED MODULE: ./element/testimonial-delivery.js

var testimonial_delivery_jsx = (external_react_default()).createElement;


function Testimonial() {
  return testimonial_delivery_jsx((external_react_default()).Fragment, null, testimonial_delivery_jsx("section", {
    className: "content-inner bg-primary",
    style: {
      backgroundImage: "url(images/background/bg3.png)"
    }
  }, testimonial_delivery_jsx("div", {
    className: "px-xl-5 px-md-4 px-3"
  }, testimonial_delivery_jsx("div", {
    className: "row testimonials-wraper-1"
  }, testimonial_delivery_jsx("div", {
    className: "col-lg-9"
  }, testimonial_delivery_jsx(testimonialDeliverySlider, null)), testimonial_delivery_jsx("div", {
    className: "col-lg-3 wow fadeInRight",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.8s"
  }, testimonial_delivery_jsx("div", {
    className: "section-head style-1 text-white p-t15"
  }, testimonial_delivery_jsx("h6", {
    className: "sub-title bgl-light m-b20"
  }, "Delivery Testimonial"), testimonial_delivery_jsx("h2", {
    className: "title m-b10"
  }, "See What Are They Say About Us "), testimonial_delivery_jsx("p", null, "Fusce vitae sapien eu mauris semper faucibus eget tristique lorem.")))))));
}

/* harmony default export */ var testimonial_delivery = (Testimonial);

/***/ }),

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

/***/ })

};
;