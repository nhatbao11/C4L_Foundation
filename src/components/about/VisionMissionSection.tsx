"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

export default function VisionMissionSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="light">
            {lang === "vi" ? "Định hướng phát triển" : "Strategic Alignment"}
          </Badge>
          <h2 className="font-display font-black text-2xl md:text-4xl text-[#0e4b29] mt-4 uppercase tracking-widest leading-tight">
            {lang === "vi" ? "Tầm Nhìn & Sứ Mệnh" : "Vision & Mission"}
          </h2>
          <div className="w-12 h-1 bg-[#15803D] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Vision (Emerald Green Card) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-700 to-green-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-20 translate-x-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-16 -translate-x-16 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest font-mono">
                {lang === "vi" ? "Tầm Nhìn" : "Our Vision"}
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-white mt-4 leading-tight uppercase tracking-wide">
                {lang === "vi" ? "Hệ sinh thái tuần hoàn & tự quản" : "Circular & Self-Managed Ecosystem"}
              </h3>
              <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed mt-6 font-medium">
                {lang === "vi"
                  ? "Trở thành hệ sinh thái phát triển nguồn nhân lực tuần hoàn hàng đầu, nơi các thế hệ sinh viên trưởng thành quay lại đồng hành, dẫn dắt và đầu tư tài chính cho thế hệ kế tiếp, duy trì dòng chảy tri thức và trách nhiệm xã hội bền vững."
                  : "To become a leading circular human capital development ecosystem where grown alumni return to accompany, mentor, and invest in the next generation, maintaining a continuous flow of knowledge and social responsibility."}
              </p>
            </div>

            <div className="relative z-10 border-t border-white/10 pt-6 mt-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold text-emerald-200 uppercase tracking-widest font-mono">
                {lang === "vi" ? "Từ Hy Vọng Đến Tự Chủ" : "From Potential to Professional"}
              </span>
            </div>
          </div>

          {/* Right: Mission and Testimonial (White & Light Green border cards) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Mission Card */}
            <div className="bg-white border border-emerald-100 rounded-[2rem] p-8 md:p-10 shadow-sm flex-1">
              <span className="text-[10px] font-bold text-[#15803D] uppercase tracking-widest font-mono">
                {lang === "vi" ? "Sứ Mệnh" : "Our Mission"}
              </span>
              <h3 className="font-display font-black text-xl md:text-2xl text-[#0e4b29] mt-3 leading-snug uppercase tracking-wider">
                {lang === "vi" ? "Đầu Tư Năng Lực - Kiến Tạo Tự Lập" : "Investing in Capability - Building Self-Reliance"}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4 font-normal">
                {lang === "vi"
                  ? "Tìm kiếm, đồng hành và đầu tư cơ hội cho sinh viên khó khăn có khát vọng. Chúng tôi rèn luyện bản lĩnh tự lập, trang bị năng lực thực chiến chuyên nghiệp và định hình nền tảng đạo đức tử tế để các em tự đứng vững trên đôi chân của mình."
                  : "Identify, accompany, and invest in motivated, underprivileged students. We cultivate self-reliance, equip them with practical professional capabilities, and build a foundation of integrity so they can stand firmly on their own feet."}
              </p>
            </div>

            {/* Testimonial Quote in Light Green-White Theme */}
            <div className="bg-emerald-50/40 border border-emerald-100 rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <svg className="w-8 h-8 text-emerald-600/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <blockquote className="text-slate-700 text-xs md:text-sm leading-relaxed italic font-medium">
                {lang === "vi"
                  ? "“Được C4L đồng hành và đầu tư đã giúp tôi lột xác hoàn toàn — không chỉ giải quyết bài toán tài chính, C4L giúp tôi rèn luyện năng lực thực chiến, tư duy tự quản và bản lĩnh sống tử tế sẵn sàng đáp đền cho thế hệ đàn em đi sau.”"
                  : "“Being accompanied and invested in by C4L changed my path — beyond financial support, C4L helped me build practical competence, self-management, and a pay-it-forward mindset to support the next generation.”"}
              </blockquote>
              
              <div className="mt-4 text-[#15803D] text-[10px] font-black uppercase tracking-widest font-mono">
                — C4L Alumni, Khóa 12
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
