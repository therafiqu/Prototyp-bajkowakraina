import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { formatDate, getPost, posts } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Aktualność" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const index = posts.findIndex((item) => item.slug === post.slug);
  const previous = posts[(index - 1 + posts.length) % posts.length];
  const next = posts[(index + 1) % posts.length];

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
        {post.place} · {formatDate(post.date)}
      </p>
      <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
      <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[28px]">
        <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" sizes="(min-width: 768px) 720px, 100vw" />
      </div>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href="/kontakt">Zapisz dziecko</ButtonLink>
      </div>
      <div className="scroll-rise mt-12 border-t border-line pt-8">
        <h2 className="text-2xl">Dalej w kronice</h2>
        <ul className="mt-4 space-y-3">
          <li>
            <Link href={`/aktualnosci/${previous.slug}`} className="font-semibold text-teal-deep">
              Poprzednie
            </Link>
          </li>
          <li>
            <Link href={`/aktualnosci/${next.slug}`} className="font-semibold text-teal-deep">
              Następne
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
