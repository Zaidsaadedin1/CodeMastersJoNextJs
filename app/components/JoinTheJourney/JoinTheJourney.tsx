import React from "react";
import {
  Title,
  Text,
  Button,
  Stack,
  Group,
  Badge,
  ThemeIcon,
  Box,
  Container,
  useMantineTheme,
} from "@mantine/core";
import { keyframes } from "@emotion/react";
import {
  IconRocket,
  IconStars,
  IconBulb,
  IconUsers,
  IconCode,
  IconTrophy,
  IconArrowRight,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// React Bits Animations
const zoomIn = keyframes({
  "0%": { opacity: 0, transform: "scale(0.5)" },
  "100%": { opacity: 1, transform: "scale(1)" },
});

const slideUp = keyframes({
  "0%": { opacity: 0, transform: "translateY(60px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const fadeInLeft = keyframes({
  "0%": { opacity: 0, transform: "translateX(-40px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const fadeInRight = keyframes({
  "0%": { opacity: 0, transform: "translateX(40px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const bounceIn = keyframes({
  "0%": { opacity: 0, transform: "scale(0.3)" },
  "50%": { opacity: 1, transform: "scale(1.05)" },
  "70%": { transform: "scale(0.9)" },
  "100%": { transform: "scale(1)" },
});

const pulse = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.05)" },
  "100%": { transform: "scale(1)" },
});

const JoinTheJourney: React.FC = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("joinTheJourney");
  const currentLang = i18n.language;
  const theme = useMantineTheme();

  const milestones = [
    {
      icon: IconUsers,
      title: t("humble_beginnings"),
      description: t("humble_beginnings_desc"),
      animation: fadeInLeft,
    },
    {
      icon: IconCode,
      title: t("expanding_services"),
      description: t("expanding_services_desc"),
      animation: fadeInRight,
    },
    {
      icon: IconTrophy,
      title: t("future_vision"),
      description: t("future_vision_desc"),
      animation: fadeInLeft,
    },
  ];

  const services = [
    {
      icon: IconRocket,
      title: t("portfolio_websites"),
      description: t("portfolio_websites_desc"),
      color: "blue",
    },
    {
      icon: IconStars,
      title: t("entertainment_websites"),
      description: t("entertainment_websites_desc"),
      color: "violet",
    },
    {
      icon: IconBulb,
      title: t("blog_websites"),
      description: t("blog_websites_desc"),
      color: "teal",
    },
  ];

  return (
    <Container size="lg" py={80}>
      {/* Hero Section with ZoomIn animation */}
      <Box
        py={80}
        style={{
          animation: `${zoomIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
        }}
      >
        <Stack align="center" gap="xl">
          <Badge variant="light" size="xl" radius="sm">
            {t("our_journey")}
          </Badge>

          <Title
            size={60}
            fw={900}
            ta="center"
            style={{
              lineHeight: 1.2,
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            }}
          >
            {t("from_mentorship_to_innovation")}
          </Title>

          <Text size="xl" c="dimmed" ta="center" style={{ maxWidth: 800 }}>
            {t("journey_description")}
          </Text>

          <Button
            rightSection={<IconArrowRight size={18} />}
            size="xl"
            radius="xl"
            style={{
              animation: `${pulse} 2s infinite ease-in-out`,
              animationDelay: "1s",
            }}
            onClick={() => router.push(`/${currentLang}/requestService`)}
          >
            {t("join_us")}
          </Button>
        </Stack>
      </Box>

      {/* Milestones Section with SlideUp animation */}
      <Box py={80}>
        <Title
          order={2}
          ta="center"
          mb={60}
          style={{
            animation: `${slideUp} 0.8s ease-out`,
          }}
        >
          {t("our_story")}
        </Title>

        <Stack gap={80}>
          {milestones.map((milestone, index) => (
            <Box
              key={milestone.title}
              style={{
                animation: `${milestone.animation} 0.8s ease-out`,
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              <Group
                wrap="nowrap"
                align="flex-start"
                gap="xl"
                style={{
                  flexDirection: "column",
                  [`@media (min-width: ${theme.breakpoints.sm})`]: {
                    flexDirection: "row",
                  },
                }}
              >
                <ThemeIcon
                  size={80}
                  radius="md"
                  variant="light"
                  style={{
                    animation: `${bounceIn} 1s ease-out`,
                    flexShrink: 0,
                  }}
                >
                  <milestone.icon size={40} stroke={1.5} />
                </ThemeIcon>

                <Box>
                  <Title order={3} mb="sm">
                    {milestone.title}
                  </Title>
                  <Text size="lg" c="dimmed">
                    {milestone.description}
                  </Text>
                </Box>
              </Group>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Services Section with staggered animations */}
      <Box py={80}>
        <Title
          order={2}
          ta="center"
          mb={60}
          style={{
            animation: `${slideUp} 0.8s ease-out`,
          }}
        >
          {t("our_services")}
        </Title>

        <Group
          justify="center"
          gap="xl"
          grow
          style={{
            [`@media (min-width: ${theme.breakpoints.md})`]: {
              flexDirection: "row",
            },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.title}
              p="xl"
              style={{
                borderRadius: theme.radius.md,
                border: `1px solid ${theme.colors.gray[3]}`,
                animation: `${zoomIn} 0.5s ease-out`,
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: theme.colors[service.color][5],
                },
              }}
            >
              <Stack align="center" gap="md">
                <ThemeIcon
                  size={80}
                  radius="md"
                  variant="light"
                  color={service.color}
                  style={{
                    animation: `${bounceIn} 1s ease-out`,
                  }}
                >
                  <service.icon size={40} stroke={1.5} />
                </ThemeIcon>

                <Title order={3} ta="center">
                  {service.title}
                </Title>
                <Text size="lg" c="dimmed" ta="center">
                  {service.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </Group>
      </Box>

      {/* Final CTA with SlideUp animation */}
      <Box
        py={80}
        style={{
          animation: `${slideUp} 0.8s ease-out`,
        }}
      >
        <Stack align="center" gap="xl">
          <Title order={2} ta="center">
            {t("ready_to_start")}
          </Title>
          <Text size="xl" c="dimmed" ta="center" style={{ maxWidth: 700 }}>
            {t("cta_description")}
          </Text>
          <Button
            rightSection={<IconArrowRight size={18} />}
            size="xl"
            radius="xl"
            onClick={() => router.push(`/${currentLang}/requestService`)}
          >
            {t("get_started")}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default JoinTheJourney;
