"use client";

import "./Newsletter.css";
import Image from "next/image";
import mail from "../../../public/send-mail.png";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import api from "../../../service/api.service";

// Define type for form values
interface FormValues {
  email: string;
}

export default function Newsletter() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  // Handle form submission
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await api.post("/subscribe", values);
      setAlertMessage(response.data[1]);
      setAlertType("success");
      resetForm();
    } catch (error) {
      setAlertMessage("Subscription failed. Please try again later.");
      setAlertType("error");
    }

    // Show alert for a few seconds
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 3000); // Alert disappears after 3 seconds
  };

  return (
    <div className="bg-[#125875] py-16 relative">
      {/* Top-right alert */}
      {alertMessage && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg text-white ${
            alertType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ zIndex: 1000 }}
        >
          {alertMessage}
        </div>
      )}

      <div className="w-[95%] sm:w-[95%] mx-auto md:container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* First div grid */}
          <div
            data-aos="fade-right"
            className="flex flex-wrap text-center items-center gap-8"
          >
            <div className="mx-auto sm:mx-auto md:mx-0">
              <Image
                src={mail}
                alt="Mail Image"
                className="h-auto max-w-full border-none shadow-none rounded-none"
              />
            </div>
            <div>
              <h2 className="text-[40px] text-white font-semibold tracking-wide">
                Subscribe for Newsletter
              </h2>
              <p className="text-white text-[15px] tracking-wide font-normal">
                Subscribe to get notified for our latest news and events
              </p>
            </div>
          </div>

          {/* Second div grid */}
          <div data-aos="fade-left" className="newsletter relative">
            <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
              {() => (
                <Form>
                  <Field
                    type="email"
                    name="email"
                    className="form-control pl-0 sm:pl-0 md:pl-5"
                    placeholder="Email Address........"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-newsletter px-[8px] sm:px-[8px] md:px-8"
                  >
                    subscribe now
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
