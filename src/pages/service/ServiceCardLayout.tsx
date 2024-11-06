import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  count: string;
}

const ServiceCardLayout: React.FC<ServiceCardProps> = ({
  imgSrc,
  title,
  description,
  count,
}) => {
  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md p-6 group">
      <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between border-b-2 border-b-gray-300 pb-6">
          <div>
            <Image src={imgSrc} alt={title} width={60} height={60} />
          </div>
          <div>
            <span className="text-xl text-gray-400">{count}</span>
          </div>
        </div>
        <div className="py-6">
          <h3 className="text-xl font-semibold text-[#0E121D] group-hover:text-white">
            {title}
          </h3>
          <ul className="mt-4 space-y-2 text-[#64656a] text-base font-normal list-none group-hover:text-gray-300">
            {/* {(listItems || []).map((item, index) => (
              <li key={index} className="flex items-center list-none">
                {item}
              </li>
            ))} */}
            <li>{description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardLayout;
