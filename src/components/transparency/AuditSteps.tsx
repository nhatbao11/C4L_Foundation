"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function AuditSteps() {
  const { lang } = useLanguage();

  const auditSteps = lang === "vi" ? [
    {
      title: "1. Nhận quyên góp tự động",
      desc: "Mọi khoản đóng góp qua VietQR được nhận dạng tức thì thông qua cổng webhook ngân hàng và cập nhật trực tiếp lên sổ cái."
    },
    {
      title: "2. Sổ cái công khai (Public Ledger)",
      desc: "Bảng sao kê số dư ngân hàng và lịch sử thu chi được cập nhật theo thời gian thực tại trang minh bạch."
    },
    {
      title: "3. Tối giản chi phí vận hành",
      desc: "Toàn bộ nhân sự quản lý kỹ thuật, nội dung và vận hành đều do sinh viên C4L đóng góp công sức, giúp tối giản chi phí về 0."
    }
  ] : [
    {
      title: "1. Automated Donation Tracking",
      desc: "Every donation via VietQR is immediately matched through banking API webhooks and pushed to our public log."
    },
    {
      title: "2. Real-Time Public Ledger",
      desc: "Bank statements, current balances, and receipt logs are synced in real-time on our transparency portal."
    },
    {
      title: "3. Zero Operating Overhead",
      desc: "System engineering, copywriting, and daily maintenance are handled by C4L students, lowering corporate overhead to zero."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {auditSteps.map((step, idx) => (
        <div key={idx} className="bg-white border border-slate-200/50 rounded-2xl p-8 shadow-sm">
          <h3 className="font-display font-extrabold text-base md:text-lg text-slate-900">
            {step.title}
          </h3>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-4 font-normal">
            {step.desc}
          </p>
        </div>
      ))}
    </section>
  );
}
