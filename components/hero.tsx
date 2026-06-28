"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { AiOrb } from "@/components/ai-orb";
import { ContactStrip } from "@/components/contact-strip";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
          full_stack.engineer / ai_systems.builder
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Hi, I’m <span className="gradient-text">{profile.name}</span>.
        </h1>

        <p className="terminal-caret mt-5 font-mono text-lg text-lime-200">
          Building scalable products, AI workflows, and developer-grade systems
        </p>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
          {profile.summary}
        </p>

        <div className="mt-8">
          <ContactStrip />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            View Experience
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="/Anjana-Thandassery-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50"
          >
            Resume
            <Download className="h-4 w-4" />
          </a>
          {/*ToDo - Add Projects*/}
          {/* <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-300/10 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-200/60"
          >
            Systems Built
            <ExternalLink className="h-4 w-4" />
          </a> */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <AiOrb />
      </motion.div>
    </section>
  );
}
