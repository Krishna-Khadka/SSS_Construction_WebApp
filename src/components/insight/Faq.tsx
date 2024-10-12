import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "How do I become a subcontractor with SSN Builders Group?",
    content:
      "To become a subcontractor, create an account, provide business details, upload licenses, insurance certificates, and certifications. Once approved, you can apply for relevant projects.",
  },
  {
    title: "What areas can subcontractors work in with SSN Builders?",
    content:
      "Subcontractors can specialize in: General Construction, Engineering (Civil, Structural, Mechanical), Electrical, Plumbing, and HVAC Services"
  },
  {
    title: "What is the process for project application?",
    content:
      "After approval, subcontractors can log in to view available projects, submit bids, and track progress directly through the Subcontractor Portal.",
  },
  {
    title: "What certifications are required to work with SSN Builders?",
    content:
      "Subcontractors are required to provide business licenses, insurance policies, and industry-relevant certifications, such as OSHA or LEED certifications, depending on the project.",
  },
  {
    title: "Can subcontractors work remotely?",
    content:
      "Depending on the project and the nature of the work, certain tasks such as consulting, design, and engineering work can be performed remotely while maintaining consistent communication with the project team.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="container my-10">
        <h1 className="text-3xl text-center sm:text-center md:text-left font-bold mb-6">
          Frequently Asked Questions{" "}
          <span className="text-main-color">(FAQ)</span>
        </h1>
        <Accordion items={items} />
      </div>
    </>
  );
};

export default Faq;
