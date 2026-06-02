import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import PillarsSection from "@/components/home/PillarsSection";
import NewsSection from "@/components/home/NewsSection";
import FaqSection from "@/components/home/FaqSection";
import PartnersSection from "@/components/home/PartnersSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <HeroSection />
      <PillarsSection />
      <PhilosophySection />

      <NewsSection />

      <FaqSection />

      <PartnersSection />

      <Footer />
    </div>
  );
}
