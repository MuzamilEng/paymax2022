(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553,69],{5069:function(a,e,l){"use strict";l.r(e);var s=l(7294),t=(l(1664),s.createElement);e.default=function(){return t(s.Fragment,null,t("footer",{className:"site-footer style-1",id:"footer",style:{backgroundImage:"url(images/background/bg10.png)"}},t("div",{className:"footer-bottom wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s"},t("div",{className:"container"},t("div",{className:"row"},t("div",{className:"col-sm-12 text-center"},t("span",{className:"copyright-text"},"Copyright \xa9 2022"," ",t("a",{href:"https://paymax.ng/",target:"_blank"},"PayMax"),". All rights reserved.")))))))}},7676:function(a,e,l){"use strict";var s=l(7294),t=l(1664),n=s.createElement;e.Z=function(){var a=(0,s.useState)(!1),e=a[0],l=a[1],o=(0,s.useState)("home"),i=o[0],c=o[1];return n(s.Fragment,null,n("header",{className:"site-header header-transparent mo-left",id:"fix-header"},n("div",{className:"sticky-header main-bar-wraper navbar-expand-lg"},n("div",{className:"main-bar clearfix "},n("div",{className:"container clearfix"},n("div",{className:"logo-header mostion logo-dark"},n(t.default,{href:"/"},n("a",null,n("img",{className:"custom-logo-white",src:"images/logo-white.png",alt:""}),n("img",{className:"custom-logo",src:"images/logo.png",alt:""})))),n("button",{className:"navbar-toggler collapsed navicon justify-content-end ".concat(e?"open":""),onClick:function(){return l(!e)}},n("span",null),n("span",null),n("span",null)),n("div",{className:"extra-nav"},n("div",{className:"extra-cell"},n(t.default,{href:"contact-us-1"},n("a",{className:"btn btn-corner gradient btn-primary"},n("i",{className:"fa fa-angle-right m-r10"}),"Get A Quote")))),n("div",{className:"header-nav navbar-collapse collapse justify-content-end ".concat(e?"show":""),id:"navbarNavDropdown"},n("div",{className:"logo-header"},n(t.default,{href:"/"},n("a",null,n("img",{src:"images/logo.png",alt:""})))),n("ul",{className:"nav navbar-nav navbar"},n("li",null,n(t.default,{href:"/"},n("a",null,"Home"))),n("li",{className:"".concat("about"===i?"open":"")},n("a",{onClick:function(){return c("about")}},n("span",null,"Pages"),n("i",{className:"fa fa-chevron-down"})),n("ul",{className:"sub-menu"},n("li",null,n(t.default,{href:"/about-us-1"},n("a",null,"About Us"))),n("li",null,n(t.default,{href:"/faq-1"},n("a",null,"Faq"))),n("li",null,n(t.default,{href:"/pricing-table-1"},n("a",null,"Pricing Table"))),n("li",null,n(t.default,{href:"/team-1"},n("a",null,"Team"))),n("li",null,n(t.default,{href:"/coming-soon"},n("a",null,"Coming Soon"))),n("li",null,n(t.default,{href:"/error-404"},n("a",null,"Error 404"))),n("li",null,n(t.default,{href:"/sitedown"},n("a",null,"Site Down"))))),n("li",{className:"".concat("services"===i?"open":"")},n("a",{onClick:function(){return c("services")}},n("span",null,"Services"),n("i",{className:"fa fa-chevron-down"})),n("ul",{className:"sub-menu"},n("li",null,n(t.default,{href:"/services-1"},n("a",null,"Services"))),n("li",null,n(t.default,{href:"/services-details-1"},n("a",null,"Services Details"))))),n("li",{className:"".concat("blog"===i?"open":"")},n("a",{onClick:function(){return c("blog")}},n("span",null,"Blog"),n("i",{className:"fa fa-chevron-down"})),n("ul",{className:"sub-menu"},n("li",null,n(t.default,{href:"/blog-large-right-sidebar"},n("a",null,"Large Right Sidebar"))),n("li",null,n(t.default,{href:"/blog-details-1"},n("a",null,"Blog Details"))))),n("li",null,n(t.default,{href:"/contact-us-1"},n("a",null,"Contact Us")))),n("div",{className:"dlab-social-icon"},n("ul",null,n(t.default,{href:"https://en-gb.facebook.com/"},n("a",{className:"fa fa-facebook"})),n(t.default,{href:"https://twitter.com/login?lang=en"},n("a",{className:"fa fa-twitter"})),n(t.default,{href:"https://www.linkedin.com/login"},n("a",{className:"fa fa-linkedin"})),n(t.default,{href:"https://www.instagram.com/"},n("a",{className:"fa fa-instagram"}))))))))))}},6071:function(a,e,l){"use strict";var s=l(3848),t=l(9448);e.default=void 0;var n=t(l(7294)),o=l(1689),i=l(2441),c=l(5749),r={};function m(a,e,l,s){if(a&&(0,o.isLocalURL)(e)){a.prefetch(e,l,s).catch((function(a){0}));var t=s&&"undefined"!==typeof s.locale?s.locale:a&&a.locale;r[e+"%"+l+(t?"%"+t:"")]=!0}}var d=function(a){var e=!1!==a.prefetch,l=(0,i.useRouter)(),t=l&&l.asPath||"/",d=n.default.useMemo((function(){var e=(0,o.resolveHref)(t,a.href,!0),l=s(e,2),n=l[0],i=l[1];return{href:n,as:a.as?(0,o.resolveHref)(t,a.as):i||n}}),[t,a.href,a.as]),f=d.href,u=d.as,g=a.children,b=a.replace,p=a.shallow,h=a.scroll,N=a.locale;"string"===typeof g&&(g=n.default.createElement("a",null,g));var w=n.Children.only(g),v=w&&"object"===typeof w&&w.ref,y=(0,c.useIntersection)({rootMargin:"200px"}),k=s(y,2),x=k[0],I=k[1],E=n.default.useCallback((function(a){x(a),v&&("function"===typeof v?v(a):"object"===typeof v&&(v.current=a))}),[v,x]);(0,n.useEffect)((function(){var a=I&&e&&(0,o.isLocalURL)(f),s="undefined"!==typeof N?N:l&&l.locale,t=r[f+"%"+u+(s?"%"+s:"")];a&&!t&&m(l,f,u,{locale:s})}),[u,f,I,N,e,l]);var S={ref:E,onClick:function(a){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(a),a.defaultPrevented||function(a,e,l,s,t,n,i,c){("A"!==a.currentTarget.nodeName||!function(a){var e=a.currentTarget.target;return e&&"_self"!==e||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which}(a)&&(0,o.isLocalURL)(l))&&(a.preventDefault(),null==i&&(i=s.indexOf("#")<0),e[t?"replace":"push"](l,s,{shallow:n,locale:c,scroll:i}))}(a,l,f,u,b,p,h,N)},onMouseEnter:function(a){(0,o.isLocalURL)(f)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(a),m(l,f,u,{priority:!0}))}};if(a.passHref||"a"===w.type&&!("href"in w.props)){var C="undefined"!==typeof N?N:l&&l.locale,D=l&&l.isLocaleDomain&&(0,o.getDomainLocale)(u,C,l&&l.locales,l&&l.domainLocales);S.href=D||(0,o.addBasePath)((0,o.addLocale)(u,C,l&&l.defaultLocale))}return n.default.cloneElement(w,S)};e.default=d},5749:function(a,e,l){"use strict";var s=l(3848);e.__esModule=!0,e.useIntersection=function(a){var e=a.rootMargin,l=a.disabled||!o,c=(0,t.useRef)(),r=(0,t.useState)(!1),m=s(r,2),d=m[0],f=m[1],u=(0,t.useCallback)((function(a){c.current&&(c.current(),c.current=void 0),l||d||a&&a.tagName&&(c.current=function(a,e,l){var s=function(a){var e=a.rootMargin||"",l=i.get(e);if(l)return l;var s=new Map,t=new IntersectionObserver((function(a){a.forEach((function(a){var e=s.get(a.target),l=a.isIntersecting||a.intersectionRatio>0;e&&l&&e(l)}))}),a);return i.set(e,l={id:e,observer:t,elements:s}),l}(l),t=s.id,n=s.observer,o=s.elements;return o.set(a,e),n.observe(a),function(){o.delete(a),n.unobserve(a),0===o.size&&(n.disconnect(),i.delete(t))}}(a,(function(a){return a&&f(a)}),{rootMargin:e}))}),[l,e,d]);return(0,t.useEffect)((function(){if(!o&&!d){var a=(0,n.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,n.cancelIdleCallback)(a)}}}),[d]),[u,d]};var t=l(7294),n=l(8391),o="undefined"!==typeof IntersectionObserver;var i=new Map},737:function(a,e,l){"use strict";l.r(e);var s=l(7294),t=l(1664),n=l(5069),o=l(7676),i=s.createElement;e.default=function(){return i(s.Fragment,null,i(o.Z,null),i("div",{className:"page-content bg-white"},i("div",{className:"dlab-bnr-inr overlay-primary-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg)"}},i("div",{className:"container"},i("div",{className:"dlab-bnr-inr-entry"},i("h1",null,"Our Team"),i("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row"},i("ul",{className:"breadcrumb"},i("li",{className:"breadcrumb-item"},i(t.default,{href:"/"},i("a",null,"Home"))),i("li",{className:"breadcrumb-item active","aria-current":"page"},"Team")))))),i("section",{className:"content-inner",style:{backgroundImage:"url(images/background/bg1.png)"}},i("div",{className:"container"},i("div",{className:"row"},i("div",{className:"col-xl-4 col-md-6 wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.1s"},i("div",{className:"dlab-team style-1 m-b30"},i("div",{className:"dlab-media dlab-img-effect zoom zoom-slow"},i("img",{src:"images/team/pic1.jpg",alt:""})),i("div",{className:"dlab-content"},i("div",{className:"clearfix"},i("h4",{className:"dlab-name"},"Alina Jia"),i("span",{className:"dlab-position"},"Senior Designer")),i("ul",{className:"dlab-social-icon primary-light"},i("li",null,i("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})),i("li",null,i("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})),i("li",null,i("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})))))),i("div",{className:"col-xl-4 col-md-6 wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.2s"},i("div",{className:"dlab-team style-1 m-b30"},i("div",{className:"dlab-media dlab-img-effect zoom zoom-slow"},i("img",{src:"images/team/pic2.jpg",alt:""})),i("div",{className:"dlab-content"},i("div",{className:"clearfix"},i("h4",{className:"dlab-name"},"Suresh Doe"),i("span",{className:"dlab-position"},"Senior Designer")),i("ul",{className:"dlab-social-icon primary-light"},i("li",null,i("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})),i("li",null,i("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})),i("li",null,i("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})))))),i("div",{className:"col-xl-4 col-md-6 wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.3s"},i("div",{className:"dlab-team style-1 m-b30"},i("div",{className:"dlab-media dlab-img-effect zoom zoom-slow"},i("img",{src:"images/team/pic3.jpg",alt:""})),i("div",{className:"dlab-content"},i("div",{className:"clearfix"},i("h4",{className:"dlab-name"},"Domina Li"),i("span",{className:"dlab-position"},"Senior Designer")),i("ul",{className:"dlab-social-icon primary-light"},i("li",null,i("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})),i("li",null,i("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})),i("li",null,i("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})))))),i("div",{className:"col-xl-4 col-md-6 wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.4s"},i("div",{className:"dlab-team style-1 m-b30"},i("div",{className:"dlab-media dlab-img-effect zoom zoom-slow"},i("img",{src:"images/team/pic4.jpg",alt:""})),i("div",{className:"dlab-content"},i("div",{className:"clearfix"},i("h4",{className:"dlab-name"},"Tyler Hardy"),i("span",{className:"dlab-position"},"Senior Designer")),i("ul",{className:"dlab-social-icon primary-light"},i("li",null,i("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})),i("li",null,i("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})),i("li",null,i("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})))))),i("div",{className:"col-xl-4 col-md-6 wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.5s"},i("div",{className:"dlab-team style-1 m-b30"},i("div",{className:"dlab-media dlab-img-effect zoom zoom-slow"},i("img",{src:"images/team/pic5.jpg",alt:""})),i("div",{className:"dlab-content"},i("div",{className:"clearfix"},i("h4",{className:"dlab-name"},"Effie Arnold"),i("span",{className:"dlab-position"},"Senior Designer")),i("ul",{className:"dlab-social-icon primary-light"},i("li",null,i("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})),i("li",null,i("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})),i("li",null,i("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})))))),i("div",{className:"col-xl-4 col-md-6 wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.6s"},i("div",{className:"dlab-team style-1 m-b30"},i("div",{className:"dlab-media dlab-img-effect zoom zoom-slow"},i("img",{src:"images/team/pic6.jpg",alt:""})),i("div",{className:"dlab-content"},i("div",{className:"clearfix"},i("h4",{className:"dlab-name"},"Domina Li"),i("span",{className:"dlab-position"},"Senior Designer")),i("ul",{className:"dlab-social-icon primary-light"},i("li",null,i("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})),i("li",null,i("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})),i("li",null,i("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"}))))))))),i("section",{style:{backgroundImage:"url(images/background/bg5.jpg)",backgroundSize:"cover"}},i("div",{className:"container"},i("div",{className:"row action-box style-1 align-items-center"},i("div",{className:"col-xl-7 col-lg-8 col-md-8 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s"},i("div",{className:"section-head style-1"},i("h6",{className:"sub-title bgl-primary m-b20 text-primary"},"More With Us"),i("h2",{className:"title"},"You Want To Showcase Your Website In Top Join With Us"))),i("div",{className:"col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s"},i(t.default,{href:"/contact-us-1"},i("a",{className:"btn btn-link d-inline-flex align-items-center"},i("i",{className:"fa fa-angle-right m-r10"}),"Join Now"))))))),i(n.default,null))}},8171:function(a,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team-1",function(){return l(737)}])},1664:function(a,e,l){a.exports=l(6071)}},function(a){a.O(0,[888,774,179],(function(){return e=8171,a(a.s=e);var e}));var e=a.O();_N_E=e}]);