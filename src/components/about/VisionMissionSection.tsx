"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

export default function VisionMissionSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-slate-100">
      {/* Decorative premium ambient glow */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-emerald-100/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-50/40 blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20 max-w-xl mx-auto">
          <Badge variant="light">
            {lang === "vi" ? "Định hướng phát triển" : "Strategic Alignment"}
          </Badge>
          <h2 className="font-display font-black text-3xl md:text-5xl text-[#0e4b29] mt-6 uppercase tracking-wider leading-none">
            {lang === "vi" ? "Tầm Nhìn & Sứ Mệnh" : "Vision & Mission"}
          </h2>
          <div className="w-12 h-1.5 bg-emerald-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Vision & Mission Side-by-Side Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Vision (Deep Emerald Theme) */}
          <div className="group relative bg-gradient-to-br from-emerald-800 via-emerald-900 to-green-950 rounded-[2.5rem] p-10 md:p-14 text-white flex flex-col justify-between shadow-xl shadow-emerald-900/10 hover:shadow-emerald-950/20 transition-all duration-500 overflow-hidden hover:-translate-y-1">
            {/* Visual Vector Glows inside the Card */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-emerald-500/10 -translate-y-20 translate-x-20 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-emerald-600/10 translate-y-24 -translate-x-24 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-emerald-300 mb-8 shadow-inner">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>

                <span className="text-xs font-bold text-emerald-300 uppercase tracking-[0.2em] font-mono block">
                  {lang === "vi" ? "Tầm Nhìn Chiến Lược" : "Our Strategic Vision"}
                </span>
                
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white mt-4 leading-tight uppercase tracking-wide">
                  {lang === "vi" ? "Hệ sinh thái tuần hoàn & tự quản" : "Circular & Self-Managed Ecosystem"}
                </h3>
                
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mt-6 font-normal">
                  {lang === "vi"
                    ? "Trở thành hệ sinh thái phát triển nguồn nhân lực tuần hoàn hàng đầu, nơi các thế hệ sinh viên trưởng thành quay lại đồng hành, dẫn dắt và đầu tư tài chính cho thế hệ kế tiếp, duy trì dòng chảy tri thức và trách nhiệm xã hội bền vững."
                    : "To become a leading circular human capital development ecosystem where grown alumni return to accompany, mentor, and invest in the next generation, maintaining a continuous flow of knowledge and social responsibility."}
                </p>
              </div>

              {/* Bottom footer note */}
              <div className="border-t border-white/15 pt-8 mt-12 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold text-emerald-300 uppercase tracking-widest font-mono">
                  {lang === "vi" ? "Từ Hy Vọng Đến Tự Chủ" : "From Potential to Professional"}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Mission (Premium Light Glassmorphic Theme with Left Accent Border) */}
          <div className="group relative bg-[#fcfdfd] border-2 border-emerald-800/10 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between shadow-xl shadow-slate-100 hover:shadow-emerald-800/5 hover:border-emerald-800/25 transition-all duration-500 overflow-hidden hover:-translate-y-1">
            {/* Visual Vector Glows inside the Card */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-emerald-50/40 -translate-y-20 translate-x-20 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-slate-50 translate-y-24 -translate-x-24 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100/50 text-[#15803D] mb-8 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <span className="text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] font-mono block">
                  {lang === "vi" ? "Sứ Mệnh Hành Động" : "Our Core Mission"}
                </span>
                
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0e4b29] mt-4 leading-tight uppercase tracking-wide">
                  {lang === "vi" ? "Đầu tư năng lực - Kiến tạo tự lập" : "Investing in Capability - Building Self-Reliance"}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-6 font-normal">
                  {lang === "vi"
                    ? "Tìm kiếm, đồng hành và đầu tư cơ hội cho sinh viên khó khăn có khát vọng. Chúng tôi rèn luyện bản lĩnh tự lập, trang bị năng lực thực chiến chuyên nghiệp và định hình nền tảng đạo đức tử tế để các em tự đứng vững trên đôi chân của mình."
                    : "Identify, accompany, and invest in motivated, underprivileged students. We cultivate self-reliance, equip them with practical professional capabilities, and build a foundation of integrity so they can stand firmly on their own feet."}
                </p>
              </div>

              {/* Bottom footer note */}
              <div className="border-t border-slate-100 pt-8 mt-12 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-widest font-mono">
                  {lang === "vi" ? "Đồng Hành Đầu Tư Con Người" : "Human Capital Investment"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
