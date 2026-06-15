import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import XLogo from "./svgs/XLogo";
import WhatsAppIcon from "./svgs/WhatsApp";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
			<AnimatedBackground />

			<div className="relative z-10 max-w-4xl mx-auto px-6 max-sm:px-4 text-center">
				{/* Eyebrow tag */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-white/50 uppercase"
				>
					<span
						className="w-1.5 h-1.5 rounded-full animate-pulse"
						style={{ background: "#05df72" }}
					/>
					Available for work
				</motion.div>

				{/* Name */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="ubuntu-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
				>
					Azimeh Nasara
					<span className="block ubuntu-bold" style={{ color: "#05df72" }}>
						Obadiah.
					</span>
				</motion.h1>

				{/* Role */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-lg sm:text-xl font-mono text-white/40 mb-6 tracking-wide"
				>
					Software Developer &amp; Problem Solver
				</motion.p>

				{/* Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mx-auto mb-8 h-px w-24"
					style={{ background: "#05df72" }}
				/>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.35 }}
					className="max-w-xl mx-auto text-white/50 text-base sm:text-lg leading-relaxed mb-10"
				>
					I design, build and implement robust systems and software solutions
					that are efficient, scalable, secure and user-centric.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.45 }}
					className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
				>
					<a
						href="#projects"
						className="px-8 py-3 rounded-lg font-semibold text-sm text-black transition-all duration-300 hover:opacity-90 hover:scale-105"
						style={{ background: "#05df72" }}
					>
						View Projects
					</a>
					<a
						href="/resume.pdf"
						download="My_Resume.pdf"
						className="px-8 py-3 rounded-lg font-semibold text-sm text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
					>
						Download Resume <ArrowDown className="w-4 h-4" />
					</a>
				</motion.div>

				{/* Social Links */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.55 }}
					className="flex items-center justify-center gap-3"
				>
					<span className="text-white/25 text-xs font-mono tracking-widest uppercase">
						Find me on
					</span>
					<div className="flex gap-2">
						{[
							{
								href: "https://github.com/zimcodes1",
								icon: <Github className="w-4 h-4" />,
								label: "GitHub",
							},
							{
								href: "https://www.linkedin.com/in/azimeh",
								icon: <Linkedin className="w-4 h-4" />,
								label: "LinkedIn",
							},
							{
								href: "mailto:azimehobadiah1@gmail.com",
								icon: <Mail className="w-4 h-4" />,
								label: "Email",
							},
							{ href: "https://x.com/azimeho", icon: <XLogo />, label: "X" },
							{
								href: "https://wa.me/qr/SHDC4BMBJLIKH1",
								icon: <WhatsAppIcon />,
								label: "WhatsApp",
							},
						].map(({ href, icon, label }) => (
							<a
								key={label}
								href={href}
								target={href.startsWith("mailto") ? undefined : "_blank"}
								rel="noopener noreferrer"
								aria-label={label}
								className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200 hover:scale-110"
							>
								{icon}
							</a>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
