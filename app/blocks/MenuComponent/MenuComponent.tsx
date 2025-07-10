import React, { useEffect, useState } from "react";
import { Button, Group, Text, Image, Menu, Flex, Box } from "@mantine/core";
import {
  IconHome,
  IconLogin,
  IconSettings,
  IconUser,
  IconUserScan,
  IconDashboard,
  IconLogout,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useAuth } from "../../contexts/AuthContext";

const MenuComponent = () => {
  const { t, i18n } = useTranslation("menuComponent");
  const currentLang = i18n.language;
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const isRTL = currentLang === "ar";

  const isMobileOrTablet = useMediaQuery("(max-width: 1200px)");
  const isSmallMobile = useMediaQuery("(max-width: 480px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  const renderAuthMenu = () => (
    <Menu>
      <Menu.Target>
        <Button variant="subtle" ff="Oswald, sans-serif">
          <Group
            gap={2}
            wrap="nowrap"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <IconUser size={12} />
            <Text size="sm">{`${user?.firstName} ${" "} ${
              user?.lastName
            }`}</Text>
          </Group>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/dashboard`)}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2}>
            <IconDashboard size={14} />
            <Text size="sm">{t("user_dashboard")}</Text>
          </Group>
        </Menu.Item>
        {user?.Roles === "Admin" && (
          <Menu.Item
            onClick={() => router.push(`/${currentLang}/admin`)}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
            ff="Oswald, sans-serif"
          >
            <Group gap={2}>
              <IconDashboard size={14} />
              <Text size="sm">{t("admin_dashboard")}</Text>
            </Group>
          </Menu.Item>
        )}
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/profile`)}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2} wrap="nowrap">
            <IconUser size={14} />
            <Text size="sm">{t("profile")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2}>
            <IconLogout size={14} />
            <Text size="sm">{t("logout")}</Text>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );

  const renderMainMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            size="12"
            variant="subtle"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
            ff="Oswald, sans-serif"
          >
            {t("menu")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown ff="Oswald, sans-serif">
          {[
            { path: "/discoverMore", icon: IconHome, text: t("discover_more") },
            {
              path: "/joinTheJourney",
              icon: IconUserScan,
              text: t("join_the_journey"),
            },
            { path: "/ourPower", icon: IconSettings, text: t("our_power") },
          ].map((item) => (
            <Menu.Item
              key={item.path}
              onClick={() => router.push(`/${currentLang}/${item.path}`)}
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              <Group>
                <item.icon size={12} />
                <Text size="sm">{item.text}</Text>
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={5}
        style={{
          fontFamily: "Oswald, sans-serif",
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        {[
          { path: "/discoverMore", icon: IconHome, text: t("discover_more") },
          {
            path: "/joinTheJourney",
            icon: IconUserScan,
            text: t("join_the_journey"),
          },
          { path: "/ourPower", icon: IconSettings, text: t("our_power") },
        ].map((item) => (
          <Button
            key={item.path}
            variant="subtle"
            onClick={() => router.push(`/${currentLang}/${item.path}`)}
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <Group
              gap={2}
              wrap="nowrap"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
            >
              <item.icon size={12} />
              <Text size="sm">{item.text}</Text>
            </Group>
          </Button>
        ))}
      </Group>
    );

  const renderAccountMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            size="12"
            variant="subtle"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("account")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => router.push(`/${currentLang}/signUp`)}>
            <Group
              gap={2}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
              }}
            >
              <IconUser size={12} />
              <Text size="sm">{t("sign_up")}</Text>
            </Group>
          </Menu.Item>
          <Menu.Item onClick={() => router.push(`/${currentLang}/login`)}>
            <Group
              gap={2}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
              }}
            >
              <IconLogin size={12} />
              <Text size="sm">{t("login")}</Text>
            </Group>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={5}
        style={{
          fontFamily: "Oswald, sans-serif",
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        <Button
          variant="subtle"
          onClick={() => router.push(`/${currentLang}/signUp`)}
          style={{
            fontFamily: "Oswald, sans-serif",
            flexDirection: isRTL ? "row-reverse" : "row",
          }}
        >
          <Group
            gap={2}
            style={{
              fontFamily: "Oswald, sans-serif",
              flexDirection: isRTL ? "row-reverse" : "row",
            }}
          >
            <IconUser size={12} />
            <Text size="sm">{t("sign_up")}</Text>
          </Group>
        </Button>
        <Button
          variant="subtle"
          onClick={() => router.push(`/${currentLang}/login`)}
          style={{
            fontFamily: "Oswald, sans-serif",
            flexDirection: isRTL ? "row-reverse" : "row",
          }}
        >
          <Group
            gap={2}
            wrap="nowrap"
            style={{
              fontFamily: "Oswald, sans-serif",
              flexDirection: isRTL ? "row-reverse" : "row",
            }}
          >
            <IconLogin size={12} />
            <Text size="sm">{t("login")}</Text>
          </Group>
        </Button>
      </Group>
    );

  return (
    <Box
      component="nav"
      style={{
        position: router.pathname === "/" ? "fixed" : "static",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: 0,
        margin: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(4px)",
          zIndex: -1,
        },
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        direction={isRTL ? "row-reverse" : "row"}
        style={{
          padding: 0,
          margin: 0,
          minHeight: isSmallMobile ? "48px" : isMobile ? "56px" : "64px",
          backgroundColor: scrolled ? "white" : "transparent",
        }}
        p={0}
      >
        {/* Logo */}
        {isRTL ? (
          <Flex
            align="center"
            gap={isSmallMobile ? "xs" : "sm"}
            direction={isRTL ? "row-reverse" : "row"}
            justify="flex-start"
            style={{ flexShrink: 0 }}
          >
            <LanguageSwitcher />
            {isAuthenticated ? renderAuthMenu() : renderAccountMenu()}
            {renderMainMenu()}
          </Flex>
        ) : (
          <Flex
            align="center"
            gap={isSmallMobile ? "xs" : "md"}
            justify={isRTL ? "flex-end" : "flex-start"}
            dir={isRTL ? "rtl" : "ltr"}
            style={{ flexShrink: 0 }}
          >
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              w={80}
              h={80}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/${currentLang}/`)}
            />
          </Flex>
        )}

        {/* Right Side Actions */}
        {isRTL ? (
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            w={80}
            h={80}
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/${currentLang}/`)}
          />
        ) : (
          <Flex
            align="center"
            gap={isSmallMobile ? "xs" : "sm"}
            direction={isRTL ? "row-reverse" : "row"}
            justify="flex-end"
            style={{ flexShrink: 0 }}
          >
            {renderMainMenu()}
            {isAuthenticated ? renderAuthMenu() : renderAccountMenu()}
            <LanguageSwitcher />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default MenuComponent;
