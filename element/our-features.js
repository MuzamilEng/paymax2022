import ScreenSlider from '../component/screenSlider';
import OtherServices from '../element/other_service';
import Slidier from './Slider';

import Link from 'next/link';
function Features() {
    return (
        <>
            {/* Online consultation */}
            <section className="content-inner-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-xl-8 col-lg-7 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="section-head style-1">
                                <h2 className="dlab-title">
                                    Online Consultation
                                </h2>
                            </div>
                            <div className="section-wraper-one">
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-red">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-idea"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            TeleMedicine
                                        </h4>
                                        <p>
                                           Yes We are empowering people everywhere
                                            to live their healthiest lives. Find
                                            and Consult highly skilled Doctors,
                                            from all over the world.<p></p>The
                                            right care when you need it
                                            most&nbsp;&nbsp;
                                            <Link href="/doctor">
                                                <a className="btn btn-link d-inline-flex align-items-center">
                                                    <i className="fa fa-angle-right m-r10"></i>
                                                    Learn More
                                                </a>
                                            </Link>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-yellow">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-line-graph"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">Legal</h4>
                                        <p>
                                            Now you can easily find & filter
                                            lawyers according to areas of
                                            specialization requirements through
                                            the on demand app. &nbsp;&nbsp;
                                            <Link href="/legal">
                                                <a className="btn btn-link d-inline-flex align-items-center">
                                                    <i className="fa fa-angle-right m-r10"></i>
                                                    Learn More
                                                </a>
                                            </Link>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-green">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-rocket"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            Other Consultation Services
                                        </h4>
                                        <p>
                                            We serve as the connecting hub
                                            between professional consultants
                                            across several industry domains to
                                            numerous users in the following
                                            industry vertical. &nbsp;&nbsp;
                                            <Link href="/consultation">
                                                <a className="btn btn-link d-inline-flex align-items-center">
                                                    <i className="fa fa-angle-right m-r10"></i>
                                                    Learn More
                                                </a>
                                            </Link>{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-xl-4 col-lg-5 wow fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="0.4s"
                        >
                            <div className="dlab-media">
                                <Slidier
                                    imgs={[
                                        'images/doctor_screen_1.png',
                                        'images/doctor_screen_2.png',
                                        'images/doctor_screen_3.png',
                                        'images/doctor_screen_4.png',
                                    ]}
                                />
                                {/* <img src="images/SVGs/01.svg" className="move-2" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-inner-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-xl-4 col-lg-5 wow fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="0.4s"
                        >
                            <div className="dlab-media">
                                <Slidier
                                    imgs={[
                                        'images/investment_1.png',
                                        'images/investment_2.png',
                                        'images/investment_3.png',
                                    ]}
                                />
                                {/* <img src="images/SVGs/01.svg" className="move-2" alt="" /> */}
                            </div>
                        </div>
                        <div
                            className="col-xl-8 col-lg-7 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="section-head style-1 mt-3">
                                <h2 className="title">
                                    Investment & Wealth Creation
                                </h2>
                            </div>
                            <div className="section-wraper-one">
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-red">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-idea"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            Savings & Investment
                                        </h4>
                                        <p>
                                            Why Leaving your monies in Banks
                                            with almost zero interest when it
                                            can yield 30% interest. You worked
                                            for that money, now let the money
                                            work for you. Think now, work Smart
                                            <p>
                                                <p></p>
                                            </p>
                                            Meet the app that gives you the
                                            tools, inspiration, and support you
                                            need to become a better investor.
                                            <p></p>
                                            Invest now for the future you want.
                                            With PayMax, you get an intelligent
                                            investment framework that grows and
                                            protects your money, real people to
                                            answer your questions in seconds,
                                            the security you’d expect from a
                                            bank, and the simplicity you’d
                                            expect with an app.{' '}
                                            <p>
                                                <p></p>
                                            </p>
                                            No matter your risk profile, our
                                            framework sets your portfolio up to
                                            capture gains in the long run, so
                                            you can rest easy knowing that
                                            you’re unlikely to lose more than
                                            you’re willing to in any economic
                                            condition.
                                            <p></p> &nbsp;&nbsp;
                                            {/* <Link href="/investment">
                                                <a className="btn btn-link d-inline-flex align-items-center">
                                                    <i className="fa fa-angle-right m-r10"></i>
                                                    Learn More
                                                </a>
                                            </Link>{' '} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-yellow">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-line-graph"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            Stocks (Foreign & Local)
                                        </h4>
                                        <p>
                                            PayMax empowers you to invest into
                                            any product of your choice. You can
                                            now be a shareholder of Facebook,
                                            Tesla, google and so many others
                                            with as little as 1 EUR/1USD/1GBP or
                                            N1000. <p></p>You can place
                                            fractional orders in real time,
                                            while we handle the complexities in
                                            the background.Start trading Stocks
                                            and ETFs from more than 50
                                            Countries. Retrieve historical and
                                            real-time Market Data all through
                                            PayMax.
                                            <p></p>&nbsp;&nbsp;
                                            {/* <Link href="/investment">
                                                <a className="btn btn-link d-inline-flex align-items-center">
                                                    <i className="fa fa-angle-right m-r10"></i>
                                                    Learn More
                                                </a>
                                            </Link>{' '} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-12 col-md-6 mt-3">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white">
                                                <Link href="#">
                                                    <a className="icon-cell text-primary">
                                                        <i className="flaticon-chat"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="icon-content mt-3">
                                                <h4 className="dlab-title m-b5">
                                                    General Investing Portfolios
                                                </h4>
                                                <p>
                                                    Lay the foundation of your
                                                    investments with a portfolio
                                                    that endures economic
                                                    changes in the long term.
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
                                                <h4 className="dlab-title m-b5">
                                                    Thematic Portfolios
                                                </h4>
                                                <p>
                                                    Add diversification to your
                                                    portfolios by putting your
                                                    money into trends you
                                                    believe will shape the
                                                    future.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-green">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-rocket"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            30% Interest P/A - Returns on
                                            Savings
                                        </h4>
                                        <p>
                                            Why Leaving your monies in Banks
                                            with almost zero interest when it
                                            can yield 30% interest. You worked
                                            for that money, now let the money
                                            work for you. Think now, work Smart
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-inner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="section-head style-1">
                            <h2 className="title">
                                Accounting Solution for Merchants/Business
                                Owners
                            </h2>
                        </div>
                        <div
                            className="col-lg-4 m-b30 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="dz-media ">
                                <Slidier
                                    imgs={[
                                        'images/sales_1.png',
                                        'images/sales_2.png',
                                        'images/sales_3.png',
                                    ]}
                                />
                                {/* <img src="images/SVGs/06.svg" className="move-3" alt="" /> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-8 m-b30 wow fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="0.4s"
                        >
                            <p>
                                Unique and powerful suite of software to run
                                your entire business. A unified platform for all
                                your back office needs.
                            </p>
                            <p className="m-b30">
                                From invoicing to expense and order management
                                to accounting, PayMax has all the tools you need
                                to streamline all of your back office
                                operations.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-arrow primary">
                                        <li>Invoice.</li>
                                        <li>Item & order management</li>
                                        <li>Purchase Order.</li>
                                        <li>Inventory Management.</li>
                                        <li>E-Commerce</li>
                                        <li>Statement of Account</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-arrow primary">
                                        <li>Journal & Chart of Accounts.</li>
                                        <li>Expense Management.</li>
                                        <li>Account Reconcillation.</li>
                                        <li>Payroll Management.</li>
                                        <li>Tax Computation & Payment</li>
                                        <li>Book Keeping</li>
                                    </ul>
                                </div>
                                <p></p>
                                <div className="row mt-3">
                                    <div className="col-lg-12 col-md-6 mt-3">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white">
                                                <Link href="#">
                                                    <a className="icon-cell text-primary">
                                                        <i className="flaticon-chat"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="icon-content mt-3">
                                                <h4 className="dlab-title m-b5">
                                                    Free
                                                </h4>
                                                <p>
                                                    That's right, completely
                                                    free. There is no limited or
                                                    trial version, only full. No
                                                    hidden charges or setup
                                                    fees. No countdown. Free
                                                    means free.
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
                                                <h4 className="dlab-title m-b5">
                                                    Online
                                                </h4>
                                                <p>
                                                    See your financials online
                                                    anytime, anywhere on your
                                                    computer, tablet or phone.
                                                    Run your business from
                                                    anywhere and know your cash
                                                    position
                                                </p>
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
                                                    <h4 className="dlab-title m-b5">
                                                        Feature Rich
                                                    </h4>
                                                    <p>
                                                        Everything you need to
                                                        manage your web
                                                        accounting. Keep track
                                                        of all of your payments,
                                                        invoices, expenses, etc.
                                                        in one place with zero
                                                        fees.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                {/* <Link href="/finance">
                                    <a className="btn btn-link d-inline-flex align-items-center">
                                        <i className="fa fa-angle-right m-r10"></i>
                                        Learn More
                                    </a>
                                </Link>{' '} */}
                            </div>
                        </div>
                    </div>
                    {/* <Link href="/">
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
                    </Link> */}
                </div>
            </section>
            <section className="content-inner-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="section-head style-1">
                            <h2 className="title">
                                VTU, Bills, Dues Payment & More
                            </h2>
                        </div>
                        <div
                            className="col-xl-8 col-lg-7 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="section-wraper-one">
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-red">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-idea"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            Airtime & Data
                                        </h4>
                                        <p>
                                            PayMax offers unrivalled airtime and
                                            data discounts of 15%. Our VTU is
                                            top-notch, fast, reliable and
                                            delivered securely. Set automated
                                            Top-up, Monitor your airtime & data
                                            real-time.
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-yellow">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-line-graph"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            Electricity
                                        </h4>
                                        <p>
                                            Go beyond recharge to:
                                            <ul>
                                                <li>
                                                    1. Keep track of your Meter
                                                    current usage
                                                </li>
                                                <li>
                                                    2. Real-time Electricity
                                                    usage data
                                                </li>
                                                <li>3. Auto top Up </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-green">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-laptop"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            CableTv & Group Dues Subscription
                                        </h4>
                                        <p>
                                            Never miss your favorite shows. Pay
                                            your cableTv (DSTV, GoTV, Startimes)
                                            bills with ease.
                                            <p></p>
                                            <p></p>
                                            <b>
                                                <u>
                                                    Group Dues/Subscription
                                                    Payment
                                                </u>
                                                <p></p>
                                            </b>
                                            payment is now easier to manage with
                                            our robust well-crafted subscription
                                            management feature,
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-yellow">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-line-graph"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            JAMB, WAEC, NABTEB and School Fees
                                        </h4>
                                        <p>
                                            We got it all covered. Enroll your
                                            school and keep track on all school
                                            fees related payments ... Including
                                            but not limited to
                                            <ul>
                                                <li>
                                                    1. JAMB, WAEC, NABTEB Pins
                                                </li>
                                                <li>
                                                    2. All forms of school fees
                                                    payments
                                                </li>
                                                <li>3. NYSC and other fees</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-12 col-md-6 mt-3">
                                        <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                            <div className="icon-bx-sm bg-white">
                                                <Link href="#">
                                                    <a className="icon-cell text-primary">
                                                        <i className="flaticon-chat"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="icon-content mt-3">
                                                <h4 className="dlab-title m-b5">
                                                    Automated
                                                </h4>
                                                <p>
                                                    Our data delivery and wallet
                                                    funding is automated,
                                                    airtime top-up and data
                                                    purchase are automated and
                                                    get delivered to you almost
                                                    instantly..
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
                                                <h4 className="dlab-title m-b5">
                                                    Reliable
                                                </h4>
                                                <p>
                                                    PayMax is a fully optimized
                                                    platform for reliability and
                                                    dependability. You get
                                                    optimum value for any
                                                    transaction you carry with
                                                    us.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                                                <div className="icon-bx-sm bg-white">
                                                    <Link href="#">
                                                        <a className="icon-cell text-primary">
                                                            <i className="flaticon-user"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="dlab-title m-b5">
                                                        Support
                                                    </h4>
                                                    <p>
                                                        Our customers are
                                                        premium to us, hence
                                                        satisfying them is our
                                                        topmost priority. Our
                                                        customer service is just
                                                        a click away.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 m-b30 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="dz-media">
                                <Slidier
                                    imgs={[
                                        'images/vtu_1.png',
                                        'images/vtu_2.png',
                                        'images/vtu_3.png',
                                    ]}
                                />
                                {/* <img src="images/SVGs/06.svg" className="move-3" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* New side */}
            <section className="content-inner-2">
                <div className="container">
                    <div className="section-head style-1">
                        <h2 className="title">Transport & Logistics</h2>
                    </div>
                    <div className="row align-items-center">
                        <div
                            className="col-xl-4 col-lg-5 wow fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="0.4s"
                        >
                            {/* <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
                <ScreenSlider />
              </div> */}
                            <Slidier
                                imgs={[
                                    'images/uber_1.png',
                                    'images/uber_2.png',
                                    'images/uber_3.png',
                                    'images/uber_4.png',
                                    'images/uber_5.png',
                                ]}
                            />

                            {/* <img src="images/SVGs/04.svg" className="move-2" alt="" /> */}
                        </div>

                        <div
                            className="col-xl-8 col-lg-7 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="section-wraper-one">
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-red">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-idea"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            Pick Up & Delivery
                                        </h4>
                                        <p>
                                            Your online orders can be
                                            automatically sent to delivery
                                            drivers by using our easy solution.
                                            Assign your drivers to delivery
                                            territories and let PayMax take care
                                            of the rest. PayMax offers the
                                            flexibility to customize and
                                            automate your entire delivery
                                            business. Compare our delivery price
                                            to other delivery service providers
                                            &nbsp;&nbsp;
                                            <Link href="/pickup_delivery">
                                                <a className="btn btn-link d-inline-flex align-items-center">
                                                    <i className="fa fa-angle-right m-r10"></i>
                                                    Learn More
                                                </a>
                                            </Link>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-2 left m-b30">
                                    <div className="icon-bx-md radius bg-white text-yellow">
                                        <a href="#" className="icon-cell">
                                            <i className="flaticon-line-graph"></i>
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-title">
                                            Transportation
                                        </h4>
                                        <p>
                                            From Ride Hailing to Bus Booking, we
                                            got you covered
                                            <p>
                                                The Intelligent Bus Reservation
                                                system with AI-driven, Scalable,
                                                Brilliantly usable, Totally
                                                customizable, and thoroughly
                                                road-tested. That's the PayMax
                                                Ride solution.
                                            </p>
                                            The bus booking system has been
                                            created to bring unique value to
                                            your business to help it grow. Our
                                            software solution features friendly
                                            and engaging interactions as well as
                                            fully functional panels for each
                                            user&nbsp;&nbsp;
                                            <Link href="/transportation">
                                                <a className="btn btn-link d-inline-flex align-items-center">
                                                    <i className="fa fa-angle-right m-r10"></i>
                                                    Learn More
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                </div>
            </section>
            <p></p>
            <section className="content-inner">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-8 m-b30 wow fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="0.4s"
                        >
                            <div className="section-head style-1 mb-4">
                                <h2 className="title">
                                    A Cluster of well-curated tools for daily
                                    Living
                                </h2>
                            </div>
                            <p>
                                Unique and powerful suite of software to run
                                your entire business. A unified platform for all
                                your back office needs.
                            </p>
                            <p className="m-b30">
                                From invoicing to order management to
                                accounting, PayMax has all the tools you need to
                                streamline all of your back office operations.
                            </p>
                            <div className="row">
                                {/* <!-- Services --> */}
                                <OtherServices />
                                <Link href="/finance">
                                    <a className="btn btn-link d-inline-flex align-items-center">
                                        <i className="fa fa-angle-right m-r10"></i>
                                        Learn More
                                    </a>
                                </Link>{' '}
                            </div>
                        </div>

                        <div
                            className="col-lg-4 m-b30 wow fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.2s"
                        >
                            <div className="dz-media">
                                <Slidier
                                    imgs={[
                                        'images/budget_1.png',
                                        'images/budget_2.png',
                                        'images/budget_3.png',
                                    ]}
                                />

                                {/* <img
                  src="images/SVGs/07.svg"
                  className="move-3"
                  alt=""
                /> */}
                            </div>
                        </div>
                    </div>
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
            </section>
        </>
    );
}

export default Features;
