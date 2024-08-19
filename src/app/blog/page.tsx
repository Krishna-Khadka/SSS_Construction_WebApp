import BannerLayout from "@/components/banner/BannerLayout";
import Blog from "@/pages/blog/Blog";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <BannerLayout title="Blogs" />
      </div>
      <div className="py-20">
        <div className="text-center">
          <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
            Latest Blog
          </h5>
          <h2 className="capitalize text-5xl font-extrabold text-[#0E121D] tracking-wider">
            Our Latest New & Blog
          </h2>
        </div>
        <div className="pt-16">
          <Blog />
        </div>
      </div>
    </>
  );
};

export default page;
