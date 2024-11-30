import React from "react";
import Faq from "./Faq";

import insight from "../../../public/insight.webp";
import Image from "next/image";
import Link from "next/link";

const Insight = () => {
  return (
    <>
      <div className="container">
        <div className="py-18">
          <div className="flex items-center justify-between">
            <h2 className="text-[36px] text-[#0E121D] font-bold">
              Want to become a sub contractor
            </h2>
            <Link
              href="/subcontractor-register"
              className="border-2 bg-main-color text-white font-semibold uppercase tracking-wider text-base px-10 py-4 rounded-md flex items-center gap-2 transition-all duration-500 hover:bg-secondary-color"
            >
              Register Now
            </Link>
          </div>
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
      </div>
    </>
  );
};

export default Insight;
