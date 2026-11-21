// All portfolio content lives here — edit this file to update the site.

export const site = {
  name: "Lovish Aul",
  initials: "LA.",
  role: "AI Engineer & Full Stack Developer",
  location: "Yamunanagar, Haryana",
  email: "lovish242004@gmail.com",
  resumeUrl: "#contact", // TODO: e.g. "/resume.pdf" (put the file in /public)
  githubUrl: "https://github.com/LovishAul1224",
  linkedinUrl: "https://linkedin.com/in/lovishaul",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const traits = ["Fast Learner", "Team Player", "Problem Solver", "Open Source"];

export const facts = [
  { k: "UNIVERSITY", v: "MMU Mullana · CSE · 7.81 CGPA" },
  { k: "LOCATION", v: "Yamunanagar, Haryana, India" },
  { k: "STATUS", v: "Open to freelance & collabs" },
  { k: "FOCUS", v: "AI Engineering · Full Stack" },
  { k: "BATCH", v: "Sept 2022 – May 2026" },
];

export const stats = [
  { value: "3+", label: "Projects shipped", color: "var(--accent)" },
  { value: "7.81", label: "CGPA at MMU", color: "var(--pink)" },
  { value: "2026", label: "Graduation batch", color: "var(--mint)" },
  { value: "Open", label: "To freelance", color: "var(--white)" },
];

export const marquee = [
  "AI ENGINEERING",
  "FULL STACK",
  "REACT",
  "NODE.JS",
  "PYTHON",
  "GENERATIVE AI",
  "MONGODB",
  "DOCKER",
];

export const skillGroups = [
  { icon: "{ }", title: "Languages", color: "#FFD23F", items: ["JavaScript", "Python", "Java", "C", "HTML", "CSS"] },
  { icon: "⚙", title: "Frameworks", color: "#FF90E8", items: ["React.js", "Node.js", "Express.js", "TailwindCSS"] },
  { icon: "DB", title: "Databases", color: "#A0C4FF", items: ["MongoDB", "PostgreSQL", "Firestore", "Upstash Redis"] },
  { icon: ">_", title: "Tools & DevOps", color: "#B8F2C9", items: ["Git", "Docker", "Vercel", "VS Code", "IntelliJ", "Firebase"] },
  { icon: "AI", title: "AI / ML", color: "#FFB86B", items: ["Supervised ML", "Generative AI", "LLMs", "Regression", "Classification"] },
  { icon: "API", title: "Auth & APIs", color: "#FFFFFF", items: ["JWT", "Firebase Auth", "REST APIs", "Axios", "Fetch"] },
];

type Project = {
  num: string;
  status: string;
  dot: string;
  title: string;
  kicker: string;
  color: string;
  desc: string;
  highlight: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  note?: string; // shown when there are no links yet
};

export const projects: Project[] = [
  {
    num: "01",
    status: "In development",
    dot: "#FFB86B",
    title: "Tick",
    kicker: "DAILY REMINDERS APP FOR iOS",
    color: "#FFD23F",
    desc: "A simple reminders app for iOS. Plan your day, tick things off, and get a gentle nudge until they're done — including client follow-ups and payment reminders.",
    highlight: "Native SwiftUI app, built for daily use",
    tags: ["Swift", "SwiftUI", "WidgetKit", "StoreKit 2"],
    note: "Coming soon to the App Store",
  },
  {
    num: "02",
    status: "GitHub",
    dot: "#A0C4FF",
    title: "Ragify",
    kicker: "PRODUCTION RAG SYSTEM",
    color: "#A0C4FF",
    desc: "Ask questions about your PDFs with semantic search, similarity-threshold filtering and an optional web-search fallback. Recursive chunking with Sentence-Transformer embeddings, ChromaDB retrieval through LangChain, and OpenRouter LLMs behind a FastAPI backend and Streamlit UI.",
    highlight: "Semantic search with web-search fallback",
    tags: ["Python", "LangChain", "ChromaDB", "FastAPI", "Streamlit"],
    codeUrl: "https://github.com/LovishAul1224/Ragify",
  },
  {
    num: "03",
    status: "Live",
    dot: "#2BD46A",
    title: "Focus Monk",
    kicker: "AI-POWERED PRODUCTIVITY APP",
    color: "#FF90E8",
    desc: "A full-stack productivity web app helping users manage tasks and improve focus using structured work sessions. Secure Firebase Authentication, real-time Firestore tasks, and deployed on Vercel.",
    highlight: "Real-time task sync with Firestore",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "TailwindCSS"],
    liveUrl: "https://focus-monk.vercel.app",
    codeUrl: "https://github.com/LovishAul1224/FocusMonk",
  },
];

export const jobs = [
  {
    type: "EXPERIENCE",
    date: "Training",
    color: "#FFD23F",
    org: "Contriverz",
    role: "Java Programming Intern",
    points: [
      "Completed hands-on training in Core Java and Java Programming.",
      "Implemented OOP concepts, exception handling, and collection framework.",
      "Gained strong understanding of Java architecture, syntax, and functional programming.",
    ],
  },
  {
    type: "VOLUNTEERING",
    date: "Nov 2022 – Nov 2025",
    color: "#FF90E8",
    org: "CodeX Community",
    role: "Core Team Member",
    points: [
      "Organized technical events and workshops for first-year students on emerging technologies.",
      "Conducted sessions on modern dev tools and tech stacks.",
      "Ran coding competitions during university fest “Universumm”.",
      "Collaborated on event logistics and community outreach.",
    ],
  },
  {
    type: "EDUCATION",
    date: "Sept 2022 – May 2026",
    color: "#A0C4FF",
    org: "MMU Mullana, Ambala",
    role: "B.Tech — Computer Science Engineering",
    points: [
      "CGPA: 7.81 — consistently strong academic performance.",
      "Focus areas: AI Engineering, Full Stack Web Development, Data Structures.",
    ],
  },
];

export const certs = [
  { tag: "AI / ML", color: "#FFD23F", title: "Supervised Machine Learning: Regression & Classification", by: "DeepLearning.AI & Stanford University" },
  { tag: "GEN AI", color: "#FF90E8", title: "Generative AI Workshop — Cognizance ’25", by: "IIT Roorkee" },
  { tag: "JAVA", color: "#B8F2C9", title: "Javathon Online Quiz Competition", by: "Alpha Tech" },
];

export const contacts: { k: string; v: string; href?: string; color: string }[] = [
  { k: "GITHUB", v: "View profile ↗", href: site.githubUrl, color: "#FFD23F" },
  { k: "LINKEDIN", v: "Connect with me ↗", href: site.linkedinUrl, color: "#A0C4FF" },
  { k: "LOCATION", v: "Haryana, India", color: "#FF90E8" },
  { k: "RESPONSE", v: "Within 24 hours", color: "#B8F2C9" },
];
