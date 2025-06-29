import React from "react";
import { Title, Text, Box, List, Divider, Stack } from "@mantine/core";
import { useTranslation } from "next-i18next";

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation("privacyPolicy");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const email = "info@codemastersjo.site";

  interface Section {
    title: string;
    content: string[] | string;
    items: { title?: string; content?: string }[];
    contact: string;
  }

  const renderSection = (sectionKey: string) => {
    const section: Section = t(`sections.${sectionKey}`, {
      returnObjects: true,
    }) as Section;

    return (
      <Box key={sectionKey} mb="xl">
        <Title order={3} mb="md">
          {section.title}
        </Title>

        {Array.isArray(section.content) ? (
          section.content.map((paragraph, index) => (
            <Text key={index} mb="md">
              {paragraph}
            </Text>
          ))
        ) : (
          <Text mb="md">{section.content}</Text>
        )}

        {section.items && (
          <List
            mb="md"
            spacing="sm"
            pl={isRTL ? "md" : undefined}
            pr={isRTL ? undefined : "md"}
            icon={
              <span
                style={{
                  marginInlineEnd: isRTL ? "0" : "0.5rem",
                  marginInlineStart: isRTL ? "0.5rem" : "0",
                }}
              >
                •
              </span>
            }
          >
            {section.items.map(
              (item: { title?: string; content?: string }, index: number) => (
                <List.Item key={index}>
                  {item.title ? (
                    <>
                      <strong>{item.title}:</strong> {item.content}
                    </>
                  ) : (
                    item.content || ""
                  )}
                </List.Item>
              )
            )}
          </List>
        )}

        {section.contact && (
          <Text mb="md">{t(`sections.${sectionKey}.contact`, { email })}</Text>
        )}
      </Box>
    );
  };

  return (
    <Stack py="xl" dir={isRTL ? "rtl" : "ltr"}>
      <Title order={1} mb="md">
        {t("title")}
      </Title>
      <Text color="dimmed" mb="xl">
        {t("lastUpdated")}
      </Text>

      {renderSection("introduction")}
      <Divider my="xl" />

      {renderSection("informationCollected")}
      <Divider my="xl" />

      {renderSection("informationUse")}
      <Divider my="xl" />

      {renderSection("dataSharing")}
      <Divider my="xl" />

      {renderSection("yourRights")}
      <Divider my="xl" />

      <Box mb="xl">
        <Title order={3} mb="md">
          {t("sections.contact.title")}
        </Title>
        <Text mb="md">{t("sections.contact.content", { email })}</Text>
      </Box>
    </Stack>
  );
}
