"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { phoneDisplay, phoneHref } from "@/lib/content";

export function MobileDock() {
  const pathname = usePathname();
  if (pathname === "/kontakt") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={phoneHref}
          className="rounded-full border border-line py-3 text-center text-sm font-semibold text-ink"
        >
          Zadzwoń
          <span className="sr-only"> {phoneDisplay}</span>
        </a>
        <Link
          href="/kontakt"
          className="rounded-full bg-teal-deep py-3 text-center text-sm font-semibold text-white"
        >
          Zapisz dziecko
        </Link>
      </div>
    </div>
  );
}
