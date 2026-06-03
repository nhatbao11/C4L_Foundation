"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

export default function CoreValuesSection() {
  const { lang } = useLanguage();

  const pillars = lang === "vi" ? [
    {
      num: "01",
      title: "Professional Competence",
      subTitle: "Năng lực nghề nghiệp",
      desc: "Trang bị năng lực thực chiến thông qua các dự án doanh nghiệp thực tế. Sinh viên được rèn luyện để đáp ứng ngay các yêu cầu công việc khắt khe nhất.",
      skills: ["Học máy & Ứng dụng AI", "Quản trị E-commerce", "Sales & Digital Marketing", "Tiếng Anh chuyên ngành"]
    },
    {
      num: "02",
      title: "Self-Reliance",
      subTitle: "Bản lĩnh & Tự lập",
      desc: "Kiến tạo bản lĩnh tự chủ từ thói quen quản trị bản thân, rèn luyện nếp sống ngăn nắp, quản lý tài chính và tinh thần chịu trách nhiệm 100% với tương lai của mình.",
      skills: ["Quản trị mục tiêu (KPIs)", "Kế hoạch tài chính cá nhân", "Tính kỷ luật & Nghị lực", "Giải quyết vấn đề chủ động"]
    },
    {
      num: "03",
      title: "Ethical Foundation",
      subTitle: "Tử tế & Chính trực",
      desc: "Xây dựng hệ giá trị lấy chính trực làm gốc. Chúng tôi tin rằng năng lực cao chỉ thực sự có ích khi đi kèm với đạo đức nghề nghiệp và sự chính trực tuyệt đối.",
      skills: ["Sự trung thực", "Tôn trọng cam kết", "Đạo đức công việc", "Lối sống tử tế"]
    },
    {
      num: "04",
      title: "Pay-It-Forward Mindset",
      subTitle: "Tư duy Đáp đền",
      desc: "Nuôi dưỡng tinh thần đáp đền tiếp nối. Khi trưởng thành, các em chủ động quay lại chia sẻ cơ hội, dẫn dắt và nâng đỡ các thế hệ đàn em.",
      skills: ["Đồng hành cùng thế hệ sau", "Chia sẻ tri thức", "Trách nhiệm cộng đồng", "Hỗ trợ tài chính tiếp nối"]
    }
  ] : [
    {
      num: "01",
      title: "Professional Competence",
      subTitle: "Professional Competence",
      desc: "Equipping students with practical career skills to meet demanding corporate criteria from day one.",
      skills: ["Machine Learning & AI Tools", "E-commerce Administration", "Sales & Digital Marketing", "Business English"]
    },
    {
      num: "02",
      title: "Self-Reliance",
      subTitle: "Self-Reliance & Governance",
      desc: "Cultivating proactive life management, budget control, and 100% self-accountability for their own futures.",
      skills: ["KPI-driven Goal Tracking", "Personal Finance Planning", "Discipline & Willpower", "Proactive Problem Solving"]
    },
    {
      num: "03",
      title: "Ethical Foundation",
      subTitle: "Ethics & Integrity",
      desc: "Building a foundation of kindness and accountability. Competence only creates long-term value when paired with absolute integrity.",
      skills: ["Absolute Honesty", "Fulfilling Commitments", "Professional Integrity", "Decent Lifestyle"]
    },
    {
      num: "04",
      title: "Pay-It-Forward Mindset",
      subTitle: "Pay-it-forward Mindset",
      desc: "Fostering a circular mindset. Once established, alumni return to mentor, share knowledge, and invest in the next generation.",
      skills: ["Peer-to-peer mentoring", "Sharing practical knowledge", "Social responsibility", "Financial reinvestment"]
    }
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-slate-100">
      
      {/* Premium background grid alignment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <Badge variant="light">
            {lang === "vi" ? "Chân dung đầu ra" : "Output Portrait"}
          </Badge>
          <h2 className="font-display font-black text-3xl md:text-5xl text-[#0e4b29] mt-6 uppercase tracking-wider">
            {lang === "vi" ? "Self-Made Professional" : "Self-Made Professional"}
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto mt-4 font-medium leading-relaxed">
            {lang === "vi"
              ? "Chân dung 4 trụ cột phát triển toàn diện giúp sinh viên vượt khó vươn lên làm chủ tương lai của chính mình."
              : "Four key development pillars enabling students to master their own professional futures."}
          </p>
          <div className="w-12 h-1 bg-[#15803D] mx-auto mt-6 rounded-full" />
        </div>

        {/* Infographic Staggered Timeline Grid */}
        <div className="relative">
          
          {/* Vertical Connector Line (all viewports) */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-emerald-100/80 -translate-x-1/2 z-0" />

          <div className="space-y-12 lg:space-y-20 relative z-10">
            {pillars.map((p, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full pl-12 lg:pl-0
                    ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  
                  {/* Card Block */}
                  <div className="w-full lg:w-[46%] group">
                    <div className="bg-white border border-emerald-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 relative overflow-hidden">
                      
                      {/* Top border decoration */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600" />
                      
                      {/* Leaf Index indicator */}
                      <div className="absolute top-6 right-8 font-mono font-black text-xl text-emerald-100 group-hover:text-emerald-500/20 transition-colors">
                        {p.num}
                      </div>

                      {/* Header */}
                      <span className="text-[10px] font-black text-[#15803D] uppercase tracking-widest font-mono block mb-1">
                        {p.subTitle}
                      </span>
                      <h3 className="font-display font-black text-xl md:text-2xl text-[#0e4b29] uppercase tracking-wider mb-4 leading-snug">
                        {p.title}
                      </h3>

                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                        {p.desc}
                      </p>

                      {/* Skills Grid */}
                      <div className="border-t border-emerald-50/80 pt-6">
                        <div className="grid grid-cols-2 gap-3">
                          {p.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-[11px] md:text-xs text-slate-700 font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] flex-shrink-0" />
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Central Node Indicator (visible on all viewports) */}
                  <div className="absolute left-6 lg:left-1/2 top-14 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-9 h-9 rounded-full bg-white border-2 border-emerald-500 shadow-md z-20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-emerald-600 animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                      {/* Leaf 1: Top-Right */}
                      <path d="M12 12c1-2.5 3-4 4.5-3 1.5 1 .5 3-1.5 4z" />
                      {/* Leaf 2: Bottom-Right */}
                      <path d="M12 12c2.5 1 4 3 3 4.5-1 1.5-3 .5-4-1.5z" />
                      {/* Leaf 3: Bottom-Left */}
                      <path d="M12 12c-1 2.5-3 4-4.5 3-1.5-1-.5-3 1.5-4z" />
                      {/* Leaf 4: Top-Left */}
                      <path d="M12 12c-2.5-1-4-3-3-4.5 1-1.5 3-.5 4 1.5z" />
                    </svg>
                  </div>

                  {/* Empty Spacer Column (Desktop only) */}
                  <div className="hidden lg:block w-[46%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
