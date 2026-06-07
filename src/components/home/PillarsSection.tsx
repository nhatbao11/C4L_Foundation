"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

export default function PillarsSection() {
  const { lang } = useLanguage();

  const ctaCards = lang === "vi" ? [
    {
      role: "Sinh Viên",
      title: "Ứng tuyển Học bổng",
      desc: "Dành cho sinh viên hoàn cảnh khó khăn có ý chí vươn lên, sẵn sàng học hỏi thực chiến và cam kết rèn luyện tự lập.",
      points: ["Học bổng & Hỗ trợ sinh hoạt phí", "Cơ hội ở Ký túc xá Cỏ 4 Lá Home", "Đào tạo kỹ năng thực chiến (AI, E-com)"],
      link: "/apply",
      btnText: "Nộp Hồ Sơ Ngay",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      role: "Chuyên Gia & Doanh Nhân",
      title: "Đăng ký làm Mentor",
      desc: "Chia sẻ kinh nghiệm làm việc thực tế, định hướng nghề nghiệp 1-1 giúp sinh viên rút ngắn khoảng cách với doanh nghiệp.",
      points: ["Đồng hành định hướng 1-1", "Chia sẻ kỹ năng thực chiến", "Mạng lưới chuyên gia tâm huyết"],
      link: "/mentor",
      btnText: "Đăng Ký Mentor",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      role: "Tình Nguyện Viên",
      title: "Tham gia Tình nguyện",
      desc: "Cống hiến sức trẻ và tấm lòng, hỗ trợ các hoạt động cộng đồng, sự kiện truyền thông và vận hành các Lab thực hành của quỹ.",
      points: ["Hỗ trợ hoạt động xã hội", "Vận hành các dự án cộng đồng", "Môi trường năng động, tử tế"],
      link: "/volunteer",
      btnText: "Trở Thành TNV",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      role: "Doanh Nghiệp / Nhà Tài Trợ",
      title: "Đồng hành & Tài trợ",
      desc: "Đầu tư nguồn lực tài chính, cơ hội thực tập hoặc bảo trợ công nghệ giúp Cỏ 4 Lá duy trì và mở rộng quy mô hệ sinh thái.",
      points: ["Tài trợ vốn học bổng Cỏ 4 Lá", "Bảo trợ các Lab thực chiến", "Hợp tác cung ứng nguồn nhân lực"],
      link: "/donate",
      btnText: "Đồng Hành Ngay",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ] : [
    {
      role: "Undergraduate Students",
      title: "Scholarship Application",
      desc: "For underprivileged students eager to learn, willing to practice, and committed to self-reliance.",
      points: ["Scholarships & living grants", "Dormitory stay opportunities", "Practical skill training (AI, E-com)"],
      link: "/apply",
      btnText: "Apply Now",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      role: "Experts & Leaders",
      title: "Register as a Mentor",
      desc: "Share practical career experiences and guide students in 1-on-1 mentorship sessions.",
      points: ["1-on-1 career guidance", "Share practical trade skills", "Network of dedicated professionals"],
      link: "/mentor",
      btnText: "Join as Mentor",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      role: "Active Volunteers",
      title: "Become a Volunteer",
      desc: "Contribute time and heart to support community projects, events, and foundation operations.",
      points: ["Social activities support", "Community project execution", "Dynamic & friendly team environment"],
      link: "/volunteer",
      btnText: "Become Volunteer",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      role: "Corporates & Donors",
      title: "Corporate Sponsorship",
      desc: "Sponsor scholarship funds, practical labs, or offer internships to expand Co 4 La's scale.",
      points: ["Fund Co 4 La scholarships", "Sponsor practical research labs", "Supply-chain recruitment ties"],
      link: "/donate",
      btnText: "Sponsor / Partner",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#0e4b29] py-24 md:py-32 relative overflow-hidden">
      
      {/* Background dot pattern and gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none z-0" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <Badge variant="dark">
            {lang === "vi" ? "Góc đồng hành" : "Join the Ecosystem"}
          </Badge>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight uppercase text-white mt-6 leading-tight">
            {lang === "vi" ? "Kiến Tạo Hệ Sinh Thái Cỏ 4 Lá" : "Build the Co 4 La Ecosystem"}
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed mt-4 font-normal">
            {lang === "vi"
              ? "Chúng tôi tin rằng để tạo nên những con người độc lập, tử tế cần sự chung tay từ toàn bộ cộng đồng. Hãy lựa chọn vai trò của bạn."
              : "We believe that building independent, ethical professionals takes a community effort. Find your role today."}
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ctaCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black text-[#15803D] uppercase tracking-widest font-mono">
                    {card.role}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-lg md:text-xl text-[#0e4b29] mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  {card.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 border-t border-emerald-50/80 pt-5 mb-8">
                  {card.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href={card.link}
                className="w-full text-center py-3 px-6 rounded-2xl bg-slate-900 hover:bg-[#15803D] text-white font-bold text-xs tracking-wider uppercase transition-colors duration-300 block"
              >
                {card.btnText}
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
