"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

import portfolio1 from "../../../public/portfolio1.jpg";
import portfolio2 from "../../../public/portfolio2.jpg";
import portfolio3 from "../../../public/portfolio3.jpg";
import portfolio4 from "../../../public/portfolio4.jpg";
import portfolio5 from "../../../public/portfolio5.jpg";
import portfolio6 from "../../../public/portfolio6.jpg";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ProjectGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: portfolio1.src },
    { src: portfolio2.src },
    { src: portfolio3.src },
    { src: portfolio4.src },
    { src: portfolio5.src },
    { src: portfolio6.src },
  ];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[350px] h-[320px] mt-8 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={`Project Image ${index + 1}`}
              className="max-w-full h-full object-cover"
              width={350}
              height={320}
            />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={currentIndex}
          carousel={{ finite: false, preload: 2 }}
          render={{
            buttonPrev: () => (
              <button
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                onClick={() =>
                  setCurrentIndex(
                    (currentIndex - 1 + images.length) % images.length
                  )
                }
              >
                <FaArrowCircleLeft className="text-5xl" />
              </button>
            ),
            buttonNext: () => (
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % images.length)
                }
              >
                <FaArrowCircleRight className="text-5xl" />
              </button>
            ),
          }}
        />
      )}
    </>
  );
};

export default ProjectGallery;
