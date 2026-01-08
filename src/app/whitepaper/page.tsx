"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";
import { ArrowLeft, Download, Menu, X } from "lucide-react";

export default function WhitepaperPage() {
  const { language, toggleLanguage } = useLanguage();
  const whitepaper = dictionary.whitepaper;
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = whitepaper.sections.map((s) => s.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [whitepaper.sections]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card !rounded-none border-t-0 border-x-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <span className="text-white/20">|</span>
              <span className="text-white font-medium">
                {whitepaper.title[language]}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="lang-toggle"
                aria-label="Toggle language"
              >
                {language === "en" ? "TR" : "EN"}
              </button>
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="lg:hidden p-2 text-white"
                aria-label="Toggle table of contents"
              >
                {tocOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="lg:flex lg:gap-12">
          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {whitepaper.tableOfContents[language]}
              </h2>
              <nav className="space-y-1">
                {whitepaper.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`toc-link ${
                      activeSection === section.id ? "active" : ""
                    }`}
                  >
                    {section.title[language]}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-white/10">
                <button className="btn-ghost w-full flex items-center justify-center gap-2 text-sm">
                  <Download size={16} />
                  {whitepaper.downloadPdf[language]}
                </button>
              </div>
            </div>
          </aside>

          {/* Table of Contents - Mobile */}
          {tocOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-[var(--bg-dark)]/95 pt-20 px-4 overflow-y-auto">
              <h2 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {whitepaper.tableOfContents[language]}
              </h2>
              <nav className="space-y-1">
                {whitepaper.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`toc-link ${
                      activeSection === section.id ? "active" : ""
                    }`}
                    onClick={() => setTocOpen(false)}
                  >
                    {section.title[language]}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-white/10">
                <button className="btn-ghost w-full flex items-center justify-center gap-2 text-sm">
                  <Download size={16} />
                  {whitepaper.downloadPdf[language]}
                </button>
              </div>
            </div>
          )}

          {/* Main content */}
          <main className="flex-1 max-w-3xl">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {whitepaper.title[language]}
              </h1>
              <div className="flex items-center gap-4">
                <button className="btn-accent text-sm flex items-center gap-2">
                  <Download size={16} />
                  {whitepaper.downloadPdf[language]}
                </button>
              </div>
            </div>

            <div className="space-y-12">
              {whitepaper.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    {section.title[language]}
                  </h2>
                  <div className="prose prose-invert prose-gray max-w-none">
                    {section.content[language].split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            {dictionary.footer.copyright[language]}
          </p>
        </div>
      </footer>
    </div>
  );
}
