"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

interface JournalHeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export default function JournalHero({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: JournalHeroProps) {
  const { lang } = useLanguage();

  const categories = [
    { id: "all", labelVi: "Tất cả", labelEn: "All" },
    { id: "announcement", labelVi: "Thông báo", labelEn: "Announcements" },
    { id: "recruitment", labelVi: "Tuyển dụng", labelEn: "Recruitment" },
    { id: "list", labelVi: "Danh sách", labelEn: "Student Lists" },
    { id: "event", labelVi: "Sự kiện", labelEn: "Events" },
    { id: "activity", labelVi: "Hoạt động", labelEn: "Activities" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-16 md:pt-44 md:pb-24 text-center">
      {/* Background color tint overlay to match brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e4b29]/95 via-[#0e4b29]/80 to-[#0b381e]/95 z-0" />

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />

      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10 px-6">
        {/* Animated Live Status Badge */}
        <Badge>
          {lang === "vi" ? "Cập nhật mới nhất" : "Latest Updates"}
        </Badge>

        {/* Hero Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mt-6 uppercase">
          {lang === "vi" ? (
            <>
              Bản tin & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Hoạt động</span>
            </>
          ) : (
            <>
              Journal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Activities</span>
            </>
          )}
        </h1>

        {/* Subtitle following C4L communication guidelines */}
        <p className="text-white/80 text-xs md:text-sm leading-relaxed mt-5 max-w-2xl mx-auto font-normal">
          {lang === "vi"
            ? "Đồng hành và chia sẻ hành trình vượt khó tự lập, rèn luyện bản lĩnh và các sự kiện thực chiến ý nghĩa của thế hệ trẻ Cỏ 4 Lá."
            : "Accompanying and sharing the self-reliant journey, professional capacity building, and practical events of Co 4 La students."}
        </p>

        {/* Search Input Box */}
        <div className="max-w-lg mx-auto mt-10 relative">
          <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={lang === "vi" ? "Tìm kiếm bài viết..." : "Search journal posts..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-12 py-3.5 rounded-2xl border border-white/10 bg-white/5 text-[13px] text-white placeholder-white/40 shadow-sm focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category Pills Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-3xl mx-auto px-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            const label = lang === "vi" ? category.labelVi : category.labelEn;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none border
                  ${
                    isSelected
                      ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-700/10 scale-102"
                      : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
