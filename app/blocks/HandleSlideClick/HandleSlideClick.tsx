import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { getSolutions } from "../../blocks/HardCodedData/Solutions";
import "swiper/css";
import "swiper/css/free-mode";

type Solution = {
  key: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  price: string;
  discounted: string;
};

const HorizontalSection = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const router = useRouter();
  const { t, i18n } = useTranslation("home");
  const [isMounted, setIsMounted] = useState(false);
  const [key, setKey] = useState(0); // Add a key to force re-render
  const items = getSolutions(t);
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset Swiper when language changes
  useEffect(() => {
    setKey((prev) => prev + 1); // Change key to force re-render
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [i18n.language]);

  const handleSlideClick = () => {
    router.push("/requestService", undefined, {
      locale: i18n.language,
    });
  };

  if (!isMounted) {
    return (
      <Box
        dir={isRTL ? "rtl" : "ltr"}
        style={{ position: "relative", height: 500 }}
      >
        <Box style={{ display: "flex", gap: 24, padding: "0 16px" }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: 300,
                height: 450,
                borderRadius: 20,
                backgroundColor: "#f5f5f5",
              }}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      key={`swiper-container-${key}`} // Add key to force re-render
      dir={isRTL ? "rtl" : "ltr"}
      style={{ position: "relative", padding: "0 16px" }}
    >
      <SwiperReact
        key={`swiper-${key}`} // Add key to force re-render
        dir={isRTL ? "rtl" : "ltr"}
        onSwiper={(swiper: SwiperClass) => {
          swiperRef.current = swiper;
          swiper.update(); // Update swiper on initialization
        }}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={{
          enabled: true,
          momentum: true,
        }}
        loop={false}
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isRTL,
        }}
        style={{
          height: 500,
          width: "100%",
          overflow: "visible",
          direction: isRTL ? "rtl" : "ltr",
        }}
        onResize={() => {
          if (swiperRef.current) {
            swiperRef.current.update();
          }
        }}
      >
        {items.map((solution) => (
          <SwiperSlide
            key={solution.key}
            style={{
              width: 300,
              height: 450,
            }}
            onClick={handleSlideClick}
          >
            <AnimatedCard solution={solution} />
          </SwiperSlide>
        ))}
      </SwiperReact>
    </Box>
  );
};

const AnimatedCard = React.memo(({ solution }: { solution: Solution }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: 20,
        padding: 24,
        backgroundColor: "#fff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Text size="lg" fw={600} mb={10}>
        {solution.icon}
      </Text>
      <Text size="lg" fw={600} mb={10}>
        {solution.category}
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
    </motion.div>
  );
});
AnimatedCard.displayName = "AnimatedCard";

export default HorizontalSection;
