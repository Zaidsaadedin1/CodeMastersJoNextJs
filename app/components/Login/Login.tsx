// Login component
import React from "react";
import {
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
  Stack,
  LoadingOverlay,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconMail, IconLock } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { keyframes } from "@emotion/react";
import { useMutation } from "@tanstack/react-query";
import authController from "../../controllers/authController";
import { useAuth } from "../../contexts/AuthContext";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export default function Login() {
  const router = useRouter();
  const { t, i18n } = useTranslation("login");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const { login } = useAuth();

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: t("validation.email_required") })
      .email({ message: t("validation.email_invalid") }),
    password: z.string().min(1, { message: t("validation.password_required") }),
    rememberMe: z.boolean().optional(),
  });

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: (values) => {
      try {
        schema.parse(values);
        return {};
      } catch (error: any) {
        const formattedErrors: Record<string, string> = {};
        error.errors?.forEach((err: any) => {
          formattedErrors[err.path[0]] = err.message;
        });
        return formattedErrors;
      }
    },
    validateInputOnBlur: true,
  });
  const loginMutation = useMutation({
    mutationFn: authController.login,
    onSuccess: (response) => {
      // Adjust this based on your API response structure
      if (response && response.data) {
        // Assuming response.data is the token string
        login(response.data);
        router.push(`/${currentLang}/dashboard`); // Or wherever you want to redirect after login
      } else {
        console.error("Login response invalid:", response);
        form.setErrors({ email: t("errors.invalid_credentials") });
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      form.setErrors({ email: t("errors.server_error") });
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    loginMutation.mutate(values);
  });

  return (
    <>
      {loginMutation.isPending && <LoadingOverlay visible />}

      <Stack dir={isRTL ? "rtl" : "ltr"}>
        <Title
          order={2}
          mb="md"
          style={{
            animation: `${fadeIn} 0.8s ease-out`,
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {t("title")}
        </Title>

        <Text
          size="sm"
          color="dimmed"
          mb="xl"
          style={{
            animation: `${fadeIn} 1s ease-out`,
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {t("subtitle")}
        </Text>

        <Box
          component="form"
          onSubmit={handleSubmit}
          style={{ animation: `${fadeIn} 1.2s ease-out` }}
        >
          <TextInput
            label={t("fields.email")}
            placeholder={t("fields.email")}
            leftSection={<IconMail size={16} />}
            mb="md"
            error={form.errors.email}
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label={t("fields.password")}
            placeholder={t("fields.password")}
            leftSection={<IconLock size={16} />}
            mb="md"
            error={form.errors.password}
            {...form.getInputProps("password")}
          />

          <Group justify="space-between" mb="md">
            <Checkbox
              label={t("fields.remember_me")}
              {...form.getInputProps("rememberMe", { type: "checkbox" })}
            />
            <Anchor
              component="a"
              size="sm"
              href={`/${currentLang}/forgotPassword`}
            >
              {t("links.forgot_password")}
            </Anchor>
          </Group>

          <Button
            type="submit"
            fullWidth
            size="md"
            mb="lg"
            loading={loginMutation.isPending}
            style={{ animation: `${fadeIn} 1.4s ease-out` }}
          >
            {t("buttons.login")}
          </Button>

          <Divider label={t("divider")} labelPosition="center" my="md" />

          <Text size="xs" color="dimmed" ta="center" mt="md">
            {t("links.no_account")}
            <Anchor
              component="a"
              size="xs"
              href={`/${currentLang}/signUp`}
              ml="xs"
            >
              {t("links.signup")}
            </Anchor>
          </Text>
        </Box>
      </Stack>
    </>
  );
}
