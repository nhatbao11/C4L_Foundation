"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Inline styles for custom minimalist animation keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loadingSlide {
          0% { left: -40%; width: 40%; }
          50% { width: 30%; }
          100% { left: 100%; width: 40%; }
        }
        .animate-loading-slide {
          position: absolute;
          height: 100%;
          background-color: #15803D;
          border-radius: 9999px;
          animation: loadingSlide 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} />
      
      <div className="flex flex-col items-center select-none">
        {/* Typographic Logo */}
        <div className="flex flex-col items-center mb-5">
          <span className="font-sans font-black text-[#0e4b29] text-3xl tracking-tight leading-none">
            C4L
          </span>
          <span className="text-[9px] font-black tracking-[0.35em] uppercase text-emerald-800/80 block mt-2 leading-none">
            FOUNDATION
          </span>
        </div>

        {/* Minimalist, ultra-thin Progress Line */}
        <div className="w-24 h-[1.5px] bg-slate-100 rounded-full overflow-hidden relative">
          <div className="animate-loading-slide" />
        </div>
      </div>
    </div>
  );
}
