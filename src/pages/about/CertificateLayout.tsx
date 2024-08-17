import React from "react";

import Image, { StaticImageData } from "next/image";

interface CertificateProps {
  imgSrc: StaticImageData;
}

const CertificateLayout = ({ imgSrc }: CertificateProps) => {
  return (
    <div>
      <Image
        src={imgSrc}
        alt="certificate Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CertificateLayout;
