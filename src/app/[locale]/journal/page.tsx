"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JournalHero from "@/components/journal/JournalHero";
import JournalGrid from "@/components/journal/JournalGrid";

export default function Journal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <JournalHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <JournalGrid searchTerm={searchTerm} selectedCategory={selectedCategory} />

      <Footer />
    </div>
  );
}
