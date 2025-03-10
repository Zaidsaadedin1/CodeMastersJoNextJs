import React from "react";
import { Button, Group, Text, Image, Menu, Grid } from "@mantine/core";
import {
  IconHome,
  IconLogin,
  IconSettings,
  IconUser,
  IconUserScan,
  IconMessageCircleQuestion,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useClientTranslation } from "../../hooks/useClientTranslation";

const MenuComponent = () => {
  const isMobileOrTablet = useMediaQuery("(max-width: 1200px)");
  const { t, i18n } = useClientTranslation("menuComponent");
  const currentLang = i18n.language;
  const router = useRouter();

  return (
    <Grid align="center" columns={3} mt={"xs"} justify="space-between">
      <Image
        src="/images/blackLogo.png"
        alt="Logo"
        width={50}
        height={50}
        onClick={() => router.push("/")}
      />
      <Group wrap="nowrap" justify="space-between">
        <Group wrap="nowrap">
          {isMobileOrTablet ? (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button size="12" variant="subtle">
                  {t("menu")}
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => router.push("/discoverMore")}>
                  <Button variant="subtle">
                    <Group wrap="nowrap" gap={2}>
                      <IconHome size={12} />
                      <Text size="12">{t("discover_more")}</Text>
                    </Group>
                  </Button>
                </Menu.Item>
                <Menu.Item onClick={() => router.push("/joinTheJourney")}>
                  <Button variant="subtle">
                    <Group wrap="nowrap" gap={2}>
                      <IconUserScan size={12} />
                      <Text size="12">{t("join_the_journey")}</Text>
                    </Group>
                  </Button>
                </Menu.Item>
                <Menu.Item onClick={() => router.push("/ourPower")}>
                  <Button variant="subtle">
                    <Group wrap="nowrap" gap={2}>
                      <IconSettings size={12} />
                      <Text size="12">{t("our_power")}</Text>
                    </Group>
                  </Button>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Group wrap="nowrap" justify="space-around" gap={5}>
              <Button
                size="compact-md"
                variant="subtle"
                onClick={() => router.push("/discoverMore")}
              >
                <Group wrap="nowrap" gap={2}>
                  <IconHome size={12} />
                  <Text size="12">{t("discover_more")}</Text>
                </Group>
              </Button>
              <Button
                variant="subtle"
                onClick={() => router.push("/joinTheJourney")}
              >
                <Group wrap="nowrap" gap={2}>
                  <IconUserScan size={12} />
                  <Text size="12">{t("join_the_journey")}</Text>
                </Group>
              </Button>
              <Button variant="subtle" onClick={() => router.push("/ourPower")}>
                <Group wrap="nowrap" gap={2}>
                  <IconSettings size={12} />
                  <Text size="12">{t("our_power")}</Text>
                </Group>
              </Button>
            </Group>
          )}
        </Group>

        {isMobileOrTablet ? (
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button size="12" variant="subtle">
                {t("account")}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => router.push("/signUp")}>
                <Button variant="subtle">
                  <Group wrap="nowrap" gap={2}>
                    <IconUser size={12} />
                    <Text size="12">{t("sign_up")}</Text>
                  </Group>
                </Button>
              </Menu.Item>
              <Menu.Item onClick={() => router.push("/login")}>
                <Button variant="subtle">
                  <Group gap={2}>
                    <IconLogin size={12} />
                    <Text size="12">{t("login")}</Text>
                  </Group>
                </Button>
              </Menu.Item>
              <Menu.Item onClick={() => router.push("/requestService")}>
                <Button variant="subtle">
                  <Group gap={2}>
                    <IconMessageCircleQuestion size={12} />
                    <Text size="12">{t("request_service")}</Text>
                  </Group>
                </Button>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Group wrap="nowrap" justify="space-around" gap={5}>
            <Button variant="subtle" onClick={() => router.push("/signUp")}>
              <Group gap={2}>
                <IconUser size={12} />
                <Text size="12">{t("sign_up")}</Text>
              </Group>
            </Button>
            <Button variant="subtle" onClick={() => router.push("/login")}>
              <Group gap={2}>
                <IconLogin size={12} />
                <Text size="12">{t("login")}</Text>
              </Group>
            </Button>
            <Button
              variant="subtle"
              onClick={() => router.push("/requestService")}
            >
              <Group gap={2}>
                <IconMessageCircleQuestion size={12} />
                <Text size="12">{t("request_service")}</Text>
              </Group>
            </Button>
          </Group>
        )}
      </Group>

      <LanguageSwitcher />
    </Grid>
  );
};

export default MenuComponent;
