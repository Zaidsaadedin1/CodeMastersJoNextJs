import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Grid,
  Card,
  Badge,
  Group,
  SimpleGrid,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import {
  IconRocket,
  IconBulb,
  IconShield,
  IconCloudComputing,
  IconTransform,
  IconNetwork,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const DiscoverMore: React.FC = () => {
  const { t, i18n } = useTranslation("discoverMore");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  const keyFeatures = [
    {
      icon: IconRocket,
      key: "digital_acceleration",
      color: "blue",
    },
    {
      icon: IconBulb,
      key: "innovative_strategies",
      color: "green",
    },
    {
      icon: IconShield,
      key: "secure_ecosystems",
      color: "red",
    },
  ];

  const technologyServices = [
    {
      icon: IconCloudComputing,
      key: "cloud",
    },
    {
      icon: IconTransform,
      key: "transformation",
    },
    {
      icon: IconNetwork,
      key: "networking",
    },
  ];

  return (
    <Stack dir={i18n.language === "ar" ? "rtl" : "ltr"} py={50}>
      <Grid align="center" gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack dir={isRTL ? "rtl" : "ltr"} gap="lg">
            <Badge variant="light" size="lg" color="blue">
              {t("sections.tagline")}
            </Badge>
            <Title
              order={1}
              size={48}
              fw={900}
              style={{ textAlign: isRTL ? "right" : "left" }}
            >
              {t("sections.mainTitle")}
            </Title>
            <Text
              size="xl"
              c="dimmed"
              style={{ textAlign: isRTL ? "right" : "left" }}
            >
              {t("sections.mainDescription")}
            </Text>
            <Group>
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 45 }}
              >
                {t("buttons.discover")}
              </Button>
              <Button size="lg" variant="outline" color="blue">
                {t("buttons.consultation")}
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            {keyFeatures.map((feature) => (
              <Card
                key={feature.key}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <ThemeIcon
                  size={50}
                  radius="md"
                  variant="light"
                  color={feature.color}
                >
                  <feature.icon size={28} stroke={1.5} />
                </ThemeIcon>
                <Text fz="lg" fw={700} mt="md">
                  {t(`features.${feature.key}.title`)}
                </Text>
                <Text fz="sm" c="dimmed" mt="xs">
                  {t(`features.${feature.key}.description`)}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Grid.Col>
      </Grid>

      <Container size="lg" mt={80}>
        <Title
          order={2}
          mb="xl"
          style={{ textAlign: isRTL ? "right" : "left" }}
        >
          {t("sections.servicesTitle")}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {technologyServices.map((service) => (
            <Card
              key={service.key}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <ThemeIcon
                size={60}
                radius="md"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                mb="md"
              >
                <service.icon size={32} stroke={1.5} />
              </ThemeIcon>
              <Text fz="xl" fw={700} mb="md">
                {t(`services.${service.key}.title`)}
              </Text>
              <Text fz="md" c="dimmed">
                {t(`services.${service.key}.description`)}
              </Text>
              <Button variant="light" color="blue" mt="md">
                {t("buttons.learnMore")}
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default DiscoverMore;
