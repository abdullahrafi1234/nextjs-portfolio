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
    liveUrl: "", // Live Link বসাও
    githubUrl: "", // Frontend/Backend repo link বসাও
    featured: true,
    highlights: [
      "Cart, checkout & multiple payment options (COD, SSLCommerz, Stripe)",
      "Provider dashboard for menu & real-time order status",
      "Admin panel for platform-wide management",
    ],
    image: "/projects/platterly.png",
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
    liveUrl: "",
    githubUrl: "",
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
    liveUrl: "",
    githubUrl: "",
    featured: false,
    highlights: [
      "Detailed food/restaurant listings with images & pricing",
      "Secure auth with personalized dashboard",
    ],
    image: "/projects/foody.png",
  },
];

// import { Project } from "@/lib/types";

// export const projects: Project[] = [
//   {
//     id: "noteshala",
//     title: "NoteShala",
//     description:
//       "A feature-rich React + TypeScript markdown documentation and notes viewer, built over a 6-month bootcamp. Includes priority-based search, syntax highlighting, and reading progress tracking.",
//     techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
//     liveUrl: "",
//     githubUrl: "https://github.com/abdullahrafi1234/noteshala",
//     featured: true,
//     highlights: [
//       "Priority-based search across heading levels",
//       "Shiki + Dracula theme syntax highlighting",
//       "Live reading timer with isolated re-renders",
//       "IntersectionObserver-based Table of Contents",
//       "Bookmarks with dark/light mode support",
//     ],
//     image: "/projects/noteshala.png",
//   },
// ];
