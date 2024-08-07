import React from "react";
import signature from "../../../public/signature.png";
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
        <p className="text-[#64656a] text-base tracking-wider leading-[28px] text-justify">
          We are the construction, engineering, and management professionals
          having years of experiences in the industry. Our vibrant and dynamic
          culture, we proudly called it SSNian culture, prioritizes fun at work,
          fostering collaboration, creativity, and job satisfaction. We
          celebrate diversity and inclusion, valuing unique talents and
          perspectives that drive innovation.
        </p>
        <p className="text-[#64656a] text-base tracking-wider leading-[28px] pt-4 text-justify">
          Our inclusive environment empowers everyone to contribute their best.
          Giving back to the community is deeply ingrained in our culture.
          Through philanthropic initiatives and partnerships, we make a positive
          impact. Join us on this exciting journey to build exceptional projects
          and create a nurturing environment that values every individual's
          contribution. We highly believe that “Together, We Make a Difference”.
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
