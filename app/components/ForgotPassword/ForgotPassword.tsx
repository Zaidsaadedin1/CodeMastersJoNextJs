import React, { useState } from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Text,
  Box,
  Alert,
  Anchor,
  Flex,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconMail, IconAlertCircle, IconCheck } from "@tabler/icons-react";

// Define the validation schema using Zod
const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  // Initialize form with validation
  const form = useForm({
    initialValues: {
      email: "",
    },

    // Use Zod for validation
    validate: (values) => {
      try {
        schema.parse(values);
        return {};
      } catch (error: any) {
        const formattedErrors: Record<string, string> = {};

        if (error.errors) {
          error.errors.forEach((err: any) => {
            formattedErrors[err.path[0]] = err.message;
          });
        }

        return formattedErrors;
      }
    },
    validateInputOnBlur: true,
  });

  const handleSubmit = form.onSubmit((values: any) => {
    console.log("Forgot password form submitted with email:", values.email);
    // Here you would typically send a password reset link
    setSubmitted(true);
  });

  return (
    <Container size="sm" py="xl">
      <Title order={2} mb="md">
        Forgot Your Password
      </Title>

      <Text size="sm" color="dimmed" mb="xl">
        Enter your email address below and we'll send you instructions to reset
        your password.
      </Text>

      {submitted ? (
        <Alert
          icon={<IconCheck size={16} />}
          title="Reset Link Sent!"
          color="green"
          mb="xl"
        >
          We've sent password reset instructions to your email address. Please
          check your inbox.
        </Alert>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="Enter your registered email"
            leftSection={<IconMail size={16} />}
            mb="md"
            error={form.errors.email}
            {...form.getInputProps("email")}
          />

          <Button type="submit" fullWidth size="md" mb="lg">
            Send Reset Link
          </Button>

          <Alert icon={<IconAlertCircle size={16} />} title="Note" color="blue">
            For security reasons, we will only send a reset link if the email
            address is registered in our system.
          </Alert>
        </Box>
      )}

      <Text size="xs" color="dimmed" ta="center" mt="xl">
        Remember your password?{" "}
        <Anchor component="a" size="xs" href="/login">
          Back to login
        </Anchor>
      </Text>
    </Container>
  );
}
