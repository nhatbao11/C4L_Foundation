"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { useLanguage } from "@/components/LanguageContext";

export default function HeroSection() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "/images/carousel-1.png",
      title: lang === "vi" ? "Hệ Sinh Thái Phát Triển Con Người" : "Human Capital Investment Ecosystem",
      desc: lang === "vi"
        ? "Đầu tư vốn, cơ hội rèn luyện, mentor đồng hành và trải nghiệm thực chiến để trở thành Self-Made Professional."
        : "Investing resources, training opportunities, mentor guidance, and practical labs for self-made professionals."
    },
    {
      img: "/images/carousel-2.png",
      title: lang === "vi" ? "C4L Home — Ký Túc Xá Kỷ Luật" : "C4L Home — Disciplined Dormitory",
      desc: lang === "vi"
        ? "Không gian sống tự quản, rèn nếp sống tự chủ, bản lĩnh và kỷ luật cao."
        : "Structured housing environment fostering integrity, cleanliness, and self-rule."
    },
    {
      img: "/images/carousel-3.png",
      title: lang === "vi" ? "Tech Lab & E-commerce Lab" : "Tech Lab & E-commerce Lab",
      desc: lang === "vi"
        ? "Thực chiến qua dự án thực tế, tích lũy kỹ năng sales, AI và công nghệ."
        : "Hands-on projects covering sales, AI, e-commerce, and practical technical expertise."
    },
    {
      img: "/images/clover_grad_2.png",
      title: lang === "vi" ? "Từ Hy Vọng Đến Tự Chủ" : "From Potential to Professional",
      desc: lang === "vi"
        ? "Đồng hành rèn luyện bản lĩnh để kiến tạo một thế hệ tự thân lập nghiệp, sống tử tế."
        : "Nurturing student potential and self-reliance to build self-made, ethical professionals."
    },
    {
      img: "/images/clover_grad_3.png",
      title: lang === "vi" ? "Bản Lĩnh Trưởng Thành" : "Graduation & Autonomy",
      desc: lang === "vi"
        ? "Mỗi mảnh ghép tốt nghiệp là một chuyên gia bản lĩnh, tự lập vững vàng và có trách nhiệm xã hội."
        : "Each graduating milestone represents a self-reliant professional ready to pay it forward."
    }
  ];

  // Autoplay Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const prevIdx = (currentSlide - 1 + slides.length) % slides.length;
  const nextIdx = (currentSlide + 1) % slides.length;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/50 pt-[120px] pb-12 md:pt-[176px] md:pb-24 lg:pt-[212px] lg:pb-32">
      {/* Premium ambient decorative background glow blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-emerald-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-100/30 blur-[130px] pointer-events-none" />

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 xl:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Left Copywriting Column */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4 md:gap-5 text-left">
          {/* Animated active pill badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50/80 border border-emerald-100/90 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[10px] md:text-[11px] text-emerald-800 font-bold tracking-wider uppercase">
              {lang === "vi" ? "QUỸ HỌC BỔNG SINH VIÊN" : "STUDENT SCHOLARSHIP FUND"}
            </span>
          </div>

          <h1 className="font-sans text-5xl sm:text-6xl md:text-7.5xl font-black tracking-tight leading-none text-[#0e4b29] uppercase mt-2">
            CỎ <span className="text-[#15803D] bg-gradient-to-r from-[#15803D] via-emerald-600 to-green-700 bg-clip-text text-transparent">4 LÁ</span>
          </h1>

          <div className="mt-1">
            <h2 className="text-xl sm:text-2xl md:text-[34px] font-extrabold text-slate-800 tracking-tight uppercase leading-tight">
              {lang === "vi" ? "TỪ HY VỌNG ĐẾN TỰ CHỦ" : "FROM POTENTIAL TO PROFESSIONAL"}
            </h2>
            <p className="text-[11px] md:text-xs font-bold text-emerald-600 tracking-[0.2em] uppercase mt-1 leading-none">
              {lang === "vi" ? "Đầu tư năng lực - Kiến tạo tự lập" : "Invest in Capability - Build Self-Reliance"}
            </p>
          </div>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mt-2 font-normal">
            {lang === "vi"
              ? "C4L không đơn thuần là quỹ cho học bổng tài chính. Chúng tôi đầu tư cơ hội, kinh nghiệm thực chiến và người dẫn đường (mentor) để đồng hành cùng bạn trên con đường trở thành một chuyên gia tự lập, sống tử tế."
              : "C4L goes beyond financial aid. We invest capital, practical experience, and professional mentorship to accompany you on the journey to becoming a self-reliant, ethical professional."}
          </p>

          <div className="flex flex-row items-center gap-4 w-full sm:w-auto mt-5">
            <Button href="/apply" variant="primary" className="px-6 py-3 md:px-7 md:py-3.5 text-xs md:text-sm font-bold shadow-md hover:shadow-lg transition-all rounded-full bg-[#15803D] hover:bg-[#166534] text-white">
              {lang === "vi" ? "Ứng tuyển ngay" : "Apply now"}
            </Button>
            <Button href="/about" variant="outline" className="px-6 py-3 md:px-7 md:py-3.5 text-xs md:text-sm font-bold rounded-full border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 transition-all text-slate-700">
              {lang === "vi" ? "Tìm hiểu thêm" : "Learn more"}
            </Button>
          </div>
        </div>

        {/* Right Carousel Column */}
        <div className="lg:col-span-7 flex flex-col items-center relative select-none w-full mt-4 lg:mt-0">
          <div className="w-full flex items-center justify-center gap-3 md:gap-4 relative min-h-[280px] md:min-h-[460px] overflow-hidden">
            {/* Left Preview Sliver */}
            <div
              onClick={prevSlide}
              className="hidden md:block md:w-[12%] md:h-[350px] opacity-35 scale-90 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:opacity-50 relative group flex-shrink-0"
            >
              <Image
                src={slides[prevIdx].img}
                alt="Prev slide"
                fill
                className="object-cover filter blur-[0.5px]"
                sizes="12vw"
              />
              <div className="absolute inset-0 bg-slate-950/20"></div>
            </div>

            {/* Main Center Image */}
            <div className="w-full md:w-[76%] h-[280px] sm:h-[350px] md:h-[440px] opacity-100 scale-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative transition-all duration-500 flex-shrink-0 border border-white/40">
              <Image
                src={slides[currentSlide].img}
                alt="Active slide"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
                priority
              />
              {/* Dark Gradient Text Overlay with premium glass feeling */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent flex flex-col justify-end p-6 md:p-10">
                <span className="text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
                  Slide 0{currentSlide + 1}
                </span>
                <h3 className="font-sans font-bold text-lg md:text-2xl text-white mt-1.5 leading-snug">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white/80 text-[11px] md:text-sm leading-relaxed mt-2.5 font-normal max-w-xl">
                  {slides[currentSlide].desc}
                </p>
              </div>
            </div>

            {/* Right Preview Sliver */}
            <div
              onClick={nextSlide}
              className="hidden md:block md:w-[12%] md:h-[350px] opacity-35 scale-90 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:opacity-50 relative group flex-shrink-0"
            >
              <Image
                src={slides[nextIdx].img}
                alt="Next slide"
                fill
                className="object-cover filter blur-[0.5px]"
                sizes="12vw"
              />
              <div className="absolute inset-0 bg-slate-950/20"></div>
            </div>
          </div>

          {/* Navigation Dots (Only Dots, Arrows Removed) */}
          <div className="flex items-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  i === currentSlide ? "bg-[#15803D] w-6" : "bg-slate-300 w-2.5"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
