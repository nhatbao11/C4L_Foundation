"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactInfo() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col justify-between gap-8 h-full">
      <div className="flex flex-col">
        {/* Title with left border indicator */}
        <div className="border-l-4 border-[#15803D] pl-3 mb-8">
          <h2 className="font-display font-black text-xl md:text-2xl text-slate-800 tracking-tight uppercase">
            {lang === "vi" ? "Thông tin liên lạc" : "Contact Information"}
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-4">
          {/* Address Card */}
          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/20 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-[#15803D] flex-shrink-0 shadow-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-slate-900 text-sm">
                {lang === "vi" ? "Địa chỉ" : "Address"}
              </span>
              <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                {lang === "vi"
                  ? "595/6/21 Quốc Lộ 13, Khu Phố 3, Phường Hiệp Bình, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam"
                  : "595/6/21 National Route 13, Quarter 3, Hiep Binh Ward, Thu Duc City, Ho Chi Minh City, Vietnam"}
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/20 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-[#15803D] flex-shrink-0 shadow-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-slate-900 text-sm">Email</span>
              <a href="mailto:quyco4la@gmail.com" className="text-[#15803D] font-bold text-xs md:text-sm hover:underline">
                quyco4la@gmail.com
              </a>
            </div>
          </div>

          {/* Hotline Card */}
          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-amber-500/20 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 shadow-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-slate-900 text-sm">Hotline</span>
              <a href="tel:0901315630" className="text-amber-600 font-bold text-xs md:text-sm hover:underline">
                090 131 5630
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Note Box */}
      <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-[#15803D] font-bold text-sm">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{lang === "vi" ? "Lưu ý về quyên góp" : "Donation Note"}</span>
        </div>
        <p className="text-slate-600 text-xs md:text-sm mt-3 font-medium leading-relaxed">
          {lang === "vi" ? (
            <>
              Quỹ Cỏ Bốn Lá chỉ tiếp nhận quyên góp qua số tài khoản công khai trên trang{" "}
              <Link href="/transparency" className="text-[#15803D] font-bold hover:underline">
                Quyên góp
              </Link>
              .
            </>
          ) : (
            <>
              C4L Foundation only accepts donations through the public bank accounts listed on the{" "}
              <Link href="/transparency" className="text-[#15803D] font-bold hover:underline">
                Donations page
              </Link>
              .
            </>
          )}
        </p>

        {/* Warning badge */}
        <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 text-xs font-bold text-red-600">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>
            {lang === "vi"
              ? "Vui lòng cảnh giác với các hành vi mạo danh."
              : "Please be vigilant against impersonation attempts."}
          </span>
        </div>
      </div>
    </div>
  );
}
