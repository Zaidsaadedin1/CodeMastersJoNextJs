import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { MantineProvider, Stack } from "@mantine/core";
import MenuComponent from "../app/blocks/MenuComponent/MenuComponent";
import Footer from "../app/blocks/Footer/Footer";
import "@mantine/core/styles.css";
import { theme } from "../theme";
import { useClientTranslation } from "../app/hooks/useClientTranslation";
function App({ Component, pageProps }: any) {
  const { i18n } = useClientTranslation();

  return (
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

      <Stack mr="10%" ml="10%" style={{ direction: i18n.dir() }}>
        <MenuComponent />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </MantineProvider>
  );
}

export default appWithTranslation(App);
