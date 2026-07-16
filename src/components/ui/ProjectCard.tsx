import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

const categoryLabels: Record<Project["category"], string> = {
  ai: "AI / ML",
  web: "Web",
  desktop: "Desktop",
  mobile: "Mobile",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border">
        {project.imageUrl ? (
          <Image src={project.imageUrl} alt={`${project.title} screenshot`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div aria-hidden="true" className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-surface to-accent/5">
            <span className="font-display text-6xl font-bold text-accent/30">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">{categoryLabels[project.category]}</span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="text-muted transition-colors hover:text-foreground">
                <ExternalLink size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="text-muted transition-colors hover:text-accent">
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-accent">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.solution}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech} className="rounded-md bg-background px-2 py-1 text-xs text-muted">{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}