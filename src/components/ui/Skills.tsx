import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Wrench, Shield, LayoutGrid } from 'lucide-react';

const cdn = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: 'React',       img: cdn('react'),          tier: 'Advanced' },
      { name: 'TypeScript',  img: cdn('typescript'),     tier: 'Intermediate' },
      { name: 'Tailwind',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', tier: 'Proficient' },
      { name: 'JavaScript',  img: cdn('javascript'),     tier: 'Proficient' },
    ],
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: 'Node.js',    img: cdn('nodejs'),       tier: 'Advanced' },
      { name: 'Python',     img: cdn('python'),       tier: 'Proficient' },
      { name: 'PostgreSQL', img: cdn('postgresql'),   tier: 'Intermediate' },
      { name: 'Django',     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",       tier: 'Median' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: 'React Native', img: cdn('react'),   tier: 'Intermediate' },
      { name: 'Expo',         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', tier: 'Intermediate' },
      { name: 'Android',      img: cdn('android'), tier: 'Beginner' },
      { name: 'iOS',          img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', tier: 'Beginner' },
    ],
  },
  {
    title: 'Tools & Deployment',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: 'Git',    img: cdn('git'),    tier: 'Proficient' },
      { name: 'Docker', img: cdn('docker'), tier: 'Intermediate' },
      { name: 'AWS',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', tier: 'Intermediate' },
      { name: 'Vercel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', tier: 'Proficient' },
    ],
  },
  {
    title: 'Others',
    icon: <LayoutGrid className="w-5 h-5" />,
    skills: [
      { name: 'FastAPI',           img: cdn('fastapi'),      tier: 'Intermediate' },
      { name: 'Browser Extension', img: cdn('chrome'),       tier: 'Intermediate' },
      { name: 'HTML',              img: cdn('html5'),        tier: 'Proficient' },
      { name: 'CSS',               img: cdn('css3'),         tier: 'Proficient' },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    skills: [
      { name: 'Network Security',   img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',  tier: 'Beginner' },
      { name: 'Penetration Testing',img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',    tier: 'Beginner' },
      { name: 'Cryptography',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', tier: 'Beginner' },
      { name: 'Risk Assessment',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', tier: 'Beginner' },
    ],
  },
];

const tierColor: Record<string, string> = {
  Advanced:     '#05df72',
  Proficient:   '#05df72cc',
  Intermediate: '#ffffff80',
  Median:       '#ffffff60',
  Beginner:     '#ffffff40',
};

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
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
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
