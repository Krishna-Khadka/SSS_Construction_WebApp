// pages/index.tsx
"use client"

import React, { useEffect, useState } from "react";
import api from "../../../service/api.service";

import service1Icon from "../../../public/construction.png";
import service2Icon from "../../../public/tool.png";
import service3Icon from "../../../public/sofa.png";
import service4Icon from "../../../public/house.png";
import service5Icon from "../../../public/tree.png";
import service6Icon from "../../../public/palette.png";
import ServiceCardLayout from "./ServiceCardLayout";
import Loader from "@/components/loader/Loader";


const ServiceCard: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get(
          "/services"
        );
        setServices(response.data); // Set the fetched services data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false); // Set loading to false even if error occurs
      }
    };

    fetchServices();
  }, []); // Empty array ensures it runs once when component mounts

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service: any, index: number) => (
          <ServiceCardLayout
            key={service.id}
            imgSrc={service.image || "/construction.png"}
            count={`0${index + 1}`}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
