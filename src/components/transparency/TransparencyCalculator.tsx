"use client";

import React from "react";
import BudgetCalculator from "@/components/BudgetCalculator";
import { useLanguage } from "@/components/LanguageContext";

export default function TransparencyCalculator() {
  const { lang } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-24 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-widest text-slate-950 uppercase">
            {lang === "vi" ? "MÔ PHỎNG CHI PHÍ & ĐÓNG GÓP" : "COST & CONTRIBUTION ESTIMATOR"}
          </h2>
          <div className="w-24 h-1 bg-[#15803D] mx-auto mt-4 rounded-full"></div>
        </div>

        <BudgetCalculator />
      </div>
    </section>
  );
}
