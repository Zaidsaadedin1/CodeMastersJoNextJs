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
  IconArtboard,
  IconPalette,
  IconBrush,
  IconBriefcase,
  IconNews,
  IconGoGame,
  IconCpu,
  IconBook,
  IconCamera,
  IconLink,
  IconShoppingBag,
  IconLayoutDashboard,
  IconHeart,
  IconUser,
  IconScale,
  IconStethoscope,
  IconHeartbeat,
  IconFileCv,
  IconLamp,
  IconPlane,
  IconUsersGroup,
  IconRazor,
  IconPhoto,
  IconCoffee,
  IconMusic,
  IconLanguage,
  IconScissors,
  IconBook2,
  IconPaw,
  IconTruckDelivery,
  IconShirt,
  IconClipboardListFilled,
  IconCalendarEvent,
  IconDiamond,
  IconShoppingCart,
  IconBrandSuperhuman,
  IconReceipt2,
} from "@tabler/icons-react";

import "swiper/css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import "swiper/css";
import { useTimeout } from "@mantine/hooks";

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

  const timeout = useTimeout(() => {
    setFadeState("out");
    setTimeout(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % inspiringPhrases.length);
      setFadeState("in");
      timeout.start();
    }, 1000); // fade out duration
  }, 3500);

  useEffect(() => {
    timeout.start();
    return timeout.clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const solutions = [
    {
      key: "ecommerce",
      category: t("solutions.ecommerce.title"),
      description: t("solutions.ecommerce.description"),
      price: "2,000",
      discounted: "1,600",
      icon: <IconShoppingCart size={32} />,
    },
    {
      key: "wedding_planners",
      category: t("solutions.wedding_planners.title"),
      description: t("solutions.wedding_planners.description"),
      price: "1,800",
      discounted: "1,400",
      icon: <IconDiamond size={32} />,
    },
    {
      key: "event_organizers",
      category: t("solutions.event_organizers.title"),
      description: t("solutions.event_organizers.description"),
      price: "1,600",
      discounted: "1,300",
      icon: <IconCalendarEvent size={32} />,
    },
    {
      key: "fashion_brands",
      category: t("solutions.fashion_brands.title"),
      description: t("solutions.fashion_brands.description"),
      price: "1,900",
      discounted: "1,500",
      icon: <IconShirt size={32} />,
    },
    {
      key: "makeup_artists",
      category: t("solutions.makeup_artists.title"),
      description: t("solutions.makeup_artists.description"),
      price: "950",
      discounted: "750",
      icon: <IconClipboardListFilled size={32} />,
    },
    {
      key: "delivery_services",
      category: t("solutions.delivery_services.title"),
      description: t("solutions.delivery_services.description"),
      price: "1,600",
      discounted: "1,300",
      icon: <IconTruckDelivery size={32} />,
    },
    {
      key: "pet_care",
      category: t("solutions.pet_care.title"),
      description: t("solutions.pet_care.description"),
      price: "1,100",
      discounted: "900",
      icon: <IconPaw size={32} />,
    },
    {
      key: "bookstores",
      category: t("solutions.bookstores.title"),
      description: t("solutions.bookstores.description"),
      price: "1,100",
      discounted: "900",
      icon: <IconBook2 size={32} />,
    },
    {
      key: "handmade_crafts",
      category: t("solutions.handmade_crafts.title"),
      description: t("solutions.handmade_crafts.description"),
      price: "800",
      discounted: "600",
      icon: <IconScissors size={32} />,
    },
    {
      key: "language_centers",
      category: t("solutions.language_centers.title"),
      description: t("solutions.language_centers.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconLanguage size={32} />,
    },
    {
      key: "music_teachers",
      category: t("solutions.music_teachers.title"),
      description: t("solutions.music_teachers.description"),
      price: "1,000",
      discounted: "800",
      icon: <IconMusic size={32} />,
    },
    {
      key: "coffee_shops",
      category: t("solutions.coffee_shops.title"),
      description: t("solutions.coffee_shops.description"),
      price: "1,400",
      discounted: "1,100",
      icon: <IconCoffee size={32} />,
    },
    {
      key: "photobooths",
      category: t("solutions.photobooths.title"),
      description: t("solutions.photobooths.description"),
      price: "1,200",
      discounted: "950",
      icon: <IconPhoto size={32} />,
    },
    {
      key: "barbers",
      category: t("solutions.barbers.title"),
      description: t("solutions.barbers.description"),
      price: "900",
      discounted: "700",
      icon: <IconRazor size={32} />,
    },
    {
      key: "recruiting_agencies",
      category: t("solutions.recruiting_agencies.title"),
      description: t("solutions.recruiting_agencies.description"),
      price: "1,500",
      discounted: "1,200",
      icon: <IconUsersGroup size={32} />,
    },
    {
      key: "travel_agencies",
      category: t("solutions.travel_agencies.title"),
      description: t("solutions.travel_agencies.description"),
      price: "1,900",
      discounted: "1,500",
      icon: <IconPlane size={32} />,
    },
    {
      key: "resume_builders",
      category: t("solutions.resume_builders.title"),
      description: t("solutions.resume_builders.description"),
      price: "500",
      discounted: "400",
      icon: <IconFileCv size={32} />,
    },
    {
      key: "mental_health",
      category: t("solutions.mental_health.title"),
      description: t("solutions.mental_health.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconBrain size={32} />,
    },
    {
      key: "home_decor",
      category: t("solutions.home_decor.title"),
      description: t("solutions.home_decor.description"),
      price: "1,100",
      discounted: "900",
      icon: <IconLamp size={32} />,
    },
    {
      key: "baby_stores",
      category: t("solutions.baby_stores.title"),
      description: t("solutions.baby_stores.description"),
      price: "950",
      discounted: "750",
      icon: <IconBrandSuperhuman size={32} />,
    },
    {
      key: "accountants",
      category: t("solutions.accountants.title"),
      description: t("solutions.accountants.description"),
      price: "1,400",
      discounted: "1,100",
      icon: <IconReceipt2 size={32} />,
    },
    {
      key: "restaurant",
      category: t("solutions.restaurant.title"),
      description: t("solutions.restaurant.description"),
      price: "1,800",
      discounted: "1,400",
      icon: <IconArtboard size={32} />,
    },
    {
      key: "real_estate",
      category: t("solutions.real_estate.title"),
      description: t("solutions.real_estate.description"),
      price: "1,600",
      discounted: "1,300",
      icon: <IconPalette size={32} />,
    },
    {
      key: "car_rentals",
      category: t("solutions.car_rentals.title"),
      description: t("solutions.car_rentals.description"),
      price: "1,600",
      discounted: "1,300",
      icon: <IconBrush size={32} />,
    },
    {
      key: "gyms",
      category: t("solutions.gyms.title"),
      description: t("solutions.gyms.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconHeartbeat size={32} />,
    },
    {
      key: "medical_clinics",
      category: t("solutions.medical_clinics.title"),
      description: t("solutions.medical_clinics.description"),
      price: "1,800",
      discounted: "1,400",
      icon: <IconStethoscope size={32} />,
    },
    {
      key: "law_firms",
      category: t("solutions.law_firms.title"),
      description: t("solutions.law_firms.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconScale size={32} />,
    },
    {
      key: "freelancers",
      category: t("solutions.freelancers.title"),
      description: t("solutions.freelancers.description"),
      price: "700",
      discounted: "500",
      icon: <IconUser size={32} />,
    },
    {
      key: "ngos",
      category: t("solutions.ngos.title"),
      description: t("solutions.ngos.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconHeart size={32} />,
    },
    {
      key: "digital_agencies",
      category: t("solutions.digital_agencies.title"),
      description: t("solutions.digital_agencies.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconLayoutDashboard size={32} />,
    },
    {
      key: "local_shops",
      category: t("solutions.local_shops.title"),
      description: t("solutions.local_shops.description"),
      price: "700",
      discounted: "500",
      icon: <IconShoppingBag size={32} />,
    },
    {
      key: "influencers",
      category: t("solutions.influencers.title"),
      description: t("solutions.influencers.description"),
      price: "500",
      discounted: "400",
      icon: <IconLink size={32} />,
    },
    {
      key: "photographers",
      category: t("solutions.photographers.title"),
      description: t("solutions.photographers.description"),
      price: "1,000",
      discounted: "800",
      icon: <IconCamera size={32} />,
    },
    {
      key: "tutors",
      category: t("solutions.tutors.title"),
      description: t("solutions.tutors.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconBook size={32} />,
    },
    {
      key: "game_stores",
      category: t("solutions.game_stores.title"),
      description: t("solutions.game_stores.description"),
      price: "1,600",
      discounted: "1,300",
      icon: <IconGoGame size={32} />,
    },
    {
      key: "tech_startups",
      category: t("solutions.tech_startups.title"),
      description: t("solutions.tech_startups.description"),
      price: "2,500",
      discounted: "2,000",
      icon: <IconCpu size={32} />,
    },
    {
      key: "job_boards",
      category: t("solutions.job_boards.title"),
      description: t("solutions.job_boards.description"),
      price: "1,300",
      discounted: "1,000",
      icon: <IconBriefcase size={32} />,
    },
    {
      key: "blogs",
      category: t("solutions.blogs.title"),
      description: t("solutions.blogs.description"),
      price: "500",
      discounted: "400",
      icon: <IconNews size={32} />,
    },
  ];

  type Solution = {
    key: string;
    category: string;
    description: string;
    icon: React.ReactNode;
    price: string;
    discounted: string;
  };

  const AnimatedCard = ({ children, ...props }: any) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.div>
  );

  function HorizontalSection({ items }: { items: Solution[] }) {
    // Ensure swiper always starts from the first slide
    useEffect(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideToLoop(0, 0); // go to first slide instantly
      }
    }, [items]);

    return (
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        style={{ height: 500, paddingLeft: 0, marginLeft: 0 }}
        onSwiper={(swiper) => {
          swiper.slideToLoop(0, 0); // ensure start from first slide
        }}
      >
        {items.map((solution) => (
          <SwiperSlide
            key={solution.key}
            style={{
              maxWidth: 320,
              minWidth: 220,
              height: 450,
              position: "relative",
              padding: 30,
              backgroundColor: "#f8f9fa",
              borderRadius: 20,
              margin: 0, // Remove margin so slides start at the edge
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: 20,
                zIndex: 0,
                padding: 30,
              }}
            />
            <AnimatedCard
              style={{
                position: "relative",
                zIndex: 1,
                cursor: "pointer",
                height: "100%",
                borderRadius: 20,
                padding: 24,
                backgroundColor: "#fff",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onClick={() =>
                router.push("/requestService", undefined, {
                  locale: currentLang,
                })
              }
            >
              <Text size="lg" fw={600} mb={10}>
                {solution.icon} {solution.category}
              </Text>

              <Text size="sm" style={{ flexGrow: 1 }}>
                {solution.description}
              </Text>

              <Text size="sm" mt={10}>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                    marginRight: 8,
                  }}
                >
                  {solution.price}
                </span>
                <strong style={{ color: "#d32f2f", fontSize: 16 }}>
                  {solution.discounted}
                </strong>
              </Text>
            </AnimatedCard>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

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
                opacity: fadeState === "in" ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                minHeight: "120px",
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

        <HorizontalSection
          items={solutions.slice(0, Math.ceil(solutions.length))}
        />
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
