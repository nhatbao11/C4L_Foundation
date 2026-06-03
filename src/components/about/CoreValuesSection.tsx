"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function CoreValuesSection() {
  const { lang } = useLanguage();

  const pillars = lang === "vi" ? [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 11h6" />
        </svg>
      ),
      title: "Professional Competence",
      subTitle: "Năng lực nghề nghiệp",
      desc: "Trang bị năng lực nghề nghiệp thực chiến gồm AI, E-commerce, Sales, Marketing, ngoại ngữ và tư duy giải quyết vấn đề thực tế."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Self-Reliance",
      subTitle: "Bản lĩnh & Tự lập",
      desc: "Huấn luyện kỹ năng quản trị bản thân, tài chính cá nhân, rèn luyện nếp sống tự quản, tính kỷ luật cao và nghị lực vượt nghịch cảnh."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ethical Foundation",
      subTitle: "Tử tế & Chính trực",
      desc: "Xây dựng hệ giá trị trung thực, giữ vững cam kết cá nhân và đạo đức nghề nghiệp, tạo lập uy tín lâu dài cho bản thân và xã hội."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Pay-It-Forward Mindset",
      subTitle: "Tư duy Đáp đền",
      desc: "Lan tỏa tinh thần trách nhiệm xã hội, sẵn sàng chia sẻ nguồn lực, đồng hành và nâng đỡ các thế hệ đàn em đi sau trưởng thành."
    }
  ] : [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 11h6" />
        </svg>
      ),
      title: "Professional Competence",
      subTitle: "Career Competency",
      desc: "Equipped with practical capabilities: AI, E-commerce, Sales, Marketing, languages, and hands-on problem-solving skills."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Self-Reliance",
      subTitle: "Self-Governance",
      desc: "Trained in self-management, personal finance, self-managed dormitory living, discipline, and willpower over adversity."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ethical Foundation",
      subTitle: "Integrity & Kindness",
      desc: "Building a core framework of honesty, personal commitment, and professional ethics to secure long-term trust in society."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Pay-It-Forward Mindset",
      subTitle: "Paying It Forward",
      desc: "Fostering social responsibility to return, contribute, accompany, and mentor younger student generations to grow."
    }
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
            {lang === "vi" ? "Chân dung đầu ra" : "Output Profile"}
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-slate-900 mt-3 uppercase tracking-widest">
            {lang === "vi" ? "Self-Made Professional (4 Trụ Cột)" : "Self-Made Professional (4 Pillars)"}
          </h2>
          <div className="w-24 h-1 bg-[#15803D] mx-auto mt-4 rounded-full"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((v, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#15803D] mb-6">
                {v.icon}
              </div>
              <h3 className="font-display font-extrabold text-sm lg:text-base uppercase tracking-wider text-[#15803D]">{v.title}</h3>
              <span className="text-[11px] font-bold text-slate-500 uppercase mt-1 tracking-wide">{v.subTitle}</span>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-5 font-normal">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
