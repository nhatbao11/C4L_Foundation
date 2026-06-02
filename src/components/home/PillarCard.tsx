"use client";

import React from "react";

interface PillarCardProps {
  index: string;
  icon: React.ReactNode;
  status: "run" | "developing";
  statusText: string;
  title: string;
  desc: string;
  actionText: string;
}

export default function PillarCard({ index, icon, status, statusText, title, desc, actionText }: PillarCardProps) {
  const isRun = status === "run";

  return (
    <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-md border border-slate-100 hover:border-emerald-500/20 flex flex-col justify-between min-h-[300px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Index Number Watermark */}
      <span className="absolute -bottom-4 -right-2 text-8xl font-black font-sans text-slate-100 select-none pointer-events-none group-hover:text-emerald-50 group-hover:scale-105 transition-all duration-500">
        {index}
      </span>

      <div>
        {/* Top Header inside Card: Icon & Status Badge */}
        <div className="flex items-center justify-between gap-4 mb-8 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
            {icon}
          </div>
          <span className={`text-[9px] font-black tracking-wider px-2.5 py-1 rounded-full uppercase border font-mono ${
            isRun 
              ? "bg-emerald-50 text-emerald-700 border-emerald-200/50" 
              : "bg-amber-50 text-amber-700 border-amber-200/50"
          }`}>
            {statusText}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-display font-black text-lg text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-4 font-normal relative z-10">
          {desc}
        </p>
      </div>

      {/* Action footer */}
      <div className="text-left text-xs font-black text-emerald-700 font-mono mt-8 uppercase tracking-wider relative z-10 flex items-center gap-1 group-hover:text-emerald-600">
        <span>{actionText}</span>
        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
