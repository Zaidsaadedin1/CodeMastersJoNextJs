import React from "react";
import {
  Container,
  Title,
  Text,
  Box,
  Divider,
  Anchor,
  Flex,
  Stack,
} from "@mantine/core";

export default function TermsOfService() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        Terms of Service
      </Title>
      <Text size="sm" color="dimmed" mb="xl">
        Last updated: March 1, 2025
      </Text>

      <Stack gap="xl">
        <Box>
          <Title order={3} mb="md">
            1. Introduction
          </Title>
          <Text mb="md">
            Welcome to our platform. These Terms of Service ("Terms") govern
            your access to and use of our website, products, and services. By
            accessing or using our services, you agree to be bound by these
            Terms and our Privacy Policy.
          </Text>
          <Text mb="md">
            Please read these Terms carefully before using our services. If you
            do not agree to these Terms, you must not access or use our
            services.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            2. Definitions
          </Title>
          <Text mb="md">
            <strong>"Service"</strong> refers to the website, application, and
            services provided by our company.
          </Text>
          <Text mb="md">
            <strong>"User"</strong> refers to individuals who access or use our
            Service.
          </Text>
          <Text mb="md">
            <strong>"Content"</strong> refers to text, graphics, images, music,
            software, audio, video, information or other materials.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            3. User Accounts
          </Title>
          <Text mb="md">
            3.1. To access certain features of our Service, you may be required
            to create an account. You agree to provide accurate, current, and
            complete information during the registration process.
          </Text>
          <Text mb="md">
            3.2. You are responsible for safeguarding your password and for all
            activities that occur under your account. You agree to notify us
            immediately of any unauthorized use of your account.
          </Text>
          <Text mb="md">
            3.3. We reserve the right to suspend or terminate your account if
            any information provided during registration or thereafter proves to
            be inaccurate, not current, or incomplete.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            4. Ordering and Payment
          </Title>
          <Text mb="md">
            4.1. By placing an order through our Service, you are making an
            offer to purchase the products or services described in your order.
          </Text>
          <Text mb="md">
            4.2. We reserve the right to refuse or cancel any orders at our sole
            discretion. If we cancel an order after you have already been
            charged, we will refund the charged amount.
          </Text>
          <Text mb="md">
            4.3. Payment must be made at the time of ordering. We accept various
            payment methods as indicated on our Service.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            5. Intellectual Property Rights
          </Title>
          <Text mb="md">
            5.1. The Service and its original content, features, and
            functionality are and will remain the exclusive property of our
            company and its licensors.
          </Text>
          <Text mb="md">
            5.2. Our trademarks and trade dress may not be used in connection
            with any product or service without the prior written consent of our
            company.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            6. User Content
          </Title>
          <Text mb="md">
            6.1. Our Service may allow you to post, link, store, share and
            otherwise make available certain information, text, graphics,
            videos, or other material. You are responsible for the Content that
            you post on or through the Service.
          </Text>
          <Text mb="md">
            6.2. By posting Content on or through the Service, you grant us the
            right to use, modify, publicly perform, publicly display, reproduce,
            and distribute such Content on and through the Service.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            7. Prohibited Uses
          </Title>
          <Text mb="md">You agree not to use the Service:</Text>
          <Text mb="md">
            7.1. In any way that violates any applicable federal, state, local,
            or international law or regulation.
          </Text>
          <Text mb="md">
            7.2. To transmit, or procure the sending of, any advertising or
            promotional material, including any "junk mail," "chain letter,"
            "spam," or any other similar solicitation.
          </Text>
          <Text mb="md">
            7.3. To impersonate or attempt to impersonate our company, a company
            employee, another user, or any other person or entity.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            8. Limitation of Liability
          </Title>
          <Text mb="md">
            8.1. In no event shall our company, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses.
          </Text>
          <Text mb="md">
            8.2. Our liability is limited to the maximum extent permitted by
            law.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            9. Changes to Terms
          </Title>
          <Text mb="md">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole
            discretion.
          </Text>
        </Box>

        <Box>
          <Title order={3} mb="md">
            10. Contact Us
          </Title>
          <Text mb="md">
            If you have any questions about these Terms, please contact us at
            legal@example.com or through our contact form.
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
