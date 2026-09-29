import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link href="/" className="group flex items-center gap-3 rounded-2xl">
      <Image
        src="/logo.png"
        alt=""
        width={197}
        height={197}
        priority
        className="h-11 w-11 shrink-0 object-contain"
      />
      <span className="leading-tight">
        <span
          className={`block font-display text-[1.05rem] font-semibold tracking-tight ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          Bajkowa Kraina
        </span>
        <span className={`block text-sm ${light ? "text-cream/75" : "text-muted"}`}>
          Przedszkole i żłobek
        </span>
      </span>
    </Link>
  );
}
