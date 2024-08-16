"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import post1 from "../../../public/counterBG.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="footer py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* footer first div */}
            <div className="pr-8">
              <div className="title">
                <h1>about us</h1>
              </div>
              <div>
                <p className="text-[#b2c0d8] text-base tracking-wide">
                  Suspendisse non sem ante. Cras pretium gravida leo a
                  convallis. Nam malesuada interdum metus, sit amet dictum ante
                  congue eu. Maecenas ut maximus enim.
                </p>
              </div>
              <div className="footer-social mt-6 pb-4">
                <ul>
                  <li>
                    <Link href="/">
                      <FaFacebookF className="footer-social-icon text-white text-center" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaInstagram className="footer-social-icon text-white text-center" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaTwitter className="footer-social-icon text-white text-center" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaLinkedin className="footer-social-icon text-white text-center" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* footer second div */}
            <div>
              <div className="title">
                <h1>our links</h1>
              </div>
              <div className="footer-links flex items-cente  gap-16">
                <div>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/">About Us</Link>
                    </li>
                    <li>
                      <Link href="/">Programs</Link>
                    </li>
                    <li>
                      <Link href="/">Blog</Link>
                    </li>
                    <li>
                      <Link href="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/">About Us</Link>
                    </li>
                    <li>
                      <Link href="/">Programs</Link>
                    </li>
                    <li>
                      <Link href="/">Blog</Link>
                    </li>
                    <li>
                      <Link href="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* footer third div */}
            <div className="pr-8">
              <div className="title">
                <h1>latest posts</h1>
              </div>
              <div className="footer-event-list">
                <ul>
                  <li>
                    <Link href="/">
                      <div className="footer-event flex items-center gap-3">
                        <div
                          className="footer-event-image"
                          style={{ width: "100px", height: "80px" }}
                        >
                          <Image
                            src={post1}
                            alt="Event Banner Image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="footer-event-info">
                          <h5 className="text-[#fffc] tracking-wider">
                            Nothing impossble to need hard work
                          </h5>
                          <span className="text-main-color tracking-wider">
                            7 March, 2023
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <div className="footer-event flex items-center gap-3">
                        <div
                          className="footer-event-image"
                          style={{ width: "100px", height: "80px" }}
                        >
                          <Image
                            src={post1}
                            alt="Event Banner Image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="footer-event-info">
                          <h5 className="text-[#fffc] tracking-wider">
                            Nothing impossble to need hard work
                          </h5>
                          <span className="text-main-color tracking-wider">
                            7 March, 2023
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* footer last div */}
            <div>
              <div className="title">
                <h1>contact us</h1>
              </div>
              <div className="footer-contact-list">
                <ul>
                  <li>
                    {/* contact phone div */}
                    <div className="footer-contact flex items-center gap-3">
                      {/* icon */}
                      <div className="footer-contact-icon">
                        <FaPhone />
                      </div>
                      {/* info  */}
                      <div className="flex flex-col">
                        <Link href="/" className="tracking-wider">
                          +977 9853214780
                        </Link>
                        <Link href="/" className="tracking-wider">
                          +977 97351478825
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* contact mail div */}
                    <div className="footer-contact flex items-center gap-3">
                      {/* icon */}
                      <div className="footer-contact-icon">
                        <FaEnvelope />
                      </div>
                      {/* info  */}
                      <div className="flex flex-col">
                        <Link href="/" className="tracking-wider">
                          info@example.com
                        </Link>
                        <Link href="/" className="tracking-wider">
                          info@demo.com
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* contact address div */}
                    <div className="footer-contact flex items-center gap-3">
                      {/* icon */}
                      <div className="footer-contact-icon">
                        <GrLocation />
                      </div>
                      {/* info  */}
                      <div className="flex flex-col">
                        <Link href="/" className="tracking-wider">
                          Sundarharainch-10
                        </Link>
                        <Link href="/" className="tracking-wider">
                          Khorsane, Morang
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
