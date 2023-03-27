import { useState } from 'react';

function OtherServices() {
    const [open, setOpen] = useState('p2');
    return (
        <>
            {/* <!-- Service --> */}
            <section
                className="content-inner"
                style={{ backgroundImage: 'url(images/background/bg1.png)' }}
            >
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 col-md-12 wow fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="0.1s"
                        >
                            <div
                                className={`${
                                    open === 'p1'
                                        ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                                        : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                                }`}
                                onMouseOver={() => setOpen('p1')}
                            >
                                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                                    <a href="#" className="icon-cell">
                                        <i className="flaticon-office"></i>
                                    </a>
                                </div>
                                <div className="icon-content">
                                    <h4 className="dlab-title">
                                        Insurance Policies & Claims
                                    </h4>
                                    <p>
                                        Compare and Choose an insurance package
                                        that is right for you. Let's find you
                                        the Best Insurance Policies & Plans.
                                        With PayMax take control of all your
                                        insurance needs anywhere, anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 wow fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div
                                className={`${
                                    open === 'p2'
                                        ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                                        : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                                }`}
                                onMouseOver={() => setOpen('p2')}
                            >
                                <div className="icon-bx-md radius bg-red shadow-red">
                                    <a href="#" className="icon-cell">
                                        <i className="flaticon-dollar"></i>
                                    </a>
                                </div>
                                <div className="icon-content">
                                    <h4 className="dlab-title">
                                        Local & International Money Transfer
                                    </h4>
                                    <p>
                                        Cross‑border payments infrastructure
                                        built for you in mind. Seamlessly
                                        receive funds from your customers. A
                                        better way to send & receive money
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 wow fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="0.3s"
                        >
                            <div
                                className={`${
                                    open === 'p3'
                                        ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                                        : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                                }`}
                                onMouseOver={() => setOpen('p3')}
                            >
                                <div className="icon-bx-md radius bg-green shadow-green">
                                    <a href="#" className="icon-cell">
                                        <i className="flaticon-idea"></i>
                                    </a>
                                </div>
                                <div className="icon-content">
                                    <h4 className="dlab-title">
                                        School Fees & Related Payment
                                    </h4>
                                    <p>
                                        Complete online payment system for
                                        schools. Provides a way simple way to
                                        charge school fees, manage payments,
                                        print and save receipts, and even a way
                                        to deliver payment notices online. All
                                        billing and payment information is
                                        stored in the student’s file
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 col-md-12 wow fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="0.6s"
                        >
                            <div
                                className={`${
                                    open === 'p6'
                                        ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                                        : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                                }`}
                                onMouseOver={() => setOpen('p6')}
                            >
                                <div className="icon-bx-md radius bg-maroon shadow-maroon">
                                    <a href="#" className="icon-cell">
                                        <i className="flaticon-smile"></i>
                                    </a>
                                </div>
                                <div className="icon-content">
                                    <h4 className="dlab-title">
                                        Group & Association Dues Payment
                                    </h4>
                                    <p>
                                        Make online payment a breeze by using a
                                        system that saves both you and your
                                        members valuable time, energy, and
                                        resources. Simplify membership sign-ups,
                                        applications, and renewals by allowing
                                        users to pay for memberships online
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OtherServices;
