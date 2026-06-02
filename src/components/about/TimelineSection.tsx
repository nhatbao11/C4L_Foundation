"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function TimelineSection() {
  const { lang } = useLanguage();

  const timeline = lang === "vi" ? [
    { year: "2019", title: "Khởi Nguồn", desc: "Nhóm cựu thành viên Tony Buổi Sáng đặt nền móng Quỹ C4L, hướng đến mô hình bảo trợ học tập toàn diện và tự lập.", side: "left" },
    { year: "2020", title: "Kiện Toàn Tổ Chức", desc: "Hoàn thiện quy trình xét duyệt học bổng 3 vòng, thành lập Ban Điều hành, Hội đồng Giám sát và Tổng Thư ký.", side: "right" },
    { year: "2022", title: "Tăng Trưởng Mạnh Mẽ", desc: "Cộng đồng vượt 200 sinh viên, tổng giải ngân đạt 8 Tỷ đồng; mở rộng ra các tỉnh miền Trung – Tây Nguyên.", side: "left" },
    { year: "2023", title: "Phát Triển Bền Vững", desc: "Ra mắt mô hình Hybrid 4L, đưa C4L Tech Lab vào vận hành nhằm tối giản 100% chi phí công nghệ và truyền thông.", side: "right" },
    { year: "2025+", title: "Mục Tiêu Tương Lai", desc: "Bảo trợ lũy kế 500 sinh viên, xây dựng quỹ tự sinh doanh thu và nhân rộng mô hình Pay-it-Forward ra toàn quốc.", side: "left" },
  ] : [
    { year: "2019", title: "Foundation", desc: "Former Tony Buoi Sang alumni laid the groundwork for C4L, envisioning a holistic, self-reliant sponsorship model.", side: "left" },
    { year: "2020", title: "Organizational Structure", desc: "Completed the 3-round scholarship review and formed the Executive Board, Supervisory Council, and Secretary General.", side: "right" },
    { year: "2022", title: "Rapid Growth", desc: "Community grew past 200 students; total disbursement hit 8 Billion VND; expanded to Central Vietnam and Highlands.", side: "left" },
    { year: "2023", title: "Sustainable Development", desc: "Launched Hybrid 4L model and activated C4L Tech Lab to eliminate 100% of tech and media overhead costs.", side: "right" },
    { year: "2025+", title: "Future Goals", desc: "Reach 500 cumulative sponsored students, build self-sustaining revenue, and scale Pay-it-Forward nationally.", side: "left" },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
            {lang === "vi" ? "Hành trình" : "Our Journey"}
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-slate-900 mt-3 uppercase tracking-widest">
            {lang === "vi" ? "Lịch sử Hình thành" : "History & Milestones"}
          </h2>
          <div className="w-24 h-1 bg-[#15803D] mx-auto mt-4 rounded-full"/>
        </div>

        <div className="relative">
          {/* Center spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"/>

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-0 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
                {/* Card */}
                <div className="w-full md:w-[46%]">
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <span className="text-[10px] font-bold text-white bg-[#15803D] px-3 py-1 rounded-full font-mono tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-display font-extrabold text-sm uppercase tracking-wide text-slate-900 mt-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-[8%] justify-center">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#15803D] bg-white shadow-sm"/>
                </div>

                <div className="hidden md:block md:w-[46%]"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
