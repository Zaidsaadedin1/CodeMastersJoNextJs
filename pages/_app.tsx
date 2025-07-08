import React from "react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { MantineProvider, Stack } from "@mantine/core";
import MenuComponent from "../app/blocks/MenuComponent/MenuComponent";
import Footer from "../app/blocks/Footer/Footer";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { theme } from "../theme";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../app/contexts/AuthContext";
import { Notifications } from "@mantine/notifications";
import { Open_Sans } from "next/font/google";

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

  const queryClient = new QueryClient();

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
          <Head>
            <title>Code Masters</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
            <link rel="shortcut icon" href="/favicon.svg" />
          </Head>

          <Stack
            className={openSansFont.className}
            mr={isErrorPage ? "0" : "10%"}
            ml={isErrorPage ? "0" : "10%"}
            style={{ direction: dir }}
          >
            {!isErrorPage && <MenuComponent />}
            <Component {...pageProps} />
            {!isErrorPage && <Footer />}
          </Stack>
        </QueryClientProvider>
      </AuthProvider>
    </MantineProvider>
  );
}

export default appWithTranslation(App);
