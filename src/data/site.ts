import type { SiteConfig } from "@/types";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const siteConfig: SiteConfig = {
  name: "Okasha Chaudhry",
  role: "Computer Scientist",
  tagline: "Building production-grade AI, web, desktop, and mobile products.",
  description:
    "Computer Science student specializing in AI/ML, MERN, .NET, and Flutter. I ship real products for real clients.",
  location: "Rawalpindi, Pakistan",
  email: "okashachaudhry01@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/Okasha-Chaudhry", icon: FaGithub },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/okasha-chaudhry-361614354/", icon: FaLinkedin },
  ],
};
