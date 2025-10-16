"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Golang", icon: "🐹" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "AI / ML", icon: "🧠" },
    { name: "DevOps", icon: "🛠️" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "🧭" },
    { name: "Tailwind CSS", icon: "💠" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Databases", icon: "🗄️" },
     { name: "Monitoring & Alerting", icon: "📊" },
    { name: "Scripting & Automation", icon: "🤖" },
  ];

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-20 text-center text-[#8892B0]"
    >
      <motion.h2
        className="text-3xl font-bold text-[#64FFDA] mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-[#64FFDA]/30 hover:scale-105 transition-transform"
          >
            <span className="text-3xl">{skill.icon}</span>
            <p className="mt-3 text-[#CCD6F6] font-medium">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
