import React from "react";
import HomeAboutContent from "./HomeAboutContent";
import homeABout from "../../../public/home-about.jpg"
import Image from "next/image";

const HomeAbout = () => {
  return (
    <>
      <div className="bg-[#F2F3F4] py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center gap-12">
            <div className="h-[800px] hidden sm:hidden md:block">
              <Image 
              src={homeABout}
              alt="home about image"
              className="max-w-full h-full object-cover rounded-[18px]"
              />
            </div>
            <div>
              <HomeAboutContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
