import { Menu, Button } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import { useRouter } from "next/router";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, pathname, asPath } = router;

  const changeLocale = (newLocale: string) => {
    router.push(pathname, asPath, { locale: newLocale });
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="light">
          <IconLanguage size={16} />
          {languages.find((lang) => lang.code === locale)?.label || "Language"}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Select language</Menu.Label>
        {languages.map((lang) => (
          <Menu.Item key={lang.code} onClick={() => changeLocale(lang.code)}>
            {lang.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
