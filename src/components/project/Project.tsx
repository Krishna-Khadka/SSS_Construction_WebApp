"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import PortfolioLayout from "@/pages/portfolio/PortfolioLayout";
import axios from "axios";
import project8 from "../../../public/project8.jpg"
import api from "../../../service/api.service";

interface Project {
  id: number;
  fullPath: string;
  name: string;
  category: {
    title: string;
  };
}

const Project = () => {
  const [portfolios, setPortfolios] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setPortfolios(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
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
              {portfolios.map((portfolio) => (
                <SwiperSlide key={portfolio.id}>
                  <PortfolioLayout
                    portfolio_id={portfolio.id.toString()}
                    // imgSrc={portfolio.fullPath || project8}
                    imgSrc={project8}
                    // imgSrc={project8}
                    title={portfolio.name}
                    category={portfolio.category.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
