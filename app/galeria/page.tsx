import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { locations, posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Zdjęcia z przedszkola i żłobka Bajkowa Kraina w Skawinie: zajęcia, plac zabaw, wycieczki i codzienna zabawa.",
};

export default function GalleryPage() {
  const wide = new Set(["pociag-w-naszym-zlobku", "wakacyjny-teatr", "pozegnanie-starszakow", "wycieczka-hucisko"]);
  const items = posts.map((post) => ({
    src: post.image,
    alt: post.imageAlt,
    place: post.place,
    caption: post.title,
    tall: !wide.has(post.slug),
  }));

  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="Prawdziwe dni, nie pozowane uśmiechy z banku zdjęć."
        lead="Kadry z kroniki placówki: Dzień Kropki, dworzec, gordonki, teatr i plac zabaw. Wirtualne spacery po salach są pod zdjęciami."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <GalleryGrid items={items} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {locations.map((place) => (
            <a
              key={place.id}
              href={place.tour}
              target="_blank"
              rel="noreferrer"
              className={`hover-lift rounded-[24px] p-6 ${place.id === "przedszkole" ? "bg-sky-soft" : "bg-peach"}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">Wirtualny spacer</p>
              <p className="mt-2 text-2xl font-semibold">{place.name}</p>
              <p className="mt-1 text-muted">{place.street}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
