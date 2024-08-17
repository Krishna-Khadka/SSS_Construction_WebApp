import React from "react";

import quality from "../../../public/quality.png";
import safety from "../../../public/safety.png";
import collaboration from "../../../public/collaboration.png";
import integrity from "../../../public/integrity.png";
import sustainability from "../../../public/sustainability.png";
import Image from "next/image";

const CoreValue = () => {
  return (
    <>
      <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={quality}
            alt="Icon"
            className="w-[100px] h-[100px] object-cover"
          />
          <h2 className="text-xl font-semibold text-title-color">Quality</h2>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={safety}
            alt="Icon"
            className="w-[100px] h-[100px] object-cover"
          />
          <h2 className="text-xl font-semibold text-title-color">Safety</h2>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={collaboration}
            alt="Icon"
            className="w-[100px] h-[100px] object-cover"
          />
          <h2 className="text-xl font-semibold text-title-color">Collaboration</h2>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={integrity}
            alt="Icon"
            className="w-[100px] h-[100px] object-cover"
          />
          <h2 className="text-xl font-semibold text-title-color">Integrity</h2>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={sustainability}
            alt="Icon"
            className="w-[100px] h-[100px] object-cover"
          />
          <h2 className="text-xl font-semibold text-title-color">Sustainability</h2>
        </div>
      </div>
      </div>
    </>
  );
};

export default CoreValue;
