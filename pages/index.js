import { useEffect } from "react";
import Slider1 from "../element/slider-1";
import Clients from "../element/clients";
import AboutUs from "../element/aboutUs";
import Features from "../element/our-features";
// import Footer from "../layout/footer";
import Header from "../layout/header";

import dynamic from "next/dynamic";
const Footer = dynamic(()=> import("../layout/footer"))


function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        <Clients />
        <AboutUs />
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default Home;
