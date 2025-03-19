import React, { useState, useEffect, useRef } from "react";
import {
  Title,
  Text,
  Group,
  Card,
  Box,
  Stack,
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

const HomePage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState("in");
  const { t, i18n } = useTranslation("home");

  const inspiringPhrases = [
    t("inspiring_phrases.0"),
    t("inspiring_phrases.1"),
    t("inspiring_phrases.2"),
    t("inspiring_phrases.3"),
    t("inspiring_phrases.4"),
    t("inspiring_phrases.5"),
    t("inspiring_phrases.6"),
    t("inspiring_phrases.7"),
  ];

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
  }, [inspiringPhrases]);

  return (
    <Stack dir={i18n.language === "ar" ? "rtl" : "ltr"}>
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
        <Text size="xl" style={{ fontStyle: "italic", fontSize: "1.5rem" }}>
          {inspiringPhrases[currentPhraseIndex]}
        </Text>
      </Box>

      <Text size="lg">{t("about_us")}</Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} mt="xl" spacing="lg">
        {[
          "intelligent_solutions",
          "custom_development",
          "digital_transformation",
          "digital_marketing",
          "tech_education",
          "research_documentation",
        ].map((key, index) => (
          <Card key={index} radius={10} shadow="sm" padding="lg">
            <Group justify="center" mb="md">
              {index === 0 && <IconBrain size={36} />}
              {index === 1 && <IconCode size={36} />}
              {index === 2 && <IconRocket size={36} />}
              {index === 3 && <IconMessage2Star size={36} />}
              {index === 4 && <IconSchool size={36} />}
              {index === 5 && <IconClipboardList size={36} />}
            </Group>
            <Text fw={700}>{t(`${key}.title`)}</Text>
            <Text size="sm">{t(`${key}.description`)}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default HomePage;
