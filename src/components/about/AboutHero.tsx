"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

export default function AboutHero() {
  const { lang } = useLanguage();

  const labels = lang === "vi" ? {
    competence: "Năng lực",
    selfReliance: "Tự lập",
    ethics: "Tử tế",
    payItForward: "Đáp đền",
    title: "4 Trụ cột Cỏ 4 Lá"
  } : {
    competence: "Competence",
    selfReliance: "Self-Reliance",
    ethics: "Ethics",
    payItForward: "Pay-it-forward",
    title: "Co 4 La 4 Pillars"
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-slate-950 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-emerald-950">
      {/* Green background color overlay and dot pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0e4b29] to-[#0b381e]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/10 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission, Vision, and Origin note */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge>
              {lang === "vi" ? "Về Cỏ Bốn Lá" : "About Co 4 La Foundation"}
            </Badge>
            
            <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white mt-6 uppercase tracking-tight leading-[1.1]">
              {lang === "vi" ? (
                <>
                  Hệ sinh thái đầu tư <br />
                  <span className="text-emerald-300">
                    Phát triển tự chủ
                  </span>
                </>
              ) : (
                <>
                  Human Capital <br />
                  <span className="text-emerald-300">
                    Investment Ecosystem
                  </span>
                </>
              )}
            </h1>

            <div className="w-16 h-1 bg-emerald-400 mt-6 rounded-full" />

            <p className="text-emerald-100/90 text-sm md:text-base lg:text-lg mt-6 leading-relaxed max-w-xl font-medium">
              {lang === "vi"
                ? "Cỏ 4 Lá hoạt động như một hệ sinh thái đầu tư phát triển nguồn vốn con người. Chúng tôi đồng hành, đầu tư vốn học tập, cố vấn chuyên nghiệp và môi trường rèn luyện thực chiến để chuyển hóa tiềm năng thành tự chủ."
                : "Co 4 La operates as a human capital development ecosystem. We accompany, invest study capital, provide professional mentors, and establish practical training to transform potential into self-reliance."}
            </p>

            {/* Origin & Succession Note */}
            <div className="mt-8 p-5 bg-white/10 border border-white/10 rounded-2xl max-w-xl text-xs md:text-sm text-emerald-100 leading-relaxed font-normal">
              <strong className="text-white font-bold block mb-1">
                {lang === "vi" ? "Kế thừa & Tiếp nối" : "Inheritance & Succession"}
              </strong>
              {lang === "vi"
                ? "Quỹ Cỏ 4 Lá kế thừa tinh thần tự lập từ các thế hệ sinh viên Quỹ Tony Buổi Sáng, đồng thời mở rộng tuyển chọn những nhân tố trẻ tiềm năng từ các nguồn chất lượng khác trên cả nước."
                : "Co 4 La inherits the spirit of self-reliance from the student cohorts of the Tony Buoi Sang Fund, while expanding selection to high-potential young minds nationwide."}
            </div>
          </div>

          {/* Right Column: Rotational Clover & External Labels */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
            
            {/* Title placed outside the circle on top */}
            <div className="mb-6 font-display font-black text-sm md:text-base text-emerald-300 uppercase tracking-widest text-center">
              {labels.title}
            </div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white/5 border border-white/10 rounded-full shadow-2xl p-6 flex items-center justify-center backdrop-blur-sm">
              
              {/* Inner dashed ring */}
              <div className="absolute inset-10 border border-dashed border-emerald-400/25 rounded-full pointer-events-none" />

              {/* Clover Leaves Vector representation with rotate animation */}
              <svg className="w-full h-full animate-[spin_100s_linear_infinite] z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Precise heart-shape clover leaf path pointing up from center (100, 100) */}
                  <path 
                    id="clover-leaf-shape" 
                    d="M 100 100 C 80 85, 60 55, 82 42 C 94 35, 100 48, 100 55 C 100 48, 106 35, 118 42 C 140 55, 120 85, 100 100 Z" 
                  />
                </defs>

                {/* Render the 4 leaves using rotation definitions around (100, 100) */}
                <use 
                  href="#clover-leaf-shape" 
                  transform="rotate(0 100 100)" 
                  className="fill-emerald-400/20 stroke-emerald-300 hover:fill-emerald-400/35 transition-all duration-300 cursor-pointer" 
                  strokeWidth="1.5" 
                />
                <use 
                  href="#clover-leaf-shape" 
                  transform="rotate(90 100 100)" 
                  className="fill-emerald-400/20 stroke-emerald-300 hover:fill-emerald-400/35 transition-all duration-300 cursor-pointer" 
                  strokeWidth="1.5" 
                />
                <use 
                  href="#clover-leaf-shape" 
                  transform="rotate(180 100 100)" 
                  className="fill-emerald-400/20 stroke-emerald-300 hover:fill-emerald-400/35 transition-all duration-300 cursor-pointer" 
                  strokeWidth="1.5" 
                />
                <use 
                  href="#clover-leaf-shape" 
                  transform="rotate(270 100 100)" 
                  className="fill-emerald-400/20 stroke-emerald-300 hover:fill-emerald-400/35 transition-all duration-300 cursor-pointer" 
                  strokeWidth="1.5" 
                />
              </svg>

              {/* Floating Clover Labels (Outside the circle completely, preventing leaf overlap) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border border-emerald-200/60 px-3 py-1 rounded-xl text-[9px] md:text-[10px] font-extrabold text-[#0e4b29] uppercase tracking-wider shadow-lg z-20">
                {labels.competence}
              </div>
              <div className="absolute -right-8 md:-right-14 top-1/2 -translate-y-1/2 bg-white border border-emerald-200/60 px-3 py-1 rounded-xl text-[9px] md:text-[10px] font-extrabold text-[#0e4b29] uppercase tracking-wider shadow-lg z-20">
                {labels.selfReliance}
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-emerald-200/60 px-3 py-1 rounded-xl text-[9px] md:text-[10px] font-extrabold text-[#0e4b29] uppercase tracking-wider shadow-lg z-20">
                {labels.ethics}
              </div>
              <div className="absolute -left-8 md:-left-14 top-1/2 -translate-y-1/2 bg-white border border-emerald-200/60 px-3 py-1 rounded-xl text-[9px] md:text-[10px] font-extrabold text-[#0e4b29] uppercase tracking-wider shadow-lg z-20">
                {labels.payItForward}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
