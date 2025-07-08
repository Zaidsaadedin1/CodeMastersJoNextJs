import React, { useState } from "react";
import { Button, Text, Stack, Flex } from "@mantine/core";
import Link from "next/link";
import { IconHome, IconLock } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "forbidden",
        "common",
      ])),
    },
  };
};

const Forbidden = () => {
  const { t } = useTranslation("forbidden");
  const { locale } = useRouter();
  const isRtl = locale === "ar";
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleHomeClick = () => {
    setLoading(true);
    router.push("/", undefined, { locale });
  };

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{ minHeight: "100vh" }}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <Stack gap="sm" align="center">
            <IconLock
              size={80}
              strokeWidth={1.5}
              color="var(--mantine-color-red-6)"
            />
            <Text size="42px" fw={700} c="red.6">
              {t("title")} (403)
            </Text>
            <Text size="lg" c="dimmed" maw={500} ta="center">
              {t("description")}
            </Text>
            <Button
              variant="filled"
              size="md"
              leftSection={<IconHome size={20} />}
              color="red.6"
              loading={loading}
              onClick={handleHomeClick}
              component={Link}
              href="/"
              locale={locale}
            >
              {t("homeButton")}
            </Button>
          </Stack>
        </Flex>
      </motion.div>
    </>
  );
};

export default Forbidden;
