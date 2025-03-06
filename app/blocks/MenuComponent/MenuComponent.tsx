import React from "react";
import { Button, Group, Text, Paper, Image, Menu } from "@mantine/core";
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

const MenuComponent = () => {
  const isMobileOrTablet = useMediaQuery("(max-width: 1200px)");
  const { t } = useTranslation("menu");
  const router = useRouter();

  return (
    <Group wrap="nowrap" mt={"xs"} justify="space-between" gap={20}>
      <Image
        src="/images/blackLogo.png"
        alt="Description"
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
                  Menu
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => router.push("/discoverMore")}>
                  <Button variant="subtle">
                    <Group gap={2}>
                      <IconHome size={12} />
                      <Text size="12">Discover More</Text>
                    </Group>
                  </Button>
                </Menu.Item>
                <Menu.Item onClick={() => router.push("/joinTheJourney")}>
                  <Button variant="subtle">
                    <Group gap={2}>
                      <IconUserScan size={12} />
                      <Text size="12">Join the Journey</Text>
                    </Group>
                  </Button>
                </Menu.Item>
                <Menu.Item onClick={() => router.push("/ourPower")}>
                  <Button variant="subtle">
                    <Group gap={2}>
                      <IconSettings size={12} />
                      <Text size="12">Our Power</Text>
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
                <Group gap={2}>
                  <IconHome size={12} />
                  <Text size="12">Discover More</Text>
                </Group>
              </Button>
              <Button
                variant="subtle"
                onClick={() => router.push("/joinTheJourney")}
              >
                <Group gap={2}>
                  <IconUserScan size={12} />
                  <Text size="12">Join the Journey</Text>
                </Group>
              </Button>
              <Button variant="subtle" onClick={() => router.push("/ourPower")}>
                <Group gap={2}>
                  <IconSettings size={12} />
                  <Text size="12">Our Power</Text>
                </Group>
              </Button>
            </Group>
          )}
        </Group>

        {isMobileOrTablet ? (
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button size="12" variant="subtle">
                Account
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => router.push("/signUp")}>
                <Button variant="subtle">
                  <Group gap={2}>
                    <IconUser size={12} />
                    <Text size="12">SignUp</Text>
                  </Group>
                </Button>
              </Menu.Item>
              <Menu.Item onClick={() => router.push("/login")}>
                <Button variant="subtle">
                  <Group gap={2}>
                    <IconLogin size={12} />
                    <Text size="12">Login</Text>
                  </Group>
                </Button>
              </Menu.Item>
              <Menu.Item onClick={() => router.push("/submitOrder")}>
                <Button variant="subtle">
                  <Group gap={2}>
                    <IconMessageCircleQuestion size={12} />
                    <Text size="12">Submit Order</Text>
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
                <Text size="12">SignUp</Text>
              </Group>
            </Button>
            <Button variant="subtle" onClick={() => router.push("/login")}>
              <Group gap={2}>
                <IconLogin size={12} />
                <Text size="12">Login</Text>
              </Group>
            </Button>
            <Button
              variant="subtle"
              onClick={() => router.push("/submitOrder")}
            >
              <Group gap={2}>
                <IconMessageCircleQuestion size={12} />
                <Text size="12">Submit Order</Text>
              </Group>
            </Button>
          </Group>
        )}
      </Group>
    </Group>
  );
};

export default MenuComponent;
