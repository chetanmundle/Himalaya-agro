import React, { useRef, useState } from "react";
import redapple from "../assets/redapple.png";
import redapple1 from "../assets/redapple1.jpeg";
import banana from "../assets/banana.png"
import cherry from "../assets/cheery.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";

export default function CardSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const [fruitData, setFruidData] = useState([
    {
      id: 1,
      name: "apple",
      img: "https://www.pngwing.com/en/free-png-bzhca",
      price: 299,
    },
    {
      id: 2,
      name: "banana",
      img: banana,
      price: 299,
    },
    {
      id: 3,
      name: "Cherry",
      img: cherry,
      price: 299,
    },
    {
      id: 4,
      name: "fourth Fruit",
      img: redapple,
      price: 299,
    },
    {
      id: 5,
      name: "Fifth Fruit",
      img: redapple,
      price: 299,
    },
    {
      id: 6,
      name: "Sixth Fruit",
      img: redapple,
      price: 299,
    },
    {
      id: 7,
      name: "Seventh Fruit",
      img: redapple,
      price: 299,
    },
    {
      id: 8,
      name: "Eaith Fruit",
      img: redapple,
      price: 299,
    },
    {
      id: 9,
      name: "Ninth Fruit",
      img: redapple,
      price: 299,
    },
    {
      id: 10,
      name: "Tenth Fruit",
      img: redapple,
      price: 299,
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
            <div class="cardslider-card">
              <div class="cardslider-image_container">
                <div className="cardslider-half">
                  <img src={data.img} alt=""  />
                </div>
              </div>
              <div class="cardslider-title">
                <span>{data.name}</span>
              </div>
              <div class="cardslider-size">
                <span>Kg</span>
                <ul class="cardslider-list-size">
                  <li class="cardslider-item-list">
                    <button class="cardslider-item-list-button">1</button>
                  </li>
                  <li class="cardslider-item-list">
                    <button class="cardslider-item-list-button">2</button>
                  </li>
                  <li class="cardslider-item-list">
                    <button class="cardslider-item-list-button">5</button>
                  </li>
                  <li class="cardslider-item-list">
                    <button class="cardslider-item-list-button">10</button>
                  </li>
                  <li class="cardslider-item-list">
                    <button class="cardslider-item-list-button">20</button>
                  </li>
                </ul>
              </div>
              <div class="cardslider-action">
                <div class="cardslider-price">
                  <span>₹{data.price}/Kg</span>
                </div>
                <button class="cardslider-cart-button">
                  <svg
                    class="cardslider-cart-icon"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
