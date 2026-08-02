import { Download, Eye, FileText } from "lucide-react";
import { profile } from "./data";
import { Reveal, SectionHeading } from "./Section";

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <SectionHeading eyebrow="Resume" title="The one-page version" />
      <Reveal delay={100} className="mesh-bg surface-card mt-10 p-8 md:p-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <FileText className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-bold">
              Tejas Gawai — Frontend Developer
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Skills, project detail, education and certifications in a single recruiter-friendly
              PDF. Open it in the browser or download a copy for your ATS.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="glow-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Eye className="h-4 w-4" /> View resume
            </a>
            <a
              href={profile.resumeUrl}
              download="Tejas_Gawai_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}