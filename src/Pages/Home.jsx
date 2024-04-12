import React from "react";

import Carousel from "../components/Carousel";
import SwiperSlider from "./SwiperSlider";
import Ads from "../components/Ads";

const Home = () => {
  return (
    <>
      <Carousel />
      <SwiperSlider />
      <Ads/>
    </>
  );
};

export default Home;
