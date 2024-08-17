"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import certificate1 from "../../../public/certificate1.jpg";
import certificate2 from "../../../public/certificate2.jpg";
import certificate3 from "../../../public/certificate3.jpg";

import CertificateLayout from "./CertificateLayout";

const certificates = [
  {
    imgSrc: certificate1,
  },
  {
    imgSrc: certificate2,
  },
  {
    imgSrc: certificate3,
  },
];

const Certificate = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => handleImageClick(index)}>
                <CertificateLayout imgSrc={certificate.imgSrc} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={certificates.map((certificate) => ({
            src: certificate.imgSrc.src,
          }))}
          index={currentIndex}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </>
  );
};

export default Certificate;
