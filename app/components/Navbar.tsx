"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A192F]/80 backdrop-blur-sm z-50 shadow-lg dark:bg-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-[#64FFDA] text-2xl font-bold tracking-wide dark:text-[#0A192F]">
          Sudheer<span className="text-white dark:text-[#64FFDA]">.Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#CCD6F6] font-medium dark:text-[#0A192F]">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* 🌗 Theme Toggle Button */}
        {mounted && (
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="ml-6 px-3 py-2 rounded-full border border-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] dark:hover:bg-[#64FFDA] transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#64FFDA] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

