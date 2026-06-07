"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Image from "next/image";

export default function TimelineSection() {
  const { lang } = useLanguage();

  const timeline = lang === "vi" ? [
    { year: "2019", title: "Khởi Nguồn", desc: "Nhóm cựu thành viên Tony Buổi Sáng đặt nền móng Quỹ Cỏ 4 Lá, hướng đến mô hình phát triển con người toàn diện và tự lập." },
    { year: "2020", title: "Kiện Toàn Tổ Chức", desc: "Hoàn thiện quy trình xét duyệt học bổng 3 vòng, thành làm Ban Điều hành, Hội đồng Giám sát và Tổng Thư ký." },
    { year: "2022", title: "Tăng Trưởng Mạnh Mẽ", desc: "Cộng đồng vượt 200 sinh viên, tổng nguồn vốn đầu tư đạt 8 Tỷ đồng; mở rộng ra các tỉnh miền Trung – Tây Nguyên." },
    { year: "2023", title: "Phát Triển Bền Vững", desc: "Ra mắt mô hình Hybrid 4L, đưa Cỏ 4 Lá Tech Lab vào vận hành nhằm tối giản 100% chi phí công nghệ và truyền thông." },
    { year: "2025+", title: "Mục Tiêu Tương Lai", desc: "Đồng hành lũy kế 500 sinh viên, xây dựng dự án tự tạo doanh thu phát triển quỹ và nhân rộng mô hình Pay-it-Forward." },
  ] : [
    { year: "2019", title: "Foundation", desc: "Former Tony Buoi Sang alumni laid the groundwork for Co 4 La, envisioning a holistic, self-reliant human capital development model." },
    { year: "2020", title: "Organizational Structure", desc: "Completed the 3-round scholarship review and formed the Executive Board, Supervisory Council, and Secretary General." },
    { year: "2022", title: "Rapid Growth", desc: "Community grew past 200 students; total investment hit 8 Billion VND; expanded to Central Vietnam and Highlands." },
    { year: "2023", title: "Sustainable Development", desc: "Launched Hybrid 4L model and activated Co 4 La Tech Lab to eliminate 100% of tech and media overhead costs." },
    { year: "2025+", title: "Future Goals", desc: "Accompany 500 cumulative students, build self-sustaining projects, and scale Pay-it-Forward ecosystem." },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
        {/* Left Sticky Content Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
              {lang === "vi" ? "Hành trình" : "Our Journey"}
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-slate-900 mt-3 uppercase tracking-wide">
              {lang === "vi" ? "Lịch sử Hình thành" : "History & Milestones"}
            </h2>
            <div className="w-16 h-1 bg-[#15803D] mt-4 rounded-full"/>
          </div>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
            {lang === "vi"
              ? "Kế thừa tinh thần hỗ trợ từ nguồn cựu sinh viên Tony Buổi Sáng, Cỏ 4 Lá đã phát triển vượt bậc để xây dựng một hệ sinh thái tuần hoàn phát triển con người trọn vẹn, thúc đẩy bản lĩnh tự lập và năng lực nghề nghiệp thực chiến."
              : "Inheriting the supportive spirit of Tony Buoi Sang alumni, Co 4 La has expanded significantly to construct a circular human capital ecosystem that fosters professional capability and self-reliance."}
          </p>

          {/* Premium Visual Frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3] w-full">
            <Image
              src="/images/about_journey_visual.png"
              alt="Cỏ Bốn Lá Students Collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </div>

        {/* Right Timeline Stack Column */}
        <div className="lg:col-span-7 relative pl-6 sm:pl-8 mt-8 lg:mt-0">
          {/* Vertical Spine Line */}
          <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-slate-200" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-4 sm:gap-6 items-start group">
                {/* Timeline Dot Indicator */}
                <div className="relative z-10 flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center shadow-sm group-hover:bg-[#15803D] group-hover:border-[#15803D] transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#15803D] group-hover:bg-white transition-colors duration-300" />
                </div>

                {/* Timeline Content Card */}
                <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <span className="inline-block text-[10px] font-black text-white bg-[#15803D] px-2.5 py-1 rounded font-mono tracking-wider mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-sans font-extrabold text-base text-slate-900 group-hover:text-[#15803D] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-2 font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
