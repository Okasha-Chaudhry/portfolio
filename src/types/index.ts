import type { IconType } from "react-icons";

export type ProjectCategory = "ai" | "web" | "desktop" | "mobile";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon?: IconType;
  category: "languages" | "frontend" | "backend" | "mobile" | "database" | "tools";
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number | "Present";
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: number;
  url?: string;
}

export interface SocialLink {
  label: string;
  icon?: IconType;
  url: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  resumeUrl: string;
  socials: SocialLink[];
}