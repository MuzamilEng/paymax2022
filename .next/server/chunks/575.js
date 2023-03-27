exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 9575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ counter; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(1577);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(4253);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./component/counterup.js

var __jsx = (external_react_default()).createElement;



function Counterup({
  count
}) {
  return __jsx((external_react_default()).Fragment, null, __jsx((external_react_countup_default()), {
    end: count,
    redraw: true
  }, ({
    countUpRef,
    start
  }) => __jsx((external_react_visibility_sensor_default()), {
    onChange: start,
    delayedCall: true
  }, __jsx("span", {
    ref: countUpRef
  }, "count"))));
}

/* harmony default export */ var counterup = (Counterup);
;// CONCATENATED MODULE: ./element/counter.js

var counter_jsx = (external_react_default()).createElement;


function Counter() {
  return counter_jsx((external_react_default()).Fragment, null, counter_jsx("section", {
    className: "content-inner bg-primary",
    style: {
      "backgroundImage": "url(images/background/bg3.png)",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "cover"
    }
  }, counter_jsx("div", {
    className: "container"
  }, counter_jsx("div", {
    className: "row"
  }, counter_jsx("div", {
    className: "col-lg-3 col-sm-6 wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.2s"
  }, counter_jsx("div", {
    className: "icon-bx-wraper style-4 text-center"
  }, counter_jsx("div", {
    className: "icon-bx-sm radius bg-green shadow-green m-b20"
  }, counter_jsx("a", {
    href: "#",
    className: "icon-cell"
  }, counter_jsx("i", {
    className: "flaticon-smile"
  }))), counter_jsx("div", {
    className: "icon-content"
  }, counter_jsx("span", {
    className: "title"
  }, "Satisfied Clients"), counter_jsx("h2", {
    className: "counter m-b0 text-primary"
  }, counter_jsx(counterup, {
    count: 9875
  }))))), counter_jsx("div", {
    className: "col-lg-3 col-sm-6 wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.4s"
  }, counter_jsx("div", {
    className: "icon-bx-wraper style-4 text-center m-tb30"
  }, counter_jsx("div", {
    className: "icon-bx-sm radius bg-yellow shadow-yellow m-b20"
  }, counter_jsx("a", {
    href: "#",
    className: "icon-cell"
  }, counter_jsx("i", {
    className: "flaticon-line-graph"
  }))), counter_jsx("div", {
    className: "icon-content"
  }, counter_jsx("span", {
    className: "title"
  }, "Project Completed"), counter_jsx("h2", {
    className: "counter m-b0 text-primary"
  }, counter_jsx(counterup, {
    count: 8765
  }))))), counter_jsx("div", {
    className: "col-lg-3 col-sm-6 wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.6s"
  }, counter_jsx("div", {
    className: "icon-bx-wraper style-4 text-center"
  }, counter_jsx("div", {
    className: "icon-bx-sm radius bg-blue shadow-blue m-b20"
  }, counter_jsx("a", {
    href: "#",
    className: "icon-cell"
  }, counter_jsx("i", {
    className: "flaticon-startup"
  }))), counter_jsx("div", {
    className: "icon-content"
  }, counter_jsx("span", {
    className: "title"
  }, "Project Lunched"), counter_jsx("h2", {
    className: "counter m-b0 text-primary"
  }, counter_jsx(counterup, {
    count: 7894
  }))))), counter_jsx("div", {
    className: "col-lg-3 col-sm-6 wow fadeInUp",
    "data-wow-duration": "2s",
    "data-wow-delay": "0.8s"
  }, counter_jsx("div", {
    className: "icon-bx-wraper style-4 text-center m-tb30"
  }, counter_jsx("div", {
    className: "icon-bx-sm radius bg-red shadow-red m-b20"
  }, counter_jsx("a", {
    href: "#",
    className: "icon-cell"
  }, counter_jsx("i", {
    className: "flaticon-confetti"
  }))), counter_jsx("div", {
    className: "icon-content"
  }, counter_jsx("span", {
    className: "title"
  }, "Years Completed"), counter_jsx("h2", {
    className: "counter m-b0 text-primary"
  }, counter_jsx(counterup, {
    count: 65
  })))))))));
}

/* harmony default export */ var counter = (Counter);

/***/ })

};
;