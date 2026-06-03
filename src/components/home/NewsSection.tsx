"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/LanguageContext";

export default function NewsSection() {
  const { lang } = useLanguage();

  const newsPosts = lang === "vi" ? [
    {
      date: "03/03/2026",
      title: "Báo cáo Kiểm toán 2025",
      desc: "Quỹ Cỏ Bốn Lá - C4L Foundation trân trọng công bố Báo cáo Kiểm toán năm 2025, được thực hiện bởi Công ty TNHH Kiểm toán uy tín.",
      image: "/images/carousel-3.png",
      tag: "Kiểm toán"
    },
    {
      date: "03/03/2026",
      title: "Báo cáo Thường niên năm 2025",
      desc: "Năm 2025 đánh dấu một chặng đường nhiều ý nghĩa trong hành trình phát triển của Quỹ C4L. Với tinh thần minh bạch, trách nhiệm và trân trọng sự đồng hành.",
      image: "/images/carousel-2.png",
      tag: "Thường niên"
    },
    {
      date: "11/02/2026",
      title: "Báo cáo Chương trình Thiện nguyện Mentorship THPT",
      desc: "C4L khởi động năm 2026 với chuỗi Mentorship tại các trường THPT. Chương trình đã trao hơn 59 triệu đồng học bổng và giải thưởng, giúp học sinh định vị bản thân.",
      image: "/images/mentoring.png",
      tag: "Mentorship"
    },
    {
      date: "07/01/2026",
      title: "Báo cáo Hoạt động và Phát triển Quỹ năm 2025",
      desc: "Báo cáo tổng kết các chương trình hỗ trợ sinh viên khó khăn tại ký túc xá tự quản C4L Home, các hoạt động đào tạo thực chiến và phát triển năng lực.",
      image: "/images/practical_lab.png",
      tag: "Hoạt động"
    }
  ] : [
    {
      date: "03/03/2026",
      title: "Audit Report 2025",
      desc: "C4L Foundation proudly announces the Audit Report for 2025, conducted by a reputable independent auditing firm.",
      image: "/images/carousel-3.png",
      tag: "Audit"
    },
    {
      date: "03/03/2026",
      title: "Annual Report 2025",
      desc: "2025 marks a meaningful milestone in C4L's development journey, emphasizing transparency, responsibility, and partnership.",
      image: "/images/carousel-2.png",
      tag: "Annual"
    },
    {
      date: "11/02/2026",
      title: "Mentorship Charity Program Report",
      desc: "C4L kickstarted 2026 with a series of high school mentorship workshops, awarding scholarships to help students build self-awareness.",
      image: "/images/mentoring.png",
      tag: "Mentorship"
    },
    {
      date: "07/01/2026",
      title: "Activity & Development Report 2025",
      desc: "Comprehensive report summarizing support programs for underprivileged students at C4L Home dormitories and practical training labs.",
      image: "/images/practical_lab.png",
      tag: "Activity"
    }
  ];

  const parseDate = (dateStr: string) => {
    const parts = dateStr.split("/");
    if (parts.length !== 3) return { day: dateStr, month: "", year: "" };
    const day = parts[0];
    const monthNum = parts[1];
    const year = parts[2];
    
    const monthsVi: Record<string, string> = {
      "01": "Thg 1", "02": "Thg 2", "03": "Thg 3", "04": "Thg 4", "05": "Thg 5", "06": "Thg 6",
      "07": "Thg 7", "08": "Thg 8", "09": "Thg 9", "10": "Thg 10", "11": "Thg 11", "12": "Thg 12"
    };
    
    const monthsEn: Record<string, string> = {
      "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun",
      "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
    };
    
    const month = lang === "vi" ? monthsVi[monthNum] : monthsEn[monthNum];
    return { day, month, year };
  };

  return (
    <section id="journal" className="w-full bg-gradient-to-b from-[#F8FAFC]/50 to-white py-20 border-t border-slate-100 relative">
      {/* ── Faded Background Watermark Image ── */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none select-none">
        <Image
          src="/images/carousel-1.png"
          alt="C4L Background Watermark"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
            {lang === "vi" ? "BÁO CÁO & MINH BẠCH" : "REPORTS & TRANSPARENCY"}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1e5c8a] tracking-tight leading-none uppercase mt-3">
            {lang === "vi" ? "Báo Cáo Hoạt Động & Kiểm Toán" : "Activity & Audit Reports"}
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-4 font-normal max-w-2xl mx-auto">
            {lang === "vi"
              ? "Minh bạch tài chính và hoạt động để đảm bảo nguồn vốn đầu tư phát triển năng lực học viên được sử dụng hiệu quả nhất."
              : "Transparency in activities and finances to ensure student potential investment is utilized effectively."}
          </p>
        </div>

        {/* Report Grid of Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {newsPosts.map((post, idx) => {
            const { day, month, year } = parseDate(post.date);

            return (
              <Link
                key={idx}
                href="/journal"
                className="group bg-white/70 backdrop-blur-md border border-slate-200/50 hover:border-emerald-500/20 rounded-2xl flex flex-col hover:bg-white hover:shadow-xl active:scale-[0.99] transition-all duration-300 transform-gpu overflow-hidden"
              >
                {/* Image Section with floating Date Badge */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-2xl border-b border-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Floating Calendar Date Badge */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm border border-slate-200/60 text-slate-600 rounded-2xl p-2 w-14 h-14 md:w-16 md:h-16 shadow-md transition-all duration-300 group-hover:bg-[#15803D] group-hover:border-[#15803D] group-hover:text-white">
                    <span className="text-[9px] uppercase font-bold tracking-wider opacity-85 group-hover:text-emerald-100 transition-colors duration-300">
                      {month}
                    </span>
                    <span className="text-lg md:text-xl font-display font-black leading-none mt-0.5 text-slate-800 group-hover:text-white transition-colors duration-300">
                      {day}
                    </span>
                    <span className="text-[8px] font-mono opacity-60 mt-0.5 group-hover:text-emerald-200 transition-colors duration-300">
                      {year}
                    </span>
                  </div>
                </div>

                {/* Content Details Section */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 group-hover:bg-emerald-100/50 group-hover:text-[#15803D] transition-colors duration-300 w-fit">
                    {post.tag}
                  </span>
                  
                  <h3 className="font-display font-extrabold text-base md:text-lg text-slate-800 group-hover:text-[#1e5c8a] transition-colors duration-300 mt-3 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-2.5 font-normal group-hover:text-slate-600 transition-colors duration-300 line-clamp-3">
                    {post.desc}
                  </p>

                  {/* Read More Footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100/80 mt-auto">
                    <span className="text-xs font-bold text-emerald-700 group-hover:text-[#15803D] transition-colors duration-300 tracking-wider">
                      {lang === "vi" ? "XEM BÁO CÁO" : "VIEW REPORT"}
                    </span>
                    
                    {/* Circular Action Button */}
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:bg-[#15803D] group-hover:border-[#15803D] group-hover:text-white group-hover:shadow-md group-hover:translate-x-0.5">
                      <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
