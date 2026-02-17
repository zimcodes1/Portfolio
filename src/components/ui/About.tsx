import { Globe, Smartphone, Shield, Users } from "lucide-react";
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    {
      year: "2020-2023",
      title: "Diploma in Computer Science",
      description: "Completed foundational studies in computer science, covering programming fundamentals, data structures, algorithms, and software development principles.",
      status: "Completed"
    },
    {
      year: "2023-2024",
      title: "Community & Hackathons",
      description: "Participated in tech communities, hackathons, and collaborative projects to build practical skills, network with developers, and contribute to open-source initiatives.",
      status: "Completed"
    },
    {
      year: "2024-Present",
      title: "B.Sc Cybersecurity",
      description: "Currently pursuing a Bachelor's degree in Cybersecurity, focusing on network security, ethical hacking, cryptography, and secure software development practices.",
      status: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                About Me 
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a fullstack developer passionate about crafting end-to-end web solutions that are both powerful and secure. 
                From designing intuitive user interfaces to building robust backend systems, I thrive on bringing ideas to life through code.
              </p>
              
              <p>
                My expertise spans modern web technologies like React, Node.js, and Python, combined with a deep commitment to cybersecurity. 
                I believe that great software isn't just functional—it must be secure, scalable, and resilient against evolving threats.
              </p>
              
              <p>
                Currently pursuing a degree in Cybersecurity while actively building real-world applications, I'm dedicated to bridging the gap between 
                development and security. Whether it's implementing secure authentication, protecting against vulnerabilities, or optimizing performance, 
                I approach every project with a security-first mindset.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-400/30">
                <Globe className="w-4 h-4" />
                Fullstack Development
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30">
                <Shield className="w-4 h-4" />
                Cybersecurity
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-400/30">
                <Smartphone className="w-4 h-4" />
                Secure Systems
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-400/30">
                <Users className="w-4 h-4" />
                Community Engagement
              </span>
            </div>
          </motion.div>
          
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Journey Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      item.status === 'current' 
                        ? 'bg-green-400 border-green-400 animate-pulse' 
                        : 'bg-cyan-400 border-cyan-400'
                    }`}></div>
                    {idx !== timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-700 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyan-400 font-mono text-sm">{item.year}</span>
                      {item.status === 'current' && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
