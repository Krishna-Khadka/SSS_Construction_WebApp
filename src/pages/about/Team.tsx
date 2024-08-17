import React from "react";

import team1 from "../../../public/team1.webp";
import team2 from "../../../public/team2.webp";
import team3 from "../../../public/team3.webp";
import team4 from "../../../public/team4.webp";
import team5 from "../../../public/team5.webp";
import team6 from "../../../public/team6.webp";
import team7 from "../../../public/team7.webp";
import team8 from "../../../public/team8.webp";
import TeamLayout from "./TeamLayout";

const Teams = [
  {
    imgSrc: team1,
    name: "Nick Smith",
    designation: "CEO",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    imgSrc: team2,
    name: "Jayden Sentry",
    designation: "Architech",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    imgSrc: team3,
    name: "Will Fury",
    designation: "Chief Engineer",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    imgSrc: team4,
    name: "Tony Romanoff",
    designation: "Project Manager",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    imgSrc: team5,
    name: "Henry William",
    designation: "Finances",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    imgSrc: team6,
    name: "Sam Oliver",
    designation: "Constructor",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    imgSrc: team7,
    name: "Jonathan Alvarez",
    designation: "Constructor",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    imgSrc: team8,
    name: "Scott Austin",
    designation: "Consultant",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {Teams.map((team, index) => (
            <TeamLayout
              key={index}
              imgSrc={team.imgSrc}
              name={team.name}
              designation={team.designation}
              socialLinks={team.socialLinks}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
