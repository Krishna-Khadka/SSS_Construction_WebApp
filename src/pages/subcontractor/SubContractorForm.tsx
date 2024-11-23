"use client";

import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { Formik, useFormikContext, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { FaArrowRightLong } from "react-icons/fa6";

interface FormValues {
  company_name: string;
  company_address: string;
  city: string;
  country: string;
  zip_postal_code: string;
  website: string;
  contact_person_name: string;
  contact_person_email: string;
  contact_person_phone: string;
  business_license_number: string;
  insurance_provider: string;
  insurance_policy_number: string;
  business_license_file: File | null;
  insurance_certificate_file: File | null;
  certifications_file: File | null;
  agreement_to_terms: boolean;
}

const SubcontractorForm = () => {
  const [category, setCategory] = useState<string>("");

  // Validation schema
  const validationSchema = Yup.object().shape({
    company_name: Yup.string().required("Company Name is required"),
    // business_license_file: Yup.mixed().required(
    //   "Business License File is required"
    // ),
    // insurance_certificate_file: Yup.mixed().required(
    //   "Insurance Certificate File is required"
    // ),
    // certifications_file: Yup.mixed().required(
    //   "Certifications File is required"
    // ),
    // agreement_to_terms: Yup.boolean()
    //   .oneOf([true], "You must agree to the terms")
    //   .required("Agreement is required"),
  });

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: File | null) => void
  ) => {
    const { name, files } = event.target;
    setFieldValue(name, files && files[0] ? files[0] : null);
  };

  // Form submit handler
  const handleSubmit = async (values: FormValues) => {
    const formData = new FormData();
    formData.append("company_name", values.company_name);
    formData.append("company_address", values.company_address);
    formData.append("city", values.city);
    formData.append("country", values.country);
    formData.append("zip_postal_code", values.zip_postal_code);
    formData.append("website", values.website);
    formData.append("contact_person_name", values.contact_person_name);
    formData.append("contact_person_email", values.contact_person_email);
    formData.append("contact_person_phone", values.contact_person_phone);
    formData.append("business_license_number", values.business_license_number);
    formData.append("insurance_provider", values.insurance_provider);
    formData.append("insurance_policy_number", values.insurance_policy_number);

    // Append file fields conditionally
    if (values.business_license_file) {
      formData.append("business_license_file", values.business_license_file);
    }
    if (values.insurance_certificate_file) {
      formData.append(
        "insurance_certificate_file",
        values.insurance_certificate_file
      );
    }
    if (values.certifications_file) {
      formData.append("certifications_file", values.certifications_file);
    }

    formData.append(
      "agreement_to_terms",
      values.agreement_to_terms ? "true" : "false"
    );

    try {
      const response = await axios.post(
        "https://ssnbuilders.ujwalkoirala.com.np/api/register/subcontractor",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Form submitted successfully!");
      console.log(response.data);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed.");
    }
  };

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
              <Formik
                initialValues={{
                  company_name: "",
                  company_address: "",
                  city: "",
                  country: "",
                  zip_postal_code: "",
                  website: "",
                  contact_person_name: "",
                  contact_person_email: "",
                  contact_person_phone: "",
                  business_license_number: "",
                  insurance_provider: "",
                  insurance_policy_number: "",
                  business_license_file: null,
                  insurance_certificate_file: null,
                  certifications_file: null,
                  agreement_to_terms: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="w-full grid gap-6 grid-cols-1 md:grid-cols-3">
                    {/* Company Information */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Company Name
                        </label>
                        <Field
                          type="text"
                          name="company_name"
                          className="form-input"
                          placeholder="Enter company name"
                        />
                        <ErrorMessage
                          name="company_name"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Company Address
                        </label>
                        <Field
                          type="text"
                          name="company_address"
                          className="form-input"
                          placeholder="Enter company address"
                        />
                        <ErrorMessage
                          name="company_address"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          City
                        </label>
                        <Field
                          type="text"
                          name="city"
                          className="form-input"
                          placeholder="Enter city"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Country
                        </label>
                        <Field
                          type="text"
                          name="country"
                          className="form-input"
                          placeholder="Enter country"
                        />
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Zip/Postal Code
                        </label>
                        <Field
                          type="text"
                          name="zip_postal_code"
                          className="form-input"
                          placeholder="Enter zip code"
                        />
                        <ErrorMessage
                          name="zip_postal_code"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Website
                        </label>
                        <Field
                          type="url"
                          name="website"
                          className="form-input"
                          placeholder="Enter website URL"
                        />
                        <ErrorMessage
                          name="website"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Contact Person Name
                        </label>
                        <Field
                          type="text"
                          name="contact_person_name"
                          className="form-input"
                          placeholder="Enter contact person name"
                        />
                        <ErrorMessage
                          name="contact_person_name"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Contact Person Email
                        </label>
                        <Field
                          type="email"
                          name="contact_person_email"
                          className="form-input"
                          placeholder="Enter contact person email"
                        />
                        <ErrorMessage
                          name="contact_person_email"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Contact Person Phone
                        </label>
                        <Field
                          type="tel"
                          name="contact_person_phone"
                          className="form-input"
                          placeholder="Enter contact person phone"
                        />
                        <ErrorMessage
                          name="contact_person_phone"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Business License Number
                        </label>
                        <Field
                          type="text"
                          name="business_license_number"
                          className="form-input"
                          placeholder="Enter business license number"
                        />
                        <ErrorMessage
                          name="business_license_number"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Insurance Provider
                        </label>
                        <Field
                          type="text"
                          name="insurance_provider"
                          className="form-input"
                          placeholder="Enter insurance provider"
                        />
                        <ErrorMessage
                          name="insurance_provider"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Insurance Policy Number
                        </label>
                        <Field
                          type="text"
                          name="insurance_policy_number"
                          className="form-input"
                          placeholder="Enter insurance policy number"
                        />
                        <ErrorMessage
                          name="insurance_policy_number"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Business License File
                        </label>
                        <input
                          type="file"
                          name="business_license_file"
                          onChange={(event) =>
                            handleFileChange(event, setFieldValue)
                          }
                          className="form-input"
                        />
                        <ErrorMessage
                          name="business_license_file"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Insurance Certificate File
                        </label>
                        <input
                          type="file"
                          name="insurance_certificate_file"
                          onChange={(event) =>
                            handleFileChange(event, setFieldValue)
                          }
                          className="form-input"
                        />
                        <ErrorMessage
                          name="insurance_certificate_file"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-[15px] font-medium mb-2">
                          Certifications File
                        </label>
                        <input
                          type="file"
                          name="certifications_file"
                          onChange={(event) =>
                            handleFileChange(event, setFieldValue)
                          }
                          className="form-input"
                        />
                        <ErrorMessage
                          name="certifications_file"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>

                    {/* <div className="md:col-span-3">
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
                </div> */}

                    <div className="md:col-span-3">
                      <label className="inline-flex items-center">
                        <Field
                          type="checkbox"
                          name="agreement_to_terms"
                          checked={values.agreement_to_terms} // Bind checked to formik value
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFieldValue(
                              "agreement_to_terms",
                              e.target.checked
                            )
                          } // Explicitly set the value
                        />
                        <span className="ml-2">
                          I agree to the terms and conditions
                        </span>
                      </label>
                      <ErrorMessage
                        name="agreement_to_terms"
                        component="div"
                        className="text-red-500"
                      />
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
                      <Link
                        href="/subcontractor"
                        className="text-main-color flex items-center gap-1"
                      >
                        {" "}
                        Already a Sub Contractor
                        <FaArrowRightLong />
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubcontractorForm;
