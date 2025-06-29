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
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconMail, IconAlertCircle, IconCheck } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const { t, i18n } = useTranslation("forgotPassword");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: t("validation.email_required") })
      .email({ message: t("validation.email_invalid") }),
  });

  const form = useForm({
    initialValues: { email: "" },
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

  const handleSubmit = form.onSubmit(() => {
    setSubmitted(true);
  });

  return (
    <Container size="sm" py="xl" dir={isRTL ? "rtl" : "ltr"}>
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

      {submitted ? (
        <Alert
          icon={<IconCheck size={16} />}
          title={t("alerts.success_title")}
          color="green"
          mb="xl"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {t("alerts.success_description")}
        </Alert>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          style={{ animation: `${fadeIn} 1.2s ease-out` }}
        >
          <TextInput
            label={t("fields.email")}
            placeholder={t("placeholders.email")}
            leftSection={<IconMail size={16} />}
            mb="md"
            error={form.errors.email}
            {...form.getInputProps("email")}
          />

          <Button
            type="submit"
            fullWidth
            size="md"
            mb="lg"
            style={{ animation: `${fadeIn} 1.4s ease-out` }}
          >
            {t("buttons.send_reset")}
          </Button>

          <Alert
            icon={<IconAlertCircle size={16} />}
            title={t("alerts.note_title")}
            color="blue"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {t("alerts.note_description")}
          </Alert>
        </Box>
      )}

      <Text
        size="xs"
        color="dimmed"
        ta="center"
        mt="xl"
        style={{ animation: `${fadeIn} 1.6s ease-out` }}
      >
        {t("links.remember_password")}{" "}
        <Anchor component="a" size="xs" href={`/${currentLang}/login`} ml="xs">
          {t("links.back_to_login")}
        </Anchor>
      </Text>
    </Container>
  );
}
