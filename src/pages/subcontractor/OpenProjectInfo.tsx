"use client"

import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import api from "../../../service/api.service";

interface Project {
  id: number;
  name: string;
  // client_information?: string;
  location: string;
  description: string;
  start_date: string;
  status: string;
}

interface FormValues {
  project_id: number;
  subcontractor_id: number;
  proposal: string;
  total_bid_amount: string;
  breakdown_of_costs: string;
  payment_terms: string;
  warranties: string;
  signature: string;
  date_of_signing: string;
  attachments: string[];
  status: string;
}

const OpenProjectInfo = ({project}: { project: Project | null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) {
    return (
      <div className="container">
        <p>Project details are not available.</p>
      </div>
    );
  }

  const initialValues: FormValues = {
    project_id: 25,
    subcontractor_id: 3,
    proposal: "",
    total_bid_amount: "",
    breakdown_of_costs: "",
    payment_terms: "",
    warranties: "",
    signature: "",
    date_of_signing: "",
    attachments: [],
    status: "submitted",
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const submitProposal = async (values: any, setSubmitting: any) => {
    try {
      const response = await api.post(
        "/proposal/submit",
        values
      );
      // Handle the response, e.g., show a success message or redirect
      console.log("Response:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error submitting proposal:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <div className="bg-[#1D1D25] text-white py-8 px-9">
            <h5 className="text-2xl font-bold tracking-wider mb-5">
              Project Information
            </h5>
            <ul>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                <strong className="inline-flex w-20">Client:</strong>
                <span> RRS Company</span>
              </li>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                <strong className="inline-flex w-20">Location:</strong>
                {/* <span> San Francisco</span> */}
                <span>{project.location || "N/A"}</span>
              </li>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                <strong className="inline-flex w-20">Area(sf):</strong>
                <span> 550,000 sf</span>
              </li>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                {/* <strong className="inline-flex w-20">Year:</strong> */}
                <span>{new Date(project.start_date).getFullYear()}</span>
              </li>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                <strong className="inline-flex w-20">Budget:</strong>
                <span> $245000000 </span>
              </li>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                <strong className="inline-flex w-20">Architect:</strong>
                <span> Scott & Austin </span>
              </li>
              <li className="text-sm">
                <strong className="inline-flex w-20">Sector:</strong>
                <span> Tunnel, Transport </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-6">
            <h2 className="text-4xl font-bold text-main-color">
              {/* Mountain Tunnel */}
              {project.name}
            </h2>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="bg-main-color text-[17px] inline-block py-2 px-6 font-semibold text-white rounded-xl uppercase tracking-wider hover:bg-secondary-color ease-in-out duration-500 transition-all"
            >
              Submit a Bid
            </Link>
            {/* Modal */}
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              contentLabel="Submit a Bid Modal"
              className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
              overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
            >
              <h2 className="text-xl font-semibold mb-4">Submit a Bid</h2>

              <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("Submitted values:", values);
                  submitProposal(values, setSubmitting);
                  closeModal();
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, setFieldValue }) => (
                  <Form>
                    {/* Two-column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Proposal */}
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Proposal
                        </label>
                        <Field
                          as="textarea"
                          name="proposal"
                          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                          placeholder="Describe your proposal"
                        />
                      </div>

                      {/* Total Bid Amount */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Total Bid Amount ($)
                        </label>
                        <Field
                          type="number"
                          name="total_bid_amount"
                          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                          placeholder="Enter total bid amount"
                        />
                      </div>

                      {/* Breakdown of Costs */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Breakdown of Costs
                        </label>
                        <Field
                          as="textarea"
                          name="breakdown_of_costs"
                          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                          placeholder="e.g., material: 20000, labour: 4000, etc."
                        />
                      </div>

                      {/* Payment Terms */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Payment Terms
                        </label>
                        <Field
                          as="textarea"
                          name="payment_terms"
                          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                          placeholder="Describe payment terms"
                        />
                      </div>

                      {/* Warranties */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Warranties
                        </label>
                        <Field
                          as="textarea"
                          name="warranties"
                          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                          placeholder="Describe warranties"
                        />
                      </div>

                      {/* Signature */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Signature
                        </label>
                        <Field
                          type="text"
                          name="signature"
                          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                          placeholder="Enter your name as signature"
                        />
                      </div>

                      {/* Date of Signing */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Date of Signing
                        </label>
                        <Field
                          type="date"
                          name="date_of_signing"
                          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                        />
                      </div>

                      {/* Attachments */}
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Attachments
                        </label>
                        <input
                          type="file"
                          multiple
                          className="mt-1 block w-full"
                          onChange={(event) => {
                            const files = Array.from(
                              event.currentTarget.files || []
                            );
                            setFieldValue(
                              "attachments",
                              files.map((file) => file.name)
                            );
                          }}
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex justify-end gap-4">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Modal>
          </div>
          <div>
          {project.description}
            {/* <p className="text-[#1D1D1D] leading-[1.7] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem?
              Consectetur, et, aut. A, corporis officia eius dicta explicabo
              saepe nesciunt fugit quas!
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenProjectInfo;
