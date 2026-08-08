import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

// In Next.js 16, middleware was renamed to proxy
const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const res = intlMiddleware(request);
  console.log(`[Proxy] request: ${url} -> status: ${res.status}, rewrite: ${res.headers.get("x-middleware-rewrite")}, redirect: ${res.headers.get("location")}`);
  return res;
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    "/((?!api|_next/static|_next/image|favicon.ico|logo\\.jpg|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$|.*\\.pdf$|pdfs/).*)",
  ],
};
