import photo from "@/assets/tejas.png.asset.json";
import resume from "@/assets/resume.pdf.asset.json";

export const profile = {
  name: "Tejas Gawai",
  role: "Frontend Developer",
  focus: "Angular · TypeScript · UI Engineering",
  location: "Vasind, Thane, Maharashtra",
  phone: "+91 9699817290",
  phoneHref: "tel:+919699817290",
  email: "gawaitejas9699@gmail.com",
  linkedin: "https://www.linkedin.com/in/tejas-gawai",
  github: "https://github.com/tejas9699",
  certificateUrl:
    "http://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON04251121599",
  photoUrl: photo.url,
  resumeUrl: resume.url,
  summary:
    "2025 B.Sc. IT graduate who turns Figma files into fast, component-driven interfaces. I care about clean architecture, buttery interactions and pages that load before you blink.",
};

export const stats = [
  { value: "15+", label: "Reusable UI components shipped" },
  { value: "100%", label: "Mobile-first responsive builds" },
  { value: "2025", label: "B.Sc. Information Technology" },
  { value: "1", label: "Full stack certification" },
];

export const techStack = [
  { name: "Angular", slug: "angular", color: "DD0031" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "663399" },
  { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Postman", slug: "postman", color: "FF6C37" },
  { name: "GitHub", slug: "github", color: "8B949E" },
  { name: "Java", slug: "openjdk", color: "F89820" },
];

export const iconUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export const projects = [
  {
    title: "Amardeep Creative",
    tagline: "Marketing site & component library",
    description:
      "Designed high-fidelity layouts in Figma, then built 15+ reusable UI components covering every page and module. Hand-tuned DOM logic, form handling and a mobile-first grid that stays sharp from 320px up.",
    stack: ["JavaScript", "TypeScript", "Bootstrap 5", "CSS3", "HTML5", "MySQL"],
    highlights: [
      "15+ reusable components across pages and modules",
      "Mobile-first responsive design for every breakpoint",
      "Faster page loads via leaner code structure",
    ],
  },
  {
    title: "Java Full Stack Program",
    tagline: "EduBridge certification build-outs",
    description:
      "Hands-on training covering SDLC, Agile delivery and end-to-end app structure — from database modelling in MySQL to API testing in Postman and interface work on the frontend.",
    stack: ["Java", "MySQL", "Postman", "Agile"],
    highlights: [
      "Certified Java Full Stack Development",
      "API debugging and request flows with Postman",
      "Relational schema design and queries",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap 5"],
  },
  {
    title: "Design & UX",
    items: ["Figma", "Kendo UI", "Responsive / mobile-first", "UI/UX principles"],
  },
  {
    title: "Tooling",
    items: ["Git", "MySQL", "Postman", "GitHub Copilot", "Cursor", "Claude Code"],
  },
  {
    title: "Concepts",
    items: [
      "Component architecture",
      "DOM manipulation",
      "Form handling",
      "Performance optimization",
      "SDLC & Agile",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Certificates", href: "#certificates" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];