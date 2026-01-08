"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";

const navItems = [
  { key: "overview", href: "#overview" },
  { key: "useCases", href: "#use-cases" },
  { key: "architecture", href: "#architecture" },
  { key: "roadmap", href: "#roadmap" },
  { key: "team", href: "#team" },
];

// Animated hamburger icon component
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out origin-center ${
          isOpen ? "rotate-45 translate-y-[9px]" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out ${
          isOpen ? "opacity-0 scale-x-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out origin-center ${
          isOpen ? "-rotate-45 -translate-y-[9px]" : ""
        }`}
      />
    </div>
  );
}

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const nav = dictionary.nav;

  // Whitepaper PDF link - opens in new tab based on language
  const whitepaperUrl = language === 'en' ? '/en.pdf' : '/tr.pdf';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "glass-card !rounded-none border-t-0 border-x-0"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl lg:text-2xl font-bold tracking-tight text-white hover:text-[#00d4aa] transition-colors"
          >
            Dngjeiowy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.replace("#", "") ? "active" : ""
                }`}
              >
                {nav[item.key as keyof typeof nav][language]}
              </a>
            ))}
            <a
              href={whitepaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {nav.whitepaper[language]}
            </a>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => language !== "en" && toggleLanguage()}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  language === "en"
                    ? "bg-[#00d4aa] text-[#030508] shadow-lg shadow-[#00d4aa]/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => language !== "tr" && toggleLanguage()}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  language === "tr"
                    ? "bg-[#00d4aa] text-[#030508] shadow-lg shadow-[#00d4aa]/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                TR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:ring-offset-2 focus:ring-offset-[#0a0f1c] rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`nav-link py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "active bg-[#00d4aa]/10"
                      : "hover:bg-white/5"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                    transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {nav[item.key as keyof typeof nav][language]}
                </a>
              ))}
              <a
                href={whitepaperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                style={{
                  transitionDelay: mobileMenuOpen ? `${navItems.length * 50}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.whitepaper[language]}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
