"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skills, skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Capabilities" title="Skills and Technologies" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const items = skills.filter((s) => s.category === cat.key);
            if (items.length === 0) return null;
            return (
              <motion.div key={cat.key} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}>
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-muted">{cat.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li key={skill.name} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent/50">{skill.name}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}