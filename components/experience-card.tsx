import { Badge } from "@/components/badge";

type ExperienceCardProps = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
};

export function ExperienceCard({
  role,
  company,
  location,
  period,
  description,
  bullets,
  stack,
}: ExperienceCardProps) {
  return (
    <article className="glass card-hover rounded-3xl p-6 md:p-8">
      <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-semibold text-white">{role}</h3>
          <p className="mt-1 text-cyan-100">{company}</p>
          <p className="mt-1 text-sm text-slate-400">{location}</p>
        </div>
        <div className="rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 font-mono text-xs text-violet-100">
          {period}
        </div>
      </div>

      <p className="mb-5 max-w-3xl text-slate-300">{description}</p>

      <ul className="space-y-3 text-sm leading-6 text-slate-300">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(198,255,103,0.8)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </article>
  );
}
