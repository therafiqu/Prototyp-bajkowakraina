import { StoryShapes } from "./StoryShapes";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  id,
  headingLevel = 1,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
  id?: string;
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id={id} className="relative scroll-mt-28 overflow-hidden border-b border-line">
      <StoryShapes />
      <div className="rise relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
          {eyebrow}
        </p>
        <Heading className="mt-3 max-w-3xl text-4xl leading-[1.08] text-ink md:text-6xl">
          {title}
        </Heading>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
        ) : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
