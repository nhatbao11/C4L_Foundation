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
        <div className="border-l-4 border-[#15803D] pl-4 mb-8">
          <h2 className="font-display font-extrabold text-xl md:text-2xl text-slate-800 tracking-tight uppercase">
            {lang === "vi" ? "Thông tin liên lạc" : "Contact Information"}
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-5">
          {/* Address Card (Fully clickable to Google Maps) */}
          <a
            href="https://maps.app.goo.gl/uYn6R2u9G1zQy64L9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1.5 hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#15803D] group-hover:bg-[#15803D] group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-[-2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-slate-900 text-sm group-hover:text-[#15803D] transition-colors">
                {lang === "vi" ? "Địa chỉ văn phòng" : "Office Address"}
              </span>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                {lang === "vi"
                  ? "595/6/21 Quốc Lộ 13, Khu Phố 3, Phường Hiệp Bình, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam"
                  : "595/6/21 National Route 13, Quarter 3, Hiep Binh Ward, Thu Duc City, Ho Chi Minh City, Vietnam"}
              </p>
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-5px] group-hover:translate-x-0">
                {lang === "vi" ? "Xem bản đồ" : "View map"} &rarr;
              </span>
            </div>
          </a>

          {/* Email Card (Fully clickable to Mailto) */}
          <a
            href="mailto:quyco4la@gmail.com"
            className="flex items-start gap-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1.5 hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#15803D] group-hover:bg-[#15803D] group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-slate-900 text-sm group-hover:text-[#15803D] transition-colors">Email</span>
              <span className="text-[#15803D] font-bold text-xs md:text-sm underline decoration-emerald-200 underline-offset-4 group-hover:decoration-emerald-500 group-hover:text-[#0e4b29] transition-all">
                quyco4la@gmail.com
              </span>
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-5px] group-hover:translate-x-0">
                {lang === "vi" ? "Gửi thư điện tử" : "Send email"} &rarr;
              </span>
            </div>
          </a>

          {/* Hotline Card (Fully clickable to Tel) */}
          <a
            href="tel:0901315630"
            className="flex items-start gap-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1.5 hover:shadow-md hover:border-amber-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">Hotline</span>
              <span className="text-amber-600 font-bold text-xs md:text-sm underline decoration-amber-200 underline-offset-4 group-hover:decoration-amber-500 group-hover:text-amber-800 transition-all">
                090 131 5630
              </span>
              <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-5px] group-hover:translate-x-0">
                {lang === "vi" ? "Gọi điện ngay" : "Call now"} &rarr;
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Donation Note Box */}
      <div className="bg-emerald-50/40 border border-emerald-100 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2.5 text-[#15803D] font-bold text-sm">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-[#15803D]">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="uppercase tracking-wider font-mono text-xs">{lang === "vi" ? "Lưu ý quyên góp" : "Donation Note"}</span>
        </div>
        <p className="text-slate-600 text-xs md:text-sm mt-4 font-normal leading-relaxed">
          {lang === "vi" ? (
            <>
              Quỹ Cỏ Bốn Lá chỉ tiếp nhận quyên góp qua số tài khoản công khai trên trang{" "}
              <Link href="/transparency" className="text-[#15803D] font-extrabold hover:underline">
                Quyên góp
              </Link>
              .
            </>
          ) : (
            <>
              C4L Foundation only accepts donations through the public bank accounts listed on the{" "}
              <Link href="/transparency" className="text-[#15803D] font-extrabold hover:underline">
                Donations page
              </Link>
              .
            </>
          )}
        </p>

        {/* Warning badge */}
        <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-red-50 border border-red-100 text-xs font-bold text-red-600">
          <svg className="w-4 h-4 flex-shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
