function Sun({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="12" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="30.2"
          y="4"
          width="3.6"
          height="10"
          rx="1.8"
          fill="currentColor"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
    </svg>
  );
}

function Star({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 1.6 14.7 8l6.7.6-5.1 4.4 1.6 6.5L12 16.2 6.1 19.5 7.7 13 2.6 8.6 9.3 8z"
      />
    </svg>
  );
}

function Cloud({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 88 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M28 40h40a14 14 0 0 0 1.2-28 18 18 0 0 0-34.4-4A13 13 0 0 0 28 40z"
      />
    </svg>
  );
}

export function StoryShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span className="drift absolute -left-16 -top-8 h-80 w-80 rounded-full bg-peach blur-2xl" />
      <span className="drift absolute -right-8 top-10 h-72 w-72 rounded-full bg-sky/50 blur-2xl [animation-delay:-5s]" />
      <span className="drift absolute bottom-6 left-[28%] h-56 w-56 rounded-full bg-butter/70 blur-2xl [animation-delay:-9s]" />
      <span className="drift absolute -bottom-8 right-[18%] h-52 w-52 rounded-full bg-mint/45 blur-2xl [animation-delay:-3s]" />
      <span className="drift absolute left-[8%] top-1/3 h-40 w-40 rounded-full bg-rose/45 blur-2xl [animation-delay:-7s]" />
      <Sun className="spin-slow absolute right-[18%] top-6 hidden h-20 w-20 text-butter drop-shadow-sm sm:block" />
      <Cloud className="float-slow absolute left-[4%] top-8 hidden h-12 w-20 text-sky drop-shadow-sm md:block" />
      <Star className="twinkle absolute left-[22%] top-[34%] h-6 w-6 text-rose" />
      <Star className="twinkle absolute right-[32%] top-24 hidden h-6 w-6 text-sky-deep [animation-delay:-1.2s] sm:block" />
      <Star className="twinkle absolute left-[46%] top-4 hidden h-5 w-5 text-coral [animation-delay:-2s] md:block" />
      <span className="float-mid absolute bottom-20 right-[7%] hidden h-5 w-5 rounded-full bg-mint sm:block" />
      <span className="float-slow absolute right-[8%] top-24 hidden h-4 w-4 rounded-full bg-rose [animation-delay:-2s] md:block" />
    </div>
  );
}
