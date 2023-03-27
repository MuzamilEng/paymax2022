import { useState } from 'react';
import Slider from 'react-slick';

function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false,
                },
            },
        ],
    };
    const renderArrows = () => {
        return (
            <div className="owl-nav">
                <div className="owl-prev" onClick={() => asd.slickPrev()}>
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="owl-next" onClick={() => asd.slickNext()}>
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
                <Slider ref={(c) => setAsd(c)} {...settings}>
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.2s"
                    >
                        <div className="testimonial-1">
                            <div className="testimonial-text">
                                <p>
                                    “I have lost a great deal of money on
                                    lending or helping friends due to their
                                    inability to deliberately repay me and I
                                    regretted helping out, but PayMax has
                                    reinvented a way for me to lend and still
                                    get all my money without any hazzle. This is
                                    a huge relief and am glad for this”
                                </p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img
                                        src="images/testimonials/pic_2.jpeg"
                                        alt=""
                                    />
                                </div>
                                <div className="clearfix">
                                    <strong className="testimonial-name">
                                        Abel Akandewo
                                    </strong>
                                    {/* <span className="testimonial-position">
                                        CEO & Founder{' '}
                                    </span> */}
                                    <ul className="star-rating">
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.4s"
                    >
                        <div className="testimonial-1">
                            <div className="testimonial-text">
                                <p>
                                    “I’m a first-time user of PayMax and am VERY
                                    impressed. I signed up in less than 5
                                    minutes, then scheduled Telemedicine
                                    appointment. I was diagnosed and had a
                                    prescription sent within minutes! I had the
                                    visit (virtually) in the privacy of my
                                    office. No downtime.”
                                </p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img
                                        src="images/testimonials/pic_3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="clearfix">
                                    <strong className="testimonial-name">
                                        Babagana
                                    </strong>
                                    <span className="testimonial-position">
                                        PLumber{' '}
                                    </span>
                                    <ul className="star-rating">
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.6s"
                    >
                        <div className="testimonial-1">
                            <div className="testimonial-text">
                                <p>
                                    “With five kids at home you can imagine the
                                    amount of time spent at doctors’ offices as
                                    they spread the flu to each other. I can set
                                    up an appointment and never leave home. This
                                    service is a lifesaver. With PayMax, I went
                                    to work not feeling well and a doctor
                                    called, listened, and sent in my
                                    prescriptions.”
                                </p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img
                                        src="images/testimonials/pic_4.jpeg"
                                        alt=""
                                    />
                                </div>
                                <div className="clearfix">
                                    <strong className="testimonial-name">
                                        Stephanie
                                    </strong>
                                    <span className="testimonial-position">
                                        Mum{' '}
                                    </span>
                                    <ul className="star-rating">
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.6s"
                    >
                        <div className="testimonial-1">
                            <div className="testimonial-text">
                                <p>
                                    “The delivery service is seamless, I was so
                                    impressed on the level of work behind the
                                    application. I don't have to worry about
                                    searching for a delivery person for my
                                    medication, the app selected the most
                                    suitable driver based on proximity and my
                                    package was delivered faster than I could
                                    imagine. Kudos to PayMax Team”
                                </p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img
                                        src="images/testimonials/pic_5.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="clearfix">
                                    <strong className="testimonial-name">
                                        Cak Dikin
                                    </strong>
                                    <span className="testimonial-position">
                                        CEO & Founder{' '}
                                    </span>
                                    <ul className="star-rating">
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star text-warning"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;
