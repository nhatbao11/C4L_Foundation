"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLanguage } from "@/components/LanguageContext";

const pathNames: Record<string, { vi: string; en: string }> = {
  "about": { vi: "GIỚI THIỆU", en: "ABOUT US" },
  "apply": { vi: "DANH SÁCH", en: "STUDENTS" },
  "transparency": { vi: "BÁO CÁO MINH BẠCH", en: "TRANSPARENCY" },
  "journal": { vi: "BẢN TIN", en: "JOURNAL" },
  "contact": { vi: "LIÊN HỆ", en: "CONTACT" },
  "donate": { vi: "QUYÊN GÓP", en: "DONATE" },
  "volunteer": { vi: "TÌNH NGUYỆN VIÊN", en: "VOLUNTEER" },
  "mentor": { vi: "ĐĂNG KÝ MENTOR", en: "MENTOR" },
  "hybrid-4l": { vi: "MÔ HÌNH HYBRID 4L", en: "HYBRID 4L" }
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  // Split pathname and remove empty elements
  const segments = pathname.split("/").filter(Boolean);
  const currentSegment = segments[segments.length - 1] || "";
  const config = pathNames[currentSegment];

  const pageTitle = config 
    ? (lang === "vi" ? config.vi : config.en)
    : currentSegment.toUpperCase();

  const homeLabel = lang === "vi" ? "TRANG CHỦ" : "HOME";

  return (
    <div className="flex items-center justify-start gap-2.5 font-display text-[10px] md:text-xs font-black tracking-widest uppercase mb-6 w-full self-start text-left">
      <Link 
        href="/" 
        className="text-white/40 hover:text-white transition-colors duration-300"
      >
        {homeLabel}
      </Link>
      
      <span className="text-white/20 select-none font-normal">/</span>
      
      <span className="text-white font-extrabold">
        {pageTitle}
      </span>
    </div>
  );
}
