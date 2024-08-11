import Image, { StaticImageData } from "next/image";
import React from "react";

import slider1 from "../../../public/slider1.jpg";
import slider2 from "../../../public/slider2.jpg";
import slider3 from "../../../public/slider3.jpg";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface HeroData {
  head: string;
  title: string;
  description: string;
  imgSrc: StaticImageData;
}

const Contents = [
  {
    head: "we make sure",
    title: "Committed to superior quality and results.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. lorem Ipsum has been end.",
    imgSrc: slider1,
  },
  {
    head: "we make sure",
    title: "The rest put the con in contractor!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. lorem Ipsum has been end.",
    imgSrc: slider2,
  },
  {
    head: "we make sure",
    title: "Engineering your dreams with us",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. lorem Ipsum has been end.",
    imgSrc: slider3,
  },
];

const HeroLayout = ({ head, title, description, imgSrc }: HeroData) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={imgSrc}
        alt="image-slider"
        className="h-[90dvh] w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-40 flex justify-start items-center">
        <div className="container">
          <div className="w-full sm:w-full md:w-[550px] z-10">
            <h6 className="uppercase text-main-color font-bold text-base tracking-wider">
              {head}
            </h6>
            <h2 className="text-5xl font-bold text-white leading-[3.5rem]">
              {title}
            </h2>
            <p className="font-bold text-white py-4">{description}</p>
            <div className="mt-4">
              <Link href="/about">
                <button
                  aria-label="Read more about this section"
                  className="bg-transparent border-2 border-main-color text-white font-semibold uppercase tracking-wider text-base px-4 py-2 rounded-md flex items-center gap-2"
                >
                  read more
                  <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
