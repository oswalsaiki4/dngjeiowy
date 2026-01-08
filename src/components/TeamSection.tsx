"use client";

import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";

export default function TeamSection() {
  const { language } = useLanguage();
  const team = dictionary.team;

  return (
    <section id="team" className="py-10 lg:py-14 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">{team.title[language]}</h2>
          <p className="section-subtitle mt-4">{team.subtitle[language]}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.members.map((member, index) => (
            <div
              key={member.name}
              className={`glass-card p-6 text-center reveal visible stagger-${index + 1}`}
            >
              {/* Avatar with initials */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--bg-dark)]">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[var(--accent)] mb-3">
                {member.role[language]}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {member.bio[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
