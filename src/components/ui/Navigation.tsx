import { useState } from "react";
import {
	Home,
	HomeIcon,
	BrainCircuit,
	LayoutListIcon,
	BadgeInfoIcon,
	MessageCircleMore,
	ArrowDown
} from "lucide-react";
const Navigation = () => {
	const navItems = [
		{ name: "Home", href: "#home", icon: <HomeIcon /> },
		{ name: "Skills", href: "#skills", icon: <BrainCircuit /> },
		{ name: "Projects", href: "#projects", icon: <LayoutListIcon /> },
		{ name: "About", href: "#about", icon: <BadgeInfoIcon /> },
		{ name: "Contact", href: "#contact", icon: <MessageCircleMore /> },
	];

	return (
		<nav className="fixed flex justify-between items-center bottom-5 left-[5%] md:left-1/2 md:-translate-x-1/2 w-9/10 md:w-fit bg-black/10 backdrop-blur-sm border rounded-4xl border-white/10 z-50">
						<div className="flex w-full items-center justify-between pl-3 p-2 md:space-x-6">
							{navItems.map((item) => (
								<a
									title={item.name}
									key={item.name}
									href={item.href}
									className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-xs"
								>
									{item.icon}
									<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
								</a>
							))}
							<button
								onClick={() => window.open("/resume.pdf", "_blank")}
								className="flex gap-1 items-center p-2 md:px-4 md:py-2 bg-white md:bg-[#05df72] rounded-full md:rounded-3xl text-black font-semibold text-sm hover:shadow-sm hover:shadow-cyan-500/50 transition-all duration-300"
							>
								<p className="hidden md:inline">Resumé </p><ArrowDown /> 
							</button>
						</div>
		</nav>
	);
};

export default Navigation;
