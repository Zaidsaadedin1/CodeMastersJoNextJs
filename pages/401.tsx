import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconHome } from "@tabler/icons-react";

const UnAuthorized = () => {
  return (
    <section>
      <h2> غير مخول | 401</h2>
      <Link href="/login">
        <Button variant="subtle">
          <IconHome />
          تسجيل دخول
        </Button>
      </Link>
    </section>
  );
};

export default UnAuthorized;
