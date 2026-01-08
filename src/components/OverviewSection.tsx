"use client";

import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";
import { Shield, User, Scale } from "lucide-react";

const icons = {
  shield: Shield,
  user: User,
  scale: Scale,
};

export default function OverviewSection() {
  const { language } = useLanguage();
  const overview = dictionary.overview;

  return (
    <section id="overview" className="py-12 lg:py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">{overview.title[language]}</h2>
          <p className="section-subtitle mt-4">{overview.subtitle[language]}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {overview.pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <div
                key={pillar.title.en}
                className={`glass-card p-8 reveal visible stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {pillar.title[language]}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {pillar.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
