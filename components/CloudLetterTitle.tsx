import Image from "next/image";

/** Colors sampled / sequenced from the original chmura graphic. */
const TILE_COLORS = [
  "#d8003c", // P
  "#0084c0", // R
  "#a8c00c", // Z
  "#fcc000", // E
  "#a8c00c", // D
  "#9c3c78", // S
  "#fcc000", // Z
  "#a8c00c", // K
  "#d8003c", // O
  "#fcc000", // L
  "#0084c0", // E
  "#9c3c78", // I
  "#d8003c", // Ż
  "#0084c0", // Ł
  "#a8c00c", // O
  "#fcc000", // B
  "#9c3c78", // E
  "#a8c00c", // K
] as const;

const TILTS = [-7, 5, -4, 8, -6, 3, -8, 6, -3, 7, -5, 4, -6, 8, -4, 5, -7, 3] as const;

type Line = readonly (string | null)[];

const LINE_TOP: Line = [..."PRZEDSZKOLE"];
const LINE_BOTTOM: Line = ["I", null, ..."ŻŁOBEK"];

function LetterTile({
  letter,
  index,
  sizeClass,
}: {
  letter: string;
  index: number;
  sizeClass: string;
}) {
  const color = TILE_COLORS[index] ?? TILE_COLORS[index % 5];
  const tilt = TILTS[index % TILTS.length];

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-[0.18em] font-serif font-bold leading-none text-white shadow-[0_2px_0_rgba(0,0,0,0.12)] ${sizeClass}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${tilt}deg)`,
        marginInline: "-0.06em",
        zIndex: index,
      }}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}

function LetterLine({
  letters,
  startIndex,
  sizeClass,
}: {
  letters: Line;
  startIndex: number;
  sizeClass: string;
}) {
  let colorIndex = startIndex;

  return (
    <span className="flex items-center justify-center">
      {letters.map((letter, i) => {
        if (letter === null) {
          return (
            <span
              key={`gap-${i}`}
              className="inline-block w-[0.35em]"
              style={{ fontSize: "inherit" }}
              aria-hidden="true"
            />
          );
        }

        const tile = (
          <LetterTile
            key={`${letter}-${i}`}
            letter={letter}
            index={colorIndex}
            sizeClass={sizeClass}
          />
        );
        colorIndex += 1;
        return tile;
      })}
    </span>
  );
}

export function CloudLetterTitle({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${className}`}
      role="img"
      aria-label="Przedszkole i żłobek"
    >
      <Image
        src="/media/przedszkole-chmura-tlo.png"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 480px, 90vw"
        className="object-contain"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-[0.28em] px-4 py-8 text-[clamp(1.05rem,4.8vw,2.15rem)] sm:gap-[0.32em] sm:px-6 sm:py-10 sm:text-[clamp(1.25rem,3.2vw,2.35rem)]">
        <LetterLine
          letters={LINE_TOP}
          startIndex={0}
          sizeClass="h-[1.12em] w-[1.02em] text-[0.9em]"
        />
        <LetterLine
          letters={LINE_BOTTOM}
          startIndex={LINE_TOP.length}
          sizeClass="h-[1.12em] w-[1.02em] text-[0.9em]"
        />
      </div>
    </div>
  );
}
