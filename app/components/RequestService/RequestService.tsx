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

// Define the validation schema using Zod
const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^\+?[0-9]{10,15}$/, {
      message: "Please enter a valid phone number",
    }),
  companyName: z.string().optional(),
  projectType: z.string().min(1, { message: "Project type is required" }),
  serviceType: z.string().min(1, { message: "Service type is required" }),
  budget: z
    .number({
      required_error: "Budget estimate is required",
      invalid_type_error: "Budget must be a number",
    })
    .min(1, { message: "Budget must be greater than 0" }),
  timeline: z.string().min(1, { message: "Timeline is required" }),
  projectDescription: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(1000, { message: "Description cannot exceed 1000 characters" }),
  additionalRequirements: z.string().optional(),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

export default function RequestService() {
  // Initialize form with validation
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

  const handleSubmit = form.onSubmit((values) => {
    console.log("Service request submitted with values:", values);
    // Here you would typically send the request to your backend
  });

  // Project type options
  const projectTypeOptions = [
    { value: "mobileApp", label: "Mobile Application" },
    { value: "website", label: "Website Development" },
    { value: "gameApp", label: "Game Development" },
    { value: "desktopApp", label: "Desktop Application" },
    { value: "ecommerce", label: "E-commerce Solution" },
    { value: "ai", label: "AI/Machine Learning" },
    { value: "cloudSolution", label: "Cloud Solution" },
    { value: "other", label: "Other IT Service" },
  ];

  // Service type options - these will change based on project type
  const getServiceTypeOptions = (projectType: string) => {
    switch (projectType) {
      case "mobileApp":
        return [
          { value: "android", label: "Android App" },
          { value: "ios", label: "iOS App" },
          { value: "crossPlatform", label: "Cross-platform App" },
          { value: "pwa", label: "Progressive Web App" },
        ];
      case "website":
        return [
          { value: "corporateWebsite", label: "Corporate Website" },
          { value: "landingPage", label: "Landing Page" },
          { value: "webApplication", label: "Web Application" },
          { value: "cms", label: "CMS-based Website" },
        ];
      case "gameApp":
        return [
          { value: "mobileGame", label: "Mobile Game" },
          { value: "pcGame", label: "PC Game" },
          { value: "webGame", label: "Web-based Game" },
          { value: "vrGame", label: "VR/AR Game" },
        ];
      case "desktopApp":
        return [
          { value: "windows", label: "Windows Application" },
          { value: "mac", label: "macOS Application" },
          { value: "linux", label: "Linux Application" },
          { value: "crossDesktop", label: "Cross-platform Desktop" },
        ];
      case "ecommerce":
        return [
          { value: "shopify", label: "Shopify Store" },
          { value: "woocommerce", label: "WooCommerce" },
          { value: "customEcommerce", label: "Custom E-commerce" },
          { value: "marketplaceApp", label: "Marketplace Platform" },
        ];
      case "ai":
        return [
          { value: "chatbot", label: "Chatbot/Virtual Assistant" },
          { value: "dataAnalysis", label: "Data Analysis Solution" },
          { value: "machineLearning", label: "Machine Learning Model" },
          { value: "computerVision", label: "Computer Vision" },
        ];
      case "cloudSolution":
        return [
          { value: "aws", label: "AWS Implementation" },
          { value: "azure", label: "Microsoft Azure" },
          { value: "gcp", label: "Google Cloud Platform" },
          { value: "privateCloud", label: "Private Cloud Solution" },
        ];
      default:
        return [
          { value: "consulting", label: "IT Consulting" },
          { value: "maintenance", label: "Maintenance & Support" },
          { value: "security", label: "Cybersecurity Services" },
          { value: "custom", label: "Custom Development" },
        ];
    }
  };

  // Timeline options
  const timelineOptions = [
    { value: "urgent", label: "Urgent (< 1 month)" },
    { value: "short", label: "Short-term (1-3 months)" },
    { value: "medium", label: "Medium-term (3-6 months)" },
    { value: "long", label: "Long-term (6+ months)" },
    { value: "flexible", label: "Flexible" },
  ];

  // Handle project type change to update service type options
  const handleProjectTypeChange = (value: string | null) => {
    form.setFieldValue("projectType", value || "");
    form.setFieldValue("serviceType", ""); // Reset service type when project type changes
  };

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="md">
        IT Service Request Form
      </Title>

      <Text size="sm" color="dimmed" mb="xl">
        Tell us about your project. Our team will review your requirements and
        contact you within 24 hours to discuss next steps.
      </Text>

      <Box component="form" onSubmit={handleSubmit}>
        <Divider label="Contact Information" labelPosition="center" mb="md" />

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="First Name"
              placeholder="Your first name"
              leftSection={<IconUser size={16} />}
              mb="md"
              error={form.errors.firstName}
              {...form.getInputProps("firstName")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Last Name"
              placeholder="Your last name"
              mb="md"
              error={form.errors.lastName}
              {...form.getInputProps("lastName")}
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              leftSection={<IconMail size={16} />}
              mb="md"
              error={form.errors.email}
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Phone"
              placeholder="+1234567890"
              leftSection={<IconPhone size={16} />}
              mb="md"
              error={form.errors.phone}
              {...form.getInputProps("phone")}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label="Company Name (Optional)"
          placeholder="Your company or organization"
          mb="md"
          {...form.getInputProps("companyName")}
        />

        <Divider
          label="Project Requirements"
          labelPosition="center"
          mt="xl"
          mb="md"
        />

        <Grid>
          <Grid.Col span={6}>
            <Select
              label="Project Type"
              placeholder="Select project type"
              data={projectTypeOptions}
              mb="md"
              error={form.errors.projectType}
              onChange={(value) => handleProjectTypeChange(value)}
              value={form.values.projectType}
              leftSection={<IconDeviceLaptop size={16} />}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Service Type"
              placeholder="Select service type"
              data={getServiceTypeOptions(form.values.projectType)}
              mb="md"
              disabled={!form.values.projectType}
              error={form.errors.serviceType}
              {...form.getInputProps("serviceType")}
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={6}>
            <NumberInput
              label="Budget Estimate"
              placeholder="Enter budget (USD)"
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
              label="Project Timeline"
              placeholder="Select expected timeline"
              data={timelineOptions}
              mb="md"
              error={form.errors.timeline}
              {...form.getInputProps("timeline")}
            />
          </Grid.Col>
        </Grid>

        <Textarea
          label="Project Description"
          placeholder="Please describe your project requirements in detail"
          minRows={4}
          mb="md"
          error={form.errors.projectDescription}
          {...form.getInputProps("projectDescription")}
        />

        <Textarea
          label="Additional Requirements (Optional)"
          placeholder="Any specific features, integrations, or technical requirements"
          minRows={2}
          mb="md"
          {...form.getInputProps("additionalRequirements")}
        />

        <FileInput
          label="Attachments (Optional)"
          description="Upload wireframes, mockups, or project documentation"
          placeholder="Upload files"
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
              <Anchor target="_blank" size="sm" href="/termsOfService">
                I agree to the <strong>Terms of Service</strong> and
              </Anchor>
              <Anchor target="_blank" size="sm" href="/privacyPolicy">
                <strong> Privacy Policy </strong>
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
        >
          Submit Request
        </Button>
      </Box>
    </Container>
  );
}
