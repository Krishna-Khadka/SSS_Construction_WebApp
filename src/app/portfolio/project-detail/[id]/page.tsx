import ProjectDetail from "@/pages/project-detail/ProjectDetail";
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
      {/* <h1>Portfolio Detail Page</h1> */}
      {/* <p>Displaying details for portfolio ID: {id}</p> */}
      <ProjectDetail />
    </div>
  );
};

export default PortfolioDetailPage;
