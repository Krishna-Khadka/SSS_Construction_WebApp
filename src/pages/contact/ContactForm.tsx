import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

import contactImage from "../../../public/contact-form-img.jpg";
import Image from "next/image";

const ContactForm = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-left pb-12">
              <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
                our services
              </h5>
              <h2 className="capitalize text-4xl font-extrabold text-[#0E121D] tracking-wider">
                Have An Upcoming Projects? <br /> Let’s Talk to Now!
              </h2>
            </div>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                    htmlFor="grid-first-name"
                  >
                    Your Name
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                    htmlFor="grid-last-name"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="email"
                    placeholder="Your Email Address"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                    htmlFor="grid-first-name"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                    htmlFor="grid-last-name"
                  >
                    Select Subjects
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full border border-gray-300 bg-white text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Select Subjects</option>
                      <option>Construction</option>
                      <option>Real Estate</option>
                      <option>Industry</option>
                      <option>Architect</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                    htmlFor="grid-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-message"
                    rows={8}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              <button
                  aria-label="Read more about this section"
                  className="border-2 bg-main-color text-white font-semibold uppercase tracking-wider text-base px-10 py-4 rounded-md flex items-center gap-2 transition-all duration-500 hover:bg-secondary-color"
                >
                  read more
                  <FaArrowRightLong />
                </button>
            </form>
          </div>
          <div>
            <Image
              src={contactImage}
              alt="Contact Image"
              className="max-w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
