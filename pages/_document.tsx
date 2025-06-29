import React from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || "en";

    return (
      <Html lang={currentLocale} {...mantineHtmlProps}>
        <Head>
          <ColorSchemeScript />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
