import React from "react";

import {
  FaGraduationCap,
  FaCogs,
  FaClock,
  FaThumbsUp,
  FaLeaf,
  FaHammer,
} from "react-icons/fa";

import { MdSupportAgent, MdHistory } from "react-icons/md";
import worker from "../../../public/worker-choose.png";
import Image from "next/image";

const Choose = () => {
  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[36px] text-[#0E121D] font-bold">
              Why Work With Us
            </h2>
            <p className="text-[#7C7C7C] text-base">
              Collaboratively administrate empowered markets via plug-and-play
              networks.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
              <div>
                <div className="flex gap-4">
                  <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                    <FaGraduationCap className="text-4xl" />
                  </div>
                  <div>
                    <h5 className="text-xl text-[#303030] font-bold">
                      Expertise
                    </h5>
                    <p className="text-[#7C7C7C] text-[15px] py-3">
                      Building Your Dreams With Precision
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                    <FaCogs className="text-4xl" />
                  </div>
                  <div>
                    <h5 className="text-xl text-[#303030] font-bold">
                      Tailored Solutions
                    </h5>
                    <p className="text-[#7C7C7C] text-[15px] py-3">
                      Your Vision, Our Blueprint
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                    <FaLeaf className="text-4xl" />
                  </div>
                  <div>
                    <h5 className="text-xl text-[#303030] font-bold">
                      Sustainable Practices
                    </h5>
                    <p className="text-[#7C7C7C] text-[15px] py-3">
                      Building for the Future, Responsibly
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={worker}
                  alt="Worker Image"
                  className="max-w-full h-full"
                />
              </div>
              <div>
                <div className="flex gap-4">
                  <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                    <FaClock className="text-4xl" />
                  </div>
                  <div>
                    <h5 className="text-xl text-[#303030] font-bold">
                      Timely Completion
                    </h5>
                    <p className="text-[#7C7C7C] text-[15px] py-3">
                      Delivering on Promises, Every Time
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                    <FaThumbsUp className="text-4xl" />
                  </div>
                  <div>
                    <h5 className="text-xl text-[#303030] font-bold">
                      Satisfaction Guaranteed
                    </h5>
                    <p className="text-[#7C7C7C] text-[15px] py-3">
                      Your Delight, Our Standard
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                    <FaHammer className="text-4xl" />
                  </div>
                  <div>
                    <h5 className="text-xl text-[#303030] font-bold">
                      Quality Craftsmanship
                    </h5>
                    <p className="text-[#7C7C7C] text-[15px] py-3">
                      Crafting Excellence, Every Step of the Way
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
