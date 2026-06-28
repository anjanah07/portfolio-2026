import {
  achievements,
  certifications,
  education,
  experiences,
  highlights,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { AnimatedGrid } from "@/components/animated-grid";
import { Badge } from "@/components/badge";
import { ExperienceCard } from "@/components/experience-card";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SkillCloud } from "@/components/skill-cloud";
import { TimelineDot } from "@/components/timeline-dot";
import {
  Award,
  BrainCircuit,
  Cpu,
  GraduationCap,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <AnimatedGrid />
      <div className="noise" />

      <nav className="fixed left-1/2 top-5 z-40 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/35 px-5 py-3 backdrop-blur-xl md:block">
        <div className="flex gap-6 font-mono text-xs text-slate-300">
          <a className="transition hover:text-cyan-200" href="#about">
            about
          </a>
          <a className="transition hover:text-cyan-200" href="#experience">
            experience
          </a>
          {/* <a className="transition hover:text-cyan-200" href="#projects">
            projects
          </a> */}
          <a className="transition hover:text-cyan-200" href="#skills">
            stack
          </a>
          <a className="transition hover:text-cyan-200" href="#education">
            education
          </a>
        </div>
      </nav>

      <Hero />

      <Section
        id="about"
        eyebrow="about"
        title="Systems thinking with product sense."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const icons = [BrainCircuit, Cpu, Sparkles, TerminalSquare];
            const Icon = icons[index % icons.length];

            return (
              <div key={item} className="glass card-hover rounded-3xl p-6">
                <Icon className="mb-5 h-6 w-6 text-cyan-200" />
                <p className="text-slate-200">{item}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="experience"
        title="Enterprise platforms, AI agents, and cloud-native systems."
      >
        <div className="space-y-10">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="grid gap-6 md:grid-cols-[2rem_1fr]"
            >
              <TimelineDot />
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </Section>
      {/*ToDo - Add Projects*/}
      {/* <Section
        id="projects"
        eyebrow="selected systems"
        title="Work shaped as portfolio-ready systems."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="glass card-hover rounded-3xl p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <BrainCircuit className="h-5 w-5 text-cyan-100" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
              <p className="mb-5 leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="violet">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section> */}

      <Section
        id="skills"
        eyebrow="stack"
        title="Nerdy toolbox, production-tested."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillCloud key={group.title} {...group} />
          ))}
        </div>
      </Section>

      <Section
        id="education"
        eyebrow="credentials"
        title="Education, certifications, and achievements."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="glass card-hover rounded-3xl p-6">
            <GraduationCap className="mb-5 h-7 w-7 text-cyan-200" />
            <h3 className="text-xl font-semibold text-white">
              {education.institution}
            </h3>
            <p className="mt-3 text-slate-300">{education.degree}</p>
            <p className="mt-2 font-mono text-sm text-lime-200">
              GPA: {education.gpa}
            </p>
            <p className="mt-2 text-sm text-slate-400">{education.period}</p>
          </div>

          <div className="glass card-hover rounded-3xl p-6">
            <Award className="mb-5 h-7 w-7 text-violet-200" />
            <h3 className="mb-4 text-xl font-semibold text-white">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((certification) => (
                <div key={certification.title}>
                  <p className="text-slate-200">{certification.title}</p>
                  <p className="text-sm text-slate-400">{certification.meta}</p>
                  <a
                    href={certification.href}
                    className="mt-2 inline-block text-sm text-cyan-200 hover:text-cyan-100"
                  >
                    {certification.linkLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="glass card-hover rounded-3xl p-6">
            <Sparkles className="mb-5 h-7 w-7 text-lime-200" />
            <h3 className="mb-4 text-xl font-semibold text-white">
              Achievements
            </h3>
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-7xl px-6 pb-10 pt-8 md:px-8">
        <div className="glass flex flex-col justify-between gap-4 rounded-3xl p-6 md:flex-row md:items-center">
          <p className="font-mono text-sm text-slate-400">
            built_with: next.js / typescript / tailwind / framer-motion
          </p>
          <p className="text-sm text-slate-400">
            © 2026 Anjana Thandassery. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
