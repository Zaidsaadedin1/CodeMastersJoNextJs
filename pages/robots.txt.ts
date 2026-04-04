import type { GetServerSideProps } from "next";
import { SITE_URL } from "../app/utils/seo";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write(`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);
  res.end();

  return {
    props: {},
  };
};

export default function RobotsTxt() {
  return null;
}
