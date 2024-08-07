import React from "react";
import HomeAboutContent from "./HomeAboutContent";

const HomeAbout = () => {
  return (
    <>
      <div className="bg-[#F2F3F4] py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <div>image</div>
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
