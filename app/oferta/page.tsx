import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { hours, included, locations, phoneDisplay, phoneHref, preschoolExtras } from "@/lib/content";

export const metadata: Metadata = {
  title: "Oferta",
  description:
    "Porównanie przedszkola i żłobka Bajkowa Kraina: godziny 7:00–17:00, angielski, trzy posiłki, wpisowe 500 zł i zajęcia dodatkowe.",
};

const rows = [
  ["Wiek", "ok. 1–3 lat", "3–6 lat"],
  ["Adres", locations[1].street, locations[0].street],
  ["Godziny", hours, hours],
  ["Angielski", "1× w tygodniu, wrzesień–czerwiec", "1× w tygodniu, wrzesień–czerwiec"],
  ["Posiłki", "3 dziennie, catering", "3 dziennie, catering"],
  ["Muzyka", "Gordonki i zabawy umuzykalniające", "Zabawy muzyczno-ruchowe, tańce"],
  ["Na dworze", "Własny plac zabaw", "Zabawy na świeżym powietrzu i wycieczki"],
];

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta"
        title="Dwie grupy wiekowe. Ten sam spokojny standard dnia."
        lead="Opiekujemy się dziećmi od około 1. do 6. roku życia. Poniżej widać, co jest wspólne, a czym przedszkole różni się od żłobka — zanim zadzwonisz."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#cennik">Zobacz opłaty</ButtonLink>
          <ButtonLink href="/rekrutacja" variant="secondary">
            Zapisz dziecko
          </ButtonLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <article id="zlobek" className="scroll-mt-28 rounded-[28px] bg-peach p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-deep">Żłobek</p>
            <h2 className="mt-2 text-3xl">Klub Malucha</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {locations[1].street}, {locations[1].city}. Bliskość, powtarzalny rytm i dużo swobodnej zabawy. Dzieci, które zostają z nami dłużej, przechodzą potem do naszego przedszkola.
            </p>
          </article>
          <article id="przedszkole" className="scroll-mt-28 rounded-[28px] bg-sky-soft p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-deep">Przedszkole</p>
            <h2 className="mt-2 text-3xl">3–6 lat</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {locations[0].street}, {locations[0].city}. Przygotowanie do szkoły według podstawy programowej, bez gaszenia ciekawości. Dochodzą zajęcia nadprogramowe raz w tygodniu.
            </p>
          </article>
        </div>

        <div className="mt-8 overflow-x-auto rounded-[28px] border border-line bg-paper">
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
          <h2 className="text-3xl md:text-4xl">W ramach czesnego</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {included.map((item, index) => (
              <li
                key={item.title}
                className={`hover-lift rounded-3xl p-5 ${["bg-peach", "bg-sky-soft", "bg-butter-soft", "bg-mint-soft", "bg-rose-soft", "bg-lavender"][index % 6]}`}
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-[28px] bg-butter-soft p-6">
            <h3 className="text-2xl">Zajęcia nadprogramowe w przedszkolu</h3>
            <p className="mt-2 max-w-3xl text-muted">
              Raz w tygodniu: {preschoolExtras.join(", ").toLowerCase()}. To oferta opisana osobno od czesnego. Przy zapisie mówimy wprost, które zajęcia są w opłacie, a które doliczamy.
            </p>
            <p className="mt-3 text-muted">
              Dodatkowo płatne bywają wyjścia do kina i teatru, mikołajki oraz wycieczki. Inne zajęcia możemy uruchomić przy minimum 10 chętnych.
            </p>
          </div>
        </div>
      </section>

      <section id="cennik" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[28px] bg-teal-deep p-7 text-cream">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sun">Wpisowe</p>
            <p className="mt-3 font-display text-5xl">500 zł</p>
            <p className="mt-3 leading-relaxed text-cream/80">
              Jednorazowo, przy zapisie, bezzwrotnie. W tej kwocie jest miejsce na cały rok, przybory plastyczno-techniczne, ręczniczki, kubeczki i podstawowe środki higieniczne.
            </p>
          </article>
          <article className="rounded-[28px] border border-line bg-paper p-7">
            <h2 className="text-3xl">Czesne mówimy od razu, nie chowamy go w regulaminie.</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Na dotychczasowej stronie nie ma jednej publicznej kwoty miesięcznej, bo zależy od placówki. Podajemy ją w rozmowie, zanim poprosimy o decyzję. Opłatę wnosi się do 10. dnia każdego miesiąca za miesiąc ubiegły, według kwitka od pracownika.
            </p>
            <p className="mt-3 text-sm text-muted">
              W tytule przelewu: imię i nazwisko dziecka oraz miesiąc, za który płacicie.
            </p>
            <a href={phoneHref} className="mt-6 inline-flex font-display text-2xl text-teal-deep">
              {phoneDisplay}
            </a>
          </article>
        </div>
        <div className="mt-8">
          <ButtonLink href="/rekrutacja">Chcę poznać czesne i miejsce</ButtonLink>
        </div>
      </section>
    </>
  );
}
