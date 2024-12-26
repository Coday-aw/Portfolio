import ecommerceStoreImg from "@/public/ecommercestore.png";
import movieTrackerImg from "@/public/MovieTracker.png";
import StayBnbImage from "@/public/StayBnb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Store",
    description:
      " A full-stack e-commerce store for selling electronics. It has features like authentication, cart and more.",
    tags: ["React", "MongoDB", "Tailwind", "Express", "Redux", "Node"],
    imageUrl: ecommerceStoreImg,
    gitHubUrl: "https://github.com/Coday-aw/Ecommerce",
  },
  {
    title: "StayBnb",
    description:
      "A clone of the popular website Airbnb. It has features like authentication, booking and more.",
    tags: ["Typescript", "Tailwind", "Next.js", "Firebase", "Clerk"],
    imageUrl: StayBnbImage,
    gitHubUrl: "https://stay-bnb-eta.vercel.app/",
  },
  {
    title: "Movie Tracker",
    description:
      "A movie tracker app that helps you keep track of all the trending,upcoming and top rated movies.",
    tags: ["React", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: movieTrackerImg,
    gitHubUrl: "https://movie-tracker-lake.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
