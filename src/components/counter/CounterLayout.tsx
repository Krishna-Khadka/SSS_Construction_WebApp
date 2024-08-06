import React from "react";

import { StaticImageData } from "next/image";

import crane from "../../../public/crane.png";
import worker from "../../../public/worker.png";
import revenue from "../../../public/revenue.png";
import location from "../../../public/location.png";
import Image from "next/image";

interface Counter {
  imgSrc: StaticImageData;
  data: number;
  description: string;
}

const CounterLayout = ({ imgSrc, data, description }: Counter) => {
  return (
    <>
      <div className="flex items-center justify-center sm:justify-center md:justify-start gap-8 sm:gap-8 md:gap-4 pt-4">
        {/* icon div  */}
        <div>
          <Image src={imgSrc} alt="icon" className="w-20" />
        </div>
        {/* data div  */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <p className="text-white text-6xl font-extrabold">
              <span>{data}</span>
            </p>
          </div>
          <div>
            <p className="capitalize text-base text-[#FBFCF8] font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterLayout;
