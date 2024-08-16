import React from "react";
import ServiceCard from "@/pages/service/ServiceCard";
import BannerLayout from "@/components/banner/BannerLayout";
import Project from "@/components/project/Project";

const page = () => {
  return (
    <>
      <div>
        <BannerLayout title="Our Service" />
      </div>
      <div className="py-20">
        <div className="text-center">
          <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
            our services
          </h5>
          <h2 className="capitalize text-5xl font-extrabold text-[#0E121D] tracking-wider">
            The Best Service For You
          </h2>
        </div>
        <div className="pt-16">
          <ServiceCard />
        </div>
      </div>
      <div>
        <Project />
      </div>
    </>
  );
};

export default page;
