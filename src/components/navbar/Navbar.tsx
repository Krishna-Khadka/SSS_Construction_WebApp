"use client";

import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
// import { AuthContext } from "@/providers/AuthProvider";
import { useAuth } from "../../app/context/UseAuth";
import Logo from "../../../public/logo.png";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import {
  FaEnvelope,
  FaLocationDot,
  FaPhoneVolume,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  // const checkAuthStatus = () => {
  //   const token = localStorage.getItem("authToken");
  //   setIsAuthenticated(!!token);
  // };

  // useEffect(() => {
  //   // Check auth status initially on mount
  //   checkAuthStatus();

  //   // Add event listener for storage changes
  //   const handleStorageChange = (event) => {
  //     if (event.key === "authToken") {
  //       checkAuthStatus(); // Recheck auth status if authToken changes
  //     }
  //   };
  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("subcontractor_id");
    setUser(null);
    // Optionally, redirect to home
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <nav className="w-full h-20 shadow-x">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20 w-full">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width="120"
              height="115"
              className="cursor-pointer"
              priority
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex items-center">
              <Link href="/">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                  Home
                </li>
              </Link>

              <Link href="/about">
                <div className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                  About Us
                </div>
              </Link>

              <Link href="/service">
                <div className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                  Services
                </div>
              </Link>

              <Link href="/portfolio">
                <div className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                  Portfolio
                </div>
              </Link>

              <div className="relative group">
                <li className="flex items-center ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-mainColor hover:pb-2 text-md text-secColor hover:text-mainColor duration-300 transition-all">
                  <span>Resources</span>
                  <MdArrowForwardIos className="ml-2 transform rotate-90 group-hover:rotate-0 transition-transform duration-300" />
                </li>
                <div className="absolute z-[90] left-0 w-48 bg-white border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link href="/career">
                    <div className="px-4 py-2 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                      Career
                    </div>
                  </Link>
                  <Link href="/blog">
                    <div className="px-4 py-2 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                      Blog
                    </div>
                  </Link>
                </div>
              </div>

              {/* <Link href="/contact">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                  Contact Us
                </li>
              </Link>

              <Link href="/contractor">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                  Sub Contractors
                </li>
              </Link>
              <Link href={user ? "#" : "/login"}>
                <li
                  onClick={user ? handleLogout : undefined}
                  className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all"
                >
                  {user ? "Logout" : "Login"}
                </li>
              </Link> */}

              {/* Conditionally render Sub Contractors link only if user is logged in */}
              {/* Login/Logout/Contractor Button */}
              {user ? (
                <>
                  <li
                    onClick={handleLogout}
                    className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all cursor-pointer"
                  >
                    Logout
                  </li>
                  <li
                    onClick={() => router.push("/contractor")}
                    className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all cursor-pointer"
                  >
                    Contractor
                  </li>
                </>
              ) : (
                <li
                  onClick={() => router.push("/login")}
                  className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all cursor-pointer"
                >
                  Login
                </li>
              )}
              <Link href="/contact">
                <div className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all">
                  Contact
                </div>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 w-[85%]  sm:hidden h-screen bg-gray-900 p-10 z-50 ease-in duration-500 ${
          menuOpen ? "left-0" : "left-[-100%]"
        }`}
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <div className="flex w-full items-center justify-end">
          {/* <Link href="/navbar">
            <Image
              src={Logo}
              alt="Logo"
              width="80"
              height="75"
              className="cursor-pointer"
              priority
            />
          </Link> */}
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-white" />
          </div>
        </div>

        {/* mobile nav navigation links */}
        <div className="flex flex-col">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 tracking-wider cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Home
              </li>
            </Link>

            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                About Us
              </li>
            </Link>

            <Link href="/service">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Services
              </li>
            </Link>

            <Link href="/portfolio">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Portfolio
              </li>
            </Link>

            <Link href="/career">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Career
              </li>
            </Link>

            <Link href="/blog">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Blog
              </li>
            </Link>

            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Contact
              </li>
            </Link>

            {/* <Link href="/contractor">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Sub Contractors
              </li>
            </Link>
            <Link href={user ? "#" : "/login"}>
              <li
                onClick={user ? handleLogout : undefined}
                className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all"
              >
                {user ? "Logout" : "Login"}
              </li>
            </Link> */}

            {/* Conditionally render Sub Contractors link only if user is logged in */}
            {/* Login/Logout/Contractor Button */}
            {user ? (
              <>
                <li
                  onClick={handleLogout}
                  className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all cursor-pointer"
                >
                  Logout
                </li>
                <li
                  onClick={() => router.push("/contractor")}
                  className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all cursor-pointer"
                >
                  Contractor
                </li>
              </>
            ) : (
              <li
                onClick={() => router.push("/login")}
                className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-main-color hover:pb-2 text-md text-secColor hover:text-main-color duration-300 transition-all cursor-pointer"
              >
                Login
              </li>
            )}
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* mobile nav contact details */}
        <div className="flex flex-col mt-8 border-b border-gray-500 pb-4">
          <div className="flex items-center gap-4">
            <span className="icon-bg">
              <FaEnvelope size={18} className="cursor-pointer text-white" />
            </span>
            <Link href="#">
              <h3 className="text-lg font-normal tracking-wider text-white">
                info@ssnbuilders.com
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-4 py-4">
            <span className="icon-bg">
              <FaPhoneVolume size={18} className="cursor-pointer text-white" />
            </span>
            <Link href="/">
              <h3 className="text-lg font-normal tracking-wider text-white">
                (919) 579-1490
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="icon-bg">
              <FaLocationDot size={18} className="cursor-pointer text-white" />
            </div>
            <h3 className="text-lg font-normal tracking-wider text-white">
              Holly Springs, North Carolina 27540
            </h3>
          </div>
        </div>

        {/* mobile nav social links */}
        <div className="flex flex-row items-center mt-8 gap-4 pb-4">
          <span className="icon-bg">
            <FaFacebook size={18} className="cursor-pointer text-white" />
          </span>
          <span className="icon-bg">
            <FaInstagram size={18} className="cursor-pointer text-white" />
          </span>
          <span className="icon-bg">
            <FaTwitter size={18} className="cursor-pointer text-white" />
          </span>
          <span className="icon-bg">
            <FaLinkedin size={18} className="cursor-pointer text-white" />
          </span>
        </div>
      </div>
    </nav>
  );
}
