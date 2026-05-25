"use client";

import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-primary via-accent to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                  <div className="relative">
                    {/* Outer glow */}
                    <div
                      className={`absolute inset-0 rounded-full blur-md ${
                        item.type === "experience" ? "bg-accent/40" : "bg-primary/40"
                      }`}
                      style={{
                        width: "28px",
                        height: "28px",
                        marginLeft: "-14px",
                        marginTop: "-14px",
                      }}
                    />
                    {/* Dot */}
                    <div
                      className={`relative w-4 h-4 rounded-full border-4 border-background ${
                        item.type === "experience" ? "bg-accent" : "bg-primary"
                      } transition-all duration-300 hover:scale-125`}
                      style={{
                        marginLeft: "-8px",
                        marginTop: "-8px",
                      }}
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-auto w-1/2 ${index % 2 === 0 ? "mr-auto ml-0 pr-16" : "pl-16"}`}>
                  <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group animate-fade-in-up hover:scale-105">
                    {/* Icon and Type Badge */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span
                        className={`text-xs font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                          item.type === "experience"
                            ? "bg-accent/20 text-accent"
                            : "bg-primary/20 text-primary"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary mb-3">{item.company}</p>

                    {/* Date */}
                    <p className="text-xs font-mono text-muted mb-3">{item.date}</p>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
