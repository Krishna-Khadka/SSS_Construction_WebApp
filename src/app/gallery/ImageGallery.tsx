"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Slide {
  src: string;
}

const ImageGallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: Slide[] = [
    { src: "/project1.jpg" },
    { src: "/project2.jpg" },
    { src: "/slider3.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          onClick={() => {
            setOpen(true);
            setCurrentIndex(index);
          }}
          style={{ cursor: "pointer", width: "200px", margin: "10px" }}
          alt={`Gallery Image ${index + 1}`}
        />
      ))}

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
                Previous
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
                Next
              </button>
            ),
          }}
        />
      )}
    </div>
  );
};

export default ImageGallery;
