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
  Overlay,
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

const DiscoverMore: React.FC = () => {
  const keyFeatures = [
    {
      icon: IconRocket,
      title: "Digital Acceleration",
      description:
        "Propel your business forward with cutting-edge technological solutions.",
      color: "blue",
    },
    {
      icon: IconBulb,
      title: "Innovative Strategies",
      description:
        "Transform challenges into opportunities through intelligent design.",
      color: "green",
    },
    {
      icon: IconShield,
      title: "Secure Ecosystems",
      description:
        "Comprehensive cybersecurity solutions protecting your digital assets.",
      color: "red",
    },
  ];

  const technologyServices = [
    {
      icon: IconCloudComputing,
      title: "Cloud Solutions",
      description:
        "Scalable and flexible cloud infrastructure tailored to your needs.",
    },
    {
      icon: IconTransform,
      title: "Digital Transformation",
      description:
        "Seamless integration of advanced technologies into your business model.",
    },
    {
      icon: IconNetwork,
      title: "Enterprise Networking",
      description:
        "Robust and intelligent network architectures for modern enterprises.",
    },
  ];

  return (
    <Container size="xl" py={50}>
      <Grid align="center" gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg">
            <Badge variant="light" size="lg" color="blue">
              Future-Ready Solutions
            </Badge>
            <Title order={1} size={48} fw={900}>
              Explore Technological Frontiers
            </Title>
            <Text size="xl" c="dimmed">
              Uncover innovative solutions that drive digital transformation,
              empowering businesses to thrive in the ever-evolving technological
              landscape.
            </Text>
            <Group>
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 45 }}
              >
                Discover Our Solutions
              </Button>
              <Button size="lg" variant="outline" color="blue">
                Schedule Consultation
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            {keyFeatures.map((feature) => (
              <Card
                key={feature.title}
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
                  {feature.title}
                </Text>
                <Text fz="sm" c="dimmed" mt="xs">
                  {feature.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Grid.Col>
      </Grid>

      <Container size="lg" mt={80}>
        <Title order={2} mb="xl">
          Our Technology Services
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {technologyServices.map((service) => (
            <Card
              key={service.title}
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
                {service.title}
              </Text>
              <Text fz="md" c="dimmed">
                {service.description}
              </Text>
              <Button variant="light" color="blue" mt="md">
                Learn More
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default DiscoverMore;
