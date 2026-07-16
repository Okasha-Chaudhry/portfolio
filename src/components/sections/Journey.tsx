"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

function TimelineItem({ icon, title, subtitle, period, highlights, index }: { icon: React.ReactNode; title: string; subtitle: string; period: string; highlights: string[]; index: number }) {
  return (
    <motion.li initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }} className="relative pl-12 pb-12 last:pb-0">
      <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-accent">{icon}</span>
      <span aria-hidden="true" className="absolute left-4 top-10 bottom-0 w-px bg-border" />
      <p className="text-xs font-medium uppercase tracking-widest text-muted">{period}</p>
      <h3 className="mt-1 font-display text-lg font-semibold">{title}</h3>
      <p className="text-sm text-accent">{subtitle}</p>
      <ul className="mt-3 space-y-2">
        {highlights.map((h) => (
          <li key={h} className="text-sm leading-relaxed text-muted">{h}</li>
        ))}
      </ul>
    </motion.li>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Journey" title="Experience and Education" />
        <ul>
          {experience.map((exp, i) => (
            <TimelineItem key={exp.role + exp.startDate} icon={<Briefcase size={14} aria-hidden="true" />} title={exp.role} subtitle={`${exp.organization} - ${exp.location}`} period={`${exp.startDate} - ${exp.endDate}`} highlights={exp.highlights} index={i} />
          ))}
          {education.map((edu, i) => (
            <TimelineItem key={edu.institution} icon={<GraduationCap size={14} aria-hidden="true" />} title={edu.degree} subtitle={edu.institution} period={`${edu.startYear} - ${edu.endYear}`} highlights={edu.highlights} index={experience.length + i} />
          ))}
        </ul>
      </div>
    </section>
  );
}