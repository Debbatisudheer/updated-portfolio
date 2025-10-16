"use client";

import { motion } from "framer-motion";

export default function AIPrototypeWork() {
  const aiPrototypes = [
    {
      title: "AI Chat Agent – Conversational Workflow",
      description:
        "Built a LangChain + OpenAI powered chat agent with FastAPI backend, capable of real-time reasoning, contextual memory, and task automation.",
      tech: "LangChain, OpenAI API, FastAPI, Python",
      link: "#",
    },
    {
      title: "Emotion Detection System – Deep Learning",
      description:
        "Developed CNN and VGG16-based models to detect emotions from facial expressions using TensorFlow/Keras and deployed via Streamlit Cloud.",
      tech: "TensorFlow, Keras, OpenCV, Streamlit",
      link: "https://github.com/Debbatisudheer/Emotion-Detection",
    },
    {
      title: "AI-Based Event Analyzer – Cloud Intelligence",
      description:
        "Created a Go + AWS Lambda prototype for intelligent log analysis and automated anomaly detection across distributed event data.",
      tech: "Go, AWS Lambda, CloudWatch, SES, Terraform",
      link: "#",
    },
    {
      title: "Agentic Workflow Prototype – Autonomous Orchestration",
      description:
        "Prototyped autonomous agents that monitor system state, generate actions, and automate workflows through reasoning-driven task planning.",
      tech: "Python, Agents API, Docker, Redis",
      link: "#",
    },
  ];

  return (
    <section
      id="ai-prototypes"
      className="max-w-6xl mx-auto px-6 py-20 text-[#8892B0]"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Artificial Intelligence Prototypes
      </motion.h2>

      {/* Tagline */}
      <motion.p
        className="text-center mb-16 text-lg max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Exploring the intersection of <span className="text-[#64FFDA]">AI, Automation, and Intelligent Agents</span> —
        transforming innovative ideas into working prototypes that bridge human
        and machine intelligence.
      </motion.p>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {aiPrototypes.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-[#64FFDA]/30 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#CCD6F6] mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#8892B0] mb-3 leading-relaxed">
              {project.description}
            </p>
            <p className="text-xs text-[#64FFDA] mb-4">{project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64FFDA] underline hover:text-white transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
