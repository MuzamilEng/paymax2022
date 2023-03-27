import { useState } from "react";
import ModalVideo from "react-modal-video";
import Header from "../layout/header";
import Footer from "./../layout/footer";
import Counter from "./../element/counter";
import TeamSlider from "../component/teamSlider";
import TestimonialFinance from "../element/testimonial-finance";
import Finance from "../element/finance";
import Link from "next/link";
import Quote from "../element/quote";

function AboutUs1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-light"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              {/* <h1>About us 1</h1> */}
              {/* <!-- Breadcrumb Row --> */}
              {/* <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
                </ul>
              </nav> */}
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dz-media">
                  <img src="images/about/img4.png" className="move-3" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="section-head style-1 mb-4">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    Everything you need to take care of your business
                  </h6>
                  <h2 className="title"> Free Business Accounting</h2>
                </div>
                <p>
                  Simple accounting software that makes you even smarter. PayMax
                  Business Cloud empowers small businesses. Free yourself and
                  get onboard with clever, easy-to-use accounting features,
                  built for Africa.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>
                        Create professional invoices, send automatic payment
                        reminders, and accept online payments
                      </li>
                      <li> Easily manage cash flow .</li>
                      <li>Make tax time a breeze.</li>
                      <li>Unlimited income and expense tracking.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Track sales tax on income and expenses.</li>
                      <li>
                        Add unlimited partners, collaborators or accountants.
                      </li>
                      <li>
                        Fully functional double entry system. Generate financial
                        statements for year-end.
                      </li>
                      <li>Manage receivables and payables</li>
                      <li>Import bank feeds automatically & reconcile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Doctor --> */}
        <Finance />
        {/* <!-- About Us --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
                    How does it Work
                  </h6> */}
                  <h2 className="title m-b15">
                    Easy, free and intuitive software
                  </h2>
                  <p>
                    After creating your account, everything's set up so you can
                    get started right away. Access it anywhere, any time. Your
                    data is always available, and it’s backed up for extra peace
                    of mind.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <Link href="#">
                          <a className="icon-cell text-primary">
                            <i className="flaticon-chat"></i>
                          </a>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">Business Accounting</h4>
                        <p>
                          A-well-crafted FREE suites of business accounting for
                          your back office needs. Everything, with nothing else.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <Link href="#">
                          <a className="icon-cell text-primary">
                            <i className="flaticon-bullhorn"></i>
                          </a>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">Reports</h4>
                        <p>
                          Get the full picture of your cash flow with wage and
                          tax payment reporting
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="video-bx style-3">
                  <img src="images/video/pic3.jpg" alt="" />
                  <div className="video-btn">
                    <a
                      href="#"
                      className="popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="UpolBSznWp0"
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Team --> */}
        {/* <section className="content-inner">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
              <h2 className="title">Our Best Expertise</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <TeamSlider />
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Testimonials --> */}
        <TestimonialFinance />
        {/* <!-- Get A Quote --> */}
        {/* <Quote /> */}

        {/* <!-- Call To Action --> */}
        {/* <section
          style={{
            backgroundImage: "url(images/background/bg5.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    More With Us
                  </h6>
                  <h2 className="title">
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link href="/contact-us-1">
                  <a className="btn btn-link d-inline-flex align-items-center">
                    <i className="fa fa-angle-right m-r10"></i>Join Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
}

export default AboutUs1;
