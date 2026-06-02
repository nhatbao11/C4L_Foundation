"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gradient-to-b from-[#0e4b29] to-[#09351d] text-white pt-20 pb-12 relative z-10">
      {/* Subtle top decoration grid lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 relative">

        {/* Left Column: Overlapping Logo card and slogan */}
        <div className="md:col-span-4 flex flex-col items-start gap-6">
          {/* Overlapping White Box Logo with high z-index and hover effect */}
          <div className="bg-white p-3.5 rounded-2xl shadow-2xl -mt-28 relative z-20 border border-slate-100 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <Image
              src="/logo.jpg"
              alt="C4L Logo"
              width={84}
              height={84}
              className="rounded-full object-cover"
            />
          </div>
 
          {/* Slogan & Branding */}
          <div className="mt-2">
            <h3 className="font-display font-extrabold text-lg md:text-xl tracking-tight text-white uppercase leading-snug">
              {t("slogan")}
            </h3>
            <span className="block text-[11px] md:text-xs font-bold tracking-widest text-emerald-400 uppercase mt-2">
              {t("tagline")}
            </span>
          </div>
 
          {/* Social Icons - Premium Solid and Hover States */}
          <div className="flex items-center gap-4 text-emerald-200 mt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#15803D] hover:text-white flex items-center justify-center transition-all shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#15803D] hover:text-white flex items-center justify-center transition-all shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#15803D] hover:text-white flex items-center justify-center transition-all shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center column: Contact info */}
        <div className="md:col-span-4 flex flex-col gap-4 text-xs md:text-sm text-emerald-100">
          <h4 className="font-display font-bold uppercase text-white border-b border-emerald-800/85 pb-2.5 tracking-widest text-xs md:text-sm">
            {t("contactInfo")}
          </h4>
          <div className="flex flex-col gap-4 font-medium leading-relaxed mt-2 text-xs md:text-sm text-emerald-100/90">
            <div className="flex items-center gap-3">
              <svg className="w-4.5 h-4.5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:quyco4la@gmail.com" className="hover:text-white hover:underline transition-colors">quyco4la@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4.5 h-4.5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0901315630" className="hover:text-white hover:underline transition-colors">090 131 5630</a>
            </div>
            <div className="flex items-start gap-3 leading-relaxed">
              <svg className="w-4.5 h-4.5 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{t("address")}</span>
            </div>
          </div>
        </div>

        {/* Column 3: About */}
        <div className="md:col-span-2 flex flex-col gap-4 text-xs md:text-sm">
          <h4 className="font-display font-bold uppercase text-white border-b border-emerald-800/85 pb-2.5 tracking-widest text-xs md:text-sm">
            {t("aboutUs")}
          </h4>
          <ul className="flex flex-col gap-3 mt-2 font-medium text-emerald-100/90 text-xs md:text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">{t("vision")}</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">{t("mission")}</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">{t("contact")}</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">{t("history")}</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Activities */}
        <div className="md:col-span-2 flex flex-col gap-4 text-xs md:text-sm">
          <h4 className="font-display font-bold uppercase text-white border-b border-emerald-800/85 pb-2.5 tracking-widest text-xs md:text-sm">
            {t("activities")}
          </h4>
          <ul className="flex flex-col gap-3 mt-2 font-medium text-emerald-100/90 text-xs md:text-sm">
            <li>
              <Link href="/hybrid-4l" className="hover:text-white transition-colors">{t("finance")}</Link>
            </li>
            <li>
              <Link href="/hybrid-4l" className="hover:text-white transition-colors">{t("housing")}</Link>
            </li>
            <li>
              <Link href="/hybrid-4l" className="hover:text-white transition-colors">{t("mentoring")}</Link>
            </li>
            <li>
              <Link href="/hybrid-4l" className="hover:text-white transition-colors">{t("practicalLab")}</Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-emerald-800/40 mt-14 pt-8 text-center text-[10px] md:text-xs text-emerald-400/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>{t("copyright")}</span>
        <span className="font-mono">{t("motto")}</span>
      </div>
    </footer>
  );
}
