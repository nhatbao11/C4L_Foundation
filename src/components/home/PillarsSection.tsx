"use client";

import React from "react";
import PillarCard from "./PillarCard";
import { useLanguage } from "@/components/LanguageContext";

export default function PillarsSection() {
  const { lang } = useLanguage();

  const pillars = [
    {
      index: "01",
      status: "run" as const,
      statusText: lang === "vi" ? "Đang vận hành" : "Active (Run)",
      title: lang === "vi" ? "Tài chính (Run)" : "Finance (Run)",
      desc: lang === "vi" 
        ? "Học bổng và chi phí học tập có kèm KPI rèn luyện nhằm duy trì tính cam kết."
        : "Tuition coverage and living grants tied to training performance KPIs.",
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      index: "02",
      status: "developing" as const,
      statusText: lang === "vi" ? "Đang phát triển" : "Developing",
      title: lang === "vi" ? "An cư (Developing)" : "Housing (Developing)",
      desc: lang === "vi"
        ? "Ký túc xá kỷ luật rèn nếp sống tự chủ, ngăn nắp và kỹ năng tự quản trị bản thân."
        : "Disciplined dormitory environment building tidy habit and autonomy.",
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      index: "03",
      status: "developing" as const,
      statusText: lang === "vi" ? "Đang phát triển" : "Developing",
      title: lang === "vi" ? "Mentoring (Developing)" : "Mentoring (Developing)",
      desc: lang === "vi"
        ? "Cố vấn bởi các chuyên gia, nhà quản lý giàu kinh nghiệm từ các MNCs & SMEs."
        : "Mentoring by industry experts and senior managers from MNCs & SMEs.",
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      index: "04",
      status: "developing" as const,
      statusText: lang === "vi" ? "Đang phát triển" : "Developing",
      title: lang === "vi" ? "Thực chiến (Developing)" : "Practical Lab (Developing)",
      desc: lang === "vi"
        ? "Làm thật qua các dự án thực tế tại doanh nghiệp (E-commerce Lab, AI, Sales...)"
        : "Hands-on execution of real projects (E-commerce Lab, AI, Sales...)",
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#0c3a22] via-[#0f522e] to-[#15803D] py-24 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest font-mono">
            {lang === "vi" ? "Hệ sinh thái đào tạo" : "Training Ecosystem"}
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight uppercase text-white mt-3 leading-none">
            {lang === "vi" ? "Mô hình hoạt động Hybrid 4L" : "Hybrid 4L Operational Model"}
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed mt-4 font-normal">
            {lang === "vi"
              ? "Cung cấp nền tảng toàn diện từ tài chính đến rèn luyện kỹ năng thực chiến giúp sinh viên vững vàng bước vào môi trường doanh nghiệp."
              : "Providing a holistic foundation from financial support to hands-on skill training, preparing students for professional environments."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              index={pillar.index}
              icon={pillar.icon}
              status={pillar.status}
              statusText={pillar.statusText}
              title={pillar.title}
              desc={pillar.desc}
              actionText={lang === "vi" ? "Chi tiết" : "Details"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
