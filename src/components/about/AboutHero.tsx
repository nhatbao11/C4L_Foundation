"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import PageHero from "@/components/PageHero";

export default function AboutHero() {
  const { lang } = useLanguage();

  const commitments = lang === "vi" ? [
    { num: "01", label: "Đầu tư con người", sub: "Tập trung đầu tư vốn, cơ hội và mentor thay vì cứu trợ một chiều" },
    { num: "02", label: "Phát triển tự chủ", sub: "Hướng tới sự tự lập, bản lĩnh và tự quản lý cuộc sống" },
    { num: "03", label: "Minh bạch tuyệt đối", sub: "Công khai, minh bạch 100% trong mọi hoạt động vận hành" },
    { num: "04", label: "Đáp đền tiếp nối", sub: "Kiến tạo văn hóa sẻ chia và nâng đỡ thế hệ kế tiếp" },
  ] : [
    { num: "01", label: "Human Investment", sub: "Focus on capital, opportunity, and mentorship instead of one-sided aid" },
    { num: "02", label: "Self-Reliance", sub: "Aiming for self-reliance, resilience, and personal management" },
    { num: "03", label: "100% Transparency", sub: "Fully transparent and accountable in all operations" },
    { num: "04", label: "Pay It Forward", sub: "Creating a culture of sharing and elevating the next generation" },
  ];

  const badge = lang === "vi" ? "Hệ sinh thái C4L" : "C4L Ecosystem";
  const title = lang === "vi" ? (
    <>Hành Trình Kiến Tạo<br /><span className="text-emerald-200">Self-Made Professionals</span></>
  ) : (
    <>Developing Generational<br /><span className="text-emerald-200">Self-Made Professionals</span></>
  );
  const description = lang === "vi"
    ? "C4L hoạt động như một doanh nghiệp xã hội, đầu tư phát triển nguồn vốn con người. Chúng tôi đồng hành cùng sinh viên vượt khó để kiến tạo năng lực thực chiến, rèn luyện tư duy tự lập và sống tử tế."
    : "C4L operates as a social enterprise, investing in human capital. We accompany motivated, underprivileged students to build professional competence, self-reliance, and ethical values.";

  return (
    <PageHero
      badge={badge}
      title={title}
      description={description}
      backgroundImage="/images/about_hero_bg.png"
      isFullHeight={true}
    >
      {/* Commitments bar — white card at the bottom of hero */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-white/10 py-3 sm:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2.5 gap-x-4 md:gap-0 md:divide-x md:divide-white/10">
            {commitments.map((c, i) => (
              <div key={i} className="px-2 md:px-4 text-center flex flex-col justify-center">
                <div className="font-display font-black text-[10px] sm:text-sm md:text-base lg:text-lg text-emerald-300 tracking-wider uppercase">{c.num}</div>
                <div className="text-white text-[9px] sm:text-xs font-bold mt-0.5 sm:mt-1">{c.label}</div>
                <div className="text-white/60 text-[10px] mt-1 leading-normal font-normal hidden sm:block">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageHero>
  );
}
