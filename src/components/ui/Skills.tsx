import { motion } from 'framer-motion';
import { skillCategories, tierColor } from '../../utils/dataStore';


const Skills = () => (
  <section id="skills" className="py-24 bg-[#111111]">
    <div className="max-w-6xl mx-auto px-6">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-3">What I work with</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white ubuntu-bold">
          My <span style={{ color: '#05df72' }}>Skills</span>
        </h2>
        <div className="mx-auto mt-4 h-px w-16" style={{ background: '#05df72' }} />
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group rounded-2xl border border-white/8 p-6 flex flex-col gap-5 transition-all duration-300 hover:border-white/20"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ background: 'rgba(5,223,114,0.12)', color: '#05df72' }}
              >
                {category.icon}
              </div>
              <h3 className="font-semibold text-white text-sm tracking-wide">{category.title}</h3>
            </div>

            {/* Skill chips */}
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex flex-col items-center gap-2 rounded-xl p-3 border border-white/6 transition-all duration-200 hover:border-white/20 hover:scale-105 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-white text-xs font-medium text-center leading-tight">{skill.name}</span>
                  <span
                    className="text-[10px] font-mono"
                    style={{ color: tierColor[skill.tier] ?? '#ffffff50' }}
                  >
                    {skill.tier}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
