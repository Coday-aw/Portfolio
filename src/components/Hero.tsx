import Image from "next/image";
import profileImage from "../assets/profilePic.png"

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up delay-100">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Coday Awahmed</span>
            </h1>
            <h2 className=" text-3xl text-muted leading-relaxed max-w-lg mb-2 animate-fade-in-up delay-200">FullStack Developer (React & C#/ASP.NET)</h2>
            <p className="text-lg text-muted leading-relaxed max-w-lg mb-8 animate-fade-in-up delay-200">
              I am a FullStack Developer with experience in building dynamic web applications using React and Node.js/Express.
              Currently studying .NET and C# to expand my skill and knowledge in backend development and build clean and scalable backend solutions with C# and ASP.NET Core.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-surface-border text-foreground font-medium text-sm transition-all duration-300 hover:border-primary/50 hover:bg-surface-light/50 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up">
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-1 rounded-full gradient-border opacity-60 blur-sm" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-surface-border animate-float">
                <Image
                  src={profileImage}
                  alt="Coday Ahmed - Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
