export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Skill {
  name: string;
  icon: string; // skill-icons.dev slug
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
