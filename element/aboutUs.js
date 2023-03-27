import Link from 'next/link';
import Slidier from './Slider';

function AboutUs() {
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 m-b30 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="dz-media">
                                {/* <img src="images/about/img4.png" className="move-1" alt="" /> */}
                                <Slidier
                                    imgs={[
                                        'images/about/img4.png',
                                        'images/about/img4.png',
                                        'images/about/img4.png',
                                    ]}
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-6 m-b30 wow fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="0.4s"
                        >
                            <div className="section-head style-1 mb-4">
                                {/* <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6> */}
                                <h2 className="title">Our Mantra</h2>
                            </div>
                            <p>
                                We are creating a world of endless possibilities
                                & potentials. Empowering you to do so much.
                            </p>
                            <p className="m-b30">
                                We are committed to listening to the voice of
                                the customer, continous performance service
                                improvement.
                            </p>
                            <p className="m-b30">
                                Our Unique suite of innovative Fintech services
                                empowers you to do so much more; from bills
                                payment, financial investment, e-commerce, loan,
                                SME business accounting suite, delivery,
                                transportation system, and a plethora of so much
                                value added services.
                            </p>
                            <img src="images/sign.png" alt="" />
                            <h4 className="m-b30">Patrick C. E.</h4>
                            <Link href="/about-us-1">
                                <a className="btn btn-link d-inline-flex align-items-center">
                                    <i className="fa fa-angle-right m-r10"></i>
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
