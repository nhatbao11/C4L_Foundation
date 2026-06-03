"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Hybrid4LSection() {
  const { lang } = useLanguage();

  const hybridModel = lang === "vi" ? [
    {
      badge: "RUN",
      title: "Tài Chính (Run)",
      desc: "Học bổng và hỗ trợ chi phí học tập gắn liền với KPI duy trì. Giúp sinh viên trân quý nguồn lực và chịu trách nhiệm 100% với sự tiến bộ của bản thân.",
      features: ["Học bổng học kỳ", "Chi phí sinh hoạt cơ bản", "Đánh giá kết quả (KPI) định kỳ"]
    },
    {
      badge: "DEVELOPING",
      title: "An Cư (Dormitory)",
      desc: "Hệ thống ký túc xá kỷ luật tự quản giúp rèn nếp sống tự chủ, văn minh, ngăn nắp và nuôi dưỡng tinh thần đồng đội gắn kết.",
      features: ["Nếp sống kỷ luật tự quản", "Môi trường sống an toàn", "Hoạt động tập thể thường niên"]
    },
    {
      badge: "DEVELOPING",
      title: "Mentoring (Cố Vấn)",
      desc: "Chương trình cố vấn 1-1 đồng hành bởi các chuyên gia, quản lý cấp trung và cấp cao từ các tập đoàn lớn (MNCs) và doanh nghiệp (SMEs).",
      features: ["Định hướng nghề nghiệp 1-1", "Học hỏi từ chuyên gia thực tế", "Mở rộng mạng lưới kết nối"]
    },
    {
      badge: "DEVELOPING",
      title: "Thực Chiến (Practical Lab)",
      desc: "Làm thật qua các dự án thực tế tại E-commerce Lab, ứng dụng AI và Sales. Trang bị kinh nghiệm thực chiến trước khi chính thức ra trường.",
      features: ["Dự án E-commerce Lab", "Ứng dụng AI & Công cụ số", "Thực chiến kinh doanh & Sales"]
    }
  ] : [
    {
      badge: "RUN",
      title: "Financial Aid (Run)",
      desc: "Scholarships and living expenses linked with specific performance KPIs, fostering appreciation of resources and 100% self-accountability.",
      features: ["Semester scholarships", "Basic living cost support", "Periodic KPI evaluations"]
    },
    {
      badge: "DEVELOPING",
      title: "Housing (Dormitory)",
      desc: "Self-managed, highly disciplined dormitories that cultivate organized living habits, civil responsibility, and camaraderie.",
      features: ["Disciplined self-governance", "Safe & healthy environment", "Annual community events"]
    },
    {
      badge: "DEVELOPING",
      title: "Mentoring (Mentorship)",
      desc: "1-on-1 mentorship programs guided by industry experts and senior managers from leading MNCs and dynamic SMEs.",
      features: ["1-on-1 career pathing", "Practical expert advice", "Professional networking"]
    },
    {
      badge: "DEVELOPING",
      title: "Practical Lab (Doing)",
      desc: "Hands-on experience through actual projects in E-commerce Labs, AI implementation, and Sales drives to build work experience.",
      features: ["E-commerce Lab projects", "AI & digital tools integration", "Real-world sales experience"]
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#15803D] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
            {lang === "vi" ? "Mô hình vận hành" : "Operational Model"}
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-slate-900 mt-4 uppercase tracking-widest">
            {lang === "vi" ? "Mô Hình Hoạt Động Hybrid 4L" : "Hybrid 4L Ecosystem"}
          </h2>
          <div className="w-24 h-1 bg-[#15803D] mx-auto mt-4 rounded-full"/>
          <p className="text-slate-500 text-xs md:text-sm lg:text-base max-w-xl mx-auto mt-5 leading-relaxed font-normal">
            {lang === "vi"
              ? "C4L không ban phát học bổng một chiều, chúng tôi cung cấp giải pháp phát triển toàn diện kết hợp giữa Tài chính, An cư, Cố vấn và Môi trường thực chiến."
              : "C4L does not award simple financial aid. We offer a comprehensive human capital development suite combining finance, housing, mentorship, and practical training."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hybridModel.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-emerald-200/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Decorative background glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[9px] font-black tracking-widest px-2.5 py-1 rounded font-mono ${
                    item.badge === "RUN" 
                      ? "bg-emerald-600 text-white" 
                      : "bg-[#0e4b29] text-emerald-200"
                  }`}>
                    {item.badge}
                  </span>
                  <span className="text-slate-300 font-mono font-bold text-sm">0{i + 1}</span>
                </div>

                <h3 className="font-sans font-extrabold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-[#15803D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5 mt-auto">
                <ul className="space-y-2.5">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700 font-medium">
                      <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
