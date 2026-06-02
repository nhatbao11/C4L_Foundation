"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function TransparencyHero() {
  const { lang } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-[#0E4B29] to-[#15803D] text-white pt-[136px] pb-16 md:pt-[176px] md:pb-24 px-6 shadow-md">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-2xl md:text-4xl font-black tracking-tight leading-tight uppercase text-white">
          {lang === "vi" ? "Minh bạch tài chính" : "Financial Transparency"}
        </h1>
        <p className="text-emerald-100/90 text-xs md:text-sm leading-relaxed mt-3 max-w-3xl font-medium">
          {lang === "vi"
            ? "Chúng tôi cam kết công khai chi tiết mọi khoản đóng góp và chi tiêu. Niềm tin của cộng đồng chính là tài sản quý giá nhất của Quỹ Cỏ Bốn Lá - C4L Foundation."
            : "We pledge to fully and publicly disclose every donation and expenditure. Community trust is the single most valuable asset of the C4L Foundation."}
        </p>
      </div>
    </section>
  );
}
