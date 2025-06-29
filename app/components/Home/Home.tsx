import React, { useState, useEffect, useRef } from "react";
import {
  Title,
  Card,
  Box,
  Overlay,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrain,
  IconCode,
  IconRocket,
  IconSchool,
  IconClipboardList,
  IconMessage2Star,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import HorizontalSection from "../../blocks/HandleSlideClick/HandleSlideClick";

// Make sure to place your video file (e.g., homepage.mp4) inside the public/videos directory
const homePageVideo = "/videos/homePageWebVideo.mp4";

const HomePage = () => {
  const { t, i18n } = useTranslation("home");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const currentLang = i18n.language;
  const swiperRef = useRef<any>(null);
  const inspiringPhrases: string[] = [
    t("inspiring_phrases.phrase1"),
    t("inspiring_phrases.phrase2"),
    t("inspiring_phrases.phrase3"),
    t("inspiring_phrases.phrase4"),
    t("inspiring_phrases.phrase5"),
    t("inspiring_phrases.phrase6"),
    t("inspiring_phrases.phrase7"),
    t("inspiring_phrases.phrase8"),
  ];
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.controls = false;
      video.muted = true;

      const handlePlay = () => {
        video.play().catch((e) => {
          console.error("Play error:", e);
          document.addEventListener(
            "click",
            () => {
              video.play().catch(console.error);
            },
            { once: true }
          );
        });
      };

      video.addEventListener("error", (e) => {
        console.error("Video error:", e);
        console.error("Details:", video.error);
      });
      video.addEventListener("loadstart", () =>
        console.log("Video load started")
      );
      video.addEventListener("loadeddata", () =>
        console.log("Video data loaded")
      );
      video.addEventListener("canplay", handlePlay);
      video.addEventListener("loadedmetadata", () => {
        console.log(
          "Metadata loaded",
          video.duration,
          video.videoWidth,
          video.videoHeight
        );
      });

      return () => {
        video.removeEventListener("error", () => {});
        video.removeEventListener("canplay", handlePlay);
        // Remove other listeners if needed
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex < inspiringPhrases.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [inspiringPhrases.length]);

  return (
    <Box dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <Box style={{ position: "relative", height: "100vh", width: "100%" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={homePageVideo} type="video/mp4" />
          {/* Add multiple formats for better compatibility */}
          <source src="/videos/homePageWebVideo.webm" type="video/webm" />
          <source src="/videos/homePageWebVideo.ogv" type="video/ogg" />
          {/* Fallback content */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            Your browser does not support the video tag or the video failed to
            load.
          </div>
        </video>
        <Overlay
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 100%)"
          opacity={0.6}
          zIndex={1}
        />

        <Container
          style={{
            position: "absolute",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Title
            order={1}
            style={{
              fontSize: "4rem",
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', serif",
              color: "white",
            }}
          >
            <Box
              component="span"
              style={{
                opacity: 1,
                transition: "opacity 1s ease-in-out",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                fontSize: "clamp(1.5rem, 6vw, 3rem)",
              }}
            >
              {inspiringPhrases[currentPhraseIndex]}
            </Box>
          </Title>
        </Container>
      </Box>

      <Container py={80} size="xl" mb="xl">
        <Title
          order={2}
          style={{
            textAlign: "center",
            marginBottom: 60,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {t("our_artistic_solutions")}
        </Title>

        <HorizontalSection />
      </Container>

      <Box py={80} style={{ backgroundColor: "#f8f9fa" }}>
        <Container size="xl">
          <Title
            order={2}
            style={{
              textAlign: "center",
              marginBottom: 60,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {t("our_services")}
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} style={{ gap: 24 }}>
            {[
              "intelligent_solutions",
              "custom_development",
              "digital_transformation",
              "digital_marketing",
              "tech_education",
              "research_documentation",
            ].map((key, index) => (
              <Card
                style={{ cursor: "pointer" }}
                key={key}
                shadow="sm"
                p="lg"
                radius="md"
                onClick={() => {
                  router.push("/requestService", undefined, {
                    locale: currentLang,
                  });
                }}
              >
                <Stack align="center" m="xs">
                  <Box style={{ marginBottom: 16, color: "#228be6" }}>
                    {index === 0 && <IconBrain size={48} />}
                    {index === 1 && <IconCode size={48} />}
                    {index === 2 && <IconRocket size={48} />}
                    {index === 3 && <IconMessage2Star size={48} />}
                    {index === 4 && <IconSchool size={48} />}
                    {index === 5 && <IconClipboardList size={48} />}
                  </Box>
                  <Title order={3} style={{ textAlign: "center" }}>
                    {t(`services.${key}.title`)}
                  </Title>
                  <Text style={{ textAlign: "center" }}>
                    {t(`services.${key}.description`)}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
