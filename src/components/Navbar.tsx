"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t("about"), href: "/about" },
    { label: t("students"), href: "/apply" },
    { label: t("reports"), href: "/transparency" },
    { label: t("journal"), href: "/journal" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500
        ${isScrolled
          ? "bg-white/35 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-white/40"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100/60 shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-[72px] md:h-[80px]">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-12 h-12 md:w-13 md:h-13 flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="C4L Logo"
              fill
              className="rounded-full object-cover transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-sans font-extrabold text-[#0e4b29] text-xl md:text-[22px] tracking-tight leading-none">
              C4L
            </span>
            <span className="text-[8px] md:text-[9px] font-black tracking-[0.25em] uppercase text-emerald-800 block mt-1 leading-none">
              FOUNDATION
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2.5 text-[14.5px] font-medium transition-all duration-200
                  ${isActive
                    ? "text-[#15803D] font-bold"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#15803D]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-3.5 flex-shrink-0">

          {/* ── Language toggle (pill border with flag + EN/VI, no chevron) ── */}
          <button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            title={lang === "vi" ? t("switchToEn") : t("switchToVi")}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-200 cursor-pointer select-none"
          >
            <span className="w-[22px] h-[15px] rounded-[2px] overflow-hidden flex-shrink-0 shadow-sm border border-slate-200/80 flex items-center justify-center">
              {lang === "vi" ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-full h-full object-cover">
                  <rect width="900" height="600" fill="#da251d"/>
                  <polygon points="450,136 480,228 577,228 498,285 528,377 450,320 372,377 402,285 323,228 420,228" fill="#ffff00"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-full h-full object-cover">
                  <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                  <clipPath id="t"><path d="M30,15 L0,0 v15 z M30,15 L60,0 v15 z M30,15 L60,30 v-15 z M30,15 L0,30 v-15 z"/></clipPath>
                  <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="4" clipPath="url(#t)"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6"/>
                  </g>
                </svg>
              )}
            </span>
            <span className="text-[13px] font-semibold text-slate-700 tracking-wide">
              {lang === "vi" ? "VI" : "EN"}
            </span>
          </button>
 
          {/* ── Donate button (pill with heart icon, matching reference) ── */}
          <Link
            href="/transparency"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-[#15803D] hover:bg-[#166534]
              text-white font-semibold text-[14px] transition-all duration-300
              shadow-sm hover:shadow active:scale-98"
          >
            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {t("donate")}
          </Link>
 
          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-600 hover:text-[#15803D] hover:bg-emerald-50 focus:outline-none transition-all rounded-lg border border-slate-200"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${mobileMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white/98 border-t border-slate-100 px-5 py-5 flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-[15px] font-semibold transition-all duration-200 flex items-center gap-3
                  ${isActive
                    ? "text-[#15803D] bg-emerald-50/80 border-l-[3px] border-[#15803D] pl-3"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] flex-shrink-0" />}
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/transparency"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 w-full text-center py-3.5 bg-gradient-to-r from-[#15803D] to-emerald-600 hover:from-[#166534] hover:to-[#15803D] text-white font-bold text-sm tracking-wide uppercase rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {t("donateNow")}
          </Link>

          {/* Mobile lang switcher */}
          <div className="mt-3 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold tracking-widest uppercase">{t("language")}</span>
            <div className="flex gap-1.5">
              {(["vi", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
                    ${lang === l
                      ? "bg-[#15803D] text-white shadow-sm"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                >
                  <span className="w-5 h-3.5 rounded-[2px] overflow-hidden flex-shrink-0 border border-slate-200/40 flex items-center justify-center">
                    {l === "vi" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-full h-full object-cover">
                        <rect width="900" height="600" fill="#da251d"/>
                        <polygon points="450,136 480,228 577,228 498,285 528,377 450,320 372,377 402,285 323,228 420,228" fill="#ffff00"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-full h-full object-cover">
                        <clipPath id="s-mob"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                        <clipPath id="t-mob"><path d="M30,15 L0,0 v15 z M30,15 L60,0 v15 z M30,15 L60,30 v-15 z M30,15 L0,30 v-15 z"/></clipPath>
                        <g clipPath="url(#s-mob)">
                          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="4" clipPath="url(#t-mob)"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6"/>
                        </g>
                      </svg>
                    )}
                  </span>
                  {l === "vi" ? "Tiếng Việt" : "English"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
