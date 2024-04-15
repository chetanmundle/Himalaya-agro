import React from "react";

import Carousel from "../components/Carousel";
import Section2 from "../components/Section2";
import SwiperSlider from "./SwiperSlider";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import CardSlider from "../components/CardSlider";
import Getintouch from "../components/GetInTouch";

const Home = () => {
  return (
    <>
      <Carousel />
      <SwiperSlider />
      <Section2 />

      <CardSlider />
      <Getintouch/>
      <Ads />
     
    </>
  );
};

export default Home;
