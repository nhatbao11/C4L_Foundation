"use client";

import React, { useState } from "react";
import ApplicationForm from "@/components/ApplicationForm";
import { useLanguage } from "@/components/LanguageContext";

export default function RecruitmentFormSection() {
  const { lang } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-slate-100/50 py-16 md:py-24 border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-widest text-slate-950 uppercase">
            {lang === "vi" ? "CỔNG ĐĂNG KÝ HỌC BỔNG / ĐỒNG HÀNH" : "SCHOLARSHIP & MENTORSHIP SIGN-UP"}
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-3 max-w-xl mx-auto font-medium">
            {lang === "vi"
              ? "Dành cho các bạn sinh viên khó khăn có tinh thần rèn luyện tự lập và các nhà hảo tâm muốn đồng hành cố vấn học viên."
              : "For aspiring students who strive for self-reliance and sponsors/mentors looking to support our students."}
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-emerald-700/10 hover:-translate-y-0.5"
          >
            <span>
              {showForm
                ? lang === "vi"
                  ? "Thu gọn biểu mẫu"
                  : "Collapse Form"
                : lang === "vi"
                ? "Mở biểu mẫu đăng ký"
                : "Open Application Form"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${showForm ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showForm ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
}
