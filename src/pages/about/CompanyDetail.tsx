import React from "react";

const CompanyDetail = () => {
  return (
    <>
      <div className="about-bg">
        <div className="container">
          <div>
            <h2 className="uppercase text-6xl font-bold text-title-color tracking-wide">
              About SSN Builders
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            <div>
              <p className="text-lg text-[#64656a] font-medium text-justify">
                Welcome to SSN Builders, LLC, your trusted partner in
                construction excellence. As a recently established construction
                company operated by years of experience in construction and
                engineering, we are driven by a passion for delivering top-notch
                craftsmanship and outstanding service to our clients. At SSN
                Builders, we understand that building or renovating a space is
                more than just a project; it’s an opportunity to create
                something exceptional. Our team of skilled professionals is
                dedicated to turning your vision into a reality, combining
                innovative design, quality materials, and expert craftsmanship.
              </p>
              <p className="text-lg text-[#64656a] font-medium text-justify pt-6">
                We take pride in our commitment to excellence in every aspect of
                our work. From the moment you choose SSN Builders, you can
                expect personalized attention, clear communication, and a
                seamless construction experience. Our team will guide you
                through every step of the process, ensuring that your project is
                completed on time, within budget, and to your exact
                specifications.
              </p>
            </div>
            <div>
              <p className="text-lg text-[#64656a] font-medium text-justify">
                Whether you’re looking to build a custom home, undertake a
                commercial construction project, or renovate an existing space,
                SSN Builders has the expertise and resources to exceed your
                expectations in construction, construction management, and
                project evaluation. Our comprehensive range of services covers
                everything from initial planning and design to construction and
                post-construction support.
              </p>
              <p className="text-lg text-[#64656a] font-medium text-justify pt-6">
                As a locally owned and operated company, we are deeply rooted in
                the community we serve. We take great pride in contributing to
                the growth and development of our region through our
                construction projects. From residential properties to commercial
                complexes, we are committed to building spaces that enhance
                lives and leave a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetail;
