import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type AppLocale,
  normalizeLocale,
} from "./i18n";

export const SITE_NAME = "Code Masters Jo";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://codemastersjo.site"
).replace(/\/+$/, "");
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.png`;

type LocaleMap = Record<AppLocale, string>;

type SeoRoute = {
  title: LocaleMap;
  description: LocaleMap;
  indexable: boolean;
  includeInSitemap: boolean;
  ogType?: "website" | "article";
};

const SEO_ROUTES: Record<string, SeoRoute> = {
  "/": {
    title: {
      en: "Code Masters Jo | Web Development & AI Solutions in Jordan",
      ar: "كود ماسترز جو | تطوير الويب وحلول الذكاء الاصطناعي في الأردن",
    },
    description: {
      en: "Code Masters Jo builds websites, custom software, ecommerce platforms, and AI-powered digital solutions for businesses in Jordan and the Middle East.",
      ar: "كود ماسترز جو تطور مواقع الويب والبرمجيات المخصصة ومتاجر التجارة الإلكترونية وحلول الذكاء الاصطناعي للشركات في الأردن والمنطقة.",
    },
    indexable: true,
    includeInSitemap: true,
    ogType: "website",
  },
  "/discoverMore": {
    title: {
      en: "Custom Websites & Digital Products | Code Masters Jo",
      ar: "مواقع مخصصة ومنتجات رقمية | كود ماسترز جو",
    },
    description: {
      en: "Explore portfolio websites, ecommerce builds, business platforms, blogs, and tailored digital products from Code Masters Jo.",
      ar: "استكشف مواقع البورتفوليو والمتاجر الإلكترونية والمنصات التجارية والمدونات والمنتجات الرقمية المخصصة من كود ماسترز جو.",
    },
    indexable: true,
    includeInSitemap: true,
  },
  "/joinTheJourney": {
    title: {
      en: "About Code Masters Jo | Innovation, Mentorship, and Growth",
      ar: "عن كود ماسترز جو | الابتكار والإرشاد والنمو",
    },
    description: {
      en: "Learn how Code Masters Jo grew from mentorship into a digital solutions company building modern products for ambitious teams.",
      ar: "تعرّف كيف تطورت كود ماسترز جو من الإرشاد إلى شركة حلول رقمية تبني منتجات حديثة للفرق الطموحة.",
    },
    indexable: true,
    includeInSitemap: true,
  },
  "/ourPower": {
    title: {
      en: "Software, AI, Cloud & Training Services | Code Masters Jo",
      ar: "خدمات البرمجيات والذكاء الاصطناعي والسحابة والتدريب | كود ماسترز جو",
    },
    description: {
      en: "Discover Code Masters Jo services across custom software, AI solutions, cloud platforms, digital transformation, and technical training.",
      ar: "اكتشف خدمات كود ماسترز جو في البرمجيات المخصصة وحلول الذكاء الاصطناعي والمنصات السحابية والتحول الرقمي والتدريب التقني.",
    },
    indexable: true,
    includeInSitemap: true,
  },
  "/requestService": {
    title: {
      en: "Request a Website or Software Project Quote | Code Masters Jo",
      ar: "اطلب عرض سعر لموقع أو مشروع برمجي | كود ماسترز جو",
    },
    description: {
      en: "Tell Code Masters Jo about your website, software, ecommerce, or AI project and request a tailored quote for your business.",
      ar: "أخبر كود ماسترز جو عن مشروعك في الويب أو البرمجيات أو التجارة الإلكترونية أو الذكاء الاصطناعي واطلب عرض سعر مخصصًا لعملك.",
    },
    indexable: true,
    includeInSitemap: true,
  },
  "/privacyPolicy": {
    title: {
      en: "Privacy Policy | Code Masters Jo",
      ar: "سياسة الخصوصية | كود ماسترز جو",
    },
    description: {
      en: "Read the Code Masters Jo privacy policy to understand how personal information is collected, used, and protected.",
      ar: "اطلع على سياسة الخصوصية الخاصة بكود ماسترز جو لمعرفة كيفية جمع المعلومات الشخصية واستخدامها وحمايتها.",
    },
    indexable: true,
    includeInSitemap: true,
  },
  "/termsOfService": {
    title: {
      en: "Terms of Service | Code Masters Jo",
      ar: "شروط الخدمة | كود ماسترز جو",
    },
    description: {
      en: "Review the terms of service that govern the use of the Code Masters Jo website, services, and digital products.",
      ar: "راجع شروط الخدمة التي تنظم استخدام موقع كود ماسترز جو وخدماته ومنتجاته الرقمية.",
    },
    indexable: true,
    includeInSitemap: true,
  },
  "/login": {
    title: {
      en: "Login | Code Masters Jo",
      ar: "تسجيل الدخول | كود ماسترز جو",
    },
    description: {
      en: "Access your Code Masters Jo account.",
      ar: "الوصول إلى حسابك في كود ماسترز جو.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/signUp": {
    title: {
      en: "Create an Account | Code Masters Jo",
      ar: "إنشاء حساب | كود ماسترز جو",
    },
    description: {
      en: "Create your Code Masters Jo account to manage projects and requests.",
      ar: "أنشئ حسابك في كود ماسترز جو لإدارة المشاريع والطلبات.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/forgotPassword": {
    title: {
      en: "Reset Password | Code Masters Jo",
      ar: "إعادة تعيين كلمة المرور | كود ماسترز جو",
    },
    description: {
      en: "Reset your Code Masters Jo account password.",
      ar: "أعد تعيين كلمة مرور حسابك في كود ماسترز جو.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/dashboard": {
    title: {
      en: "Dashboard | Code Masters Jo",
      ar: "لوحة التحكم | كود ماسترز جو",
    },
    description: {
      en: "Manage your Code Masters Jo account and project activity.",
      ar: "إدارة حسابك ونشاط مشاريعك في كود ماسترز جو.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/admin": {
    title: {
      en: "Admin Dashboard | Code Masters Jo",
      ar: "لوحة تحكم الإدارة | كود ماسترز جو",
    },
    description: {
      en: "Administrative area for Code Masters Jo.",
      ar: "منطقة الإدارة الخاصة بكود ماسترز جو.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/profile": {
    title: {
      en: "Profile | Code Masters Jo",
      ar: "الملف الشخصي | كود ماسترز جو",
    },
    description: {
      en: "Your Code Masters Jo account profile.",
      ar: "الملف الشخصي لحسابك في كود ماسترز جو.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/sitemap": {
    title: {
      en: "HTML Sitemap | Code Masters Jo",
      ar: "خريطة الموقع | كود ماسترز جو",
    },
    description: {
      en: "Browse the main sections of the Code Masters Jo website.",
      ar: "تصفح الأقسام الرئيسية في موقع كود ماسترز جو.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/403": {
    title: {
      en: "Access Denied | Code Masters Jo",
      ar: "تم رفض الوصول | كود ماسترز جو",
    },
    description: {
      en: "Access denied page.",
      ar: "صفحة رفض الوصول.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/404": {
    title: {
      en: "Page Not Found | Code Masters Jo",
      ar: "الصفحة غير موجودة | كود ماسترز جو",
    },
    description: {
      en: "Page not found.",
      ar: "الصفحة غير موجودة.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/500": {
    title: {
      en: "Server Error | Code Masters Jo",
      ar: "خطأ في الخادم | كود ماسترز جو",
    },
    description: {
      en: "Server error page.",
      ar: "صفحة خطأ في الخادم.",
    },
    indexable: false,
    includeInSitemap: false,
  },
  "/unAuthorized": {
    title: {
      en: "Unauthorized | Code Masters Jo",
      ar: "غير مصرح | كود ماسترز جو",
    },
    description: {
      en: "Unauthorized access page.",
      ar: "صفحة وصول غير مصرح به.",
    },
    indexable: false,
    includeInSitemap: false,
  },
};

const FALLBACK_ROUTE: SeoRoute = {
  title: {
    en: "Code Masters Jo | Digital Solutions in Jordan",
    ar: "كود ماسترز جو | حلول رقمية في الأردن",
  },
  description: {
    en: "Code Masters Jo delivers websites, software, and AI-driven digital solutions.",
    ar: "كود ماسترز جو تقدم مواقع الويب والبرمجيات والحلول الرقمية المدعومة بالذكاء الاصطناعي.",
  },
  indexable: true,
  includeInSitemap: false,
  ogType: "website",
};

export function getCanonicalPath(locale: string | undefined, pathname = "/") {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedPath =
    pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;
  const localizedPath =
    normalizedPath === "/"
      ? `/${normalizedLocale}/`
      : `/${normalizedLocale}${normalizedPath}/`;

  return localizedPath.replace(/\/{2,}/g, "/");
}

export function buildAbsoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "/" : path.replace(/\/+$/, "/")}`;
}

