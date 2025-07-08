import React from "react";
import { useTranslation } from "next-i18next";
import Carousel from "@/app/components/Ui/Carousel/Carousel";
import { Text, Title, Container } from "@mantine/core";
import englishItems from "../../../public/locales/en/carouselCreatedWebSites.json";
import arabicItems from "../../../public/locales/en/carouselCreatedWebSites.json";

export default function PortfolioCarousel() {
  const { t, i18n } = useTranslation("menuComponent");
  const currentLang = i18n.language;

  const isRTL = currentLang === "ar";
  return (
    <Container size="xl" py={60}>
      <Title order={2} ta="center" mb="sm">
        {t("title")}
      </Title>
      <Text size="xl" ta="center" mb={40} c="dimmed">
        {t("description")}
      </Text>

      <Carousel
        items={currentLang === "en" ? englishItems : arabicItems}
        autoplay={true}
        pauseOnHover={true}
        loop={true}
        direction={isRTL ? "rtl" : "ltr"}
      />
    </Container>
  );
}
