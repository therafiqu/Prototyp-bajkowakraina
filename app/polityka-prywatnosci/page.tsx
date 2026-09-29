import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { phoneDisplay } from "@/lib/content";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacja o danych i plikach cookies na stronie Bajkowej Krainy.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Prywatność"
        title="Dane rodzica służą tylko do odpowiedzi."
      />
      <div className="scroll-rise mx-auto max-w-3xl space-y-5 px-5 py-14 text-lg leading-relaxed text-muted">
        <p>
          Administratorem danych placówki Bajkowa Kraina jest dyrekcja przedszkola i żłobka w Skawinie. Kontakt: {phoneDisplay}, przedszkole.radziszowska@op.pl, klub.radziszowska@op.pl.
        </p>
        <p>
          Na stronie nie ma formularza. Z dyrekcją kontaktujesz się telefonicznie albo mailowo — te dane nie są zbierane ani zapisywane przez witrynę.
        </p>
        <p>
          Plik cookies zapisuje wyłącznie wybór z banera: akceptacja albo same niezbędne. Nie uruchamiamy narzędzi reklamowych ani analitycznych.
        </p>
        <p>
          Masz prawo zapytać o swoje dane, poprawić je albo poprosić o usunięcie. W sprawie dziecka najszybciej zadzwonić do dyrekcji.
        </p>
      </div>
    </>
  );
}
