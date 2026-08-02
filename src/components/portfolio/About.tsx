import { GraduationCap, Award, Sparkles, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { profile } from "./data";


const strengths = [
  "Strong logical thinking and problem-solving",
  "Clear communication, collaborative by default",
  "Learns new tools and stacks fast",
  "Genuine obsession with UI/UX detail",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <SectionHeading eyebrow="About" title="A fresher with a builder's instinct" />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal delay={80} className="surface-card p-7">
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm an aspiring Angular developer and 2025 B.Sc. IT graduate with real project
            experience building responsive, component-based interfaces in JavaScript, TypeScript,
            HTML5, CSS3 and Bootstrap 5. I sketch in Figma, think in components, and care about
            the last 10ms of a page load as much as the first pixel.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={160} className="surface-card p-7">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">B.Sc. Information Technology</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              BK Birla College of Arts, Science & Commerce, Kalyan
            </p>
            <p className="mt-2 text-xs tracking-wide text-primary uppercase">
              June 2022 – April 2025
            </p>
          </Reveal>
          <Reveal delay={240} className="surface-card p-7">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Java Full Stack Development</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              EduBridge · certified program covering SDLC, Agile and end-to-end app delivery
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}