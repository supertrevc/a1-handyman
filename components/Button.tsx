import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "amber";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const sizes = {
  md: "px-5 py-3 text-base",
  lg: "px-6 py-3.5 text-base",
  xl: "px-7 py-4 text-lg",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-red text-white shadow-md hover:bg-red-700 hover:shadow-lg active:translate-y-px",
  secondary:
    "bg-white text-navy border border-navy/15 shadow-sm hover:border-navy/40 hover:shadow-md",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
  amber:
    "bg-amber text-navy-900 shadow-md hover:brightness-95 hover:shadow-lg active:translate-y-px",
};

interface BaseProps {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  ...rest
}: BaseProps & {
  href?: string;
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, sizes[size], variants[variant], className);
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {rest.children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {rest.children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {rest.children}
    </button>
  );
}
