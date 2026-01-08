"use client";

import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";
import { Lock, FileCheck, Users, Layers } from "lucide-react";

const trustIcons = [Lock, FileCheck, Users, Layers];

export default function TrustSection() {
  const { language } = useLanguage();
  const trust = dictionary.trust;

  return (
    <section className="py-10 lg:py-14 relative bg-[var(--bg-dark)]/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {trust.title[language]}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {trust.badges.map((badge, index) => {
            const Icon = trustIcons[index];
            return (
              <div
                key={badge.title.en}
                className={`glass-card p-5 text-center reveal visible stagger-${index + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {badge.title[language]}
                </h3>
                <p className="text-xs text-gray-400">
                  {badge.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
