"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { nav, phoneDisplay, phoneHref } from "@/lib/content";
import { buttonClass } from "./Button";

function active(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition ${
        scrolled || open
          ? "border-line bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-cream/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Główne">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(item.href, pathname) ? "page" : undefined}
              className={`text-[0.95rem] font-semibold ${
                active(item.href, pathname)
                  ? "text-teal-deep"
                  : "text-ink/80 hover:text-teal-deep"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={phoneHref}
            className="text-sm font-semibold text-ink hover:text-teal-deep"
          >
            {phoneDisplay}
          </a>
          <Link href="/rekrutacja" className={buttonClass("primary", "px-4 py-2.5 text-sm")}>
            Zapisz dziecko
          </Link>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-paper lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Zamknij menu" : "Otwórz menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className={`h-0.5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobilne"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-t border-line bg-paper lg:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobilne">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3 text-lg font-semibold text-ink hover:bg-cream"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/rekrutacja" className={`${buttonClass()} mt-3`}>
                Zapisz dziecko
              </Link>
              <a href={phoneHref} className={`${buttonClass("secondary")} mt-2`}>
                Zadzwoń · {phoneDisplay}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
