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
  MantineTheme,
} from "@mantine/core";
import { keyframes } from "@emotion/react";
import { IconRocket, IconStars, IconBulb } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// Animation keyframes
const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const pulse = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.05)" },
  "100%": { transform: "scale(1)" },
});

const JoinTheJourney: React.FC = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("joinTheJourney");
  const isRTL = i18n.language === "ar";
  const currentLang = i18n.language;
  const inspiringPhrases = [
    {
      icon: IconRocket,
      title: t("pioneering_digital_excellence"),
      description: t("pioneering_digital_excellence_desc"),
    },
    {
      icon: IconStars,
      title: t("crafting_tomorrows_solutions"),
      description: t("crafting_tomorrows_solutions_desc"),
    },
    {
      icon: IconBulb,
      title: t("illuminating_digital_pathways"),
      description: t("illuminating_digital_pathways_desc"),
    },
  ];

  return (
    <Stack>
      <Stack align="center" gap="xl" py={80} dir={isRTL ? "rtl" : "ltr"}>
        <Box
          component="div"
          style={{
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Badge
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            size="lg"
            radius="sm"
            px="lg"
            py="xs"
          >
            {t("transform-Innovate-Excel")}
          </Badge>
        </Box>

        <Box
          component="div"
          style={{
            animation: `${fadeIn} 1.2s ease-out`,
          }}
        >
          <Title
            size={52}
            fw={900}
            style={(theme: MantineTheme) => ({
              background: `linear-gradient(45deg, ${theme.colors.blue[6]}, ${theme.colors.cyan[6]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            {t("join_the_digital_revolution")}
          </Title>
        </Box>

        <Box
          component="div"
          style={{
            animation: `${fadeIn} 1.4s ease-out`,
            maxWidth: 700,
          }}
        >
          <Text size="xl" c="dimmed" lh={1.6}>
            {t("digital_revolution_description")}
          </Text>
        </Box>

        <Box
          component="div"
          style={{
            animation: `${fadeIn} 1.6s ease-out`,
          }}
        >
          <Button
            size="xl"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            radius="md"
            px={40}
            style={{
              animation: `${pulse} 2s infinite ease-in-out`,
              animationDelay: "2s",
            }}
            onClick={() => router.push(`/${currentLang}/requestService`)}
          >
            {t("begin_transformation")}
          </Button>
        </Box>
      </Stack>

      <Stack mt={100} gap={50} dir={isRTL ? "rtl" : "ltr"}>
        {inspiringPhrases.map((phrase, index) => (
          <Box
            key={phrase.title}
            component="div"
            style={{
              animation: `${fadeIn} ${1.8 + index * 0.2}s ease-out`,
            }}
          >
            <Group align="flex-start" gap="xl">
              <ThemeIcon
                size={80}
                radius="md"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                style={{
                  animation: `${pulse} 3s infinite ease-in-out`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <phrase.icon size={40} stroke={1.5} />
              </ThemeIcon>

              <Stack gap="xs">
                <Title order={2}>{phrase.title}</Title>
                <Text size="lg" c="dimmed" maw={600}>
                  {phrase.description}
                </Text>
              </Stack>
            </Group>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default JoinTheJourney;
