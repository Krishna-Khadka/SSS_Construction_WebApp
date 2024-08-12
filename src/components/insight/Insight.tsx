import React from "react";
import Faq from "./Faq";

import insight from "../../../public/insight.webp";
import Image from "next/image";

const Insight = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <Image
              src={insight}
              alt="insight image"
              className="max-w-full h-full object-cover"
            />
          </div>
          <div>
            <Faq />
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
