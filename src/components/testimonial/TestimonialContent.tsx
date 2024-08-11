"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialLayout from "./TestimonialLayout";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
  {
    description:
      "Real estate construction companies may also engage in sales & marketing activities to promote their developed properties. This includes creating marketing strategies.",
    name: "Alex Smith",
    designation: "Constructor",
  },
  {
    description:
      "Demolition companies handle the safe and controlled removal of existing structures, making way for new construction. This includes large-scale projects such as roads, bridges etc.",
    name: "Ethan Nolan",
    designation: "Architect",
  },
  {
    description:
      "These services involve activities before the actual construction begins, including site analysis, feasibility studies, cost estimation. Various software tools assist in project.",
    name: "Peter Evan",
    designation: "Constructor",
  },
  {
    description:
      "Real estate construction companies may also engage in sales & marketing activities to promote their developed properties. This includes creating marketing strategies.",
    name: "Alex Smith",
    designation: "Constructor",
  },
  {
    description:
      "Demolition companies handle the safe and controlled removal of existing structures, making way for new construction. This includes large-scale projects such as roads, bridges etc.",
    name: "Ethan Nolan",
    designation: "Architect",
  },
];

const TestimonialContent = () => {
  return (
    <div className="testimonial-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <TestimonialLayout
              description={review.description}
              name={review.name}
              designation={review.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialContent;
