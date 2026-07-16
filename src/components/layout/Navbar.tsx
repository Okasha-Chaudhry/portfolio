import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
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
                <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
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