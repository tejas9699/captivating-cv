import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Tejas Gawai — Frontend Developer (Angular) Portfolio";
const description =
  "Portfolio of Tejas Gawai, frontend developer specialising in Angular, TypeScript and responsive UI. View projects, skills, resume and contact details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
