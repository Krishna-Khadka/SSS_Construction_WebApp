import React from "react";

import crane from "../../../public/crane.png";
import worker from "../../../public/worker.png";
import revenue from "../../../public/revenue.png";
import rating from "../../../public/rating.png";
import CounterLayout from "./CounterLayout";

const CounterData = [
    {
        imgSrc: crane,
        data: 1500,
        description: "Project Handover"
    },
    {
        imgSrc: worker,
        data: 1000,
        description: "Full-time Salaried"
    },
    {
        imgSrc: revenue,
        data: 8000,
        description: "Million Revenue"
    },
    {
        imgSrc: rating,
        data: 5000,
        description: "Happy CLients"
    },
]

const Counter = () => {
  return (
    <>
      <div className="counter-bg">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CounterData.map((counter,index) => (
                <CounterLayout 
                key={index}
                imgSrc={counter.imgSrc}
                data={counter.data}
                description={counter.description}
                />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
