import React from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Text,
  Box,
  Grid,
  Textarea,
  Select,
  NumberInput,
  Checkbox,
  FileInput,
  Divider,
  Anchor,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import {
  IconFileUpload,
  IconUser,
  IconMail,
  IconPhone,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export default function RequestService() {
  const router = useRouter();
  const { t, i18n } = useTranslation("requestService");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  const schema = z.object({
    firstName: z
      .string()
      .min(1, { message: t("validation.firstName_required") }),
    lastName: z.string().min(1, { message: t("validation.lastName_required") }),
    email: z
      .string()
      .min(1, { message: t("validation.email_required") })
      .email({ message: t("validation.email_invalid") }),
    phone: z
      .string()
      .min(1, { message: t("validation.phone_required") })
      .regex(/^\+?[0-9]{10,15}$/, {
        message: t("validation.phone_invalid"),
      }),
    companyName: z.string().optional(),
    projectType: z
      .string()
      .min(1, { message: t("validation.projectType_required") }),
    serviceType: z
      .string()
      .min(1, { message: t("validation.serviceType_required") }),
    budget: z
      .number({
        required_error: t("validation.budget_required"),
        invalid_type_error: t("validation.budget_number"),
      })
      .min(1, { message: t("validation.budget_min") }),
    timeline: z.string().min(1, { message: t("validation.timeline_required") }),
    projectDescription: z
      .string()
      .min(10, { message: t("validation.projectDescription_min") })
      .max(1000, { message: t("validation.projectDescription_max") }),
    additionalRequirements: z.string().optional(),
    termsAccepted: z.boolean().refine((value) => value === true, {
      message: t("validation.terms_required"),
    }),
  });

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      projectType: "",
      serviceType: "",
      budget: 1000,
      timeline: "",
      projectDescription: "",
      additionalRequirements: "",
      termsAccepted: false,
      attachments: null as File | null,
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

  const handleSubmit = form.onSubmit((values) => {
    console.log("Service request submitted with values:", values);
  });

  const getProjectTypeOptions = () => {
    return Object.entries(t("projectTypes", { returnObjects: true })).map(
      ([value, label]) => ({ value, label })
    );
  };

  const getServiceTypeOptions = (projectType: string) => {
    const serviceTypes =
      t(`serviceTypes.${projectType}`, { returnObjects: true }) ||
      t("serviceTypes.default", { returnObjects: true });

    return Object.entries(serviceTypes).map(([value, label]) => ({
      value,
      label,
    }));
  };

  const timelineOptions = Object.entries(
    t("timelines", { returnObjects: true })
  ).map(([value, label]) => ({ value, label }));

  const handleProjectTypeChange = (value: string | null) => {
    form.setFieldValue("projectType", value || "");
    form.setFieldValue("serviceType", "");
  };

  return (
    <Container size="md" py="xl" dir={isRTL ? "rtl" : "ltr"}>
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

      <Box component="form" onSubmit={handleSubmit}>
        <Divider
          label={t("fields.contactInfo")}
          labelPosition="center"
          mb="md"
        />

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label={t("fields.firstName")}
              placeholder={t("placeholders.firstName")}
              leftSection={<IconUser size={16} />}
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

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label={t("fields.email")}
              placeholder={t("placeholders.email")}
              leftSection={<IconMail size={16} />}
              mb="md"
              error={form.errors.email}
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label={t("fields.phone")}
              placeholder={t("placeholders.phone")}
              leftSection={<IconPhone size={16} />}
              mb="md"
              error={form.errors.phone}
              {...form.getInputProps("phone")}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label={t("fields.companyName")}
          placeholder={t("placeholders.companyName")}
          mb="md"
          {...form.getInputProps("companyName")}
        />

        <Divider
          label={t("fields.projectRequirements")}
          labelPosition="center"
          mt="xl"
          mb="md"
        />

        <Grid>
          <Grid.Col span={6}>
            <Select
              label={t("fields.projectType")}
              placeholder={t("placeholders.projectType")}
              data={getProjectTypeOptions()}
              mb="md"
              error={form.errors.projectType}
              onChange={handleProjectTypeChange}
              value={form.values.projectType}
              leftSection={<IconDeviceLaptop size={16} />}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label={t("fields.serviceType")}
              placeholder={t("placeholders.serviceType")}
              data={getServiceTypeOptions(form.values.projectType)}
              mb="md"
              disabled={!form.values.projectType}
              error={form.errors.serviceType}
              {...form.getInputProps("serviceType")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={6}>
            <NumberInput
              label={t("fields.budget")}
              placeholder={t("placeholders.budget")}
              min={100}
              mb="md"
              error={form.errors.budget}
              onChange={(value) =>
                form.setFieldValue("budget", Number(value) || 0)
              }
              value={form.values.budget}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label={t("fields.timeline")}
              placeholder={t("placeholders.timeline")}
              data={timelineOptions}
              mb="md"
              error={form.errors.timeline}
              {...form.getInputProps("timeline")}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </Grid.Col>
        </Grid>

        <Textarea
          label={t("fields.projectDescription")}
          placeholder={t("placeholders.projectDescription")}
          minRows={4}
          mb="md"
          error={form.errors.projectDescription}
          {...form.getInputProps("projectDescription")}
        />

        <Textarea
          label={t("fields.additionalRequirements")}
          placeholder={t("placeholders.additionalRequirements")}
          minRows={2}
          mb="md"
          {...form.getInputProps("additionalRequirements")}
        />

        <FileInput
          label={t("fields.attachments")}
          description={t("descriptions.attachments")}
          placeholder={t("placeholders.attachments")}
          accept="image/png,image/jpeg,application/pdf,application/zip"
          leftSection={<IconFileUpload size={16} />}
          mb="xl"
          onChange={(file) =>
            form.setFieldValue("attachments", file as File | null)
          }
          value={form.values.attachments}
        />

        <Checkbox
          label={
            <>
              <Anchor
                target="_blank"
                size="sm"
                href={`/${currentLang}/termsOfService`}
              >
                {t("links.agree")} <strong>{t("links.terms")}</strong>
              </Anchor>
              <Anchor
                target="_blank"
                size="sm"
                href={`/${currentLang}/privacyPolicy`}
              >
                {t("links.and")} <strong>{t("links.privacy")}</strong>
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
          color="blue"
          mt="xl"
          disabled={!form.isValid()}
          style={{ animation: `${fadeIn} 1.4s ease-out` }}
        >
          {t("buttons.submit")}
        </Button>
      </Box>
    </Container>
  );
}
