import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import Hybrid4LSection from "@/components/about/Hybrid4LSection";
import HeritageSection from "@/components/about/HeritageSection";
import { notFound } from "next/navigation";

export default function About() {
  // ──── ĐỂ TEST ERROR PAGE (XÓA CHÚ THÍCH DÒNG DƯỚI) ────
  //throw new Error("C4L Simulated Test Error");

  // ──── ĐỂ TEST NOT FOUND 404 (XÓA CHÚ THÍCH DÒNG DƯỚI) ────
  // notFound();
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <AboutHero />

      <HeritageSection />

      <VisionMissionSection />

      <CoreValuesSection />

      <Hybrid4LSection />

      <Footer />
    </div>
  );
}
