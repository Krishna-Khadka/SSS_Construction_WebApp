import BannerLayout from "@/components/banner/BannerLayout";
import SubContractorForm from "@/pages/subcontractor/SubContractorForm";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <BannerLayout title="Sub Contractor" />
      </div>
      <div>
        <SubContractorForm />
      </div>
    </div>
  );
};

export default page;
