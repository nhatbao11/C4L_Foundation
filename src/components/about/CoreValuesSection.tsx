"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function CoreValuesSection() {
  const { lang } = useLanguage();

  const coreValues = lang === "vi" ? [
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3v6c0 5.25-4.05 9.75-9 11-4.95-1.25-9-5.75-9-11V6z"/></svg>,
      title: "Công Bằng",
      desc: "Cơ hội được trao dựa trên tiềm năng và nỗ lực, không phân biệt vùng miền. Quy trình xét duyệt minh bạch, đa chiều."
    },
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      title: "Công Nhận",
      desc: "Mỗi nỗ lực và thành tích đều được ghi nhận công khai qua hệ thống đánh giá định kỳ và phản hồi trực tiếp."
    },
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
      title: "Công Tâm",
      desc: "Hành động xuất phát từ tấm lòng chân thành. Ban điều hành và Mentor cống hiến bằng tình thương và trách nhiệm cộng đồng."
    },
  ] : [
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3v6c0 5.25-4.05 9.75-9 11-4.95-1.25-9-5.75-9-11V6z"/></svg>,
      title: "Fairness",
      desc: "Opportunities are granted based on potential and effort, not origin. The review process is transparent and multi-dimensional."
    },
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      title: "Recognition",
      desc: "Every effort is publicly acknowledged through periodic review systems and direct mentor feedback sessions."
    },
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
      title: "Sincerity",
      desc: "All actions stem from genuine care. Board members and Mentors contribute with love and community responsibility."
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
            {lang === "vi" ? "Nền Tảng" : "Foundation"}
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mt-3 uppercase tracking-widest">
            {lang === "vi" ? "Giá Trị Cốt Lõi" : "Core Values"}
          </h2>
          <div className="w-24 h-1 bg-[#15803D] mx-auto mt-4 rounded-full"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto text-[#15803D] mb-5">
                {v.icon}
              </div>
              <h3 className="font-display font-extrabold text-sm uppercase tracking-widest text-slate-900">{v.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mt-3">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
