"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import project1 from "../../../public/project1.jpg";
// import project2 from "../../../public/project2.jpg";
// import project3 from "../../../public/project3.jpg";
// import project4 from "../../../public/project4.jpg";
// import project5 from "../../../public/project5.jpg";

import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.jpg";
import project4 from "../../../public/project4.jpg";
import project5 from "../../../public/project5.jpg";
import project6 from "../../../public/project6.jpg";
import project7 from "../../../public/project7.jpg";
import project8 from "../../../public/project8.jpg";
import project9 from "../../../public/project9.jpg";

import "swiper/css";
import ProjectLayout from "./ProjectLayout";
import PortfolioLayout from "@/pages/portfolio/PortfolioLayout";

// const projects = [
//   {
//     imgSrc: project1,
//     title: "Smith Construction",
//     category: "construction",
//   },
//   {
//     imgSrc: project2,
//     title: "Silicon Complex",
//     category: "construction",
//   },
//   {
//     imgSrc: project3,
//     title: "Marvel Complex",
//     category: "construction",
//   },
//   {
//     imgSrc: project4,
//     title: "Center Complex",
//     category: "construction",
//   },
//   {
//     imgSrc: project5,
//     title: "Glossy Building",
//     category: "construction",
//   },
// ];

const portfolios = [
  {
    portfolio_id: "1",
    imgSrc: project1,
    category: "Engineering",
    title: "Building Construction",
  },
  {
    portfolio_id: "2",
    imgSrc: project2,
    category: "Engineering",
    title: "Industrial Design",
  },
  {
    portfolio_id: "3",
    imgSrc: project3,
    category: "Construction",
    title: "Architect Design",
  },
  {
    portfolio_id: "4",
    imgSrc: project4,
    category: "Engineering",
    title: "Residential Design",
  },
  {
    portfolio_id: "5",
    imgSrc: project5,
    category: "Construction",
    title: "Building Construction",
  },
  {
    portfolio_id: "6",
    imgSrc: project6,
    category: "Construction",
    title: "Industrial Design",
  },
  {
    portfolio_id: "7",
    imgSrc: project7,
    category: "Engineering",
    title: "Architect Design",
  },
  {
    portfolio_id: "8",
    imgSrc: project8,
    category: "Construction",
    title: "Residential Design",
  },
  {
    portfolio_id: "9",
    imgSrc: project9,
    category: "Construction",
    title: "Building Construction",
  },
];

const Project = () => {
  return (
    <>
      <div className="project-bg">
        <div className="container">
          <div className="text-center">
            <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
              construct projects
            </h5>
            <h2 className="capitalize text-5xl font-extrabold text-white tracking-wider">
              our recent projects
            </h2>
          </div>
          <div className="pt-16">
            <div className="w-full">
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
                {portfolios.map((portfolio, index) => (
                  <SwiperSlide key={index}>
                    <PortfolioLayout
                      portfolio_id={portfolio.portfolio_id}
                      imgSrc={portfolio.imgSrc}
                      title={portfolio.title}
                      category={portfolio.category}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
