import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { MantineProvider, Stack } from "@mantine/core";
import MenuComponent from "../app/blocks/MenuComponent/MenuComponent";
import Footer from "../app/blocks/Footer/Footer";
import "@mantine/core/styles.css";
import { theme } from "../theme";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../app/contexts/AuthContext";

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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={theme}
          cssVariablesSelector="html"
          getRootElement={() => document.documentElement}
        >
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
        </MantineProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default appWithTranslation(App);
