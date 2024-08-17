import BannerLayout from "@/components/banner/BannerLayout";
import AboutInfo from "@/pages/about/AboutInfo";
import Certificate from "@/pages/about/Certificate";
import CompanyDetail from "@/pages/about/CompanyDetail";
import CoreValue from "@/pages/about/CoreValue";
import Team from "@/pages/about/Team";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <BannerLayout title="About Us" />
      </div>
      <div className="py-20">
        <AboutInfo />
      </div>
      <div>
        <CompanyDetail />
      </div>
      <div className="py-20">
        <h2 className="capitalize text-5xl font-extrabold text-[#0E121D] tracking-wider text-center pb-12">
          our core values
        </h2>
        <CoreValue />
      </div>
      <div className="pb-20">
        <div className="text-center">
          <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
            Meet Our Team
          </h5>
          <h2 className="capitalize text-5xl font-extrabold text-[#0E121D] tracking-wider">
            Meet Our Professionals
          </h2>
        </div>
        <Team />
      </div>
      <div className="pb-20">
        <div className="text-center">
          <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
            Our Achievements
          </h5>
          <h2 className="capitalize text-5xl font-extrabold text-[#0E121D] tracking-wider">
            Recognized Excellence
          </h2>
        </div>
        <div className="mt-16">
          <Certificate />
        </div>
      </div>
    </>
  );
};

export default page;
