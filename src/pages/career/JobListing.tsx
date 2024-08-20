import React from "react";
import JobListingLayout from "./JobListingLayout";

const JobListing = () => {
  const jobData = [
    {
      title: "Civil Engineer",
      job_category: "Engineering",
      location: "Remote",
      job_type: "Full-time",
    },
    {
      title: "Project Manager",
      job_category: "Management",
      location: "On-site",
      job_type: "Full-time",
    },
    {
      title: "Architect",
      job_category: "Design",
      location: "New York, NY",
      job_type: "Part-time",
    },
    {
      title: "Structural Engineer",
      job_category: "Engineering",
      location: "Chicago, IL",
      job_type: "Contract",
    },
    {
      title: "Site Supervisor",
      job_category: "Construction",
      location: "Los Angeles, CA",
      job_type: "Full-time",
    },
    {
      title: "Interior Designer",
      job_category: "Design",
      location: "Remote",
      job_type: "Freelance",
    },
    {
      title: "Surveyor",
      job_category: "Surveying",
      location: "Dallas, TX",
      job_type: "Full-time",
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
