import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "./data";
import { Reveal, SectionHeading } from "./Section";

const cards = [
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/tejas-gawai",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "tejas9699",
    href: profile.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="mesh-bg surface-card overflow-hidden p-8 text-center md:p-14">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">worth shipping</span>
            </>
          }
        />
        <Reveal delay={80}>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Hiring for a frontend or Angular role? I reply fast, and I'm ready to start
            immediately.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Frontend%20opportunity%20for%20Tejas`}
              className="glow-ring inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Reach out to me
            </a>
            <a
              href={profile.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Call {profile.phone}
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {profile.location} · open to remote &
            Mumbai / Thane / Pune
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 90}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface-card flex items-center gap-3 bg-card p-5 text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <card.icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                    {card.label}
                  </span>
                  <span className="block truncate text-sm font-semibold">{card.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}