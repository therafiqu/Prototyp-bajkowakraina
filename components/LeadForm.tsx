"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { phoneDisplay, phoneHref } from "@/lib/content";

type Intent = "rekrutacja" | "kontakt";

const field =
  "mt-1.5 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-teal focus:ring-4 focus:ring-teal/15";

export function LeadForm({ intent }: { intent: Intent }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const reduce = useReducedMotion();
  const recruitment = intent === "rekrutacja";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/zgloszenie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, intent }),
      });
      const payload = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        setStatus("error");
        setError(payload.error || "Nie udało się wysłać formularza. Zadzwoń do nas.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Brak połączenia. Zadzwoń pod 510 200 558.");
    }
  }

  return (
    <div className="rounded-[28px] border border-line bg-paper p-6 shadow-[0_24px_60px_-36px_rgba(36,48,46,0.45)] md:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
        {recruitment ? "Zgłoszenie dziecka" : "Napisz do nas"}
      </p>
      <h2 className="mt-2 text-2xl text-ink">
        {recruitment ? "Oddzwonimy i powiemy, czy jest miejsce" : "Pytanie, odwiedziny, rekrutacja"}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Krótki formularz. Albo od razu{" "}
        <a href={phoneHref} className="font-semibold text-teal-deep">
          {phoneDisplay}
        </a>
        .
      </p>

      <AnimatePresence mode="wait">
        {status === "ok" ? (
          <motion.p
            key="ok"
            role="status"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-2xl bg-peach px-4 py-4 text-sm leading-relaxed text-ink"
          >
            Dziękujemy. Zgłoszenie zostało zapisane w tej wersji demonstracyjnej
            i nie trafia jeszcze na skrzynkę placówki. Aby porozmawiać z
            dyrekcją od razu, zadzwoń:{" "}
            <a href={phoneHref} className="font-semibold">
              {phoneDisplay}
            </a>
            .
          </motion.p>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
              <label>
                Firma
                <input name="firma" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <label className="block text-sm font-semibold">
              Imię i nazwisko rodzica
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold">
                Telefon
                <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" className={field} placeholder="510 200 558" />
              </label>
              <label className="block text-sm font-semibold">
                E-mail
                <input name="email" required type="email" autoComplete="email" className={field} />
              </label>
            </div>
            <label className="block text-sm font-semibold">
              Placówka
              <select name="facility" required={recruitment} defaultValue={recruitment ? "przedszkole" : ""} className={field}>
                {recruitment ? null : <option value="">Dowolna / jeszcze nie wiem</option>}
                <option value="przedszkole">Przedszkole · ul. 29 Listopada</option>
                <option value="zlobek">Żłobek · ul. Radziszowska</option>
                <option value="niewiem">Jeszcze nie wiem</option>
              </select>
            </label>
            {recruitment ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Rok urodzenia dziecka
                  <select name="childYear" required defaultValue="2023" className={field}>
                    {Array.from({ length: 7 }, (_, index) => 2026 - index).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-semibold">
                  Kiedy start?
                  <select name="start" required defaultValue="jak-najszybciej" className={field}>
                    <option value="jak-najszybciej">Jak najszybciej</option>
                    <option value="nowy-miesiac">Od nowego miesiąca</option>
                    <option value="wrzesien">Od września</option>
                    <option value="pozniej">Później, chcę zapytać</option>
                  </select>
                </label>
              </div>
            ) : null}
            <label className="block text-sm font-semibold">
              {recruitment ? "Wiadomość (opcjonalnie)" : "Wiadomość"}
              <textarea
                name="message"
                required={!recruitment}
                rows={4}
                className={field}
                placeholder={recruitment ? "Np. dieta, adaptacja, rodzeństwo w placówce." : "W czym możemy pomóc?"}
              />
            </label>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-teal-deep" />
              <span>
                Zgadzam się na kontakt w sprawie tego zgłoszenia. Dane służą tylko do odpowiedzi.
              </span>
            </label>
            {status === "error" ? (
              <p role="alert" className="text-sm font-semibold text-coral-deep">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-teal-deep px-5 py-3.5 text-base font-semibold text-white disabled:opacity-60"
            >
              {status === "sending" ? "Wysyłam…" : recruitment ? "Poproś o kontakt" : "Wyślij wiadomość"}
            </button>
            <p className="text-center text-xs leading-relaxed text-muted">
              Wersja demonstracyjna zapisuje zgłoszenie lokalnie i nie wysyła go e-mailem do placówki.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
