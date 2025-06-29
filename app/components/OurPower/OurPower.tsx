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
  SimpleGrid,
  Card,
} from "@mantine/core";
import { keyframes } from "@emotion/react";
import {
  IconServer,
  IconShieldLock,
  IconCpu2,
  IconCloudComputing,
  IconDeviceAnalytics,
  IconWorldSearch,
} from "@tabler/icons-react";
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

const OurPower: React.FC = () => {
  const route = useRouter();
  const { t, i18n } = useTranslation("ourPower");
  const isRTL = i18n.language === "ar";

  const capabilities = [
    { name: t("cloud_infrastructure"), value: 95 },
    { name: t("cybersecurity"), value: 92 },
    { name: t("ai_machine_learning"), value: 88 },
    { name: t("data_analytics"), value: 90 },
    { name: t("software_development"), value: 94 },
  ];

  const coreServices = [
    {
      icon: IconServer,
      title: t("enterprise_architecture"),
      description: t("enterprise_architecture_desc"),
    },
    {
      icon: IconShieldLock,
      title: t("advanced_security"),
      description: t("advanced_security_desc"),
    },
    {
      icon: IconCpu2,
      title: t("intelligent_solutions"),
      description: t("intelligent_solutions_desc"),
    },
    {
      icon: IconCloudComputing,
      title: t("cloud_optimization"),
      description: t("cloud_optimization_desc"),
    },
    {
      icon: IconDeviceAnalytics,
      title: t("performance_analytics"),
      description: t("performance_analytics_desc"),
    },
    {
      icon: IconWorldSearch,
      title: t("global_connectivity"),
      description: t("global_connectivity_desc"),
    },
  ];

  return (
    <Stack dir={isRTL ? "rtl" : "ltr"}>
      <Stack align="center" gap="xl" py={80}>
        <Box component="div" style={{ animation: `${fadeIn} 1s ease-out` }}>
          <Badge
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            size="xl"
            radius="sm"
            px="lg"
            py="xs"
          >
            {t("transform_innovate_excel")}
          </Badge>
        </Box>

        <Box component="div" style={{ animation: `${fadeIn} 1.2s ease-out` }}>
          <Title
            size={52}
            fw={900}
            style={(theme: MantineTheme) => ({
              background: `linear-gradient(45deg, ${theme.colors.blue[6]}, ${theme.colors.cyan[6]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            {t("empowering_innovation")}
          </Title>
        </Box>

        <Box
          component="div"
          style={{ animation: `${fadeIn} 1.4s ease-out`, maxWidth: 700 }}
        >
          <Text size="xl" c="dimmed" lh={1.6}>
            {t("technological_description")}
          </Text>
        </Box>

        <Box component="div" style={{ animation: `${fadeIn} 1.6s ease-out` }}>
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
            onClick={() => route.push("/requestService")}
          >
            {t("explore_capabilities")}
          </Button>
        </Box>
      </Stack>

      {/* Capabilities Section */}
      <Title order={2} mb="xl">
        {t("technical_capabilities")}
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" mb={80}>
        {capabilities.map((capability, index) => (
          <Box
            key={capability.name}
            component="div"
            style={{ animation: `${fadeIn} ${1.8 + index * 0.2}s ease-out` }}
          >
            <Group justify="apart" mb={5}>
              <Text fw={500}>{capability.name}</Text>
              <Text fw={500} c="dimmed">
                {capability.value}%
              </Text>
            </Group>
            <Box
              style={{
                animation: `${fadeIn} 0.8s ease-out`,
              }}
            >
              <progress
                value={capability.value}
                max={100}
                style={{
                  width: "100%",
                  height: "8px",
                  borderRadius: "5px",
                  backgroundColor: "#e0e0e0",
                }}
              />
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Core Services */}
      <Title order={2} mb="xl">
        {t("technology_services")}
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {coreServices.map((service, index) => (
          <Card
            key={service.title}
            withBorder
            shadow="sm"
            padding="xl"
            radius="md"
            style={{
              animation: `${fadeIn} ${1.8 + index * 0.2}s ease-out`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <ThemeIcon
              size={80}
              radius="md"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              mb="md"
            >
              <service.icon size={40} stroke={1.5} />
            </ThemeIcon>
            <Title order={3} mb="sm">
              {service.title}
            </Title>
            <Text c="dimmed">{service.description}</Text>
          </Card>
        ))}
      </SimpleGrid>

      {/* Call to Action */}
      <Box
        component="div"
        style={{
          background: "linear-gradient(45deg, #1a1b1e, #25262b)",
          color: "white",
          padding: "40px",
          marginTop: "80px",
          borderRadius: "10px",
        }}
      >
        <Stack
          align="center"
          dir={isRTL ? "row-reverse" : "row"}
          justify="center"
        >
          <Box
            ta="center"
            component="div"
            style={{ animation: `${fadeIn} 1.6s ease-out` }}
          >
            <Title order={2} c="white" mb="md">
              {t("ready_to_harness")}
            </Title>
            <Text c="gray.3" mb="xl">
              {t("partner_with_us")}
            </Text>
          </Box>
          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            style={{ animation: `${pulse} 3s infinite ease-in-out` }}
          >
            {t("schedule_consultation")}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default OurPower;
