import React from "react";
import {
  Title,
  TextInput,
  Button,
  Text,
  PasswordInput,
  Box,
  Grid,
  Checkbox,
  Divider,
  Anchor,
  Center,
  Stack,
  LoadingOverlay,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconUser, IconPhone } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { keyframes } from "@emotion/react";
import { useMutation } from "@tanstack/react-query";
import { RegisterUserDto } from "../../types/authDtos/authDtos";
import authController from "../../controllers/authController";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const SignUp = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("signUp");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  const schema = z
    .object({
      username: z
        .string()
        .min(3, { message: t("validation.username_min") })
        .max(20, { message: t("validation.username_max") })
        .regex(/^[a-zA-Z0-9_]+$/, {
          message: t("validation.username_regex"),
        }),
      email: z
        .string()
        .min(1, { message: t("validation.email_required") })
        .email({ message: t("validation.email_invalid") }),
      password: z
        .string()
        .min(1, { message: t("validation.password_required") })
        .min(8, { message: t("validation.password_min") })
        .regex(/[A-Z]/, {
          message: t("validation.password_uppercase"),
        })
        .regex(/[0-9]/, { message: t("validation.password_number") }),
      confirmPassword: z
        .string()
        .min(1, { message: t("validation.confirm_password_required") }),
      firstName: z
        .string()
        .min(1, { message: t("validation.first_name_required") }),
      lastName: z
        .string()
        .min(1, { message: t("validation.last_name_required") }),
      phoneNumber: z
        .string()
        .min(1, { message: t("validation.phone_required") })
        .regex(/^\+?[0-9]{10,15}$/, {
          message: t("validation.phone_invalid"),
        }),
      birthDate: z
        .date({
          required_error: t("validation.birth_date_required"),
          invalid_type_error: t("validation.birth_date_required"),
        })
        .refine(
          (date) => {
            const today = new Date();
            const age = today.getFullYear() - date.getFullYear();
            return age >= 13;
          },
          { message: t("validation.age_minimum") }
        ),
      termsAccepted: z.boolean().refine((value) => value === true, {
        message: t("validation.terms_required"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validation.passwords_match"),
      path: ["confirmPassword"],
    });

  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthDate: null as Date | null,
      termsAccepted: false,
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

  const registerMutation = useMutation({
    mutationFn: authController.register,
  });

  const handleSubmit = form.onSubmit((values) => {
    try {
      const registerData: RegisterUserDto = {
        ...values,
        userName: values.username,
        birthDate: values.birthDate as Date,
      };
      registerMutation.mutate(registerData);
    } catch {
      //handeld
    }
  });

  return (
    <>
      {registerMutation.isPending && <LoadingOverlay visible />}
      <Stack dir={isRTL ? "rtl" : "ltr"} p="md">
        {/* Main Form Content */}
        <Box component="div" style={{ animation: `${fadeIn} 0.8s ease-out` }}>
          <Title
            order={2}
            mb="md"
            style={(theme) => ({
              background: `linear-gradient(45deg, ${theme.colors.blue[6]}, ${theme.colors.cyan[6]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            {t("title")}
          </Title>
        </Box>

        <Box component="div" style={{ animation: `${fadeIn} 1s ease-out` }}>
          <Text size="sm" color="dimmed" mb="xl">
            {t("subtitle")}
          </Text>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          style={{ animation: `${fadeIn} 1.2s ease-out` }}
        >
          <Divider
            label={t("sections.account")}
            labelPosition="center"
            mb="md"
          />

          <TextInput
            label={t("fields.username")}
            placeholder={t("placeholders.username")}
            leftSection={<IconUser size={16} />}
            mb="md"
            error={form.errors.username}
            {...form.getInputProps("username")}
          />

          <Grid gutter="md">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label={t("fields.firstName")}
                placeholder={t("placeholders.firstName")}
                error={form.errors.firstName}
                {...form.getInputProps("firstName")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label={t("fields.lastName")}
                placeholder={t("placeholders.lastName")}
                error={form.errors.lastName}
                {...form.getInputProps("lastName")}
              />
            </Grid.Col>
          </Grid>

          <Grid gutter="md">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label={t("fields.email")}
                placeholder={t("placeholders.email")}
                mt="md"
                error={form.errors.email}
                {...form.getInputProps("email")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label={t("fields.phoneNumber")}
                placeholder={t("placeholders.phoneNumber")}
                mt="md"
                leftSection={<IconPhone size={16} />}
                error={form.errors.phoneNumber}
                {...form.getInputProps("phoneNumber")}
              />
            </Grid.Col>
          </Grid>

          <Grid gutter="md" mt="md">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <PasswordInput
                label={t("fields.password")}
                placeholder={t("placeholders.password")}
                error={form.errors.password}
                {...form.getInputProps("password")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <PasswordInput
                label={t("fields.confirmPassword")}
                placeholder={t("placeholders.confirmPassword")}
                error={form.errors.confirmPassword}
                {...form.getInputProps("confirmPassword")}
              />
            </Grid.Col>
          </Grid>

          <Divider
            label={t("sections.personal")}
            labelPosition="center"
            my="xl"
          />

          <Grid gutter="md">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <DatePickerInput
                label={t("fields.birthDate")}
                placeholder={t("placeholders.birthDate")}
                value={form.values.birthDate}
                onChange={(date) => form.setFieldValue("birthDate", date)}
                error={form.errors.birthDate}
                popoverProps={{ withinPortal: true }}
              />
            </Grid.Col>
          </Grid>

          <Checkbox
            mt="xl"
            label={
              <>
                {t("terms.agree")}{" "}
                <Anchor
                  href={`/${currentLang}/termsOfService`}
                  target="_blank"
                  size="sm"
                >
                  {t("terms.termsOfService")}
                </Anchor>{" "}
                {t("terms.and")}{" "}
                <Anchor
                  href={`/${currentLang}/privacyPolicy`}
                  target="_blank"
                  size="sm"
                >
                  {t("terms.privacyPolicy")}
                </Anchor>
              </>
            }
            error={form.errors.termsAccepted}
            {...form.getInputProps("termsAccepted", { type: "checkbox" })}
          />

          <Button
            type="submit"
            fullWidth
            size="md"
            mt="xl"
            gradient={{ from: "blue", to: "cyan" }}
            variant="gradient"
            loading={registerMutation.isPending}
            style={{ animation: `${fadeIn} 1.4s ease-out` }}
          >
            {t("buttons.create")}
          </Button>
        </Box>

        <Center mt="lg">
          <Anchor
            size="sm"
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              router.push("/login", undefined, { locale: currentLang });
            }}
          >
            {t("login.existingAccount")}{" "}
            <Text span c="blue" inherit>
              {t("login.signIn")}
            </Text>
          </Anchor>
        </Center>
      </Stack>
    </>
  );
};

export default SignUp;
