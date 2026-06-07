"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

interface FaqItem {
  q: string;
  a: string;
  icon: React.ReactNode;
}

export default function FaqSection() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  const faqs: FaqItem[] = lang === "vi" ? [
    {
      q: "Địa chỉ văn phòng của Quỹ Cỏ Bốn Lá ở đâu?",
      a: "Văn phòng Quỹ Cỏ Bốn Lá được đặt tại TP. Hồ Chí Minh. Địa chỉ chi tiết và thông tin liên hệ chính thức có ở chân trang của trang web, hoặc bạn có thể liên hệ trực tiếp qua email contact@c4l.org.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      q: "Số tài khoản của Quỹ Cỏ Bốn Lá?",
      a: "Mọi thông tin về tài khoản ngân hàng tiếp nhận quyên góp của Quỹ Cỏ Bốn Lá được công khai đầy đủ và minh bạch tại trang 'Minh Bạch Tài Chính'. Quỹ cam kết 100% số tiền đóng góp được sử dụng đúng mục đích đầu tư phát triển năng lực học viên.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      q: "Quy trình xét duyệt bảo trợ ra sao?",
      a: "Quy trình bao gồm 3 vòng chính thức: (1) Đăng ký nộp hồ sơ năng lực trực tuyến, (2) Đánh giá hoàn cảnh khó khăn và ý chí tự lập thực tế, (3) Phỏng vấn trực tiếp bởi hội đồng cố vấn chuyên môn để đánh giá mức độ cam kết và phân chia lộ trình rèn luyện.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ] : [
    {
      q: "Where is the Co 4 La Foundation office located?",
      a: "The Co 4 La Foundation office is located in Ho Chi Minh City, Vietnam. Detailed address information can be found in the footer, or you can contact us directly at contact@c4l.org.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      q: "What is the official bank account of Co 4 La Foundation?",
      a: "All donation bank account details for Co 4 La Foundation are publicly listed under our 'Transparency' section. Co 4 La guarantees that 100% of donations are directly invested into student training programs.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      q: "How does the selection and sponsorship process work?",
      a: "The screening process consists of 3 stages: (1) Online submission of applicant profiles, (2) Verification of difficulties and self-reliance drive, and (3) Face-to-face interview with the Mentoring Board to assess alignment with Co 4 La values.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
            {lang === "vi" ? "GIẢI ĐÁP THÁC MẮC" : "ANSWERS & CLARIFICATIONS"}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1e5c8a] tracking-tight leading-none uppercase mt-3">
            {lang === "vi" ? "Câu Hỏi Thường Gặp" : "Frequently Asked Questions"}
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-4 font-normal max-w-2xl mx-auto">
            {lang === "vi"
              ? "Những thông tin phổ biến nhất về Quỹ Cỏ Bốn Lá được tổng hợp tại đây để giải đáp nhanh các thắc mắc của bạn."
              : "Common questions and essential details about Co 4 La Foundation collected for quick response."}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleIndex(idx)}
                className={`bg-[#F8FAFC] hover:bg-slate-100/60 border rounded-2xl p-5 cursor-pointer transition-all duration-300 ease-out select-none shadow-sm active:scale-[0.99] transform-gpu ${
                  isOpen
                    ? "border-emerald-500/30 bg-white shadow-md ring-1 ring-emerald-500/10"
                    : "border-slate-200/40"
                }`}
              >
                {/* Accordion Row */}
                <div className="flex items-center justify-between gap-4">
                  
                  {/* Left Circle Icon */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "bg-emerald-50 border-emerald-150 text-emerald-600 scale-105"
                      : "bg-white border-slate-200 text-emerald-700"
                  }`}>
                    {faq.icon}
                  </div>

                  {/* Question Text */}
                  <h3 className={`font-display font-extrabold text-sm md:text-base flex-grow text-left transition-colors duration-300 ${
                    isOpen ? "text-emerald-950" : "text-slate-800"
                  }`}>
                    {faq.q}
                  </h3>

                  {/* Chevron Icon */}
                  <div className={`text-slate-400 w-5 h-5 flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "rotate-180 text-emerald-600 scale-110" : ""
                  }`}>
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Collapsible Answer */}
                <div className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="pt-4 mt-4 border-t border-slate-200/50">
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal text-left">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
