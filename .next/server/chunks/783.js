exports.id = 783;
exports.ids = [783];
exports.modules = {

/***/ 5783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ blog; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./component/blogSlider.js

var __jsx = (external_react_default()).createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function BlogSlider() {
  const {
    0: asd,
    1: setAsd
  } = (0,external_react_.useState)();
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
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
    className: "blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary",
    style: {
      "position": "relative"
    }
  }, __jsx((external_react_slick_default()), _extends({
    ref: c => setAsd(c)
  }, settings), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.2s"
  }, __jsx("div", {
    className: "dlab-blog style-1 bg-white text-center"
  }, __jsx("div", {
    className: "dlab-media"
  }, __jsx("img", {
    src: "images/blog/blog-grid-1/pic1.jpg",
    alt: ""
  })), __jsx("div", {
    className: "dlab-info"
  }, __jsx("h5", {
    className: "dlab-title"
  }, __jsx(next_link.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, "Praesent ut lobortis purus hasellus libero orci, accumsan."))), __jsx("p", {
    className: "m-b0"
  }, "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."), __jsx("div", {
    className: "dlab-meta meta-bottom"
  }, __jsx("ul", null, __jsx("li", {
    className: "post-date"
  }, __jsx("i", {
    className: "flaticon-clock m-r10"
  }), "7 March, 2020"), __jsx("li", {
    className: "post-comment"
  }, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    className: "flaticon-speech-bubble"
  }), __jsx("span", null, "15"))), __jsx("li", {
    className: "post-share"
  }, __jsx("i", {
    className: "flaticon-share"
  }), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    className: "fa fa-facebook",
    href: "https://en-gb.facebook.com/"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-twitter",
    href: "https://twitter.com/login?lang=en"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-linkedin",
    href: "https://www.linkedin.com/login"
  }))))))))), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.4s"
  }, __jsx("div", {
    className: "dlab-blog style-1 bg-white text-center"
  }, __jsx("div", {
    className: "dlab-media"
  }, __jsx(next_link.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, __jsx("img", {
    src: "images/blog/blog-grid-1/pic2.jpg",
    alt: ""
  })))), __jsx("div", {
    className: "dlab-info"
  }, __jsx("h5", {
    className: "dlab-title"
  }, __jsx(next_link.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, "Donec feugiat mollis nisi in dignissim. Morbi lectus."))), __jsx("p", {
    className: "m-b0"
  }, "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."), __jsx("div", {
    className: "dlab-meta meta-bottom"
  }, __jsx("ul", null, __jsx("li", {
    className: "post-date"
  }, __jsx("i", {
    className: "flaticon-clock m-r10"
  }), "7 March, 2020"), __jsx("li", {
    className: "post-comment"
  }, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    className: "flaticon-speech-bubble"
  }), __jsx("span", null, "15"))), __jsx("li", {
    className: "post-share"
  }, __jsx("i", {
    className: "flaticon-share"
  }), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    className: "fa fa-facebook",
    href: "https://en-gb.facebook.com/"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-twitter",
    href: "https://twitter.com/login?lang=en"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-linkedin",
    href: "https://www.linkedin.com/login"
  }))))))))), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.6s"
  }, __jsx("div", {
    className: "dlab-blog style-1 bg-white text-center"
  }, __jsx("div", {
    className: "dlab-media"
  }, __jsx(next_link.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, __jsx("img", {
    src: "images/blog/blog-grid-1/pic3.jpg",
    alt: ""
  })))), __jsx("div", {
    className: "dlab-info"
  }, __jsx("h5", {
    className: "dlab-title"
  }, __jsx(next_link.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, "Quisque sem tortor, convallis in arcu eu, accumsan finibus."))), __jsx("p", {
    className: "m-b0"
  }, "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."), __jsx("div", {
    className: "dlab-meta meta-bottom"
  }, __jsx("ul", null, __jsx("li", {
    className: "post-date"
  }, __jsx("i", {
    className: "flaticon-clock m-r10"
  }), "7 March, 2020"), __jsx("li", {
    className: "post-comment"
  }, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    className: "flaticon-speech-bubble"
  }), __jsx("span", null, "15"))), __jsx("li", {
    className: "post-share"
  }, __jsx("i", {
    className: "flaticon-share"
  }), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    className: "fa fa-facebook",
    href: "https://en-gb.facebook.com/"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-twitter",
    href: "https://twitter.com/login?lang=en"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-linkedin",
    href: "https://www.linkedin.com/login"
  }))))))))), __jsx("div", {
    className: "item wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.6s"
  }, __jsx("div", {
    className: "dlab-blog style-1 bg-white text-center"
  }, __jsx("div", {
    className: "dlab-media"
  }, __jsx(next_link.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, __jsx("img", {
    src: "images/blog/blog-grid-1/pic3.jpg",
    alt: ""
  })))), __jsx("div", {
    className: "dlab-info"
  }, __jsx("h5", {
    className: "dlab-title"
  }, __jsx(next_link.default, {
    href: "/blog-details-1"
  }, __jsx("a", null, "Quisque sem tortor, convallis in arcu eu, accumsan finibus."))), __jsx("p", {
    className: "m-b0"
  }, "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."), __jsx("div", {
    className: "dlab-meta meta-bottom"
  }, __jsx("ul", null, __jsx("li", {
    className: "post-date"
  }, __jsx("i", {
    className: "flaticon-clock m-r10"
  }), "7 March, 2020"), __jsx("li", {
    className: "post-comment"
  }, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    className: "flaticon-speech-bubble"
  }), __jsx("span", null, "15"))), __jsx("li", {
    className: "post-share"
  }, __jsx("i", {
    className: "flaticon-share"
  }), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    className: "fa fa-facebook",
    href: "https://en-gb.facebook.com/"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-twitter",
    href: "https://twitter.com/login?lang=en"
  })), __jsx("li", null, __jsx("a", {
    className: "fa fa-linkedin",
    href: "https://www.linkedin.com/login"
  })))))))))), renderArrows()));
}

/* harmony default export */ var blogSlider = (BlogSlider);
;// CONCATENATED MODULE: ./element/blog.js

var blog_jsx = (external_react_default()).createElement;


function Blog() {
  return blog_jsx((external_react_default()).Fragment, null, blog_jsx("section", {
    className: "content-inner-2",
    style: {
      "backgroundImage": "url(images/background/bg1.png)"
    }
  }, blog_jsx("div", {
    className: "container"
  }, blog_jsx("div", {
    className: "section-head style-1 text-center"
  }, blog_jsx("h6", {
    className: "sub-title bgl-primary m-b20 text-primary"
  }, "Blog"), blog_jsx("h2", {
    className: "title"
  }, "Latest Blog & News")), blog_jsx(blogSlider, null))));
}

/* harmony default export */ var blog = (Blog);

/***/ })

};
;