import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import WhatsAppIcon from './svgs/WhatsApp';

type Status = 'idle' | 'loading' | 'success' | 'error';

const contacts = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: 'Email',
    value: 'azimehobadiah1@gmail.com',
    href: 'mailto:azimehobadiah1@gmail.com',
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/azimeh',
    href: 'https://www.linkedin.com/in/azimeh',
  },
  {
    icon: <Github className="w-4 h-4" />,
    label: 'GitHub',
    value: 'github.com/zimcodes1',
    href: 'https://github.com/zimcodes1',
  },
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    value: '+234 707 143 0030',
    href: 'https://wa.me/qr/SHDC4BMBJLIKH1',
  },
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/25 font-mono focus:outline-none focus:border-[#05df72] transition-colors duration-200';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { ...formData, time: new Date().toLocaleString() },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        setStatus('success');
        toast.success('Message sent successfully 🎉');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
        toast.error('Failed to send message 😢');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const btnLabel: Record<Status, string> = {
    idle: 'Send Message',
    loading: 'Sending...',
    success: '✓ Message Sent!',
    error: '⚠ Failed. Try Again',
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-3">Don't be a stranger</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Let's <span style={{ color: '#05df72' }}>Connect</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16" style={{ background: '#05df72' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Get In Touch</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                I'm always open to new opportunities, collaborations, or just a chat
                about tech and cybersecurity. Drop me a message — I'll get back to you.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contacts.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-white/20 transition-all duration-200 group"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ background: 'rgba(5,223,114,0.1)', color: '#05df72' }}
                  >
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/40 text-xs font-mono mb-0.5">{label}</p>
                    <p className="text-white text-sm truncate group-hover:text-[#05df72] transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-white/8"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-xl font-semibold text-sm text-black transition-all duration-300 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                style={{ background: '#05df72' }}
              >
                {btnLabel[status]}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
