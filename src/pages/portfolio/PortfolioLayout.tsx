import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PortfolioProps {
  imgSrc: string | StaticImageData;
  category: string;
  title: string;
  portfolio_id: string;
}

const PortfolioLayout = ({
  imgSrc,
  category,
  title,
  portfolio_id,
}: PortfolioProps) => {
  return (
    <div className="relative w-full h-[360px] overflow-hidden group">
      <Image
        src={imgSrc}
        alt="Project Image"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
      />
      <div className="absolute bottom-0 w-full bg-white opacity-0 group-hover:opacity-95 transition-all duration-700 p-4">
        <div className="project-link-icon absolute top-3 right-3">
          <Link href={`./portfolio/project-detail/${portfolio_id}`} passHref>
            <MdKeyboardDoubleArrowRight className="text-white text-2xl" />
          </Link>
        </div>
        <div className="pt-6 pr-8">
          <p className="text-base font-bold uppercase text-main-color tracking-wider pb-1">
            {category}
          </p>
          <h2 className="capitalize text-2xl font-bold text-title-color">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;
