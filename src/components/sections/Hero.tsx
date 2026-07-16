"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const stats = [
  { value: "6+", label: "Projects Built" },
  { value: "4", label: "Platforms - Web, Mobile, Desktop, AI" },
  { value: "15+", label: "Technologies" },
];

function RevealLine({ text, delay, className }: { text: string; delay: number; className: string }) {
  return (
    <span className="block overflow-hidden">
      <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={`block ${className}`}>{text}</motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 h-125 w-125 rounded-full bg-accent/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-32 h-100 w-100 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-5xl px-6 pt-24 pb-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for freelance and internships
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mb-4 flex items-center gap-2 text-sm text-muted">
          <MapPin size={14} aria-hidden="true" />
          {siteConfig.location}
        </motion.p>

        <h1 className="font-display font-semibold tracking-tight">
          <RevealLine text={siteConfig.name} delay={0.2} className="text-4xl sm:text-6xl md:text-7xl" />
        </h1>

        <span className="mt-4 block overflow-hidden">
          <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="block font-display text-xl text-accent sm:text-2xl">{siteConfig.role}</motion.span>
        </span>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.tagline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
            View Projects
            <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface">
            <Mail size={16} aria-hidden="true" />
            Get in Touch
          </a>
        </motion.div>

        <motion.dl initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.5 }} className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold sm:text-4xl">{stat.value}</dd>
              <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}