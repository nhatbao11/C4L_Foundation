"use client";

import React, { createContext, useContext } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

/**
 * LanguageProvider — thin wrapper over next-intl's locale routing.
 * `lang` reflects the current URL locale; `setLang` navigates to the same
 * path in the target locale (e.g. /about → /en/about).
 *
 * All existing components using `useLanguage()` continue to work unchanged.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale() as Language;
  const router = useRouter();
  const pathname = usePathname();

  const setLang = (newLang: Language) => {
    router.replace(pathname, { locale: newLang });
  };

  return (
    <LanguageContext.Provider value={{ lang: locale, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
