import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bajkowakraina.org";
  const paths = ["/", "/o-nas/", "/oferta/", "/kontakt/", "/polityka-prywatnosci/"];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-09-28"),
  }));
}
