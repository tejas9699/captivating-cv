import { ArrowUpRight, Check } from "lucide-react";
import { projects, profile } from "./data";
import { Reveal, SectionHeading } from "./Section";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <SectionHeading eyebrow="Work" title="Projects & hands-on experience" />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 120} className="surface-card group p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="mt-1 text-sm text-primary">{project.tagline}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          More code on GitHub <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}