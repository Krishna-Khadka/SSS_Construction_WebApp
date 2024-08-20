import Link from "next/link";
import React from "react";

interface Job {
  title: string;
  job_category: string;
  location: string;
  job_type: string;
}

interface JobListingLayoutProps {
  jobs: Job[];
}

const JobListingLayout = ({ jobs = [] }: JobListingLayoutProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Job Title</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {jobs.map((job, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 transition-colors duration-200"
            >
              <td className="border-t px-6 py-4">{job.title}</td>
              <td className="border-t px-6 py-4">{job.job_category}</td>
              <td className="border-t px-6 py-4">{job.location}</td>
              <td className="border-t px-6 py-4">{job.job_type}</td>
              <td className="border-t px-6 py-4 flex items-center gap-5">
                <Link href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200">
                    View Details
                </Link>
                <Link href="#" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-200">
                    Apply Now
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListingLayout;
