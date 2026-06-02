"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutHero() {
  const { lang } = useLanguage();

  const stats = lang === "vi" ? [
    { num: "387", label: "Tổng số trẻ", sub: "Được bảo trợ tính đến nay" },
    { num: "51.3 Tỷ+", label: "Tổng Tiền Nhận", sub: "Số quyên góp cộng dồn" },
    { num: "23.8 Tỷ+", label: "Tổng Tiền Chi", sub: "Đã giải ngân cho sinh viên" },
    { num: "27.5 Tỷ+", label: "Số Tiền Còn Lại", sub: "Tổng quỹ tích luỹ" },
  ] : [
    { num: "387", label: "Total Students", sub: "Sponsored to date" },
    { num: "51.3B+", label: "Total Received", sub: "Cumulative donations" },
    { num: "23.8B+", label: "Total Disbursed", sub: "To students" },
    { num: "27.5B+", label: "Remaining Fund", sub: "Accumulated reserve" },
  ];

  return (
    <section className="bg-[#15803D] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={i} x1={i * 120} y1="0" x2={i * 120} y2="400" stroke="white" strokeWidth="1" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" y1={i * 100} x2="800" y2={i * 100} stroke="white" strokeWidth="1" />
          ))}
          <circle cx="240" cy="100" r="6" fill="white" />
          <circle cx="480" cy="200" r="6" fill="white" />
          <circle cx="360" cy="300" r="6" fill="white" />
          <circle cx="600" cy="100" r="6" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-28 text-center z-10">
        <span className="text-xs font-bold text-white/70 bg-white/10 border border-white/20 px-4 py-2 rounded-full uppercase tracking-widest font-mono">
          {lang === "vi" ? "Về Chúng Tôi" : "About C4L Foundation"}
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-black text-white mt-6 leading-tight uppercase tracking-tight">
          {lang === "vi" ? (
            <>Kiến Tạo Thế Hệ<br /><span className="text-emerald-200">Tự Lập</span></>
          ) : (
            <>Empowering A<br /><span className="text-emerald-200">Self-Made Generation</span></>
          )}
        </h1>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mt-6 max-w-2xl mx-auto font-normal">
          {lang === "vi"
            ? "Quỹ Cỏ Bốn Lá (C4L) hoạt động như một doanh nghiệp xã hội, đầu tư phát triển con người thay vì chỉ cung cấp hỗ trợ tài chính một chiều."
            : "C4L Foundation operates as a social enterprise focused on human capital development, beyond conventional one-sided financial charity."}
        </p>
      </div>

      {/* Stats bar — white card at the bottom of hero */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s, i) => (
              <div key={i} className="py-6 px-4 md:px-8 text-center">
                <div className="font-display font-black text-2xl md:text-3xl text-white">{s.num}</div>
                <div className="text-emerald-200 text-[10px] font-bold uppercase tracking-widest mt-1">{s.label}</div>
                <div className="text-white/50 text-[10px] mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
