import Link from "next/link";

export function Logo({
  compact = false,
  tone = "dark",
}: {
  compact?: boolean;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <Link href="/" className="group flex items-center gap-3 rounded-2xl">
      <span
        className={`grid h-11 w-11 place-items-center rounded-2xl shadow-[0_8px_20px_-12px_rgba(14,74,69,0.9)] ${
          light ? "bg-sun text-teal-deep" : "bg-teal-deep text-sun"
        }`}
      >
        <svg viewBox="0 0 32 32" className="spin-slow h-7 w-7" aria-hidden>
          <circle cx="16" cy="16" r="5" fill="currentColor" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect
              key={deg}
              x="15.1"
              y="3.2"
              width="1.8"
              height="4.2"
              rx="0.9"
              fill="currentColor"
              transform={`rotate(${deg} 16 16)`}
            />
          ))}
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[1.05rem] font-semibold tracking-tight ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          Bajkowa Kraina
        </span>
        {compact ? null : (
          <span className={`block text-sm ${light ? "text-cream/75" : "text-muted"}`}>
            Przedszkole i żłobek
          </span>
        )}
      </span>
    </Link>
  );
}
