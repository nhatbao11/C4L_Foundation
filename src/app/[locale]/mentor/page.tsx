"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/Badge";
import { useLanguage } from "@/components/LanguageContext";

export default function MentorPage() {
  const { lang } = useLanguage();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0e4b29] to-[#0a381e] text-white py-16 md:py-24 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Badge>
            {lang === "vi" ? "Đầu tư con người" : "Human Capital Investment"}
          </Badge>
          <h1 className="font-display font-black text-3xl md:text-5xl mt-6 tracking-tight leading-tight">
            {lang === "vi" ? "Đăng ký trở thành" : "Register to Become a"}{" "}
            <span className="text-lime-400 block mt-2">
              {lang === "vi" ? "Cố vấn (Mentor)" : "Mentor"}
            </span>
          </h1>
          <p className="text-emerald-100/90 text-sm md:text-base mt-6 max-w-xl mx-auto leading-relaxed">
            {lang === "vi"
              ? "Hãy cùng chia sẻ kiến thức, kỹ năng thực chiến và định hướng nghề nghiệp giúp sinh viên hoàn cảnh khó khăn trở thành Self-Made Professionals."
              : "Share your professional expertise, practical skills, and mentoring to guide underprivileged students towards becoming Self-Made Professionals."}
          </p>

          <div className="mt-8">
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(21,128,61,0.4)]"
            >
              <span>{lang === "vi" ? "Đăng ký ngay" : "Register Now"}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Vai trò của Mentor */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight uppercase">
          {lang === "vi" ? "Vai trò của Mentor" : "Your Role as a Mentor"}
        </h2>
        <p className="text-slate-500 text-xs md:text-sm mt-3 font-semibold">
          {lang === "vi"
            ? "Đồng hành dẫn dắt thế hệ tự lập vững vàng"
            : "Guiding the next generation toward solid independence"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {/* Card 1: Blue border */}
          <div className="bg-blue-50/10 border border-blue-100/80 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Định hướng nghề nghiệp và truyền lửa kỹ năng thực chiến (Sales, Marketing, E-commerce, Tech, AI)."
                  : "Provide career guidance and pass down hands-on practical skills (Sales, Marketing, E-commerce, Tech, AI)."}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Tư vấn, định hình tư duy giải quyết vấn đề, kinh nghiệm quản trị bản thân và tài chính cá nhân."
                  : "Advise on problem-solving strategies, personal management experience, and personal finance."}
              </p>
            </div>
          </div>

          {/* Card 2: Green border */}
          <div className="bg-emerald-50/10 border border-emerald-100/80 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#15803D] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Hướng dẫn và đồng hành cùng các dự án nghiên cứu, thực hành thực tế tại Lab của Quỹ."
                  : "Direct and support student-led research and real-world implementation projects in our Lab."}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#15803D] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Rèn luyện phẩm chất đạo đức, tính trung thực, kỷ luật sống và tư duy đáp đền (Pay-it-forward)."
                  : "Nurture ethical foundations, honesty, self-discipline, and a pay-it-forward mindset."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Thành phần Mentor */}
      <section className="bg-slate-100/50 border-y border-slate-200/50 py-16 md:py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight uppercase">
            {lang === "vi" ? "Thành phần Mentor" : "Who Can Mentor"}
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-3 font-semibold">
            {lang === "vi"
              ? "Hội tụ những chuyên gia tâm huyết"
              : "Gathering dedicated, professional minds"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {/* Card 1: Expert */}
            <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm text-left hover:shadow-md transition-shadow">
              <span className="text-2xl">💼</span>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base mt-4">
                {lang === "vi" ? "Chuyên gia & Quản lý" : "Corporate Specialists"}
              </h3>
              <p className="text-slate-400 text-xs mt-2.5 leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Các quản lý, chuyên viên dày dặn kinh nghiệm đến từ các tập đoàn lớn (MNCs) và doanh nghiệp năng động (SMEs)."
                  : "Seasoned specialists and management staff from large corporations (MNCs) and dynamic SMEs."}
              </p>
            </div>

            {/* Card 2: Entrepreneur */}
            <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm text-left hover:shadow-md transition-shadow">
              <span className="text-2xl">🚀</span>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base mt-4">
                {lang === "vi" ? "Doanh nhân & Sáng lập" : "Founders & Entrepreneurs"}
              </h3>
              <p className="text-slate-400 text-xs mt-2.5 leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Những người sáng lập doanh nghiệp đã lập nghiệp thành công, mong muốn truyền đạt bản lĩnh tự lập."
                  : "Successful company builders wishing to instill the traits of resilience and business acumen."}
              </p>
            </div>

            {/* Card 3: Lecturer */}
            <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm text-left hover:shadow-md transition-shadow">
              <span className="text-2xl">🤝</span>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base mt-4">
                {lang === "vi" ? "Giảng viên & Trainer" : "Lecturers & Trainers"}
              </h3>
              <p className="text-slate-400 text-xs mt-2.5 leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Các giảng viên đại học, chuyên gia đào tạo kỹ năng mềm giàu nhiệt huyết vì sự nghiệp phát triển con người."
                  : "Academic lecturers and soft-skill trainers devoted to personal development and positive impact."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Cam kết thời gian & GG Form Anchor */}
      <section id="register" className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Time commit banner */}
        <div className="bg-gradient-to-r from-[#0e4b29] to-[#15803D] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-emerald-800/40 border border-emerald-500/20 text-lime-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
              ⏱
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-extrabold text-base md:text-lg">
                {lang === "vi" ? "Cam kết thời gian" : "Time Commitment"}
              </h3>
              <p className="text-emerald-100/80 text-xs md:text-sm mt-1 max-w-xl font-medium leading-relaxed">
                {lang === "vi" ? (
                  <>
                    Để đồng hành hiệu quả, Quỹ mong muốn Mentor cam kết tối thiểu{" "}
                    <strong className="text-lime-300">2 - 4 tiếng/tháng</strong> để gặp gỡ (online/offline) và hỗ trợ sinh viên.
                  </>
                ) : (
                  <>
                    To maintain consistency, mentors are expected to commit at least{" "}
                    <strong className="text-lime-300">2 - 4 hours/month</strong> to meet (online/offline) and support students.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://docs.google.com/forms/d/e/xxx/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0e4b29] font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <span>{lang === "vi" ? "Đăng ký ngay" : "Sign Up Now"}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
