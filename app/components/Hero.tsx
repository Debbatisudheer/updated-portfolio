"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-[#0A192F] text-center"
    >
      <motion.p
        className="text-[#64FFDA] text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-5xl md:text-7xl font-bold text-[#CCD6F6] mt-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Sudheer Debbati
      </motion.h1>

  <motion.h2
  className="text-lg md:text-xl text-[#8892B0] mt-4 text-center leading-relaxed tracking-wide"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
>
  Creating smart, scalable, and automated solutions <br />
  <span className="text-[#64FFDA]">Blending Cloud, AI, and Full Stack innovation 🌐⚙️</span>
</motion.h2>




      <motion.div
        className="mt-8 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#projects"
          className="border border-[#64FFDA] px-6 py-3 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition duration-300"
        >
          View My Work
        </a>
        <a
          href="/Sudheer_Resume.pdf"
          className="border border-[#64FFDA] px-6 py-3 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
