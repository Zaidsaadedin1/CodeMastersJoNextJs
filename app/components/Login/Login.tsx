import React from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Text,
  PasswordInput,
  Box,
  Checkbox,
  Anchor,
  Group,
  Divider,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconMail, IconLock } from "@tabler/icons-react";

// Define the validation schema using Zod
const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

export default function Login() {
  // Initialize form with validation
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
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
    validateInputOnBlur: true, // Validate on blur (when input loses focus)
  });

  const handleSubmit = form.onSubmit((values: any) => {
    console.log("Login form submitted with values:", values);
    // Here you would typically handle authentication
  });

  return (
    <Container size="sm" py="xl">
      <Title order={2} mb="md">
        Welcome Back
      </Title>

      <Text size="sm" color="dimmed" mb="xl">
        Log in to continue your journey with us.
      </Text>

      <Box component="form" onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          leftSection={<IconMail size={16} />}
          mb="md"
          error={form.errors.email}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          leftSection={<IconLock size={16} />}
          mb="md"
          error={form.errors.password}
          {...form.getInputProps("password")}
        />

        <Group justify="space-between" mb="md">
          <Checkbox
            label="Remember me"
            {...form.getInputProps("rememberMe", { type: "checkbox" })}
          />
          <Anchor component="a" size="sm" href="/forgotPassword">
            Forgot password?
          </Anchor>
        </Group>

        <Button
          type="submit"
          fullWidth
          size="md"
          mb="lg"
          disabled={!form.isValid}
        >
          Login
        </Button>

        <Divider label="OR" labelPosition="center" my="md" />

        <Text size="xs" color="dimmed" ta="center" mt="md">
          Don't have an account yet?
          <Anchor component="a" size="xs" href="/signUp" ml="xs">
            Sign up
          </Anchor>
        </Text>
      </Box>
    </Container>
  );
}
