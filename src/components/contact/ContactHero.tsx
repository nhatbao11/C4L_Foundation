"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import PageHero from "@/components/PageHero";

export default function ContactHero() {
  const { lang } = useLanguage();

  const badge = lang === "vi" ? "Kết Nối Cùng Cỏ 4 Lá" : "Connect with Co 4 La";
  const title = lang === "vi" ? "Liên Hệ Với Chúng Tôi" : "Contact Us";
  const description = lang === "vi"
    ? "Mọi ý kiến đóng góp, thắc mắc hoặc yêu cầu đồng hành xin vui lòng liên hệ với ban quản trị."
    : "For any feedback, questions, or partnership inquiries, please feel free to contact us.";

  return (
    <PageHero
      badge={badge}
      title={title}
      description={description}
      isCompact={true}
    />
  );
}
