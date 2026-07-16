import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">{new Date().getFullYear()} {siteConfig.name}. Built with Next.js.</p>
        <ul className="flex items-center gap-5">
          {siteConfig.socials.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted transition-colors hover:text-foreground">{social.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}