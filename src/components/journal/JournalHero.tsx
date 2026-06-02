"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

interface JournalHeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function JournalHero({ searchTerm, setSearchTerm }: JournalHeroProps) {
  const { lang } = useLanguage();

  return (
    <section className="bg-white border-b border-slate-200/50 pt-[136px] pb-16 md:pt-[176px] md:pb-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold text-[#15803D] bg-emerald-50 px-4 py-2 rounded-lg uppercase tracking-wider font-mono">
          {lang === "vi" ? "CẬP NHẬT MỚI NHẤT" : "LATEST UPDATES"}
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-black text-slate-900 mt-6 tracking-tight leading-tight uppercase">
          {lang === "vi" ? "Bản tin & Hoạt động" : "Journal & Activities"}
        </h1>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-4 max-w-2xl mx-auto font-medium">
          {lang === "vi"
            ? "Những câu chuyện về hành trình gieo mầm yêu thương và các hoạt động cộng đồng từ Quỹ Cỏ Bốn Lá - C4L Foundation."
            : "Stories highlighting the journey planting seeds of love and direct community events hosted by the C4L Foundation."}
        </p>

        {/* Search bar inside header */}
        <div className="max-w-md mx-auto mt-8 relative">
          <input
            type="text"
            placeholder={lang === "vi" ? "Tìm kiếm bài viết..." : "Search journal posts..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] transition-all font-medium"
          />
          <span className="absolute right-4 top-3 text-slate-400">🔍</span>
        </div>
      </div>
    </section>
  );
}
