"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Place } from "@/lib/content";

export type GalleryItem = {
  src: string;
  alt: string;
  place: Place;
  caption: string;
  tall?: boolean;
};

const filters = ["Wszystkie", "Przedszkole", "Żłobek"] as const;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Wszystkie");
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible =
    filter === "Wszystkie" ? items : items.filter((item) => item.place === filter);
  const current = visible[index];

  useEffect(() => {
    setIndex(0);
  }, [filter]);

  function open(next: number) {
    setIndex(next);
    dialog.current?.showModal();
  }

  function close() {
    dialog.current?.close();
  }

  function step(direction: number) {
    setIndex((value) => (value + direction + visible.length) % visible.length);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtr galerii">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              filter === item ? "bg-teal-deep text-white" : "bg-paper text-ink border border-line"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, itemIndex) => (
          <li key={item.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(itemIndex)}
              className="group block w-full overflow-hidden rounded-[24px] bg-cream-deep text-left"
            >
              <span className={`relative block ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="font-semibold text-ink">{item.caption}</span>
                <span className="rounded-full bg-peach px-2.5 py-1 text-xs font-semibold text-coral-deep">
                  {item.place}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="w-[min(960px,calc(100%-2rem))] rounded-[28px] bg-paper p-3 text-ink backdrop:bg-ink/70"
        onClose={() => undefined}
      >
        {current ? (
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-cream">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-3">
              <p>
                <span className="font-semibold">{current.caption}</span>
                <span className="text-muted"> · {current.place}</span>
              </p>
              <div className="flex gap-2">
                <button type="button" className="rounded-full border border-line px-4 py-2 text-sm font-semibold" onClick={() => step(-1)}>
                  Poprzednie
                </button>
                <button type="button" className="rounded-full border border-line px-4 py-2 text-sm font-semibold" onClick={() => step(1)}>
                  Następne
                </button>
                <button type="button" className="rounded-full bg-teal-deep px-4 py-2 text-sm font-semibold text-white" onClick={close}>
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
