import { Mail, Linkedin, Github } from "lucide-react";
import XLogo from "../components/ui/svgs/XLogo";
import WhatsAppIcon from "../components/ui/svgs/WhatsApp";
import {
	HomeIcon,
	BrainCircuit,
	LayoutListIcon,
	BadgeInfoIcon,
	MessageCircleMore,
	Code2,
	Server,
	Smartphone,
	Wrench,
	Shield,
	LayoutGrid,
} from "lucide-react";

//Timeline Data for About Section

export const timeline = [
	{
		year: "2020 - 2023",
		title: "Diploma in Computer Science",
		description:
			"Foundational studies covering programming, data structures, algorithms, and software development principles.",
		done: true,
	},
	{
		year: "2023 - 2024",
		title: "Community & Hackathons",
		description:
			"Participated in tech communities, hackathons, and open-source projects to sharpen practical skills.",
		done: true,
	},
	{
		year: "2024 - Present",
		title: "B.Sc Cybersecurity",
		description:
			"Pursuing a Bachelor's in Cybersecurity — network security, ethical hacking, cryptography, and secure development.",
		done: false,
	},
];

//Contact info for Contact Section

export const contacts = [
	{
		icon: <Mail className="w-4 h-4" />,
		label: "Email",
		value: "azimehobadiah1@gmail.com",
		href: "mailto:azimehobadiah1@gmail.com",
	},
	{
		icon: <Linkedin className="w-4 h-4" />,
		label: "LinkedIn",
		value: "linkedin.com/in/azimeh",
		href: "https://www.linkedin.com/in/azimeh",
	},
	{
		icon: <Github className="w-4 h-4" />,
		label: "GitHub",
		value: "github.com/zimcodes1",
		href: "https://github.com/zimcodes1",
	},
	{
		icon: <WhatsAppIcon />,
		label: "WhatsApp",
		value: "+234 707 143 0030",
		href: "https://wa.me/qr/SHDC4BMBJLIKH1",
	},
];

//Footer Section Data
export const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/zimcodes1",
		icon: <Github className="w-4 h-4" />,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/azimeh",
		icon: <Linkedin className="w-4 h-4" />,
	},
	{ name: "X", url: "https://x.com/azimeho", icon: <XLogo /> },
	{
		name: "Email",
		url: "mailto:azimehobadiah1@gmail.com",
		icon: <Mail className="w-4 h-4" />,
	},
	{
		name: "WhatsApp",
		url: "https://wa.me/qr/SHDC4BMBJLIKH1",
		icon: <WhatsAppIcon />,
	},
];

export const navLinks = [
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact" },
];

//Navitems for the Navigation Menu
export const navItems = [
	{
		name: "Home",
		href: "#home",
		id: "home",
		icon: <HomeIcon className="w-5 h-5" />,
	},
	{
		name: "Skills",
		href: "#skills",
		id: "skills",
		icon: <BrainCircuit className="w-5 h-5" />,
	},
	{
		name: "Projects",
		href: "#projects",
		id: "projects",
		icon: <LayoutListIcon className="w-5 h-5" />,
	},
	{
		name: "About",
		href: "#about",
		id: "about",
		icon: <BadgeInfoIcon className="w-5 h-5" />,
	},
	{
		name: "Contact",
		href: "#contact",
		id: "contact",
		icon: <MessageCircleMore className="w-5 h-5" />,
	},
];

