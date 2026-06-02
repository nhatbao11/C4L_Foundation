"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function QRAccountDetails() {
  const { lang } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="bg-[#15803D] text-white rounded-3xl p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest leading-none">
            {lang === "vi" ? "Tài khoản bảo trợ chính thức" : "Official Escrow Account"}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-black mt-4 leading-snug uppercase">
            {lang === "vi" ? "QUỸ HỌC BỔNG CỎ BỐN LÁ" : "C4L SCHOLARSHIP FUND"}
          </h3>

          <div className="mt-8 flex flex-col gap-4 text-xs md:text-sm text-emerald-100/90 font-medium">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-base md:text-lg">🏦</span>
              <span>Ngân hàng: MB Bank (Ngân hàng Quân Đội)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-base md:text-lg">🔢</span>
              <span>Số tài khoản: 0901315630</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-base md:text-lg">👤</span>
              <span>Chủ tài khoản: NGUYEN VAN BAO</span>
            </div>
          </div>

          <p className="text-[11px] text-emerald-200/80 leading-relaxed mt-8 font-normal">
            {lang === "vi"
              ? "* Lưu ý: Vui lòng ghi rõ nội dung chuyển khoản gồm Họ tên và Số điện thoại để hệ thống gửi thư cảm ơn tự động kèm sao kê."
              : "* Note: Please state your Full Name and Phone Number in the transfer memo for our automated ledger system to process details."}
          </p>
        </div>

        {/* QR Box */}
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center gap-4 shadow-lg flex-shrink-0 w-full md:w-auto">
          <div className="w-48 h-48 bg-slate-100 rounded-xl flex items-center justify-center font-mono text-xs text-slate-400 font-bold border border-slate-200">
            VietQR Mockup
          </div>
          <span className="text-slate-800 text-xs font-extrabold uppercase tracking-wide">
            {lang === "vi" ? "Quét để chuyển khoản" : "Scan to Transfer"}
          </span>
        </div>
      </div>
    </section>
  );
}
