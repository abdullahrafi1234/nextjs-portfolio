import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextjs", level: 80, color: "#ffffff" },
      { name: "React", icon: "react", level: 85, color: "#61dafb" },
      { name: "JavaScript", icon: "js", level: 85, color: "#f7df1e" },
      { name: "TypeScript", icon: "ts", level: 80, color: "#3178c6" },
      { name: "Tailwind CSS", icon: "tailwind", level: 85, color: "#38bdf8" },
      { name: "HTML5", icon: "html", level: 90, color: "#e34f26" },
      { name: "CSS3", icon: "css", level: 85, color: "#2965f1" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", level: 75, color: "#3c873a" },
      { name: "Express", icon: "express", level: 75, color: "#9e9e9e" },
      { name: "Go", icon: "go", level: 55, color: "#00add8" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", level: 75, color: "#47a248" },
      { name: "Mongoose", icon: "mongodb", level: 70, color: "#880000" },
      { name: "PostgreSQL", icon: "postgres", level: 70, color: "#336791" },
      { name: "Prisma", icon: "prisma", level: 70, color: "#5a67d8" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", icon: "git", level: 80, color: "#f05032" },
      { name: "GitHub", icon: "github", level: 80, color: "#ffffff" },
      { name: "Postman", icon: "postman", level: 75, color: "#ff6c37" },
      { name: "Firebase", icon: "firebase", level: 65, color: "#ffca28" },
      { name: "Vercel", icon: "vercel", level: 75, color: "#ffffff" },
      { name: "Netlify", icon: "netlify", level: 75, color: "#00c7b7" },
      { name: "Figma", icon: "figma", level: 60, color: "#f24e1e" },
    ],
  },
];
