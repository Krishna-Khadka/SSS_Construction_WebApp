"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ContractorProject from "./ContractorProject";

import project1 from "../../../public/project1.jpg"
import api from "../../../service/api.service";

const bids = [
  {
    projectName: "Build New Office Complex",
    bidAmount: 50000,
    submissionDate: "September 20, 2024",
    lastUpdated: "October 5, 2024",
    status: "pending",
  },
  {
    projectName: "Renovate Shopping Mall",
    bidAmount: 75000,
    submissionDate: "August 15, 2024",
    lastUpdated: "August 30, 2024",
    status: "successful",
  },
  {
    projectName: "School Construction Project",
    bidAmount: 62000,
    submissionDate: "July 10, 2024",
    lastUpdated: "July 25, 2024",
    status: "rejected",
  },
  {
    projectName: "Library Renovation",
    bidAmount: 40000,
    submissionDate: "October 1, 2024",
    lastUpdated: "October 7, 2024",
    status: "pending",
  },
];

type Tab = "Profile" | "My_Bids" | "New_Project";

const SubContractorInfo = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Profile");
  const [projects, setProjects] = useState<any[]>([]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const fetchProjects = async () => {
    try {
      const response = await api.get(
        "/projects"
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    if (activeTab === "New_Project") {
      fetchProjects();
    }
  }, [activeTab]);

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-200 text-yellow-800";
      case "successful":
        return "bg-green-200 text-green-800";
      case "rejected":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <div className="p-6 bg-white shadow-lg rounded-lg w-full">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                My Profile
              </h2>
              <p className="text-gray-600">
                Manage your account information and settings.
              </p>
            </div>

            {/* Basic Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline bg-gray-100"
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>

            {/* Company Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Company Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    placeholder="Doe Construction LLC"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Company Website
                  </label>
                  <input
                    type="url"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    placeholder="https://doeconstruction.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Services Offered
                </label>
                <input
                  type="text"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                  placeholder="Architectural Design, Residential Construction"
                />
              </div>
            </div>

            {/* Password Management */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Change Password
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    placeholder="Enter Current Password"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    placeholder="Enter New Password"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-gray-700 font-medium">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-end">
              <button className="bg-main-color hover:bg-secondary-color text-white font-semibold py-3 px-6 rounded-lg shadow transition-all ease-in-out duration-500">
                Save Changes
              </button>
            </div>
          </div>
        );

      case "My_Bids":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bids.map((bid, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {bid.projectName}
                  </h3>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusClass(
                      bid.status
                    )}`}
                  >
                    {bid.status.charAt(0).toUpperCase() + bid.status.slice(1)}
                  </span>
                </div>
                <div className="mt-3 text-gray-600">
                  <p>
                    <strong>Bid Amount:</strong> ${bid.bidAmount}
                  </p>
                  <p>
                    <strong>Submitted On:</strong> {bid.submissionDate}
                  </p>
                  <p>
                    <strong>Last Updated:</strong> {bid.lastUpdated}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                  {/* <button className="text-green-600 hover:underline mr-3">
                    Update Bid
                  </button>
                  <button className="text-red-600 hover:underline">
                    Withdraw Bid
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        );
      case "New_Project":
        return (
          <div className="projectDiv grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ContractorProject
                key={project.id}
                // imgSrc={project.fullPath || "./project1.jpg"}
                imgSrc={project1}
                category={project.category.title}
                title={project.name}
                portfolio_id={project.id.toString()}
              />
            ))}
          </div>
        );
    }
  };
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
              onClick={() => handleTabChange("My_Bids")}
              className={`flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center cursor-pointer bg-main-color text-white ${
                activeTab === "My_Bids" ? "font-bold" : ""
              }`}
            >
              My Bids
            </li>
            <li
              onClick={() => handleTabChange("New_Project")}
              style={{
                cursor: "pointer",
                fontWeight: activeTab === "New_Project" ? "bold" : "normal",
              }}
              className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-main-color text-white"
            >
              New Projects
            </li>
          </ul>
        </nav>
        <div>{renderContent()}</div>
      </div>
    </>
  );
};

export default SubContractorInfo;
