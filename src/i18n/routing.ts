import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  // vi → "/" (no prefix), en → "/en/..."
  localePrefix: "as-needed",
});
