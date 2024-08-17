import React from "react";

import about_1 from "../../../public/about_1.jpg";
import worker from "../../../public/worker.png";
import certificate from "../../../public/certificate.png";
import Image from "next/image";

const AboutInfo = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center gap-5">
          <div>
            <Image 
            src={about_1}
            alt="about Image"
            className="max-w-full h-full object-cover"
            />
          </div>
          <div>
            <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
              our services
            </h5>
            <h2 className="capitalize text-[40px] font-extrabold text-[#0E121D] tracking-wide leading-[1.2]">
              We Are Always Think On <br />
              Your Dream
            </h2>
            <p className="text-[#1D1D1D] py-4">
              Many modern construction companies focus on sustainable building
              practices, incorporating eco-friendly material energy-efficient
              systems and environmental conscious designs to reduce the
              environmental impact of their projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={worker}
                  alt="Worker Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  Quality And Expert Team Members
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  Initial phase involving project conceptualization, design, and
                  obtaining necessary.
                </p>
              </div>
              <div className="bg-[#F8F8F8] flex flex-col gap-2 py-6 px-6">
                <Image
                  src={certificate}
                  alt="Worker Image"
                  className="w-[60px] h-[60px] object-cover"
                />
                <h6 className="text-title-color text-lg font-semibold">
                  Certified & Awards winner
                </h6>
                <p className="text-[#1D1D1D] text-sm font-medium">
                  Initial phase involving project conceptualization, design, and
                  obtaining necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
