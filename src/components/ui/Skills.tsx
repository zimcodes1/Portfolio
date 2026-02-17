import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "ReactJS", level: 90, tier: "Advanced" },
        { name: "TypeScript", level: 70, tier: "Intermediate" },
        { name: "Tailwind CSS", level: 80, tier: "Proficient" },
        { name: "Javascript", level: 80, tier: "Proficient" }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 88, tier: "Advanced" },
        { name: "Python", level: 80, tier: "Proficient" },
        { name: "PostgreSQL", level: 74, tier: "Intermediate" },
        { name: "Django", level: 50, tier: "Median" }
      ]
    },
    {
      title: "Developer Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: 85, tier: "Proficient" },
        { name: "Vercel", level: 80, tier: "Proficient" },
        { name: "Docker", level: 65, tier: "Intermediate" },
        { name: "AWS", level: 60, tier: "Intermediate" }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Network Security", level: 20, tier: "Beginner" },
        { name: "Penetration Testing", level: 15, tier: "Beginner" },
        { name: "Cryptography", level: 15, tier: "Beginner" },
        { name: "Risk Assessment", level: 17, tier: "Beginner" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-green-400">{skill.tier}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
