"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { ButtonLink } from "@/components/Button";
import { StoryShapes } from "@/components/StoryShapes";
import { phoneDisplay, phoneHref } from "@/lib/content";

const EYEBROW = "Skawina · przedszkole i żłobek · od 2009";

const easeOut = [0.16, 1, 0.3, 1] as const;

function enterTransition(
  active: boolean,
  duration: number,
  delay = 0,
): Transition {
  if (!active) {
    return { duration: 0 };
  }
  return {
    duration,
    delay,
    ease: easeOut,
  };
}

function TypewriterLine({
  text,
  active,
  duration = 3,
  reduce,
}: {
  text: string;
  active: boolean;
  duration?: number;
  reduce: boolean | null;
}) {
  const [count, setCount] = useState(() => (reduce ? text.length : 1));

  useEffect(() => {
    if (reduce) {
      setCount(text.length);
      return;
    }

    if (!active) {
      setCount(1);
      return;
    }

    setCount(1);
    const start = performance.now();
    const ms = duration * 1000;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / ms);
      setCount(Math.max(1, Math.round(1 + progress * (text.length - 1))));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, reduce, text]);

  const visible = text.slice(0, count);
  const done = count >= text.length;

  return (
    <p
      className="text-sm font-semibold uppercase tracking-[0.16em] text-teal"
      aria-label={text}
    >
      <span aria-hidden="true">
        {visible}
        {!done && active && !reduce ? (
          <span className="ml-[1px] inline-block h-[0.95em] w-[0.08em] translate-y-[0.12em] bg-teal align-middle opacity-70" />
        ) : null}
      </span>
    </p>
  );
}

function CollagePiece({
  active,
  reduce,
  delay,
  from,
  className,
  children,
}: {
  active: boolean;
  reduce: boolean | null;
  delay: number;
  from: { x: string; y?: string };
  className?: string;
  children: React.ReactNode;
}) {
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0.4,
        x: from.x,
        y: from.y ?? "0%",
        scale: 0.93,
        filter: "blur(14px)",
      }}
      animate={
        active
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0.4,
              x: from.x,
              y: from.y ?? "0%",
              scale: 0.93,
              filter: "blur(14px)",
            }
      }
      transition={enterTransition(active, 3, delay)}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.28, once: false });
  const reduce = useReducedMotion();
  const active = Boolean(reduce || isInView);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <StoryShapes />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <TypewriterLine text={EYEBROW} active={active} reduce={reduce} />

          <motion.h1
            className="mt-4 origin-left text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl"
            initial={{
              opacity: reduce ? 1 : 0.2,
              scale: reduce ? 1 : 0.9,
              filter: reduce ? "blur(0px)" : "blur(5px)",
            }}
            animate={
              reduce || !active
                ? {
                    opacity: reduce ? 1 : 0.2,
                    scale: reduce ? 1 : 0.9,
                    filter: reduce ? "blur(0px)" : "blur(5px)",
                  }
                : {
                    opacity: [0.2, 1],
                    scale: [0.9, 1],
                    filter: ["blur(5px)", "blur(5px)", "blur(0px)"],
                  }
            }
            transition={
              reduce || !active
                ? { duration: 0 }
                : {
                    opacity: { duration: 4, ease: easeOut },
                    scale: { duration: 4, ease: easeOut },
                    filter: {
                      duration: 4,
                      times: [0, 0.75, 1],
                      ease: easeOut,
                    },
                  }
            }
          >
            Miejsce, w którym szczęście dziecka jest pierwszą zasadą.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
            initial={{ opacity: reduce ? 1 : 0.2 }}
            animate={{ opacity: active ? 1 : 0.2 }}
            transition={enterTransition(active, 4, 2)}
          >
            Kameralna opieka, stały rytm dnia i nauka przez zabawę. Dwie placówki
            w Skawinie — żłobek dla młodszych dzieci i przedszkole dla maluchów
            w wieku 2,5-6 lat.
          </motion.p>

          <motion.div
            className="mt-8 inline-flex w-fit max-w-full flex-col gap-3"
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={enterTransition(active, 7, 2)}
          >
            <ButtonLink href="/kontakt" className="w-full">
              Zapisz dziecko
            </ButtonLink>
            <p className="text-sm text-muted">
              Dyrekcja, zapisy i rekrutacja:{" "}
              <a href={phoneHref} className="font-semibold text-teal-deep">
                {phoneDisplay}
              </a>
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <CollagePiece
            active={active}
            reduce={reduce}
            delay={0}
            from={{ x: "48vw", y: "0%" }}
            className="relative"
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] shadow-[0_30px_70px_-36px_rgba(36,48,46,0.55)]">
              <div className="scroll-zoom absolute inset-[-10%]">
                <Image
                  src="/media/kalosze.jpg"
                  alt="Dzieci w kolorowych kaloszach po zabawie na dworze"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </CollagePiece>

          <CollagePiece
            active={active}
            reduce={reduce}
            delay={0.18}
            from={{ x: "48vw", y: "16%" }}
            className="absolute -left-3 bottom-8 hidden w-36 sm:block md:w-44"
          >
            <div className="parallax-y-rev">
              <div className="float-slow overflow-hidden rounded-2xl border-4 border-cream shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src="/media/muchomor.jpg"
                    alt="Dziewczynka maluje przy stole"
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CollagePiece>

          <CollagePiece
            active={active}
            reduce={reduce}
            delay={0.32}
            from={{ x: "36vw", y: "-24%" }}
            className="absolute right-2 top-2 sm:right-3 sm:top-3"
          >
            <div className="parallax-y">
              <div className="float-mid rounded-2xl bg-butter-soft/95 px-3 py-2 shadow-lg backdrop-blur [animation-delay:-1.5s] sm:px-4 sm:py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal sm:text-xs">
                  Opieka
                </p>
                <p className="font-display text-lg text-ink sm:text-2xl">
                  7:00–17:00
                </p>
                <p className="text-[10px] text-muted sm:text-xs">pon.–pt.</p>
              </div>
            </div>
          </CollagePiece>
        </div>
      </div>
    </section>
  );
}
