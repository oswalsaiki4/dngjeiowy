"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";

export default function Footer() {
  const { language } = useLanguage();
  const footer = dictionary.footer;

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="text-xl font-bold text-white">
              Dngjeiowy
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {footer.disclaimer[language]}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {footer.copyright[language]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
