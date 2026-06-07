"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Image from "next/image";

export default function HeritageSection() {
  const { lang } = useLanguage();

  return (
    <section className="bg-slate-50 w-full overflow-hidden border-b border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[550px]">
        {/* Full-bleed Image Column */}
        <div className="relative min-h-[300px] lg:min-h-full w-full">
          <Image
            src="/images/about_journey_visual.png"
            alt="Cỏ Bốn Lá Students & Mentor Collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Subtle overlay on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Column with generous padding */}
        <div className="flex flex-col justify-center px-6 py-16 md:py-24 lg:px-16 xl:px-24 bg-slate-50">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#15803D] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              {lang === "vi" ? "Bối cảnh & Kế thừa" : "Context & Heritage"}
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-slate-900 mt-5 uppercase tracking-wide leading-tight">
              {lang === "vi" ? "Tiếp Nối & Phát Triển Con Người" : "Succeeding & Developing Human Potential"}
            </h2>
            <div className="w-16 h-1 bg-[#15803D] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-slate-600 text-xs md:text-sm lg:text-base leading-relaxed font-normal">
              <p>
                {lang === "vi" ? (
                  <>
                    Khởi nguồn từ mong muốn hỗ trợ thế hệ trẻ Việt Nam tự lập, <strong>Quỹ Cỏ Bốn Lá</strong> kế thừa và tiếp nối một phần thế hệ sinh viên trưởng thành từ <strong>Quỹ Tony Buổi Sáng</strong>, đồng thời mở rộng tuyển chọn các nhân tố tiềm năng từ nhiều nguồn chất lượng khác trên cả nước.
                  </>
                ) : (
                  <>
                    Originating from a desire to foster self-reliance in young Vietnamese students, <strong>Co 4 La Foundation</strong> inherits and continues the student cohort from the <strong>Tony Buoi Sang Fund</strong>, while expanding to select high-potential candidates nationwide.
                  </>
                )}
              </p>
              <p>
                {lang === "vi" ? (
                  <>
                    Chúng tôi định vị mình <strong>không phải là một nơi ban phát học bổng tài chính thông thường</strong>. Đối với Cỏ Bốn Lá, mỗi sinh viên là một nguồn lực tiềm năng cần được đầu tư nghiêm túc và có lộ trình rõ ràng để tự đứng vững trên đôi chân của mình.
                  </>
                ) : (
                  <>
                    We position ourselves <strong>not as a conventional financial aid charity</strong>. At Co 4 La, every student is a high-potential asset that requires professional investment and a clear growth roadmap to achieve true self-reliance.
                  </>
                )}
              </p>
              <p>
                {lang === "vi" ? (
                  <>
                    Thông qua hệ sinh thái tuần hoàn, Cỏ Bốn Lá đầu tư trực tiếp nguồn vốn học tập, không gian sống kỷ luật, sự dẫn dắt của các mentor và cơ hội thực chiến tại các Lab doanh nghiệp để chuyển hóa <strong>Từ Tiềm năng đến Chuyên nghiệp (From Potential to Professional)</strong>.
                  </>
                ) : (
                  <>
                    Through a circular ecosystem, Co 4 La invests directly in study capital, disciplined housing, professional mentorship, and hands-on business project practice to transform students <strong>From Potential to Professional</strong>.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
