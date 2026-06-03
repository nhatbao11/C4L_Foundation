"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
}

export default function Badge({ children, variant = "dark" }: BadgeProps) {
  const isLight = variant === "light";
  
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-sm select-none border transition-colors duration-300
      ${isLight 
        ? "bg-emerald-50 border-emerald-100" 
        : "bg-white/10 border-white/20"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
      </span>
      <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest font-mono transition-colors duration-300
        ${isLight ? "text-[#15803D]" : "text-white/90"}`}
      >
        {children}
      </span>
    </div>
  );
}
