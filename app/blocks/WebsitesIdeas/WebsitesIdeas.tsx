import React, { useEffect, useRef, useState } from "react";
import {
  IconBrush,
  IconCamera,
  IconBuilding,
  IconDeviceLaptop,
  IconCode,
  IconUser,
  IconBook,
  IconMusic,
  IconMovie,
  IconCalendarEvent,
  IconMoodSmile,
  IconDeviceGamepad,
  IconCooker,
  IconPlane,
  IconDeviceMobile,
  IconSchool,
  IconClipboardList,
} from "@tabler/icons-react";
import { useAnimation, useInView, motion } from "framer-motion";
import {
  Text,
  Stack,
  Title,
  SimpleGrid,
  Container,
  Box,
  Group,
  ActionIcon,
  Center,
  Paper,
} from "@mantine/core";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SpotlightCard from "@/app/components/Ui/SpotlightCard/SpotlightCard";

interface Category {
  name: string;
  icon: React.ReactNode;
  translationKey: string;
  bgColor: string;
}

interface AnimatedCardProps {
  category: Category;
  index: number;
}

interface CategorySectionProps {
  titleKey: string;
  categories: Category[];
}

const portfolioCategories: Category[] = [
  {
    name: "Graphic Designers",
    icon: <IconBrush size={32} color="white" />,
    translationKey: "categories.graphicDesigners",
    bgColor: "rgba(91, 143, 249, 0.3)", // Vibrant blue
  },
  {
    name: "Photographers",
    icon: <IconCamera size={32} color="white" />,
    translationKey: "categories.photographers",
    bgColor: "rgba(94, 231, 223, 0.2)", // Mint teal
  },
  {
    name: "Architects",
    icon: <IconBuilding size={32} color="white" />,
    translationKey: "categories.architects",
    bgColor: "rgba(161, 196, 253, 0.2)", // Sky blue
  },
  {
    name: "Freelancers",
    icon: <IconDeviceLaptop size={32} color="white" />,
    translationKey: "categories.freelancers",
    bgColor: "rgba(195, 207, 226, 0.2)", // Cool gray
  },
  {
    name: "Developers & Programmers",
    icon: <IconCode size={32} color="white" />,
    translationKey: "categories.developers",
    bgColor: "rgba(86, 204, 242, 0.2)", // Electric blue
  },
  {
    name: "Makeup Artists / Stylists",
    icon: <IconUser size={32} color="white" />,
    translationKey: "categories.makeupArtists",
    bgColor: "rgba(246, 211, 101, 0.2)", // Warm gold
  },
];
const entertainmentCategories: Category[] = [
  {
    name: "Online Magazines",
    icon: <IconBook size={32} color="white" />,
    translationKey: "categories.onlineMagazines",
    bgColor: "rgba(255, 154, 158, 0.2)", // Soft coral
  },
  {
    name: "Music Platforms",
    icon: <IconMusic size={32} color="white" />,
    translationKey: "categories.musicPlatforms",
    bgColor: "rgba(161, 140, 209, 0.2)", // Lavender
  },
  {
    name: "Film & TV News",
    icon: <IconMovie size={32} color="white" />,
    translationKey: "categories.filmNews",
    bgColor: "rgba(255, 195, 160, 0.2)", // Peach
  },
  {
    name: "Event & Festival Pages",
    icon: <IconCalendarEvent size={32} color="white" />,
    translationKey: "categories.eventPages",
    bgColor: "rgba(132, 250, 176, 0.2)", // Mint green
  },
  {
    name: "Meme or Humor Blogs",
    icon: <IconMoodSmile size={32} color="white" />,
    translationKey: "categories.memeBlogs",
    bgColor: "rgba(255, 236, 210, 0.2)", // Cream
  },
  {
    name: "Game or Anime Fan Sites",
    icon: <IconDeviceGamepad size={32} color="white" />,
    translationKey: "categories.fanSites",
    bgColor: "rgba(166, 193, 238, 0.2)", // Powder blue
  },
];

const blogCategories: Category[] = [
  {
    name: "Personal Lifestyle Blogs",
    icon: <IconUser size={32} color="white" />,
    translationKey: "categories.lifestyleBlogs",
    bgColor: "rgba(212, 252, 121, 0.2)", // Lime
  },
  {
    name: "Food & Recipes",
    icon: <IconCooker size={32} color="white" />,
    translationKey: "categories.foodRecipes",
    bgColor: "rgba(253, 203, 241, 0.2)", // Blush pink
  },
  {
    name: "Travel Diaries",
    icon: <IconPlane size={32} color="white" />,
    translationKey: "categories.travelDiaries",
    bgColor: "rgba(168, 237, 234, 0.2)", // Aqua
  },
  {
    name: "Tech News or Reviews",
    icon: <IconDeviceMobile size={32} color="white" />,
    translationKey: "categories.techReviews",
    bgColor: "rgba(224, 195, 252, 0.2)", // Pale purple
  },
  {
    name: "Education & Student Blogs",
    icon: <IconSchool size={32} color="white" />,
    translationKey: "categories.educationBlogs",
    bgColor: "rgba(245, 247, 250, 0.2)", // Lightest gray
  },
  {
    name: "Opinion & Journalism",
    icon: <IconClipboardList size={32} color="white" />,
    translationKey: "categories.opinionJournalism",
    bgColor: "rgba(233, 222, 250, 0.2)", // Lilac
  },
];

