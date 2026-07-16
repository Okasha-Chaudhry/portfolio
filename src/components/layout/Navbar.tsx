"use client";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          {siteConfig.name.split(" ")[0]}<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} aria-current={activeId === link.id ? "true" : undefined} className={`text-sm transition-colors ${activeId === link.id ? "font-medium text-accent" : "text-muted hover:text-foreground"}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}