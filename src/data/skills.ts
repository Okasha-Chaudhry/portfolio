import type { Skill } from "@/types";
import { SiPython, SiTypescript, SiJavascript, SiSharp, SiDart, SiCplusplus, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiFastapi, SiDotnet, SiFlutter, SiFirebase, SiMongodb, SiChromatic, SiGit, SiGithub, SiVercel, SiStripe, SiCloudinary } from "react-icons/si";
import { BiLogoMicrosoft } from "react-icons/bi";
import { TbApi, TbDatabase } from "react-icons/tb";

export const skills: Skill[] = [
  { name: "Python", category: "languages", icon: SiPython },
  { name: "TypeScript", category: "languages", icon: SiTypescript },
  { name: "JavaScript", category: "languages", icon: SiJavascript },
  { name: "C#", category: "languages", icon: SiSharp },
  { name: "Dart", category: "languages", icon: SiDart },
  { name: "C++", category: "languages", icon: SiCplusplus },
  { name: "SQL", category: "languages", icon: TbDatabase },
  { name: "React", category: "frontend", icon: SiReact },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
  { name: "Framer Motion", category: "frontend", icon: SiFramer },
  { name: "Node.js", category: "backend", icon: SiNodedotjs },
  { name: "Express", category: "backend", icon: SiExpress },
  { name: "FastAPI", category: "backend", icon: SiFastapi },
  { name: "ASP.NET Core", category: "backend", icon: SiDotnet },
  { name: "REST APIs", category: "backend", icon: TbApi },
  { name: "Flutter", category: "mobile", icon: SiFlutter },
  { name: "Firebase", category: "mobile", icon: SiFirebase },
  { name: "MongoDB", category: "database", icon: SiMongodb },
  { name: "SQL Server", category: "database", icon: BiLogoMicrosoft },
  { name: "Cloud Firestore", category: "database", icon: SiFirebase },
  { name: "ChromaDB", category: "database", icon: SiChromatic },
  { name: "Git", category: "tools", icon: SiGit },
  { name: "GitHub", category: "tools", icon: SiGithub },
  { name: "Vercel", category: "tools", icon: SiVercel },
  { name: "Stripe", category: "tools", icon: SiStripe },
  { name: "Cloudinary", category: "tools", icon: SiCloudinary },
];

export const skillCategories: { key: Skill["category"]; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "database", label: "Databases" },
  { key: "tools", label: "Tools & Services" },
];