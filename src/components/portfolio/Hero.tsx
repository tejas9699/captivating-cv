import { ArrowDownRight, Github, Linkedin, FileText, Phone, MapPin } from "lucide-react";
import { profile, stats } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mesh-bg pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_35%,var(--background)_100%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-primary" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to frontend roles
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] font-bold sm:text-6xl lg:text-7xl">
            I build interfaces
            <br />
            that feel <span className="text-gradient">effortless</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="glow-ring group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              Reach out to me
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
            <div className="flex items-center gap-2">
              {[
                { href: profile.github, icon: Github, label: "GitHub" },
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.phoneHref, icon: Phone, label: "Call" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" /> {profile.phone}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-surface">
              <img
                src={profile.photoUrl}
                alt="Portrait of Tejas Gawai, frontend developer"
                className="h-full w-full object-cover"
                width={640}
                height={640}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
              <p className="font-display text-sm font-bold">{profile.role}</p>
              <p className="text-xs text-muted-foreground">{profile.focus}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 px-5 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="surface-card p-5">
            <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}