import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import XLogo from "./XLogo";
const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-10">
				<img src="images/bg.jpg" alt="" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl max-md:mt-10 max-sm:mt-10 mx-auto px-4 sm:px-6 w-full py-20 md:py-0">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Left: Text Content */}
					<div className="text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1">
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
							<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
								Fullstack Developer
							</span>
						</h1>

						<p className="text-base sm:text-lg text-gray-300 leading-relaxed">
							Specializing in React, Node.js, and Python to build secure,
							scalable web applications. Passionate about cybersecurity and
							implementing best practices to protect digital assets.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
							<a
								href="#projects"
								className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base"
							>
								View Projects
							</a>
							<a
								href="/resume.pdf"
								download="My_Resume.pdf"
								className="px-6 sm:px-8 py-3 border-2 flex items-center justify-center gap-2 border-green-400 backdrop-blur-lg text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 text-center text-sm sm:text-base"
							>
								Download Resume <ArrowDown className="w-4 h-4" />
							</a>
						</div>

						{/* Social Links */}
						<div className="flex gap-3 sm:gap-4 items-center justify-center md:justify-start flex-wrap">
							<p className="text-gray-400 text-sm sm:text-base">Get in touch:</p>
							<a
								href="https://github.com/zimcodes1"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 sm:p-3 bg-gray-800/50 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 text-gray-400 transition-all duration-300 hover:scale-110"
							>
								<Github className="w-4 h-4 sm:w-5 sm:h-5" />
							</a>
							<a
								href="https://www.linkedin.com/azimeh"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 sm:p-3 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 text-gray-400 transition-all duration-300 hover:scale-110"
							>
								<Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
							</a>
							<a
								href="mailto:azimehobadiah1@gmail.com"
								className="p-2 sm:p-3 bg-gray-800/50 rounded-lg hover:bg-green-500/20 hover:text-green-400 text-gray-400 transition-all duration-300 hover:scale-110"
							>
								<Mail className="w-4 h-4 sm:w-5 sm:h-5" />
							</a>
							<a
								href="https://x.com/azimeho"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 sm:p-3 bg-gray-800/50 rounded-lg hover:bg-sky-500/20 hover:text-sky-400 text-gray-400 transition-all duration-300 hover:scale-110"
							>
								<XLogo />
							</a>
						</div>
					</div>

					{/* Right: Image with Stat Cards */}
					<div className="relative flex justify-center items-center order-1 md:order-2">
						{/* Top Left Stat Card */}
						<div className="absolute -top-3 left-4 sm:left-8 md:left-0 lg:left-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 rounded-lg p-2 sm:p-3 shadow-lg z-10 hover:scale-110 hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
							<div className="text-xl sm:text-2xl font-bold text-cyan-400">2+</div>
							<div className="text-xs text-gray-300">Years Exp</div>
						</div>

						{/* Image */}
						<div className="w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-96 hover:scale-105 md:hover:scale-110 grayscale hover:grayscale-0 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500">
							<img
								src="/images/me.jpg"
								alt="Developer Avatar"
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Bottom Right Stat Card */}
						<div className="absolute -bottom-3 right-4 sm:right-8 md:right-0 lg:right-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 rounded-lg p-2 sm:p-3 shadow-lg z-10 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 cursor-pointer">
							<div className="text-xl sm:text-2xl font-bold text-green-400">15+</div>
							<div className="text-xs text-gray-300">Projects</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
