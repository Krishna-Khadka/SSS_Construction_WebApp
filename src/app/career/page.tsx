
import BannerLayout from "@/components/banner/BannerLayout";
import JobListing from "@/pages/career/JobListing";
import React from "react";

const page = () => {
  return (
    <>
     <div>
        <BannerLayout title="Careers" />
      </div>
      <JobListing />
    </>
  );
};

export default page;