export function getSeoRoute(pathname: string) {
  return SEO_ROUTES[pathname] ?? FALLBACK_ROUTE;
}

export function getPageSeo(pathname: string, locale?: string) {
  const normalizedLocale = normalizeLocale(locale);
  const route = getSeoRoute(pathname);
  const canonicalPath = getCanonicalPath(normalizedLocale, pathname);
  const canonicalUrl = buildAbsoluteUrl(canonicalPath);
  const alternateUrls = Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      buildAbsoluteUrl(getCanonicalPath(supportedLocale, pathname)),
    ])
  ) as Record<AppLocale, string>;

  return {
    locale: normalizedLocale,
    title: route.title[normalizedLocale],
    description: route.description[normalizedLocale],
    canonicalUrl,
    alternateUrls,
    xDefaultUrl: alternateUrls[DEFAULT_LOCALE],
    robots: route.indexable ? "index, follow" : "noindex, nofollow",
    ogType: route.ogType ?? "website",
    indexable: route.indexable,
  };
}

export function getSitemapPathnames() {
  return Object.entries(SEO_ROUTES)
    .filter(([, route]) => route.includeInSitemap)
    .map(([pathname]) => pathname);
}

export function getHomeStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Code Masters",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      email: "contact@codemastersjo.site",
      telephone: "+962782739761",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Queen Rania Street",
        addressLocality: "Amman",
        addressCountry: "JO",
      },
      sameAs: [
        "https://www.facebook.com/codemastersjo",
        "https://www.linkedin.com/company/codemastersjo",
        "https://www.instagram.com/codemastersjo",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ["en", "ar"],
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ];
}