const AnimatedCard: React.FC<AnimatedCardProps> = ({ category, index }) => {
  const { t, i18n } = useTranslation("websitesIdeas");
  const currentLang = i18n.language;
  const router = useRouter();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1, duration: 0.5 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      style={{ height: "100%" }}
      onClick={() => router.push(`${currentLang}/requestService`)}
    >
      <SpotlightCard className="category-card">
        <Box className="card-content">
          <Stack align="center" justify="center" h="100%">
            <Box
              p={12}
              mb={12}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                display: "inline-flex",
              }}
            >
              {category.icon}
            </Box>
            <Text size="lg" fw={600} ta="center" c="white">
              {t(category.translationKey)}
            </Text>
          </Stack>
        </Box>
      </SpotlightCard>
    </motion.div>
  );
};

const CategorySection: React.FC<CategorySectionProps> = ({
  titleKey,
  categories,
}) => {
  const { t } = useTranslation("websitesIdeas");
  return (
    <Box mb={40}>
      <Title
        order={2}
        style={{
          textAlign: "center",
          marginBottom: 30,
          fontFamily: "Oswald, sans-serif",
        }}
      >
        {t(titleKey)}
      </Title>
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="lg"
        verticalSpacing="lg"
      >
        {categories.map((category, index) => (
          <AnimatedCard
            key={`${category.name}-${index}`}
            category={category}
            index={index}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const WebsitesIdeas: React.FC = () => {
  const { t, i18n } = useTranslation("websitesIdeas");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isRTL = i18n.dir() === "rtl";

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    setCurrentSlide(index);
    setAutoScroll(false);

    const scrollAmount = isRTL
      ? -scrollContainerRef.current.clientWidth * index
      : scrollContainerRef.current.clientWidth * index;

    scrollContainerRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => setAutoScroll(true), 10000);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const totalSlides = 3;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      const scrollAmount = isRTL
        ? -container.clientWidth * ((currentSlide + 1) % totalSlides)
        : container.clientWidth * ((currentSlide + 1) % totalSlides);

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoScroll, currentSlide, isRTL]);

  return (
    <Container py={60} size="xl">
      <Title
        order={2}
        style={{
          textAlign: "center",
          marginBottom: 20,
          fontFamily: "Oswald, sans-serif",
        }}
      >
        {t("missionTitle")}
      </Title>
      <Text size="xl" ta="center" mb={40} color="dimmed">
        {t("missionDescription")}
      </Text>
      {/* Horizontal Scrolling Container */}
      <Paper
        ref={scrollContainerRef}
        dir={i18n.dir()}
        style={(theme) => ({
          display: "flex",
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          position: "relative",
          direction: i18n.dir(),
          "&:hover": {
            boxShadow: theme.shadows.xl,
          },
        })}
      >
        {/* Portfolio Section */}
        <Box
          style={{
            minWidth: "100%",
            scrollSnapAlign: "start",
            transform: isRTL ? "translateX(0)" : undefined,
          }}
          p="md"
        >
          <CategorySection
            titleKey="portfolioTitle"
            categories={portfolioCategories}
          />
        </Box>

        {/* Entertainment Section */}
        <Box
          style={{
            minWidth: "100%",
            scrollSnapAlign: "start",
            transform: isRTL ? "translateX(0)" : undefined,
          }}
          p="md"
        >
          <CategorySection
            titleKey="entertainmentTitle"
            categories={entertainmentCategories}
          />
        </Box>

        {/* Blog Section */}
        <Box
          style={{
            minWidth: "100%",
            scrollSnapAlign: "start",
            transform: isRTL ? "translateX(0)" : undefined,
          }}
          p="md"
        >
          <CategorySection titleKey="blogTitle" categories={blogCategories} />
        </Box>
      </Paper>

      {/* Navigation Dots */}
      <Center mt={"md"}>
        <Group align="center" mb="md">
          {[0, 1, 2].map((index) => (
            <ActionIcon
              key={index}
              size="sm"
              variant={currentSlide === index ? "filled" : "outline"}
              style={{
                background:
                  currentSlide === index
                    ? "linear-gradient(135deg, rgba(40, 40, 40, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)"
                    : "gray",
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "gray",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(60, 60, 60, 0.8) 0%, rgba(40, 40, 40, 0.9) 100%)",
                },
              }}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </Group>
      </Center>
    </Container>
  );
};

export default WebsitesIdeas;
