import { clsx } from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "cyan" | "violet" | "lime" | "neutral";
};

const variants = {
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  violet: "border-violet-300/25 bg-violet-300/10 text-violet-100",
  lime: "border-lime-300/25 bg-lime-300/10 text-lime-100",
  neutral: "border-slate-300/15 bg-white/[0.045] text-slate-200",
};

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs",
        "font-mono tracking-wide",
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
