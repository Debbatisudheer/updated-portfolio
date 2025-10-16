"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden px-4"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/assets/bg-video1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Greeting */}
      <motion.p
        className="relative text-[#64FFDA] text-lg md:text-xl z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, my name is
      </motion.p>

      {/* Name */}
      <motion.h1
        className="relative text-5xl md:text-7xl font-bold text-[#CCD6F6] mt-3 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Sudheer Debbati
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        className="relative text-base md:text-xl text-[#8892B0] mt-4 leading-relaxed tracking-wide max-w-2xl z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Creating smart, scalable, and automated solutions <br />
        <span className="text-[#64FFDA]">
          Blending Cloud, AI, and Full Stack innovation 🌐⚙️
        </span>
      </motion.h2>

      {/* Action Buttons */}
      <motion.div
        className="relative mt-10 flex flex-col sm:flex-row gap-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#projects"
          className="border border-[#64FFDA] px-8 py-3 rounded-lg text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] transition duration-300 font-medium"
        >
          View My Work
        </a>

        <a
          href="/Sudheer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#64FFDA] px-8 py-3 rounded-lg text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] transition duration-300 font-medium"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

