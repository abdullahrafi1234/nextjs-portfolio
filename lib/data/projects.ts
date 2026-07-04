import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "noteshala",
    title: "NoteShala",
    description:
      "A feature-rich React + TypeScript markdown documentation and notes viewer, built over a 6-month bootcamp. Includes priority-based search, syntax highlighting, and reading progress tracking.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "",
    githubUrl: "https://github.com/abdullahrafi1234/noteshala",
    featured: true,
    highlights: [
      "Priority-based search across heading levels",
      "Shiki + Dracula theme syntax highlighting",
      "Live reading timer with isolated re-renders",
      "IntersectionObserver-based Table of Contents",
      "Bookmarks with dark/light mode support",
    ],
  },
];
