"use client";

import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error("Application error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] w-full px-5 py-12 text-center">
      {/* Connection/System Error Icon */}
      <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
        <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-2">
        {t("title")}
      </h2>
      <p className="text-xs text-slate-500 leading-relaxed mb-8 max-w-sm mx-auto">
        {t("description")}
      </p>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-[13px] transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer"
        >
          {t("retry")}
        </button>
        <a
          href="/"
          className="px-6 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-all active:scale-98 text-center"
        >
          {t("goHome")}
        </a>
      </div>
    </div>
  );
}
