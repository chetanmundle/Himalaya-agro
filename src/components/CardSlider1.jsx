import React, { useRef, useState } from "react";
import redapple1 from "../assets/redapple1.jpeg";
import banana from "../assets/banana.png";
import mango1 from "../assets/mango1.png";
import orange1 from "../assets/orange1.png";
import strobery1 from "../assets/strobery1.png";
import tomato1 from "../assets/tomato1.png";
import carrot from "../assets/carrot.png";
import pineapple1 from "../assets/pineapple1.png";
import cheery from "../assets/cheery.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";

export default function CardSlider1() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const [fruitData, setFruidData] = useState([
    {
      id: 1,
      name: "Apple",
      img: redapple1,
      price: 299,
    },
    {
      id: 2,
      name: "Banana",
      img: banana,
      price: 299,
    },
    {
      id: 3,
      name: "Cherry",
      img: cheery,
      price: 189,
    },
    {
      id: 4,
      name: "Mango",
      img: mango1,
      price: 89,
    },
    {
      id: 5,
      name: "Orange",
      img: orange1,
      price: 129,
    },
    {
      id: 6,
      name: "Stroberry",
      img: strobery1,
      price: 159,
    },
    {
      id: 7,
      name: "Tomato",
      img: tomato1,
      price: 40,
    },
    {
      id: 8,
      name: "Carrod",
      img: carrot,
      price: 50,
    },
    {
      id: 9,
      name: "Pine Apple",
      img: pineapple1,
      price: 90,
    },
 
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
    margin: 20px auto;
  }

            `}
      </style>
      <div className="swiper-h2">
        <h2>Our Product</h2>
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

        {fruitData.map((data, index) => (
          <SwiperSlide className="swiper-slide-m" key={data.id}>
            <div className="test-main-slider-t">
              <div class="test-main-slider">
                <img src={data.img} alt="" />
              </div>
              <div className="cardslider-name">
                <h2>{data.name}</h2>
              </div>
              <div className="cardslider-price-top">
                <div><strong>₹{data.price}</strong></div>
                <div>
                  <button class="cardslider-CartBtn">
                    <span class="cardslider-IconContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="rgb(17, 17, 17)"
                        class="cardslider-cart"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                      </svg>
                    </span>
                    <p class="cardslider-text">Add to Cart</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
