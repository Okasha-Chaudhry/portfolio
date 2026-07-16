"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Contact" title="Let us Build Something" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">Open to freelance projects, internships, and collaboration. The fastest way to reach me is email - I reply within a day.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
              <Mail size={16} aria-hidden="true" />
              {siteConfig.email}
            </a>
            {siteConfig.socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-surface">
                {social.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}