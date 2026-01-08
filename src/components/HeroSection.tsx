"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { dictionary } from "@/lib/i18n";
import AnimatedBackground from "./AnimatedBackground";

export default function HeroSection() {
  const { language } = useLanguage();
  const hero = dictionary.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 reveal visible">
              <span className="bg-gradient-to-r from-white via-white to-[var(--accent-secondary)] bg-clip-text text-transparent">
                {hero.headline[language]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed reveal visible stagger-1">
              {hero.subheadline[language]}
            </p>
            <div className="flex flex-wrap gap-4 reveal visible stagger-2">
              <a
                href={language === 'en' ? '/en.pdf' : '/tr.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                {hero.ctaPrimary[language]}
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Abstract healthcare + blockchain illustration */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full animate-float"
                fill="none"
              >
                {/* Central hexagon representing blockchain */}
                <polygon
                  points="200,50 300,100 300,200 200,250 100,200 100,100"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  fill="rgba(0,212,170,0.05)"
                  className="animate-pulse-glow"
                />

                {/* Inner hexagon */}
                <polygon
                  points="200,80 270,115 270,185 200,220 130,185 130,115"
                  stroke="rgba(0,212,170,0.5)"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Healthcare cross */}
                <rect
                  x="185"
                  y="110"
                  width="30"
                  height="80"
                  rx="4"
                  fill="var(--accent)"
                  opacity="0.3"
                />
                <rect
                  x="160"
                  y="135"
                  width="80"
                  height="30"
                  rx="4"
                  fill="var(--accent)"
                  opacity="0.3"
                />

                {/* Connection nodes */}
                <circle cx="200" cy="50" r="6" fill="var(--accent)" />
                <circle cx="300" cy="100" r="6" fill="var(--accent)" />
                <circle cx="300" cy="200" r="6" fill="var(--accent)" />
                <circle cx="200" cy="250" r="6" fill="var(--accent)" />
                <circle cx="100" cy="200" r="6" fill="var(--accent)" />
                <circle cx="100" cy="100" r="6" fill="var(--accent)" />

                {/* Outer data flow arcs */}
                <path
                  d="M50,150 Q80,50 200,30"
                  stroke="rgba(0,212,170,0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4,4"
                />
                <path
                  d="M350,150 Q320,50 200,30"
                  stroke="rgba(0,212,170,0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4,4"
                />
                <path
                  d="M50,250 Q80,350 200,370"
                  stroke="rgba(0,212,170,0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4,4"
                />
                <path
                  d="M350,250 Q320,350 200,370"
                  stroke="rgba(0,212,170,0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4,4"
                />

                {/* Heartbeat waveform */}
                <path
                  d="M80,320 L120,320 L140,280 L160,360 L180,300 L200,320 L320,320"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw-line"
                />

                {/* Small orbiting elements */}
                <circle
                  cx="50"
                  cy="150"
                  r="4"
                  fill="var(--accent)"
                  opacity="0.6"
                />
                <circle
                  cx="350"
                  cy="150"
                  r="4"
                  fill="var(--accent)"
                  opacity="0.6"
                />
                <circle
                  cx="50"
                  cy="250"
                  r="4"
                  fill="var(--accent)"
                  opacity="0.6"
                />
                <circle
                  cx="350"
                  cy="250"
                  r="4"
                  fill="var(--accent)"
                  opacity="0.6"
                />
              </svg>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
