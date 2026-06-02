"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function PhilosophySection() {
  const { lang } = useLanguage();

  const corePillars = [
    {
      title: lang === "vi" ? "Professional Competence (Năng lực nghề nghiệp)" : "Professional Competence",
      desc: lang === "vi"
        ? "Trang bị kỹ năng thực chiến, tư duy giải quyết vấn đề, ngoại ngữ, Sales, Marketing, AI và E-commerce."
        : "Hands-on skills, problem-solving mindset, English proficiency, AI tools, Sales, Marketing, and E-commerce."
    },
    {
      title: lang === "vi" ? "Self-Reliance (Bản lĩnh & Tự lập)" : "Self-Reliance",
      desc: lang === "vi"
        ? "Quản trị bản thân, tài chính cá nhân, rèn luyện tính kỷ luật và nghị lực."
        : "Self-management, personal finance, strict discipline, and resilience."
    },
    {
      title: lang === "vi" ? "Ethical Foundation (Tử tế & Chính trực)" : "Ethical Foundation",
      desc: lang === "vi"
        ? "Trung thực, giữ cam kết và đề cao đạo đức nghề nghiệp chính trực."
        : "Honesty, keeping commitments, and prioritizing professional ethics."
    },
    {
      title: lang === "vi" ? "Pay-It-Forward Mindset (Tư duy Đáp đền)" : "Pay-It-Forward Mindset",
      desc: lang === "vi"
        ? "Trách nhiệm đóng góp tích cực lại cho xã hội và nâng đỡ thế hệ đàn em."
        : "Responsibility to contribute back to society and uplift future generations."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      {/* Left Column: Overlapping Images Layout (Rounded corners, playful offsets) */}
      <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] md:min-h-[500px] w-full">
        {/* Main Background decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border-2 border-dashed border-slate-200 -z-10" />

        {/* Larger Image Card */}
        <div className="absolute top-0 left-6 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-50 rotate-[-2deg] transition-all hover:rotate-0 duration-500 z-10">
          <Image
            src="/images/carousel-2.png"
            alt="C4L Dorm Life"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 30vw"
          />
          {/* Flat Badge 'C4L Home' */}
          <div className="absolute bottom-4 left-4 bg-emerald-600 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider shadow-md">
            C4L Home
          </div>
        </div>

        {/* Smaller Overlapping Image Card */}
        <div className="absolute bottom-0 right-6 w-[55%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 rotate-[3deg] transition-all hover:rotate-0 duration-500 z-20">
          <Image
            src="/images/carousel-3.png"
            alt="Tech Lab Practical Working"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 40vw, 25vw"
          />
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-slate-800 font-mono text-[9px] font-extrabold px-2.5 py-1 rounded-lg shadow border border-slate-100">
            Tech Lab
          </div>
        </div>
      </div>

      {/* Right Column: Narrative and Checkboxes */}
      <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
        <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
          {lang === "vi" ? "Chân Dung Sinh Viên C4L" : "C4L Output Portrait"}
        </span>

        <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none uppercase">
          {lang === "vi" ? "Self-Made Professional" : "Self-Made Professional"}
        </h2>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
          {lang === "vi"
            ? "Kế thừa và tiếp nối một phần từ Quỹ Tony Buổi Sáng, C4L đồng hành và đầu tư cơ hội, mentor cùng môi trường thực chiến để hỗ trợ sinh viên hoàn cảnh khó khăn rèn luyện bản thân, trưởng thành và phát triển năng lực qua 4 trụ cột:"
            : "Inheriting and continuing a part of the Tony Buoi Sang Foundation's legacy, C4L accompanies and invests capital, opportunity, and mentorship to help underprivileged students train themselves, grow, and develop their capacities through 4 core pillars:"}
        </p>

        {/* Core Pillars List */}
        <div className="w-full flex flex-col gap-4 mt-2">
          {corePillars.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              {/* Circle Icon Box */}
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#15803D] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-slate-900 text-sm md:text-base">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 w-full">
          <Link
            href="/about"
            className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            {lang === "vi" ? "Chi tiết chân dung đầu ra" : "Learn Output Standards"}
          </Link>
        </div>
      </div>
    </section>
  );
}
