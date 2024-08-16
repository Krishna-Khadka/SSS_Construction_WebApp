// pages/index.tsx

import React from "react";


import service1Icon from "../../../public/construction.png";
import service2Icon from "../../../public/tool.png";
import service3Icon from "../../../public/sofa.png";
import service4Icon from "../../../public/house.png";
import service5Icon from "../../../public/tree.png";
import service6Icon from "../../../public/palette.png";
import ServiceCardLayout from "./ServiceCardLayout";

const ServiceCard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCardLayout
          imgSrc={service1Icon}
          count="01"
          title="New Construction, Additions, and Retrofitting"
          listItems={[
            "New Construction, Additions, and Retrofitting",
            "Seamless home additions to accommodate growing needs",
            "Retrofitting services to modernize and enhance existing structures",
          ]}
        />
        <ServiceCardLayout
          imgSrc={service2Icon}
          count="02"
          title="Remodeling Services"
          listItems={[
            "Comprehensive home remodeling for kitchens, bathrooms, and more",
            "Transforming living spaces to match your lifestyle and taste",
            "Updating and upgrading outdated features and fixtures",
          ]}
        />
        <ServiceCardLayout
          count="03"
          imgSrc={service3Icon}
          title="Interior Solutions"
          listItems={[
            "Personalized interior design services tailored to your preferences",
            "Color consultations and selection to create the perfect ambiance",
            "Space planning and optimizing layouts for improved functionality",
          ]}
        />
        <ServiceCardLayout
          imgSrc={service4Icon}
          count="04"
          title="Exterior Solutions"
          listItems={[
            "Roofing services for repairs, replacements, and new installations",
            "Siding options to enhance curb appeal and protect your home",
            "Energy-efficient window and door replacements",
          ]}
        />
        <ServiceCardLayout
          imgSrc={service5Icon}
          count="05"
          title="Landscaping and Outdoor Living Spaces"
          listItems={[
            "Landscape design and implementation for beautiful yards",
            "Creating outdoor living spaces, including patios and decks",
            "Fencing solutions for added privacy and security",
          ]}
        />
        <ServiceCardLayout
          imgSrc={service6Icon}
          count="06"
          title="Exterior Painting and Finishing"
          listItems={[
            "Professional exterior painting services for a fresh and updated look",
            "Stucco, stone, and brickwork to add character to your home",
          ]}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
