import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import apple from "../assets/apple.png";
import banana from "../assets/banana.png";
import grapes from "../assets/grapes.png";
import kiwi from "../assets/kiwi.png";
import orange from "../assets/orange.png";
import pineapple from "../assets/pineapple.png";
import strobery from "../assets/strobery.png";
import cherry from "../assets/cheery.png";
import mango from "../assets/mango.png";
import { Button } from "@chakra-ui/button";

const SwiperSlider = () => {
  return (
    <>
      <style>
        {`
          .swiper {
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
          }

          .swiper-slide img {
            display: block;
            width: 300px;
            height: 300px;
          }

       
        `}
      </style>

      <div className="swiper-h2">
        <h2>Products Offering</h2>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={apple} alt="nature-1" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banana} alt="nature-2" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={grapes} alt="nature-3" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kiwi} alt="nature-4" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={orange} alt="nature-5" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pineapple} alt="nature-6" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={strobery} alt="nature-7" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cherry} alt="nature-8" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mango} alt="nature-9" />
          <div className="swiper-htext">
            <Button>View More</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
