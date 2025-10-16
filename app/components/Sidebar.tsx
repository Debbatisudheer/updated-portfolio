"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col fixed left-8 bottom-0 items-center space-y-6">
      <a
        href="https://github.com/Debbatisudheer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8892B0] hover:text-[#64FFDA] transition"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/sudheer-debbati-50a014235"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8892B0] hover:text-[#64FFDA] transition"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="mailto:sudheer.debbati@example.com"
        className="text-[#8892B0] hover:text-[#64FFDA] transition"
      >
        <FaEnvelope size={22} />
      </a>

      {/* Vertical line */}
      <div className="w-[2px] h-24 bg-[#64FFDA] mt-4 opacity-70"></div>
    </div>
  );
}
