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
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { getLocalizedPath } from "../../utils/i18n";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const isRTL = i18n.language === "ar";
  const currentLang = i18n.language;

  return (
    <Box dir={isRTL ? "rtl" : "ltr"} m={"md"}>
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
                <Text
                  size="sm"
                  dir="ltr"
                  style={{ unicodeBidi: "isolate", textAlign: "left" }}
                >
                  {t("phone")}
                </Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconMail size={16} />
                <Text
                  size="sm"
                  dir="ltr"
                  style={{ unicodeBidi: "isolate", textAlign: "left" }}
                >
                  {t("email")}
                </Text>
              </Group>
            </List.Item>
          </List>
        </Stack>
      </Group>
      <Divider my="xl" opacity={1} />
      <Group gap="lg">
        <Anchor
          component={Link}
          href={getLocalizedPath(currentLang, "/privacyPolicy")}
          size="xs"
          underline="never"
          c="inherit"
        >
          {t("privacy_policy")}
        </Anchor>
        <Anchor
          component={Link}
          href={getLocalizedPath(currentLang, "/termsOfService")}
          size="xs"
          underline="never"
          c="inherit"
        >
          {t("terms_of_service")}
        </Anchor>
        <Anchor
          component={Link}
          href={getLocalizedPath(currentLang, "/sitemap")}
          size="xs"
          underline="never"
          c="inherit"
        >
          {t("sitemap")}
        </Anchor>
      </Group>
    </Box>
  );
};

export default Footer;
