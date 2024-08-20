// import ProjectDetail from "@/pages/project-detail/ProjectDetail";
import SubContractorInfo from "@/pages/subcontractor/SubContractorInfo";
import React from "react";

interface Params {
  params: {
    id: string;
  };
}

const PortfolioDetailPage = ({ params }: Params) => {
  const { id } = params;

  return (
    <div>
      <h1>Sub Contractor Detail Page</h1>
      <p>Displaying details for subcontractor ID: {id}</p>
      <SubContractorInfo />
    </div>
  );
};

export default PortfolioDetailPage;
