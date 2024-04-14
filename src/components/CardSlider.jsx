import React, { useRef, useState } from "react";
import Card from "./Card";
import redapple from "../assets/readymadefruit.jpg";
// import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, StackDivider, ButtonGroup, Button, Text } from '@chakra-ui/react'

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
    border: 1px solid green;
  
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
  //  height: 300px;
    margin: 20px auto;
  }
 
  
            `}
      </style>
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
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
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
        <SwiperSlide >
      <div className="swiper-slide-m">
          <div className="cardslider-half">
            <Image src={redapple}  className="carslider-img"/>
            {/* <img src={redapple} alt="" height="180px"/> */}
          </div>
       </div>
        </SwiperSlide>
        {/* <SwiperSlide >
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg' 
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card></SwiperSlide> */}
        <SwiperSlide ><Card /></SwiperSlide>
        <SwiperSlide className="swiper-slide-m">Fourth Slide</SwiperSlide>
        <SwiperSlide className="swiper-slide-m">Fifth Slide</SwiperSlide>
        <SwiperSlide className="swiper-slide-m">Sixth Slide</SwiperSlide>
        <SwiperSlide className="swiper-slide-m">Seventh Slide</SwiperSlide>
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides">
          Append Slide
        </button>
      </p> */}
    </>
  );
}
