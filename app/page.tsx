import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { HomeHero } from "@/components/HomeHero";
import {
  faqs,
  hours,
  included,
  locations,
  phoneDisplay,
  phoneHref,
} from "@/lib/content";

const stats = [
  { value: "od 2009", label: "pierwsze niepubliczne przedszkole w Skawinie", tone: "text-teal-deep" },
  { value: "2", label: "placówki: przedszkole i żłobek", tone: "text-coral-deep" },
  { value: "7–17", label: "opieka przez dziesięć godzin", tone: "text-sky-deep" },
  { value: "5", label: "posiłki dziennie od cateringu", tone: "text-berry" },
];

const valueTones = ["bg-sun", "bg-mint", "bg-sky", "bg-rose"];
const dayTones = ["bg-peach", "bg-sky-soft", "bg-butter-soft", "bg-mint-soft", "bg-rose-soft", "bg-lavender"];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-y border-line bg-paper" aria-label="Zaufanie">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.value} className="scroll-rise">
              <p className={`font-display text-3xl ${item.tone}`}>{item.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="scroll-rise max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">Dwie placówki</p>
          <h2 className="mt-3 text-3xl text-ink md:text-5xl">Jedna kraina, dwa adresy w Skawinie.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Dziecko może zacząć u nas w żłobku i zostać do zerówki. Obie sale mają
            aktualne odbiory Sanepidu i Państwowej Straży Pożarnej.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {locations.map((place) => (
            <article key={place.id} id={place.id} className="scroll-rise">
              <div className="hover-lift h-full overflow-hidden rounded-[28px] border border-line bg-paper">
              <div className="relative aspect-[16/10]">
                <Image
                  src={place.image}
                  alt={place.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm font-semibold text-coral-deep">{place.ages}</p>
                <h3 className="mt-1 text-2xl">{place.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{place.blurb}</p>
                <p className="mt-4 text-sm font-semibold text-ink">
                  {place.street}, {place.city}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href={`/oferta#${place.id}`} variant="secondary">
                    Zobacz ofertę
                  </ButtonLink>
                </div>
              </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-teal-deep text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div className="scroll-rise">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sun">Co jest dla nas ważne</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Ciepło bez infantylności. Spokój bez nudy.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ["Bezpieczeństwo", "Małe grupy, znana kadra, odbiory sanitarne i przeciwpożarowe oraz standardy ochrony małoletnich."],
              ["Indywidualne tempo", "Rozwój idzie za potencjałem dziecka, nie za jedną tabelką dla wszystkich."],
              ["Nauka przez zabawę", "Podstawa programowa, plastyka, ruch i angielski — bez zniechęcania do szkoły."],
              ["Atmosfera domu", "Urodziny, wspólne święta i dzień, który dziecko potrafi rozpoznać."],
            ].map(([title, text], index) => (
              <li key={title} className="scroll-rise">
                <div className="hover-lift h-full rounded-3xl bg-white/10 p-5">
                <span className={`mb-3 block h-1.5 w-10 rounded-full ${valueTones[index]}`} />
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24" id="dzien">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="scroll-rise max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">W cenie opieki</p>
            <h2 className="mt-3 text-3xl text-ink md:text-5xl">Dzień, który da się opowiedzieć rodzicowi.</h2>
          </div>
          <ButtonLink href="/oferta" variant="secondary">
            Porównaj przedszkole i żłobek
          </ButtonLink>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, index) => (
            <li key={item.title} className="scroll-rise">
              <div className={`hover-lift h-full rounded-[24px] p-5 ${dayTones[index % dayTones.length]}`}>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">Godziny obu placówek: {hours}. Wpisowe i czesne podajemy podczas rozmowy telefonicznej.</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
        <div className="scroll-rise relative overflow-hidden rounded-[32px] bg-gradient-to-br from-peach via-butter-soft to-sky-soft px-6 py-10 md:px-12 md:py-14">
          <span className="float-slow pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-rose/40 blur-2xl" aria-hidden />
          <span className="float-mid pointer-events-none absolute bottom-0 left-10 h-20 w-20 rounded-full bg-mint/30 blur-2xl" aria-hidden />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h2 className="text-3xl text-ink md:text-5xl">Zapraszamy do kontaktu telefonicznego.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Nabór trwa cały rok. Wpisowe i czesne podajemy podczas rozmowy&nbsp;telefonicznej.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href="/kontakt">Przejdź do rekrutacji</ButtonLink>
              <ButtonLink href={phoneHref} variant="light">
                Zadzwoń · {phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-16 md:py-20">
          <h2 className="scroll-rise text-center text-3xl leading-snug md:text-4xl">
            Pytania, które rodzice zadają na początku
          </h2>
          <div className="scroll-rise mt-8 w-full max-w-2xl">
            {faqs.slice(0, 4).map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-lg font-semibold">
                  {item.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-peach text-coral-deep transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
