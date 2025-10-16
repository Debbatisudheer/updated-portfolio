"use client";
import { motion } from "framer-motion";

export default function ResearchAndBlogs() {
  const researchItems = [
    {
      title: "Quantum Encryption Models",
      desc: "Studying quantum-safe cryptography methods to enhance data security in distributed cloud systems.",
    },
    {
      title: "Quantum-Inspired Optimization",
      desc: "Analyzing QAOA (Quantum Approximate Optimization Algorithm) for improving computational task efficiency.",
    },
  ];

  const blogs = [
    {
      title: "Future of Cloud Automation",
      desc: "How serverless computing, AI integration, and Golang microservices are transforming next-gen cloud architectures.",
      link: "#",
    },
    {
      title: "Demystifying Quantum Algorithms",
      desc: "A simplified explanation of quantum logic gates, qubits, and how they accelerate computation.",
      link: "#",
    },
    {
      title: "Building Secure Systems with Go",
      desc: "Exploring Go’s concurrency and security mechanisms for scalable distributed applications.",
      link: "#",
    },
  ];

  return (
    <section
      id="research-blogs"
      className="max-w-6xl mx-auto px-6 py-20 text-[#8892B0]"
    >
      {/* Quantum Research Section */}
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Quantum Research
      </motion.h2>

      <motion.p
        className="text-lg leading-relaxed text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Exploring the intersection of{" "}
        <span className="text-[#64FFDA]">Quantum Computing</span>, Cloud, and
        Automation — focusing on hybrid computing systems and optimization
        research that bridges classical and quantum models. ⚛️
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {researchItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-[#64FFDA]/30 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#CCD6F6] mb-2">
              {item.title}
            </h3>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Blogs Section */}
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blogs & Articles
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-[#64FFDA]/30 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#CCD6F6] mb-2">
              {blog.title}
            </h3>
            <p className="text-sm mb-4">{blog.desc}</p>
            <a
              href={blog.link}
              target="_blank"
              className="text-[#64FFDA] underline hover:text-white transition"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
