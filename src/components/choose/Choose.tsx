import React from "react";

import {
  FaShieldAlt,
  FaRecycle,
  FaHandshake,
  FaUsersCog,
  FaHandsHelping,
  FaAward,
} from "react-icons/fa";

import { MdSupportAgent, MdHistory } from "react-icons/md";
import worker from "../../../public/worker-choose.png";
import Image from "next/image";

interface ChooseLeftAreas {}

const Choose = () => {
  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex gap-4">
                <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                  <FaShieldAlt className="text-4xl" />
                </div>
                <div>
                  <h5 className="text-xl text-[#303030] font-bold">
                    Zero Harm
                  </h5>
                  <p className="text-[#7C7C7C] text-[15px] py-3">
                    Uemo enim ipsam laoreet quia voluptas sit aspernatur odit
                    fugit ipsum.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                  <FaRecycle className="text-4xl" />
                </div>
                <div>
                  <h5 className="text-xl text-[#303030] font-bold">
                    Zero Waste
                  </h5>
                  <p className="text-[#7C7C7C] text-[15px] py-3">
                    Uemo enim ipsam laoreet quia voluptas sit aspernatur odit
                    fugit ipsum.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                  <MdSupportAgent className="text-4xl" />
                </div>
                <div>
                  <h5 className="text-xl text-[#303030] font-bold">
                    Client Advocacy
                  </h5>
                  <p className="text-[#7C7C7C] text-[15px] py-3">
                    Uemo enim ipsam laoreet quia voluptas sit aspernatur odit
                    fugit ipsum.
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
                  <FaUsersCog className="text-4xl" />
                </div>
                <div>
                  <h5 className="text-xl text-[#303030] font-bold">
                    Diverse Expertise
                  </h5>
                  <p className="text-[#7C7C7C] text-[15px] py-3">
                    Uemo enim ipsam laoreet quia voluptas sit aspernatur odit
                    fugit ipsum.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                  <FaHandsHelping className="text-4xl" />
                </div>
                <div>
                  <h5 className="text-xl text-[#303030] font-bold">
                    Giving Back
                  </h5>
                  <p className="text-[#7C7C7C] text-[15px] py-3">
                    Uemo enim ipsam laoreet quia voluptas sit aspernatur odit
                    fugit ipsum.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="custom-bl-radius bg-main-color text-white h-16 w-28 flex items-center justify-center">
                  <MdHistory className="text-4xl" />
                </div>
                <div>
                  <h5 className="text-xl text-[#303030] font-bold">
                    We&#39;ve Proud Past
                  </h5>
                  <p className="text-[#7C7C7C] text-[15px] py-3">
                    Uemo enim ipsam laoreet quia voluptas sit aspernatur odit
                    fugit ipsum.
                  </p>
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
