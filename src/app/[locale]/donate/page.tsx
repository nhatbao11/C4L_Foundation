"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import QRAccountDetails from "@/components/transparency/QRAccountDetails";
import { useLanguage } from "@/components/LanguageContext";

export default function DonatePage() {
  const { lang } = useLanguage();

  const badge = lang === "vi" ? "Chung tay nâng đỡ" : "Support Co 4 La";
  const title = lang === "vi" ? "Cổng Quyên Góp" : "Donation Portal";
  const description = lang === "vi"
    ? "Mọi sự đóng góp của bạn đều được chuyển thẳng vào quỹ phát triển sinh viên Cỏ Bốn Lá, công khai và minh bạch 100%."
    : "All donations go directly to the Co 4 La student development fund, with 100% public transparency.";

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <PageHero
        badge={badge}
        title={title}
        description={description}
        isCompact={true}
      />

      <QRAccountDetails />

      <Footer />
    </div>
  );
}
