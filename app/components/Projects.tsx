"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const ciscoProjects = [
    {
      title: "ECS-TASK-CHECKER – AWS Lambda (Go)",
      description:
        "Developed a Go-based AWS Lambda for ECS monitoring that analyzes stopped tasks via ECS APIs, triggers real-time PagerDuty alerts through Splunk webhooks, automates builds with Makefile, and is provisioned using Terraform.",
      tech: "Go, AWS Lambda, ECS, Splunk, PagerDuty, Terraform, Makefile",
      github:
        "https://github.com/Debbatisudheer/Ecs-task-checker/tree/ecs_task_checker2",
      demo: "#",
      flowchart: "/assets/ecs-flowchart.png",
      doc: "/assets/ecs-task-checker-doc.pdf",
    },
    {
      title: "Terraform Modularised Deployment",
      description:
        "Refactored monolithic Terraform templates into modular components (ALB, WAF, ECS, Datadog, Splunk, Infra) with isolated S3 states, selective module deployments, Jinja2-based environment automation, and Jenkins integration for dynamic image overrides and CI/CD execution.",
      tech: "Terraform, Jenkins, AWS, S3, Jinja2, Python",
      github: "#",
      demo: "#",
      flowchart: "/assets/sse-diagram.png",
      doc: "/assets/sse-dashboard-doc.pdf",
    },
    {
      title: "Frontend Development (React.js Training Project)",
      description:
        "Built micro-frontend applications using React.js and Webpack Module Federation. Implemented Cisco Magnet Design System for consistent UI across apps.",
      tech: "React.js, Webpack, Cisco Magnet Design System, JavaScript, HTML, CSS",
      github: "#",
      demo: "#",
      flowchart: "/assets/network-validator-flow.png",
      doc: "/assets/config-validator-doc.pdf",
    },
  ];

  const personalProjects = [
    {
      title: "Diabetes Prediction – Machine Learning",
      description:
        "Built an end-to-end ML pipeline using Python (pandas, numpy, scikit-learn, xgboost, seaborn, matplotlib, joblib) with model comparison, hyperparameter tuning, and a Streamlit dashboard for real-time predictions and performance visualization.",
      tech: "Python, Pandas, scikit-learn, XGBoost, Streamlit, Matplotlib, Seaborn",
      github:
        "https://github.com/Debbatisudheer/Diabetes-mellitus-project",
      demo: "https://diabetes-mellitus-project-bnz5anrpsnlumh4tlxhvg3.streamlit.app/",
      flowchart: "/assets/workflow.png",
      doc: "/assets/diabetes-doc.pdf",
    },
    {
      title: "CNN Stress Detection – Deep Learning",
      description:
        "Developed and deployed a CNN and VGG16-based transfer learning model using TensorFlow/Keras and scikit-learn to classify stress from facial expressions (~60% accuracy), with preprocessing (grayscale, RGB, augmentation), callbacks, Git LFS model storage, and an interactive Streamlit app for real-time predictions hosted on Streamlit Cloud.",
      tech: "TensorFlow, Keras, scikit-learn, OpenCV, Streamlit, Python",
      github:
        "https://github.com/Debbatisudheer/cnn_stress_detection_project",
      demo: "https://cnnstressdetectionproject-lgdtggbwp6s2njmp5qpadg.streamlit.app/",
      flowchart: "/assets/pattern-search.png",
      doc: "/assets/pattern-tool-doc.pdf",
    },
    {
      title: "Portfolio Website – React.js / Next.js & Tailwind",
      description:
        "Designed and developed a modern, responsive portfolio website using React.js, Next.js, TailwindCSS, and Framer Motion with smooth animations and optimized performance.",
      tech: "Next.js, React.js, TailwindCSS, Framer Motion",
      github: "https://github.com/Debbatisudheer/updated-portfolio",
      demo: "#",
      flowchart: "/assets/portfolio-architecture.png",
      doc: "/assets/portfolio-doc.pdf",
    },
    {
      title: "Chat App – Real-time Messaging",
      description:
        "Built a real-time chat app using WebSockets and Node.js with JWT authentication, message persistence, and a sleek frontend in React.",
      tech: "React.js, Node.js, WebSockets, JWT, Express, MongoDB",
      github: "#",
      demo: "#",
      flowchart: "/assets/chatapp-diagram.png",
      doc: "/assets/chatapp-doc.pdf",
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

        {/* ✅ Tech Stack Section */}
        <p className="text-xs text-[#64FFDA] mb-4">{project.tech}</p>

        {/* Links Section */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] underline hover:text-white transition"
          >
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] underline hover:text-white transition"
          >
            Live Demo
          </a>
          <a
            href={project.flowchart}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] underline hover:text-white transition"
          >
            Flowchart
          </a>
          <a
            href={project.doc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] underline hover:text-white transition"
          >
            Doc
          </a>
        </div>
      </motion.div>
    ));

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 text-[#8892B0]">
      {/* Cisco Projects */}
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

      {/* Personal Projects */}
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





