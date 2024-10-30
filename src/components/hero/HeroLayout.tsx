"use client";

import Image, { StaticImageData } from "next/image";
import Modal from "react-modal";
import { Formik, Form, Field } from "formik";

import api from "../../../service/api.service.js";

import { FaArrowRightLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

interface HeroData {
  head: string;
  title: string;
  description: string;
  imgSrc: StaticImageData;
}

const HeroLayout = ({ head, title, description, imgSrc }: HeroData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={imgSrc}
        alt="image-slider"
        className="h-[90dvh] w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex justify-start items-center">
        <div className="container">
          <div className="w-full sm:w-full md:w-[550px] z-10">
            <h6 className="uppercase text-main-color font-bold text-base tracking-wider">
              {head}
            </h6>
            <h2 className="text-5xl font-bold text-white leading-[3.5rem]">
              {title}
            </h2>
            <p className="font-bold text-white py-4">{description}</p>
            <div className="mt-4 flex items-center gap-8">
              <Link href="/about">
                <button
                  aria-label="Read more about this section"
                  className="bg-transparent border-2 border-main-color text-white font-semibold uppercase tracking-wider text-base px-4 py-2 rounded-md flex items-center gap-2"
                >
                  read more
                  <FaArrowRightLong />
                </button>
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                className="bg-transparent border-2 border-main-color text-white font-semibold uppercase tracking-wider text-base px-4 py-2 rounded-md flex items-center gap-2"
              >
                request a quote
                <FaArrowRightLong />
              </Link>

              {/* Modal */}
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Request a Quote Modal"
                className="bg-white p-6 rounded-lg shadow-lg max-w-[1000px] h-auto mx-auto mt-20 relative z-[9999]"
                overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 z-[9998] flex justify-center items-center"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500"
                >
                  <RxCross1 size={20} />
                </button>
                <h2 className="text-4xl text-center font-semibold mb-8 tracking-wide text-main-color">
                  Request a Quote
                </h2>

                {/* Formik Form */}
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    project_name: "",
                    project_location: "",
                    project_category: "",
                    total_estimate: "",
                    submission_date: "",
                    project_details_file: null,
                  }}
                  onSubmit={async (values, { setSubmitting }) => {
                    try {
                      // Create FormData instance
                      const formData = new FormData();
                      formData.append("name", values.name);
                      formData.append("email", values.email);
                      formData.append("phone", values.phone);
                      formData.append("project_name", values.project_name);
                      formData.append(
                        "project_location",
                        values.project_location
                      );
                      formData.append(
                        "project_category",
                        values.project_category
                      );
                      formData.append("total_estimate", values.total_estimate);
                      formData.append(
                        "submission_date",
                        values.submission_date
                      );

                      // Append file only if it's present
                      if (values.project_details_file) {
                        formData.append(
                          "project_details_file",
                          values.project_details_file
                        );
                      }

                      // Send request
                      const response = await api.post(
                        "/quote-request",
                        formData,
                        {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        }
                      );

                      console.log("Response:", response.data);
                      closeModal();
                    } catch (error) {
                      console.error("Error submitting form:", error);
                    }
                    setSubmitting(false);
                  }}
                >
                  {({ setFieldValue, isSubmitting }) => (
                    <Form>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <Field
                            type="text"
                            name="name"
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <Field
                            type="text"
                            name="email"
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Your Email Address"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Phone
                          </label>
                          <Field
                            type="text"
                            name="phone"
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Your Phone Number"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Project Name
                          </label>
                          <Field
                            type="text"
                            name="project_name"
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Your Project Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Project Location
                          </label>
                          <Field
                            type="text"
                            name="project_location"
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Your Project Location"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Project Category
                          </label>
                          <Field
                            as="select"
                            name="project_category"
                            className="block appearance-none mt-1 w-full border border-gray-300 bg-white text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none"
                          >
                            <option value="">Select Category</option>
                            <option value="Construction">Construction</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Industry">Industry</option>
                            <option value="Architect">Architect</option>
                          </Field>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Total Estimate (in $)
                          </label>
                          <Field
                            type="text"
                            name="total_estimate"
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Estimated Total"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Submission Date
                          </label>
                          <Field
                            type="date"
                            name="submission_date"
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Project Detail Files (jpg, pdf, png)
                          </label>
                          <input
                            type="file"
                            name="project_details_file"
                            onChange={(event) => {
                              if (
                                event.currentTarget.files &&
                                event.currentTarget.files[0]
                              ) {
                                setFieldValue(
                                  "project_details_file",
                                  event.currentTarget.files[0]
                                );
                              }
                            }}
                            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                            accept=".jpg,.jpeg,.png,.pdf"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
