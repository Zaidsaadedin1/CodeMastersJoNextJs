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
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { useState } from "react";
import { GetUserDto, UpdateUserDto } from "../../types/userDtos/userDtos";
import { DatePickerInput } from "@mantine/dates";
import { IconUser, IconPhone, IconCalendar } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Profile({ user }: { user: GetUserDto }) {
  const { t, i18n } = useTranslation("profile");
  const router = useRouter();
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const [editable, setEditable] = useState(false);

  const schema = z.object({
    firstName: z.string().min(1, t("validation.firstName_required")),
    lastName: z.string().min(1, t("validation.lastName_required")),
    phoneNumber: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, t("validation.phone_invalid")),
    bio: z.string().optional(),
    occupation: z.string().optional(),
    location: z.string().optional(),
    interests: z.array(z.string()).optional(),
  });

  const form = useForm<UpdateUserDto>({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      bio: user.bio || "",
      occupation: user.occupation || "",
      location: user.location || "",
      interests: user.interests || [],
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

  const handleSubmit = (values: UpdateUserDto) => {
    console.log("Submitting:", values);
    setEditable(false);
  };

  return (
    <Grid p="md" dir={isRTL ? "rtl" : "ltr"}>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={2} mb="md">
            {t("title")}
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            {/* Read-only Fields */}
            <TextInput
              label={t("fields.username")}
              value={user.username}
              leftSection={<IconUser size={16} />}
              readOnly
              mb="md"
            />

            <TextInput
              label={t("fields.email")}
              value={user.email}
              readOnly
              mb="md"
            />

            <DatePickerInput
              label={t("fields.birthDate")}
              value={new Date(user.birthDate)}
              readOnly
              leftSection={<IconCalendar size={16} />}
              mb="md"
            />

            {/* Editable Fields */}
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label={t("fields.firstName")}
                  {...form.getInputProps("firstName")}
                  readOnly={!editable}
                  error={form.errors.firstName}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label={t("fields.lastName")}
                  {...form.getInputProps("lastName")}
                  readOnly={!editable}
                  error={form.errors.lastName}
                />
              </Grid.Col>
            </Grid>

            <TextInput
              label={t("fields.phoneNumber")}
              leftSection={<IconPhone size={16} />}
              {...form.getInputProps("phoneNumber")}
              readOnly={!editable}
              mt="md"
              error={form.errors.phoneNumber}
            />

            <Textarea
              label={t("fields.bio")}
              {...form.getInputProps("bio")}
              readOnly={!editable}
              autosize
              minRows={2}
              mt="md"
            />

            <TextInput
              label={t("fields.occupation")}
              {...form.getInputProps("occupation")}
              readOnly={!editable}
              mt="md"
            />

            <TextInput
              label={t("fields.location")}
              {...form.getInputProps("location")}
              readOnly={!editable}
              mt="md"
            />

            <TagsInput
              label={t("fields.interests")}
              {...form.getInputProps("interests")}
              readOnly={!editable}
              mt="md"
              placeholder={editable ? t("placeholders.interests") : undefined}
            />

            {editable ? (
              <Button type="submit" color="blue" mt="md">
                {t("buttons.save")}
              </Button>
            ) : (
              <Button color="gray" mt="md" onClick={() => setEditable(true)}>
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
