import Link from "next/link";
import { Home, ArrowRight, Phone, Wrench } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-soft min-h-[80vh]">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-navy text-white shadow-md">
          <Wrench className="h-10 w-10" aria-hidden="true" />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-red">
          404 — Page not found
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
          Looks like we can&apos;t find that page.
        </h1>
        <p className="mt-5 text-lg text-body">
          Maybe a bad link or a typo in the URL. The good news is we&apos;re really hard to
          lose track of — try one of the pages below or give us a call.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-red-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/20 bg-white px-6 py-3.5 text-base font-semibold text-navy hover:border-navy/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {SITE.phone}
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-white p-7 text-left shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">
            Popular pages
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-navy hover:text-red transition"
                >
                  {s.title}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-1.5 text-navy hover:text-red transition"
              >
                Service Areas
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-navy hover:text-red transition"
              >
                Contact
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
