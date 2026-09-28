import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { formatDate, posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aktualności",
  description:
    "Kronika przedszkola i żłobka Bajkowa Kraina: zajęcia, święta, wycieczki i codzienne życie dzieci w Skawinie.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Aktualności"
        title="Co robią dzieci, kiedy Was nie ma w szatni."
        lead="Krótkie relacje z obu placówek. Te same wydarzenia, które od lat trafiają do kroniki — tu da się je przeczytać w minutę."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="hover-lift h-full overflow-hidden rounded-[28px] border border-line bg-paper">
                <Link href={`/aktualnosci/${post.slug}`} className="group block">
                  <span className="relative block aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </span>
                  <span className="block p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-coral-deep">
                      {post.place} · {formatDate(post.date)}
                    </span>
                    <h2 className="mt-2 text-2xl group-hover:text-teal-deep">{post.title}</h2>
                    <p className="mt-2 leading-relaxed text-muted">{post.excerpt}</p>
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
