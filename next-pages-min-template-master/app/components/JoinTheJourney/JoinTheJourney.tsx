import React from "react";
import {
  Container,
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
  const inspiringPhrases = [
    {
      icon: IconRocket,
      title: "Pioneering Digital Excellence",
      description:
        "Embark on a transformative journey where innovation meets vision. Together, we'll redefine the boundaries of technological possibility.",
    },
    {
      icon: IconStars,
      title: "Crafting Tomorrow's Solutions",
      description:
        "Join an ecosystem where creativity flourishes and cutting-edge solutions emerge. Your ideas will shape the digital landscape of the future.",
    },
    {
      icon: IconBulb,
      title: "Illuminating Digital Pathways",
      description:
        "Discover the convergence of expertise and innovation. Our collaborative journey unlocks new dimensions of technological advancement.",
    },
  ];

  return (
    <Stack>
      <Stack align="center" gap="xl" py={80}>
        <Box
          component="div"
          style={{
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Badge
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            size="xl"
            radius="sm"
            px="lg"
            py="xs"
          >
            Transform • Innovate • Excel
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
            Join the Digital Revolution
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
            Be part of an extraordinary ecosystem where visionaries, innovators,
            and technologists converge to shape the future. Your journey with us
            is more than a partnership—it's a statement of commitment to
            excellence.
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
          >
            Begin Your Transformation
          </Button>
        </Box>
      </Stack>

      <Stack mt={100} gap={50}>
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
