import EcommerceApi from "../assets/Ecommerce-api.png";
import SnipSaver from "../assets/SnipSaver.png";
import MovieTracker from "../assets/Movie-Tracker.png";
import GymForAge from "../assets/GymForAge.png";

export const projects = [
    {
        name: "GymForage",
        description:
            "A PWA application for tracking gym workouts. User can create their own exercises and workouts and track their progress. Built with React and Tailwind CSS and Supabase. Download as an app on your phone using the browser's install feature or save to home screen!",
        challenge: "Forgetting exercises and workouts mid-session, leading to lost progress and frustration",
        solution: "Implemented an intuitive app where users can quickly log sets and reps with a clean interface, and used Supabase for real-time syncing across devices so progress is never lost",
        image: GymForAge,
        github: "https://github.com/Coday-aw/Gym-App",
        tags: ["React", "Tailwind CSS", "TypeScript", "Supabase", "Clerk", "Vercel"],
        liveDemo: "https://gymforage.vercel.app/",
    },
    {
        name: "SnipSaver",
        description:
            "A web application that allows users to save and organize their code snippets. Built with Next.js, Supabase, Tailwind CSS and Clerk for authentication.",
        challenge: "Searching through old files or projects to find code snippets, leading to lost time and productivity",
        solution: "Leveraged a code library with powerful search and organization features, allowing users to quickly find and manage their snippets, and used Supabase for real-time syncing across devices so snippets are always accessible",
        image: SnipSaver,
        github: "https://github.com/Coday-aw/SnipSaver",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "Clerk", "TypeScript"],
        liveDemo: "https://snip-saver.vercel.app/",
    },
     {
        name: "Ecommerce API",
        description:
            "A RESTful API for an e-commerce platform built with ASP.NET Core. It provides endpoints for managing products, orders, and users.",
        challenge: "Designing scalable endpoints with proper authorization and database optimization",
        solution: "Implemented JWT authentication, entity relationships with EF Core, and pagination for large datasets",
        image: EcommerceApi,
        github: "https://github.com/Coday-aw/RestApi-with-ASP.NET-Core",
        tags: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "JWT Auth"],
        liveDemo: "https://github.com/Coday-aw/RestApi-with-ASP.NET-Core",
    },
    {
        name: "Movie Tracker",
        description:
            "A web application for tracking movies and TV shows. Built with React and Tailwind CSS.",
        challenge: "Integrating external API data smoothly with a responsive UI",
        solution: "Built custom hooks for API calls with error handling and used Framer Motion for delightful transitions",
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

export const timeline = [
    {
        type: "experience",
        title: "Recreational Educator",
        company: "Herresta School",
        date: "2021 - 2025",
        description: "Plan and lead activities such as sports, games, arts, outdoor trips, and social events for students. Foster a positive and inclusive environment that promotes teamwork, creativity, and personal growth.",
        icon: "💼",
    },
    {
        type: "education",
        title: "Frontend Development",
        company: "KYH ",
        date: "2023 - 2025",
        description: "Focused on building responsive and interactive web applications using modern frontend technologies like React, Tailwind CSS, and TypeScript.",
        icon: "🎓",
    },
    {
        type: "experience",
        title: "Sales Assistant",
        company: "JYSK",
        date: "2023 - Now",
        description: "Provided customer-focused sales support, assisted with merchandising and inventory management, and contributed to a positive shopping experience in a fast-paced retail environment.",
        icon: "🏆",
    },
    {
        type: "education",
        title: ".NET Full Stack Development",
        company: "Chas Academy",
        date: "2025 - 2027",
        description: "Focused on building clean and scalable backend solutions with C# and ASP.NET Core, while also deepening frontend skills with React. Coursework includes API design, database management, and cloud deployment.",
        icon: "🚀",
    },
];