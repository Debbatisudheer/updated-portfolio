"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const ciscoProjects = [
    {
      title: "Event Collector – Error Reporting System",
      description:
        "Developed an automated error collection and reporting system using AWS Lambda, S3, CloudWatch, and SES — implemented in Go for scalable event handling and log analysis.",
      github: "#",
      demo: "#",
    },
    {
      title: "Security Service Exchange (SSE) Monitoring Dashboard",
      description:
        "Designed a Go-based monitoring system to collect, parse, and visualize SSE events in real time, integrating with CloudWatch metrics and SES alerts for proactive system insights.",
      github: "#",
      demo: "#",
    },
    {
      title: "Network Automation Tool – Config Validator",
      description:
        "Built a Python automation script for network device configuration validation using REST APIs, reducing manual verification time by 70% in Cisco environments.",
      github: "#",
      demo: "#",
    },
  ];

  const personalProjects = [
    {
      title: "Diabetes Prediction – Machine Learning",
      description:
        "Built an end-to-end ML pipeline using Python (pandas, numpy, scikit-learn, xgboost, seaborn, matplotlib, joblib) with model comparison, hyperparameter tuning, and a Streamlit dashboard for real-time predictions and performance visualization.",
      github: "https://github.com/Debbatisudheer/Diabetes-mellitus-project",
      demo: "https://diabetes-mellitus-project-bnz5anrpsnlumh4tlxhvg3.streamlit.app/",
    },
    {
      title: "Network Pattern Search Tool",
      description:
        "Python + Go-powered multi-threaded tool that searches and matches patterns across network directories efficiently, improving lookup performance by 60%.",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website – Next.js & Tailwind",
      description:
        "A modern, responsive developer portfolio built using Next.js, TailwindCSS, and Framer Motion with dark/light mode support and smooth animations.",
      github: "#",
      demo: "#",
    },
    {
      title: "Chat App – Real-time Messaging",
      description:
        "A real-time chat application using WebSockets and Node.js with JWT authentication, message persistence, and sleek frontend built in React.",
      github: "#",
      demo: "#",
    },
  ];

  const renderProjects = (projectsArray: any) =>
    projectsArray.map((project: any, index: number) => (
      <motion.div
        key={index}
        className="bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-[#64FFDA]/30 hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: index * 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-[#CCD6F6] mb-2">
          {project.title}
        </h3>

        <p className="mb-4 text-[#8892B0] text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] underline hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] underline hover:text-white transition"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    ));

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 text-[#8892B0]">
      {/* Cisco Projects Section */}
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Cisco Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {renderProjects(ciscoProjects)}
      </div>

      {/* Personal Projects Section */}
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Other Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {renderProjects(personalProjects)}
      </div>
    </section>
  );
}


