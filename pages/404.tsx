import React, { useState } from "react";
import { Button, Container, Text, Stack, Flex } from "@mantine/core";
import Link from "next/link";
import { IconHome, IconMoodSad } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["notFound", "common"])),
    },
  };
};

const NotFound = () => {
  const { t } = useTranslation("notFound");
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
        <Container size="md" py="xl" style={{ minHeight: "100vh" }}>
          <Flex
            direction="column"
            align="center"
            justify="center"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <Stack gap="xl" align="center">
              <IconMoodSad
                size={80}
                strokeWidth={1.5}
                color="var(--mantine-color-gray-5)"
              />

              <Text size={"42"} fw={700} color="gray.7">
                {t("title")}
              </Text>

              <Text size="lg" color="dimmed" maw={500}>
                {t("description")}
              </Text>

              <Link href="/" passHref locale={locale}>
                <Button
                  component="a"
                  variant="light"
                  size="md"
                  leftSection={<IconHome size={20} />}
                  style={(theme) => ({
                    backgroundColor: theme.colors.dark[6],
                    "&:hover": {
                      backgroundColor: theme.colors.gray[1],
                    },
                  })}
                  disabled={loading}
                  onClick={handleHomeClick}
                >
                  {t("homeButton")}
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Container>
      </motion.div>
    </>
  );
};

export default NotFound;
