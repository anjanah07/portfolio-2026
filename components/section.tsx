type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="mb-8">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.28em] text-cyan-200/80">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
