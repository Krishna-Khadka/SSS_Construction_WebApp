"use client"
import React, { useState } from 'react'

import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.jpg";
import project4 from "../../../public/project4.jpg";
import project5 from "../../../public/project5.jpg";
import project6 from "../../../public/project6.jpg";
import project7 from "../../../public/project7.jpg";
import project8 from "../../../public/project8.jpg";
import project9 from "../../../public/project9.jpg";
import ContractorProject from './ContractorProject';

const projects = [
  {
    portfolio_id: "1",
    imgSrc: project1,
    category: "Engineering",
    title: "Building Construction",
  },
  {
    portfolio_id: "2",
    imgSrc: project2,
    category: "Engineering",
    title: "Industrial Design",
  },
  {
    portfolio_id: "3",
    imgSrc: project3,
    category: "Construction",
    title: "Architect Design",
  },
  {
    portfolio_id: "4",
    imgSrc: project4,
    category: "Engineering",
    title: "Residential Design",
  },
  {
    portfolio_id: "5",
    imgSrc: project5,
    category: "Construction",
    title: "Building Construction",
  },
  {
    portfolio_id: "6",
    imgSrc: project6,
    category: "Construction",
    title: "Industrial Design",
  },
  {
    portfolio_id: "7",
    imgSrc: project7,
    category: "Engineering",
    title: "Architect Design",
  },
  {
    portfolio_id: "8",
    imgSrc: project8,
    category: "Construction",
    title: "Residential Design",
  },
  {
    portfolio_id: "9",
    imgSrc: project9,
    category: "Construction",
    title: "Building Construction",
  },
];

type Tab = "Profile" | "Project"

const SubContractorInfo = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Profile");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <div>My Profile</div>
      case "Project":
        return (
          <div className="projectDiv grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ContractorProject
                key={project.portfolio_id}
                imgSrc={project.imgSrc}
                category={project.category}
                title={project.title}
                portfolio_id={project.portfolio_id}
              />
            ))}
          </div>
        )
    }
  }
  return (
    <>
      <div className="container">
        <nav>
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-6 border-b">
            <li
              onClick={() => handleTabChange("Profile")}
              style={{
                cursor: "pointer",
                fontWeight: activeTab === "Profile" ? "bold" : "normal",
              }}
              className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-main-color text-white"
            >
              Profile
            </li>
            <li
              onClick={() => handleTabChange("Project")}
              style={{
                cursor: "pointer",
                fontWeight: activeTab === "Project" ? "bold" : "normal",
              }}
              className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-main-color text-white"
            >
              Projects
            </li>
          </ul>
        </nav>
        <div>{renderContent()}</div>
      </div>
    </>
  )
}

export default SubContractorInfo