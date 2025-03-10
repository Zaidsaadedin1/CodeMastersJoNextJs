// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    /\.(.*)$/.test(pathname)
  ) {
    return;
  }

  // Check existing path for valid locale
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If valid locale found, set cookie and continue
  if (pathLocale) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", pathLocale);
    return response;
  }

  // Get preferred locale
  const preferredLocale =
    request.cookies.get("NEXT_LOCALE")?.value ||
    request.headers.get("accept-language")?.split(",")[0]?.split("-")[0] ||
    defaultLocale;

  const locale = locales.includes(preferredLocale)
    ? preferredLocale
    : defaultLocale;

  // Clean existing locale prefixes
  const cleanPath = pathname
    .split("/")
    .filter((segment) => !locales.includes(segment))
    .join("/");

  // Redirect to localized path
  request.nextUrl.pathname = `/${locale}${cleanPath}`;
  return NextResponse.redirect(request.nextUrl);
}
