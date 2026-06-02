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
      image: "/images/carousel-3.png"
    },
    {
      date: "03/03/2026",
      title: "Báo cáo Thường niên năm 2025",
      desc: "Năm 2025 đánh dấu một chặng đường nhiều ý nghĩa trong hành trình phát triển của Quỹ C4L. Với tinh thần minh bạch, trách nhiệm và trân trọng sự đồng hành.",
      image: "/images/carousel-2.png"
    },
    {
      date: "11/02/2026",
      title: "Báo cáo Chương trình Thiện nguyện Mentorship THPT",
      desc: "C4L khởi động năm 2026 với chuỗi Mentorship tại các trường THPT. Chương trình đã trao hơn 59 triệu đồng học bổng và giải thưởng, giúp học sinh định vị bản thân.",
      image: "/images/carousel-1.png"
    },
    {
      date: "07/01/2026",
      title: "Báo cáo Hoạt động và Phát triển Quỹ năm 2025",
      desc: "Báo cáo tổng kết các chương trình hỗ trợ sinh viên khó khăn tại ký túc xá tự quản C4L Home, các hoạt động đào tạo thực chiến và phát triển năng lực.",
      image: "/logo.jpg"
    }
  ] : [
    {
      date: "03/03/2026",
      title: "Audit Report 2025",
      desc: "C4L Foundation proudly announces the Audit Report for 2025, conducted by a reputable independent auditing firm.",
      image: "/images/carousel-3.png"
    },
    {
      date: "03/03/2026",
      title: "Annual Report 2025",
      desc: "2025 marks a meaningful milestone in C4L's development journey, emphasizing transparency, responsibility, and partnership.",
      image: "/images/carousel-2.png"
    },
    {
      date: "11/02/2026",
      title: "Mentorship Charity Program Report",
      desc: "C4L kickstarted 2026 with a series of high school mentorship workshops, awarding scholarships to help students build self-awareness.",
      image: "/images/carousel-1.png"
    },
    {
      date: "07/01/2026",
      title: "Activity & Development Report 2025",
      desc: "Comprehensive report summarizing support programs for underprivileged students at C4L Home dormitories and practical training labs.",
      image: "/logo.jpg"
    }
  ];

  return (
    <section id="journal" className="w-full bg-white py-16 md:py-20 border-t border-slate-100 relative">
      {/* ── Faded Background Watermark Image ── */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none select-none">
        <Image
          src="/images/carousel-1.png"
          alt="C4L Background Watermark"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight uppercase">
            {lang === "vi" ? "BÁO CÁO HOẠT ĐỘNG - KIỂM TOÁN" : "ACTIVITY & AUDIT REPORTS"}
          </h2>
        </div>

        {/* Compact Table List */}
        <div className="w-full border-t border-slate-200">

          {/* Table Header */}
          <div className="flex py-3 px-2 text-[11px] font-bold uppercase text-slate-400 tracking-widest border-b border-slate-200">
            <div className="w-24 md:w-32 flex-shrink-0 text-left">
              {lang === "vi" ? "Ngày đăng" : "Publish Date"}
            </div>
            <div className="flex-grow min-w-0 px-4 text-left">
              {lang === "vi" ? "Bài viết" : "Article"}
            </div>
            <div className="w-24 md:w-36 flex-shrink-0 text-right">
              {lang === "vi" ? "Đến bài viết" : "Link"}
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {newsPosts.map((post, idx) => (
              <Link
                key={idx}
                href="/journal"
                className="py-4 px-2 border-b border-slate-200/60 flex items-center justify-between gap-4 hover:bg-slate-50/40 transition-colors group"
              >
                {/* Date */}
                <div className="w-24 md:w-32 flex-shrink-0 text-xs md:text-sm text-slate-500 font-mono">
                  {post.date}
                </div>

                {/* Content Details */}
                <div className="flex-grow min-w-0 px-4">
                  <h3 className="font-display font-extrabold text-xs md:text-sm text-[#1e5c8a] group-hover:text-emerald-700 transition-colors hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mt-1 line-clamp-1 font-normal">
                    {post.desc}
                  </p>
                </div>

                {/* Compact Image & Arrow container on the right */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  {/* Thumbnail Image */}
                  <div
                    className="relative w-20 md:w-24 h-12 md:h-14 overflow-hidden rounded border border-slate-100 bg-slate-50"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="100px"
                    />
                  </div>

                  {/* Tiny Right Arrow */}
                  <div className="text-[#1e5c8a] group-hover:translate-x-1 transition-transform w-6 flex justify-end">
                    <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
