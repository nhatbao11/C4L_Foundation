"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

export default function Hybrid4LSection() {
  const { lang } = useLanguage();

  const hybridModel = lang === "vi" ? [
    {
      badge: "RUN",
      num: "01",
      title: "Tài Chính (Run)",
      desc: "Học bổng và hỗ trợ chi phí sinh hoạt kèm theo KPI kết quả định kỳ, rèn thái độ cam kết và tự chịu trách nhiệm.",
      features: ["Học bổng kỳ học", "Chi phí sinh hoạt", "Đánh giá KPI định kỳ"]
    },
    {
      badge: "DEVELOPING",
      num: "02",
      title: "An Cư (Dormitory)",
      desc: "Hệ thống ký túc xá kỷ luật tự quản giúp rèn nếp sống tự lập, văn minh và rèn luyện kỹ năng sinh hoạt tập thể.",
      features: ["Nếp sống kỷ luật tự quản", "Ký túc xá an toàn", "Gắn kết tập thể"]
    },
    {
      badge: "DEVELOPING",
      num: "03",
      title: "Mentoring (Cố Vấn)",
      desc: "Chương trình cố vấn 1-1 đồng hành bởi quản lý cấp cao từ các tập đoàn đa quốc gia MNCs & doanh nghiệp SMEs.",
      features: ["Cố vấn nghề nghiệp 1-1", "Kinh nghiệm thực chiến", "Mạng lưới kết nối chuyên nghiệp"]
    },
    {
      badge: "DEVELOPING",
      num: "04",
      title: "Thực Chiến (Practical)",
      desc: "Làm thật, thực hành qua các dự án tại E-commerce Lab, rèn luyện kỹ năng ứng dụng AI và Sales thực tế.",
      features: ["Dự án E-commerce Lab", "Ứng dụng AI thực hành", "Kỹ năng Sales & Marketing"]
    }
  ] : [
    {
      badge: "RUN",
      num: "01",
      title: "Financial (Run)",
      desc: "Scholarships and living cost support linked with periodic performance KPIs, fostering self-responsibility.",
      features: ["Semester scholarships", "Living cost allowances", "Periodic KPI evaluations"]
    },
    {
      badge: "DEVELOPING",
      num: "02",
      title: "Housing (Dormitory)",
      desc: "Self-managed, highly disciplined dormitories cultivating organized living habits and team collaboration.",
      features: ["Disciplined self-governance", "Safe living space", "Community engagement"]
    },
    {
      badge: "DEVELOPING",
      num: "03",
      title: "Mentoring (Mentorship)",
      desc: "1-on-1 mentorship programs guided by industry experts and senior managers from leading MNCs and dynamic SMEs.",
      features: ["1-on-1 career pathing", "Practical expert advice", "Professional networking"]
    },
    {
      badge: "DEVELOPING",
      num: "04",
      title: "Practical (Doing)",
      desc: "Hands-on experience through actual projects in E-commerce Labs, AI tools, and sales operations.",
      features: ["E-commerce Lab projects", "AI tools integration", "Real sales operations"]
    }
  ];

  return (
    <section className="bg-slate-50/50 py-24 md:py-32 border-t border-slate-100 relative overflow-hidden">
      
      {/* Background glow decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <Badge variant="light">
            {lang === "vi" ? "Mô hình vận hành" : "Operational Model"}
          </Badge>
          <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-[#0e4b29] mt-4 uppercase tracking-widest">
            {lang === "vi" ? "Mô Hình Hoạt Động Hybrid 4L" : "Hybrid 4L Ecosystem"}
          </h2>
          <div className="w-12 h-1 bg-[#15803D] mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            {lang === "vi"
              ? "Cỏ 4 Lá không ban phát học bổng một chiều. Chúng tôi kết hợp đồng bộ 4 trụ cột để phát triển tối đa năng lực tự lập của sinh viên."
              : "Co 4 La does not award simple financial aid. We offer a comprehensive human capital development suite."}
          </p>
        </div>

        {/* Process Flow Layout */}
        <div className="relative">
          
          {/* Connecting gradient pipeline (Desktop only) */}
          <div className="hidden lg:block absolute left-12 right-12 top-7 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200 z-0 rounded-full" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {hybridModel.map((item, i) => (
              <div key={i} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-0 w-full group relative">
                
                {/* Connecting vertical line (Mobile/Tablet only) */}
                {i < 3 && (
                  <div className="lg:hidden absolute left-7 top-14 bottom-[-48px] w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-200 z-0" />
                )}

                {/* Flow Node Pin */}
                <div className="relative flex items-center justify-center flex-shrink-0 lg:mb-8 z-10">
                  {/* Outer glowing ring */}
                  <div className="absolute w-20 h-20 rounded-full bg-emerald-100/50 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0 pointer-events-none" />
                  
                  {/* Central Node Pin */}
                  <div className={`w-14 h-14 rounded-full flex flex-col items-center justify-center font-mono font-black border-2 shadow-md relative z-10 transition-all duration-300 group-hover:-translate-y-1 ${
                    item.badge === "RUN"
                      ? "bg-emerald-600 border-emerald-500 text-white shadow-emerald-200/50"
                      : "bg-white border-emerald-500 text-[#15803D]"
                  }`}>
                    <span className="text-[10px] opacity-75 leading-none">STEP</span>
                    <span className="text-sm leading-none mt-0.5">{item.num}</span>
                  </div>
                </div>

                {/* Card Container */}
                <div className="w-full bg-white border border-emerald-100 rounded-3xl p-6 lg:p-8 shadow-sm group-hover:shadow-lg group-hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between flex-1 relative">
                  
                  {/* Tiny badge inside card */}
                  <div className="flex justify-start lg:justify-center mb-4">
                    <span className={`text-[8px] font-black tracking-widest px-2 py-0.5 rounded font-mono ${
                      item.badge === "RUN"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : "bg-[#0b381e]/5 text-[#0b381e] border border-[#0b381e]/10"
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-left lg:text-center">
                    <h3 className="font-display font-black text-base text-[#0e4b29] mb-3 group-hover:text-[#15803D] transition-colors uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="border-t border-emerald-50 pt-5 mt-auto text-left">
                    <ul className="space-y-2.5">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold leading-tight">
                          <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
