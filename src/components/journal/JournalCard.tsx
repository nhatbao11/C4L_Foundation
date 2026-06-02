"use client";

import React from "react";
import type { Post } from "@/types";

interface JournalCardProps {
  post: Post;
  lang: string;
}

export default function JournalCard({ post, lang }: JournalCardProps) {
  const renderCardImage = (type: string) => {
    switch (type) {
      case "vietnam-map":
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-[#15803D] flex items-center justify-center p-4 text-white relative">
            <svg className="w-full h-full opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M45 10 C46 12, 45 15, 47 18 C48 20, 52 22, 53 25 C54 28, 51 32, 53 35 C55 38, 58 40, 56 45 C54 50, 60 52, 62 58 C64 64, 61 70, 63 76 C65 82, 60 88, 62 95" strokeWidth="3" strokeLinecap="round" />
              <circle cx="53" cy="35" r="4" fill="#FBBF24" className="animate-pulse" />
              <circle cx="56" cy="45" r="3" fill="#FBBF24" />
              <circle cx="62" cy="58" r="4.5" fill="#FBBF24" className="animate-pulse" />
            </svg>
            <span className="absolute bottom-2 right-2 text-[9px] bg-slate-900/60 px-2 py-0.5 rounded font-mono">Bản đồ</span>
          </div>
        );
      case "table-list-1":
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-700 flex flex-col justify-center p-4 text-white font-mono text-[8px] leading-tight">
            <div className="border-b border-indigo-400/30 pb-1 mb-2 font-bold flex justify-between text-indigo-200">
              <span>HỌ & TÊN</span>
              <span>TỈNH THÀNH</span>
            </div>
            <div className="flex justify-between opacity-90 py-0.5 border-b border-indigo-400/10">
              <span>Nguyễn Thị A</span>
              <span>Quảng Nam</span>
            </div>
            <div className="flex justify-between opacity-90 py-0.5 border-b border-indigo-400/10">
              <span>Trần Văn B</span>
              <span>Quảng Ngãi</span>
            </div>
            <div className="flex justify-between opacity-90 py-0.5 border-b border-indigo-400/10">
              <span>Lê Thị C</span>
              <span>Đắk Lắk</span>
            </div>
            <div className="flex justify-between opacity-90 py-0.5">
              <span>Phạm Văn D</span>
              <span>Bình Định</span>
            </div>
          </div>
        );
      case "table-list-2":
        return (
          <div className="w-full h-full bg-gradient-to-br from-teal-800 to-emerald-700 flex flex-col justify-center p-4 text-white font-mono text-[8px] leading-tight">
            <div className="border-b border-teal-400/30 pb-1 mb-2 font-bold flex justify-between text-teal-100">
              <span>DANH SÁCH SV ĐỢT 17</span>
            </div>
            <div className="py-0.5 opacity-90">- SV001: Nguyễn Minh Trí</div>
            <div className="py-0.5 opacity-90">- SV002: Phan Thị Kim Chi</div>
            <div className="py-0.5 opacity-90">- SV003: Võ Thành Đạt</div>
            <div className="py-0.5 opacity-90">- SV004: Đặng Văn Hùng</div>
          </div>
        );
      case "daklak":
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-800 via-[#15803D] to-emerald-950 flex flex-col justify-end p-4 text-white relative">
            <svg className="absolute top-2 right-2 w-8 h-8 text-amber-300 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 14.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z" />
            </svg>
            <div className="z-10">
              <span className="text-[10px] text-emerald-200 font-bold block">Thực địa Đắk Lắk</span>
              <span className="text-[8px] text-slate-300">Gieo hạt yêu thương</span>
            </div>
          </div>
        );
      case "round-16":
        return (
          <div className="w-full h-full bg-emerald-900 flex flex-col items-center justify-center p-4 text-white text-center">
            <div className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center font-display font-black text-lg text-emerald-300 shadow-md">
              16
            </div>
            <span className="text-[9px] uppercase tracking-wider mt-2 text-emerald-200 font-bold">Xét duyệt</span>
          </div>
        );
      case "hanam":
        return (
          <div className="w-full h-full bg-gradient-to-br from-sky-800 to-indigo-950 flex flex-col justify-end p-4 text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent"></div>
            <div className="z-10">
              <span className="text-[10px] text-sky-200 font-bold block">Gặp mặt Hà Nam</span>
              <span className="text-[8px] text-sky-400/90 font-mono">Đoàn điều phối</span>
            </div>
          </div>
        );
      case "placeholder":
      default:
        return (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 p-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 00-2-2m2 2a2 2 0 012 2v8a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3M9 9h1.01M9 12h.01M9 15h.01M13 9h3m-3 3h3" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-h-[180px]">
      {/* Left Side: Photo/SVG Image container */}
      <div className="w-full sm:w-[40%] min-h-[160px] relative bg-slate-50 flex items-center justify-center overflow-hidden border-r border-slate-100/50">
        {renderCardImage(post.imageType)}
      </div>

      {/* Right Side: Details and link */}
      <div className="w-full sm:w-[60%] p-6 flex flex-col justify-between">
        <div>
          {/* Tag badge */}
          <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded uppercase tracking-wider">
            {lang === "vi" ? post.tagVi : post.tagEn}
          </span>

          {/* Heading */}
          <h3 className="font-display font-black text-xs md:text-sm text-slate-800 uppercase tracking-wide leading-snug mt-3 hover:text-[#15803D] transition-colors line-clamp-2">
            {lang === "vi" ? post.titleVi : post.titleEn}
          </h3>

          {/* Metadata line */}
          <div className="flex items-center gap-4 text-[10px] text-slate-400 mt-2 font-semibold font-mono">
            <span className="flex items-center gap-1">👤 Admin</span>
            <span className="flex items-center gap-1">📅 {lang === "vi" ? post.dateVi : post.dateEn}</span>
          </div>

          {/* Paragraph excerpt */}
          <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mt-3.5 line-clamp-2 font-normal">
            {lang === "vi" ? post.excerptVi : post.excerptEn}
          </p>
        </div>

        {/* Redirection Link */}
        <a
          href={`/journal/${post.id}`}
          className="text-[10px] md:text-xs font-bold text-[#15803D] hover:underline uppercase mt-4 block self-start tracking-widest"
        >
          {lang === "vi" ? "Xem chi tiết →" : "Read details →"}
        </a>
      </div>
    </div>
  );
}
