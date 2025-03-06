import { Button, Group, ActionIcon, Menu, Text } from "@mantine/core";
import { IconLanguage, IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale)?.label || "English";

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="light">
          <IconLanguage size={16} />
          {currentLanguage}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Select language</Menu.Label>
        {languages.map((lang) => (
          <Menu.Item key={lang.code} onClick={() => changeLanguage(lang.code)}>
            {lang.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
