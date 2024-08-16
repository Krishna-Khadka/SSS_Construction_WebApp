import React from "react";

import serviceBanner from "../../../public/slider2.jpg";
import Image from "next/image";

interface BannerProps {
  title: string;
}

const BannerLayout = ({ title }: BannerProps) => {
  return (
    <>
      <div className="relative">
        <Image
          src={serviceBanner}
          alt="Banner Background Image"
          className="h-[60dvh] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <div className="absolute inset-0 z-40 top-[40%]">
          <div className="container">
            <div>
              <h1 className="text-5xl font-bold text-white capitalize">
                {title}
              </h1>
              <div className="pt-3">
                <nav aria-label="breadcrumb" className="w-max">
                  <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                    <li className="flex items-center leading-normal">
                      <p className="text-[17px] tracking-wider text-main-color font-semibold">
                        Home
                      </p>
                      <span className="mx-2 font-sans text-[17px] font-semibold leading-normal text-main-color">
                        /
                      </span>
                    </li>
                    <li className="flex items-center leading-normal">
                      <p className="text-[17px] tracking-wider text-main-color font-semibold">
                        {title}
                      </p>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerLayout;
