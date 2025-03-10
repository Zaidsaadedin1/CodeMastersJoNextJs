import React from "react";
import {
  Container,
  Grid,
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
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation("footer");
  const isRTL = i18n.language === "ar";

  return (
    <Box mt={30} py="xl" dir={isRTL ? "rtl" : "ltr"}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
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
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
          <Stack gap="md">
            <Title order={4}>{t("services")}</Title>
            <List
              spacing="xs"
              size="sm"
              center
              style={{ listStyleType: "none" }}
            >
              {[
                "web_development",
                "mobile_apps",
                "cloud_solutions",
                "ai_integration",
                "devops_services",
              ].map((service) => (
                <List.Item key={service}>
                  <Anchor underline="never">{t(service)}</Anchor>
                </List.Item>
              ))}
            </List>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
          <Stack gap="md">
            <Title order={4}>{t("resources")}</Title>
            <List
              spacing="xs"
              size="sm"
              center
              style={{ listStyleType: "none" }}
            >
              {["blog", "case_studies", "documentation", "faq", "support"].map(
                (resource) => (
                  <List.Item key={resource}>
                    <Anchor underline="never">{t(resource)}</Anchor>
                  </List.Item>
                )
              )}
            </List>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack gap="sm">
            <Title order={4}>{t("contact_us")}</Title>
            <List spacing="md" size="sm" style={{ listStyleType: "none" }}>
              <List.Item>
                <Group gap="sm" wrap="nowrap">
                  <IconMapPin size={16} />
                  <Text>{t("address")}</Text>
                </Group>
              </List.Item>
              <List.Item>
                <Group gap="sm" wrap="nowrap">
                  <IconPhone size={16} />
                  <Text>{t("phone")}</Text>
                </Group>
              </List.Item>
              <List.Item>
                <Group gap="sm" wrap="nowrap">
                  <IconMail size={16} />
                  <Text>{t("email")}</Text>
                </Group>
              </List.Item>
            </List>
          </Stack>
        </Grid.Col>
      </Grid>

      <Divider my="xl" opacity={0.1} />

      <Group justify="apart" align="center">
        <Text size="xs">
          © {currentYear} {t("company_name")}. {t("rights_reserved")}
        </Text>
        <Group gap="lg">
          <Anchor size="xs" underline="never" href="/privacyPolicy">
            {t("privacy_policy")}
          </Anchor>
          <Anchor size="xs" underline="never" href="/termsOfService">
            {t("terms_of_service")}
          </Anchor>
          <Anchor size="xs" underline="never" href="/sitemap">
            {t("sitemap")}
          </Anchor>
        </Group>
      </Group>
    </Box>
  );
};

export default Footer;
