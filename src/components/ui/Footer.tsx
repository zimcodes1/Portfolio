import { Github, Linkedin, Mail } from 'lucide-react';
import XLogo from './svgs/XLogo';
import WhatsAppIcon from './svgs/WhatsApp';

const socialLinks = [
  { name: 'GitHub',    url: 'https://github.com/zimcodes1',             icon: <Github className="w-4 h-4" /> },
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/azimeh',       icon: <Linkedin className="w-4 h-4" /> },
  { name: 'X',         url: 'https://x.com/azimeho',                    icon: <XLogo /> },
  { name: 'Email',     url: 'mailto:azimehobadiah1@gmail.com',          icon: <Mail className="w-4 h-4" /> },
  { name: 'WhatsApp',  url: 'https://wa.me/qr/SHDC4BMBJLIKH1',         icon: <WhatsAppIcon /> },
];

const navLinks = [
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'About',     href: '#about' },
  { label: 'Contact',   href: '#contact' },
];

const Footer = () => (
  <footer style={{ background: '#0f0f0f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid sm:grid-cols-3 gap-10 mb-10">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="font-mono font-bold text-white text-lg">
            Azimeh Nasara<span style={{ color: '#05df72' }}> Obadiah</span>
          </span>
          <p className="text-white/35 text-xs leading-relaxed max-w-56">
            Building secure, scalable web applications with modern technologies and a security-first mindset.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white/60 text-xs font-mono tracking-widest uppercase">Quick Links</h3>
          <div className="flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/40 hover:text-white text-sm transition-colors duration-200 w-fit"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white/60 text-xs font-mono tracking-widest uppercase">Connect</h3>
          <div className="flex gap-2 flex-wrap">
            {socialLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target={url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={name}
                className="p-2.5 rounded-lg border border-white/8 text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-white/25 text-xs">Let's build something great together.</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="text-white/25 text-xs font-mono">
          © {new Date().getFullYear()} Azimeh Obadiah Nasara. All rights reserved.
        </p>    
        <span className="text-white/15 text-xs font-mono select-none">
          git commit -m "Building tomorrow"
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
