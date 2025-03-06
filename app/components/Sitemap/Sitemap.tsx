import React from "react";
import {
  Container,
  Title,
  Text,
  List,
  Box,
  Group,
  Anchor,
  Divider,
  Stack,
  Paper,
  Flex,
} from "@mantine/core";
import {
  IconHome,
  IconUsers,
  IconFileText,
  IconShoppingCart,
  IconHeadset,
  IconBook,
  IconArticle,
  IconListCheck,
} from "@tabler/icons-react";

export default function Sitemap() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="md">
        Sitemap
      </Title>
      <Text mb="xl">
        Explore our website structure to find the information you need easily.
      </Text>

      <Stack gap="xl">
        <Paper withBorder p="md" radius="md">
          <Group mb="md">
            <IconHome size={24} />
            <Title order={3}>Main Pages</Title>
          </Group>
          <List spacing="sm" size="md" pl="md">
            <List.Item>
              <Anchor href="/">Home</Anchor> - Welcome page and overview of our
              services
            </List.Item>
            <List.Item>
              <Anchor href="/about">About Us</Anchor> - Our company history,
              mission, and team
            </List.Item>
            <List.Item>
              <Anchor href="/services">Services</Anchor> - Details of services
              we offer
            </List.Item>
            <List.Item>
              <Anchor href="/contact">Contact</Anchor> - Get in touch with our
              team
            </List.Item>
          </List>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Group mb="md">
            <IconUsers size={24} />
            <Title order={3}>User Account</Title>
          </Group>
          <List spacing="sm" size="md" pl="md">
            <List.Item>
              <Anchor href="/login">Login</Anchor> - Access your account
            </List.Item>
            <List.Item>
              <Anchor href="/signup">Sign Up</Anchor> - Create a new account
            </List.Item>
            <List.Item>
              <Anchor href="/forgot-password">Forgot Password</Anchor> - Reset
              your password
            </List.Item>
            <List.Item>
              <Anchor href="/dashboard">Dashboard</Anchor> - Manage your account
              details
            </List.Item>
          </List>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Group mb="md">
            <IconShoppingCart size={24} />
            <Title order={3}>Order & Products</Title>
          </Group>
          <List spacing="sm" size="md" pl="md">
            <List.Item>
              <Anchor href="/products">Products</Anchor> - Browse our product
              catalog
            </List.Item>
            <List.Item>
              <Anchor href="/pricing">Pricing</Anchor> - View our pricing plans
            </List.Item>
            <List.Item>
              <Anchor href="/submit-order">Submit Order</Anchor> - Place a
              custom order
            </List.Item>
            <List.Item>
              <Anchor href="/order-tracking">Order Tracking</Anchor> - Track
              your existing orders
            </List.Item>
          </List>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Group mb="md">
            <IconHeadset size={24} />
            <Title order={3}>Support</Title>
          </Group>
          <List spacing="sm" size="md" pl="md">
            <List.Item>
              <Anchor href="/support">Support Center</Anchor> - Get help with
              our products and services
            </List.Item>
            <List.Item>
              <Anchor href="/faq">FAQ</Anchor> - Frequently asked questions
            </List.Item>
            <List.Item>
              <Anchor href="/documentation">Documentation</Anchor> - Technical
              guides and documentation
            </List.Item>
            <List.Item>
              <Anchor href="/tickets">Support Tickets</Anchor> - Submit and
              track support tickets
            </List.Item>
          </List>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Group mb="md">
            <IconArticle size={24} />
            <Title order={3}>Resources</Title>
          </Group>
          <List spacing="sm" size="md" pl="md">
            <List.Item>
              <Anchor href="/blog">Blog</Anchor> - Articles, news, and updates
            </List.Item>
            <List.Item>
              <Anchor href="/case-studies">Case Studies</Anchor> - Success
              stories from our clients
            </List.Item>
            <List.Item>
              <Anchor href="/webinars">Webinars</Anchor> - Online presentations
              and workshops
            </List.Item>
            <List.Item>
              <Anchor href="/resources">Resources</Anchor> - Downloadable
              guides, ebooks, and templates
            </List.Item>
          </List>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Group mb="md">
            <IconFileText size={24} />
            <Title order={3}>Legal</Title>
          </Group>
          <List spacing="sm" size="md" pl="md">
            <List.Item>
              <Anchor href="/terms-of-service">Terms of Service</Anchor> - Terms
              and conditions for using our services
            </List.Item>
            <List.Item>
              <Anchor href="/privacy-policy">Privacy Policy</Anchor> - How we
              manage and protect your data
            </List.Item>
            <List.Item>
              <Anchor href="/cookie-policy">Cookie Policy</Anchor> - How we use
              cookies on our website
            </List.Item>
            <List.Item>
              <Anchor href="/refund-policy">Refund Policy</Anchor> - Our policy
              for refunds and returns
            </List.Item>
          </List>
        </Paper>
      </Stack>
    </Container>
  );
}
