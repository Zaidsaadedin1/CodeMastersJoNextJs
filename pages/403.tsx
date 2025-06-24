import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconHome } from "@tabler/icons-react";

const Forbidden = () => {
  return (
    <section>
      <h2> غير مخول | 403</h2>
      <Link href="/">
        <Button variant="subtle">
          <IconHome /> الصفحة الرئيسية
        </Button>
      </Link>
    </section>
  );
};

export default Forbidden;
