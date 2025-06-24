import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconHome } from "@tabler/icons-react";

const ExceptionPage = () => {
  return (
    <section>
      <h2>حدث خطأ غير متوقع | 500</h2>
      <Link href="/">
        <Button variant="subtle">
          <IconHome />
          الصفحة الرئيسية
        </Button>
      </Link>
    </section>
  );
};

// TODO: locals so that navbar localization works (https://nextjs.org/docs/messages/404-get-initial-props)

export default ExceptionPage;