// List of my projects, to be displayed at the "Featured Projects" section
export const projects = [
	{
		title: "Libronet",
		description: "Open-source E-library website for books.",
		image: "/images/projects/libronet.png",
		tech: ["React", "TypeScript", "Tailwind", "Django"],
		github: "https://github.com/zimcodes1/E-Library",
		demo: "https://libronet.vercel.app/",
	},
	{
		title: "Dispensar",
		description: "Pharmacy management — simplified and powerful.",
		image: "/images/projects/dispensar.png",
		tech: ["React", "TypeScript", "Django"],
		github: "https://github.com/zimcodes1/Dispensar",
		demo: "https://dispensar.vercel.app",
	},
	{
		title: "PhishShield",
		description: "AI-Powered Phishing detection system for email and web apps",
		image: "/images/projects/phishshield.png",
		tech: ["React", "Tailwind", "Python", "Manifest v3", "FastAPI"],
		github: "https://github.com/zimcodes1/PHISHIELD",
		demo: "https://phishield-ai.vercel.app/",
	},
	{
		title: "Medika",
		description: "Search & find your favourite doctor.",
		image: "/images/projects/medika.png",
		tech: ["React", "JavaScript", "Tailwind"],
		github: "https://github.com/zimcodes1/MEDIKA",
		demo: "https://medika-azi.vercel.app/",
	},
	{
		title: "Spotify Clone",
		description: "Discover a world of music and podcasts.",
		image: "/images/projects/spotify.png",
		tech: ["React", "Tailwind"],
		github: "https://github.com/zimcodes1/Spotify-Clone",
		demo: "https://spotify-clone-azi.vercel.app/",
	},
	{
		title: "WEDA",
		description: "Real-time weather app with forecasts via OpenMeteo API.",
		image: "/images/projects/weda.png",
		tech: ["React", "TypeScript", "OpenMeteo API", "Tailwind"],
		github: "https://github.com/zimcodes1/WEDA",
		demo: "https://weda-azi.vercel.app/",
	},
];

//Skills and relevant data

const cdn = (name: string) =>
	`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const skillCategories = [
	{
		title: "Frontend Development",
		icon: <Code2 className="w-5 h-5" />,
		skills: [
			{ name: "React", img: cdn("react"), tier: "Advanced" },
			{ name: "TypeScript", img: cdn("typescript"), tier: "Proficient" },
			{
				name: "Tailwind",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
				tier: "Proficient",
			},
			{ name: "JavaScript", img: cdn("javascript"), tier: "Proficient" },
		],
	},
	{
		title: "Backend Development",
		icon: <Server className="w-5 h-5" />,
		skills: [
			{ name: "Node.js", img: cdn("nodejs"), tier: "Advanced" },
			{ name: "Python", img: cdn("python"), tier: "Proficient" },
			{ name: "PostgreSQL", img: cdn("postgresql"), tier: "Intermediate" },
			{
				name: "Django",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
				tier: "Median",
			},
		],
	},
	{
		title: "Mobile Development",
		icon: <Smartphone className="w-5 h-5" />,
		skills: [
			{ name: "React Native", img: cdn("react"), tier: "Proficient" },
			{
				name: "Expo",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
				tier: "Intermediate",
			},
			{ name: "Android", img: cdn("android"), tier: "Intermediate" },
			{
				name: "iOS",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
				tier: "Intermediate",
			},
		],
	},
	{
		title: "Tools & Deployment",
		icon: <Wrench className="w-5 h-5" />,
		skills: [
			{ name: "Git", img: cdn("git"), tier: "Proficient" },
			{ name: "Docker", img: cdn("docker"), tier: "Intermediate" },
			{
				name: "AWS",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
				tier: "Intermediate",
			},
			{
				name: "Vercel",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
				tier: "Proficient",
			},
		],
	},
	{
		title: "Others",
		icon: <LayoutGrid className="w-5 h-5" />,
		skills: [
			{ name: "FastAPI", img: cdn("fastapi"), tier: "Intermediate" },
			{ name: "Browser Extension", img: cdn("chrome"), tier: "Intermediate" },
			{ name: "HTML", img: cdn("html5"), tier: "Proficient" },
			{ name: "CSS", img: cdn("css3"), tier: "Proficient" },
		],
	},
	{
		title: "Cybersecurity",
		icon: <Shield className="w-5 h-5" />,
		skills: [
			{
				name: "Network Security",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
				tier: "Intermediate",
			},
			{
				name: "Penetration Testing",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
				tier: "Intermediate",
			},
			{
				name: "Cryptography",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
				tier: "Intermediate",
			},
			{
				name: "Risk Assessment",
				img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
				tier: "Intermediate",
			},
		],
	},
];

export const tierColor: Record<string, string> = {
	Advanced: "#05df72",
	Proficient: "#05df72cc",
	Intermediate: "#ffffff80",
	Median: "#ffffff60",
	Beginner: "#ffffff40",
};
