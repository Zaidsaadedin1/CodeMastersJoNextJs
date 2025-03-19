import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { MantineProvider, Stack } from "@mantine/core";
import MenuComponent from "../app/blocks/MenuComponent/MenuComponent";
import Footer from "../app/blocks/Footer/Footer";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css"; // Import notifications styles
import { theme } from "../theme";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../app/contexts/AuthContext";
import { Notifications } from "@mantine/notifications"; // Import Notifications instead of NotificationsProvider

function App({ Component, pageProps }: any) {
  const router = useRouter();

  // Handle RTL/LTR direction
  const dir = router.locale === "ar" ? "rtl" : "ltr";

  // Set document direction and language
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = router.locale || "en";
  }, [dir, router.locale]);
  const queryClient = new QueryClient();

  return (
    <MantineProvider
      theme={theme}
      cssVariablesSelector="html"
      getRootElement={() => document.documentElement}
    >
      <Notifications position="top-right" zIndex={1000} />{" "}
      {/* Inside MantineProvider */}
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

          <Stack mr="10%" ml="10%" style={{ direction: dir }}>
            <MenuComponent />
            <Component {...pageProps} />
            <Footer />
          </Stack>
        </QueryClientProvider>
      </AuthProvider>
    </MantineProvider>
  );
}

export default appWithTranslation(App);
