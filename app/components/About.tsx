"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20 text-[#8892B0] leading-relaxed"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Content Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Profile Image */}
        <img
          src="/assets/profile.jpeg"
          alt="Sudheer Debbati"
          className="rounded-2xl w-48 h-48 object-cover border-4 border-[#64FFDA] shadow-lg"
        />

        {/* About Text */}
        <div>
          <p className="text-lg mb-4">
            Hey 👋, I’m{" "}
            <span className="text-[#64FFDA] font-semibold">Sudheer Debbati</span>,
            a passionate software engineer and tech innovator who loves solving
            real-world problems with code.
          </p>

          <p className="text-lg mb-4">
            I’m a{" "}
            <span className="text-[#64FFDA] font-semibold">
              Cloud and Full Stack Developer
            </span>{" "}
            with 1 year of experience at{" "}
            <span className="font-semibold text-white">Cisco</span>. Skilled in{" "}
            <span className="text-[#64FFDA]">
              AWS (Lambda, ECS, Terraform), Golang, Python, React.js, and Networking
            </span>
            , with proven experience in cloud automation, monitoring, and modular
            deployments. I also have a strong foundation in{" "}
            <span className="text-[#64FFDA]">Machine Learning and AI</span> projects, driven by a passion for
            turning ideas into impactful, real-world technology solutions. 🚀
          </p>

          <p className="text-lg">
            I believe in continuous learning, creative problem-solving, and using
            technology to make life simpler, smarter, and more connected.
          </p>
        </div>
      </motion.div>
    </section>
  );
}



