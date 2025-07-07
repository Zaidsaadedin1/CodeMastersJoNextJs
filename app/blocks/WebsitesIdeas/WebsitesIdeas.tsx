import { Text, Stack, Title, SimpleGrid, Container, Box } from "@mantine/core";
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
import React, { useEffect, useRef } from "react";
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
    bgColor: "rgba(102, 126, 234, 0.25)",
  },
  {
    name: "Photographers",
    icon: <IconCamera size={32} color="white" />,
    translationKey: "categories.photographers",
    bgColor: "rgba(240, 147, 251, 0.25)",
  },
  {
    name: "Architects",
    icon: <IconBuilding size={32} color="white" />,
    translationKey: "categories.architects",
    bgColor: "rgba(94, 231, 223, 0.25)",
  },
  {
    name: "Freelancers",
    icon: <IconDeviceLaptop size={32} color="white" />,
    translationKey: "categories.freelancers",
    bgColor: "rgba(195, 207, 226, 0.25)",
  },
  {
    name: "Developers & Programmers",
    icon: <IconCode size={32} color="white" />,
    translationKey: "categories.developers",
    bgColor: "rgba(161, 196, 253, 0.25)",
  },
  {
    name: "Makeup Artists / Stylists",
    icon: <IconUser size={32} color="white" />,
    translationKey: "categories.makeupArtists",
    bgColor: "rgba(246, 211, 101, 0.25)",
  },
];

const entertainmentCategories: Category[] = [
  {
    name: "Online Magazines",
    icon: <IconBook size={32} color="white" />,
    translationKey: "categories.onlineMagazines",
    bgColor: "rgba(255, 154, 158, 0.25)",
  },
  {
    name: "Music Platforms",
    icon: <IconMusic size={32} color="white" />,
    translationKey: "categories.musicPlatforms",
    bgColor: "rgba(161, 140, 209, 0.25)",
  },
  {
    name: "Film & TV News",
    icon: <IconMovie size={32} color="white" />,
    translationKey: "categories.filmNews",
    bgColor: "rgba(255, 195, 160, 0.25)",
  },
  {
    name: "Event & Festival Pages",
    icon: <IconCalendarEvent size={32} color="white" />,
    translationKey: "categories.eventPages",
    bgColor: "rgba(255, 236, 210, 0.25)",
  },
  {
    name: "Meme or Humor Blogs",
    icon: <IconMoodSmile size={32} color="white" />,
    translationKey: "categories.memeBlogs",
    bgColor: "rgba(132, 250, 176, 0.25)",
  },
  {
    name: "Game or Anime Fan Sites",
    icon: <IconDeviceGamepad size={32} color="white" />,
    translationKey: "categories.fanSites",
    bgColor: "rgba(166, 193, 238, 0.25)",
  },
];

const blogCategories: Category[] = [
  {
    name: "Personal Lifestyle Blogs",
    icon: <IconUser size={32} color="white" />,
    translationKey: "categories.lifestyleBlogs",
    bgColor: "rgba(212, 252, 121, 0.25)",
  },
  {
    name: "Food & Recipes",
    icon: <IconCooker size={32} color="white" />,
    translationKey: "categories.foodRecipes",
    bgColor: "rgba(253, 203, 241, 0.25)",
  },
  {
    name: "Travel Diaries",
    icon: <IconPlane size={32} color="white" />,
    translationKey: "categories.travelDiaries",
    bgColor: "rgba(168, 237, 234, 0.25)",
  },
  {
    name: "Tech News or Reviews",
    icon: <IconDeviceMobile size={32} color="white" />,
    translationKey: "categories.techReviews",
    bgColor: "rgba(224, 195, 252, 0.25)",
  },
  {
    name: "Education & Student Blogs",
    icon: <IconSchool size={32} color="white" />,
    translationKey: "categories.educationBlogs",
    bgColor: "rgba(245, 247, 250, 0.25)",
  },
  {
    name: "Opinion & Journalism",
    icon: <IconClipboardList size={32} color="white" />,
    translationKey: "categories.opinionJournalism",
    bgColor: "rgba(233, 222, 250, 0.25)",
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
      whileHover={{ scale: 1.03 }}
      style={{ height: "100%" }}
      onClick={() => router.push(`${currentLang}/requestService`)}
    >
      <SpotlightCard
        spotlightColor={
          category.bgColor as `rgba(${number}, ${number}, ${number}, ${number})`
        }
        className="category-card"
      >
        <Box className="card-content" style={{}}>
          <Stack align="center" justify="center" style={{ height: "100%" }}>
            <Box className="card-icon">{category.icon}</Box>
            <Text size="lg" fw={500} ta="center" c="white">
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
  const { t } = useTranslation("websitesIdeas");
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

      <CategorySection
        titleKey="portfolioTitle"
        categories={portfolioCategories}
      />

      <CategorySection
        titleKey="entertainmentTitle"
        categories={entertainmentCategories}
      />

      <CategorySection titleKey="blogTitle" categories={blogCategories} />
    </Container>
  );
};

export default WebsitesIdeas;
