import Slider from "react-slick";

function ClientSlider() {
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
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1656019504/paymax/icons/mcl42xreml01uhsumgsx.png"
              alt="Bills Payment made easy for all"
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1656021475/paymax/icons/ebhmzgz8wbhswpwv1t1i.png"
              alt="Tax computation free of charge"
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645338943/paymax/icons/ni4feofjbkgbcace5lj9.png"
              alt="Electricity bills payment with auto recharge"
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645399775/paymax/finance/uixgrpg1x5urmts7tsgu.png"
              alt="Effortless tax computatuion"
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1656020255/paymax/icons/m7f8td20c0jqzrntxl0i.png"
              alt="Online ecommerce"
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1656020255/paymax/icons/m7f8td20c0jqzrntxl0i.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645354326/paymax/icons/dsb9zsrmiiyrzonijop7.png"
              alt="Onlien Doctor Consultation"
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645354326/paymax/icons/dsb9zsrmiiyrzonijop7.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645338942/paymax/icons/n3ep9qwhtbe26qicigzc.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645338942/paymax/icons/kfkqvpttum0rowxfctiv.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645354651/paymax/icons/owrsgxs0vp6lvub77hfs.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1656019504/paymax/icons/mcl42xreml01uhsumgsx.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1656020242/paymax/icons/ewpixftyp5eno9baumyf.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="https://res.cloudinary.com/dev-staunty007/image/upload/v1645354651/paymax/icons/owrsgxs0vp6lvub77hfs.png"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </>
  );
}

export default ClientSlider;
