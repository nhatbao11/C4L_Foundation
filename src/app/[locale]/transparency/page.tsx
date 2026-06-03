import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransparencyHero from "@/components/transparency/TransparencyHero";
import ReportsList from "@/components/transparency/ReportsList";

export default function Transparency() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <TransparencyHero />

      <ReportsList />

      <Footer />
    </div>
  );
}
