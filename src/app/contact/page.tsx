import BannerLayout from "@/components/banner/BannerLayout";
import ContactForm from "@/pages/contact/ContactForm";
import ContactInformation from "@/pages/contact/ContactInformation";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <BannerLayout title="Contact Us" />
      </div>
      <div className="py-16">
        <ContactInformation />
      </div>
      {/* <div className="py-20">
        <ContactForm />
      </div> */}
    </>
  );
};

export default page;
