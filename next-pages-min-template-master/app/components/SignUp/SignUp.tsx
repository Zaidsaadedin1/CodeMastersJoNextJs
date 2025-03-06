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
  Group,
  Anchor,
  Center,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconCalendar, IconUser, IconPhone } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";

// Define the validation schema using Zod
const schema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(20, { message: "Username cannot exceed 20 characters" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers, and underscores",
      }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must include at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must include at least one number" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    phoneNumber: z
      .string()
      .min(1, { message: "Phone number is required" })
      .regex(/^\+?[0-9]{10,15}$/, {
        message: "Please enter a valid phone number (10-15 digits)",
      }),
    birthDate: z
      .date({
        required_error: "Birth date is required",
        invalid_type_error: "Birth date is required",
      })
      .refine(
        (date) => {
          const today = new Date();
          const age = today.getFullYear() - date.getFullYear();
          return age >= 13;
        },
        { message: "You must be at least 13 years old to sign up" }
      ),
    occupation: z.string().optional(),
    bio: z
      .string()
      .max(300, { message: "Bio cannot exceed 300 characters" })
      .optional(),
    interests: z.array(z.string()).optional(),
    location: z.string().optional(),
    referralSource: z.string().optional(),
    termsAccepted: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
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

  const handleSubmit = form.onSubmit((values: any) => {
    console.log("Form submitted with values:", values);
    // Here you would typically send the data to your backend
  });

  // Interest options for MultiSelect
  const interestOptions = [
    { value: "technology", label: "Technology" },
    { value: "science", label: "Science" },
    { value: "art", label: "Art & Design" },
    { value: "sports", label: "Sports & Fitness" },
    { value: "music", label: "Music" },
    { value: "cooking", label: "Cooking" },
    { value: "travel", label: "Travel" },
    { value: "books", label: "Books & Literature" },
    { value: "finance", label: "Finance & Investment" },
    { value: "gaming", label: "Gaming" },
  ];

  // Referral source options
  const referralOptions = [
    { value: "search", label: "Search Engine" },
    { value: "social", label: "Social Media" },
    { value: "friend", label: "Friend Referral" },
    { value: "ad", label: "Advertisement" },
    { value: "blog", label: "Blog or Article" },
    { value: "other", label: "Other" },
  ];

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="md">
        Create Your Account
      </Title>
      <Text size="sm" color="dimmed" mb="xl">
        Join our innovative network and unlock personalized experiences tailored
        to your interests
      </Text>
      <Box component="form" onSubmit={handleSubmit}>
        <Divider label="Account Information" labelPosition="center" mb="md" />

        <TextInput
          label="Username"
          placeholder="Choose a unique username"
          leftSection={<IconUser size={16} />}
          mb="md"
          error={form.errors.username}
          {...form.getInputProps("username")}
        />

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="First Name"
              placeholder="Your first name"
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

        <TextInput
          label="Email"
          placeholder="your@email.com"
          mb="md"
          error={form.errors.email}
          {...form.getInputProps("email")}
        />

        <TextInput
          label="Phone Number"
          placeholder="+1234567890"
          leftSection={<IconPhone size={16} />}
          mb="md"
          error={form.errors.phoneNumber}
          {...form.getInputProps("phoneNumber")}
        />

        <Grid>
          <Grid.Col span={6}>
            <PasswordInput
              label="Password"
              placeholder="Create a strong password"
              mb="md"
              error={form.errors.password}
              {...form.getInputProps("password")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              mb="md"
              error={form.errors.confirmPassword}
              {...form.getInputProps("confirmPassword")}
            />
          </Grid.Col>
        </Grid>

        <Divider
          label="Personal Details"
          labelPosition="center"
          mt="xl"
          mb="md"
        />
        <Grid>
          <Grid.Col span={6}>
            <Group>
              <IconCalendar size={16} />
              <Text> Select your birth date</Text>
            </Group>
            <DatePickerInput
              placeholder="Select your birth date"
              value={form.values.birthDate}
              onChange={(date) =>
                form.setFieldValue("birthDate", date as Date | null)
              }
              error={form.errors.birthDate}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Location"
              placeholder="City, Country"
              mb="md"
              error={form.errors.location}
              {...form.getInputProps("location")}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label="Occupation"
          placeholder="What do you do?"
          mb="md"
          error={form.errors.occupation}
          {...form.getInputProps("occupation")}
        />

        <Textarea
          label="Bio"
          placeholder="Tell us a bit about yourself"
          minRows={3}
          mb="md"
          error={form.errors.bio}
          {...form.getInputProps("bio")}
        />

        <MultiSelect
          label="Interests"
          placeholder="Select your interests"
          data={interestOptions}
          mb="md"
          error={form.errors.interests}
          {...form.getInputProps("interests")}
        />

        <Select
          label="How did you hear about us?"
          placeholder="Select an option"
          data={referralOptions}
          mb="xl"
          error={form.errors.referralSource}
          {...form.getInputProps("referralSource")}
        />

        <Checkbox
          label="I agree to the Terms of Service and Privacy Policy"
          mb="xl"
          error={form.errors.termsAccepted}
          {...form.getInputProps("termsAccepted", { type: "checkbox" })}
        />

        <Button
          type="submit"
          fullWidth
          size="md"
          mb="xl"
          disabled={!form.isValid}
        >
          Create Account
        </Button>
      </Box>
      <Center>
        <Anchor size="xs" ta="center" mt="md" href="/login">
          Already have an account? Log in
        </Anchor>
      </Center>
    </Container>
  );
}
