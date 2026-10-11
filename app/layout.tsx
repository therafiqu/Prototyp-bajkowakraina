import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileDock } from "@/components/MobileDock";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bajkowakraina.org"),
  title: {
    default: "Bajkowa Kraina · przedszkole i żłobek w Skawinie",
    template: "%s · Bajkowa Kraina",
  },
  description:
    "Prywatne przedszkole i żłobek w Skawinie. Opieka 7:00–17:00, kameralne grupy i rekrutacja przez cały rok. Zadzwoń: 510 200 558.",
  openGraph: {
    locale: "pl_PL",
    siteName: "Bajkowa Kraina",
    title: "Bajkowa Kraina · przedszkole i żłobek w Skawinie",
    description:
      "Bezpieczna, ciepła codzienność dla dzieci w wieku 1–6 lat. Dwie placówki w Skawinie.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Preschool",
      name: "Przedszkole Bajkowa Kraina",
      telephone: "+48510200558",
      email: "przedszkole.radziszowska@op.pl",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. 29 Listopada 12D/1",
        postalCode: "32-050",
        addressLocality: "Skawina",
        addressCountry: "PL",
      },
      openingHours: "Mo-Fr 07:00-17:00",
    },
    {
      "@type": "ChildCare",
      name: "Żłobek Bajkowa Kraina",
      telephone: "+48510200558",
      email: "klub.radziszowska@op.pl",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Radziszowska 22/1",
        postalCode: "32-050",
        addressLocality: "Skawina",
        addressCountry: "PL",
      },
      openingHours: "Mo-Fr 07:00-17:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body className="pb-24 antialiased md:pb-0">
        <a className="skip" href="#tresc">
          Przejdź do treści
        </a>
        <Header />
        <main id="tresc">{children}</main>
        <Footer />
        <CookieBanner />
        <MobileDock />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
