"use client";

import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";

export default function ArchitectureSection() {
  const { language } = useLanguage();
  const architecture = dictionary.architecture;

  return (
    <section id="architecture" className="py-10 lg:py-14 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">{architecture.title[language]}</h2>
          <p className="section-subtitle mt-4">{architecture.subtitle[language]}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-[var(--accent)] hidden md:block" />

            {/* Layers */}
            <div className="space-y-6 md:space-y-0">
              {architecture.layers.map((layer, index) => (
                <div
                  key={layer.title.en}
                  className={`relative reveal visible stagger-${index + 1}`}
                >
                  <div
                    className={`md:flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Layer card */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="glass-card p-6 relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-[var(--bg-dark)] font-bold text-sm">
                            {index + 1}
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {layer.title[language]}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {layer.description[language]}
                        </p>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-dark)] z-10" />

                    {/* Empty space for alignment */}
                    <div className="md:w-1/2" />
                  </div>

                  {/* Spacing between layers */}
                  {index < architecture.layers.length - 1 && (
                    <div className="h-6 md:h-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
