"use client"


import OpenProjectDetail from "@/pages/subcontractor/OpenProjectDetail";
import React, { useEffect, useState } from "react";
import api from "../../../../service/api.service";

interface Params {
  params: {
    id: string;
  };
}

const PortfolioDetailPage = ({ params }: Params) => {
  const { id } = params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await api.get(
          `/projects/id/${id}`
        );
        setProject(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch project data:", error);
      }
    };
    fetchProjectData();
  }, [id]);

  return (
    <div>
      {/* <h1>Sub Contractor Detail Page</h1>
      <p>Displaying details for subcontractor ID: {id}</p> */}
      {/* <OpenProjectDetail /> */}

      {project ? (
        <OpenProjectDetail project={project} />
      ) : (
        <p>Loading Project Details.....</p>
      )}
    </div>
  );
};

export default PortfolioDetailPage;
