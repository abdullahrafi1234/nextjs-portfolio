import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "platterly",
    title: "Platterly",
    description:
      "A full-stack food ordering platform connecting customers with local kitchens — browse meals, order, pay, and track with dedicated dashboards for customers, restaurant providers, and admins.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    liveUrl: "https://platterly-frontend.vercel.app/", // Live Link বসাও
    githubUrl: "https://github.com/abdullahrafi1234/platterly-frontend", // Frontend/Backend repo link বসাও
    featured: true,
    highlights: [
      "Cart, checkout & multiple payment options (COD, SSLCommerz, Stripe)",
      "Provider dashboard for menu & real-time order status",
      "Admin panel for platform-wide management",
    ],
    image: "/projects/platterly.png",
  },
  {
    id: "sleep-well",
    title: "Sleep Well",
    description:
      "A full-stack MERN listings platform with Firebase authentication, built as a client-server project. Users can browse detailed listings with images, pricing, and location, manage a personal dashboard, and interact with a secure Express + MongoDB backend.",
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
    ],
    liveUrl: "https://ten-assignment-own.web.app/",
    githubUrl: "https://github.com/abdullahrafi1234/sleep-well-care-client",
    // githubServerUrl: "https://github.com/abdullahrafi1234/sleep-well-care-server",
    featured: false,
    highlights: [
      "Firebase-based secure user authentication",
      "Express + MongoDB REST API backend",
      "Interactive listing cards with Swiper carousel",
      "Client-side routing with React Router",
      "SweetAlert2-powered user feedback modals",
      "Responsive UI built with Tailwind CSS + DaisyUI",
    ],
    image: "/projects/sleepwell.png",
  },
  {
    id: "flypoint",
    title: "FlyPoint",
    description:
      "A parcel delivery management web app for booking parcels, tracking deliveries in real time, and managing delivery personnel.",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "TanStack Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    liveUrl: "https://fly-point-53b64.web.app/",
    githubUrl: "https://github.com/abdullahrafi1234/flyPoint-client",
    featured: true,
    highlights: [
      "Parcel booking & real-time delivery tracking",
      "Review system for delivery personnel",
      "Admin dashboard for users, parcels & personnel",
    ],
    image: "/projects/flypoint.png",
  },
  {
    id: "foody",
    title: "Foody",
    description:
      "A food discovery website for browsing recipes, food blogs, and nearby restaurants with a personalized account dashboard.",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    liveUrl: "https://eleven-assignment-4cccf.web.app/",
    githubUrl: "https://github.com/abdullahrafi1234/foody-client",
    featured: false,
    highlights: [
      "Detailed food/restaurant listings with images & pricing",
      "Secure auth with personalized dashboard",
    ],
    image: "/projects/foody.png",
  },
  {
    id: "noteshala",
    title: "NoteShala",
    description:
      "A feature-rich React + TypeScript markdown documentation and notes viewer, built over a 6-month bootcamp. Includes priority-based search, syntax highlighting, and reading progress tracking.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://noteshala-78deb.web.app/",
    githubUrl: "https://github.com/abdullahrafi1234/noteshala",
    featured: true,
    highlights: [
      "Priority-based search across heading levels",
      "Shiki + Dracula theme syntax highlighting",
      "Live reading timer with isolated re-renders",
      "IntersectionObserver-based Table of Contents",
      "Bookmarks with dark/light mode support",
    ],
    image: "/projects/noteshala.png",
  },

  {
    id: "advisor-coaching",
    title: "Advisors IT Institute",
    description:
      "A full-stack MERN coaching/advisory platform built collaboratively with a teammate, featuring a React client and an Express-based backend split into separate client-side and server-side codebases.",
    techStack: ["React", "Express", "MongoDB", "CSS"],
    liveUrl: "https://advisor-coaching.web.app/",
    githubUrl: "https://github.com/rubina02akter/advisor-web",
    featured: false,
    // isCollaboration: true,
    highlights: ["TODO: add actual features after reviewing the live site"],
    image: "/projects/advisors.png",
  },
];
