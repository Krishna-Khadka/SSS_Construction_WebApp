"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.jpg";
import project4 from "../../../public/project4.jpg";
import project5 from "../../../public/project5.jpg";

import "swiper/css";
import ProjectLayout from "./ProjectLayout";

const projects = [
  {
    imgSrc: project1,
    title: "Smith Construction",
    category: "construction",
  },
  {
    imgSrc: project2,
    title: "Silicon Complex",
    category: "construction",
  },
  {
    imgSrc: project3,
    title: "Marvel Complex",
    category: "construction",
  },
  {
    imgSrc: project4,
    title: "Center Complex",
    category: "construction",
  },
  {
    imgSrc: project5,
    title: "Glossy Building",
    category: "construction",
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
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <ProjectLayout
                      imgSrc={project.imgSrc}
                      title={project.title}
                      category={project.category}
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
