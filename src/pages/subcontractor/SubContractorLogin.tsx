"use client";

import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import subcontractor from "../../../public/subcontractor.jpg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ContractorFaq from "./ContractorFaq";

const SubContractorLogin = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (
        values.email === "demo@contractor.com" &&
        values.password === "demo12345"
      ) {
        // const id = "12345";
        // Redirect to the subcontractor page with the ID in the URL
        router.push(`/contractor`);
      } else {
        alert("Invalid email or password");
      }
    },
  });

  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg">
            <ContractorFaq />
            <div className="login-div flex items-center justify-center p-8 bg-white">
              <div className="w-full max-w-md">
                <h2 className="text-4xl font-bold text-center">
                  Subcontractor <br />
                  <span className="text-main-color">Login Form</span>
                </h2>
                <div className="mt-6">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email <span className="text-[#afaeae] pl-6">demo email: demo@contractor.com</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password <span className="text-[#afaeae] pl-6">demo password: demo12345</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-md shadow hover:bg-indigo-700 transition duration-200 w-full"
                      >
                        Login
                      </button>
                    </div>
                    <div className="pt-4">
                      <Link
                        href="/subcontractor-register"
                        className="text-main-color flex items-center gap-1"
                      >
                        {" "}
                        Become a Sub Contractor
                        <FaArrowRightLong />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubContractorLogin;
