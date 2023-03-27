import Head from "next/head"
import { useEffect, useState } from "react"
import "react-rangeslider/lib/index.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import useScrollPosition from "use-scroll-position"
import "../css/style.css"
import "../css/skin/skin-1.css"
import "../styles/globals.css"
import "../styles/switcher.css"

function MyApp({ Component, pageProps }) {
  const [toggle1, setToggle1] = useState(false)
  const [body_, setbody_] = useState()
  const [header, setHeader] = useState("fixed")
  const [header_, setHeader_] = useState()

  useEffect(() => {
    setbody_(document.querySelector("body"))
    setHeader_(document.getElementsByClassName("main-bar-wraper"))
  }, [])

  let scrollPosition = useScrollPosition()
  header === "fixed" && scrollPosition > 10
    ? header_ && header_[0].classList.add("is-fixed")
    : header_ && header_[0].classList.remove("is-fixed")

  return (
    <>
      <Head>
        <title>PayMax - Payments & Much More</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />
      </Head>
      <div className="page-wraper">
        <Component {...pageProps} />
      </div>

      <a
        href="https://themeforest.net/cart/configure_before_adding/32950742/?license=regular;"
        target="_blank"
        className="bt-buy-now theme-btn"
      >
        <i className="ti-shopping-cart" />
        <span>Buy Now</span>
      </a>
      <a
        href="https://support.w3itexperts.com"
        target="_blank"
        className="bt-support-now theme-btn"
      >
        <i className="ti-headphone-alt" />
        <span>Support</span>
      </a>
      <a href="#top">
        <button
          className="scroltop icon-up"
          type="button"
          style={{ display: "inline-block" }}
        >
          <i className="fa fa-arrow-up" />
        </button>
      </a>
    </>
  )
}

export default MyApp
