"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function StudentStats() {
  const { lang } = useLanguage();

  const stats = {
    total: 387,
    active: 225,
    completed: 127,
    terminated: 35
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Card 1: Total */}
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
          <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">
            {lang === "vi" ? "Tổng số sinh viên" : "Total Students"}
          </span>
          <div className="text-2xl md:text-4xl font-black text-slate-900 mt-2 font-display">
            {stats.total}
          </div>
        </div>

        {/* Card 2: Active */}
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
          <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">
            {lang === "vi" ? "Đang nhận bảo trợ" : "Active Sponsorship"}
          </span>
          <div className="text-2xl md:text-4xl font-black text-emerald-600 mt-2 font-display">
            {stats.active}
          </div>
        </div>

        {/* Card 3: Completed */}
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
          <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">
            {lang === "vi" ? "Hoàn thành bảo trợ" : "Completed"}
          </span>
          <div className="text-2xl md:text-4xl font-black text-blue-600 mt-2 font-display">
            {stats.completed}
          </div>
        </div>

        {/* Card 4: Terminated */}
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
          <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">
            {lang === "vi" ? "Chấm dứt bảo trợ" : "Terminated"}
          </span>
          <div className="text-2xl md:text-4xl font-black text-red-600 mt-2 font-display">
            {stats.terminated}
          </div>
        </div>
      </div>

      {/* Ratio Progress Bar */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/60 shadow-sm mt-6">
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-display block mb-4">
          {lang === "vi" ? "Tỷ lệ hiện trạng" : "Status Ratio"}
        </span>

        {/* Progress segments */}
        <div className="w-full h-3 md:h-4 bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
          <div
            style={{ width: `${(stats.active / stats.total) * 100}%` }}
            className="bg-emerald-500 h-full transition-all duration-500"
            title={`Active: ${stats.active} (${((stats.active / stats.total) * 100).toFixed(1)}%)`}
          ></div>
          <div
            style={{ width: `${(stats.completed / stats.total) * 100}%` }}
            className="bg-blue-500 h-full transition-all duration-500"
            title={`Completed: ${stats.completed} (${((stats.completed / stats.total) * 100).toFixed(1)}%)`}
          ></div>
          <div
            style={{ width: `${(stats.terminated / stats.total) * 100}%` }}
            className="bg-red-500 h-full transition-all duration-500"
            title={`Terminated: ${stats.terminated} (${((stats.terminated / stats.total) * 100).toFixed(1)}%)`}
          ></div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-[11px] md:text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
            <span>
              {lang === "vi" ? "Đang nhận bảo trợ" : "Active Sponsorship"}: {stats.active} ({((stats.active / stats.total) * 100).toFixed(1)}%)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0"></span>
            <span>
              {lang === "vi" ? "Hoàn thành bảo trợ" : "Completed"}: {stats.completed} ({((stats.completed / stats.total) * 100).toFixed(1)}%)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0"></span>
            <span>
              {lang === "vi" ? "Chấm dứt bảo trợ" : "Terminated"}: {stats.terminated} ({((stats.terminated / stats.total) * 100).toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
