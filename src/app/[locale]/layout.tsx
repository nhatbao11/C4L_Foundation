import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { LanguageProvider } from "@/components/LanguageContext";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  console.log("LocaleLayout params resolved:", resolvedParams);
  const locale = resolvedParams?.locale;

  if (!locale || !hasLocale(routing.locales, locale)) {
    console.log("Locale check failed, calling notFound() for locale:", locale);
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </NextIntlClientProvider>
  );
}
