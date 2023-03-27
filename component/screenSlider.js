import Slider from "react-slick";

function screenSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1609630663/paymax/Campaigns/uhs3ctw5un8hfad9mw7b.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1609631681/paymax/Campaigns/e9y7zbtblrxngljiig1m.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645399774/paymax/finance/yjf6ih6kjzl952mfmnhu.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645399775/paymax/finance/uixgrpg1x5urmts7tsgu.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-purple3.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light3.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-purple4.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light4.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-purple5.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light5.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-purple6.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light6.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-purple6.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light6.png"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </>
  );
}

export default screenSlider;
