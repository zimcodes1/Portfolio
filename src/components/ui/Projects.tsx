import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Libronet",
      description: "Open-source E-library website for books",
      image: "/images/projects/libronet.png",
      tech: ["React JS", "Typescript", "Tailwind", "Django"],
      github: "https://github.com/zimcodes1/E-Library",
      demo: "https://libronet.vercel.app/"
    },
    {
      title: "Dispensar",
      description: "Pharmacy Management Simplified & Powerful",
      image: "/images/projects/dispensar.png",
      tech: ["ReactJS", "Typescript", "Django"],
      github: "https://github.com/zimcodes1/Dispensar",
      demo: "https://dispensar.vercel.app"
    },
    {
      title: "Brightway Academy",
      description: "Landing page for Brightway Academy Keffi with emailing feature, gallery page and more.",
      image: "/images/projects/brightway.png",
      tech: ["ReactJS", "Tailwind", "EmailJS"],
      github: "https://github.com/zimcodes1/Spotify-Clone",
      demo: "https://brightway-academy.vercel.app/"
    },
    {
      title: "Medika",
      description: "Search & Find Your Favourite Doctor",
      image: "/images/projects/medika.png",
      tech: ["ReactJS", "JavaScript", "Tailwind"],
      github: "https://github.com/zimcodes1/MEDIKA",
      demo: " https://medika-azi.vercel.app/"
    },
    {
      title: "Spotify-Clone",
      description: "Discover a world of music and podcasts with Spotify",
      image: "/images/projects/spotify.png",
      tech: ["React.js", "Tailwind"],
      github: "https://github.com/zimcodes1/Spotify-Clone",
      demo: "https://spotify-clone-azi.vercel.app/"
    },
    {
      title: "WEDA",
      description: "A modern, responsive weather application built with React and TypeScript that provides real-time weather information and forecasts using the OpenMeteo API.",
      image: "/images/projects/weda.png",
      tech: ["ReactJS", "OpenMeteo API", "Tailwind"],
      github: "https://github.com/zimcodes1/WEDA",
      demo: "https://weda-azi.vercel.app/"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.github} className="text-green-400 hover:text-green-300 transition-colors">
                    GitHub
                  </a>
                  <a href={project.demo} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
