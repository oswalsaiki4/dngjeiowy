"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import UseCasesSection from "@/components/UseCasesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      }
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      for (const el of elements) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <UseCasesSection />
        <ArchitectureSection />
        <RoadmapSection />
        <TeamSection />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
