import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "JavaScript", icon: "js", level: 85, color: "#F7DF1E" },
      { name: "TypeScript", icon: "ts", level: 80, color: "#3178C6" },
      { name: "React", icon: "react", level: 85, color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", level: 75, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: "tailwind", level: 85, color: "#38BDF8" },
      { name: "HTML5", icon: "html", level: 90, color: "#E34F26" },
      { name: "CSS3", icon: "css", level: 85, color: "#1572B6" },
      // { name: "TanStack Query", icon: "react", level: 70, color: "#FF4154" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", level: 75, color: "#5FA04E" },
      { name: "Express", icon: "express", level: 75, color: "#FFFFFF" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", level: 75, color: "#47A248" },
      { name: "Mongoose", icon: "mongoose", level: 70, color: "#880000" },
      { name: "PostgreSQL", icon: "postgres", level: 70, color: "#4169E1" },
      { name: "Prisma", icon: "prisma", level: 70, color: "#2D3748" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", icon: "git", level: 80, color: "#F05032" },
      // { name: "GitHub", icon: "github", level: 80, color: "#FFFFFF" },
      // { name: "Postman", icon: "postman", level: 75, color: "#FF6C37" },
      // { name: "Figma", icon: "figma", level: 60, color: "#F24E1E" },
      // { name: "Firebase", icon: "firebase", level: 65, color: "#FFCA28" },
      { name: "Vercel", icon: "vercel", level: 75, color: "#FFFFFF" },
      { name: "Netlify", icon: "netlify", level: 75, color: "#00C7B7" },
    ],
  },
];
