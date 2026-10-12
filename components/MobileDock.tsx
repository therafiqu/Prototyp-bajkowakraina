"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { phoneDisplay, phoneHref } from "@/lib/content";

export function MobileDock() {
  const pathname = usePathname();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (pathname === "/kontakt") return;

    setRevealed(false);

    const hero = document.querySelector<HTMLElement>("main > section");
    if (!hero) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.bottom <= 0) {
          setRevealed(true);
        }
      },
      { threshold: 0 },
    );

    observer.observe(hero);

    const checkPast = () => {
      if (hero.getBoundingClientRect().bottom <= 0) {
        setRevealed(true);
      }
    };
    checkPast();

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/kontakt") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden ${
        revealed ? "mobile-dock-reveal" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!revealed}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={phoneHref}
          tabIndex={revealed ? undefined : -1}
          className="rounded-full border border-line py-3 text-center text-sm font-semibold text-ink"
        >
          Zadzwoń
          <span className="sr-only"> {phoneDisplay}</span>
        </a>
        <Link
          href="/kontakt"
          tabIndex={revealed ? undefined : -1}
          className="rounded-full bg-teal-deep py-3 text-center text-sm font-semibold text-white"
        >
          Zapisz dziecko
        </Link>
      </div>
    </div>
  );
}
