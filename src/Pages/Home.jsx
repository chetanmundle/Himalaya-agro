import React from "react";

import Carousel from "../components/Carousel";
import Section2 from "../components/Section2";
import SwiperSlider from "./SwiperSlider";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import CardSlider from "../components/CardSlider";

const Home = () => {
  return (
    <>
      <Carousel />
      {/* <CardSlider /> */}
      <Section2 />
      <SwiperSlider />

      <Ads />
    </>
  );
};

export default Home;
