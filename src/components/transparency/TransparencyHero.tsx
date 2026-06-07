"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import PageHero from "@/components/PageHero";

export default function TransparencyHero() {
  const { lang } = useLanguage();

  const badge = lang === "vi" ? "Công Khai Tài Chính" : "Financial Disclosure";
  const title = lang === "vi" ? "Minh Bạch Tài Chính" : "Financial Transparency";
  const description = lang === "vi"
    ? "Chúng tôi cam kết công khai chi tiết mọi khoản đóng góp và chi tiêu. Niềm tin của cộng đồng chính là tài sản quý giá nhất của Quỹ Cỏ Bốn Lá."
    : "We pledge to fully and publicly disclose every donation and expenditure. Community trust is the single most valuable asset of the Co 4 La Foundation.";

  return (
    <PageHero
      badge={badge}
      title={title}
      description={description}
    />
  );
}
