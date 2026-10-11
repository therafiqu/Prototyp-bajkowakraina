import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { documents, faqs, hours, locations, phoneDisplay, phoneHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt i rekrutacja do Bajkowej Krainy w Skawinie. Przedszkole ul. 29 Listopada 12D/1, żłobek ul. Radziszowska 22/1, tel. 510 200 558.",
};

const steps = [
  {
    n: "01",
    title: "Telefon",
    text: "Mówisz, ile dziecko ma lat i od kiedy szukasz miejsca. Sprawdzamy oba oddziały.",
  },
  {
    n: "02",
    title: "Karta zgłoszenia",
    text: "Wypełniasz kartę i zostawiasz ją u pracownika przedszkola albo żłobka. Możesz zacząć od odwiedzin.",
  },
  {
    n: "03",
    title: "Umowa i wpisowe",
    text: "Podpisujemy umowę. Wpisowe i czesne podajemy podczas rozmowy telefonicznej. Od tej chwili miejsce jest Wasze na cały rok.",
  },
  {
    n: "04",
    title: "Adaptacja",
    text: "Wejście w nowy rytm ustalamy z Wami. We wrześniu i w trakcie roku — zawsze indywidualnie.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Dwa adresy.
            <br />
            Jeden numer do zapisów.
          </>
        }
        lead="Dyrekcja odbiera pod 510 200 558 — zapisy, rekrutacja i pytania o czesne. Każda placówka ma też własny e-mail."
      >
        <a
          href={phoneHref}
          className="hover-lift inline-flex min-w-[11.5rem] items-center justify-center rounded-full bg-teal-deep px-7 py-3 text-[1.05rem] font-semibold text-white shadow-[0_12px_30px_-16px_rgba(14,74,69,0.85)] hover:bg-teal"
        >
          {phoneDisplay}
        </a>
      </PageHero>
      <section className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 py-14 md:grid-cols-2">
        {locations.map((place) => (
          <article
            key={place.id}
            className="scroll-rise flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-paper"
          >
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
              className="mt-auto h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        ))}
      </section>

      <section id="rekrutacja" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-14 lg:py-20">
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.n} className="scroll-rise">
              <div className="hover-lift grid h-full grid-cols-[auto_1fr] gap-4 rounded-[24px] border border-line bg-paper p-5">
                <span className={`font-display text-2xl ${["text-coral", "text-sky-deep", "text-mint-deep", "text-berry"][index]}`}>
                  {step.n}
                </span>
                <div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="scroll-rise mt-8 rounded-[28px] border border-line bg-paper p-6">
          <h3 className="text-2xl">Co warto wiedzieć przed podpisem</h3>
          <ul className="mt-4 space-y-3 leading-relaxed text-muted">
            <li>Wpisowe i czesne podajemy podczas rozmowy telefonicznej.</li>
            <li>Czesne obejmuje opiekę 7:00–17:00, zajęcia zgodne z podstawą programową, plastykę, angielski raz w tygodniu i pomoce.</li>
          </ul>
          <ul className="mt-5 space-y-3">
            {documents.map((doc) => (
              <li key={doc.href}>
                <a href={doc.href} className="font-semibold text-teal-deep" target="_blank" rel="noreferrer">
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="scroll-rise mt-8">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="cursor-pointer py-4 text-lg font-semibold">{item.q}</summary>
              <p className="pb-4 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 lg:pb-20">
        <div className="scroll-rise relative overflow-hidden rounded-[32px] bg-gradient-to-br from-peach via-butter-soft to-sky-soft px-6 py-10 md:px-12 md:py-14">
          <span className="float-slow pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-rose/40 blur-2xl" aria-hidden />
          <span className="float-mid pointer-events-none absolute bottom-0 left-10 h-20 w-20 rounded-full bg-mint/30 blur-2xl" aria-hidden />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h2 className="text-[1.3125rem] text-ink md:text-[2.1rem]">Prosimy o wystawienie opinii :)</h2>
            </div>
            <div className="flex flex-col gap-3">
              {locations.map((place, index) => (
                <ButtonLink
                  key={place.id}
                  href={place.reviewHref}
                  variant={index === 0 ? "primary" : "light"}
                >
                  Opinia · {place.name}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
