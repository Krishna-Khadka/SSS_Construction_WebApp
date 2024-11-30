"use client";

import { useSiteProfile } from "@/context/SiteProfileContext";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const TopNavbar = () => {
  const { siteProfile, loading, error } = useSiteProfile();

  if (loading) {
    return (
      <div className="bg-[#0E121D] text-white py-4 hidden sm:hidden md:block">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !siteProfile) {
    return (
      <div className="bg-[#0E121D] text-white py-4 hidden sm:hidden md:block">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            Failed to load contact details.
          </div>
        </div>
      </div>
    );
  }

  const { contact_no, email, location } = siteProfile;

  return (
    <div className="bg-[#0E121D] text-white py-4 hidden sm:hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex-1 flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r-2 border-white pr-3">
              <FaPhone />
              <Link href={`tel:${contact_no}`} className="text-sm">
                {contact_no}
              </Link>
            </div>
            <div className="flex items-center space-x-2 border-r-2 border-white pr-3">
              <FaEnvelope />
              <Link href={`mailto:${email}`} className="text-sm">
                {email}
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FaLocationDot />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href={siteProfile?.facebook_link || "#"} target="_blank">
              <FaFacebookF />
            </Link>
            <Link href={siteProfile?.linkedin_link || "#"} target="_blank">
              <FaLinkedin />
            </Link>
            <Link href={siteProfile?.whatsapp_link || "#"} target="_blank">
              <FaWhatsapp />
            </Link>
            <Link href={siteProfile?.youtube_link || "#"} target="_blank">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
