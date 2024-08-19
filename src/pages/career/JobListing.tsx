import React from "react";
import JobListingLayout from "./JobListingLayout";

const JobListing = () => {
  const jobData = [
    {
      title: "Civil Engineer",
      function: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Project Manager",
      function: "Management",
      location: "On-site",
      type: "Full-time",
    },
    {
      title: "Architect",
      function: "Design",
      location: "New York, NY",
      type: "Part-time",
    },
    {
      title: "Structural Engineer",
      function: "Engineering",
      location: "Chicago, IL",
      type: "Contract",
    },
    {
      title: "Site Supervisor",
      function: "Construction",
      location: "Los Angeles, CA",
      type: "Full-time",
    },
    {
      title: "Interior Designer",
      function: "Design",
      location: "Remote",
      type: "Freelance",
    },
    {
      title: "Surveyor",
      function: "Surveying",
      location: "Dallas, TX",
      type: "Full-time",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="py-20">
        <div className="text-center">
          <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
          Join Our Team
          </h5>
          <h2 className="capitalize text-5xl font-extrabold text-[#0E121D] tracking-wider">
          Build Your Future With Us
          </h2>
        </div>
        <div className="pt-16">
        <JobListingLayout jobs={jobData} />
        </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
