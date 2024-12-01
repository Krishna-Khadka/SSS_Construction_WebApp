"use client";

import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import project8 from "../../../public/project8.jpg";

import axios from "axios";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import api from "../../../service/api.service";

type Tab = "All_Projects" | "Engineering" | "Construction" | string;

interface Project {
  id: string;
  fullPath: string;
  name: string;
  category: {
    title: string;
  };
}

interface ApiResponseProject {
  id: number;
  fullPath: string;
  name: string;
  category: {
    title: string;
  };
}

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("All_Projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  // Fetch project data from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get<ApiResponseProject[]>(
          "/projects"
        );
        const data = response.data;
        console.log(data);

        const completedProjects = data.filter(
          (project: any) => project.status === "completed"
        );
        

        // Extract categories dynamically from the project data
        const uniqueCategories = Array.from(
          new Set(data.map((project: any) => project.category.title))
        );

        setCategories(uniqueCategories);

        // Map the API data to fit the required project structure
        const projectsData = data.map((project: any) => ({
          id: project.id.toString(),
          fullPath: project.fullPath,
          name: project.name,
          category: {
            title: project.category.title,
          },
        }));

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      activeTab === "All_Projects" || project.category.title === activeTab
  );

  return (
    <>
      <div className="container">
        <nav>
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-6 border-b">
            <li
              onClick={() => handleTabChange("All_Projects")}
              style={{
                cursor: "pointer",
                fontWeight: activeTab === "All_Projects" ? "bold" : "normal",
              }}
              className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-main-color text-white"
            >
              All Projects
            </li>
            <li
              onClick={() => handleTabChange("Engineering")}
              style={{
                cursor: "pointer",
                fontWeight: activeTab === "Engineering" ? "bold" : "normal",
              }}
              className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-main-color text-white"
            >
              Engineering
            </li>
            <li
              onClick={() => handleTabChange("Construction")}
              style={{
                cursor: "pointer",
                fontWeight: activeTab === "Construction" ? "bold" : "normal",
              }}
              className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-main-color text-white"
            >
              Construction
            </li>
          </ul>
        </nav>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative w-full h-[360px] overflow-hidden group">
              <Image
                // src={project.fullPath || "/project8.jpg"}
                // src={project.fullPath ? project.fullPath : project8}
                src={project8}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                width={500}
                height={300}
              />
              <div className="absolute bottom-0 w-full bg-white opacity-0 group-hover:opacity-95 transition-all duration-700 p-4">
                <div className="project-link-icon absolute top-3 right-3">
                  <Link href={`/portfolio/project-detail/${project.id}`} passHref>
                    <MdKeyboardDoubleArrowRight className="text-white text-2xl" />
                  </Link>
                </div>
                <div className="pt-6 pr-8">
                  <p className="text-base font-bold uppercase text-main-color tracking-wider pb-1">
                    {project.category.title}
                  </p>
                  <h2 className="capitalize text-2xl font-bold text-title-color">
                    {project.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </>
  );
};

export default PortfolioPage;
