import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { BiSolidQuoteAltRight } from "react-icons/bi";

interface Reviews {
  description: string;
  name: string;
  designation: string;
}

const TestimonialLayout = ({ description, name, designation }: Reviews) => {
  return (
    <>
      <div className="relative bg-[#1D212D]/70 flex flex-col text-white justify-center items-center py-10 px-8 max-h-full">
        <div className="absolute inset-0 flex justify-center items-center opacity-10">
          <BiSolidQuoteAltRight size={150} className="text-main-color" />
        </div>
        <div className="text-center italic z-10 flex-grow flex flex-col justify-center">
          <p className="inline-block">
            <span className="text-main-color text-xl font-bold pr-2">&quot;</span>
            {description}
            <span className="text-main-color text-xl font-bold pl-2">&quot;</span>
          </p>
        </div>
        <div className="z-10 mt-4">
          <h2 className="text-2xl font-extrabold tracking-wider">{name}</h2>
        </div>
        <div className="z-10">
          <p className="text-[#7C7C7C] tracking-wider text-base">
            {designation}
          </p>
        </div>
        <div className="flex items-center gap-2 z-10 pt-4">
          <IoStarSharp className="text-main-color text-2xl" />
          <IoStarSharp className="text-main-color text-2xl" />
          <IoStarSharp className="text-main-color text-2xl" />
          <IoStarSharp className="text-main-color text-2xl" />
          <IoStarSharp className="text-main-color text-2xl" />
        </div>
      </div>
    </>
  );
};

export default TestimonialLayout;
