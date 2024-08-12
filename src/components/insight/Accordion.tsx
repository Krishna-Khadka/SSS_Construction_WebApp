"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  toggle,
}) => {
  return (
    <div className="border-b py-3">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-lg font-semibold text-main-color">{title}</h3>
        <span
          className={`text-main-color transform duration-1000 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660; {/* Down arrow */}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        <div className="p-4 text-gray-700">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white shadow-md rounded-md">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
