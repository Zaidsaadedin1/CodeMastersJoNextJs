import React from "react";
import {
  Title,
  Text,
  Button,
  Stack,
  Badge,
  ThemeIcon,
  Box,
  SimpleGrid,
  Card,
  Container,
} from "@mantine/core";
import { keyframes } from "@emotion/react";
import {
  IconSchool,
  IconUsersGroup,
  IconCode,
  IconDeviceLaptop,
  IconBook,
  IconMovie,
  IconBrandBlogger,
  IconRocket,
  IconChartGridDots,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// Animation keyframes
const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const float = keyframes({
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-10px)" },
  "100%": { transform: "translateY(0px)" },
});

const scaleIn = keyframes({
  from: { transform: "scale(0.9)", opacity: 0 },
  to: { transform: "scale(1)", opacity: 1 },
});

const OurJourney: React.FC = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("ourPower");

  const milestones = [
    {
      icon: IconSchool,
      title: t("milestones.0.title"),
      description: t("milestones.0.description"),
    },
    {
      icon: IconUsersGroup,
      title: t("milestones.1.title"),
      description: t("milestones.1.description"),
    },
    {
      icon: IconCode,
      title: t("milestones.2.title"),
      description: t("milestones.2.description"),
    },
  ];

  const services = [
    {
      icon: IconDeviceLaptop,
      title: t("services.0.title"),
      description: t("services.0.description"),
    },
    {
      icon: IconBook,
      title: t("services.1.title"),
      description: t("services.1.description"),
    },
    {
      icon: IconMovie,
      title: t("services.2.title"),
      description: t("services.2.description"),
    },
    {
      icon: IconBrandBlogger,
      title: t("services.3.title"),
      description: t("services.3.description"),
    },
  ];

  return (
    <Container size="lg" py={80}>
      <Stack gap="xl">
        {/* Hero Section */}
        <Stack align="center" gap="xl" mb={60}>
          <Box style={{ animation: `${fadeIn} 1s ease-out` }}>
            <Badge size="xl" radius="sm" px="lg" py="xs" variant="light">
              {t("hero.subtitle")}
            </Badge>
          </Box>

          <Box style={{ animation: `${fadeIn} 1.2s ease-out` }}>
            <Title size={52} fw={900} ta="center">
              {t("hero.title")}
            </Title>
          </Box>

          <Box style={{ animation: `${fadeIn} 1.4s ease-out`, maxWidth: 700 }}>
            <Text size="xl" c="dimmed" lh={1.6} ta="center">
              {t("hero.description")}
            </Text>
          </Box>

          <Box style={{ animation: `${fadeIn} 1.6s ease-out` }}>
            <Button
              size="xl"
              radius="md"
              px={40}
              rightSection={<IconRocket size={24} />}
              onClick={() => router.push(`/${i18n.language}/contact`)}
            >
              {t("hero.cta")}
            </Button>
          </Box>
        </Stack>

        {/* Our Journey Section */}
        <Box mb={80}>
          <Title order={2} mb="xl" ta="center">
            {t("journeyTitle")}
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                withBorder
                padding="xl"
                radius="md"
                style={{
                  animation: `${fadeIn} ${0.8 + index * 0.2}s ease-out`,
                }}
              >
                <ThemeIcon size={80} radius="md" mb="md" variant="light">
                  <milestone.icon size={40} stroke={1.5} />
                </ThemeIcon>
                <Title order={3} mb="sm">
                  {milestone.title}
                </Title>
                <Text c="dimmed">{milestone.description}</Text>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Services Section */}
        <Box mb={80}>
          <Title order={2} mb="xl" ta="center">
            {t("servicesTitle")}
          </Title>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
            {services.map((service, index) => (
              <Card
                key={index}
                withBorder
                padding="xl"
                radius="md"
                style={{
                  animation: `${scaleIn} ${0.8 + index * 0.2}s ease-out`,
                }}
              >
                <ThemeIcon size={80} radius="md" mb="md" variant="light">
                  <service.icon size={40} stroke={1.5} />
                </ThemeIcon>
                <Title order={3} mb="sm">
                  {service.title}
                </Title>
                <Text c="dimmed">{service.description}</Text>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Future Goals */}
        <Box
          p={40}
          mb={80}
          style={{
            borderRadius: "var(--mantine-radius-lg)",
          }}
        >
          <Stack align="center" gap="xl">
            <Box style={{ animation: `${fadeIn} 1s ease-out` }}>
              <ThemeIcon
                size={100}
                radius="md"
                mb="md"
                mx="auto"
                variant="light"
              >
                <IconChartGridDots size={50} stroke={1.5} />
              </ThemeIcon>
              <Title order={2} ta="center">
                {t("future.title")}
              </Title>
            </Box>
            <Box style={{ animation: `${fadeIn} 1.2s ease-out` }}>
              <Text size="xl" ta="center" maw={800}>
                {t("future.description")}
              </Text>
            </Box>
            <Box style={{ animation: `${float} 4s ease-in-out infinite` }}>
              <Button
                size="xl"
                radius="md"
                px={40}
                onClick={() => router.push(`/${i18n.language}/contact`)}
              >
                {t("future.cta")}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default OurJourney;
