import React, { useState, useEffect, useRef } from "react";
import {
  Title,
  Card,
  Overlay,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Box,
  BoxProps,
  useMantineTheme,
  CardProps,
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
import WebsitesIdeas from "../../blocks/WebsitesIdeas/WebsitesIdeas";
import ScrollVelocity from "../Ui/ScrollVelocity/ScrollVelocity";
import {
  useScroll,
  animated,
  config,
  useSpring,
  useTrail,
} from "@react-spring/web";
import { useIntersection } from "@mantine/hooks";

const homePageVideo = "/videos/homePageWebVideo.mp4";

const AnimatedTitle = animated(Title);
const AnimatedCard = animated(Card) as React.FC<
  CardProps & { style?: React.CSSProperties }
>;

const HomePage = () => {
  const { t, i18n } = useTranslation("home");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const currentLang = i18n.language;
  const AnimatedBox = animated(Box) as React.FC<
    BoxProps & { children?: React.ReactNode }
  >;
  const theme = useMantineTheme();

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

  // Animation for hero section
  const { ref: heroRef, entry: heroEntry } = useIntersection({
    threshold: 0.1,
  });
  const heroAnimation = useSpring({
    opacity: heroEntry?.isIntersecting ? 1 : 0,
    transform: heroEntry?.isIntersecting ? "translateY(0)" : "translateY(50px)",
    config: config.molasses,
  });

  // Animation for services cards
  const { ref: servicesRef, entry: servicesEntry } = useIntersection({
    threshold: 0.1,
  });
  const trail = useTrail(6, {
    opacity: servicesEntry?.isIntersecting ? 1 : 0,
    x: servicesEntry?.isIntersecting ? 0 : 20,
    height: servicesEntry?.isIntersecting ? 300 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    config: config.gentle,
  });

  // Video background effects
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.controls = false;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";

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

      video.addEventListener("canplay", handlePlay);
      return () => video.removeEventListener("canplay", handlePlay);
    }
  }, []);

  // Phrase rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex < inspiringPhrases.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [inspiringPhrases.length]);

  // Phrase animation
  const phraseAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    reset: true,
    config: config.wobbly,
    key: currentPhraseIndex,
  });

  return (
    <>
      {/* Global styles for animations */}

      <Box dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <Box
          ref={heroRef}
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
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
              zIndex: 1,
            }}
          >
            <source src={homePageVideo} type="video/mp4" />
            <source src="/videos/homePageWebVideo.webm" type="video/webm" />
            <source src="/videos/homePageWebVideo.ogv" type="video/ogg" />
          </video>

          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 100%)"
            opacity={0.6}
            zIndex={2}
          />

          <AnimatedBox
            style={
              {
                position: "absolute",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3,
                padding: "0 20px",
                ...heroAnimation,
              } as unknown as React.CSSProperties
            } // Type assertion
          >
            <AnimatedTitle
              order={1}
              style={{
                fontSize: "clamp(2rem, 8vw, 5rem)",
                lineHeight: 1.2,
                fontFamily: "Oswald, sans-serif",
                color: "white",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                textAlign: "center",
              }}
            >
              <animated.div style={phraseAnimation}>
                {inspiringPhrases[currentPhraseIndex]}
              </animated.div>
            </AnimatedTitle>
          </AnimatedBox>

          {/* Scroll indicator */}
          <Box
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              textAlign: "center",
            }}
          >
            <Text color="white" fw={500} style={{ marginBottom: 10 }}>
              {t("scroll_down")}
            </Text>
            <Box
              style={{
                width: "30px",
                height: "50px",
                border: `2px solid ${theme.colors.gray[3]}`,
                borderRadius: "15px",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Box
                style={{
                  position: "absolute",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: theme?.colors?.blue?.[6] ?? "#228be6",
                  left: "50%",
                  top: "10px",
                  transform: "translateX(-50%)",
                  animation: "scrollIndicator 2s infinite",
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* Websites Ideas Section */}
        <animated.div
          style={{
            opacity: scrollYProgress.to([0, 0.1, 0.2], [0, 0, 1]),
            transform: scrollYProgress.to((val) => `translateY(${val * 50}px)`),
          }}
        >
          <WebsitesIdeas />
        </animated.div>
        {/* Artistic Solutions Section */}
        <Container py={80} size="xl">
          <AnimatedTitle
            order={2}
            style={{
              textAlign: "center",
              marginBottom: 60,
              fontFamily: "Oswald, sans-serif",
              opacity: scrollYProgress.to([0.3, 0.4], [0, 1]),
              transform: scrollYProgress.to(
                (val) => `scale(${val < 0.4 ? 0.9 + val * 0.25 : 1})`
              ),
            }}
          >
            {t("our_artistic_solutions")}
          </AnimatedTitle>

          <animated.div
            style={{
              opacity: scrollYProgress.to([0.3, 0.5], [0, 1]),
              transform: scrollYProgress.to(
                (val) => `translateY(${val < 0.5 ? (1 - val) * 50 : 0}px)`
              ),
            }}
          >
            <HorizontalSection />
          </animated.div>
        </Container>
        {/* Services Section */}
        <Box
          ref={servicesRef}
          py={80}
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container size="xl">
            <AnimatedTitle
              order={2}
              style={{
                textAlign: "center",
                marginBottom: 60,
                fontFamily: "Oswald, sans-serif",
                opacity: servicesEntry?.isIntersecting ? 1 : 0,
                transform: servicesEntry?.isIntersecting
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "all 0.5s ease-out",
              }}
            >
              {t("our_services")}
            </AnimatedTitle>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} style={{ gap: 24 }}>
              {trail.map((style, index) => {
                const key = [
                  "intelligent_solutions",
                  "custom_development",
                  "digital_transformation",
                  "digital_marketing",
                  "tech_education",
                  "research_documentation",
                ][index];

                const icon = [
                  <IconBrain key="brain" size={48} />,
                  <IconCode key="code" size={48} />,
                  <IconRocket key="rocket" size={48} />,
                  <IconMessage2Star key="message" size={48} />,
                  <IconSchool key="school" size={48} />,
                  <IconClipboardList key="clipboard" size={48} />,
                ][index];

                return (
                  <AnimatedCard
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                      },
                    }}
                    key={key}
                    shadow="md"
                    p="lg"
                    radius="lg"
                  >
                    <Stack
                      onClick={() =>
                        router.push(`/${currentLang}/requestService`)
                      }
                      align="center"
                      m="xs"
                    >
                      <Box
                        style={{
                          marginBottom: 16,
                          transition: "all 0.3s ease",
                          ":hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        {icon}
                      </Box>
                      <Title
                        order={3}
                        style={{
                          textAlign: "center",
                          fontFamily: "Oswald, sans-serif",
                        }}
                      >
                        {t(`services.${key}.title`)}
                      </Title>
                      <Text style={{ textAlign: "center" }}>
                        {t(`services.${key}.description`)}
                      </Text>
                    </Stack>
                  </AnimatedCard>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>
        {/* Scrolling Text Effect */}
        <Box
          style={{
            padding: "40px 0",
            overflow: "hidden",
          }}
        >
          <ScrollVelocity
            texts={[
              t("inspiring_phrases.phrase1"),
              t("inspiring_phrases.phrase2"),
              t("inspiring_phrases.phrase3"),
              t("inspiring_phrases.phrase4"),
              t("inspiring_phrases.phrase5"),
            ]}
            velocity={500}
            className="custom-scroll-text"
            scrollerStyle={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              padding: "20px 0",
              margin: "0",
              fontWeight: 700,
              fontFamily: "Oswald, sans-serif",
              color: theme ? theme.colors.gray[5] : "#w21231",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
