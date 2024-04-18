import React, { useRef, useState } from "react";
import redapple from "../assets/redapple.png";

import banana from "../assets/banana.png"
import certi1 from "../assets/certi1.jpg"
import certi2 from "../assets/certi2.jpg"
import certi3 from "../assets/certi3.jpg"
import certi4 from "../assets/certi4.jpg"
import certi5 from "../assets/certi5.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";

export default function CertificateSlide() {

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const [certificateData, setCertificateData] = useState([
    {
      id: 1,
      name: "Himalaya Agro Multi Services",
      img: certi1,
      info: "Krushi Vibhag",
    },
    {
      id: 2,
      name: "Pravin Bhongale",
      img: certi2,
      info: "Riseup Moment",
    },
    {
      id: 3,
      name: "Pravin Bhongale",
      img: certi3,
      info: "ICAR",
    },
    {
      id: 4,
      name: "Farmer Exportt",
      img: certi4,
      info: "Agro Vision",
    },
    {
        id: 4,
        name: "Pravin Bhongale",
        img: certi5,
        info: "Symbiosis",
      }

  ]);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <style>
        {`

.swiper-main {
    width: 100%;
    height: 100%;
    padding:0 20px 0 20px;
     
  }

  .swiper-slide-m {
    text-align: center;
    font-size: 18px;
    background: #fff;


    /* Center slide text vertically */
    display: flex;
   justify-content: center;
   /* align-items: center;*/

  }
  // .swiper-slide-m img {
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }
  .swiper-main {
    width: 100%;
   height: 300px;
    margin: 60px auto;
  }

            `}
      </style>
      
      <div className="swiper-h2">
        <h2>Our Certificates</h2>
      </div>
      <Swiper
        modules={[Autoplay, Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        // slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        virtual={false}
        loop={true}
        loopAdditionalSlides={0}
        className="swiper-main"
        breakpoints={{
          // when window width is <= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is <= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {/* {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))} */}

        {certificateData.map((data, index) => (
          <SwiperSlide className="swiper-slide-m" key={index}>
            <div class="certificate">
  <div class="sub-certificate category">
    <span class="text_span">{data.name}</span>
   
  </div>
  <div class="certificate_container">
 <img src={data.img} />
  </div>
  <div class="sub-certificate named">
    <span class="text_span">{data.info}</span>
  </div>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
