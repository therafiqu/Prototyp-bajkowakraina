import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { documents, faqs, hours, locations, phoneDisplay, phoneHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rekrutacja",
  description:
    "Zapisz dziecko do Bajkowej Krainy w Skawinie. Nabór przez cały rok, wpisowe 500 zł, telefon dyrekcji 510 200 558.",
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
    text: "Podpisujemy umowę i przyjmujemy 500 zł wpisowego. Od tej chwili miejsce jest Wasze na cały rok.",
  },
  {
    n: "04",
    title: "Adaptacja",
    text: "Wejście w nowy rytm ustalamy z Wami. We wrześniu i w trakcie roku — zawsze indywidualnie.",
  },
];

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Rekrutacja  ·  nabór ciągły"
        title="Zadzwoń. Powiemy, czy jest miejsce."
        lead="Miejsce jest, albo mówimy wprost, że trzeba poczekać. Nabór do przedszkola i żłobka trwa cały rok — także w trakcie roku szkolnego."
      >
        <a href={phoneHref} className="inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 font-semibold text-teal-deep shadow-sm">
          Zadzwoń teraz · {phoneDisplay}
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.n} className="scroll-rise">
              <div className="hover-lift grid h-full grid-cols-[auto_1fr] gap-4 rounded-[24px] border border-line bg-paper p-5">
              <span className={`font-display text-2xl ${["text-coral", "text-sky-deep", "text-mint-deep", "text-berry"][index]}`}>
                {step.n}
              </span>
              <div>
                <h2 className="text-xl">{step.title}</h2>
                <p className="mt-1 leading-relaxed text-muted">{step.text}</p>
              </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {locations.map((place) => (
            <article key={place.id} className={`scroll-rise rounded-[24px] p-5 ${place.id === "przedszkole" ? "bg-sky-soft" : "bg-peach"}`}>
              <h3 className="text-xl">{place.place}</h3>
              <p className="mt-1 text-sm text-muted">{place.ages}</p>
              <p className="mt-3 text-sm font-semibold">
                {place.street}
                <br />
                {place.city}
              </p>
              <p className="mt-2 text-sm text-muted">{hours}</p>
              <a href={`mailto:${place.email}`} className="mt-2 block text-sm font-semibold text-teal-deep">
                {place.email}
              </a>
            </article>
          ))}
        </div>

        <div className="scroll-rise mt-8 rounded-[28px] border border-line bg-paper p-6">
          <h2 className="text-2xl">Co warto wiedzieć przed podpisem</h2>
          <ul className="mt-4 space-y-3 leading-relaxed text-muted">
            <li>Wpisowe 500 zł jest jednorazowe i bezzwrotne. Obejmuje miejsce na rok, wyprawkę plastyczną oraz podstawową higienę.</li>
            <li>Czesne obejmuje opiekę 7:00–17:00, zajęcia zgodne z podstawą programową, plastykę, angielski raz w tygodniu i pomoce. Kwotę podajemy telefonicznie.</li>
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
    </>
  );
}
