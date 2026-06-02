"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactHero() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#15803D] text-white pt-[136px] pb-16 md:pt-[176px] md:pb-24 px-6 text-center relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
          {lang === "vi" ? "Liên hệ với chúng tôi" : "Contact Us"}
        </h1>
        <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-medium">
          {lang === "vi"
            ? "Mọi ý kiến đóng góp và thắc mắc xin vui lòng gửi về cho Ban quản trị."
            : "For any feedback or questions, please send them to the Board of Directors."}
        </p>
      </div>
    </section>
  );
}
