"use client";

import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";

export default function RoadmapSection() {
  const { language } = useLanguage();
  const roadmap = dictionary.roadmap;

  return (
    <section id="roadmap" className="py-10 lg:py-14 relative bg-[var(--bg-dark)]/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">{roadmap.title[language]}</h2>
          <p className="section-subtitle mt-4">{roadmap.subtitle[language]}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent" />

            {/* Timeline items */}
            <div className="space-y-12">
              {roadmap.phases.map((phase, index) => (
                <div
                  key={phase.year}
                  className={`relative flex items-start gap-8 md:gap-0 reveal visible stagger-${index + 1}`}
                >
                  {/* Year badge - mobile */}
                  <div className="md:hidden flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center relative z-10">
                      <div className="w-3 h-3 rounded-full bg-[var(--bg-dark)]" />
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="md:flex md:items-start md:w-full">
                    {/* Left side - year (even) or content (odd) */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}>
                      {index % 2 === 0 ? (
                        <div className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                          {phase.year}
                        </div>
                      ) : (
                        <div className="glass-card p-6">
                          <ul className="space-y-3">
                            {phase.items[language].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Center node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-dark)] z-10 mt-1" />

                    {/* Right side - content (even) or year (odd) */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12 md:order-2" : "md:pr-12 md:text-right"}`}>
                      {index % 2 === 0 ? (
                        <div className="glass-card p-6">
                          <ul className="space-y-3">
                            {phase.items[language].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                          {phase.year}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile content */}
                  <div className="flex-1 md:hidden">
                    <div className="text-xl font-bold text-[var(--accent)] mb-3">
                      {phase.year}
                    </div>
                    <div className="glass-card p-4">
                      <ul className="space-y-2">
                        {phase.items[language].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
