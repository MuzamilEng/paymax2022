import { useState } from "react";
import Slider from "react-slick";

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
                  PayMax helped tremendously with cash flow..We’ve collected on
                  our accounts receivable at a higher percentage than we ever
                  had before.”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="testimonial-pic">
                  <img
                    src="https://res.cloudinary.com/dev-staunty007/image/upload/v1647302116/paymax/testimonials/brqa5cdk7xqkon09ahn8.jpg"
                    alt=""
                  />
                </div>
                <div className="clearfix">
                  <strong className="testimonial-name">Cak Dikin</strong>
                  <span className="testimonial-position">CEO & Founder </span>
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
                  “This is by far the best app that has helped me with my small
                  business. It has made accounting, invoicing, and tracking
                  payments a breeze! I really love it! ”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="testimonial-pic">
                  <img
                    src="https://res.cloudinary.com/dev-staunty007/image/upload/v1647302116/paymax/testimonials/grpr4xivru9gkjgllxwe.jpg"
                    alt=""
                  />
                </div>
                <div className="clearfix">
                  <strong className="testimonial-name">Lora Price</strong>
                  <span className="testimonial-position">CEO & Founder </span>
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
                  “I never studied accounting, but I found this software to be
                  very user friendly. I was able to figure it out in a short
                  period of time. PayMax, I love you! ”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="testimonial-pic">
                  <img
                    src="https://res.cloudinary.com/dev-staunty007/image/upload/v1647302116/paymax/testimonials/sbgyvnkrmyexqzysoeyi.webp"
                    alt=""
                  />
                </div>
                <div className="clearfix">
                  <strong className="testimonial-name">Dikin Finite</strong>
                  <span className="testimonial-position">CEO </span>
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
                  “After trying multiple platforms, PayMax proves to surpass all
                  expectations. They make bookkeeping a breeze. it has been
                  crucial to my business growth. ”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="testimonial-pic">
                  <img
                    src="https://res.cloudinary.com/dev-staunty007/image/upload/v1647302116/paymax/testimonials/hmoai42gizvgvgeitnez.jpg"
                    alt=""
                  />
                </div>
                <div className="clearfix">
                  <strong className="testimonial-name">Majik Fashion</strong>
                  <span className="testimonial-position">CEO & Founder </span>
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
