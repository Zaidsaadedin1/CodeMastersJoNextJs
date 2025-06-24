import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconHome } from "@tabler/icons-react";

const NotFound = () => {
  return (
    <section>
      <h2>صفحة غير موجودة | 404</h2>
      <Link href="/">
        <Button variant="subtle">
          <IconHome />
          الصفحة الرئيسية
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
