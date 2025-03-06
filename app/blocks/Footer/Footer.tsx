import React from "react";
import {
  Container,
  Grid,
  Group,
  Text,
  Title,
  Stack,
  Divider,
  ActionIcon,
  List,
  Anchor,
  Box,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation("footer");

  return (
    <Box mt={30} component="footer" py="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack gap="md">
            <Title order={3}>Code Masters</Title>
            <Text size="sm">
              Delivering innovative IT solutions that transform businesses and
              drive success in the digital landscape. We combine technical
              excellence with creative problem-solving.
            </Text>
            <Group gap="md">
              {/* <Anchor
                href="https://www.facebook.com/codemastersjo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionIcon size="lg" variant="subtle">
                  <IconBrandTwitter size={18} />
                </ActionIcon>
              </Anchor> */}
              <Anchor
                href="https://www.facebook.com/codemastersjo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionIcon size="lg" variant="subtle">
                  <IconBrandFacebook size={18} />
                </ActionIcon>
              </Anchor>
              <Anchor
                href="https://www.linkedin.com/company/codemastersjo/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionIcon size="lg" variant="subtle">
                  <IconBrandLinkedin size={18} />
                </ActionIcon>
              </Anchor>
              <Anchor
                href="https://www.instagram.com/codemastersjo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionIcon size="lg" variant="subtle">
                  <IconBrandInstagram size={18} />
                </ActionIcon>
              </Anchor>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
          <Stack gap="md">
            <Title order={4}>Services</Title>
            <List
              spacing="xs"
              size="sm"
              center
              style={{ listStyleType: "none" }}
            >
              <List.Item>
                <Anchor underline="never">Web Development</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">Mobile Applications</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">Cloud Solutions</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">AI Integration</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">DevOps Services</Anchor>
              </List.Item>
            </List>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
          <Stack gap="md">
            <Title order={4}>Resources</Title>
            <List
              spacing="xs"
              size="sm"
              center
              style={{ listStyleType: "none" }}
            >
              <List.Item>
                <Anchor underline="never">Blog</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">Case Studies</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">Documentation</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">FAQ</Anchor>
              </List.Item>
              <List.Item>
                <Anchor underline="never">Support</Anchor>
              </List.Item>
            </List>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack gap="sm">
            <Title order={4}>Contact Us</Title>
            <List spacing="md" size="sm" style={{ listStyleType: "none" }}>
              <List.Item>
                <Group gap="sm" wrap="nowrap">
                  <IconMapPin size={16} />
                  <Text>Queen Rania Street, Amman, Jordan</Text>
                </Group>
              </List.Item>
              <List.Item>
                <Group gap="sm" wrap="nowrap">
                  <IconPhone size={16} />
                  <Text>+962 (78) 273 9761</Text>
                </Group>
              </List.Item>
              <List.Item>
                <Group gap="sm" wrap="nowrap">
                  <IconMail size={16} />
                  <Text>contact@codemastersjo.site</Text>
                </Group>
              </List.Item>
            </List>
          </Stack>
        </Grid.Col>
      </Grid>

      <Divider my="xl" opacity={0.1} />

      <Group justify="apart" align="center">
        <Text size="xs">
          © {currentYear} Code Masters. All rights reserved.
        </Text>
        <Group gap="lg">
          <Anchor size="xs" underline="never" href="/privacyPolicy">
            Privacy Policy
          </Anchor>
          <Anchor size="xs" underline="never" href="/termsOfService">
            Terms of Service
          </Anchor>
          <Anchor size="xs" underline="never" href="/sitemap">
            Sitemap
          </Anchor>
        </Group>
      </Group>
    </Box>
  );
};

export default Footer;
