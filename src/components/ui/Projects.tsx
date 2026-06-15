import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Libronet",
    description: "Open-source E-library website for books.",
    image: "/images/projects/libronet.png",
    tech: ["React", "TypeScript", "Tailwind", "Django"],
    github: "https://github.com/zimcodes1/E-Library",
    demo: "https://libronet.vercel.app/",
  },
  {
    title: "Dispensar",
    description: "Pharmacy management — simplified and powerful.",
    image: "/images/projects/dispensar.png",
    tech: ["React", "TypeScript", "Django"],
    github: "https://github.com/zimcodes1/Dispensar",
    demo: "https://dispensar.vercel.app",
  },
  {
    title: "PhishShield",
    description: "AI-Powered Phishing detection system for email and web apps",
    image: "/images/projects/phishshield.png",
    tech: ["React", "Tailwind", "Python", "Manifest v3", "FastAPI"],
    github: "https://github.com/zimcodes1/PHISHIELD",
    demo: "https://phishield-ai.vercel.app/",
  },
  {
    title: "Medika",
    description: "Search & find your favourite doctor.",
    image: "/images/projects/medika.png",
    tech: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/zimcodes1/MEDIKA",
    demo: "https://medika-azi.vercel.app/",
  },
  {
    title: "Spotify Clone",
    description: "Discover a world of music and podcasts.",
    image: "/images/projects/spotify.png",
    tech: ["React", "Tailwind"],
    github: "https://github.com/zimcodes1/Spotify-Clone",
    demo: "https://spotify-clone-azi.vercel.app/",
  },
  {
    title: "WEDA",
    description: "Real-time weather app with forecasts via OpenMeteo API.",
    image: "/images/projects/weda.png",
    tech: ["React", "TypeScript", "OpenMeteo API", "Tailwind"],
    github: "https://github.com/zimcodes1/WEDA",
    demo: "https://weda-azi.vercel.app/",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 bg-[#0a0a0a]">
    <div className="max-w-6xl mx-auto px-6">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-3">What I've built</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white ubuntu-bold">
          Featured <span style={{ color: '#05df72' }}>Projects</span>
        </h2>
        <div className="mx-auto mt-4 h-px w-16" style={{ background: '#05df72' }} />
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-44">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* dark overlay on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              />
              {/* live link shortcut on image hover */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-black text-xs font-semibold"
                  style={{ background: '#05df72' }}
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                </span>
              </a>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h3 className="text-white font-semibold text-base mb-1">{project.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-white/10"
                    style={{ background: 'rgba(255,255,255,0.06)', color: '#ffffff99' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-3.5 h-3.5" /> Source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                  style={{ color: '#05df72' }}
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
