"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A192F]/80 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo / Name */}
        <h1 className="text-[#64FFDA] text-2xl font-bold tracking-wide">
          Sudheer<span className="text-white">.Dev</span>
        </h1>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#CCD6F6] font-medium">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-[#64FFDA] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F]/95 px-6 py-4">
          <ul className="space-y-4 text-[#CCD6F6] font-medium">
            <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

