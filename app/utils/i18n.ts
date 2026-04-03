export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "ar"] as const;
export const sharedPageNamespaces = [
  "common",
  "menuComponent",
  "footer",
] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale?: string): locale is AppLocale {
  return SUPPORTED_LOCALES.includes(locale as AppLocale);
}

export function normalizeLocale(locale?: string): AppLocale {
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function getPageNamespaces(...namespaces: string[]) {
  return Array.from(new Set([...sharedPageNamespaces, ...namespaces]));
}

export function getLocalizedPath(locale: string | undefined, path = "/") {
  const normalizedPath =
    path === "/" ? "/" : `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;

  return `/${normalizeLocale(locale)}${normalizedPath === "/" ? "/" : normalizedPath}`;
}
