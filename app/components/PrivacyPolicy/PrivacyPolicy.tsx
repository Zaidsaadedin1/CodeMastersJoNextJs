import React from "react";
import { Container, Title, Text, Box, List, Divider } from "@mantine/core";

export default function PrivacyPolicy() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        Privacy Policy
      </Title>
      <Text color="dimmed" mb="xl">
        Last Updated: March 1, 2025
      </Text>

      <Box mb="xl">
        <Title order={3} mb="md">
          Introduction
        </Title>
        <Text mb="md">
          At Example Company, we respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </Text>
        <Text mb="md">
          This privacy policy applies to all information collected through our
          website, mobile application, and/or any related services, sales,
          marketing, or events (collectively, the "Services").
        </Text>
      </Box>

      <Divider my="xl" />

      <Box mb="xl">
        <Title order={3} mb="md">
          Information We Collect
        </Title>
        <Text mb="md">
          We collect several types of information from and about users of our
          Services, including:
        </Text>
        <List mb="md">
          <List.Item>
            <Text>
              <strong>Personal Identifiers:</strong> Name, email address, postal
              address, phone number, and other similar identifiers.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>Account Information:</strong> Username, password, account
              preferences, and purchase history.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>Payment Information:</strong> Credit card numbers, banking
              information, and billing addresses.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>Usage Data:</strong> Information about how you use our
              website, products, and services.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>Technical Data:</strong> IP address, browser type,
              operating system, device information, and other technology
              identifiers on the devices you use to access our Services.
            </Text>
          </List.Item>
        </List>
      </Box>

      <Divider my="xl" />

      <Box mb="xl">
        <Title order={3} mb="md">
          How We Use Your Information
        </Title>
        <Text mb="md">
          We use the information we collect about you for various purposes,
          including:
        </Text>
        <List mb="md">
          <List.Item>
            <Text>To provide, maintain, and improve our Services.</Text>
          </List.Item>
          <List.Item>
            <Text>
              To process and fulfill your orders and send related information,
              including order confirmations and invoices.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              To send administrative information, such as updates to our terms,
              conditions, and policies.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              To personalize your experience and deliver content and product
              offerings relevant to your interests.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              To respond to your comments, questions, and requests and provide
              customer service.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              To protect, investigate, and deter against fraudulent,
              unauthorized, or illegal activity.
            </Text>
          </List.Item>
        </List>
      </Box>

      <Divider my="xl" />

      <Box mb="xl">
        <Title order={3} mb="md">
          Data Sharing and Disclosure
        </Title>
        <Text mb="md">We may share your personal information with:</Text>
        <List mb="md">
          <List.Item>
            <Text>
              <strong>Service Providers:</strong> We may share your information
              with third-party vendors, service providers, contractors, or
              agents who perform services for us.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>Business Transfers:</strong> If we are involved in a
              merger, acquisition, or sale of all or a portion of our assets,
              your information may be transferred as part of that transaction.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>Compliance with Laws:</strong> We may disclose your
              information where we are legally required to do so.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>With Your Consent:</strong> We may share your information
              with third parties when you have given us your consent to do so.
            </Text>
          </List.Item>
        </List>
      </Box>

      <Divider my="xl" />

      <Box mb="xl">
        <Title order={3} mb="md">
          Your Rights
        </Title>
        <Text mb="md">
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </Text>
        <List mb="md">
          <List.Item>
            <Text>
              The right to access and receive a copy of your personal
              information.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              The right to request rectification or correction of your personal
              information.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              The right to request erasure of your personal information.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              The right to restrict processing of your personal information.
            </Text>
          </List.Item>
          <List.Item>
            <Text>The right to data portability.</Text>
          </List.Item>
          <List.Item>
            <Text>
              The right to object to processing of your personal information.
            </Text>
          </List.Item>
        </List>
        <Text mb="md">
          To exercise any of these rights, please contact us at
          info@codemastersjo.site
        </Text>
      </Box>

      <Divider my="xl" />

      <Box mb="xl">
        <Title order={3} mb="md">
          Contact Us
        </Title>
        <Text mb="md">
          If you have any questions about this privacy policy or our privacy
          practices, please contact us at: info@codemastersjo.site
        </Text>
      </Box>
    </Container>
  );
}
