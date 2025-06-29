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

const sectionIcons = {
  mainPages: IconHome,
  userAccount: IconUsers,
  orderProducts: IconShoppingCart,
  support: IconHeadset,
  resources: IconArticle,
  legal: IconFileText,
};

export default function Sitemap() {
  const { t, i18n } = useTranslation("siteMap");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const router = useRouter();

  const sections: (keyof typeof sectionIcons)[] = [
    "mainPages",
    "userAccount",
    "orderProducts",
    "support",
    "resources",
    "legal",
  ];

  return (
    <Stack py="xl" dir={isRTL ? "rtl" : "ltr"}>
      <Title order={1} mb="md">
        {t("title")}
      </Title>
      <Text mb="xl">{t("description")}</Text>

      <Stack gap="xl">
        {sections.map((sectionKey: keyof typeof sectionIcons) => {
          const IconComponent = sectionIcons[sectionKey];
          const section = t(`sections.${sectionKey}`, {
            returnObjects: true,
          }) as {
            title: string;
            items: { path: string; title: string; description: string }[];
          };

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
                        router.push(`/${currentLang}${item.path}`, undefined, {
                          locale: currentLang,
                        })
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
