"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../app/data";

interface ApplicationFormProps {
  initialTab?: "student" | "partner";
}

export default function ApplicationForm({ initialTab = "student" }: ApplicationFormProps) {
  const { lang } = useLanguage();
  const [applyTab, setApplyTab] = useState<"student" | "partner">(initialTab);
  
  // Student State
  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: "",
    loading: false,
    submitted: false
  });

  // Partner State
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Mentor",
    company: "",
    message: "",
    loading: false,
    submitted: false
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[lang].apply;

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentForm.name || !studentForm.email || !studentForm.phone) {
      setToastMessage(lang === "vi" ? "Vui lòng nhập đầy đủ các thông tin bắt buộc." : "Please fill in all required fields.");
      return;
    }
    setStudentForm(prev => ({ ...prev, loading: true }));
    setTimeout(() => {
      setStudentForm(prev => ({ ...prev, loading: false, submitted: true }));
      setToastMessage(null);
    }, 1200);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.email || !partnerForm.phone) {
      setToastMessage(lang === "vi" ? "Vui lòng nhập đầy đủ các thông tin bắt buộc." : "Please fill in all required fields.");
      return;
    }
    setPartnerForm(prev => ({ ...prev, loading: true }));
    setTimeout(() => {
      setPartnerForm(prev => ({ ...prev, loading: false, submitted: true }));
      setToastMessage(null);
    }, 1200);
  };

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12">
      
      {/* Informative column */}
      <div className="md:col-span-5 bg-[#15803D] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800/20 rounded-full blur-xl pointer-events-none"></div>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
            {lang === "vi" ? "Triết lý tuyển chọn" : "Selection Philosophy"}
          </span>
          
          <h3 className="font-display text-2xl md:text-3xl font-black text-white mt-4 leading-snug">
            {applyTab === "student" ? t.studentTitle : t.partnerTitle}
          </h3>
          
          <p className="text-sm text-emerald-100/90 leading-relaxed mt-5">
            {applyTab === "student" ? t.studentDesc : t.partnerDesc}
          </p>

          {applyTab === "student" && (
            <div className="mt-10">
              <span className="block font-bold text-xs md:text-sm uppercase text-emerald-300 tracking-wider mb-4 font-display">
                {t.criteriaTitle}
              </span>
              <ul className="flex flex-col gap-3.5 text-xs md:text-sm text-emerald-100/90">
                {t.criteria.map((crt: string, index: number) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                    <span>{crt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 pt-6 border-t border-emerald-900/50 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center font-bold text-xs text-emerald-300">
            {lang === "vi" ? "Cỏ 4 Lá" : "Co 4 La"}
          </div>
          <div>
            <span className="block text-xs font-bold text-white uppercase tracking-wider">{lang === "vi" ? "Quỹ Cỏ 4 Lá" : "Co 4 La Foundation"}</span>
            <span className="block text-[10px] text-emerald-400">{lang === "vi" ? "Kiến tạo tương lai" : "Empowering tomorrow"}</span>
          </div>
        </div>
      </div>

      {/* Inputs Column */}
      <div className="md:col-span-7 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-between">
        <div>
          {/* Tabs */}
          <div className="flex bg-slate-100 rounded-xl p-1 mb-8 border border-slate-200/50">
            <button
              onClick={() => setApplyTab("student")}
              className={`flex-1 text-center py-3.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                applyTab === "student" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t.studentTab}
            </button>
            <button
              onClick={() => setApplyTab("partner")}
              className={`flex-1 text-center py-3.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                applyTab === "partner" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t.partnerTab}
            </button>
          </div>

          {toastMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs md:text-sm font-semibold">
              ⚠️ {toastMessage}
            </div>
          )}

          {applyTab === "student" ? (
            studentForm.submitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center gap-5">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-[#15803D] animate-bounce">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-xl text-slate-900">{lang === "vi" ? "Gửi thông tin thành công!" : "Application Sent!"}</h4>
                <p className="text-xs md:text-sm text-slate-500 max-w-sm leading-relaxed">{t.form.success}</p>
                <button
                  onClick={() => setStudentForm(prev => ({ ...prev, submitted: false, name: "", email: "", phone: "", university: "", message: "" }))}
                  className="mt-6 px-6 py-2.5 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs md:text-sm font-bold text-emerald-800"
                >
                  {lang === "vi" ? "Gửi mẫu khác" : "Submit another form"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleStudentSubmit} className="flex flex-col gap-5 text-xs md:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 mb-2">{t.form.name} *</label>
                  <input
                    type="text"
                    required
                    value={studentForm.name}
                    onChange={e => setStudentForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder={lang === "vi" ? "Ví dụ: Nguyễn Văn A" : "e.g., John Doe"}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">{t.form.email} *</label>
                    <input
                      type="email"
                      required
                      value={studentForm.email}
                      onChange={e => setStudentForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="name@university.edu.vn"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">{t.form.phone} *</label>
                    <input
                      type="tel"
                      required
                      value={studentForm.phone}
                      onChange={e => setStudentForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="e.g., 0987654321"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-2">{t.form.university} *</label>
                  <input
                    type="text"
                    required
                    value={studentForm.university}
                    onChange={e => setStudentForm(prev => ({ ...prev, university: e.target.value }))}
                    placeholder={lang === "vi" ? "Trường Đại học Bách Khoa TP.HCM" : "e.g., University name"}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-2">{t.form.message}</label>
                  <textarea
                    rows={4}
                    value={studentForm.message}
                    onChange={e => setStudentForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder={lang === "vi" ? "Hãy viết đôi dòng chân thực về hoàn cảnh hiện tại, mục tiêu rèn luyện và cam kết tự lập..." : "Describe your goals and commitment details..."}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={studentForm.loading}
                  className="w-full mt-3 py-4 px-6 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 text-xs md:text-sm tracking-wider uppercase"
                >
                  {studentForm.loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : t.form.submit}
                </button>
              </form>
            )
          ) : (
            partnerForm.submitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center gap-5">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-[#15803D] animate-bounce">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-xl text-slate-900">{lang === "vi" ? "Gửi thông tin thành công!" : "Registration Sent!"}</h4>
                <p className="text-xs md:text-sm text-slate-500 max-w-sm leading-relaxed">{t.form.success}</p>
                <button
                  onClick={() => setPartnerForm(prev => ({ ...prev, submitted: false, name: "", email: "", phone: "", company: "", message: "" }))}
                  className="mt-6 px-6 py-2.5 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs md:text-sm font-bold text-emerald-800"
                >
                  {lang === "vi" ? "Gửi mẫu khác" : "Submit another form"}
                </button>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="flex flex-col gap-5 text-xs md:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 mb-2">{t.form.name} *</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.name}
                    onChange={e => setPartnerForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder={lang === "vi" ? "Ví dụ: Nguyễn Văn A" : "e.g., John Doe"}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">{t.form.email} *</label>
                    <input
                      type="email"
                      required
                      value={partnerForm.email}
                      onChange={e => setPartnerForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">{t.form.phone} *</label>
                    <input
                      type="tel"
                      required
                      value={partnerForm.phone}
                      onChange={e => setPartnerForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="e.g., 0987654321"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">{t.form.role}</label>
                    <select
                      value={partnerForm.role}
                      onChange={e => setPartnerForm(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 bg-white text-sm"
                    >
                      <option value="Mentor">Mentor (Định hướng & Cố vấn)</option>
                      <option value="Sponsor">Sponsor (Đóng góp quỹ học bổng)</option>
                      <option value="Partner">Corporate Partner (Đối tác E-commerce/E-lab)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">{t.form.company}</label>
                    <input
                      type="text"
                      value={partnerForm.company}
                      onChange={e => setPartnerForm(prev => ({ ...prev, company: e.target.value }))}
                      placeholder={lang === "vi" ? "Ví dụ: Vinamilk / Unilever" : "e.g., Company name"}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-2">{t.form.message}</label>
                  <textarea
                    rows={3}
                    value={partnerForm.message}
                    onChange={e => setPartnerForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder={lang === "vi" ? "Đề xuất nội dung hợp tác hoặc mong muốn đồng hành phát triển cùng Quỹ Cỏ 4 Lá." : "Describe your proposal details..."}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] transition-all text-slate-800 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={partnerForm.loading}
                  className="w-full mt-3 py-4 px-6 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 text-xs md:text-sm tracking-wider uppercase"
                >
                  {partnerForm.loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : t.form.submit}
                </button>
              </form>
            )
          )}
        </div>
      </div>

    </div>
  );
}
