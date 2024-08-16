import React from "react";
import ServiceCard from "@/pages/service/ServiceCard";
import BannerLayout from "@/components/banner/BannerLayout";

const page = () => {
  return (
    <>
      <div>
        <BannerLayout />
      </div>
      <div className="py-20">
        <ServiceCard />
      </div>
    </>
  );
};

export default page;
