import Link from "next/link";

const styles = {
  primary:
    "bg-teal-deep text-white shadow-[0_12px_30px_-16px_rgba(14,74,69,0.85)] hover:bg-teal",
  secondary:
    "border border-line bg-paper text-ink hover:border-teal hover:text-teal-deep",
  light: "bg-paper text-teal-deep hover:bg-peach",
};

type Variant = keyof typeof styles;

export function buttonClass(variant: Variant = "primary", className = "") {
  return `hover-lift inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold ${styles[variant]} ${className}`;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const classNames = buttonClass(variant, className);
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    return (
      <a
        href={href}
        className={classNames}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
