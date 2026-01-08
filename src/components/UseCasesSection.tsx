"use client";

import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";
import { Building2, Award, UserCheck, FlaskConical, Activity } from "lucide-react";

const useCaseIcons = [Building2, Award, UserCheck, FlaskConical, Activity];

export default function UseCasesSection() {
  const { language } = useLanguage();
  const useCases = dictionary.useCases;

  return (
    <section id="use-cases" className="py-10 lg:py-14 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">{useCases.title[language]}</h2>
          <p className="section-subtitle mt-4">{useCases.subtitle[language]}</p>
        </div>

        {/* First row - 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {useCases.cases.slice(0, 3).map((useCase, index) => {
            const Icon = useCaseIcons[index];
            return (
              <div
                key={useCase.title.en}
                className="glass-card p-6 reveal visible"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00d4aa]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {useCase.title[language]}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {useCase.description[language]}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm text-[#00d4aa]">
                    {useCase.howItHelps[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {useCases.cases.slice(3, 5).map((useCase, index) => {
            const Icon = useCaseIcons[index + 3];
            return (
              <div
                key={useCase.title.en}
                className="glass-card p-6 reveal visible"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00d4aa]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {useCase.title[language]}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {useCase.description[language]}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm text-[#00d4aa]">
                    {useCase.howItHelps[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
