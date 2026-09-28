"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "bk-cookies";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function choose(value: "accepted" | "necessary") {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informacja o plikach cookies"
      className="fixed inset-x-3 bottom-[5.5rem] z-50 mx-auto max-w-3xl rounded-3xl border border-line bg-paper p-5 shadow-[0_20px_60px_-24px_rgba(36,48,46,0.45)] md:bottom-5"
    >
      <p className="font-display text-lg text-ink">Krótko o cookies</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Zapisujemy tylko Twój wybór dotyczący tej informacji. Nie włączamy
        reklamowych ani analitycznych plików, dopóki sam na to nie pozwolisz.
        Szczegóły są w{" "}
        <Link href="/polityka-prywatnosci" className="font-semibold text-teal-deep underline">
          polityce prywatności
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="rounded-full bg-teal-deep px-5 py-2.5 text-sm font-semibold text-white"
        >
          Akceptuję
        </button>
        <button
          type="button"
          onClick={() => choose("necessary")}
          className="rounded-full border border-line bg-cream px-5 py-2.5 text-sm font-semibold text-ink"
        >
          Tylko niezbędne
        </button>
      </div>
    </div>
  );
}
