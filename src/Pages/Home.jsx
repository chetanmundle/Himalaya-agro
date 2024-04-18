import React from "react";

import Carousel from "../components/Carousel";
import Section2 from "../components/Section2";
import SwiperSlider from "./SwiperSlider";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import CardSlider from "../components/CardSlider";
import Getintouch from "../components/GetInTouch";
import CertificateSlide from "../components/CertificateSlide";
import Carousel1 from "../components/Carousel1";
import CardSlider1 from "../components/CardSlider1";
import AboutHome from "../components/AboutHome";

const Home = () => {
  return (
    <>
      {/* <Carousel /> */}
      <Carousel1/>
      <SwiperSlider />
      <Section2 />

      <CardSlider1/>
      <Getintouch/>
      <CertificateSlide />
      <Ads />
      <AboutHome/>
     
    </>
  );
};

export default Home;
