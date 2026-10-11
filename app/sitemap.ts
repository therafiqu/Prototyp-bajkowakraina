import type { MetadataRoute } from "next";
import { posts } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bajkowakraina.org";
  const paths = ["/", "/o-nas/", "/oferta/", "/aktualnosci/", "/kontakt/", "/polityka-prywatnosci/"];
  return [
    ...paths.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date("2026-09-28"),
    })),
    ...posts.map((post) => ({
      url: `${base}/aktualnosci/${post.slug}/`,
      lastModified: new Date(post.date),
    })),
  ];
}
