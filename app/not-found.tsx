import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">404</p>
      <h1 className="mt-3 text-4xl text-ink md:text-5xl">Tej strony tu nie ma</h1>
      <p className="mt-4 text-lg text-muted">
        Adres mógł się zmienić. Wróć na stronę główną albo przejdź od razu do rekrutacji.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Strona główna</ButtonLink>
        <ButtonLink href="/rekrutacja" variant="secondary">
          Zapisz dziecko
        </ButtonLink>
      </div>
    </section>
  );
}
