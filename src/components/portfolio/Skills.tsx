import { iconUrl, skillGroups, techStack } from "./data";
import { Reveal, SectionHeading } from "./Section";

export function Skills() {
  const row = [...techStack, ...techStack];

  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Tech stack" title="Tools I reach for daily" />
      </div>

      <div className="relative mt-10 overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {row.map((tech, i) => (
            <div
              key={`${tech.slug}-${i}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-3 whitespace-nowrap transition-colors hover:border-primary"
            >
              <img
                src={iconUrl(tech.slug, tech.color)}
                alt={`${tech.name} logo`}
                className="h-6 w-6"
                width={24}
                height={24}
                loading="lazy"
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 90} className="surface-card p-6">
            <h3 className="font-display text-base font-bold">
              <span className="text-primary">0{i + 1}</span> {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}