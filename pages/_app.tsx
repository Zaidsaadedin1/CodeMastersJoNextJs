import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider, Stack } from "@mantine/core";
import { theme } from "../theme";
import MenuComponent from "../app/blocks/MenuComponent/MenuComponent";
import Footer from "../app/blocks/Footer/Footer";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <Stack mr="10%" ml="10%">
        <MenuComponent />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </MantineProvider>
  );
}
export default appWithTranslation(App);
