import React from "react";
import { IconType } from "react-icons";

interface CardInfo {
  icon: IconType;
  title: string;
  description: string;
}

const CardLayout = ({ icon: Icon, title, description }: CardInfo) => {
  return (
    <div className="border-2 border-t-[6px] border-t-[#FF5E14] py-8 px-6 rounded-xl">
      <div>
        <Icon className="text-5xl text-[#FF5E14]" />
      </div>
      <div>
        <h2 className="capitalize font-semibold text-[22px] text-[#0E121D] pt-4">
          {title}
        </h2>
        <p className="text-[14px] text-[#3d3d3d] pt-4">{description}</p>
      </div>
    </div>
  );
};

export default CardLayout;
