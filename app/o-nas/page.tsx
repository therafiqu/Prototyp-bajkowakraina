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
    text: "Jako pierwsze niepubliczne przedszkole w Skawinie, z myślą o dzieciach w wieku 2,5-6 lat.",
  },
  {
    year: "2015",
    title: "Otwieramy żłobek",
    text: "W czerwcu ruszamy z żłobkiem przy ul. Radziszowskiej, żeby rodzice mogli wrócić do pracy spokojniej.",
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
        title={
          <span className="tracking-normal">
            Poznaj nasz zespół{"\u00A0"}❤️
            <br />
            <span className="md:whitespace-nowrap">– kadra przedszkola i żłobka</span>
          </span>
        }
        lead="Z sercem dla dzieci, z troską o ich rozwój i poczucie bezpieczeństwa."
      >
        {/* Match Kontakt / Oferta hero height (CTA row). */}
        <div className="h-12" aria-hidden />
      </PageHero>
      <section className="mx-auto max-w-3xl px-5 pt-16 text-center md:pt-24">
        <p className="scroll-rise text-lg leading-relaxed text-muted md:text-xl">
          Naszą największą wartością są ludzie – pełni ciepła, zaangażowania i pasji do pracy z najmłodszymi. Tworzymy zespół, dla którego opieka nad dziećmi to nie tylko praca, ale przede wszystkim misja, odpowiedzialność i codzienna radość wspierania ich rozwoju.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div className="scroll-rise space-y-8 text-lg leading-relaxed text-muted">
          <h2 className="text-2xl text-ink md:text-3xl">Wykwalifikowana kadra przedszkola</h2>
          <p>
            W naszym przedszkolu dzieci otaczają opieką wykwalifikowani nauczyciele wychowania przedszkolnego, którzy posiadają wieloletnie doświadczenie i z zaangażowaniem wspierają rozwój swoich podopiecznych. Dbamy o to, aby każdy dzień był okazją do nauki, zabawy i odkrywania świata.
          </p>
          <p>
            Nasi nauczyciele rozwijają dziecięcą ciekawość, wspierają samodzielność, kreatywność oraz umiejętności społeczne. Indywidualne podejście do każdego dziecka pozwala nam dostrzegać jego potrzeby, zainteresowania i wyjątkowe możliwości.
          </p>
        </div>
        <div className="scroll-rise relative min-h-80 overflow-hidden rounded-[28px]">
          <div className="scroll-zoom absolute inset-[-10%]">
            <Image
              src="/media/rysunki.jpg"
              alt="Kolorowe dziecięce rysunki i prace plastyczne"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div className="scroll-rise space-y-8 text-lg leading-relaxed text-muted">
          <h2 className="text-2xl text-ink md:text-3xl">Troskliwe opiekunki w żłobku</h2>
          <p>
            W żłobku nad najmłodszymi dziećmi czuwają troskliwe opiekunki, które posiadają odpowiednie przygotowanie do opieki nad dziećmi do lat 3. Zapewniamy maluszkom czułość, bliskość oraz warunki sprzyjające bezpiecznemu i harmonijnemu rozwojowi.
          </p>
          <p>
            Nasze opiekunki stale poszerzają swoją wiedzę i umiejętności poprzez szkolenia, między innymi z zakresu pierwszej pomocy. Każdego dnia dbają o dobre samopoczucie dzieci, ich potrzeby emocjonalne oraz poczucie bezpieczeństwa. Wiemy, jak ważne są pierwsze doświadczenia, dlatego stawiamy na cierpliwość, uważność i indywidualne podejście.
          </p>
        </div>
        <div className="scroll-rise relative min-h-80 overflow-hidden rounded-[28px]">
          <div className="scroll-zoom absolute inset-[-10%]">
            <Image
              src="/media/motylek.jpg"
              alt="Dziecko koloruje motyla kredką przy stoliku"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 pb-16 md:grid-cols-[1.1fr_0.9fr] md:py-16 md:pb-24">
        <div className="scroll-rise space-y-8 text-lg leading-relaxed text-muted">
          <h2 className="text-2xl text-ink md:text-3xl">Bezpieczne przedszkole i żłobek – miejsce pełne ciepła</h2>
          <p>
            Wierzymy, że najlepszy rozwój zaczyna się od poczucia bezpieczeństwa, akceptacji i bliskości. Dlatego tworzymy miejsce, w którym każde dziecko jest ważne, zauważane i otaczane troską.
          </p>
          <p>
            Chcemy, aby rodzice wybierający nasze przedszkole lub żłobek mieli pewność, że powierzają swoje pociechy osobom, które podchodzą do swojej pracy z sercem i odpowiedzialnością.
          </p>
          <p className="text-ink">
            Bo szczęśliwe dziecko to dziecko, które czuje się bezpieczne, akceptowane i kochane.{"\u00A0"}❤️
          </p>
        </div>
        <div className="scroll-rise relative min-h-80 overflow-hidden rounded-[28px]">
          <div className="scroll-zoom absolute inset-[-10%]">
            <Image
              src="/media/kalosze.jpg"
              alt="Dzieci w błotnistych kaloszach po zabawie na dworze"
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
          <ul className="mt-5 max-w-2xl list-disc space-y-2.5 pl-5 leading-relaxed text-muted">
            <li>Aktualne odbiory Sanepidu i Państwowej Straży Pożarnej w obu oddziałach.</li>
            <li>Standardy ochrony małoletnich — pełny dokument udostępniamy rodzicom w placówce.</li>
            <li>Odznaka Zaufany Żłobek 2026 i Przyjazne Rodzinie.</li>
            <li>Profil przedszkola w serwisie Super Przedszkole.</li>
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
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
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/kontakt">Zapytaj o miejsce</ButtonLink>
        </div>
      </section>
    </>
  );
}
