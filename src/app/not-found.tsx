"use client";

import React from "react";

export default function RootNotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[75vh] w-full px-5 py-12 text-center">
      {/* Icon */}
      <div className="w-14 h-14 bg-emerald-50 text-[#15803D] rounded-full flex items-center justify-center mb-6">
        <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      {/* Title */}
      <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-2">
        Không tìm thấy trang / Page Not Found
      </h2>
      <p className="text-xs text-slate-500 max-w-sm mb-8 leading-relaxed">
        Trang bạn tìm kiếm không tồn tại hoặc đã được chuyển sang địa chỉ khác.
        <span className="block mt-1 text-[11px] text-slate-400">The page you are looking for does not exist or has been moved.</span>
      </p>

      {/* Button */}
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-[13px] transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer"
      >
        <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại Trang chủ / Back to Home
      </a>
    </div>
  );
}
