import React from "react";

const MapIframe = () => {
  return (
    <div className="relative w-full h-0 pb-[85%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d413935.7259417801!2d-78.645951!3d35.852121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C%20NC%2C%20USA!5e0!3m2!1sen!2snp!4v1723826865704!5m2!1sen!2snp"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapIframe;
