"use client"

import ProjectDetail from "@/pages/project-detail/ProjectDetail";
import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../../../service/api.service";

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
      {/* <h1>Portfolio Detail Page</h1> */}
      {/* <p>Displaying details for portfolio ID: {id}</p> */}
      {/* <ProjectDetail /> */}
      {project ? (
        <ProjectDetail project={project} />
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

export default PortfolioDetailPage;
