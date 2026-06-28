import { Badge } from "@/components/badge";

type SkillCloudProps = {
  title: string;
  skills: string[];
};

export function SkillCloud({ title, skills }: SkillCloudProps) {
  return (
    <div className="glass card-hover rounded-3xl p-6">
      <h3 className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-cyan-100">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={skill}
            variant={
              index % 5 === 0 ? "lime" : index % 3 === 0 ? "violet" : "neutral"
            }
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
