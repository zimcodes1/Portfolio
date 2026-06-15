import { Globe, Smartphone, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { timeline } from '../../utils/dataStore';

const traits = [
  { icon: <Globe className="w-4 h-4" />,     label: 'Fullstack Development' },
  { icon: <Shield className="w-4 h-4" />,    label: 'Cybersecurity' },
  { icon: <Smartphone className="w-4 h-4" />, label: 'Mobile Development' },
  { icon: <Users className="w-4 h-4" />,     label: 'Community Driven' },
];

const About = () => (
  <section id="about" className="py-24 bg-[#0a0a0a]">
    <div className="max-w-6xl mx-auto px-6">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-3">Who I am</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white ubuntu-bold">
          About <span style={{ color: '#05df72' }}>Me</span>
        </h2>
        <div className="mx-auto mt-4 h-px w-16" style={{ background: '#05df72' }} />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* Left — photo + bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {/* Photo */}
          <div className="relative w-fit mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 w-64 h-72 sm:w-72 sm:h-80">
              <img
                src="/images/me.jpg"
                alt="Azimeh Obadiah Nasara"
                className="w-full h-full object-cover object-top grayscale-100"
              />
              {/* subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/60 to-transparent" />
            </div>
            {/* floating badge */}
            <div
              className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full text-black text-xs font-semibold font-mono"
              style={{ background: '#05df72' }}
            >
              Open to work ✦
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-white/55 text-sm leading-relaxed">
            <p>
              I'm a fullstack developer passionate about crafting end-to-end solutions that are both powerful and secure.
              From designing intuitive UIs to building robust backend systems, I thrive on bringing ideas to life through code.
            </p>
            <p>
              My stack spans React, Node.js, Python, and React Native, paired with a deep commitment to cybersecurity.
              Great software isn't just functional — it must be secure, scalable, and resilient.
            </p>
            <p>
              Currently pursuing a degree in Cybersecurity while shipping real-world apps,
              I bridge development and security with a security-first mindset on every project.
            </p>
          </div>

          {/* Trait badges */}
          <div className="flex flex-wrap gap-2">
            {traits.map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-white/10 text-white/60"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <span style={{ color: '#05df72' }}>{icon}</span>
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — timeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-white font-semibold text-lg">Journey Timeline</h3>

          <div className="relative flex flex-col gap-0">
            {/* vertical line */}
            <div className="absolute left-1.75 top-2 bottom-2 w-px bg-white/8" />

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {/* dot */}
                <div className="relative z-10 mt-1 shrink-0">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2"
                    style={{
                      borderColor: item.done ? '#ffffff30' : '#05df72',
                      background: item.done ? 'transparent' : '#05df72',
                      boxShadow: item.done ? 'none' : '0 0 8px #05df7288',
                    }}
                  />
                </div>

                {/* card */}
                <div
                  className="flex-1 rounded-xl p-4 border border-white/8 transition-all duration-300 hover:border-white/20"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <span className="text-xs font-mono" style={{ color: '#05df72' }}>{item.year}</span>
                    {!item.done && (
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full text-black"
                        style={{ background: '#05df72' }}
                      >
                        Ongoing
                      </span>
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default About;
