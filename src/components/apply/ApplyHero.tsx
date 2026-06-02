"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function ApplyHero() {
  const { lang } = useLanguage();

  return (
    <section className="bg-white border-b border-slate-200/80 pt-[120px] pb-12 md:pt-[144px] md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-tight">
          {lang === "vi" ? "Danh sách sinh viên" : "Student Directory"}
        </h1>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-2 max-w-3xl font-medium">
          {lang === "vi"
            ? "Mỗi sinh viên là một câu chuyện, một ước mơ cần được chắp cánh. Hãy cùng chúng tôi viết tiếp những trang sách cuộc đời cho các em."
            : "Each student represents a story, a dream to be empowered. Join us in co-writing the next chapters of their lives."}
        </p>
      </div>
    </section>
  );
}
