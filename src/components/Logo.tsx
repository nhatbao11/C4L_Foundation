import React from "react";
import { useLanguage } from "@/components/LanguageContext";

interface LogoProps {
  className?: string;
  variant?: "icon" | "full";
  size?: number;
}

export default function Logo({ className = "", variant = "icon", size = 48 }: LogoProps) {
  const { lang } = useLanguage();

  if (variant === "icon") {
    return (
      <img
        src="/logo.jpg"
        alt={lang === "vi" ? "Logo Cỏ 4 Lá" : "Co 4 La Logo"}
        width={size}
        height={size}
        className={`inline-block rounded-full select-none ${className}`}
        style={{ width: `${size}px`, height: `${size}px`, objectFit: "cover" }}
      />
    );
  }

  // Full Logo with clean single-line Text Layout (bigger and consistent)
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <img
        src="/logo.jpg"
        alt={lang === "vi" ? "Logo Cỏ 4 Lá" : "Co 4 La Logo"}
        width={size}
        height={size}
        className="flex-shrink-0 rounded-full"
        style={{ width: `${size}px`, height: `${size}px`, objectFit: "cover" }}
      />
      <span
        className="font-display font-black tracking-wider text-[#0F623D]"
        style={{ fontSize: `${size * 0.42}px`, lineHeight: "1" }}
      >
        {lang === "vi" ? "CỎ 4 LÁ FOUNDATION" : "CO 4 LA FOUNDATION"}
      </span>
    </div>
  );
}
