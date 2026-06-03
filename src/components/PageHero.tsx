"use client";

import React from "react";
import Image from "next/image";

interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  backgroundImage?: string;
  isFullHeight?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  description,
  backgroundImage,
  isFullHeight = false,
  children,
}: PageHeroProps) {
  if (isFullHeight) {
    return (
      <section className="relative min-h-dvh lg:h-dvh flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
        {/* Background Image with opacity overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage || "/images/about_hero_bg.png"}
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          {/* Deep green color tint overlay to match brand colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e4b29]/95 via-[#0e4b29]/80 to-[#0b381e]/95" />
        </div>

        {/* Grid Pattern Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />

        <div className="relative flex-1 flex flex-col justify-center items-center max-w-5xl mx-auto px-6 pt-20 pb-4 lg:pt-36 lg:pb-16 text-center z-10">
          <span className="text-[10px] md:text-xs font-bold text-white/70 bg-white/10 border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest font-mono">
            {badge}
          </span>
          <h1 className="font-display text-2xl md:text-5xl lg:text-6xl font-black text-white mt-4 md:mt-6 leading-tight uppercase tracking-tight">
            {title}
          </h1>
          <p className="text-white/80 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed mt-4 md:mt-5 max-w-2xl mx-auto font-normal">
            {description}
          </p>
        </div>

        {/* Optional bottom container */}
        {children && <div className="relative z-10">{children}</div>}
      </section>
    );
  }

  // Standard Header Banner
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-16 md:pt-44 md:pb-24 text-center">
      {/* Background color tint overlay to match brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e4b29]/95 via-[#0e4b29]/80 to-[#0b381e]/95 z-0" />

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <span className="text-[10px] md:text-xs font-bold text-white/70 bg-white/10 border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest font-mono">
          {badge}
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-black text-white mt-6 uppercase tracking-tight">
          {title}
        </h1>
        <div className="w-12 h-1 bg-emerald-400 mx-auto mt-4 rounded-full" />
        <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mt-5 max-w-2xl mx-auto font-normal">
          {description}
        </p>
      </div>

      {children && <div className="relative z-10 mt-6">{children}</div>}
    </section>
  );
}
