"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="vi">
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col items-center justify-center p-6 antialiased">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
          <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-slate-800 mb-2">
            Đã xảy ra lỗi nghiêm trọng / Critical System Error
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-6 max-w-[280px] mx-auto">
            Hệ thống gặp sự cố tải trang nghiêm trọng. Vui lòng tải lại hoặc thử lại sau.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-[13.5px] transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer"
          >
            Tải lại trang / Retry
          </button>
        </div>
      </body>
    </html>
  );
}
