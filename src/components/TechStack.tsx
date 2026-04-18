import { skills } from "@/lib/data";


export default function TechStack() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tech Stack &{" "}
            <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-5 text-foreground">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-surface/80 border border-surface-border/50 hover:border-primary/40 hover:bg-surface-light/60 transition-all duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </span>
                    <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
