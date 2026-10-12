import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { hours, included, locations, preschoolExtras } from "@/lib/content";

export const metadata: Metadata = {
  title: "Oferta",
  description:
    "Porównanie przedszkola i żłobka Bajkowa Kraina: godziny 7:00–17:00, angielski, pięć posiłków i zajęcia dodatkowe. Wpisowe i czesne podajemy telefonicznie.",
};

const rows = [
  ["Wiek", "ok. 1–3 lat", "2,5-6 lat"],
  ["Adres", locations[1].street, locations[0].street],
  ["Godziny", hours, hours],
  ["Angielski", "1× w tygodniu, wrzesień–czerwiec", "1× w tygodniu, wrzesień–czerwiec"],
  ["Posiłki", "5 dziennie, catering", "5 dziennie, catering"],
  ["Muzyka", "Gordonki i zabawy umuzykalniające", "Zabawy muzyczno-ruchowe, tańce"],
  ["Na zewnątrz", "Codzienne wyjścia, własny plac zabaw", "Codzienne wyjścia i wycieczki"],
];

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta"
        title={
          <>
            Dwie grupy wiekowe.
            <br />
            <span className="md:whitespace-nowrap">Ten sam spokojny standard dnia.</span>
          </>
        }
        lead="Opiekujemy się dziećmi od około 1. do 6. roku życia. Poniżej widać, co jest wspólne, a czym przedszkole różni się od żłobka — zanim zadzwonisz."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/kontakt">Zapytaj o miejsce</ButtonLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <article id="zlobek" className="scroll-rise scroll-mt-28 rounded-[28px] bg-peach p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-deep">Żłobek</p>
            <h2 className="mt-2 text-3xl">1-3 lat</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {locations[1].street}, {locations[1].city}. Bliskość, powtarzalny rytm i dużo swobodnej zabawy. Dzieci, które zostają z nami dłużej, przechodzą potem do naszego przedszkola.
            </p>
          </article>
          <article id="przedszkole" className="scroll-rise scroll-mt-28 rounded-[28px] bg-sky-soft p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-deep">Przedszkole</p>
            <h2 className="mt-2 text-3xl">2,5-6 lat</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {locations[0].street}, {locations[0].city}. Przygotowanie do szkoły według podstawy programowej, bez gaszenia ciekawości. Dochodzą zajęcia nadprogramowe raz w tygodniu.
            </p>
          </article>
        </div>

        <div className="scroll-rise mt-8 overflow-x-auto rounded-[28px] border border-line bg-paper">
          <table className="w-full min-w-[640px] text-left text-sm md:text-base">
            <caption className="sr-only">Porównanie żłobka i przedszkola</caption>
            <thead className="bg-cream-deep text-ink">
              <tr>
                <th className="px-4 py-4 font-semibold"> </th>
                <th className="px-4 py-4 font-semibold">Żłobek</th>
                <th className="px-4 py-4 font-semibold">Przedszkole</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-t border-line">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className={`px-4 py-4 align-top ${index === 0 ? "font-semibold" : "text-muted"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="scroll-rise text-3xl md:text-4xl">W ramach czesnego</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {included.map((item, index) => (
              <li key={item.title} className="scroll-rise">
                <div
                  className={`hover-lift h-full rounded-3xl p-5 ${["bg-peach", "bg-sky-soft", "bg-butter-soft", "bg-mint-soft", "bg-rose-soft", "bg-lavender"][index % 6]}`}
                >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="scroll-rise mt-8 rounded-[28px] bg-butter-soft p-6">
            <h3 className="text-2xl">Zajęcia nadprogramowe w przedszkolu</h3>
            <p className="mt-2 max-w-3xl text-muted">
              Raz w tygodniu: {preschoolExtras.join(", ").toLowerCase()}. To oferta opisana osobno od czesnego. Przy zapisie mówimy wprost, które zajęcia są w opłacie, a które doliczamy.
            </p>
            <p className="mt-3 text-muted">
              Dodatkowo płatne bywają wyjścia do kina i teatru, mikołajki oraz wycieczki.
            </p>
          </div>
        </div>
      </section>

      <section id="cennik" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-16 md:py-24">
        <article className="scroll-rise rounded-[28px] bg-teal-deep p-7 text-cream md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sun">Opłaty</p>
          <h2 className="mt-3 font-display text-3xl leading-snug md:text-4xl">
            Wpisowe i czesne podajemy podczas rozmowy telefonicznej.
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-cream/80">
            Kwoty zależą od placówki. Przy telefonie usłyszysz aktualne wpisowe i czesne oraz co wchodzi w&nbsp;opłatę.
          </p>
        </article>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/kontakt">Chcę poznać czesne i miejsce</ButtonLink>
        </div>
      </section>
    </>
  );
}
