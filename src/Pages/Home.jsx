import React from "react";

import Carousel from "../components/Carousel";
import Section2 from "../components/Section2";
import SwiperSlider from "./SwiperSlider";
import Ads from "../components/Ads";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Carousel />
      <Section2 />
      <SwiperSlider />
      
      <Ads />
      <Footer/>
    </>
  );
};

export default Home;
