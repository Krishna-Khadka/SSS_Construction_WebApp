import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

interface TeamProps {
  imgSrc: StaticImageData;
  name: string;
  designation: string;
  socialLinks: SocialLinks;
}

const TeamLayout = ({ imgSrc, name, designation, socialLinks }: TeamProps) => {
  return (
    <div className="shadow-xl group">
      <div className="w-full h-[350px] overflow-hidden">
        <Image
          src={imgSrc}
          alt="Team Image"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="relative text-center py-8">
        <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4">
          <Link href={socialLinks.facebook}>
            <div className="team-social-icon">
              <FaFacebookF />
            </div>
          </Link>
          <Link href={socialLinks.twitter}>
            <div className="team-social-icon">
              <FaTwitter />
            </div>
          </Link>
          <Link href={socialLinks.instagram}>
            <div className="team-social-icon">
              <FaInstagram />
            </div>
          </Link>
          <Link href={socialLinks.linkedin}>
            <div className="team-social-icon">
              <FaLinkedin />
            </div>
          </Link>
        </div>
        <h2 className="text-title-color font-bold text-2xl tracking-wide">
          {name}
        </h2>
        <p className="capitalize text-main-color tracking-wide text-lg">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default TeamLayout;
