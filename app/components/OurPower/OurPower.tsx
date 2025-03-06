import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Grid,
  Card,
  Group,
  ThemeIcon,
  Stack,
  Badge,
  Divider,
  Box,
  Progress,
  SimpleGrid,
} from "@mantine/core";
import {
  IconServer,
  IconShieldLock,
  IconCpu2,
  IconCloudComputing,
  IconDeviceAnalytics,
  IconWorldSearch,
} from "@tabler/icons-react";
import { keyframes } from "@emotion/react";

// Define a subtle animation for elements
const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(10px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const OurPower: React.FC = () => {
  // Technical capabilities with metrics
  const capabilities = [
    { name: "Cloud Infrastructure", value: 95 },
    { name: "Cybersecurity", value: 92 },
    { name: "AI & Machine Learning", value: 88 },
    { name: "Data Analytics", value: 90 },
    { name: "Software Development", value: 94 },
  ];

  // Core technology services
  const coreServices = [
    {
      icon: IconServer,
      title: "Enterprise Architecture",
      description:
        "Scalable and resilient systems designed for optimal performance and business continuity.",
    },
    {
      icon: IconShieldLock,
      title: "Advanced Security",
      description:
        "Multi-layered protection protocols safeguarding your digital assets and sensitive information.",
    },
    {
      icon: IconCpu2,
      title: "Intelligent Solutions",
      description:
        "AI-powered technologies that transform data into actionable business intelligence.",
    },
    {
      icon: IconCloudComputing,
      title: "Cloud Optimization",
      description:
        "Strategic cloud deployments that maximize efficiency and minimize operational costs.",
    },
    {
      icon: IconDeviceAnalytics,
      title: "Performance Analytics",
      description:
        "Real-time monitoring and analytics to ensure optimal system performance.",
    },
    {
      icon: IconWorldSearch,
      title: "Global Connectivity",
      description:
        "Seamless integration of technologies across international business operations.",
    },
  ];

  return (
    <Container size="lg" py={80}>
      {/* Hero Section */}
      <Stack align="center" mb={80} gap="xl">
        <Badge variant="filled" size="lg" color="blue" radius="sm">
          Technological Excellence
        </Badge>

        <Title
          order={1}
          size={48}
          fw={900}
          ta="center"
          style={{
            animation: `${fadeIn} 0.8s ease-out`,
          }}
        >
          Empowering Innovation Through Technology
        </Title>

        <Text
          size="xl"
          c="dimmed"
          maw={700}
          ta="center"
          style={{
            animation: `${fadeIn} 1s ease-out`,
            lineHeight: 1.6,
          }}
        >
          Our powerful technological ecosystem drives digital transformation,
          enabling businesses to thrive in an increasingly complex digital
          landscape.
        </Text>

        <Button
          size="lg"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          radius="md"
          mt="md"
        >
          Explore Our Capabilities
        </Button>
      </Stack>

      {/* Capabilities Section */}
      <Title order={2} mb="xl">
        Our Technical Capabilities
      </Title>
      <Grid mb={80}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack>
            {capabilities.map((capability, index) => (
              <Box key={capability.name}>
                <Group justify="apart" mb={5}>
                  <Text fw={500}>{capability.name}</Text>
                  <Text fw={500} c="dimmed">
                    {capability.value}%
                  </Text>
                </Group>
                <Progress
                  value={capability.value}
                  color={capability.value > 90 ? "blue" : "cyan"}
                  size="md"
                  radius="xs"
                  animated
                  style={{
                    animation: `${fadeIn} ${0.8 + index * 0.2}s ease-out`,
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder shadow="sm" p="xl" radius="md">
            <Stack>
              <Title order={3}>Why We Excel</Title>
              <Text>
                Our technological prowess is built on a foundation of expertise,
                innovation, and a commitment to excellence. We leverage
                cutting-edge technologies to deliver solutions that drive
                business growth and operational efficiency.
              </Text>
              <Divider />
              <Group justify="apart">
                <div>
                  <Text fw={700} size="xl">
                    250+
                  </Text>
                  <Text size="sm" c="dimmed">
                    Technical Experts
                  </Text>
                </div>
                <div>
                  <Text fw={700} size="xl">
                    15+
                  </Text>
                  <Text size="sm" c="dimmed">
                    Years Experience
                  </Text>
                </div>
                <div>
                  <Text fw={700} size="xl">
                    500+
                  </Text>
                  <Text size="sm" c="dimmed">
                    Projects Delivered
                  </Text>
                </div>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Core Services */}
      <Title order={2} mb="xl">
        Our Technology Services
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
              animation: `${fadeIn} ${1 + index * 0.1}s ease-out`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <ThemeIcon
              size={50}
              radius="md"
              variant="light"
              color="blue"
              mb="md"
            >
              <service.icon size={26} stroke={1.5} />
            </ThemeIcon>
            <Title order={3} mb="sm">
              {service.title}
            </Title>
            <Text c="dimmed">{service.description}</Text>
          </Card>
        ))}
      </SimpleGrid>

      {/* Call to Action */}
      <Card
        withBorder
        shadow="sm"
        padding="xl"
        radius="md"
        mt={80}
        style={{
          background: "linear-gradient(45deg, #1a1b1e, #25262b)",
          color: "white",
        }}
      >
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Title order={2} c="white" mb="md">
              Ready to Harness Our Technology?
            </Title>
            <Text c="gray.3" mb="xl">
              Partner with us to leverage our technological prowess and
              accelerate your digital transformation journey.
            </Text>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 4 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              size="lg"
              radius="md"
            >
              Schedule a Consultation
            </Button>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default OurPower;
