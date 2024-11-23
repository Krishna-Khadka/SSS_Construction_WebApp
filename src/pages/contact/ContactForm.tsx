"use client"

import React from "react";
import api from "../../../service/api.service";
import { FaArrowRightLong } from "react-icons/fa6";
import contactImage from "../../../public/contact-form-img.jpg";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

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
                Have An Upcoming Projects? <br /> Lets Talk Now!
              </h2>
            </div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const response = await api.post("/create/contact", values, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                  console.log("API Response:", response);
                  console.log("Response of Enquiry:", response.data);
                  resetForm();
                } catch (error) {
                  console.error("Error Submitting Form:", error);
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <Field
                        className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <Field
                        className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email Address"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <Field
                        className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <Field
                        className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Your Subject"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <Field
                        as="textarea"
                        className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"
                        name="message"
                        rows={8}
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    aria-label="Submit enquiry"
                    className="border-2 bg-main-color text-white font-semibold uppercase tracking-wider text-base px-10 py-4 rounded-md flex items-center gap-2 transition-all duration-500 hover:bg-secondary-color"
                    disabled={isSubmitting}
                  >
                    submit enquiry
                    <FaArrowRightLong />
                  </button>
                </Form>
              )}
            </Formik>
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
