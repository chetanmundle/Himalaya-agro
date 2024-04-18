import React, { useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import firstimg from "../assets/8.jpg";
import secondimg from "../assets/7.jpg";
import thirdimg from "../assets/4.jpg";
import fourthimg from "../assets/5.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };
  return (
    <>
      <style>
        {`
            .carousel1-swiper {
                width: 100%;
                height: 100%;
            }
            
            .carousel1-swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
              
                /* Center slide text vertically */
                // display: flex;
                justify-content: center;
                align-items: center;
                height: 630px;
            }
            
            .carousel1-swiper-slide img {
                display: block;
  width: 100%;
  height: 630px;
  object-fit: cover;
            }

            @media only screen and (max-width: 767px) {

                .carousel1-swiper-slide{
                    height: 300px;
                }
                .carousel1-swiper-slide img {
                    height: 300px;
                }


            }
        `}
      </style>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        virtual={false}
        loop={true}
        loopAdditionalSlides={0}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        className="mySwiper carousel1-swiper"
      >
        <SwiperSlide className="carousel1-swiper-slide">
          <AnimatePresence>
            {currentIndex === 0 && (
              <motion.div
                className="carousel1-datatop"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                key="first_index"
              >
                <h1>Fresh From The Farm Delivered To Your Door</h1>
                <p>Great Fruit and Veg, Made Easy!</p>
                <button className="carousel1-purchasebtn">Purchase Now</button>
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <img src={firstimg} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel1-swiper-slide">
          <AnimatePresence>
            {currentIndex === 1 && (
              <motion.div
                className="carousel1-datatop1"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.5 }}
                key="second_index"
              >
                <h1>Your Journey to Fresh Fruits Starts Here!</h1>
                <p>Fruitful Discoveries Await</p>
                <button className="carousel1-purchasebtn">Purchase Now</button>
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <img src={secondimg} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel1-swiper-slide">
          <AnimatePresence>
            {currentIndex === 2 && (
              <motion.div
                className="carousel1-datatop"
                initial={{ y: -150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.5 }}
                key="third_index"
              >
                <h1>Bringing You the Finest Fruits, Every Time!</h1>
                <p>Experience the Essence of Freshness with Us</p>
                <button className="carousel1-purchasebtn">Purchase Now</button>
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <img src={thirdimg} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel1-swiper-slide">
          <AnimatePresence>
            {currentIndex === 3 && (
              <motion.div
                className="carousel1-datatop1"
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.5 }}
                key="forth_index"
              >
                <h1>Your Journey to Fresh Veggies Starts Here!</h1>
                <p>Harvesting Nature's Goodness</p>
                <button className="carousel1-purchasebtn">Purchase Now</button>
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <img src={fourthimg} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 1000, // 1 second delay between slides
          disableOnInteraction: true, // Remove this line to keep autoplaying after user interaction
        }}
        className="mySwiper carousel1-swiper"
      >
        <SwiperSlide className="carousel1-swiper-slide">
          <img src={firstimg} alt="First Slide" />
        </SwiperSlide>
        <SwiperSlide className="carousel1-swiper-slide">
          <img src={secondimg} alt="Second Slide" />
        </SwiperSlide>
        <SwiperSlide className="carousel1-swiper-slide">
          <img src={thirdimg} alt="Third Slide" />
        </SwiperSlide>
        <SwiperSlide className="carousel1-swiper-slide">
          <img src={fourthimg} alt="Fourth Slide" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
};

export default Carousel1;
