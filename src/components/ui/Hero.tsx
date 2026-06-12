import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import XLogo from "./svgs/XLogo";
import WhatsAppIcon from "./svgs/WhatsApp";
const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0c]">

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl max-md:mt-10 max-sm:mt-10 mx-auto px-4 sm:px-6 w-full py-20 md:py-0">
				<div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
					{/*Text Content */}
					<div className="text-center w-full  space-y-4 md:space-y-6 order-2 md:order-1">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
							<span className=" text-gray-50 bg-clip-text">
								Software Developer <br />&<br /> Problem Solver
							</span>
						</h1>

						<p className="text-base sm:text-lg text-gray-300 leading-relaxed">
							I design build and implement robust systems or software solutions <br /> that are efficient, scalable, secure and user-centric. Passionate about cybersecurity and <br />
							implementing best practices to protect digital assets.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
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
						<div className="flex gap-3 sm:gap-4 items-center justify-center flex-wrap">
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
								href="https://www.linkedin.com/in/azimeh"
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
														<a
								href="https://wa.me/qr/SHDC4BMBJLIKH1"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 sm:p-3 bg-gray-800/50 rounded-lg hover:bg-green-500/20 hover:text-green-400 text-gray-400 transition-all duration-300 hover:scale-110"
							>
								<WhatsAppIcon/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
