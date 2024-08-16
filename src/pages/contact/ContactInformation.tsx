import MapIframe from "@/components/map/MapIframe";
import Link from "next/link";
import React from "react";

import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";

const ContactInformation = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center gap-8 w-full">
          <div className="w-1/3">
            <div>
              <h2 className="text-3xl font-semibold text-title-color">
                Contact Information
              </h2>
            </div>
            <div>
              <ul>
                <li>
                  <div className="shadow-xl flex py-8 px-8 gap-5 rounded-lg">
                    <div className="contact-icon">
                      <FaLocationDot />
                    </div>
                    <div>
                      <h5 className="capitalize text-title-color text-xl font-semibold">
                        Our Address
                      </h5>
                      <p className="text-sm text-[#7C7C7C] font-medium leading-[26px]">
                        Holly Springs, North <br />
                        Carolina 27540
                      </p>
                    </div>
                  </div>
                </li>

                <li className="mt-4">
                  <div className="shadow-xl flex py-8 px-8 gap-5 rounded-lg">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div>
                      <h5 className="capitalize text-title-color text-xl font-semibold">
                        Contact Number
                      </h5>
                      <p className="text-sm text-[#7C7C7C] font-medium leading-[26px]">
                        Mobile: <Link href="#">+(919) 579-1490</Link>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="mt-4">
                  <div className="shadow-xl flex py-8 px-8 gap-5 rounded-lg">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h5 className="capitalize text-title-color text-xl font-semibold">
                        Email Address
                      </h5>
                      <p className="text-sm text-[#7C7C7C] font-medium leading-[26px]">
                        <Link href="#">info@ssnbuilders.com</Link> <br />
                        <Link href="#">ssnbuilders99@gmail.com</Link>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="mt-4">
                  <div className="shadow-xl flex py-8 px-8 gap-5 rounded-lg">
                    <div className="contact-icon">
                      <FaClock />
                    </div>
                    <div>
                      <h5 className="capitalize text-title-color text-xl font-semibold">
                        Working Hours
                      </h5>
                      <p className="text-sm text-[#7C7C7C] font-medium leading-[26px]">
                        Monday - Saturday: 8:00AM - 8:00PM
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/3">
            <MapIframe />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
