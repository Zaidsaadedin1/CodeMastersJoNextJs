import React, { useEffect, useState } from "react";
import { appWithTranslation, type UserConfig } from "next-i18next";
import Head from "next/head";
import { MantineProvider, Stack } from "@mantine/core";
import MenuComponent from "../app/blocks/MenuComponent/MenuComponent";
import Footer from "../app/blocks/Footer/Footer";
import SeoHead from "../app/components/SEO/SeoHead";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { theme } from "../theme";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../app/contexts/AuthContext";
import { Notifications } from "@mantine/notifications";
import { Open_Sans } from "next/font/google";
import nextI18NextConfig from "../next-i18next.config";
import { getHomeStructuredData } from "../app/utils/seo";

const openSansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--open-sans-font",
});

function App({
  Component,
  pageProps,
}: {
  readonly Component: React.ElementType;
  readonly pageProps: Readonly<Record<string, unknown>>;
}) {
  const router = useRouter();
  const dir = router.locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = router.locale ?? "en";
  }, [dir, router.locale]);

  const [queryClient] = useState(() => new QueryClient());

  // Check if the current page is an error page
  const isErrorPage =
    router.pathname === "/404" ||
    router.pathname === "/500" ||
    router.pathname === "/400";

  return (
    <MantineProvider
      theme={theme}
      withCssVariables
      cssVariablesSelector="html"
      getRootElement={() => document.documentElement}
    >
      <Notifications position="top-right" zIndex={1000} />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <SeoHead
            structuredData={router.pathname === "/" ? getHomeStructuredData() : []}
          />
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Stack className={openSansFont.className} style={{ direction: dir }}>
            {!isErrorPage && <MenuComponent />}
            <Component {...pageProps} />
            {!isErrorPage && <Footer />}
          </Stack>
        </QueryClientProvider>
      </AuthProvider>
    </MantineProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig as UserConfig);
