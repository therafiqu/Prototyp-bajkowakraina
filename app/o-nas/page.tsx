import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Bajkowa Kraina od 2009 roku — pierwsze niepubliczne przedszkole w Skawinie i żłobek otwarty w 2015. Bezpieczeństwo, małe grupy i nauka przez zabawę.",
};

const milestones = [
  {
    year: "2009",
    title: "Powstaje przedszkole",
    text: "Jako pierwsze niepubliczne przedszkole w Skawinie, z myślą o dzieciach w wieku 3–6 lat.",
  },
  {
    year: "2015",
    title: "Otwieramy żłobek",
    text: "W czerwcu ruszamy z Klubem Malucha przy ul. Radziszowskiej, żeby rodzice mogli wrócić do pracy spokojniej.",
  },
  {
    year: "2026",
    title: "Dwie sale, jeden telefon",
    text: "Odznaki Zaufany Żłobek i Przyjazne Rodzinie. Zapisy nadal prowadzi dyrekcja pod jednym numerem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O placówce"
        title="Zadowolenie dzieci to nasz priorytet"
        lead="Bajkowa Kraina powstała w 2009 roku. Chcieliśmy wynieść edukację najmłodszych wyżej — bez zabierania dzieciom radości. W 2015 doszedł żłobek, żeby ta droga mogła zacząć się wcześniej."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="scroll-rise space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Największą wartością jest szczęście małego człowieka. Rozwijamy jego potencjał przez opiekę, poczucie bezpieczeństwa i codzienną stymulację: zabawę, która uczy, i naukę, która nadal jest zabawą.
          </p>
          <p>
            Pobyt u nas ma kojarzyć się z odkrywaniem świata w towarzystwie przyjaciół. Korzystamy z twórczych, aktywizujących metod, żeby dziecko chciało uczyć się dalej — w szkole, nie mimo szkoły.
          </p>
          <p>
            Kadra jest z dziećmi także przy plastyce, tańcu i wyjściach. Wspólne doświadczenia budują zaufanie szybciej niż regulamin powieszony w szatni.
          </p>
          <p className="text-ink">
            Przedszkole to początek drogi. Jesteśmy po to, żeby ten początek był przygodą pełną spokoju, ciekawości i bliskości.
          </p>
        </div>
        <div className="scroll-rise relative min-h-80 overflow-hidden rounded-[28px]">
          <div className="scroll-zoom absolute inset-[-10%]">
          <Image
            src="/media/gordonki.jpg"
            alt="Dzieci z żłobka podczas wspólnych zajęć na kolorowej chuście"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <ol className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-3 md:py-20">
          {milestones.map((item, index) => (
            <li key={item.year} className="scroll-rise">
              <div className="hover-lift h-full rounded-[24px] border border-line bg-paper p-6">
              <p className={`font-display text-3xl ${["text-coral-deep", "text-sky-deep", "text-mint-deep"][index]}`}>
                {item.year}
              </p>
              <h2 className="mt-3 text-2xl">{item.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="scroll-rise text-3xl md:text-4xl">Gdzie nas znajdziesz</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {locations.map((place) => (
            <article key={place.id} className={`scroll-rise rounded-[24px] p-6 ${place.id === "przedszkole" ? "bg-sky-soft" : "bg-peach"}`}>
              <h3 className="text-2xl">{place.name}</h3>
              <p className="mt-2 text-muted">{place.ages}</p>
              <p className="mt-4 font-semibold">
                {place.street}
                <br />
                {place.city}
              </p>
            </article>
          ))}
        </div>
        <div className="scroll-rise mt-10 rounded-[28px] border border-line bg-paper p-6 md:p-8">
          <h2 className="text-2xl">Bezpieczeństwo, które da się sprawdzić</h2>
          <ul className="mt-4 grid gap-3 text-muted md:grid-cols-2">
            <li>Aktualne odbiory Sanepidu i Państwowej Straży Pożarnej w obu oddziałach.</li>
            <li>Standardy ochrony małoletnich — pełny dokument udostępniamy rodzicom w placówce.</li>
            <li>Odznaka Zaufany Żłobek 2026 i Przyjazne Rodzinie.</li>
            <li>Profil przedszkola w serwisie Super Przedszkole.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <a className="text-teal-deep" href="https://przedszkole-talentow.pl/laureaci/zlobki/zaufany-zlobek" target="_blank" rel="noreferrer">
              Zaufany Żłobek
            </a>
            <a className="text-teal-deep" href="https://przedszkole-talentow.pl/laureaci/przedszkola/przyjazne-rodzinie" target="_blank" rel="noreferrer">
              Przyjazne Rodzinie
            </a>
            <a className="text-teal-deep" href="https://super-przedszkole.pl/przedszkole/120297-prywatne-przedszkole-bajkowa-kraina-32-050-skawina-ul-29-listopada-12d-1" target="_blank" rel="noreferrer">
              Karta w Super Przedszkole
            </a>
          </div>
        </div>
        <div className="mt-8">
          <ButtonLink href="/rekrutacja">Zapytaj o miejsce</ButtonLink>
        </div>
      </section>
    </>
  );
}
