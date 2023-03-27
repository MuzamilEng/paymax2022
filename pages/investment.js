import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from '../layout/header';
import Footer from './../layout/footer';
import Counter from './../element/counter';
import TeamSlider from '../component/teamSlider';
import TestimonialTransport from '../element/testimonial-transport';
import investment from '../element/investment';
import Link from 'next/link';
import Quote from '../element/quote';

function Investment() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Header />
            <div className="page-content bg-white">
                {/* <!-- Banner  --> */}
                <div
                    className="dlab-bnr-inr overlay-primary-light"
                    style={{ backgroundImage: 'url(images/banner/bnr1.jpg)' }}
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
                                    <img
                                        src="images/about/img4.png"
                                        className="move-3"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-b30 wow fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="0.4s"
                            >
                                <div className="section-head style-1 mb-4">
                                    {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
                                        Compare Various Transport service
                                    </h6> */}
                                    <h2 className="title">
                                        Access & Manage investment opportunities
                                        in one place
                                    </h2>
                                </div>
                                <p>
                                    PayMax offers you investment options, with
                                    great returns, across a wide range of asset
                                    classes.You no longer have to manage your
                                    investment on a different platform.
                                </p>
                                <p className="m-b30">
                                    Now you can Pay for your investments in any
                                    currency using your GBP, EUR or USD virtual
                                    wallet which is provided by PayMax. Your
                                    investment is not limited by boundaries!
                                </p>
                                <p></p> Below are main investment categories
                                available:-
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ul className="list-arrow primary">
                                            <li>Stocks.</li>
                                            <li>Real Estate</li>
                                            <li>Fixed Income.</li>
                                        </ul>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <ul className="list-arrow primary">
                                            <li>
                                                View Driver and Transport
                                                Company rating by other users.
                                            </li>
                                            <li>
                                                See Bus Amenities such as A/C,
                                                USB Charging, etc
                                            </li>
                                            <li>
                                                Bus Stops, Routes with Prices.
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Agriculture --> */}

                {/* Stocks Investment  */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div
                                className="col-lg-4 m-b30 wow fadeInRight"
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
                            <div
                                className="col-lg-8 wow fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="0.2s"
                            >
                                <div className="section-head style-1">
                                    <h2 className="title m-b15">
                                        Stocks (Local & International)
                                    </h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white">
                                                <Link href="#">
                                                    <a className="icon-cell text-primary">
                                                        <i className="flaticon-promotion"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b5">
                                                    Nigerian Stock Market
                                                </h4>
                                                <p>
                                                    You can own a piece of the
                                                    best companies in Nigeria
                                                    with as little as N1000. A
                                                    curated list of the top
                                                    leading Nigerian companies
                                                    duly registered & regulated
                                                    by the Nigerian Stock
                                                    exchange.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white">
                                                <Link href="#">
                                                    <a className="icon-cell text-primary">
                                                        <i className="flaticon-idea"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b5">
                                                    International Stock Market
                                                </h4>
                                                <p>
                                                    Investments that help you
                                                    grow. Invest your money in
                                                    high quality assets that
                                                    builds wealth and helps you
                                                    achieve financial goals.
                                                </p>
                                                Holding your investments in a
                                                stable currency, your money
                                                grows more over time and retains
                                                its value better.Invest in
                                                global brands with any amount of
                                                money, no matter the price per
                                                share. Our tiered pricing system
                                                is designed to protect your
                                                invested capital and returns.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real Estate Investment  */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div
                                className="col-lg-8 wow fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="0.2s"
                            >
                                <div className="section-head style-1">
                                    <h2 className="title m-b15">
                                        Real Estates (Local & International)
                                    </h2>
                                </div>
                                <div className="row">
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
                                                <h4 className="dlab-title m-b5">
                                                    Nigerian Real Estate
                                                </h4>
                                                <p>
                                                    Invest confidently. All
                                                    listed investments are
                                                    properly due diligenced and
                                                    highly secured
                                                    opportunities.{' '}
                                                    <p>
                                                        With minimum investments
                                                        starting as low as
                                                        N5,000, investment is no
                                                        longer out of reach.
                                                        Everyone is welcome.
                                                    </p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white">
                                                <Link href="#">
                                                    <a className="icon-cell text-primary">
                                                        <i className="flaticon-line-graph"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-title m-b5">
                                                    International Real Estate
                                                </h4>
                                                <p>
                                                    We invest in our portfolio
                                                    of rented buildings in the
                                                    US and manage your money for
                                                    returns through rent and
                                                    capital appreciation.{' '}
                                                    <p></p>Historical Returns:
                                                    14% Per Annum<br></br>Risk
                                                    Level: Medium
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 m-b30 wow fadeInRight"
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
                {/* Real Estate Investment */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div
                                className="col-lg-4 m-b30 wow fadeInRight"
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
                            <div
                                className="col-lg-8 wow fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="0.2s"
                            >
                                <div className="section-head style-1">
                                    <h2 className="title m-b15">
                                        High Savings Investment
                                    </h2>
                                    <p>
                                        Invest securely and confidently on the
                                        go. Up to 25% returns, Flexible for 1 -
                                        3 - 6 - 12 month duration.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white">
                                                <Link href="#">
                                                    <a className="icon-cell text-primary">
                                                        <i className="flaticon-boost"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="icon-content">
                                                <p>
                                                    PayMax Fixed Returns is for
                                                    you. It is a fixed-income
                                                    dollar-denominated
                                                    investment that gives you up
                                                    to 8% and naira-denominated
                                                    investment upto 25% annual
                                                    returns. It allows you to
                                                    invest your extra cash and
                                                    diversify your overall
                                                    portfolio.<p></p>Invest in
                                                    various industries such as
                                                    fixed income instruments,
                                                    agriculture, transportation,
                                                    etc.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                {/* <!-- Call To Action --> */}
            </div>
            <Footer />
        </>
    );
}

export default Investment;
