import React from "react";
import TestimonialContent from "./TestimonialContent";

const Testimonial = () => {
  return (
    <>
      <div className="Testimonial-bg">
        <div className="container">
          <div className="text-center">
            <h5 className="uppercase text-base font-medium text-main-color tracking-widest pb-2">
              Testimonials
            </h5>
            <h2 className="capitalize text-5xl font-extrabold text-white tracking-wider">
              What Our Clients Say
            </h2>
          </div>

          {/* terstimonial content slider  */}
          <div className="mt-12">
            <TestimonialContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
