"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../service/api.service.js"; // Import the API instance
import Link from "next/link.js";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Initial form values
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      // Make a POST request to the /register endpoint using the api instance
      const response = await api.post("/register", values);

      // Check if registration was successful
      if (response.data.status) {
        // Save token to local storage
        localStorage.setItem("token", response.data.token);

        console.log("Registration successful:", response.data);
        router.push("/login"); // Redirect to homepage on success
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>

        {/* Error Dialog */}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            <p>{error}</p>
          </div>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-600 mt-1"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-600 mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-600 mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>

        {/* Register Link */}
        <p className="flex items-center gap-3 mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <Link href="/login">
            <span className="text-blue-600 hover:underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
