"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import Badge from "@/components/Badge";

export default function PhilosophySection() {
  const { lang } = useLanguage();

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-slate-100">
      
      {/* Background grid design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative and Brand Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <Badge variant="light">
              {lang === "vi" ? "Triết lý hoạt động" : "Core Philosophy"}
            </Badge>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0e4b29] tracking-tight uppercase leading-tight">
              {lang === "vi" ? (
                <>
                  Từ Tiềm Năng <br />
                  <span className="text-emerald-600">Đến Tự Chủ</span>
                </>
              ) : (
                <>
                  From Potential <br />
                  <span className="text-emerald-600">To Self-Reliance</span>
                </>
              )}
            </h2>

            <div className="w-12 h-1 bg-[#15803D] rounded-full mt-2" />

            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-normal mt-2 max-w-2xl">
              <p>
                {lang === "vi"
                  ? "Kế thừa và tiếp nối một phần sứ mệnh phát triển sinh viên từ Quỹ Tony Buổi Sáng, Cỏ 4 Lá định vị mình là một hệ sinh thái đầu tư vốn con người (Human Capital Investment Ecosystem), không đơn thuần là nơi trao tặng tiền học bổng."
                  : "Inheriting and continuing a part of the student development mission from the Tony Buoi Sang Foundation, Co 4 La defines itself as a human capital investment ecosystem, rather than a traditional charity fund."}
              </p>
              <p>
                {lang === "vi"
                  ? "Chúng tôi tin rằng sự giúp đỡ bền vững nhất là trao cơ hội, trang bị năng lực chuyên môn và rèn giũa bản lĩnh tự lập. Cỏ 4 Lá đồng hành đầu tư vốn học tập, môi trường Ký túc xá kỷ luật, đội ngũ Mentor chuyên gia cùng các dự án thực chiến tại Lab."
                  : "We believe the most sustainable aid is providing opportunity, equipping students with professional competence, and building self-reliance. Co 4 La invests study capital, disciplined housing, elite mentorship, and practical training."}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0e4b29] hover:bg-[#15803D] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                <span>{lang === "vi" ? "Tìm hiểu Mô hình & 4 Trụ cột" : "Explore Model & 4 Pillars"}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Value Block Card */}
          <div className="lg:col-span-5 w-full group">
            <div className="bg-slate-50 border border-emerald-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-emerald-500/20">
              
              {/* Card top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600" />

              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest font-mono block mb-2">
                {lang === "vi" ? "Định vị thương hiệu" : "Brand Positioning"}
              </span>
              
              <h3 className="font-display font-black text-xl text-[#0e4b29] uppercase tracking-wider mb-6">
                {lang === "vi" ? "Đầu Tư Thực Chiến" : "Active Human Investment"}
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#15803D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {lang === "vi" ? "Không ban phát một chiều" : "No Passive Charity"}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {lang === "vi"
                        ? "Học bổng đi kèm với các cam kết chỉ số KPIs rèn luyện định kỳ để tạo động lực nỗ lực."
                        : "Scholarships are integrated with performance KPIs to foster commitment and effort."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#15803D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {lang === "vi" ? "Đào tạo Self-Made Professionals" : "Building Self-Made Professionals"}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {lang === "vi"
                        ? "Sinh viên được trang bị kỹ năng chuyên môn khắt khe nhất để tự chủ tương lai."
                        : "Students are equipped with critical professional skills to lead their own career paths."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#15803D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {lang === "vi" ? "Tinh thần Đáp đền tiếp nối" : "Pay-It-Forward Mindset"}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {lang === "vi"
                        ? "Sinh viên khi trưởng thành tự nguyện đồng hành nâng đỡ thế hệ đàn em đi sau."
                        : "Graduates willingly return to guide, mentor, and support the next cohort of students."}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
