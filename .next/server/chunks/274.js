exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ testimonial; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./component/testimonialSlider.js

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
  }, __jsx("p", null, "\u201CI have lost a great deal of money on lending or helping friends due to their inability to deliberately repay me and I regretted helping out, but PayMax has reinvented a way for me to lend and still get all my money without any hazzle. This is a huge relief and am glad for this\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic_2.jpeg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Abel Akandewo"), __jsx("ul", {
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
  }, __jsx("p", null, "\u201CI\u2019m a first-time user of PayMax and am VERY impressed. I signed up in less than 5 minutes, then scheduled Telemedicine appointment. I was diagnosed and had a prescription sent within minutes! I had the visit (virtually) in the privacy of my office. No downtime.\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic_3.jpg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Babagana"), __jsx("span", {
    className: "testimonial-position"
  }, "PLumber", ' '), __jsx("ul", {
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
  }, __jsx("p", null, "\u201CWith five kids at home you can imagine the amount of time spent at doctors\u2019 offices as they spread the flu to each other. I can set up an appointment and never leave home. This service is a lifesaver. With PayMax, I went to work not feeling well and a doctor called, listened, and sent in my prescriptions.\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic_4.jpeg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Stephanie"), __jsx("span", {
    className: "testimonial-position"
  }, "Mum", ' '), __jsx("ul", {
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
  }, __jsx("p", null, "\u201CThe delivery service is seamless, I was so impressed on the level of work behind the application. I don't have to worry about searching for a delivery person for my medication, the app selected the most suitable driver based on proximity and my package was delivered faster than I could imagine. Kudos to PayMax Team\u201D")), __jsx("div", {
    className: "testimonial-detail"
  }, __jsx("div", {
    className: "testimonial-pic"
  }, __jsx("img", {
    src: "images/testimonials/pic_5.jpg",
    alt: ""
  })), __jsx("div", {
    className: "clearfix"
  }, __jsx("strong", {
    className: "testimonial-name"
  }, "Cak Dikin"), __jsx("span", {
    className: "testimonial-position"
  }, "CEO & Founder", ' '), __jsx("ul", {
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

/* harmony default export */ var testimonialSlider = (TestimonialSlider);
;// CONCATENATED MODULE: ./element/testimonial.js

var testimonial_jsx = (external_react_default()).createElement;


function Testimonial() {
  return testimonial_jsx((external_react_default()).Fragment, null, testimonial_jsx("section", {
    className: "content-inner bg-primary",
    style: {
      backgroundImage: 'url(images/background/bg3.png)'
    }
  }, testimonial_jsx("div", {
    className: "px-xl-5 px-md-4 px-3"
  }, testimonial_jsx("div", {
    className: "row testimonials-wraper-1"
  }, testimonial_jsx("div", {
    className: "col-lg-9"
  }, testimonial_jsx(testimonialSlider, null)), testimonial_jsx("div", {
    className: "col-lg-3 wow fadeInRight",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.8s"
  }, testimonial_jsx("div", {
    className: "section-head style-1 text-white p-t15"
  }, testimonial_jsx("h6", {
    className: "sub-title bgl-light m-b20"
  }, "Testimonial"), testimonial_jsx("h2", {
    className: "title m-b10"
  }, "See What Are They Say About Us", ' '), testimonial_jsx("p", null, "Don't take just our word, see the awesome testimonies of some of our numerous users. Join the adventure and enjoy")))))));
}

/* harmony default export */ var testimonial = (Testimonial);

/***/ })

};
;