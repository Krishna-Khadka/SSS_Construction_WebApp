"use client"

import React, { useState } from "react";
import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.jpg";
import project4 from "../../../public/project4.jpg";
import project5 from "../../../public/project5.jpg";
import project6 from "../../../public/project6.jpg";
import project7 from "../../../public/project7.jpg";
import project8 from "../../../public/project8.jpg";
import project9 from "../../../public/project9.jpg";
import PortfolioLayout from "./PortfolioLayout";

type Tab = "All_Projects" | "Engineering" | "Construction";

const portfolios = [
  { imgSrc: project1, category: "Engineering", title: "Building Construction" },
  { imgSrc: project2, category: "Engineering", title: "Industrial Design" },
  { imgSrc: project3, category: "Construction", title: "Architect Design" },
  { imgSrc: project4, category: "Engineering", title: "Residential Design" },
  {
    imgSrc: project5,
    category: "Construction",
    title: "Building Construction",
  },
  { imgSrc: project6, category: "Construction", title: "Industrial Design" },
  { imgSrc: project7, category: "Engineering", title: "Architect Design" },
  { imgSrc: project8, category: "Construction", title: "Residential Design" },
  {
    imgSrc: project9,
    category: "Construction",
    title: "Building Construction",
  },
];

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("All_Projects");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const filteredPortfolios = portfolios.filter(
    (portfolio) =>
      activeTab === "All_Projects" || portfolio.category === activeTab
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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredPortfolios.map((portfolio, index) => (
            <PortfolioLayout
              key={index}
              imgSrc={portfolio.imgSrc}
              category={portfolio.category}
              title={portfolio.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
