"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import api from "../../../service/api.service";

interface Job {
  id: number;
  title: string;
  job_category: string;
  location: string;
  job_type: string;
  description: string;
}

interface JobListingLayoutProps {
  jobs: Job[];
}

interface ApplyNowFormValues {
  name: string;
  email: string;
  phone: string;
  resume_url: File | null;
  application_date: string;
}

const JobListingLayout: React.FC<JobListingLayoutProps> = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const closeModal = () => {
    setSelectedJob(null);
    setApplyingJob(null);
    setSubmissionMessage(null);
  };

  const applyNowSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    resume_url: Yup.mixed().required("Resume is required"),
    application_date: Yup.string().required("Application date is required"),
  });

  const handleApplyNowSubmit = async (
    values: ApplyNowFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (!applyingJob) return;

    const formData = new FormData();
    formData.append("job_id", applyingJob.id.toString());
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("application_date", values.application_date);
    formData.append("resume_url", values.resume_url as Blob);

    try {
      const response = await api.post(
        "/apply-now",
        formData
      );
      console.log(response.data);
      setSubmissionMessage(response.data.message);
      resetForm();
      setTimeout(closeModal, 2000); 
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmissionMessage("Failed to submit application. Please try again.");
    }
  };

  if (!Array.isArray(jobs)) {
    console.error("Invalid jobs data:", jobs);
    return <div>No jobs available.</div>;
  }

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
          {jobs.map((job) => (
            <tr
              key={job.id}
              className="hover:bg-gray-100 transition-colors duration-200"
            >
              <td className="border-t px-6 py-4">{job.title}</td>
              <td className="border-t px-6 py-4">{job.job_category}</td>
              <td className="border-t px-6 py-4">{job.location}</td>
              <td className="border-t px-6 py-4">{job.job_type}</td>
              <td className="border-t px-6 py-4 flex items-center gap-5">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  View Details
                </button>
                <button
                  onClick={() => setApplyingJob(job)}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-200"
                >
                  Apply Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for job details */}
      {/* {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-lg">
            <h3 className="text-2xl font-bold mb-4">{selectedJob.title}</h3>
            <p className="mb-2">
              <strong>Category:</strong> {selectedJob.job_category}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="mb-2">
              <strong>Type:</strong> {selectedJob.job_type}
            </p>
            <p className="mb-4">
              <strong>Description:</strong> {selectedJob.description}
            </p>
            <button
              onClick={closeModal}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )} */}

{selectedJob && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <div className="relative bg-white rounded-lg shadow-2xl p-6 w-11/12 max-w-xl transform transition-transform duration-300 scale-100">
      {/* Close Button */}
      <button
        onClick={closeModal}
        aria-label="Close modal"
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-200"
      >
        ✕
      </button>

      {/* Modal Title */}
      <h3
        id="modal-title"
        className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-4"
      >
        {selectedJob.title}
      </h3>

      {/* Modal Content */}
      <div id="modal-description" className="space-y-4">
        <p className="text-gray-700">
          <strong>Category:</strong> {selectedJob.job_category}
        </p>
        <p className="text-gray-700">
          <strong>Location:</strong> {selectedJob.location}
        </p>
        <p className="text-gray-700">
          <strong>Type:</strong> {selectedJob.job_type}
        </p>
        <p className="text-gray-700">
          <strong>Description:</strong> {selectedJob.description}
        </p>
      </div>

      {/* Footer with Buttons */}
      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={closeModal}
          className="py-2 px-4 bg-red-600 text-white rounded-lg transition-all duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


      {/* Modal for job application */}
      {applyingJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-lg">
            <h3 className="text-2xl font-bold mb-4">
              Apply for {applyingJob.title}
            </h3>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                resume_url: null,
                application_date: "",
              }}
              validationSchema={applyNowSchema}
              onSubmit={handleApplyNowSubmit}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block font-medium">Name</label>
                    <Field
                      type="text"
                      name="name"
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Phone</label>
                    <Field
                      type="text"
                      name="phone"
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Resume</label>
                    <input
                      type="file"
                      name="resume_url"
                      onChange={(event) => {
                        if (event.currentTarget.files?.[0]) {
                          setFieldValue("resume_url", event.currentTarget.files[0]);
                        }
                      }}
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                    <ErrorMessage
                      name="resume_url"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Application Date</label>
                    <Field
                      type="date"
                      name="application_date"
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                    <ErrorMessage
                      name="application_date"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            {submissionMessage && (
              <p className="mt-4 text-center font-medium">
                {submissionMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingLayout;
