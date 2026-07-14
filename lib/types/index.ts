export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
  image?: string;
  screenshots?: string[]; // details page gallery, না দিলে image ব্যবহার হবে
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface JourneyStep {
  id: string;
  given: string; // math-proof framing: "Given"
  then: string; // "Then"
  period: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100, progress bar এর জন্য
  color: string; // এই লাইনটা add করো
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string; // Full-time / Part-time
  highlights: string[];
  skills: string[];
}

// export type Skill = {
//   name: string;
//   icon: string;
//   level: number;
//   color: string; // এই লাইনটা add করো
// };
