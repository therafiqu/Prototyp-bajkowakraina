import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { hours, locations, phoneDisplay, phoneHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt do Bajkowej Krainy w Skawinie. Przedszkole ul. 29 Listopada 12D/1, żłobek ul. Radziszowska 22/1, tel. 510 200 558.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Dwa adresy. Jeden numer do zapisów."
        lead="Dyrekcja odbiera pod 510 200 558 — zapisy, rekrutacja i pytania o czesne. Każda placówka ma też własny e-mail."
      >
        <a href={phoneHref} className="font-display text-3xl text-teal-deep">
          {phoneDisplay}
        </a>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {locations.map((place) => (
            <article key={place.id} className="overflow-hidden rounded-[28px] border border-line bg-paper">
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">{place.place}</p>
                <h2 className="mt-1 text-2xl">{place.name}</h2>
                <p className="mt-3 text-lg">
                  {place.street}
                  <br />
                  {place.city}
                </p>
                <p className="mt-2 text-muted">{hours}</p>
                <div className="mt-4 flex flex-col gap-1 text-sm font-semibold">
                  <a href={phoneHref} className="text-teal-deep">
                    {phoneDisplay}
                  </a>
                  <a href={`mailto:${place.email}`} className="text-teal-deep">
                    {place.email}
                  </a>
                  <a href={place.mapsHref} target="_blank" rel="noreferrer" className="text-ink">
                    Otwórz w mapach
                  </a>
                  <a href={place.facebook} target="_blank" rel="noreferrer" className="text-ink">
                    {place.facebookLabel}
                  </a>
                </div>
              </div>
              <iframe
                title={`Mapa: ${place.name}`}
                src={place.mapEmbed}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          ))}
        </div>
        <LeadForm intent="kontakt" />
      </section>
    </>
  );
}
