"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

interface PartnerItem {
  name: string;
  hoverClass: string;
  icon: React.ReactNode;
}

export default function PartnersSection() {
  const { lang } = useLanguage();

  const partners: PartnerItem[] = [
    {
      name: "TONY BUOI SANG",
      hoverClass: "hover:text-amber-600",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 12h2m16 0h2M12 2v2m0 16v2m-7.07-17.07l1.41 1.41m11.32 11.32l1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
        </svg>
      )
    },
    {
      name: "C4L TECH LAB",
      hoverClass: "hover:text-emerald-600",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c1.1 0 2 .9 2 2v2.2c1.1-.5 2.4-.8 3.8-.8 2.2 0 4 1.8 4 4 0 3.2-3.2 4-7.8 4-4.6 0-7.8-.8-7.8-4 0-2.2 1.8-4 4-4 1.4 0 2.7.3 3.8.8V4c0-1.1.9-2 2-2zm0 20c-1.1 0-2-.9-2-2v-2.2c-1.1.5-2.4.8-3.8.8-2.2 0-4-1.8-4-4 0-3.2 3.2-4 7.8-4 4.6 0 7.8.8 7.8 4 0 2.2-1.8 4-4 4-1.4 0-2.7-.3-3.8-.8V20c0 1.1-.9 2-2 2z" />
        </svg>
      )
    },
    {
      name: "E-COMMERCE HUB",
      hoverClass: "hover:text-blue-600",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      )
    },
    {
      name: "MNC MENTOR",
      hoverClass: "hover:text-indigo-600",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    },
    {
      name: "MB BANK",
      hoverClass: "hover:text-blue-700",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )
    },
    {
      name: "VIETTEL",
      hoverClass: "hover:text-red-600",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      )
    },
    {
      name: "FPT UNIVERSITY",
      hoverClass: "hover:text-orange-600",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          <path d="M17 14.18V19c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-4.82l5 2.73 5-2.73z" />
        </svg>
      )
    },
    {
      name: "VNG CORP",
      hoverClass: "hover:text-cyan-600",
      icon: (
        <svg className="w-4 h-4 mr-2 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-12 overflow-hidden bg-white">
      <div className="text-center mb-8">
        <h2 className="font-display font-extrabold text-lg md:text-xl tracking-widest text-slate-800 uppercase">
          {lang === "vi" ? "ĐƠN VỊ ĐỒNG HÀNH & TÀI TRỢ" : "ACCOMPANYING PARTNERS & SPONSORS"}
        </h2>
        <div className="w-16 h-0.5 bg-[#15803D] mx-auto mt-2 rounded-full"></div>
      </div>

      {/* CSS Marquee Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Partners Logos Scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-4 border-y border-slate-100 bg-white">
        {/* Edge fading shadows for clean blend into white layout */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-loop flex gap-12 md:gap-16">
          {/* Set 1 */}
          <div className="flex gap-12 md:gap-16 items-center">
            {partners.map((partner, idx) => (
              <div
                key={`set1-${idx}`}
                className={`flex items-center text-slate-400 font-mono tracking-widest filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer ${partner.hoverClass}`}
              >
                {partner.icon}
                <span className="font-extrabold text-xs md:text-sm">{partner.name}</span>
              </div>
            ))}
          </div>

          {/* Set 2 (Duplicate for infinite seamless loop) */}
          <div className="flex gap-12 md:gap-16 items-center">
            {partners.map((partner, idx) => (
              <div
                key={`set2-${idx}`}
                className={`flex items-center text-slate-400 font-mono tracking-widest filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer ${partner.hoverClass}`}
              >
                {partner.icon}
                <span className="font-extrabold text-xs md:text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
