import React from "react";
import signature from "../../../public/signature.png"
import Image from "next/image";

const HomeAboutContent = () => {
  return (
    <>
      <div>
        <p className="text-2xl uppercase tracking-[0.2em] text-main-color">
          welcome
        </p>
      </div>
      <div className="py-5">
        <h1 className="text-[#0E121D] text-5xl font-extrabold">
          Our <span className="text-main-color">10</span>{" "}
          <span className="bg-main-color inline-block text-white text-[14px] relative bottom-3 py-3 px-5 rounded-[30px]">
            SSS Construction
          </span>{" "}
          <br />
          <span className="text-main-color">years</span> working <br />
          experience
        </h1>
      </div>
      <div>
        <p className="text-[#64656a] text-base tracking-wider leading-[28px]">
          Donec scelerisque dolor id nunc dictum, interdum gravida mauris
          rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in,
          porta finibus mauris. Aliquam consectetur, ex in gravida porttitor,
        </p>
        <p className="text-[#64656a] text-base tracking-wider leading-[28px] pt-4">
          Donec scelerisque dolor id nunc dictum, interdum gravida mauris
          rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in,
          porta finibus mauris.
        </p>
      </div>
      <div className="block pt-14">
        <Image 
        src={signature}
        alt="Signature Image"
        className="max-w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default HomeAboutContent;
