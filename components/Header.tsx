"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X, Wrench } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

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
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const focusables = document.querySelectorAll<HTMLElement>(
          "#mobile-menu a, #mobile-menu button",
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      openBtnRef.current?.focus();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-line transition-all duration-200",
        scrolled ? "shadow-sm" : "shadow-none",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-all duration-200"
        style={{ height: scrolled ? 64 : 80 }}
      >
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded-md"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-ink">A-1 Handyman</span>
            <span className="text-xs text-muted">Sapulpa · Tulsa · Green Country</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2",
                  active
                    ? "text-navy bg-navy-50"
                    : "text-body hover:text-navy hover:bg-navy-50/60",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call {SITE.phone}</span>
          </a>
          <button
            ref={openBtnRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-lg border border-line text-navy hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 bg-navy-900 text-white lg:hidden"
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label={`${SITE.name} home`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber text-navy-900">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold">A-1 Handyman</span>
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile primary" className="px-6 py-8 flex flex-col gap-1">
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-4 text-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
                    active ? "bg-white/10 text-amber" : "text-white hover:bg-white/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={SITE.phoneHref}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-5 py-4 text-lg font-bold text-navy-900 shadow-md hover:brightness-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {SITE.phone}
            </a>
            <p className="mt-4 text-sm text-white/70">{SITE.hoursHuman}</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
