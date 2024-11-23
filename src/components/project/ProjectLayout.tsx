import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface ProjectsInfo {
  imgSrc: string | StaticImageData;
  title: string;
  category: string;
}

const ProjectLayout = ({ imgSrc, title, category }: ProjectsInfo) => {
  return (
    <>
      <div className="relative group">
        <Image
          src={imgSrc}
          alt="project image"
          className="max-w-full object-cover h-[450px] w-auto rounded-[18px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 rounded-[18px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
        <div className="absolute z-40 bg-white rounded-[12px] px-4 py-6 bottom-1 w-[95%] left-1/2 transform -translate-x-1/2 text-center">
          <p className="uppercase text-base font-medium text-main-color tracking-wider">
            {category}
          </p>
          <h5 className="font-bold text-2xl tracking-wide pt-3 group-hover:text-main-color transition-all duration-500">
            {title}
          </h5>
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
