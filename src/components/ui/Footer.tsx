import { Github, Linkedin, Mail } from "lucide-react";
import XLogo from "./XLogo";
const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/Azimeh",
			icon: <Github className="w-5 h-5" />,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/azimeh",
			icon: <Linkedin className="w-5 h-5" />,
		},
		{ name: "X", url: "https://x.com/azimeho", icon: <XLogo /> },
		{
			name: "Email",
			url: "mailto:azimehobadiah1@gmail.com",
			icon: <Mail className="w-5 h-5" />,
		},
	];

	return (
		<footer className="bg-gray-900 border-t border-gray-800">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="grid md:grid-cols-3 gap-8">
					{/* Brand */}
					<div>
						<div className="flex items-center mb-4">
							<span className="text-xl font-bold">
								<span className="text-cyan-400 font-mono">{"<"}</span>
								<span className="text-cyan-400">Azimeh</span>
								<span className="text-green-400 font-mono">{"/>"}</span>
							</span>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							Building secure, scalable web applications with modern technologies.
							Fullstack developer with a focus on cybersecurity and clean code.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-green-400 font-semibold mb-4">Quick Links</h3>
						<div className="space-y-2">
							<a
								href="#skills"
								className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
							>
								Skills & Expertise
							</a>
							<a
								href="#projects"
								className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
							>
								Featured Projects
							</a>
							<a
								href="#about"
								className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
							>
								About & Timeline
							</a>
							<a
								href="#contact"
								className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
							>
								Contact Me
							</a>
						</div>
					</div>

					{/* Social & Contact */}
					<div>
						<h3 className="text-green-400 font-semibold mb-4">Connect</h3>
						<div className="flex gap-4 mb-4">
							{socialLinks.map((link) => (
								<a
									key={link.name}
									href={link.url}
									className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 border text-cyan-400 border-gray-700 transition-all duration-300"
									title={link.name}
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.icon}
								</a>
							))}
						</div>
						<p className="text-gray-400 text-sm">
							Let's build something great together
						</p>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">© {currentYear} Obadiah Azimeh Nasara</p>
					<div className="flex gap-4 mt-4 md:mt-0">
						<span className="text-gray-500 text-xs font-mono">
							git commit -m "Building the future"
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
