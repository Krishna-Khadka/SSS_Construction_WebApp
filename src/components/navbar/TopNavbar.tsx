import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <div className="bg-[#0E121D] text-white py-4 hidden sm:hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex-1 flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r-2 border-white pr-3">
              <FaPhone />
              <Link href="#" className="text-sm">
                (919) 579-1490
              </Link>
            </div>
            <div className="flex items-center space-x-2 border-r-2 border-white pr-3">
              <FaEnvelope />
              <Link href="#" className="text-sm">
                info@ssnbuilders.com
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FaLocationDot />
              <span className="text-sm">
                Holly Springs, North Carolina 27540
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
