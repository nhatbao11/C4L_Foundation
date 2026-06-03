"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/LanguageContext";

export default function QRAccountDetails() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const accountNumber = "xxx";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* Main White Card Box */}
      <div className="bg-white border border-slate-200/50 rounded-[32px] p-6 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 max-w-5xl mx-auto relative overflow-hidden">
        {/* Decorative corner grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Bank, Holder, Account details) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Row 1: Ngân hàng */}
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4 transition-all hover:bg-slate-100/50">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  {lang === "vi" ? "Ngân hàng" : "Bank"}
                </span>
                <span className="text-slate-800 font-extrabold text-sm md:text-base mt-0.5">
                  MB Bank - Ngân hàng Quân Đội
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">
                  {lang === "vi" ? "Chi nhánh: xxx" : "Branch: xxx"}
                </span>
              </div>
            </div>

            {/* Row 2: Chủ tài khoản */}
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4 transition-all hover:bg-slate-100/50">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#15803D] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  {lang === "vi" ? "Chủ tài khoản" : "Account Holder"}
                </span>
                <span className="text-slate-800 font-extrabold text-sm md:text-base mt-0.5 uppercase">
                  xxx
                </span>
              </div>
            </div>

            {/* Row 3: Số tài khoản */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-center justify-between gap-4 transition-all hover:border-emerald-500/20 hover:shadow-md relative overflow-hidden group">
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  {lang === "vi" ? "Số tài khoản thiện nguyện" : "Donation Account Number"}
                </span>
                <span className="text-[#1e5c8a] font-display font-black text-2xl md:text-3xl tracking-tight mt-1">
                  {accountNumber}
                </span>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="w-11 h-11 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-[#15803D] border border-slate-200 hover:border-emerald-200 flex items-center justify-center text-slate-500 transition-all duration-200 active:scale-90 relative"
                aria-label="Copy account number"
              >
                {copied ? (
                  <svg className="w-5 h-5 text-emerald-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Right Column (QR & Custom Memo Syntax) */}
          <div className="lg:col-span-6 flex flex-col items-center gap-5">
            {/* White QR Code container */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm flex flex-col items-center gap-3 w-fit">
              <div className="w-44 h-44 bg-slate-50/50 p-2 border border-slate-100 rounded-2xl flex items-center justify-center relative group">
                {/* Embedded Custom SVG QR Code lookalike with Center Clover */}
                <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* QR Finder patterns */}
                  <rect x="5" y="5" width="20" height="20" rx="3" stroke="#15803D" strokeWidth="4" />
                  <rect x="10" y="10" width="10" height="10" rx="1" fill="#15803D" />
                  
                  <rect x="75" y="5" width="20" height="20" rx="3" stroke="#15803D" strokeWidth="4" />
                  <rect x="80" y="10" width="10" height="10" rx="1" fill="#15803D" />
                  
                  <rect x="5" y="75" width="20" height="20" rx="3" stroke="#15803D" strokeWidth="4" />
                  <rect x="10" y="80" width="10" height="10" rx="1" fill="#15803D" />

                  {/* Mock QR data bits */}
                  <path d="M35 5h5v5h-5zM45 5h10v5H45zM60 5h10v5H60zM35 15h10v5H35zM50 15h5v5h-5zM65 15h5v5h-5z" fill="#334155" />
                  <path d="M35 25h15v5H35zM55 25h5v5h-5zM65 25h15v5H65z" fill="#334155" />
                  <path d="M5 35h5v10H5zM15 35h15v5H15zM40 35h5v5h-5zM50 35h10v5H50zM65 35h10v5H65zM80 35h15v5H80z" fill="#334155" />
                  <path d="M10 45h5v5h-5zM20 45h15v5H20zM45 45h5v5h-5zM55 45h15v5h-15zM85 45h10v5H85z" fill="#334155" />
                  <path d="M5 55h10v5H5zM20 55h5v5h-5zM35 55h20v5H35zM60 55h15v5H60zM80 55h15v5H80z" fill="#334155" />
                  <path d="M15 65h10v5H15zM30 65h5v5h-5zM45 65h15v5H45zM65 65h10v5H65zM80 65h5v5h-5z" fill="#334155" />
                  <path d="M35 75h5v15h-5zM45 75h10v5H45zM60 75h10v5H60zM75 75h10v5H75z" fill="#334155" />
                  <path d="M50 85h15v5H50zM75 85h5v10h-5zM85 85h10v5H85z" fill="#334155" />
                  <path d="M35 95h10v5H35zM55 95h15v5H55zM80 95h10v5H80z" fill="#334155" />

                  {/* Center Clover Logo Cover Container */}
                  <rect x="38" y="38" width="24" height="24" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  
                  {/* Green 4-leaf clover icon */}
                  <path d="M50 42.5c-0.8-1.5-2.8-1.5-3.6 0s-0.5 2.8 1.1 3.6c-1.6-0.8-2.8-2.8-3.6-1.1s0 2.8 1.5 3.6c-1.5 0.8-1.5 2.8 0 3.6s2.8 0.5 3.6-1.1c-0.8 1.6 1.1 2.8 1.1 3.6s2.8 0 3.6-1.5c0.8 1.5 2.8 1.5 3.6 0s0.5-2.8-1.1-3.6c1.6 0.8 2.8 2.8 3.6 1.1s0-2.8-1.5-3.6c1.5-0.8 1.5-2.8 0-3.6s-2.8-0.5-3.6 1.1c0.8-1.6-1.1-2.8-1.1-3.6s-2.8 0-3.6 1.5z" fill="#15803D" />
                </svg>
              </div>
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">
                {lang === "vi" ? "Quét mã QR để chuyển khoản nhanh" : "Scan QR code to transfer instantly"}
              </span>
            </div>

            {/* Blue dashed border Transfer syntax container */}
            <div className="w-full bg-blue-50/50 border border-dashed border-blue-200 p-5 rounded-2xl flex flex-col items-center">
              <span className="text-[10px] font-black text-[#1e5c8a] tracking-widest uppercase">
                {lang === "vi" ? "CÚ PHÁP CHUYỂN KHOẢN" : "TRANSFER MEMO SYNTAX"}
              </span>
              
              <div className="w-full bg-white border border-slate-200/70 p-3 rounded-xl text-center font-mono font-bold text-xs text-slate-700 tracking-wide mt-3 shadow-sm select-all">
                {lang === "vi"
                  ? "[Họ tên] [Số điện thoại] [Nội dung]"
                  : "[Full Name] [Phone Number] [Memo Content]"}
              </div>

              <span className="text-[10px] text-slate-400 italic mt-2.5">
                {lang === "vi"
                  ? "Ví dụ: NGUYEN VAN A 0912345678 DONG HANH"
                  : "E.g., NGUYEN VAN A 0912345678 DONG HANH"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Volunteers, Mentors & Student Profile Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {/* Column 1: Đăng ký Tình nguyện viên */}
        <Link
          href="/volunteer"
          className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 text-left group"
        >
          <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold text-slate-800 text-xs md:text-sm lg:text-base group-hover:text-blue-900 transition-colors">
              {lang === "vi" ? "Đăng ký Tình nguyện viên" : "Register as a Volunteer"}
            </h4>
            <p className="text-slate-400 text-[10px] md:text-xs mt-0.5 font-medium leading-relaxed">
              {lang === "vi" ? "Cùng tham gia hỗ trợ hoạt động thiết thực." : "Join hands in our supportive activities."}
            </p>
          </div>
        </Link>

        {/* Column 2: Đăng ký làm Mentor */}
        <Link
          href="/mentor"
          className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 text-left group"
        >
          <div className="w-12 h-12 rounded-full bg-[#15803D] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold text-slate-800 text-xs md:text-sm lg:text-base group-hover:text-emerald-800 transition-colors">
              {lang === "vi" ? "Đăng ký làm Mentor" : "Register as a Mentor"}
            </h4>
            <p className="text-slate-400 text-[10px] md:text-xs mt-0.5 font-medium leading-relaxed">
              {lang === "vi" ? "Cố vấn định hướng học tập & nghề nghiệp." : "Guide students on studies and careers."}
            </p>
          </div>
        </Link>

        {/* Column 3: Giới thiệu hồ sơ sinh viên */}
        <Link
          href="/contact"
          className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-lime-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 text-left group"
        >
          <div className="w-12 h-12 rounded-full bg-[#84cc16] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold text-slate-800 text-xs md:text-sm lg:text-base group-hover:text-lime-700 transition-colors">
              {lang === "vi" ? "Giới thiệu hồ sơ sinh viên" : "Introduce Student Profile"}
            </h4>
            <p className="text-slate-400 text-[10px] md:text-xs mt-0.5 font-medium leading-relaxed">
              {lang === "vi" ? "Liên hệ đề xuất bảo trợ học bổng học viên." : "Contact us to recommend a student."}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
