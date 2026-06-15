import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { navItems } from "../../utils/dataStore";

const NavItem = ({
	name,
	href,
	icon,
	active,
}: {
	name: string;
	href: string;
	icon: React.ReactNode;
	active: boolean;
}) => {
	const [hovered, setHovered] = useState(false);
	const highlighted = active || hovered;

	return (
		<a
			href={href}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`${highlighted? "px-4 py-3 ": ''} md:px-4 md:py-3 flex items-center gap-2 rounded-full transition-colors duration-200 text-sm`}
			style={{
				background: highlighted ? "#fff" : "transparent",
				color: highlighted ? "#000" : "rgba(255,255,255,0.6)",
			}}
		>
			{icon}
			<AnimatePresence>
				{highlighted && (
					<motion.span
						initial={{ width: 0, opacity: 0 }}
						animate={{ width: "auto", opacity: 1 }}
						exit={{ width: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="overflow-hidden whitespace-nowrap font-medium text-xs"
					>
						{name}
					</motion.span>
				)}
			</AnimatePresence>
		</a>
	);
};

const Navigation = () => {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		navItems.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(id);
				},
				{ threshold: 0.4 },
			);
			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	return (
		<nav
			className="fixed bottom-5 left-1/2 -translate-x-1/2 w-fit max-sm:w-9/10 backdrop-blur-sm border border-white/10 rounded-full z-50 px-2 py-2"
			style={{ background: "rgba(0,0,0,0.6)" }}
		>
			<div className="flex items-center justify-between gap-2">
				{navItems.map((item) => (
					<NavItem
						key={item.name}
						{...item}
						active={activeSection === item.id}
					/>
				))}
				<button
					onClick={() => window.open("/resume.pdf", "_blank")}
					className="hidden md:flex gap-1.5 items-center px-4 py-2.5 rounded-full text-black font-semibold text-sm transition-opacity duration-200 hover:opacity-85 ml-1"
					style={{ background: "#05df72" }}
				>
					Resumé <ArrowDown className="w-4 h-4" />
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
