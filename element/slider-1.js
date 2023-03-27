import Link from 'next/link';
import Slidier from './Slider';

function Slider1() {
    return (
        <>
            <div
                className="banner-one"
                style={{
                    backgroundImage: 'url(images/main-slider/slider1/pic2.png)',
                }}
            >
                <div className="container">
                    <div className="banner-inner">
                        <div className="img1">
                            <img
                                src="images/main-slider/slider1/pic3.png"
                                alt=""
                            />
                        </div>
                        <div className="img2">
                            <img
                                src="images/main-slider/slider1/pic4.png"
                                alt=""
                            />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="banner-content">
                                    <h3
                                        data-wow-duration="1.2s"
                                        data-wow-delay="1s"
                                        className="wow fadeInUp "
                                    >
                                        We Create{' '}
                                        <span className="text-primary">
                                            Innovative FinTech{' '}
                                        </span>
                                        Solution
                                    </h3>
                                    <p
                                        data-wow-duration="1.4s"
                                        data-wow-delay="1.5s"
                                        className="wow fadeInUp m-b30"
                                    >
                                        {' '}
                                        We are focused on Maximizing the Payment
                                        value-chain. PayMax gives you the key to
                                        unlock a universe of opportunities.{' '}
                                        <p></p>You can do a lot more with a
                                        Plethora of well-crafted services
                                        ranging from Investment, Tele-medicine,
                                        e-prescription & drugs delivery,
                                        E-commerce, logistics service, wealth &
                                        investment creation, Bills, VAS payments
                                        services.
                                        <p></p> PayMax gives you the power to do
                                        more. We offer an awesome SME toolkit
                                        for merchants' FREE accounting system
                                    </p>
                                    <Link href="/">
                                        <a>
                                            <img
                                                src="images/android.png"
                                                width="200px"
                                                height="90px"
                                                alt=""
                                            />{' '}
                                            <img
                                                src="images/ios.png"
                                                width="200px"
                                                height="90px"
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="dz-media move-box wow fadeIn"
                                    data-wow-duration="1.6s"
                                    data-wow-delay="0.8s"
                                >
                                    <Slidier
                                        imgs={[
                                            'images/move/pic1.png',
                                            'images/move/pic2.png',
                                            'images/move/pic2.png',
                                        ]}
                                    />

                                    {/* <img className="move-1" src="images/move/pic1.png" alt="" />
                  <img className="move-2" src="images/move/pic2.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider1;
