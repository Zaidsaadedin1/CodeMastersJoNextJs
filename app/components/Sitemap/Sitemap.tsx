import React from "react";
import { Title, Text, List, Group, Anchor, Paper, Stack } from "@mantine/core";
import {
  IconHome,
  IconUsers,
  IconFileText,
  IconShoppingCart,
  IconHeadset,
  IconArticle,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getLocalizedPath } from "../../utils/i18n";

const sectionIcons: Record<string, typeof IconFileText> = {
  mainPages: IconHome,
  userAccount: IconUsers,
  services: IconShoppingCart,
  support: IconHeadset,
  resources: IconArticle,
  legal: IconFileText,
};

export default function Sitemap() {
  const { t, i18n } = useTranslation("siteMap");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const router = useRouter();
  const sections = t("sections", {
    returnObjects: true,
  }) as Record<
    string,
    { title: string; items: { path: string; title: string; description: string }[] }
  >;
  const sectionEntries = Object.entries(sections).filter(
    ([, section]) => Array.isArray(section.items) && section.items.length > 0
  );

  return (
    <Stack py="xl" dir={isRTL ? "rtl" : "ltr"}>
      <Title order={1} mb="md">
        {t("title")}
      </Title>
      <Text mb="xl">{t("description")}</Text>

      <Stack gap="xl">
        {sectionEntries.map(([sectionKey, section]) => {
          const IconComponent = sectionIcons[sectionKey] ?? IconFileText;

          return (
            <Paper key={sectionKey} withBorder p="md" radius="md">
              <Group mb="md">
                <IconComponent size={24} />
                <Title order={3}>{section.title}</Title>
              </Group>
              <List spacing="sm" size="md" icon={<span>•</span>}>
                {section.items.map((item) => (
                  <List.Item key={item.path}>
                    <Anchor
                      onClick={() =>
                        router.push(getLocalizedPath(currentLang, item.path))
                      }
                    >
                      {item.title}
                    </Anchor>
                    {" - "}
                    {item.description}
                  </List.Item>
                ))}
              </List>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  );
}
