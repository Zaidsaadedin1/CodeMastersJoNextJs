import React from "react";
import { Button, Group, Text, Image, Menu, Grid } from "@mantine/core";
import {
  IconHome,
  IconLogin,
  IconSettings,
  IconUser,
  IconUserScan,
  IconMessageCircleQuestion,
  IconDashboard,
  IconLogout,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useAuth } from "../../contexts/AuthContext";

const MenuComponent = () => {
  const isMobileOrTablet = useMediaQuery("(max-width: 1200px)");
  const { t, i18n } = useTranslation("menuComponent");
  const currentLang = i18n.language;
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const isRTL = currentLang === "ar";

  const renderAuthMenu = () => (
    <Menu>
      <Menu.Target>
        <Button variant="subtle">
          <Group
            gap={2}
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <IconUser size={12} />
            <Text size="sm">{user?.name}</Text>
          </Group>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={() => router.push("/dashboard")}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          <Group gap={2}>
            <IconDashboard size={14} />
            <Text size="sm">{t("user_dashboard")}</Text>
          </Group>
        </Menu.Item>
        {user?.Roles === "Admin" && (
          <Menu.Item
            onClick={() => router.push("/admin")}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            <Group gap={2}>
              <IconDashboard size={14} />
              <Text size="sm">{t("admin_dashboard")}</Text>
            </Group>
          </Menu.Item>
        )}
        <Menu.Item
          onClick={() => router.push("/profile")}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          <Group gap={2}>
            <IconUser size={14} />
            <Text size="sm">{t("profile")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
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
          >
            {t("menu")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
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
              onClick={() =>
                router.push(item.path, undefined, { locale: currentLang })
              }
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
        style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
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
            onClick={() =>
              router.push(item.path, undefined, { locale: currentLang })
            }
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <Group gap={2}>
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
          <Menu.Item onClick={() => router.push("/signUp")}>
            <Group
              gap={2}
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
            >
              <IconUser size={12} />
              <Text size="sm">{t("sign_up")}</Text>
            </Group>
          </Menu.Item>
          <Menu.Item onClick={() => router.push("/login")}>
            <Group
              gap={2}
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
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
        style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
      >
        <Button
          variant="subtle"
          onClick={() => router.push("/signUp")}
          style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
        >
          <Group gap={2}>
            <IconUser size={12} />
            <Text size="sm">{t("sign_up")}</Text>
          </Group>
        </Button>
        <Button
          variant="subtle"
          onClick={() => router.push("/login")}
          style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
        >
          <Group gap={2}>
            <IconLogin size={12} />
            <Text size="sm">{t("login")}</Text>
          </Group>
        </Button>
      </Group>
    );

  return (
    <Grid align="center" columns={3} mt={"xs"} justify="space-between">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={50}
        height={50}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer", order: isRTL ? 2 : 0 }}
      />
      <Group>
        <Group wrap="nowrap" gap="md" style={{ order: isRTL ? 0 : 2 }}>
          {isAuthenticated ? renderAuthMenu() : renderAccountMenu()}
        </Group>
        <Group
          wrap="nowrap"
          justify="space-between"
          style={{ flex: 1, padding: "0 20px" }}
        >
          {renderMainMenu()}
        </Group>
      </Group>
      <LanguageSwitcher />
    </Grid>
  );
};

export default MenuComponent;
