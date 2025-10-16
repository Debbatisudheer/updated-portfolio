"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-20 text-center text-[#8892B0]"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mb-8 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I’m always open to new projects, collaborations, or tech ideas.
         — let’s connect and create something impactful together!
      </motion.p>

      {/* Contact Button */}
      <motion.a
        href="mailto:debbatisudheerpatel@gmail.com"
        className="inline-block border border-[#64FFDA] text-[#64FFDA] px-8 py-3 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition duration-300 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Say Hello 👋
      </motion.a>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-8 mt-10 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="https://github.com/Debbatisudheer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#64FFDA] transition-transform transform hover:scale-125 duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sudheer-debbati-50a014235"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#64FFDA] transition-transform transform hover:scale-125 duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-[#64FFDA] transition-transform transform hover:scale-125 duration-300"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  );
}

