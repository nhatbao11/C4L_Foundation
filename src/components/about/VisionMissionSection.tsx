"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function VisionMissionSection() {
  const { lang } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Vision */}
      <div className="bg-[#15803D] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-12 translate-x-12"/>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-8 -translate-x-8"/>
        <div className="relative z-10">
          <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest font-mono">
            {lang === "vi" ? "Tầm Nhìn" : "Our Vision"}
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mt-4 leading-tight uppercase tracking-wide">
            {lang === "vi" ? "Mô hình phát triển bền vững" : "Sustainable Growth Model"}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mt-5">
            {lang === "vi"
              ? "Xây dựng hệ sinh thái tuần hoàn, nơi cựu sinh viên thành đạt quay lại hỗ trợ tài chính và dẫn dắt thế hệ kế tiếp, duy trì dòng chảy tri thức và trách nhiệm xã hội bền vững."
              : "Build a circular ecosystem where successful alumni return to financially support and mentor the next generation, sustaining a flow of knowledge and social responsibility."}
          </p>
        </div>
      </div>

      {/* Mission + Quote */}
      <div className="flex flex-col gap-5">
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-10 flex-1">
          <span className="text-[10px] font-bold text-[#15803D] uppercase tracking-widest font-mono">
            {lang === "vi" ? "Sứ Mệnh" : "Our Mission"}
          </span>
          <h2 className="font-display font-extrabold text-xl md:text-2xl text-[#15803D] mt-3 leading-snug uppercase tracking-wide">
            {lang === "vi" ? "Trao Cơ Hội\nDựng Tương Lai" : "Grant Opportunities\nBuild Futures"}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            {lang === "vi"
              ? "Tìm kiếm, đồng hành và nâng đỡ các sinh viên vượt khó có khát vọng. Trang bị năng lực nghề nghiệp thực chiến, kỹ năng tự học và thái độ sống tử tế."
              : "Identify, accompany, and elevate underprivileged students with strong drive. Equip them with career skills, self-learning habits, and ethical values."}
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-6 text-white">
          <svg className="w-5 h-5 text-[#4ade80] mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-slate-300 text-xs leading-relaxed italic">
            {lang === "vi"
              ? "Nhận bảo trợ từ C4L đã thay đổi con đường của tôi — không chỉ về tài chính mà còn về tư duy, kỷ luật và tinh thần trách nhiệm với cộng đồng."
              : "Being sponsored by C4L changed my path — not just financially, but in mindset, discipline, and responsibility toward the community."}
          </p>
          <div className="mt-3 text-[#4ade80] text-[10px] font-bold uppercase tracking-widest font-mono">— C4L Alumni, Đợt 12</div>
        </div>
      </div>
    </section>
  );
}
