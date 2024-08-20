"use client";

import Link from "next/link";
import React, { useState, ChangeEvent } from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const SubcontractorForm = () => {
  const [category, setCategory] = useState<string>("");

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="subcontractor-bg">
        <div className="container">
          <div className="rounded-md">
            <h2 className="text-4xl font-bold text-center">
              Subcontractor{" "}
              <span className="text-main-color">Registration Form</span>
            </h2>
            <div className="pt-16">
              <form className="w-full grid gap-6 grid-cols-1 md:grid-cols-3">
                {/* Company Information */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Company Address
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter company address"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter city"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter country"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter zip/postal code"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter website URL"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Contact Person Name
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter contact person name"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Contact Person Email
                    </label>
                    <input
                      type="email"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter contact person email"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Contact Person Phone
                    </label>
                    <input
                      type="tel"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter contact person phone"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Business License Number
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter business license number"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter insurance provider"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Insurance Policy Number
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Enter insurance policy number"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Business License File
                    </label>
                    <input
                      type="file"
                      className="appearance-none block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-400 file:rounded-md file:bg-gray-50 file:text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Insurance Certificate File
                    </label>
                    <input
                      type="file"
                      className="appearance-none block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-400 file:rounded-md file:bg-gray-50 file:text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                      Certifications File
                    </label>
                    <input
                      type="file"
                      className="appearance-none block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-400 file:rounded-md file:bg-gray-50 file:text-gray-700"
                    />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                    Project Scope
                  </label>
                  <div className="flex gap-4 mb-4">
                    <select
                      className="form-select block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                      value={category}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Select Category</option>
                      <option value="construction">Construction</option>
                      <option value="engineering">Engineering</option>
                    </select>
                  </div>
                  <div
                    className={`grid grid-cols-1 ${
                      category === "construction"
                        ? "md:grid-cols-3"
                        : category === "engineering"
                        ? "md:grid-cols-3"
                        : ""
                    } gap-4`}
                  >
                    {category === "construction" && (
                      <>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600"
                          />
                          <span className="ml-2">Residential Construction</span>
                        </label>

                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600"
                          />
                          <span className="ml-2">Commercial Construction</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600"
                          />
                          <span className="ml-2">
                            Infrastructure Development
                          </span>
                        </label>
                      </>
                    )}

                    {category === "engineering" && (
                      <>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600"
                          />
                          <span className="ml-2">Structural Engineering</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600"
                          />
                          <span className="ml-2">Electrical Engineering</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600"
                          />
                          <span className="ml-2">Civil Engineering</span>
                        </label>
                      </>
                    )}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                    />
                    <span className="ml-2">
                      I agree to the terms and conditions
                    </span>
                  </label>
                </div>

                <div className="flex justify-start mt-6 md:col-span-3">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-md shadow hover:bg-indigo-700 transition duration-200"
                  >
                    Submit Registration
                  </button>
                </div>

                <div>
                  <Link href="/subcontractor" className="text-main-color flex items-center gap-1">
                    {" "}
                    Already a Sub Contractor
                    <FaArrowRightLong />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubcontractorForm;
