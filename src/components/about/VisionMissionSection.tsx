"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function VisionMissionSection() {
  const { lang } = useLanguage();

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Vision */}
      <div className="lg:col-span-7 bg-[#15803D] rounded-[2rem] p-8 md:p-14 text-white relative overflow-hidden flex flex-col justify-center min-h-[350px]">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-12 translate-x-12"/>
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-8 -translate-x-8"/>
        <div className="relative z-10">
          <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest font-mono">
            {lang === "vi" ? "Tầm Nhìn" : "Our Vision"}
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white mt-4 leading-tight uppercase tracking-wide">
            {lang === "vi" ? "Hệ sinh thái tuần hoàn & tự quản" : "Circular & Self-Managed Ecosystem"}
          </h2>
          <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mt-6">
            {lang === "vi"
              ? "Trở thành hệ sinh thái phát triển nguồn nhân lực tuần hoàn hàng đầu, nơi các thế hệ sinh viên trưởng thành quay lại đồng hành, dẫn dắt và đầu tư tài chính cho thế hệ kế tiếp, duy trì dòng chảy tri thức và trách nhiệm xã hội bền vững."
              : "To become a leading circular human capital development ecosystem where grown alumni return to accompany, mentor, and invest in the next generation, maintaining a continuous flow of knowledge and social responsibility."}
          </p>
        </div>
      </div>

      {/* Mission + Quote */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-10 flex-1">
          <span className="text-[10px] font-bold text-[#15803D] uppercase tracking-widest font-mono">
            {lang === "vi" ? "Sứ Mệnh" : "Our Mission"}
          </span>
          <h2 className="font-display font-extrabold text-xl md:text-2xl text-[#15803D] mt-3 leading-snug uppercase tracking-wide">
            {lang === "vi" ? "Đầu Tư Năng Lực\nKiến Tạo Tự Lập" : "Investing in Capability\nBuilding Self-Reliance"}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            {lang === "vi"
              ? "Tìm kiếm, đồng hành và đầu tư cơ hội cho sinh viên khó khăn có khát vọng. Chúng tôi rèn luyện bản lĩnh tự lập, trang bị năng lực thực chiến chuyên nghiệp và định hình nền tảng đạo đức tử tế để các em tự đứng vững trên đôi chân của mình."
              : "Identify, accompany, and invest in motivated, underprivileged students. We cultivate self-reliance, equip them with practical professional capabilities, and build a foundation of integrity so they can stand firmly on their own feet."}
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-6 text-white">
          <svg className="w-5 h-5 text-[#4ade80] mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-slate-300 text-xs leading-relaxed italic">
            {lang === "vi"
              ? "Được C4L đồng hành và đầu tư đã giúp tôi lột xác hoàn toàn — không chỉ giải quyết bài toán tài chính, C4L giúp tôi rèn luyện năng lực thực chiến, tư duy tự quản và bản lĩnh sống tử tế sẵn sàng đáp đền cho thế hệ đàn em đi sau."
              : "Being accompanied and invested in by C4L changed my path — beyond financial support, C4L helped me build practical competence, self-management, and a pay-it-forward mindset to support the next generation."}
          </p>
          <div className="mt-3 text-[#4ade80] text-[10px] font-bold uppercase tracking-widest font-mono">— C4L Alumni, Khóa 12</div>
        </div>
      </div>
    </section>
  );
}
