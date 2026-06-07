"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/Badge";
import { useLanguage } from "@/components/LanguageContext";

export default function VolunteerPage() {
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
            {lang === "vi" ? "Đồng hành phát triển" : "Grow Together"}
          </Badge>
          <h1 className="font-display font-black text-3xl md:text-5xl mt-6 tracking-tight leading-tight">
            {lang === "vi" ? "Đăng ký trở thành" : "Register to Become a"}{" "}
            <span className="text-lime-400 block mt-2">
              {lang === "vi" ? "Tình nguyện viên" : "Volunteer"}
            </span>
          </h1>
          <p className="text-emerald-100/90 text-sm md:text-base mt-6 max-w-xl mx-auto leading-relaxed">
            {lang === "vi"
              ? "Quỹ Cỏ Bốn Lá chân thành cảm ơn Bạn đã quan tâm đồng hành cùng Quỹ. Hãy cùng chung tay trao cơ hội và hỗ trợ sinh viên khó khăn vươn lên tự lập."
              : "Co 4 La Foundation sincerely thanks you for your interest. Join us in providing opportunities and supporting underprivileged students in achieving self-reliance."}
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

      {/* Section 2: Vai trò của bạn */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight uppercase">
          {lang === "vi" ? "Vai trò của bạn" : "Your Role"}
        </h2>
        <p className="text-slate-500 text-xs md:text-sm mt-3 font-semibold">
          {lang === "vi"
            ? "Những việc làm nhỏ bé nhưng mang lại ý nghĩa lớn lao"
            : "Small deeds that carry profound significance"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {/* Card 1: Blue border */}
          <div className="bg-blue-50/10 border border-blue-100/80 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Đồng hành, hỗ trợ hướng dẫn học tập và định hướng nghề nghiệp thực tế cho sinh viên."
                  : "Accompany, guide academic pathways and offer practical career orientation for students."}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Động viên, khuyến khích các em tích cực tham gia rèn luyện tại Ký túc xá Cỏ 4 Lá Home và các hoạt động công đồng."
                  : "Encourage students to practice self-discipline at Co 4 La Home dormitory and engage in community outreach."}
              </p>
            </div>
          </div>

          {/* Card 2: Green border */}
          <div className="bg-emerald-50/10 border border-emerald-100/80 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#15803D] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Tham gia/đồng tổ chức các dự án thực chiến (AI Lab, E-commerce Lab, Sales...) cùng sinh viên."
                  : "Participate or co-organize practical learning projects (AI Lab, E-commerce Lab, Sales...) alongside students."}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#15803D] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Lắng nghe, sẻ chia và truyền đạt kinh nghiệm thực tế giúp các em có tư duy tự lập chính trực."
                  : "Listen, share, and impart real-world experiences that instill an independent and ethical mindset."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Thành phần tham gia */}
      <section className="bg-slate-100/50 border-y border-slate-200/50 py-16 md:py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight uppercase">
            {lang === "vi" ? "Thành phần tham gia" : "Who Can Join"}
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-3 font-semibold">
            {lang === "vi"
              ? "Chúng tôi chào đón sự đồng hành từ mọi giới"
              : "We welcome companions from all walks of life"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {/* Card 1: School */}
            <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm text-left hover:shadow-md transition-shadow">
              <span className="text-2xl">🏫</span>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base mt-4">
                {lang === "vi" ? "Chuyên gia & Quản lý" : "SME & MNC Managers"}
              </h3>
              <p className="text-slate-400 text-xs mt-2.5 leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Các anh chị đi trước, quản lý từ các MNCs & SMEs giàu kinh nghiệm thực chiến mong muốn chuyển giao tri thức."
                  : "Experienced leads from MNCs and SMEs willing to pass down corporate insights and skills."}
              </p>
            </div>

            {/* Card 2: Document */}
            <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm text-left hover:shadow-md transition-shadow">
              <span className="text-2xl">🎓</span>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base mt-4">
                {lang === "vi" ? "Cựu sinh viên & Học viên" : "Alumni & Senior Students"}
              </h3>
              <p className="text-slate-400 text-xs mt-2.5 leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Những thế hệ đi trước quay lại dẫn dắt và hỗ trợ thế hệ đàn em đi sau theo tinh thần đáp đền (Pay-it-forward)."
                  : "Former scholarship students returning to guide and uplift junior peers in a pay-it-forward cycle."}
              </p>
            </div>

            {/* Card 3: Graduate cap */}
            <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm text-left hover:shadow-md transition-shadow">
              <span className="text-2xl">🤝</span>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base mt-4">
                {lang === "vi" ? "Cá nhân hảo tâm" : "Altruistic Individuals"}
              </h3>
              <p className="text-slate-400 text-xs mt-2.5 leading-relaxed font-semibold">
                {lang === "vi"
                  ? "Bất cứ ai mong muốn cống hiến thời gian, kiến thức chuyên môn hoặc tấm lòng để cùng kiến tạo thế hệ sinh viên tử tế."
                  : "Anyone interested in contributing time, expertise, or warmth to nurture a generation of decent youths."}
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
                    Để đảm bảo hiệu quả đồng hành cùng các em, Quỹ mong muốn Tình nguyện viên dành thời gian ít nhất{" "}
                    <strong className="text-lime-300">4 - 8 tiếng/tháng</strong> để tham gia vào các hoạt động.
                  </>
                ) : (
                  <>
                    To ensure impact, we kindly request a volunteer commitment of at least{" "}
                    <strong className="text-lime-300">4 - 8 hours/month</strong> to join our activities.
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
