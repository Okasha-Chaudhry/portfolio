"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export function Hero() {
  const githubUrl = siteConfig.socials.find((s) => s.label === "GitHub")?.url ?? "#";

  return (
    <section id="home" className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.p custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-4 flex items-center gap-2 text-sm text-muted">
          <MapPin size={14} aria-hidden="true" />
          {siteConfig.location}
        </motion.p>

        <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} className="font-display text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          {siteConfig.name}
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="mt-4 font-display text-xl text-accent sm:text-2xl">
          {siteConfig.role}
        </motion.p>

        <motion.p custom={3} initial="hidden" animate="visible" variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.tagline}
        </motion.p>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
            View Projects
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface">
            <ExternalLink size={16} aria-hidden="true" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}