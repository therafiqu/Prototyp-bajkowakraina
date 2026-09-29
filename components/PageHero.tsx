import { StoryShapes } from "./StoryShapes";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <StoryShapes />
      <div className="rise relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.08] text-ink md:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
        ) : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
