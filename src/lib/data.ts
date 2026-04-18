import EcommerceApi from "../assets/Ecommerce-api.png";
import SnipSaver from "../assets/SnipSaver.png";
import MovieTracker from "../assets/Movie-Tracker.png";
import QuizApp from "../assets/Quizly.png";

export const projects = [
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
        name: "SnipSaver",
        description:
            "A web application that allows users to save and organize their code snippets. Built with Next.js, Supabase, Tailwind CSS and Clerk for authentication.",
        image: SnipSaver,
        github: "https://github.com/Coday-aw/SnipSaver",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "Clerk", "TypeScript"],
        liveDemo: "https://snip-saver.vercel.app/",
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
    {
        name: "Quiz App",
        description:
            "A quiz application built with React and Tailwind CSS. It allows users to take quizzes on various topics and tracks their scores.",
        image: QuizApp,
        github: "https://github.com/Coday-aw/Quizly",
        tags: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express.js", "MongoDB"],
        liveDemo: "https://quizly-two.vercel.app/",
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
            { name: "Firebase", icon: "🔥" },
            { name: "MongoDB", icon: "🍃" },
            { name: "CI/CD", icon: "⚙️" },
            { name: "Figma", icon: "🎯" },
        ],
    },
]; 