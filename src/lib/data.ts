import EcommerceApi from "../assets/Ecommerce-api.png";
import SnipSaver from "../assets/SnipSaver.png";
import MovieTracker from "../assets/Movie-Tracker.png";
import GymForAge from "../assets/GymForAge.png";

export const projects = [
    {
        name: "GymForAge",
        description:
            "A PWA application for tracking gym workouts. User can create their own exercises and workouts and track their progress. Built with React and Tailwind CSS and Supabase. Download as an app on your phone using the browser's install feature or save to home screen!",
        image: GymForAge,
        github: "https://github.com/Coday-aw/Gym-App",
        tags: ["React", "Tailwind CSS", "TypeScript", "Supabase", "Clerk", "Vercel"],
        liveDemo: "https://gymforage.vercel.app/",
    },
    {
        name: "SnipSaver",
        description:
            "A web application that allows users to save and organize their code snippets. Built with Next.js, Supabase, Tailwind CSS and Clerk for authentication.",
        image: SnipSaver,
        github: "https://github.com/Coday-aw/SnipSaver",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "Clerk", "TypeScript"],
        liveDemo: "https://snip-saver.vercel.app/",
    },
     {
        name: "Ecommerce API",
        description:
            "A RESTful API for an e-commerce platform built with ASP.NET Core. It provides endpoints for managing products, orders, and users.",
        image: EcommerceApi,
        github: "https://github.com/Coday-aw/RestApi-with-ASP.NET-Core",
        tags: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "JWT Auth"],
        liveDemo: "https://github.com/Coday-aw/RestApi-with-ASP.NET-Core",
    },
    {
        name: "Movie Tracker",
        description:
            "A web application for tracking movies and TV shows. Built with React and Tailwind CSS.",
        image: MovieTracker,
        github: "https://github.com/Coday-aw/MovieTracker",
        tags: ["React", "Tailwind CSS", "JavaScript", "OMDb API", "Framer Motion"],
        liveDemo: "https://movie-tracker-lake.vercel.app/",
    },
];

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "TypeScript", icon: "🔷" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "HTML/CSS", icon: "🌐" },
            { name: "JavaScript", icon: "⚡" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "🟢" },
            { name: "Express", icon: "🚀" },
            { name: "ASP.NET Core", icon: "⚡" },
            { name: "REST APIs", icon: "🔗" },
            { name: "C#", icon: "🟣" },
            { name: "SQL Server", icon: "🗄️" },
        ],
    },
    {
        category: "Tools & Other",
        items: [
            { name: "Git", icon: "🔀" },
            { name: "Docker", icon: "🐳" },
            { name: "Supabase", icon: "🗄️" },
            { name: "MongoDB", icon: "🗄️" },
            { name: "CI/CD", icon: "⚙️" },
            { name: "Azure", icon: "☁️" },
        ],
    },
];