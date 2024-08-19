import React from "react";

interface Job {
  title: string;
  function: string;
  location: string;
  type: string;
}

interface JobListingLayoutProps {
  jobs: Job[];
}

const JobListingLayout = ({ jobs }: JobListingLayoutProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Job Title</th>
            <th className="py-3 px-6 text-left">Function</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-left">Type</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {jobs.map((job, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 transition-colors duration-200"
            >
              <td className="border-t px-6 py-4">{job.title}</td>
              <td className="border-t px-6 py-4">{job.function}</td>
              <td className="border-t px-6 py-4">{job.location}</td>
              <td className="border-t px-6 py-4">{job.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListingLayout;
