"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../app/data";

export default function BudgetCalculator() {
  const { lang } = useLanguage();
  const [checkedContributions, setCheckedContributions] = useState<boolean[]>([
    true, // Tech
    true, // Design
    true, // Content
    true  // Ops
  ]);

  const t = translations[lang].transparency;

  const contributionValues = [20000000, 10000000, 8000000, 5000000];
  const totalSaved = checkedContributions.reduce(
    (acc, checked, idx) => (checked ? acc + contributionValues[idx] : acc),
    0
  );
  
  const cashCost = 500000; // Domain cost VND

  const toggleContribution = (index: number) => {
    const updated = [...checkedContributions];
    updated[index] = !updated[index];
    setCheckedContributions(updated);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
      
      {/* Left interactive panel */}
      <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <h3 className="font-display font-extrabold text-xl text-slate-900">
              {lang === "vi" ? "Mô Phỏng Trực Quan Đóng Góp" : "Interactive Value Estimator"}
            </h3>
            <span className="text-xs font-bold text-white bg-emerald-700 px-3 py-1 rounded-full uppercase tracking-wider">
              Interactive
            </span>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {lang === "vi"
              ? "Bật/Tắt các công việc dưới đây để xem sinh viên Cỏ Bốn Lá đóng góp công sức thiết thực như thế nào để giúp giảm bớt chi phí mặt bằng và nhân lực cho Quỹ học bổng."
              : "Toggle the categories below to see how student effort offsets corporate operating expenditures for the foundation."}
          </p>

          <div className="flex flex-col gap-4">
            {t.contributions.map((contr: any, idx: number) => (
              <button
                key={idx}
                onClick={() => toggleContribution(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                  checkedContributions[idx]
                    ? "bg-white border-emerald-800/20 shadow-sm text-slate-900"
                    : "bg-slate-100/55 border-slate-200 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${
                    checkedContributions[idx] ? "bg-[#15803D] border-[#15803D] text-white" : "border-slate-300 bg-white"
                  }`}>
                    {checkedContributions[idx] && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <span className="block font-bold text-sm md:text-base">{contr.role}</span>
                    <span className="block text-xs text-slate-500 mt-1">{contr.tasks}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className={`block font-display font-black text-sm md:text-base ${
                    checkedContributions[idx] ? "text-[#15803D]" : "text-slate-400"
                  }`}>
                    {contr.value}
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">{lang === "vi" ? "Giá trị quy đổi" : "Equivalent Value"}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          <div className="bg-[#15803D] text-white p-6 rounded-2xl shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-800/20 rounded-full blur-lg pointer-events-none"></div>
            <span className="block text-xs text-emerald-200 font-bold uppercase tracking-widest leading-none">
              {lang === "vi" ? "Sinh viên đóng góp" : "Students Contributed"}
            </span>
            <span className="block font-display text-2xl md:text-3xl font-black mt-2 tracking-tight">
              {totalSaved.toLocaleString()}đ
            </span>
            <span className="block text-xs text-emerald-200/80 mt-1">
              {lang === "vi" ? "Quy đổi chi phí nhân lực" : "Equivalent manpower saved"}
            </span>
          </div>

          <div className="bg-slate-200/60 p-6 rounded-2xl border border-slate-200 shadow-inner">
            <span className="block text-xs text-slate-500 font-bold uppercase tracking-widest leading-none">
              {lang === "vi" ? "Chi phí mặt bằng SaaS" : "Cash SaaS Expenses"}
            </span>
            <span className="block font-display text-2xl md:text-3xl font-black text-slate-800 mt-2 tracking-tight">
              {cashCost.toLocaleString()}đ / {lang === "vi" ? "năm" : "year"}
            </span>
            <span className="block text-xs text-slate-500 mt-1">
              {lang === "vi" ? "Tên miền chính thức (.org)" : "Domain registry costs"}
            </span>
          </div>

        </div>

        <div className="bg-emerald-50 border border-emerald-700/10 rounded-xl p-5 mt-6">
          <p className="text-xs md:text-sm text-emerald-900 leading-relaxed font-semibold">
            💡 <strong>{lang === "vi" ? "Nhận định chiến lược:" : "Strategic insight:"}</strong> {lang === "vi" 
              ? "Bằng cách để sinh viên trực tiếp tham gia xây dựng và vận hành dự án, Cỏ Bốn Lá giảm thiểu chi phí cố định xuống mức tối giản. Nhờ đó, 100% dòng tiền quyên góp được chuyển thẳng đến học bổng và ký túc xá cho học viên."
              : "By engaging students directly in building and managing Co 4 La software, fixed costs are minimized. Consequently, 100% of donor funding goes directly to scholarship grants and housing operations."}
          </p>
        </div>

      </div>

      {/* Right side static table */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="bg-white border border-slate-200/70 rounded-3xl p-8 md:p-10 shadow-sm flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-4 mb-4">
              {t.budgetTitle}
            </h3>
            
            <div className="flex flex-col gap-4">
              {t.budgetItems.map((item: any, idx: number) => (
                <div key={idx} className="flex items-start justify-between gap-3 text-xs md:text-sm py-3 border-b border-slate-100/50 last:border-0">
                  <div>
                    <span className="block font-bold text-slate-800">{item.name}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{item.provider}</span>
                    <span className="block text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`inline-block px-3 py-1 rounded-full font-bold text-xs ${
                      item.type === "cost" ? "bg-red-50 text-red-700 border border-red-100" : "bg-emerald-50 text-[#15803D] border border-emerald-100"
                    }`}>
                      {item.cost}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100">
            <a
              href="/transparency"
              className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-center text-xs md:text-sm block transition-all shadow-md"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
