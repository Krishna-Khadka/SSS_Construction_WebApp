"use client";

import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field } from "formik";

const OpenProjectInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
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
                <span> San Francisco</span>
              </li>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                <strong className="inline-flex w-20">Area(sf):</strong>
                <span> 550,000 sf</span>
              </li>
              <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                <strong className="inline-flex w-20">Year:</strong>
                <span>2019</span>
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
              Mountain Tunnel
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

              {/* Form inside the modal using Formik */}
              <Formik
                initialValues={{ name: "", bidAmount: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  // Handle form submission
                  console.log("Submitted values:", values);
                  // Close modal after submission
                  closeModal();
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
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
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Bid Amount
                      </label>
                      <Field
                        type="number"
                        name="bidAmount"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                        placeholder="Enter Bid Amount in $"
                      />
                    </div>
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
                      className="ml-4 bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition-all"
                    >
                      Cancel
                    </button>
                  </Form>
                )}
              </Formik>
            </Modal>
          </div>
          <div>
            <p className="text-[#1D1D1D] leading-[1.7] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem?
              Consectetur, et, aut. A, corporis officia eius dicta explicabo
              saepe nesciunt, mollitia minima, atque maiores optio cum. Atque
              amet unde impedit voluptate cumque distinctio minima, aspernatur
              nemo! Expedita in, numquam blanditiis ullam rem!
            </p>
            <p className="text-[#1D1D1D] leading-[1.7] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum
              fugit officia dolores eligendi, rem. Quibusdam quasi impedit
              perspiciatis iure maiores, eaque numquam doloremque, quo nam
              soluta itaque obcaecati tempore!.
            </p>
            <p className="text-[#1D1D1D] leading-[1.7] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              ex, nam adipisci dolores laborum earum. Unde cum, ut nostrum nihil
              alias, laudantium molestiae, vitae quidem dolorem officiis ipsum.
              Aliquid nemo consequuntur cupiditate delectus sapiente doloribus
              dolorem, at suscipit, non laudantium mollitia magnam repellat
              atque quia! Aut, veniam, nam. Ex porro optio facilis nostrum, qui
              ipsa?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenProjectInfo;
