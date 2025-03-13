import React from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Text,
  PasswordInput,
  Box,
  Grid,
  Select,
  Checkbox,
  Divider,
  MultiSelect,
  Textarea,
  Anchor,
  Center,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconUser, IconPhone } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { keyframes } from "@emotion/react";

// Animation keyframes
const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const SignUp = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("signUp");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  // Define the validation schema using Zod
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
      occupation: z.string().optional(),
      bio: z
        .string()
        .max(300, { message: t("validation.bio_max") })
        .optional(),
      interests: z.array(z.string()).optional(),
      location: z.string().optional(),
      referralSource: z.string().optional(),
      termsAccepted: z.boolean().refine((value) => value === true, {
        message: t("validation.terms_required"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validation.passwords_match"),
      path: ["confirmPassword"],
    });

  // Initialize form with validation
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
      occupation: "",
      bio: "",
      interests: [],
      location: "",
      referralSource: "",
      termsAccepted: false,
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

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      console.log("Form values to submit:", {
        ...values,
        password: "[REDACTED]",
      });
      // const formattedValues = {
      //   ...values,
      //   birthDate:
      //     values.birthDate instanceof Date
      //       ? values.birthDate.toISOString()
      //       : values.birthDate,
      // };

      // Remove confirmPassword as it's not needed in the API
      const { confirmPassword, ...userData } = values;

      // Use axios to call the API endpoint
      const response = await axios.post("/api/users", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("User created successfully:", response.data);

      // Redirect to login page with the current locale
      router.push("/login", undefined, { locale: currentLang });
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error (e.g., show error message to user)
      if (axios.isAxiosError(error) && error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server error:", error.response.data.message);
        form.setErrors({ email: error.response.data.message });
      } else if (axios.isAxiosError(error) && error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        form.setErrors({ email: t("errors.no_response") });
      } else if (axios.isAxiosError(error)) {
        // Something happened in setting up the request that triggered an Error
        console.error("Request error:", error.message);
        form.setErrors({ email: t("errors.request_failed") });
      } else {
        console.error("Unexpected error:", error);
        form.setErrors({ email: t("errors.unexpected") });
      }
    }
  });

  // Interest options for MultiSelect
  const interestOptions = [
    { value: "technology", label: t("interests.technology") },
    { value: "science", label: t("interests.science") },
    { value: "art", label: t("interests.art") },
    { value: "sports", label: t("interests.sports") },
    { value: "music", label: t("interests.music") },
    { value: "cooking", label: t("interests.cooking") },
    { value: "travel", label: t("interests.travel") },
    { value: "books", label: t("interests.books") },
    { value: "finance", label: t("interests.finance") },
    { value: "gaming", label: t("interests.gaming") },
  ];

  // Referral source options
  const referralOptions = [
    { value: "search", label: t("referral.search") },
    { value: "social", label: t("referral.social") },
    { value: "friend", label: t("referral.friend") },
    { value: "ad", label: t("referral.ad") },
    { value: "blog", label: t("referral.blog") },
    { value: "other", label: t("referral.other") },
  ];

  return (
    <Container size="md" py="xl" dir={isRTL ? "rtl" : "ltr"}>
      <Box
        component="div"
        style={{
          animation: `${fadeIn} 0.8s ease-out`,
        }}
      >
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

      <Box
        component="div"
        style={{
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        <Text size="sm" color="dimmed" mb="xl">
          {t("subtitle")}
        </Text>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{
          animation: `${fadeIn} 1.2s ease-out`,
        }}
      >
        <Divider label={t("sections.account")} labelPosition="center" mb="md" />

        <TextInput
          label={t("fields.username")}
          placeholder={t("placeholders.username")}
          leftSection={<IconUser size={16} />}
          mb="md"
          error={form.errors.username}
          {...form.getInputProps("username")}
        />

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label={t("fields.firstName")}
              placeholder={t("placeholders.firstName")}
              mb="md"
              error={form.errors.firstName}
              {...form.getInputProps("firstName")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label={t("fields.lastName")}
              placeholder={t("placeholders.lastName")}
              mb="md"
              error={form.errors.lastName}
              {...form.getInputProps("lastName")}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label={t("fields.email")}
          placeholder={t("placeholders.email")}
          mb="md"
          error={form.errors.email}
          {...form.getInputProps("email")}
        />

        <TextInput
          label={t("fields.phoneNumber")}
          placeholder={t("placeholders.phoneNumber")}
          leftSection={<IconPhone size={16} />}
          mb="md"
          error={form.errors.phoneNumber}
          {...form.getInputProps("phoneNumber")}
        />

        <Grid>
          <Grid.Col span={6}>
            <PasswordInput
              label={t("fields.password")}
              placeholder={t("placeholders.password")}
              mb="md"
              error={form.errors.password}
              {...form.getInputProps("password")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <PasswordInput
              label={t("fields.confirmPassword")}
              placeholder={t("placeholders.confirmPassword")}
              mb="md"
              error={form.errors.confirmPassword}
              {...form.getInputProps("confirmPassword")}
            />
          </Grid.Col>
        </Grid>

        <Divider
          label={t("sections.personal")}
          labelPosition="center"
          mt="xl"
          mb="md"
        />
        <Grid>
          <Grid.Col span={6}>
            <Text>{t("fields.birthDate")}</Text>
            <DatePickerInput
              wrapperProps={{ mb: "md" }}
              placeholder={t("placeholders.birthDate")}
              value={form.values.birthDate}
              onChange={(date: Date | null) =>
                form.setFieldValue("birthDate", date)
              }
              error={form.errors.birthDate}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label={t("fields.location")}
              placeholder={t("placeholders.location")}
              mb="md"
              error={form.errors.location}
              {...form.getInputProps("location")}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label={t("fields.occupation")}
          placeholder={t("placeholders.occupation")}
          mb="md"
          error={form.errors.occupation}
          {...form.getInputProps("occupation")}
        />

        <Textarea
          label={t("fields.bio")}
          placeholder={t("placeholders.bio")}
          minRows={3}
          mb="md"
          error={form.errors.bio}
          {...form.getInputProps("bio")}
        />

        <MultiSelect
          dir={isRTL ? "rtl" : "ltr"}
          label={t("fields.interests")}
          placeholder={t("placeholders.interests")}
          data={interestOptions}
          mb="md"
          error={form.errors.interests}
          {...form.getInputProps("interests")}
        />

        <Select
          dir={isRTL ? "rtl" : "ltr"}
          label={t("fields.referralSource")}
          placeholder={t("placeholders.referralSource")}
          data={referralOptions}
          mb="xl"
          error={form.errors.referralSource}
          {...form.getInputProps("referralSource")}
        />

        <Checkbox
          label={
            <>
              {t("terms.agree")}{" "}
              <Anchor
                target="_blank"
                size="sm"
                href={`/${currentLang}/termsOfService`}
              >
                <strong>{t("terms.termsOfService")}</strong>
              </Anchor>
              <Anchor
                target="_blank"
                size="sm"
                href={`/${currentLang}/privacyPolicy`}
              >
                <strong>{t("terms.privacyPolicy")}</strong>
              </Anchor>
            </>
          }
          mb="xl"
          error={form.errors.termsAccepted}
          {...form.getInputProps("termsAccepted", { type: "checkbox" })}
        />

        <Button
          type="submit"
          fullWidth
          size="md"
          mb="xl"
          gradient={{ from: "blue", to: "cyan" }}
          variant="gradient"
          style={{
            animation: `${fadeIn} 1.4s ease-out`,
          }}
          disabled={!form.isValid()}
        >
          {t("buttons.create")}
        </Button>
      </Box>
      <Center>
        <Anchor
          size="xs"
          ta="center"
          mt="md"
          href="/login"
          onClick={(e) => {
            e.preventDefault();
            router.push("/login", undefined, { locale: currentLang });
          }}
          style={{
            animation: `${fadeIn} 1.6s ease-out`,
          }}
        >
          {t("login.text")}
        </Anchor>
      </Center>
    </Container>
  );
};

export default SignUp;
