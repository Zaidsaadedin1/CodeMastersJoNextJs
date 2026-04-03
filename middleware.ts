import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getLocalizedPath,
  isSupportedLocale,
} from "./app/utils/i18n";

const PUBLIC_FILE = /\.(.*)$/;
const LEGACY_ROUTE_ALIASES: Record<string, string> = {
  "/about": "/discoverMore",
  "/services": "/ourPower",
  "/contact": "/requestService",
  "/signup": "/signUp",
  "/forgot-password": "/forgotPassword",
  "/products": "/requestService",
  "/pricing": "/requestService",
  "/submit-order": "/requestService",
  "/order-tracking": "/dashboard",
  "/support": "/sitemap",
  "/faq": "/sitemap",
  "/documentation": "/sitemap",
  "/tickets": "/sitemap",
  "/blog": "/discoverMore",
  "/case-studies": "/discoverMore",
  "/webinars": "/joinTheJourney",
  "/resources": "/sitemap",
  "/terms-of-service": "/termsOfService",
  "/privacy-policy": "/privacyPolicy",
  "/cookie-policy": "/privacyPolicy",
  "/refund-policy": "/termsOfService",
};

export function middleware(req: NextRequest) {
  const { pathname, locale } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const normalizedPathname =
    pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;
  const legacyRoute = LEGACY_ROUTE_ALIASES[normalizedPathname];

  if (legacyRoute) {
    const aliasUrl = req.nextUrl.clone();
    const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
    const targetLocale = isSupportedLocale(locale)
      ? locale
      : isSupportedLocale(cookieLocale)
        ? cookieLocale
        : DEFAULT_LOCALE;

    aliasUrl.pathname = getLocalizedPath(targetLocale, legacyRoute);

    return NextResponse.redirect(aliasUrl);
  }

  if (isSupportedLocale(locale)) {
    const response = NextResponse.next();

    if (req.cookies.get("NEXT_LOCALE")?.value !== locale) {
      response.cookies.set("NEXT_LOCALE", locale, {
        path: "/",
        sameSite: "lax",
      });
    }

    return response;
  }

  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const redirectLocale = isSupportedLocale(cookieLocale)
    ? cookieLocale
    : DEFAULT_LOCALE;
  const redirectUrl = req.nextUrl.clone();

  redirectUrl.pathname = getLocalizedPath(redirectLocale, pathname);

  return NextResponse.redirect(redirectUrl);
}
