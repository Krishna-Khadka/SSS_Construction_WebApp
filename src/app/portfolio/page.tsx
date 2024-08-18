import BannerLayout from "@/components/banner/BannerLayout";
import Portfolio from "@/pages/portfolio/Portfolio";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <BannerLayout title="Our Portfolio" />
      </div>
      <div className="py-20">
        <Portfolio />
      </div>
    </>
  );
};

export default page;
