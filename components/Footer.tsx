import Link from "next/link";
import { Logo } from "./Logo";
import { hours, locations, nav, phoneDisplay, phoneHref } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-teal-deep pb-24 text-cream md:pb-0">
      <div className="story-ribbon" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
            Prywatne przedszkole i żłobek w Skawinie. Od 2009 roku. Największą
            wartością jest szczęście małego człowieka.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sun">
            Strony
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {locations.map((place) => (
          <div key={place.id}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sun">
              {place.place}
            </p>
            <p className="mt-4 font-display text-lg">{place.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">
              {place.street}
              <br />
              {place.city}
            </p>
            <p className="mt-3 text-sm text-cream/80">{hours}</p>
            <a href={phoneHref} className="mt-2 block font-semibold text-white">
              {phoneDisplay}
            </a>
            <a href={`mailto:${place.email}`} className="mt-1 block text-sm text-cream/80 hover:text-white">
              {place.email}
            </a>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bajkowa Kraina. Przedszkole i Żłobek.</p>
          <Link href="/polityka-prywatnosci" className="hover:text-white">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
