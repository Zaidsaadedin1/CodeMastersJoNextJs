import {
  Grid,
  TextInput,
  Button,
  Title,
  Card,
  Table,
  Badge,
  Textarea,
  TagsInput,
  Skeleton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { GetUserDto, UpdateUserDto } from "../../Apis/types/userDtos/userDtos";
import { DatePickerInput } from "@mantine/dates";
import { IconUser, IconPhone, IconCalendar } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// Dynamically load components that require client-side only features
const ClientOnlyDatePicker = dynamic(
  () => import("@mantine/dates").then((mod) => mod.DatePickerInput),
  {
    ssr: false,
    loading: () => <Skeleton height={36} />,
  }
);

function Profile({ user }: { user: GetUserDto }) {
  const { t, i18n } = useTranslation("profile");
  const router = useRouter();
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const [editable, setEditable] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure translations are consistent between server and client
  const title = t("title");
  const createAccount = t("create_account");

  useEffect(() => {
    setMounted(true);
  }, []);

  const schema = z.object({
    userName: z
      .string()
      .min(1, { message: t("validation.user_Name_required") }),
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
    bio: z.string().optional(),
    occupation: z.string().optional(),
    location: z.string().optional(),
    interests: z.array(z.string()).optional(),
    dateOfBirth: z
      .date({
        required_error: t("validation.birth_date_required"),
        invalid_type_error: t("validation.birth_date_required"),
      })
      .refine(
        (date) => {
          const today = new Date();
          const age = today.getFullYear() - date.getFullYear();
          const monthDiff = today.getMonth() - date.getMonth();
          const dayDiff = today.getDate() - date.getDate();
          return (
            age > 13 ||
            (age === 13 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
          );
        },
        { message: t("validation.age_minimum") }
      ),
  });

  const form = useForm({
    initialValues: {
      userName: user.userName,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      bio: user.bio || "",
      occupation: user.occupation || "",
      location: user.location || "",
      interests: user.interests || [],
      dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth) : null,
    },

    validate: (values) => {
      try {
        schema.parse(values);
        return {};
      } catch (error: any) {
        return error.formErrors.fieldErrors;
      }
    },

    validateInputOnBlur: true,
  });

  useEffect(() => {
    if (mounted) {
      form.setValues({
        userName: user.userName,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        bio: user.bio || "",
        occupation: user.occupation || "",
        location: user.location || "",
        interests: user.interests || [],
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth) : null,
      });
    }
  }, [user, mounted]);

  const handleSubmit = (values: UpdateUserDto) => {
    console.log("Submitting:", values);
    setEditable(false);
  };

  if (!mounted) return <div style={{ visibility: "hidden" }}>{title}</div>;

  return (
    <Grid p="md" dir={isRTL ? "rtl" : "ltr"}>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={2} mb="md">
            {title}
          </Title>

          <form
            onSubmit={form.onSubmit((values) => {
              if (values.dateOfBirth === null) {
                form.setFieldError(
                  "dateOfBirth",
                  t("validation.birth_date_required")
                );
                return;
              }

              const updateUserDto: UpdateUserDto = {
                ...values,
                dateOfBirth: new Date(values.dateOfBirth.toISOString()),
              };

              handleSubmit(updateUserDto);
            })}
          >
            {/* Read-only Fields */}
            <TextInput
              label={t("fields.username")}
              value={user.userName}
              leftSection={<IconUser size={16} />}
              mb="md"
            />

            <TextInput label={t("fields.email")} value={user.email} mb="md" />

            {/* Editable Fields */}
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label={t("fields.firstName")}
                  {...form.getInputProps("firstName")}
                  error={form.errors.firstName}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label={t("fields.lastName")}
                  {...form.getInputProps("lastName")}
                  error={form.errors.lastName}
                />
              </Grid.Col>
            </Grid>

            <ClientOnlyDatePicker
              label={t("fields.birthDate")}
              {...form.getInputProps("dateOfBirth")}
              leftSection={<IconCalendar size={16} />}
              mb="md"
              error={form.errors.dateOfBirth}
              valueFormat="YYYY-MM-DD"
            />

            <TextInput
              label={t("fields.phoneNumber")}
              leftSection={<IconPhone size={16} />}
              {...form.getInputProps("phoneNumber")}
              mt="md"
              error={form.errors.phoneNumber}
            />

            <Textarea
              label={t("fields.bio")}
              {...form.getInputProps("bio")}
              autosize
              minRows={2}
              mt="md"
            />

            <TextInput
              label={t("fields.occupation")}
              {...form.getInputProps("occupation")}
              mt="md"
            />

            <TextInput
              label={t("fields.location")}
              {...form.getInputProps("location")}
              mt="md"
            />

            <TagsInput
              label={t("fields.interests")}
              {...form.getInputProps("interests")}
              mt="md"
              placeholder={editable ? t("placeholders.interests") : undefined}
            />

            {editable ? (
              <Button type="submit" color="blue" mt="md">
                {t("buttons.save")}
              </Button>
            ) : (
              <Button color="gray" mt="md" onClick={() => setMounted(true)}>
                {t("buttons.edit")}
              </Button>
            )}
          </form>
        </Card>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={2} mb="md">
            {t("requests.title")}
          </Title>

          <Table.ScrollContainer minWidth={500}>
            <Table verticalSpacing="sm">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>{t("requests.headers.id")}</Table.Th>
                  <Table.Th>{t("requests.headers.status")}</Table.Th>
                  <Table.Th>{t("requests.headers.date")}</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>#12345</Table.Td>
                  <Table.Td>
                    <Badge color="blue">{t("requests.status.pending")}</Badge>
                  </Table.Td>
                  <Table.Td>2024-03-15</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Card>
      </Grid.Col>
    </Grid>
  );
}

export default Profile;
