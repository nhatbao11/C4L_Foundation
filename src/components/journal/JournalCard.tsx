"use client";

import React from "react";
import type { Post } from "@/types";
import { Link } from "@/i18n/navigation";

interface JournalCardProps {
  post: Post;
  lang: string;
  isFeatured?: boolean;
}

export default function JournalCard({ post, lang, isFeatured = false }: JournalCardProps) {
  const renderCardImage = (type: string) => {
    switch (type) {
      case "vietnam-map":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center p-4 text-white relative group-hover:scale-103 transition-transform duration-700">
            {/* Radar glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.15)_0%,transparent_60%)]"></div>
            {/* Tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:12px_12px] opacity-60"></div>
            
            <svg className="w-20 h-20 opacity-90 drop-shadow-[0_8px_16px_rgba(16,185,129,0.25)]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              {/* Vietnam map silhouette path */}
              <path 
                d="M48 10 C50 12, 45 16, 48 20 C51 24, 55 26, 52 30 C49 34, 58 38, 55 45 C52 52, 60 56, 58 64 C56 72, 64 76, 60 84 C56 92, 53 96, 55 98" 
                stroke="url(#vietnam-grad)" 
                strokeWidth="5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="vietnam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              {/* Glowing radar pins */}
              <circle cx="48" cy="12" r="3" fill="#EF4444" /> {/* Hanoi */}
              <g className="animate-pulse">
                <circle cx="56" cy="40" r="5" fill="#34d399" opacity="0.4" />
                <circle cx="56" cy="40" r="2.5" fill="#FBBF24" /> {/* Central */}
              </g>
              <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
                <circle cx="58" cy="50" r="5" fill="#34d399" opacity="0.4" />
                <circle cx="58" cy="50" r="2" fill="#FBBF24" />
              </g>
              <circle cx="62" cy="85" r="3" fill="#EF4444" /> {/* HCMC */}
            </svg>

            {/* Labels */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[8px] font-mono text-emerald-400 font-bold uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Database
            </div>
            
            <span className="absolute bottom-3.5 right-3.5 text-[9px] uppercase tracking-wider bg-emerald-500/10 backdrop-blur-md px-2 py-0.5 rounded font-mono font-black border border-emerald-500/20 text-emerald-300">
              {lang === "vi" ? "Bản đồ miền Trung" : "Central VN map"}
            </span>
          </div>
        );
      case "table-list-1":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col justify-between p-5 text-white relative overflow-hidden group-hover:scale-103 transition-transform duration-700">
            {/* Tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px] opacity-40"></div>
            
            {/* Header row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-mono text-[9px] font-black text-indigo-300 uppercase tracking-widest">
                  {lang === "vi" ? "HỒ SƠ TUYỂN CHỌN" : "CANDIDATE DB"}
                </span>
              </div>
              <span className="font-mono text-[8px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/35 px-1.5 py-0.5 rounded font-bold uppercase">
                {lang === "vi" ? "Vòng 1" : "Round 1"}
              </span>
            </div>

            {/* List entries */}
            <div className="relative z-10 font-mono text-[9px] leading-relaxed flex-1 flex flex-col justify-center gap-1.5 my-2">
              <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span className="text-slate-300 font-medium">Nguyễn Thị A</span>
                <span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded text-[8px]">Quảng Nam</span>
              </div>
              <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span className="text-slate-300 font-medium">Trần Văn B</span>
                <span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded text-[8px]">Quảng Ngãi</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-slate-300 font-medium">Lê Văn C</span>
                <span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded text-[8px]">Bình Định</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-t border-white/5 pt-2 z-10 text-[8px] text-slate-400 font-mono">
              <span>{lang === "vi" ? "TỔNG SỐ: 91 SV" : "TOTAL: 91 STU"}</span>
              <span className="text-emerald-400 font-bold">● ONLINE</span>
            </div>
          </div>
        );
      case "table-list-2":
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex flex-col justify-between p-5 text-white relative overflow-hidden group-hover:scale-103 transition-transform duration-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-[9px] font-black text-emerald-300 uppercase tracking-widest">
                  {lang === "vi" ? "XỚT DUYỆT BẢO TRỢ" : "SPONSOR GRANTED"}
                </span>
              </div>
              <span className="font-mono text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/35 px-1.5 py-0.5 rounded font-bold uppercase">
                R17 APPROVED
              </span>
            </div>

            {/* List */}
            <div className="relative z-10 font-mono text-[9px] leading-relaxed flex-1 flex flex-col justify-center gap-1.5 my-2">
              <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span className="text-slate-300 font-medium">Nguyễn Văn D</span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded text-[8px]">{lang === "vi" ? "Đã duyệt" : "Approved"}</span>
              </div>
              <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span className="text-slate-300 font-medium">Phan Thị E</span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded text-[8px]">{lang === "vi" ? "Đã duyệt" : "Approved"}</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-slate-300 font-medium">Võ Văn F</span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded text-[8px]">{lang === "vi" ? "Đã duyệt" : "Approved"}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-t border-white/5 pt-2 z-10 text-[8px] text-slate-400 font-mono">
              <span>{lang === "vi" ? "TỔNG SỐ: 37 TRẺ" : "TOTAL: 37 KIDS"}</span>
              <span className="text-[#FBBF24] font-bold">★ LIFE-LONG</span>
            </div>
          </div>
        );
      case "daklak":
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-[#0e4b29] to-amber-950 flex flex-col justify-between p-5 text-white relative overflow-hidden group-hover:scale-103 transition-transform duration-700">
            {/* Sun graphic and clouds background */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-30">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                {/* Forest trees shape */}
                <path d="M0 100 L10 70 L20 100 L30 65 L40 100 L50 75 L60 100 L70 60 L80 100 L90 70 L100 100 Z" fill="#047857" />
              </svg>
            </div>

            {/* Header info */}
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-[8px] bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded font-bold uppercase">
                {lang === "vi" ? "THỰC ĐỊA & KẾT NỐI" : "FIELD EXPEDITION"}
              </span>
              <span className="text-[10px] text-emerald-300">🌿</span>
            </div>

            {/* Content text */}
            <div className="z-10 relative mt-4">
              <span className="text-[13px] font-black text-white block leading-tight">
                {lang === "vi" ? "GIEO HẠT TỰ LẬP ĐẮK LẮK" : "DAK LAK SEEDS OF SELF-RELIANCE"}
              </span>
              <span className="text-[9px] text-emerald-200 mt-1 block font-medium">
                {lang === "vi" ? "Đồng hành trao gửi học bổng" : "Hand-delivering direct learning funds"}
              </span>
            </div>
            
            {/* Footer */}
            <div className="flex items-center gap-1.5 z-10 border-t border-white/10 pt-2 mt-2 text-[8px] text-slate-300 font-mono">
              <span>📅 July 2025</span>
              <span>•</span>
              <span>📍 Tây Nguyên</span>
            </div>
          </div>
        );
      case "round-16":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#062814] via-[#0b381e] to-emerald-950 flex flex-col justify-between p-5 text-white relative overflow-hidden group-hover:scale-103 transition-transform duration-700">
            {/* Background design */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)]"></div>
            
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase">
                {lang === "vi" ? "QUY TRÌNH MINH BẠCH" : "TRANSPARENT PROCESS"}
              </span>
              <span className="text-[10px] text-[#FBBF24]">★</span>
            </div>

            {/* Central emblem */}
            <div className="flex items-center gap-3.5 my-3 z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center font-display font-black text-xl text-emerald-950 shadow-lg shadow-yellow-500/25">
                16
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white leading-tight uppercase">
                  {lang === "vi" ? "ĐỢT XÉT DUYỆT 16" : "SPONSORED DRIVE R16"}
                </span>
                <span className="text-[8.5px] text-slate-300 mt-0.5 font-medium">
                  {lang === "vi" ? "Trao cơ hội - Phát triển năng lực" : "Investing in human potential"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between z-10 border-t border-white/10 pt-2 text-[8px] text-slate-400 font-mono">
              <span>{lang === "vi" ? "ĐỊNH HƯỚNG TỰ CHỦ" : "FROM POTENTIAL TO PROF"}</span>
              <span className="text-emerald-400 font-bold">KPI VERIFIED</span>
            </div>
          </div>
        );
      case "hanam":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0b2447] via-[#19376d] to-[#121b2a] flex flex-col justify-between p-5 text-white relative overflow-hidden group-hover:scale-103 transition-transform duration-700">
            {/* Constellation line mesh */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="10" y1="20" x2="40" y2="50" stroke="white" strokeWidth="0.5" />
              <line x1="40" y1="50" x2="80" y2="30" stroke="white" strokeWidth="0.5" />
              <line x1="40" y1="50" x2="70" y2="80" stroke="white" strokeWidth="0.5" />
              <circle cx="10" cy="20" r="2" fill="white" />
              <circle cx="40" cy="50" r="3" fill="white" />
              <circle cx="80" cy="30" r="2" fill="white" />
              <circle cx="70" cy="80" r="2" fill="white" />
            </svg>

            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-[8px] bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded font-bold uppercase">
                {lang === "vi" ? "RÈN LUYỆN KỸ NĂNG" : "SKILLS BOOTCAMP"}
              </span>
              <span className="text-[10px] text-sky-400">⚡</span>
            </div>

            <div className="z-10 relative mt-4">
              <span className="text-[13px] font-black text-white block leading-tight uppercase">
                {lang === "vi" ? "GẶP MẶT HÀ NAM" : "HA NAM MEETUP"}
              </span>
              <span className="text-[9px] text-sky-200 mt-1 block font-medium">
                {lang === "vi" ? "Chuyên đề phát triển bản lĩnh tự lực" : "Fostering professional grit"}
              </span>
            </div>

            <div className="flex items-center gap-1.5 z-10 border-t border-white/10 pt-2 mt-2 text-[8px] text-slate-300 font-mono">
              <span>📅 May 2025</span>
              <span>•</span>
              <span>📍 Hà Nam</span>
            </div>
          </div>
        );
      case "placeholder":
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#052512] via-[#0e4b29] to-[#156e39] flex flex-col justify-between p-5 text-white relative overflow-hidden group-hover:scale-103 transition-transform duration-700">
            {/* Ambient Background Circles */}
            <div className="absolute w-28 h-28 rounded-full bg-white/5 border border-white/5 animate-pulse"></div>
            <div className="absolute w-36 h-36 rounded-full bg-white/5 border border-white/5"></div>
            
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase">
                CO 4 LA ECOSYSTEM
              </span>
              <span className="text-[10px] text-emerald-300">☘️</span>
            </div>

            {/* Clover vector logo centering */}
            <div className="flex items-center justify-center flex-1 my-2 z-10">
              <svg className="w-12 h-12 text-emerald-400 drop-shadow-[0_6px_16px_rgba(52,211,153,0.45)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.69 2 6 4.69 6 8c0 1.95.93 3.69 2.38 4.78C6.93 13.88 6 15.62 6 17.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.88-.93-3.62-2.38-4.72C17.07 11.69 18 9.95 18 8c0-3.31-2.69-6-6-6zm0 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
            </div>

            <div className="flex items-center justify-between z-10 border-t border-white/10 pt-2 text-[8px] text-emerald-400/70 font-mono">
              <span>{lang === "vi" ? "TỰ CHỦ - TRƯỞNG THÀNH" : "POTENTIAL TO PROF"}</span>
              <span className="text-emerald-300 font-bold">CO 4 LA FOUNDATION</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`group flex bg-white rounded-[24px] border border-slate-100/90 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(15,128,61,0.09)] hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-500
        ${
          isFeatured 
            ? "flex-col lg:flex-row lg:col-span-2 min-h-[260px] lg:min-h-[340px]" 
            : "flex-col sm:flex-row min-h-[200px]"
        }`}
    >
      {/* Left Side: Photo/SVG Image container */}
      <div 
        className={`relative flex items-stretch overflow-hidden border-b sm:border-b-0 border-slate-100/80
          ${
            isFeatured 
              ? "w-full lg:w-[45%] min-h-[220px] lg:min-h-auto border-r-0 lg:border-r" 
              : "w-full sm:w-[40%] min-h-[170px] sm:min-h-auto sm:border-r"
          }`}
      >
        {renderCardImage(post.imageType)}
        
        {/* Sliding sweep reflection glare effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-20"></div>
      </div>

      {/* Right Side: Details and link */}
      <div 
        className={`flex flex-col justify-between
          ${
            isFeatured 
              ? "w-full lg:w-[55%] p-6 md:p-9 lg:p-10" 
              : "w-full sm:w-[60%] p-6 md:p-7"
          }`}
      >
        <div>
          {/* Category Tag & Reading Time info */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-[#15803D] bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {lang === "vi" ? post.tagVi : post.tagEn}
            </span>
            <span className="text-[9px] text-slate-400 font-bold tracking-normal uppercase font-mono">
              {lang === "vi" ? "3 PHÚT ĐỌC" : "3 MIN READ"}
            </span>
          </div>

          {/* Heading */}
          <h3 
            className={`font-display font-extrabold text-slate-800 uppercase tracking-wide leading-snug mt-4 group-hover:text-[#15803D] transition-colors duration-300 line-clamp-2
              ${
                isFeatured 
                  ? "text-base sm:text-lg md:text-xl" 
                  : "text-[13px] sm:text-[14px]"
              }`}
          >
            {lang === "vi" ? post.titleVi : post.titleEn}
          </h3>

          {/* Metadata line */}
          <div className="flex items-center gap-3.5 text-[9.5px] text-slate-400 mt-2.5 font-bold font-mono">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Admin
            </span>
            <span className="text-slate-200">|</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {lang === "vi" ? post.dateVi : post.dateEn}
            </span>
          </div>

          {/* Paragraph excerpt */}
          <p 
            className={`text-slate-500 leading-relaxed mt-3.5 font-medium
              ${
                isFeatured 
                  ? "text-xs sm:text-[13px] line-clamp-3 md:line-clamp-4" 
                  : "text-[11.5px] sm:text-xs line-clamp-2"
              }`}
          >
            {lang === "vi" ? post.excerptVi : post.excerptEn}
          </p>
        </div>

        {/* Action Link Button with sliding arrow hover */}
        <Link
          href={`/journal/${post.id}`}
          className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-[#15803D] hover:text-[#0F623D] uppercase mt-5 block self-start tracking-wider transition-colors duration-300"
        >
          {lang === "vi" ? "Xem chi tiết" : "Read details"}
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
