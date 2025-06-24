import React from "react";
import { Title, Text, Box, Stack } from "@mantine/core";
import { useTranslation } from "next-i18next";

export default function TermsOfService() {
  const { t, i18n } = useTranslation("termsOfService");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph) => (
        <Text
          key={
            typeof paragraph === "string"
              ? paragraph
              : JSON.stringify(paragraph)
          }
          mb="md"
          dir={dir}
        >
          {paragraph}
        </Text>
      ));
    }
    return (
      <Text mb="md" dir={dir}>
        {content}
      </Text>
    );
  };

  return (
    <Stack py="xl" dir={dir}>
      <Title order={1} mb="md">
        {t("title")}
      </Title>
      <Text size="sm" color="dimmed" mb="xl">
        {t("lastUpdated")}
      </Text>

      <Stack gap="xl">
        {/* Introduction Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.introduction.title")}
          </Title>
          {renderContent(
            t("sections.introduction.content", {
              returnObjects: true,
            }) as string[]
          )}
        </Box>

        {/* Definitions Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.definitions.title")}
          </Title>
          <Text mb="md" dir={dir}>
            {t("sections.definitions.content.service")}
          </Text>
          <Text mb="md" dir={dir}>
            {t("sections.definitions.content.user")}
          </Text>
          <Text mb="md" dir={dir}>
            {t("sections.definitions.content.content")}
          </Text>
        </Box>

        {/* User Accounts Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.userAccounts.title")}
          </Title>
          {renderContent(
            t("sections.userAccounts.content", {
              returnObjects: true,
            }) as string[]
          )}
        </Box>

        {/* Ordering Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.ordering.title")}
          </Title>
          {renderContent(
            t("sections.ordering.content", { returnObjects: true }) as string[]
          )}
        </Box>

        {/* Intellectual Property Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.ip.title")}
          </Title>
          {renderContent(
            t("sections.ip.content", { returnObjects: true }) as string[]
          )}
        </Box>

        {/* User Content Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.userContent.title")}
          </Title>
          {renderContent(
            t("sections.userContent.content", {
              returnObjects: true,
            }) as string[]
          )}
        </Box>

        {/* Prohibited Uses Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.prohibited.title")}
          </Title>
          {renderContent(
            t("sections.prohibited.content", {
              returnObjects: true,
            }) as string[]
          )}
        </Box>

        {/* Liability Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.liability.title")}
          </Title>
          {renderContent(
            t("sections.liability.content", { returnObjects: true }) as string[]
          )}
        </Box>

        {/* Changes Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.changes.title")}
          </Title>
          {renderContent(t("sections.changes.content"))}
        </Box>

        {/* Contact Section */}
        <Box>
          <Title order={3} mb="md">
            {t("sections.contact.title")}
          </Title>
          <Text mb="md" dir={dir}>
            {t("sections.contact.content", {
              email: "contact@codemastersjo.site",
            })}
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
}
