"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import slider1 from "../../../public/slider1.jpg";
import slider2 from "../../../public/slider2.jpg";
import slider3 from "../../../public/slider3.jpg";
import HeroLayout from "./HeroLayout";

const Contents = [
  {
    head: "we make sure",
    title: "Committed to superior quality and results.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. lorem Ipsum has been end.",
    imgSrc: slider1,
  },
  {
    head: "we make sure",
    title: "The rest put the con in contractor!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. lorem Ipsum has been end.",
    imgSrc: slider2,
  },
  {
    head: "we make sure",
    title: "Engineering your dreams with us",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. lorem Ipsum has been end.",
    imgSrc: slider3,
  },
];


const Hero = () => {
  return (
    <>
      <div>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          {Contents.map((content, index) => (
            <SwiperSlide key={index}>
              <HeroLayout
                head={content.head}
                title={content.title}
                description={content.description}
                imgSrc={content.imgSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
