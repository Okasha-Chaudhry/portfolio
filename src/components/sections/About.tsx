"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="About" title="Who I Am" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: "easeOut" }} className="max-w-2xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>I am a Computer Science student who builds and ships complete products, not just coursework. My work spans AI-powered tools, full-stack web platforms, and cross-platform mobile apps.</p>
          <p>I have built a semantic code search engine, a salon booking marketplace with live payments, and a blood donation app with targeted push notifications. I care about clean architecture, type safety, and the details that separate a demo from a product.</p>
        </motion.div>
      </div>
    </section>
  );
}