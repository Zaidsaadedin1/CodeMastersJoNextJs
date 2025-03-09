import React, { useState, useEffect, useRef } from "react";
import {
  Title,
  Text,
  Group,
  Card,
  Box,
  Stack,
  rgba,
  SimpleGrid,
} from "@mantine/core";
import {
  IconBrain,
  IconCode,
  IconRocket,
  IconSchool,
  IconClipboardList,
  IconMessage2Star,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

const inspiringPhrases = [
  "Transforming Visions into Digital Reality",
  "Crafting Tomorrow's Technology Today",
  "Where Innovation Meets Excellence",
  "Building Digital Solutions That Matter",
  "Engineering the Future, One Line of Code at a Time",
  "Turning Complex Challenges into Elegant Solutions",
  "Your Technology Partner in a Digital World",
  "Pushing the Boundaries of What's Possible",
];

const HomePage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState("in");
  const { t } = useTranslation("home");

  // Animation for phrases
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setFadeState("out");

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) =>
          prevIndex === inspiringPhrases.length - 1 ? 0 : prevIndex + 1
        );
        setFadeState("in");
      }, 1000);
    }, 5000);

    return () => clearInterval(phraseInterval);
  }, []);

  // Play audio on component mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, []);
  useEffect(() => {
    console.log("Translations Loaded:", t("code_masters"));
  }, [t]);

  return (
    <Stack>
      <div>
        <Title order={1}>{t("code_masters")}</Title>

        <Text fw={700}>{t("intelligent_solutions")}</Text>
        <h4>{t("inspiring_phrases.0")}</h4>
      </div>
      <audio ref={audioRef} src="/audio/hope.mp3" preload="auto" loop />

      <Title order={1}>{t("code_masters")}</Title>

      <Box
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: fadeState === "in" ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <Text
          size="xl"
          style={{
            color: rgba("#000", 0.5),
            fontStyle: "italic",
            fontSize: "1.5rem",
          }}
        >
          {inspiringPhrases[currentPhraseIndex]}
        </Text>
      </Box>

      <Text size="lg">
        We are more than just an IT company. We are visionaries,
        problem-solvers, and innovators dedicated to developing cutting-edge
        solutions that transform businesses and elevate experiences. Our team of
        experts combines technical excellence with creative thinking to deliver
        results that exceed expectations.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} mt="xl" spacing="lg">
        <Card radius={10} shadow="sm" padding="lg">
          <Group justify="center" mb="md">
            <IconBrain size={36} />
          </Group>
          <Text fw={700}>Intelligent Solutions</Text>
          <Text size="sm">
            Harnessing AI and machine learning to solve complex problems
          </Text>
        </Card>

        <Card radius={10} shadow="sm" padding="lg">
          <Group justify="center" mb="md">
            <IconCode size={36} />
          </Group>
          <Text fw={700}>Custom Development</Text>
          <Text size="sm">Tailored software built with precision and care</Text>
        </Card>

        <Card radius={10} shadow="sm" padding="lg">
          <Group justify="center" mb="md">
            <IconRocket size={36} />
          </Group>
          <Text fw={700}>Digital Transformation</Text>
          <Text size="sm">Guiding your business into the digital future</Text>
        </Card>

        <Card radius={10} shadow="sm" padding="lg">
          <Group justify="center" mb="md">
            <IconMessage2Star size={36} />
          </Group>
          <Text fw={700}>Digital Marketing</Text>
          <Text size="sm">
            Strategic campaigns that drive growth and boost visibility
          </Text>
        </Card>

        <Card radius={10} shadow="sm" padding="lg">
          <Group justify="center" mb="md">
            <IconSchool size={36} />
          </Group>
          <Text fw={700}>Tech Education</Text>
          <Text size="sm">
            Professional training and workshops led by industry experts
          </Text>
        </Card>

        <Card radius={10} shadow="sm" padding="lg">
          <Group justify="center" mb="md">
            <IconClipboardList size={36} />
          </Group>
          <Text fw={700}>Research & Documentation</Text>
          <Text size="sm">
            Comprehensive studies and technical documentation services
          </Text>
        </Card>
      </SimpleGrid>
    </Stack>
  );
};

export default HomePage;
