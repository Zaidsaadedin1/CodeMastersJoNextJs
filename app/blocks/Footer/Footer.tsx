import React from "react";
import {
  Group,
  Text,
  Title,
  Stack,
  Divider,
  ActionIcon,
  List,
  Anchor,
  Box,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const router = useRouter();
  const isRTL = i18n.language === "ar";
  const currentLang = i18n.language;

  return (
    <Box mt={30} py="xl" dir={isRTL ? "rtl" : "ltr"}>
      <Divider my="xl" opacity={1} />
      <Group gap="lg" justify="space-between">
        <Stack gap="md">
          <Title order={3}>{t("company_name")}</Title>
          <Text size="sm">{t("company_description")}</Text>
          <Group gap="md">
            <Anchor
              href="https://www.facebook.com/codemastersjo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="subtle">
                <IconBrandFacebook size={18} />
              </ActionIcon>
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/company/codemastersjo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="subtle">
                <IconBrandLinkedin size={18} />
              </ActionIcon>
            </Anchor>
            <Anchor
              href="https://www.instagram.com/codemastersjo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="subtle">
                <IconBrandInstagram size={18} />
              </ActionIcon>
            </Anchor>
          </Group>
        </Stack>

        <Stack gap="sm">
          <Title order={4}>{t("contact_us")}</Title>
          <List spacing="md" size="sm" style={{ listStyleType: "none" }}>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconMapPin size={16} />
                <Text size="sm">{t("address")}</Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconPhone size={16} />
                <Text size="sm">{t("phone")}</Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconMail size={16} />
                <Text size="sm">{t("email")}</Text>
              </Group>
            </List.Item>
          </List>
        </Stack>
      </Group>
      <Divider my="xl" opacity={1} />
      <Group gap="lg">
        <Text
          size="xs"
          onClick={() => router.push(`/${currentLang}/privacyPolicy`)}
          style={{ cursor: "pointer" }}
        >
          {t("privacy_policy")}
        </Text>
        <Text
          size="xs"
          onClick={() => router.push(`/${currentLang}/termsOfService`)}
          style={{ cursor: "pointer" }}
        >
          {t("terms_of_service")}
        </Text>
        <Text
          size="xs"
          onClick={() => router.push(`/${currentLang}/sitemap`)}
          style={{ cursor: "pointer" }}
        >
          {t("sitemap")}
        </Text>
      </Group>
    </Box>
  );
};

export default Footer;
