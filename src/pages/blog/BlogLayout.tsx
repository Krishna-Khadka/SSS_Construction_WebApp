import React from "react";

import { FaLongArrowAltRight, FaUser, FaCalendarAlt } from "react-icons/fa";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogProps {
  imgSrc: StaticImageData;
  author: string;
  date: string;
  title: string;
}

const BlogLayout = ({ imgSrc, author, date, title }: BlogProps) => {
  return (
    <>
      <div className="group">
        <div className="w-full h-[300px] overflow-hidden">
          <Image
            src={imgSrc}
            alt="Blog Banner Image"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          />
        </div>
        <div className="bg-[#F3F4F6] py-6 px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <FaUser className="text-main-color" />
              <p className="font-semibold tracking-wide text-[#535456]">
                {author}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaCalendarAlt className="text-main-color" />
              <p className="font-semibold tracking-wide text-[#535456]">
                {date}
              </p>
            </div>
          </div>
          <h2 className="text-xl font-semibold tracking-wide leading-[1.3] py-3 group-hover:text-main-color transition-all duration-500">
            {title}
          </h2>
          <div className="inline-block py-4">
            <Link
              href="#"
              className="flex items-center gap-1 uppercase text-main-color tracking-wider text-base font-semibold group border-b border-b-main-color"
            >
              <span className="">read more</span>
              <FaLongArrowAltRight className="rotate-[-45deg] group-hover:rotate-0 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
