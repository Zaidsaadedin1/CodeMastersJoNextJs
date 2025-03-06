// Source: _document.tsx
// _document.tsx is a special file in Next.js that is used to wrap the entire application. It is used to provide a consistent layout across all pages. In this case, we are using it to wrap the entire application with the MantineProvider component. This will ensure that the Mantine theme is applied to all components in the application.
import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="en" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
