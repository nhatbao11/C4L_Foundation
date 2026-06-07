"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function Hybrid4L() {
  const { lang } = useLanguage();
  const [activePillar, setActivePillar] = useState(0);

  const pillars = lang === "vi" ? [
    {
      title: "Trụ cột 1: Tài chính (Finance)",
      subtitle: "Bảo trợ học phí và sinh hoạt phí",
      desc: "Quỹ cung cấp các gói tài trợ học phí trực tiếp cho trường đại học và hỗ trợ sinh hoạt phí định kỳ dựa trên kết quả rèn luyện học tập của từng học viên. Đây không phải là sự bố thí mà là khoản đồng đầu tư của Quỹ vào tiềm năng phát triển tương lai của sinh viên.",
      icon: "💳"
    },
    {
      title: "Trụ cột 2: Ký túc xá (Cỏ 4 Lá Home)",
      subtitle: "Môi trường nội trú kỷ luật thép",
      desc: "Sinh viên sinh hoạt tập trung tại ký túc xá Cỏ 4 Lá Home với nội quy nghiêm ngặt: thức dậy lúc 5:00 sáng, chạy bộ rèn luyện thể chất, tự lập kế hoạch công việc và dọn dẹp vệ sinh ngăn nắp. Rèn luyện kỷ luật là nền tảng để trở thành chuyên gia chỉn chu.",
      icon: "🏠"
    },
    {
      title: "Trụ cột 3: Cố vấn (Mentoring)",
      subtitle: "Hỗ trợ 1-1 từ các chuyên gia",
      desc: "Mỗi sinh viên được kết nối trực tiếp với một Mentor (Cố vấn) là chuyên gia, quản lý cấp cao tại các doanh nghiệp đa quốc gia và tập đoàn lớn. Mentor đồng hành định hướng kỹ năng nghề nghiệp, kỹ năng mềm và tư vấn định hướng tương lai.",
      icon: "🤝"
    },
    {
      title: "Trụ cột 4: Thực chiến (Practical Lab)",
      subtitle: "Tech Lab & E-commerce Hub",
      desc: "Học viên được trực tiếp tham gia thiết kế, lập trình phần mềm và vận hành các dự án marketing thực tế dưới sự dẫn dắt của đội ngũ chuyên gia. Điều này giúp tích lũy tối thiểu 2 năm kinh nghiệm thực chiến trước khi tốt nghiệp đại học.",
      icon: "💻"
    }
  ] : [
    {
      title: "Pillar 1: Finance",
      subtitle: "Tuition and Living Allowance Escrow",
      desc: "The foundation provides direct tuition coverage to universities and periodic living grants tied directly to individual student performance. This is structured as a professional co-investment in the student's career potential rather than charity.",
      icon: "💳"
    },
    {
      title: "Pillar 2: Housing (Co 4 La Home)",
      subtitle: "Disciplined Boarding Environment",
      desc: "Students live in our structured Co 4 La Home dormitories with strict regulations: 5:00 AM wakeups, daily physical runs, scheduled cleaning, and autonomous tasks. Self-discipline is the foundation of high-caliber professionals.",
      icon: "🏠"
    },
    {
      title: "Pillar 3: Mentoring",
      subtitle: "1-on-1 Executive Coaching",
      desc: "Every student is paired with an industry mentor (senior executives or specialists at major corporations). Mentors provide direct support on soft skills, professional standards, and early career planning.",
      icon: "🤝"
    },
    {
      title: "Pillar 4: Practical Lab",
      subtitle: "Tech Lab & E-commerce Operations",
      desc: "Students build real-world software systems and manage commercial marketing pipelines. Working under lead developers, they graduate with at least 2 years of practical engineering experience.",
      icon: "💻"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-slate-50 border-b border-slate-100 pt-[152px] pb-20 md:pt-[208px] md:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold text-[#0F623D] bg-emerald-50 px-4 py-2 rounded-lg uppercase tracking-wider">
            {lang === "vi" ? "Mô Hình Hoạt Động" : "Operational Model"}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-[#0F623D] mt-6 tracking-tight leading-tight uppercase">
            {lang === "vi" ? "HỆ THỐNG PHÁT TRIỂN HYBRID 4L" : "HYBRID 4L ECOSYSTEM"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-6 max-w-3xl mx-auto font-normal">
            {lang === "vi"
              ? "Sự kết hợp chặt chẽ giữa 4 nhân tố cốt lõi tạo nên bệ phóng vững chắc giúp sinh viên có hoàn cảnh khó khăn tự lập làm chủ cuộc đời."
              : "A structured synergy combining four foundational elements to transition underprivileged students into self-reliant, high-earning experts."}
          </p>
        </div>
      </section>

      {/* Tabs list & content display */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left tabs menu */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {pillars.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActivePillar(idx)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                activePillar === idx
                  ? "bg-[#0F623D] border-[#0F623D] text-white shadow-lg"
                  : "bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100"
               }`}
            >
              <span className="text-3xl flex-shrink-0">{p.icon}</span>
              <div>
                <span className="block font-black text-sm md:text-base">{p.title}</span>
                <span className={`block text-xs mt-1 ${
                  activePillar === idx ? "text-emerald-200" : "text-slate-500"
                }`}>
                  {p.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Active content panel */}
        <div className="lg:col-span-8 bg-slate-50 border border-slate-200/50 rounded-3xl p-8 md:p-14 shadow-sm min-h-[360px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 border-b border-slate-200 pb-5 mb-8">
              <span className="text-5xl">{pillars[activePillar].icon}</span>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#0F623D]">
                  {pillars[activePillar].title}
                </h3>
                <span className="text-xs md:text-sm text-slate-500 font-bold tracking-wide uppercase mt-1 block">
                  {pillars[activePillar].subtitle}
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              {pillars[activePillar].desc}
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#0F623D] uppercase tracking-wider">
              Co 4 La Hybrid 4L Framework
            </span>
            <a
              href="/apply"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs md:text-sm rounded-xl tracking-wider uppercase transition-all shadow-md"
            >
              {lang === "vi" ? "Đăng ký tham gia" : "Apply to join"}
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
