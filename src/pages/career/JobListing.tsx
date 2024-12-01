"use client"

import React, { useEffect, useState } from "react";
import JobListingLayout from "./JobListingLayout";
import axios from "axios";
import api from "../../../service/api.service";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get(
          "/careers"
        );
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <JobListingLayout jobs={jobs} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
