import BannerLayout from "@/components/banner/BannerLayout";
// import SubContractorForm from "@/pages/subcontractor/SubContractorForm";
import SubContractorLogin from "@/pages/subcontractor/SubContractorLogin";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <BannerLayout title="Sub Contractor" />
      </div>
      <div>
        {/* <SubContractorForm /> */}
        <SubContractorLogin />
      </div>
    </div>
  );
};

export default page;
