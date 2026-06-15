import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { navItems } from "../../utils/dataStore";

const NavItem = ({
	name,
	href,
	icon,
}: {
	name: string;
	href: string;
	icon: React.ReactNode;
}) => {
	const [hovered, setHovered] = useState(false);

	return (
		<a
			href={href}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="flex items-center p-2 md:py-3 rounded-full transition-colors duration-200 text-sm"
			style={{
				background: hovered ? "#05df72" : "transparent",
				color: hovered ? "#000" : "rgba(255,255,255,0.6)",
			}}
		>
			{icon}
			<AnimatePresence>
				{hovered && (
					<motion.span
						initial={{ width: 0, opacity: 0 }}
						animate={{ width: "auto", opacity: 1 }}
						exit={{ width: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="max-sm:hidden overflow-hidden whitespace-nowrap font-medium text-xs"
					>
						{name}
					</motion.span>
				)}
			</AnimatePresence>
		</a>
	);
};

const Navigation = () => (
	<nav
		className="fixed bottom-5 left-1/2 -translate-x-1/2 w-9/10 md:w-fit backdrop-blur-sm border border-white/10 rounded-full z-50 px-3 py-2"
		style={{ background: "rgba(0,0,0,0.6)" }}
	>
		<div className="flex items-center gap-2 py-1">
			{navItems.map((item) => (
				<NavItem key={item.name} {...item} />
			))}
			<button
				onClick={() => window.open("/resume.pdf", "_blank")}
				className="flex gap-1.5 items-center px-4 py-2.5 rounded-full text-black font-semibold text-sm transition-opacity duration-200 hover:opacity-85 ml-1"
				style={{ background: "#05df72" }}
			>
				Resumé <ArrowDown className="w-4 h-4" />
			</button>
		</div>
	</nav>
);

export default Navigation;
