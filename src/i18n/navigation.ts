import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers — use these instead of next/navigation equivalents
export const { Link, useRouter, usePathname, redirect, getPathname } =
  createNavigation(routing);
